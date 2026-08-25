type SoundType =
  | "click"
  | "eloqClick"
  | "open"
  | "close"
  | "success"
  | "negative"
  | "correctAnswer"
  | "wrongAnswer";

const SOUND_PATHS: Record<SoundType, string> = {
  click: "/sounds/click.wav",
  eloqClick: "/sounds/eloq-click.wav",
  open: "/sounds/open.wav",
  close: "/sounds/close.wav",
  success: "/sounds/success.wav",
  negative: "/sounds/error.wav",
  correctAnswer: "/sounds/success/correct-answer-reward.wav",
  wrongAnswer: "/sounds/wrong-answer.wav",
};

// تخزين البلاطات الصوتية في الذاكرة RAM لعدم إعادة جلبها
const soundBuffers = new Map<SoundType, AudioBuffer>();
let audioCtx: AudioContext | null = null;

const getAudioContext = () => {
  if (!audioCtx && typeof window !== "undefined") {
    const AudioCtxClass =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (AudioCtxClass) {
      audioCtx = new AudioCtxClass();
    }
  }
  return audioCtx;
};

// دالة تحميل وتفكيك الصوت المخصص ووضعه في الذاكرة
const loadSoundBuffer = async (type: SoundType): Promise<AudioBuffer | null> => {
  if (soundBuffers.has(type)) {
    return soundBuffers.get(type)!;
  }

  const ctx = getAudioContext();
  if (!ctx) return null;

  try {
    const response = await fetch(SOUND_PATHS[type]);
    const arrayBuffer = await response.arrayBuffer();
    const audioBuffer = await ctx.decodeAudioData(arrayBuffer);
    
    soundBuffers.set(type, audioBuffer);
    return audioBuffer;
  } catch {
    return null;
  }
};

export const playUISound = async (type: SoundType = "click", volume = 0.25) => {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    // تفعيل محرك الصوت في حال تم إيقافه مؤقتاً من المتصفح
    if (ctx.state === "suspended") {
      await ctx.resume();
    }

    const buffer = await loadSoundBuffer(type);
    if (!buffer) return;

    // إنشاء عقدة الصوت وتطبيق خفض الصوت ثم التشغيل الفوري
    const source = ctx.createBufferSource();
    const gainNode = ctx.createGain();

    source.buffer = buffer;
    gainNode.gain.value = volume;

    source.connect(gainNode);
    gainNode.connect(ctx.destination);

    source.start(0);
  } catch {
    // تجنب أخطاء المتصفح عند الضغط المبكر
  }
};




/*type SoundType = "click" | "open" | "close" | "success" | "negative" | "correctAnswer" | "wrongAnswer";

const SOUND_PATHS: Record<SoundType, string> = {
  click: "/sounds/click.wav",
  eloqClick: "/sounds/eloq-click.wav",
  open: "/sounds/open.wav",
  close: "/sounds/close.wav",
  success: "/sounds/success.wav",
  negative: "/sounds/error.wav",
  correctAnswer: "/sounds/success/correct-answer-reward.wav",
  wrongAnswer: "/sounds/wrong-answer.wav",
};

export const playUISound = (type: SoundType = "click", volume = 0.25) => {
  try {
    const audio = new Audio(SOUND_PATHS[type]);
    audio.volume = volume;
    audio.currentTime = 0; // إعادة الصوت للبداية فوراً للضغطات السريعة المتكررة
    audio.play().catch(() => {
      // تجنب أخطاء حظر التشغيل التلقائي من المتصفح
    });
  } catch {
    // تجاهل البيئات التي لا تدعم تشغيل الصوت
  }
};
*/