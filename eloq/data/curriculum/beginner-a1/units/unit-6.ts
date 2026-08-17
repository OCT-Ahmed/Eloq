import { UnitType } from "@/types/learning";

// ============================================================================
// UNIT 6: Daily Rhythm (الجزء 1 من 3)
// ============================================================================

export const unit_6: UnitType = {
  id: "unit_6",
  title: {
    en: "Daily Rhythm",
    ar: "إيقاع اليوم",
  },
  slug: "daily-rhythm",
  overview: {
    summary: {
      en: "Learn to describe daily routines for he/she, tell time accurately, use frequency adverbs, master prepositions of time (in, on, at), and talk about weekly schedules.",
      ar: "تعلم وصف الروتين اليومي للضمائر (هو / هي)، إخبار الوقت بدقة بالإنجليزية، استخدام ظروف التكرار، إتقان حروف الجر الخاصة بالوقت (in, on, at)، والتحدث عن الجدول الأسبوعي.",
    },
    learningObjectives: [
      {
        en: "Describe daily routines using Present Simple (he / she / it)",
        ar: "وصف الروتين اليومي باستخدام المضارع البسيط للضمائر (هو / هي)",
      },
      {
        en: "Tell the time accurately in English (o'clock, half past, quarter to/past)",
        ar: "إخبار الوقت بدقة باللغة الإنجليزية",
      },
      {
        en: "Use frequency adverbs (always, sometimes, never) to describe habit consistency",
        ar: "استخدام ظروف التكرار (دائماً، أحياناً، أبداً) لوصف مدى انتظام العادات",
      },
      {
        en: "Apply prepositions of time correctly (in, on, at)",
        ar: "استخدام حروف الجر الخاصة بالوقت (in, on, at) بشكل صحيح",
      },
      {
        en: "Talk about days of the week and plan weekly schedules",
        ar: "التحدث عن أيام الأسبوع والتخطيط للجداول الأسبوعية",
      },
    ],
    keyVocabulary: [
      "wakes up",
      "starts",
      "finishes",
      "o'clock",
      "half past",
      "quarter",
      "always",
      "sometimes",
      "never",
      "morning",
      "evening",
      "Friday",
    ],
    grammarFocus: [
      "Present Simple 3rd Person Singular (He / She / It + verb + s/es)",
      "Telling time: 'What time is it?' / 'It is...'",
      "Frequency Adverbs positioning (Subject + Adverb + Verb)",
      "Prepositions of time: 'at' (times), 'on' (days), 'in' (parts of day/months)",
    ],
    skills: ["speaking", "listening", "reading", "vocabulary", "grammar"],
    prerequisites: ["unit_5"],
  },
  lessons: [
    // ------------------------------------------------------------------------
    // LESSON 1: Daily Routines (He / She)
    // ------------------------------------------------------------------------
    {
      id: "lesson_6_1",
      title: {
        en: "Daily Routines (He / She)",
        ar: "الروتين اليومي (هو / هي)",
      },
      slug: "daily-routines-he-she",
      description: {
        en: "Learn how to describe what another person does every day using the Present Simple third-person singular.",
        ar: "تعلم كيفية وصف الأنشطة والروتين اليومي لشخص آخر باستخدام المضارع البسيط المفرد.",
      },
      rules: {
        maxErrors: 3,
        passingScorePercentage: 80,
        completionRule: {
          type: "all_required_blocks",
        },
        scoringRule: {
          type: "sum",
        },
      },
      rewards: {
        completionXp: 50,
        maxXp: 100,
        bonusRules: [
          {
            type: "no_errors",
            xp: 20,
          },
        ],
      },
      blocks: [
        {
          id: "b_l6_1_1",
          type: "word_list",
          isActive: true,
          purpose: "vocabulary_presentation",
          extensions: {
            title: {
              text: {
                en: "Third-Person Routine Verbs",
                ar: "أفعال الروتين للمفرد الغائب",
              },
            },
            instruction: {
              text: {
                en: "Observe how verbs add '-s' or '-es' when talking about He or She.",
                ar: "لاحظ إضافة حرف '-s' أو '-es' للفعل عند الحديث عن (He) أو (She).",
              },
            },
          },
          data: {
            words: [
              {
                id: "w_6_1_1",
                word: "Wakes up / Gets up",
                definition: "To stop sleeping / to leave the bed",
                example: "He wakes up early every day.",
              },
              {
                id: "w_6_1_2",
                word: "Starts / Finishes",
                definition: "To begin an activity / to end an activity",
                example: "She starts work at 8 AM and finishes at 4 PM.",
              },
              {
                id: "w_6_1_3",
                word: "Teaches / Studies",
                definition: "To give instruction / to learn or review materials",
                example: "His father teaches English. She studies design.",
              },
            ],
          },
        },
        {
          id: "b_l6_1_2",
          type: "dialogue",
          isActive: true,
          purpose: "contextual_presentation",
          extensions: {
            instruction: {
              text: {
                en: "Listen to Ahmed and Artem talking about their friends' daily work and study schedules.",
                ar: "استمع إلى أحمد وأرتم وهما يتحدثان عن جدول الأعمال والدراسة اليومي لأصدقائهما.",
              },
            },
          },
          data: {
            lines: [
              {
                id: "dl_6_1_1",
                speakerId: "artem",
                speaker: "Artem",
                text: "Hey Ahmed! What does your younger brother do every morning?",
              },
              {
                id: "dl_6_1_2",
                speakerId: "ahmed",
                speaker: "Ahmed",
                text: "He wakes up early, eats breakfast, and then goes to school.",
              },
              {
                id: "dl_6_1_3",
                speakerId: "artem",
                speaker: "Artem",
                text: "That is great! And what about your colleague Faisal?",
              },
              {
                id: "dl_6_1_4",
                speakerId: "ahmed",
                speaker: "Ahmed",
                text: "Faisal starts work at 9 AM. He builds UI components and drinks coffee all morning!",
              },
              {
                id: "dl_6_1_5",
                speakerId: "artem",
                speaker: "Artem",
                text: "Does he practice sports after work?",
              },
              {
                id: "dl_6_1_6",
                speakerId: "ahmed",
                speaker: "Ahmed",
                text: "Yes! He plays football twice a week with our team.",
              },
            ],
          },
        },
        {
          id: "b_l6_1_3",
          type: "grammar_point",
          isActive: true,
          purpose: "grammar_explanation",
          extensions: {
            title: {
              text: {
                en: "Present Simple: He / She / It (+s/-es)",
                ar: "المضارع البسيط: مع المفرد الغائب (He / She / It)",
              },
            },
            explanation: {
              en: "• Affirmative: Add '-s' or '-es' to the base verb.\n  - 'He plays football.'\n  - 'She teaches English.'\n  - 'It starts at 7 PM.'\n\n• Negative: Use 'doesn't' + Base Verb (remove the -s).\n  - 'He doesn't like fast food.'\n  - 'She doesn't work on Sundays.'",
              ar: "• الإثبات: نضيف '-s' أو '-es' لنهاية الفعل مع (He, She, It):\n  - 'He plays football.' (هو يلعب كرة القدم)\n  - 'She teaches English.' (هي تُدرّس الإنجليزية)\n\n• النفي: نستخدم 'doesn't' ويعود الفعل لأصله بدون زيادة:\n  - 'He doesn't work late.' (هو لا يعمل متأخراً)",
            },
          },
          data: {
            text: "Examples:\n• He wakes up at 6 AM.\n• She doesn't drink tea.\n• He works in Sakaka.",
          },
        },
        {
          id: "b_l6_1_4",
          type: "matching",
          isActive: false, // معطل تفاعلياً حسب التوجيهات
          purpose: "third_person_verb_matching",
          extensions: {
            instruction: {
              text: {
                en: "Match the subject and verb phrase correctly.",
                ar: "صل الفاعل بالعبارة الفعلية المناسبة له.",
              },
            },
          },
          data: {
            items: [
              {
                id: "m_6_1_1",
                left: "He",
                right: "wakes up early.",
                points: 1,
              },
              {
                id: "m_6_1_2",
                left: "She",
                right: "teaches English.",
                points: 1,
              },
              {
                id: "m_6_1_3",
                left: "Faisal doesn't",
                right: "work on Friday.",
                points: 1,
              },
            ],
          },
        },
        {
          id: "b_l6_1_5",
          type: "fill_blanks",
          isActive: true,
          purpose: "controlled_practice",
          extensions: {
            instruction: {
              text: {
                en: "Fill in the missing verb forms: [ starts, plays, doesn't ]",
                ar: "أكمل الفراغات بصيغ الأفعال المناسبة: [ starts, plays, doesn't ]",
              },
            },
          },
          data: {
            items: [
              {
                id: "fb_6_1_1",
                text: "My brother _____ football every Friday evening.",
                answer: "plays",
                points: 1,
              },
              {
                id: "fb_6_1_2",
                text: "The course _____ at 5 o'clock.",
                answer: "starts",
                points: 1,
              },
              {
                id: "fb_6_1_3",
                text: "She _____ drink coffee late at night.",
                answer: "doesn't",
                points: 1,
              },
            ],
          },
        },
        {
          id: "b_l6_1_6",
          type: "free_practice",
          isActive: true,
          purpose: "production",
          extensions: {
            title: {
              text: {
                en: "Describe Someone's Routine",
                ar: "صف روتين شخص آخر",
              },
            },
            instruction: {
              text: {
                en: "Write two sentences describing what a friend or relative does every day.",
                ar: "اكتب جملتين تصف فيهما ما يفعله صديق أو قريب لك يومياً.",
              },
            },
            tip: {
              icon: "lightbulb",
              text: {
                en: "Example: My friend wakes up at 7 AM. He works in an office.",
                ar: "مثال: My friend wakes up at 7 AM. He works in an office.",
              },
            },
          },
          data: {
            text: "Write 2 sentences about another person's routine.\nExample: My brother plays football. He studies every afternoon.",
          },
        },
      ],
    },

    // ------------------------------------------------------------------------
    // LESSON 2: Telling the Time
    // ------------------------------------------------------------------------
    {
      id: "lesson_6_2",
      title: {
        en: "Telling the Time",
        ar: "إخبار الوقت",
      },
      slug: "telling-the-time",
      description: {
        en: "Learn how to ask 'What time is it?' and express exact times, half hours, and quarters clearly.",
        ar: "تعلم كيفية السؤال عن الوقت '?What time is it' والتعبير عن الساعات الكاملة والنصُف والربع بوضوح.",
      },
      rules: {
        maxErrors: 3,
        passingScorePercentage: 80,
        completionRule: {
          type: "all_required_blocks",
        },
        scoringRule: {
          type: "sum",
        },
      },
      rewards: {
        completionXp: 50,
        maxXp: 100,
        bonusRules: [
          {
            type: "no_errors",
            xp: 20,
          },
        ],
      },
      blocks: [
        {
          id: "b_l6_2_1",
          type: "word_list",
          isActive: true,
          purpose: "vocabulary_presentation",
          extensions: {
            title: {
              text: {
                en: "Time Phrases",
                ar: "تعبيرات الوقت",
              },
            },
            instruction: {
              text: {
                en: "Study core vocabulary used when reading the clock.",
                ar: "ادرس المفردات الأساسية المستخدمة عند قراءة الساعة.",
              },
            },
          },
          data: {
            words: [
              {
                id: "w_6_2_1",
                word: "O'clock",
                definition: "Used to express full hours",
                example: "It is 7 o'clock in the morning.",
              },
              {
                id: "w_6_2_2",
                word: "Half past / 30",
                definition: "30 minutes after the hour",
                example: "It is half past six (6:30).",
              },
              {
                id: "w_6_2_3",
                word: "Quarter past / Quarter to",
                definition: "15 minutes after / 15 minutes before the hour",
                example: "It is quarter past eight (8:15). It is quarter to nine (8:45).",
              },
            ],
          },
        },
        {
          id: "b_l6_2_2",
          type: "dialogue",
          isActive: true,
          purpose: "contextual_presentation",
          extensions: {
            instruction: {
              text: {
                en: "Listen to Ahmed checking the time with his friend Youssef before their evening training session.",
                ar: "استمع إلى أحمد وهو يستفسر عن الوقت مع صديقه يوسف قبل حصة التدريب المسائية.",
              },
            },
          },
          data: {
            lines: [
              {
                id: "dl_6_2_1",
                speakerId: "ahmed",
                speaker: "Ahmed",
                text: "Excuse me Youssef, what time is it now?",
              },
              {
                id: "dl_6_2_2",
                speakerId: "youssef",
                speaker: "Youssef",
                text: "It is exactly half past five (5:30 PM).",
              },
              {
                id: "dl_6_2_3",
                speakerId: "ahmed",
                speaker: "Ahmed",
                text: "Great! What time does our football practice start?",
              },
              {
                id: "dl_6_2_4",
                speakerId: "youssef",
                speaker: "Youssef",
                text: "It starts at quarter past six (6:15 PM). We have 45 minutes.",
              },
              {
                id: "dl_6_2_5",
                speakerId: "ahmed",
                speaker: "Ahmed",
                text: "Perfect! Let's grab a water bottle and head to the field at 6 o'clock.",
              },
            ],
          },
        },
        {
          id: "b_l6_2_3",
          type: "grammar_point",
          isActive: true,
          purpose: "grammar_explanation",
          extensions: {
            title: {
              text: {
                en: "How to Tell the Time",
                ar: "طريقة إخبار الوقت",
              },
            },
            explanation: {
              en: "• Question: 'What time is it?' or 'What's the time?'\n\n• Method 1 (Digital style - simplest):\n  - 7:15 -> 'It's seven fifteen.'\n  - 8:30 -> 'It's eight thirty.'\n\n• Method 2 (Traditional style):\n  - 7:00 -> 'It's seven o'clock.'\n  - 7:15 -> 'It's quarter past seven.'\n  - 7:30 -> 'It's half past seven.'\n  - 7:45 -> 'It's quarter to eight.'",
              ar: "• السؤال: '?What time is it'\n\n• الطريقة المباشرة (الرقمية):\n  - 7:15 -> '.It's seven fifteen'\n  - 8:30 -> '.It's eight thirty'\n\n• الطريقة التقليدية:\n  - 7:00 -> '.It's seven o'clock'\n  - 7:15 -> '.It's quarter past seven'\n  - 7:30 -> '.It's half past seven'\n  - 7:45 -> '.It's quarter to eight'",
            },
          },
          data: {
            text: "Examples:\n• 9:00 -> It is nine o'clock.\n• 4:30 -> It is half past four.\n• 10:15 -> It is quarter past ten.",
          },
        },
        {
          id: "b_l6_2_4",
          type: "matching",
          isActive: false, // معطل تفاعلياً حسب التوجيهات
          purpose: "time_format_matching",
          extensions: {
            instruction: {
              text: {
                en: "Match the digital times with their traditional English descriptions.",
                ar: "صل الأوقات الرقمية بالوصف الإنجليزي المناسب لها.",
              },
            },
          },
          data: {
            items: [
              {
                id: "m_6_2_1",
                left: "8:00",
                right: "Eight o'clock",
                points: 1,
              },
              {
                id: "m_6_2_2",
                left: "6:30",
                right: "Half past six",
                points: 1,
              },
              {
                id: "m_6_2_3",
                left: "9:15",
                right: "Quarter past nine",
                points: 1,
              },
            ],
          },
        },
        {
          id: "b_l6_2_5",
          type: "fill_blanks",
          isActive: true,
          purpose: "controlled_practice",
          extensions: {
            instruction: {
              text: {
                en: "Fill in the missing time words: [ o'clock, past, time ]",
                ar: "أكمل الفراغات بكلمات الوقت المناسبة: [ o'clock, past, time ]",
              },
            },
          },
          data: {
            items: [
              {
                id: "fb_6_2_1",
                text: "What _____ is it right now?",
                answer: "time",
                points: 1,
              },
              {
                id: "fb_6_2_2",
                text: "It is exactly seven _____.",
                answer: "o'clock",
                points: 1,
              },
              {
                id: "fb_6_2_3",
                text: "The match starts at half _____ six.",
                answer: "past",
                points: 1,
              },
            ],
          },
        },
        {
          id: "b_l6_2_6",
          type: "free_practice",
          isActive: true,
          purpose: "production",
          extensions: {
            title: {
              text: {
                en: "Ask & State the Time",
                ar: "اسأل واذكر الوقت",
              },
            },
            instruction: {
              text: {
                en: "Write a mini-dialogue of two sentences: one asking for the time, and one stating a time (e.g. 8:30 or 5 o'clock).",
                ar: "اكتب حواراً مصغراً من جملتين: الأولى تسأل فيها عن الوقت، والثانية تذكر فيها وقتاً محدداً.",
              },
            },
            tip: {
              icon: "lightbulb",
              text: {
                en: "Example: What time is it? It is half past seven.",
                ar: "مثال: What time is it? It is half past seven.",
              },
            },
          },
          data: {
            text: "Write 2 sentences asking and giving time.\nExample: What time is it? It is 8 o'clock.",
          },
        },
      ],
    },
    // ------------------------------------------------------------------------
    // LESSON 3: Frequency Adverbs (always, sometimes, never)
    // ------------------------------------------------------------------------
    {
      id: "lesson_6_3",
      title: {
        en: "Frequency Adverbs",
        ar: "ظروف التكرار",
      },
      slug: "frequency-adverbs",
      description: {
        en: "Learn how to describe how often you do daily activities using always, usually, sometimes, and never.",
        ar: "تعلم كيفية وصف مدى تكرار الأنشطة اليومية باستخدام (دائماً، عادةً، أحياناً، أبداً).",
      },
      rules: {
        maxErrors: 3,
        passingScorePercentage: 80,
        completionRule: {
          type: "all_required_blocks",
        },
        scoringRule: {
          type: "sum",
        },
      },
      rewards: {
        completionXp: 50,
        maxXp: 100,
        bonusRules: [
          {
            type: "no_errors",
            xp: 20,
          },
        ],
      },
      blocks: [
        {
          id: "b_l6_3_1",
          type: "word_list",
          isActive: true,
          purpose: "vocabulary_presentation",
          extensions: {
            title: {
              text: {
                en: "Core Frequency Adverbs",
                ar: "ظروف التكرار الأساسية",
              },
            },
            instruction: {
              text: {
                en: "Study the percentage of frequency associated with each adverb.",
                ar: "ادرس نسبة التكرار المقترنة بكل ظرف.",
              },
            },
          },
          data: {
            words: [
              {
                id: "w_6_3_1",
                word: "Always (100%)",
                definition: "Every single time without exception",
                example: "I always drink water before my workout.",
              },
              {
                id: "w_6_3_2",
                word: "Usually / Sometimes (70% / 50%)",
                definition: "On most occasions / occasionally",
                example: "He usually codes in the evening. I sometimes play tennis.",
              },
              {
                id: "w_6_3_3",
                word: "Never (0%)",
                definition: "Not at any time",
                example: "She never drinks warm soda.",
              },
            ],
          },
        },
        {
          id: "b_l6_3_2",
          type: "dialogue",
          isActive: true,
          purpose: "contextual_presentation",
          extensions: {
            instruction: {
              text: {
                en: "Listen to Ahmed and Artem discussing their daily work and study habits.",
                ar: "استمع إلى أحمد وأرتم وهما يتناقشان حول عادات العمل والدراسة اليومية.",
              },
            },
          },
          data: {
            lines: [
              {
                id: "dl_6_3_1",
                speakerId: "artem",
                speaker: "Artem",
                text: "Do you always code early in the morning, Ahmed?",
              },
              {
                id: "dl_6_3_2",
                speakerId: "ahmed",
                speaker: "Ahmed",
                text: "Not always. I usually write code in the afternoon, but I always review my scripts before starting.",
              },
              {
                id: "dl_6_3_3",
                speakerId: "artem",
                speaker: "Artem",
                text: "Do you ever skip breakfast?",
              },
              {
                id: "dl_6_3_4",
                speakerId: "ahmed",
                speaker: "Ahmed",
                text: "Never! Breakfast gives me energy for the whole day. What about you?",
              },
              {
                id: "dl_6_3_5",
                speakerId: "artem",
                speaker: "Artem",
                text: "I sometimes drink coffee late at night, but I never drink it before sleeping.",
              },
            ],
          },
        },
        {
          id: "b_l6_3_3",
          type: "grammar_point",
          isActive: true,
          purpose: "grammar_explanation",
          extensions: {
            title: {
              text: {
                en: "Positioning Frequency Adverbs",
                ar: "موقع ظروف التكرار في الجملة",
              },
            },
            explanation: {
              en: "• Rule 1: Place the adverb BEFORE main verbs.\n  - 'Subject + Adverb + Main Verb'\n  - Example: 'I always wake up at 6 AM.'\n  - Example: 'He never drinks coffee.'\n\n• Rule 2: Place the adverb AFTER verb 'to be' (am/is/are).\n  - 'Subject + am/is/are + Adverb'\n  - Example: 'She is always happy.'",
              ar: "• القاعدة 1: يوضع ظرف التكرار **قبل** الفعل الرئيسي:\n  - فاعل + ظرف تكرار + فعل رئيسي\n  - مثال: '.I always study in the evening' (أنا أدرس دائماً في المساء)\n\n• القاعدة 2: يوضع ظرف التكرار **بعد** فعل الكينونة (am/is/are):\n  - مثال: '.He is always on time' (هو دائماً في الوقت المحدد)",
            },
          },
          data: {
            text: "Examples:\n• I always review my code.\n• She is never late for class.\n• We sometimes play football after work.",
          },
        },
        {
          id: "b_l6_3_4",
          type: "matching",
          isActive: false, // معطل تفاعلياً حسب التوجيهات
          purpose: "adverb_percentage_matching",
          extensions: {
            instruction: {
              text: {
                en: "Match the frequency adverb to its correct Arabic meaning.",
                ar: "صل ظرف التكرار بالمعنى العربي المناسب له.",
              },
            },
          },
          data: {
            items: [
              {
                id: "m_6_3_1",
                left: "Always",
                right: "دائماً (100%)",
                points: 1,
              },
              {
                id: "m_6_3_2",
                left: "Sometimes",
                right: "أحياناً (50%)",
                points: 1,
              },
              {
                id: "m_6_3_3",
                left: "Never",
                right: "أبداً (0%)",
                points: 1,
              },
            ],
          },
        },
        {
          id: "b_l6_3_5",
          type: "fill_blanks",
          isActive: true,
          purpose: "controlled_practice",
          extensions: {
            instruction: {
              text: {
                en: "Fill in the blanks with: [ always, never, sometimes ]",
                ar: "أكمل الفراغات باستخدام: [ always, never, sometimes ]",
              },
            },
          },
          data: {
            items: [
              {
                id: "fb_6_3_1",
                text: "I _____ drink 8 glasses of water every day to stay healthy (100%).",
                answer: "always",
                points: 1,
              },
              {
                id: "fb_6_3_2",
                text: "He _____ drinks cold soda because he dislikes it (0%).",
                answer: "never",
                points: 1,
              },
              {
                id: "fb_6_3_3",
                text: "We _____ play video games on weekends (50%).",
                answer: "sometimes",
                points: 1,
              },
            ],
          },
        },
        {
          id: "b_l6_3_6",
          type: "free_practice",
          isActive: true,
          purpose: "production",
          extensions: {
            title: {
              text: {
                en: "Express Your Habits",
                ar: "عَبّر عن عاداتك اليومية",
              },
            },
            instruction: {
              text: {
                en: "Write two sentences about your daily routine using 'always' and 'never'.",
                ar: "اكتب جملتين عن روتينك اليومي باستخدام كلمة 'always' وكلمة 'never'.",
              },
            },
            tip: {
              icon: "lightbulb",
              text: {
                en: "Example: I always drink tea in the morning. I never eat fast food.",
                ar: "مثال: I always drink tea in the morning. I never eat fast food.",
              },
            },
          },
          data: {
            text: "Write 2 sentences using always and never.\nExample: I always study English. I never sleep late.",
          },
        },
      ],
    },

    // ------------------------------------------------------------------------
    // LESSON 4: Prepositions of Time (in, on, at)
    // ------------------------------------------------------------------------
    {
      id: "lesson_6_4",
      title: {
        en: "Prepositions of Time (in, on, at)",
        ar: "حروف الجر للوقت (in, on, at)",
      },
      slug: "prepositions-of-time",
      description: {
        en: "Master using 'at' for precise times, 'on' for days/dates, and 'in' for time periods and months.",
        ar: "أتقن استخدام 'at' للأوقات المحددة، و 'on' للأيام والتوارخ، و 'in' للفترات الزمنية والشهور.",
      },
      rules: {
        maxErrors: 3,
        passingScorePercentage: 80,
        completionRule: {
          type: "all_required_blocks",
        },
        scoringRule: {
          type: "sum",
        },
      },
      rewards: {
        completionXp: 50,
        maxXp: 100,
        bonusRules: [
          {
            type: "no_errors",
            xp: 20,
          },
        ],
      },
      blocks: [
        {
          id: "b_l6_4_1",
          type: "word_list",
          isActive: true,
          purpose: "vocabulary_presentation",
          extensions: {
            title: {
              text: {
                en: "Time Prepositions Overview",
                ar: "نظرة عامة على حروف الجر للوقت",
              },
            },
            instruction: {
              text: {
                en: "Memorize which preposition goes with times, days, and parts of the day.",
                ar: "احفظ حرف الجر المناسب للأوقات، الأيام، وفترات اليوم.",
              },
            },
          },
          data: {
            words: [
              {
                id: "w_6_4_1",
                word: "AT (Specific Times)",
                definition: "Used for precise clock times or specific points in time",
                example: "at 7:00 PM, at night, at noon, at the weekend.",
              },
              {
                id: "w_6_4_2",
                word: "ON (Days & Dates)",
                definition: "Used for days of the week and specific calendar dates",
                example: "on Friday, on Monday morning, on my birthday.",
              },
              {
                id: "w_6_4_3",
                word: "IN (Periods & Months)",
                definition: "Used for parts of the day, months, years, and seasons",
                example: "in the morning, in the evening, in August, in 2026.",
              },
            ],
          },
        },
        {
          id: "b_l6_4_2",
          type: "dialogue",
          isActive: true,
          purpose: "contextual_presentation",
          extensions: {
            instruction: {
              text: {
                en: "Listen to Ahmed scheduling a workshop session with Faisal.",
                ar: "استمع إلى أحمد وهو ينظم موعد ورشة عمل مع فيصل.",
              },
            },
          },
          data: {
            lines: [
              {
                id: "dl_6_4_1",
                speakerId: "ahmed",
                speaker: "Ahmed",
                text: "Faisal, when is our English learning session?",
              },
              {
                id: "dl_6_4_2",
                speakerId: "faisal",
                speaker: "Faisal",
                text: "It is on Friday at 5:00 PM.",
              },
              {
                id: "dl_6_4_3",
                speakerId: "ahmed",
                speaker: "Ahmed",
                text: "Do you prefer studying in the morning or in the evening?",
              },
              {
                id: "dl_6_4_4",
                speakerId: "faisal",
                speaker: "Faisal",
                text: "I focus much better in the evening, especially at night.",
              },
              {
                id: "dl_6_4_5",
                speakerId: "ahmed",
                speaker: "Ahmed",
                text: "Sounds great! See you on Friday at the study group.",
              },
            ],
          },
        },
        {
          id: "b_l6_4_3",
          type: "grammar_point",
          isActive: true,
          purpose: "grammar_explanation",
          extensions: {
            title: {
              text: {
                en: "AT / ON / IN Time Rule Pyramid",
                ar: "قاعدة هرم حروف الجر للوقت (AT / ON / IN)",
              },
            },
            explanation: {
              en: "• AT (Precise Time): \n  - at 8 o'clock, at 3:30, at night, at noon\n\n• ON (Days and Dates):\n  - on Monday, on Friday, on July 10th\n\n• IN (Longer Periods / Parts of Day):\n  - in the morning, in the afternoon, in the evening, in August, in summer",
              ar: "• AT (للوقت المحدد والساعات):\n  - at 8 o'clock (الساعة 8)، at night (في الليل)\n\n• ON (للأيام والتواريخ):\n  - on Friday (يوم الجمعة)، on Monday morning (صباح الاثنين)\n\n• IN (أجزاء اليوم/ أوقات عامة):\n  - in the morning (في الصباح)، in the evening (في المساء)، in August (في شهر أغسطس)",
            },
          },
          data: {
            text: "Examples:\n• I wake up at 6:30 AM.\n• We meet on Friday.\n• He drinks coffee in the morning.",
          },
        },
        {
          id: "b_l6_4_4",
          type: "matching",
          isActive: false, // معطل تفاعلياً حسب التوجيهات
          purpose: "preposition_matching",
          extensions: {
            instruction: {
              text: {
                en: "Match the preposition to the correct time phrase.",
                ar: "صل حرف الجر بالعبارة الزمنية المناسبة له.",
              },
            },
          },
          data: {
            items: [
              {
                id: "m_6_4_1",
                left: "at",
                right: "9:00 AM",
                points: 1,
              },
              {
                id: "m_6_4_2",
                left: "on",
                right: "Friday afternoon",
                points: 1,
              },
              {
                id: "m_6_4_3",
                left: "in",
                right: "the evening",
                points: 1,
              },
            ],
          },
        },
        {
          id: "b_l6_4_5",
          type: "fill_blanks",
          isActive: true,
          purpose: "controlled_practice",
          extensions: {
            instruction: {
              text: {
                en: "Fill in the blanks with: [ at, on, in ]",
                ar: "أكمل الفراغات بحرف الجر المناسب: [ at, on, in ]",
              },
            },
          },
          data: {
            items: [
              {
                id: "fb_6_4_1",
                text: "The football match starts _____ 7:30 PM.",
                answer: "at",
                points: 1,
              },
              {
                id: "fb_6_4_2",
                text: "We have an important practice session _____ Friday.",
                answer: "on",
                points: 1,
              },
              {
                id: "fb_6_4_3",
                text: "He prefers working on his portfolio _____ the evening.",
                answer: "in",
                points: 1,
              },
            ],
          },
        },
        {
          id: "b_l6_4_6",
          type: "free_practice",
          isActive: true,
          purpose: "production",
          extensions: {
            title: {
              text: {
                en: "Write Schedule Sentences",
                ar: "اكتب جمل جدولك المخطط",
              },
            },
            instruction: {
              text: {
                en: "Write two sentences about your schedule using 'at' (for time) and 'on' (for a day).",
                ar: "اكتب جملتين عن جدولك باستخدام 'at' (للوقت) و 'on' (ليوم من الأيام).",
              },
            },
            tip: {
              icon: "lightbulb",
              text: {
                en: "Example: I study at 4:00 PM. I play sports on Saturday.",
                ar: "مثال: I study at 4:00 PM. I play sports on Saturday.",
              },
            },
          },
          data: {
            text: "Write 2 sentences using prepositions at and on.\nExample: I wake up at 7 o'clock. We play football on Friday.",
          },
        },
      ],
    },
    // ------------------------------------------------------------------------
    // LESSON 5: Days of the Week & Unit 6 Review
    // ------------------------------------------------------------------------
    {
      id: "lesson_6_5",
      title: {
        en: "Weekly Schedules & Unit Review",
        ar: "الجدول الأسبوعي ومراجعة الوحدة السادسة",
      },
      slug: "weekly-schedules-review",
      description: {
        en: "Comprehensive review of daily routines, telling time, frequency adverbs, time prepositions, and days of the week.",
        ar: "مراجعة شاملة للروتين اليومي، إخبار الوقت، ظروف التكرار، حروف الجر للوقت، وأيام الأسبوع.",
      },
      rules: {
        maxErrors: 5,
        passingScorePercentage: 70,
        completionRule: {
          type: "all_required_blocks",
        },
        scoringRule: {
          type: "sum",
        },
      },
      rewards: {
        completionXp: 100,
        maxXp: 150,
        bonusRules: [
          {
            type: "perfect",
            xp: 50,
          },
        ],
      },
      blocks: [
        {
          id: "b_l6_5_1",
          type: "matching",
          isActive: false, // معطل تفاعلياً حسب التوجيهات
          purpose: "days_and_prepositions_matching",
          extensions: {
            instruction: {
              text: {
                en: "Match the time expressions with their appropriate preposition or category.",
                ar: "صل التعبيرات الزمنية بحرف الجر أو الفئة المناسبة لها.",
              },
            },
          },
          data: {
            items: [
              {
                id: "m_6_5_1",
                left: "on Friday",
                right: "Days of the week",
                points: 1,
              },
              {
                id: "m_6_5_2",
                left: "at 8:30",
                right: "Exact clock time",
                points: 1,
              },
              {
                id: "m_6_5_3",
                left: "in the afternoon",
                right: "Part of the day",
                points: 1,
              },
            ],
          },
        },
        {
          id: "b_l6_5_2",
          type: "fill_blanks",
          isActive: true,
          purpose: "comprehensive_review_fill_blanks",
          extensions: {
            title: {
              text: {
                en: "Unit 6 Grammar & Vocabulary Review",
                ar: "اختبار مراجعة القواعد والمفردات للوحدة السادسة",
              },
            },
            instruction: {
              text: {
                en: "Fill in the missing words using: [ wakes, at, on, always ]",
                ar: "أكمل الفراغات باستخدام الكلمات التالية: [ wakes, at, on, always ]",
              },
            },
          },
          data: {
            items: [
              {
                id: "fb_6_5_1",
                text: "He _____ up at 6 o'clock every morning.",
                answer: "wakes",
                points: 1,
              },
              {
                id: "fb_6_5_2",
                text: "The English workshop is _____ Friday afternoon.",
                answer: "on",
                points: 1,
              },
              {
                id: "fb_6_5_3",
                text: "We always meet for practice _____ half past five.",
                answer: "at",
                points: 1,
              },
              {
                id: "fb_6_5_4",
                text: "I _____ drink water after running to stay hydrated.",
                answer: "always",
                points: 1,
              },
            ],
          },
        },
        {
          id: "b_l6_5_3",
          type: "reorder_words",
          isActive: true,
          purpose: "sentence_building_review",
          extensions: {
            instruction: {
              text: {
                en: "Reorder the words to form correct daily routine sentences.",
                ar: "رتب الكلمات لتكوين جمل صحيحة للروتين اليومي.",
              },
            },
          },
          data: {
            items: [
              {
                id: "rw_6_5_1",
                words: ["at", "starts", "work", "He", "8:00 AM"],
                correctOrder: ["He", "starts", "work", "at", "8:00 AM"],
                points: 1,
              },
              {
                id: "rw_6_5_2",
                words: ["never", "drinks", "She", "coffee", "at night"],
                correctOrder: ["She", "never", "drinks", "coffee", "at night"],
                points: 1,
              },
            ],
          },
        },
        {
          id: "b_l6_5_4",
          type: "free_practice",
          isActive: true,
          purpose: "final_unit_challenge",
          extensions: {
            title: {
              text: {
                en: "Unit 6 Final Production Challenge",
                ar: "التحدي النهائي للوحدة السادسة",
              },
            },
            instruction: {
              text: {
                en: "Write 3 sentences describing a day in your week: 1) What time you wake up. 2) Something you 'always' or 'never' do. 3) An activity you do on Friday.",
                ar: "اكتب 3 جمل تصف يوماً في أسبوعك: 1) في أي وقت تستيقظ. 2) شيء تفعله 'دائماً' أو 'لا تفعله أبداً'. 3) نشاط تفعله يوم الجمعة.",
              },
            },
            tip: {
              icon: "lightbulb",
              text: {
                en: "Example: I wake up at 6:30 AM. I always review my work in the evening. On Friday, I play football.",
                ar: "مثال: I wake up at 6:30 AM. I always review my work in the evening. On Friday, I play football.",
              },
            },
          },
          data: {
            text: "Write 3 sentences about your daily/weekly rhythm using time, frequency adverbs, and prepositions.\nExample: I wake up at 7 o'clock. I always drink coffee in the morning. On Friday, I visit my family.",
          },
        },
      ],
    },
  ],
};