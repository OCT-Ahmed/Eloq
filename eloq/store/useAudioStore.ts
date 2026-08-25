import { create } from 'zustand';

interface AudioStore {
  audioUrl: string | null;
  isPlaying: boolean;
  speed: number;
  isMuted: boolean;
  audioInstance: HTMLAudioElement | null;

  // إجراءات التحكم
  playBlockAudio: (url: string) => void;
  togglePlay: () => void;
  stopAndReset: () => void;
  setSpeed: (speed: number) => void;
  toggleMute: () => void;
}

export const useAudioStore = create<AudioStore>((set, get) => ({
  audioUrl: null,
  isPlaying: false,
  speed: 1,
  isMuted: false,
  audioInstance: null,

  // تشغيل صوت البلوك أو إيقافه وإعادتة للبداية عند ضغطه مجدداً
  playBlockAudio: (url: string) => {
    const { audioInstance, audioUrl, isPlaying, speed, isMuted } = get();

    // 1. إذا نُقر نفس الصوت وهو يعمل حالياً -> أوقفه وأعده للثانية 0
    if (audioUrl === url && isPlaying && audioInstance) {
      audioInstance.pause();
      audioInstance.currentTime = 0;
      set({ isPlaying: false });
      return;
    }

    // 2. إذا كان هناك صوت سابق يعمل -> أوقفه ونظف الذاكرة
    if (audioInstance) {
      audioInstance.pause();
    }

    // 3. إنشاء وتشغيل الصوت الجديد من البداية دائماً (0s)
    const newAudio = new Audio(url);
    newAudio.playbackRate = speed;
    newAudio.muted = isMuted;

    newAudio.onplay = () => set({ isPlaying: true });
    newAudio.onpause = () => set({ isPlaying: false });
    newAudio.onended = () => {
      newAudio.currentTime = 0;
      set({ isPlaying: false });
    };

    newAudio.onerror = () => {
      console.warn("تعذر تحميل ملف الصوت:", url);
      set({ isPlaying: false });
    };

    newAudio.play().catch(() => set({ isPlaying: false }));

    set({
      audioUrl: url,
      audioInstance: newAudio,
      isPlaying: true,
    });
  },

  // تشغيل / إيقاف من شريط الأدوات
  togglePlay: () => {
    const { audioInstance, isPlaying } = get();
    if (!audioInstance) return;

    if (isPlaying) {
      audioInstance.pause();
    } else {
      audioInstance.play().catch(() => {});
    }
  },

  // إعادة للبداية
  stopAndReset: () => {
    const { audioInstance } = get();
    if (!audioInstance) return;
    audioInstance.currentTime = 0;
    audioInstance.play().catch(() => {});
  },

  // تغيير السرعة
  setSpeed: (speed: number) => {
    const { audioInstance } = get();
    if (audioInstance) {
      audioInstance.playbackRate = speed;
    }
    set({ speed });
  },

  // الكتم
  toggleMute: () => {
    const { audioInstance, isMuted } = get();
    const nextMute = !isMuted;
    if (audioInstance) {
      audioInstance.muted = nextMute;
    }
    set({ isMuted: nextMute });
  },
}));
