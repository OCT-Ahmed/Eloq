import { UnitType } from "@/types/learning";
// ============================================================================
// UNIT 5: My Daily Likes (الجزء 1 من 3)
// ============================================================================

export const unit_5: UnitType = {
  id: "unit_5",
  title: {
    en: "My Daily Likes",
    ar: "تفضيلاتي اليومية",
  },
  slug: "my-daily-likes",
  overview: {
    summary: {
      en: "Learn to express likes, dislikes, and preferences, use the Present Simple tense with I/you/we/they, talk about nationalities and languages, and handle prices and cash transactions.",
      ar: "تعلم التعبير عن الإعجاب والتفضيلات والأشياء التي لا تحبها، استخدام المضارع البسيط مع ضمائر الجمع والسيادة (I, You, We, They)، التحدث عن الجنسيات واللغات، والتعامل مع الأسعار والمعاملات المالية النقدية.",
    },
    learningObjectives: [
      {
        en: "Express likes, dislikes, and preferences regarding food, drinks, and sports",
        ar: "التعبير عن الإعجاب والتفضيلات والمكروهات في الأطعمة والمشروبات والرياضة",
      },
      {
        en: "Use Present Simple with I, you, we, and they in positive and negative forms",
        ar: "استخدام المضارع البسيط مع (I, You, We, They) في صيغتي الإثبات والنفي",
      },
      {
        en: "Talk about languages spoken and different nationalities fluently",
        ar: "التحدث عن اللغات المُتحدثة والجنسيات المختلفة بطلاقة",
      },
      {
        en: "Ask about prices using 'How much is it?' and 'How much are these?'",
        ar: "السؤال عن الأسعار باستخدام '?How much is it' و '?How much are these'",
      },
      {
        en: "Handle basic cash transactions and understand prices in everyday shopping",
        ar: "إجراء التعاملات النقدية الأساسية وفهم الأسعار في التسوق اليومي",
      },
    ],
    keyVocabulary: [
      "like",
      "love",
      "prefer",
      "don't like",
      "coffee",
      "tea",
      "football",
      "pizza",
      "speak",
      "Arabic",
      "English",
      "price",
      "riyal",
    ],
    grammarFocus: [
      "Present Simple with I, You, We, They (Positive: I like... / Negative: They don't like...)",
      "Expressing preference with 'prefer'",
      "Asking questions with 'Do you...?'",
      "Asking about prices using 'How much...?'",
    ],
    skills: ["speaking", "listening", "reading", "vocabulary", "grammar"],
    prerequisites: ["unit_4"],
  },
  lessons: [
    // ------------------------------------------------------------------------
    // LESSON 1: Likes, Dislikes & Preferences
    // ------------------------------------------------------------------------
    {
      id: "lesson_5_1",
      title: {
        en: "Likes, Dislikes & Preferences",
        ar: "الإعجاب، التفضيلات، وما لا يعجبنا",
      },
      slug: "likes-dislikes-preferences",
      description: {
        en: "Learn vocabulary and phrasing to talk about what food, drinks, and sports you enjoy or dislike in everyday life.",
        ar: "تعلم المفردات والعبارات للتحدث عن الأطعمة والمشروبات والرياضات التي تحبها أو تنفر منها في الحياة اليومية.",
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
          id: "b_l5_1_1",
          type: "word_list",
          isActive: true,
          purpose: "vocabulary_presentation",
          extensions: {
            title: {
              text: {
                en: "Expressions of Preference",
                ar: "تعبيرات التفضيل والإعجاب",
              },
            },
            instruction: {
              text: {
                en: "Study words used to express how much you like or dislike something.",
                ar: "ادرس الكلمات المستخدمة للتعبير عن مدى حبك أو عدم حبك لشيء ما.",
              },
            },
          },
          data: {
            words: [
              {
                id: "w_5_1_1",
                word: "Love / Like",
                definition: "To enjoy or feel strong affection for something",
                example: "I love black coffee in the morning. I like playing football.",
              },
              {
                id: "w_5_1_2",
                word: "Prefer",
                definition: "To like one thing more than another",
                example: "I prefer tea over soda.",
              },
              {
                id: "w_5_1_3",
                word: "Don't like / Hate",
                definition: "To not enjoy or strongly dislike something",
                example: "I don't like fast food. They hate noisy places.",
              },
            ],
          },
        },
        {
          id: "b_l5_1_2",
          type: "dialogue",
          isActive: true,
          purpose: "contextual_presentation",
          extensions: {
            instruction: {
              text: {
                en: "Listen to Ahmed and Artem ordering drinks and chatting about sports during an afternoon break at a coffee shop.",
                ar: "استمع إلى أحمد وأرتم وهما يطلبان المشروبات ويتناقشان حول الرياضة أثناء استراحة المقهى.",
              },
            },
          },
          data: {
            lines: [
              {
                id: "dl_5_1_1",
                speakerId: "artem",
                speaker: "Artem",
                text: "Hey Ahmed! Let's get something to drink. Do you like espresso or hot tea?",
              },
              {
                id: "dl_5_1_2",
                speakerId: "ahmed",
                speaker: "Ahmed",
                text: "I love black coffee! But in the evening, I prefer green tea. What about you?",
              },
              {
                id: "dl_5_1_3",
                speakerId: "artem",
                speaker: "Artem",
                text: "I don't like tea at all, so I'll get an iced latte. Are you going to watch the match tonight?",
              },
              {
                id: "dl_5_1_4",
                speakerId: "ahmed",
                speaker: "Ahmed",
                text: "Of course! I love football. I play every weekend with my friends.",
              },
              {
                id: "dl_5_1_5",
                speakerId: "artem",
                speaker: "Artem",
                text: "That sounds fun! I prefer swimming and gym workouts over football, but watching matches is great.",
              },
              {
                id: "dl_5_1_6",
                speakerId: "ahmed",
                speaker: "Ahmed",
                text: "Awesome! Let's order our drinks first and then talk about the starting lineup.",
              },
            ],
          },
        },
        {
          id: "b_l5_1_3",
          type: "grammar_point",
          isActive: true,
          purpose: "grammar_explanation",
          extensions: {
            title: {
              text: {
                en: "Expressing Preferences",
                ar: "التعبير عن التفضيل والاهتمامات",
              },
            },
            explanation: {
              en: "• Like / Love + Noun or Verb(-ing):\n  - 'I like coffee.' / 'I love playing football.'\n\n• Don't like + Noun or Verb(-ing):\n  - 'I don't like tea.' / 'We don't like late meetings.'\n\n• Prefer X to/over Y:\n  - 'I prefer tea over coffee.'",
              ar: "• استخدام Like / Love (يعجبني / أحب):\n  - 'I like coffee.' (أحب القهوة)\n  - 'I love playing football.' (أعشق لعب كرة القدم)\n\n• النفي باستخدام Don't like:\n  - 'I don't like tea.' (لا أحب الشاي)\n\n• التفضيل باستعمال Prefer:\n  - 'I prefer green tea over coffee.' (أفضل الشاي الأخضر على القهوة)",
            },
          },
          data: {
            text: "Key Sentences:\n• I like pasta.\n• I don't like noisy rooms.\n• I prefer football to tennis.",
          },
        },
        {
          id: "b_l5_1_4",
          type: "matching",
          isActive: false, // معطل تفاعلياً حسب التوجيهات
          purpose: "preference_vocab_matching",
          extensions: {
            instruction: {
              text: {
                en: "Match the English preference phrase with its correct Arabic meaning.",
                ar: "صل عبارات التفضيل بالإنجليزية بالمعنى العربي المناسب لها.",
              },
            },
          },
          data: {
            items: [
              {
                id: "m_5_1_1",
                left: "I love football",
                right: "أنا أعشق كرة القدم",
                points: 1,
              },
              {
                id: "m_5_1_2",
                left: "I don't like tea",
                right: "أنا لا أحب الشاي",
                points: 1,
              },
              {
                id: "m_5_1_3",
                left: "I prefer coffee",
                right: "أنا أفضّل القهوة",
                points: 1,
              },
            ],
          },
        },
        {
          id: "b_l5_1_5",
          type: "fill_blanks",
          isActive: true,
          purpose: "controlled_practice",
          extensions: {
            instruction: {
              text: {
                en: "Fill in the missing preference words: [ like, prefer, don't ]",
                ar: "أكمل الفراغات بكلمات التفضيل المناسبة: [ like, prefer, don't ]",
              },
            },
          },
          data: {
            items: [
              {
                id: "fb_5_1_1",
                text: "I _____ black coffee in the morning because it gives me energy.",
                answer: "like",
                points: 1,
              },
              {
                id: "fb_5_1_2",
                text: "I _____ like fast food; I like healthy meals.",
                answer: "don't",
                points: 1,
              },
              {
                id: "fb_5_1_3",
                text: "We _____ playing football on Saturdays over staying indoors.",
                answer: "prefer",
                points: 1,
              },
            ],
          },
        },
        {
          id: "b_l5_1_6",
          type: "free_practice",
          isActive: true,
          purpose: "production",
          extensions: {
            title: {
              text: {
                en: "Share Your Likes & Dislikes",
                ar: "شارك تفضيلاتك وما لا يعجبك",
              },
            },
            instruction: {
              text: {
                en: "Write two sentences: one stating a drink or sport you love, and one stating a food or activity you don't like.",
                ar: "اكتب جملتين: الأولى تذكر فيها مشروباً أو رياضة تعشقها، والثانية تذكر طعاماً أو نشاطاً لا تحبه.",
              },
            },
            tip: {
              icon: "lightbulb",
              text: {
                en: "Example: I love coffee. I don't like fast food.",
                ar: "مثال: I love coffee. I don't like fast food.",
              },
            },
          },
          data: {
            text: "Write 2 sentences about your preferences.\nExample: I love playing football. I don't like tea.",
          },
        },
      ],
    },

    // ------------------------------------------------------------------------
    // LESSON 2: Present Simple with I, You, We, They
    // ------------------------------------------------------------------------
    {
      id: "lesson_5_2",
      title: {
        en: "Present Simple (I / You / We / They)",
        ar: "المضارع البسيط (أنا، أنت، نحن، هم)",
      },
      slug: "present-simple-plural",
      description: {
        en: "Master using action verbs in the Present Simple tense for daily habits and routines with I, you, we, and they.",
        ar: "أتقن استخدام أفعال الحركة في زمن المضارع البسيط للتعبير عن العادات والروتين اليومي مع الضمائر (I, You, We, They).",
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
          id: "b_l5_2_1",
          type: "word_list",
          isActive: true,
          purpose: "vocabulary_presentation",
          extensions: {
            title: {
              text: {
                en: "Common Routine Verbs",
                ar: "أفعال الروتين الشائعة",
              },
            },
            instruction: {
              text: {
                en: "Learn these fundamental verbs used to describe daily activities.",
                ar: "تعلم هذه الأفعال الأساسية المستخدمة لوصف الأنشطة اليومية.",
              },
            },
          },
          data: {
            words: [
              {
                id: "w_5_2_1",
                word: "Work / Study",
                definition: "To do a job / to learn a subject",
                example: "We work on web development projects. They study English.",
              },
              {
                id: "w_5_2_2",
                word: "Live / Play",
                definition: "To reside in a place / to engage in a game or sport",
                example: "I live in Sakaka. You play football very well.",
              },
              {
                id: "w_5_2_3",
                word: "Eat / Drink",
                definition: "To consume food / to consume liquid",
                example: "We eat lunch together. They drink tea in the afternoon.",
              },
            ],
          },
        },
        {
          id: "b_l5_2_2",
          type: "dialogue",
          isActive: true,
          purpose: "contextual_presentation",
          extensions: {
            instruction: {
              text: {
                en: "Listen to two colleagues, Omar and Tariq, discussing their weekend routines and personal projects.",
                ar: "استمع إلى الزميلين عمر وطارق وهما يتحدثان عن روتينهما في عطلة نهاية الأسبوع ومشاريعهما الخاصة.",
              },
            },
          },
          data: {
            lines: [
              {
                id: "dl_5_2_1",
                speakerId: "omar",
                speaker: "Omar",
                text: "Hey Tariq! Do you work on your web development projects on weekends?",
              },
              {
                id: "dl_5_2_2",
                speakerId: "tariq",
                speaker: "Tariq",
                text: "Yes, I usually code in the morning, and my team members test the new features.",
              },
              {
                id: "dl_5_2_3",
                speakerId: "omar",
                speaker: "Omar",
                text: "That is awesome! Do you and your friends play football in the evening?",
              },
              {
                id: "dl_5_2_4",
                speakerId: "tariq",
                speaker: "Tariq",
                text: "Yes, we play football every Friday. We don't like staying home all weekend!",
              },
              {
                id: "dl_5_2_5",
                speakerId: "omar",
                speaker: "Omar",
                text: "Great balance! I live near the community center, so I exercise there.",
              },
              {
                id: "dl_5_2_6",
                speakerId: "tariq",
                speaker: "Tariq",
                text: "Nice! We both have productive habits.",
              },
            ],
          },
        },
        {
          id: "b_l5_2_3",
          type: "grammar_point",
          isActive: true,
          purpose: "grammar_explanation",
          extensions: {
            title: {
              text: {
                en: "Present Simple Rules (I / You / We / They)",
                ar: "قواعد المضارع البسيط مع (I / You / We / They)",
              },
            },
            explanation: {
              en: "1. Positive: Subject + Base Verb\n   • 'I live in Sakaka.'\n   • 'We play football.'\n   • 'They work together.'\n\n2. Negative: Subject + don't + Base Verb\n   • 'I don't eat fast food.'\n   • 'They don't stay home.'\n\n3. Questions: Do + Subject + Base Verb...?\n   • 'Do you speak English?' -> 'Yes, I do.' / 'No, I don't.'",
              ar: "1. الإثبات: الفاعل + الفعل في المصدر\n   • 'I live in Sakaka.' (أنا أعيش في سكاكا)\n   • 'We play football.' (نحن نلعب كرة القدم)\n\n2. النفي: الفاعل + don't + الفعل في المصدر\n   • 'I don't eat fast food.' (أنا لا آكل الوجبات السريعة)\n\n3. السؤال: ?...Do + الفاعل + الفعل في المصدر\n   • '?Do you speak English' (هل تتحدث الإنجليزية؟)",
            },
          },
          data: {
            text: "Examples:\n• We code every morning.\n• They don't drink coffee at night.\n• Do you live nearby?",
          },
        },
        {
          id: "b_l5_2_4",
          type: "matching",
          isActive: false, // معطل تفاعلياً حسب التوجيهات
          purpose: "present_simple_matching",
          extensions: {
            instruction: {
              text: {
                en: "Match the sentence starters with their logical completions.",
                ar: "صل بدايات الجمل بالتكملة المنطقية لها.",
              },
            },
          },
          data: {
            items: [
              {
                id: "m_5_2_1",
                left: "We play",
                right: "football on Fridays.",
                points: 1,
              },
              {
                id: "m_5_2_2",
                left: "They don't",
                right: "work on Sundays.",
                points: 1,
              },
              {
                id: "m_5_2_3",
                left: "Do you",
                right: "speak English?",
                points: 1,
              },
            ],
          },
        },
        {
          id: "b_l5_2_5",
          type: "fill_blanks",
          isActive: true,
          purpose: "controlled_practice",
          extensions: {
            instruction: {
              text: {
                en: "Fill in the missing present simple forms: [ live, don't, Do ]",
                ar: "أكمل الفراغات بصيغ المضارع البسيط المناسبة: [ live, don't, Do ]",
              },
            },
          },
          data: {
            items: [
              {
                id: "fb_5_2_1",
                text: "I _____ in Sakaka with my family.",
                answer: "live",
                points: 1,
              },
              {
                id: "fb_5_2_2",
                text: "_____ you speak English with your friends?",
                answer: "Do",
                points: 1,
              },
              {
                id: "fb_5_2_3",
                text: "We _____ like cold tea; we prefer hot coffee.",
                answer: "don't",
                points: 1,
              },
            ],
          },
        },
        {
          id: "b_l5_2_6",
          type: "free_practice",
          isActive: true,
          purpose: "production",
          extensions: {
            title: {
              text: {
                en: "Describe Your Routine",
                ar: "صف روتينك الشخصي",
              },
            },
            instruction: {
              text: {
                en: "Write two sentences in the Present Simple tense about what you and your friends or colleagues do regularly.",
                ar: "اكتب جملتين في زمن المضارع البسيط تصف فيهما ما تفعله أنت وأصدقاؤك أو زملاؤك بانتظام.",
              },
            },
            tip: {
              icon: "lightbulb",
              text: {
                en: "Example: We play football on Fridays. I work on my computer.",
                ar: "مثال: We play football on Fridays. I work on my computer",
              },
            },
          },
          data: {
            text: "Write 2 present simple sentences.\nExample: I live in Sakaka. We speak Arabic and English ",
          },
        }, 
      ],
    },
    // ------------------------------------------------------------------------
    // LESSON 3: Languages & Nationalities
    // ------------------------------------------------------------------------
    {
      id: "lesson_5_3",
      title: {
        en: "Languages & Nationalities",
        ar: "اللغات والجنسيات",
      },
      slug: "languages-and-nationalities",
      description: {
        en: "Learn how to talk about the languages you speak and discuss different nationalities in natural conversations.",
        ar: "تعلم كيفية التحدث عن اللغات التي تتحدثها والتناقش حول الجنسيات المختلفة في المحادثات اليومية.",
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
          id: "b_l5_3_1",
          type: "word_list",
          isActive: true,
          purpose: "vocabulary_presentation",
          extensions: {
            title: {
              text: {
                en: "Languages & Nationalities Vocabulary",
                ar: "مفردات اللغات والجنسيات",
              },
            },
            instruction: {
              text: {
                en: "Study common languages and nationality terms.",
                ar: "ادرس مصطلحات اللغات والجنسيات الشائعة.",
              },
            },
          },
          data: {
            words: [
              {
                id: "w_5_3_1",
                word: "Speak",
                definition: "To express thoughts or communicate in a language",
                example: "I speak Arabic fluently and I study English.",
              },
              {
                id: "w_5_3_2",
                word: "Arabic / English / Spanish",
                definition: "Names of major international languages",
                example: "We speak Arabic at home. They study English at school.",
              },
              {
                id: "w_5_3_3",
                word: "Saudi / Egyptian / British / American",
                definition: "Nationalities belonging to specific countries",
                example: "He is Saudi. My friend is Egyptian.",
              },
            ],
          },
        },
        {
          id: "b_l5_3_2",
          type: "dialogue",
          isActive: true,
          purpose: "contextual_presentation",
          extensions: {
            instruction: {
              text: {
                en: "Listen to Tariq meeting an international app developer, Carlos, at a online tech meetup.",
                ar: "استمع إلى طارق وهو يلتقي بمطور التطبيقات الدولي، كارلوس، في ملتقى تقني عبر الإنترنت.",
              },
            },
          },
          data: {
            lines: [
              {
                id: "dl_5_3_1",
                speakerId: "tariq",
                speaker: "Tariq",
                text: "Hi Carlos! Great to meet you. Where are you from?",
              },
              {
                id: "dl_5_3_2",
                speakerId: "carlos",
                speaker: "Carlos",
                text: "Hello Tariq! I am from Spain, so I am Spanish. What about you?",
              },
              {
                id: "dl_5_3_3",
                speakerId: "tariq",
                speaker: "Tariq",
                text: "I am Saudi! I live in Sakaka, Saudi Arabia.",
              },
              {
                id: "dl_5_3_4",
                speakerId: "carlos",
                speaker: "Carlos",
                text: "That is awesome! Do you speak Spanish, or do you speak English?",
              },
              {
                id: "dl_5_3_5",
                speakerId: "tariq",
                speaker: "Tariq",
                text: "I speak Arabic as my main language, and I speak English for my web development projects. I don't speak Spanish yet!",
              },
              {
                id: "dl_5_3_6",
                speakerId: "carlos",
                speaker: "Carlos",
                text: "Your English is great! Many developers in Spain also speak English and Spanish fluently.",
              },
            ],
          },
        },
        {
          id: "b_l5_3_3",
          type: "grammar_point",
          isActive: true,
          purpose: "grammar_explanation",
          extensions: {
            title: {
              text: {
                en: "Country vs Nationality vs Language",
                ar: "الدولة مقابل الجنسية مقابل اللغة",
              },
            },
            explanation: {
              en: "• Country (المكان): Saudi Arabia, Egypt, Spain, UK.\n• Nationality (الجنسية): Saudi, Egyptian, Spanish, British.\n• Language (اللغة): 'I speak Arabic.' / 'They speak Spanish.'\n\nRule: Always capitalize countries, nationalities, and languages in English! (e.g., Arabic, Saudi, English).",
              ar: "• الدولة: تكتب بحرف كبير (Saudi Arabia, Egypt)\n• الجنسية: تصف الشخص (He is Saudi / She is Egyptian)\n• اللغة: نستخدم الفعل speak معها (I speak Arabic)\n\nقاعدة هامّة: تبدأ أسماء الدول والجنسيات واللغات دائماً بحرف كبير (Capital Letter) في اللغة الإنجليزية.",
            },
          },
          data: {
            text: "Examples:\n• I am from Saudi Arabia. I am Saudi.\n• I speak Arabic and English.\n• She is Egyptian. She speaks Arabic.",
          },
        },
        {
          id: "b_l5_3_4",
          type: "matching",
          isActive: false, // معطل تفاعلياً حسب التوجيهات
          purpose: "nationality_language_matching",
          extensions: {
            instruction: {
              text: {
                en: "Match the country with its corresponding nationality or language.",
                ar: "صل الدولة بالجنسية أو اللغة المقابلة لها.",
              },
            },
          },
          data: {
            items: [
              {
                id: "m_5_3_1",
                left: "Saudi Arabia",
                right: "Saudi / Arabic",
                points: 1,
              },
              {
                id: "m_5_3_2",
                left: "Spain",
                right: "Spanish",
                points: 1,
              },
              {
                id: "m_5_3_3",
                left: "United Kingdom",
                right: "British / English",
                points: 1,
              },
            ],
          },
        },
        {
          id: "b_l5_3_5",
          type: "fill_blanks",
          isActive: true,
          purpose: "controlled_practice",
          extensions: {
            instruction: {
              text: {
                en: "Fill in the blanks: [ speak, Saudi, English ]",
                ar: "أكمل الفراغات: [ speak, Saudi, English ]",
              },
            },
          },
          data: {
            items: [
              {
                id: "fb_5_3_1",
                text: "I am from Saudi Arabia, so I am _____.",
                answer: "Saudi",
                points: 1,
              },
              {
                id: "fb_5_3_2",
                text: "We _____ Arabic fluently.",
                answer: "speak",
                points: 1,
              },
              {
                id: "fb_5_3_3",
                text: "They study _____ for their international business.",
                answer: "English",
                points: 1,
              },
            ],
          },
        },
        {
          id: "b_l5_3_6",
          type: "free_practice",
          isActive: true,
          purpose: "production",
          extensions: {
            title: {
              text: {
                en: "State Your Nationality & Languages",
                ar: "اذكر جنسيتك واللغات التي تتحدثها",
              },
            },
            instruction: {
              text: {
                en: "Write two sentences: one stating your nationality, and one stating the languages you speak.",
                ar: "اكتب جملتين: الأولى تذكر فيها جنسيتك، والثانية تذكر فيها اللغات التي تتحدثها.",
              },
            },
            tip: {
              icon: "lightbulb",
              text: {
                en: "Example: I am Saudi. I speak Arabic and English.",
                ar: "مثال: I am Saudi. I speak Arabic and English.",
              },
            },
          },
          data: {
            text: "Write 2 sentences about nationality and languages.\nExample: I am Saudi. I speak Arabic and English.",
          },
        },
      ],
    },

    // ------------------------------------------------------------------------
    // LESSON 4: Asking Prices & Cash Transactions
    // ------------------------------------------------------------------------
    {
      id: "lesson_5_4",
      title: {
        en: "Asking Prices & Transactions",
        ar: "السؤال عن الأسعار والمعاملات المالية",
      },
      slug: "prices-and-transactions",
      description: {
        en: "Learn how to ask 'How much is it?', understand prices in local currency, and handle cash transactions smoothly.",
        ar: "تعلم كيفية السؤال عن الأسعار '?How much is it'، فهم القيم بالعملة المحلية، وإجراء التعاملات النقدية بسلاسة.",
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
          id: "b_l5_4_1",
          type: "word_list",
          isActive: true,
          purpose: "vocabulary_presentation",
          extensions: {
            title: {
              text: {
                en: "Shopping & Price Phrases",
                ar: "مصطلحات التسوق والأسعار",
              },
            },
            instruction: {
              text: {
                en: "Learn these key words used in stores and coffee shops.",
                ar: "تعلم هذه الكلمات المفتاحية المستخدمة في المتاجر والمقاهي.",
              },
            },
          },
          data: {
            words: [
              {
                id: "w_5_4_1",
                word: "How much",
                definition: "Used to ask about the price of an item",
                example: "How much is this coffee?",
              },
              {
                id: "w_5_4_2",
                word: "Riyal / SAR",
                definition: "Official currency unit",
                example: "It is 18 Saudi Riyals.",
              },
              {
                id: "w_5_4_3",
                word: "Cash / Change",
                definition: "Physical money paper / returned money from payment",
                example: "I pay in cash. Here is your change.",
              },
              {
                id: "w_5_4_4",
                word: "Total / Receipt",
                definition: "Final sum of money / paper showing proof of purchase",
                example: "The total is 30 riyals. Here is your receipt.",
              },
            ],
          },
        },
        {
          id: "b_l5_4_2",
          type: "dialogue",
          isActive: true,
          purpose: "contextual_presentation",
          extensions: {
            instruction: {
              text: {
                en: "Listen to Ahmed buying a coffee and a notebook at a local bookstore cafe.",
                ar: "استمع إلى أحمد وهو يشتري قهوة ودفتر ملاحظات في مقهى ومكتبة محلية.",
              },
            },
          },
          data: {
            lines: [
              {
                id: "dl_5_4_1",
                speakerId: "ahmed",
                speaker: "Ahmed",
                text: "Hello, good morning! How much is this black coffee, please?",
              },
              {
                id: "dl_5_4_2",
                speakerId: "cashier",
                speaker: "Cashier",
                text: "Good morning! The black coffee is 12 riyals.",
              },
              {
                id: "dl_5_4_3",
                speakerId: "ahmed",
                speaker: "Ahmed",
                text: "Great! And how much are these small notebooks on the counter?",
              },
              {
                id: "dl_5_4_4",
                speakerId: "cashier",
                speaker: "Cashier",
                text: "They are 15 riyals each.",
              },
              {
                id: "dl_5_4_5",
                speakerId: "ahmed",
                speaker: "Ahmed",
                text: "Okay, I will take one coffee and one notebook. What is the total?",
              },
              {
                id: "dl_5_4_6",
                speakerId: "cashier",
                speaker: "Cashier",
                text: "That comes to 27 riyals in total. Will you pay with cash or card?",
              },
              {
                id: "dl_5_4_7",
                speakerId: "ahmed",
                speaker: "Ahmed",
                text: "I will pay with cash. Here is 50 riyals.",
              },
              {
                id: "dl_5_4_8",
                speakerId: "cashier",
                speaker: "Cashier",
                text: "Thank you! Here is 23 riyals in change and your receipt. Enjoy your day!",
              },
            ],
          },
        },
        {
          id: "b_l5_4_3",
          type: "grammar_point",
          isActive: true,
          purpose: "grammar_explanation",
          extensions: {
            title: {
              text: {
                en: "Asking about Prices: Singular vs Plural",
                ar: "السؤال عن الأسعار: للمفرد والجمع",
              },
            },
            explanation: {
              en: "• For Singular items (غرض واحد):\n  - Question: 'How much is it?' / 'How much is this coffee?'\n  - Answer: 'It is 12 riyals.'\n\n• For Plural items (أكثر من غرض):\n  - Question: 'How much are these?' / 'How much are the notebooks?'\n  - Answer: 'They are 30 riyals.'",
              ar: "• عند السؤال عن شيء مفرد:\n  - السؤال: '?How much is this coffee' (كم سعر هذه القهوة؟)\n  - الإجابة: '.It is 12 riyals'\n\n• عند السؤال عن أشياء متعددة (جمع):\n  - السؤال: '?How much are these notebooks' (كم سعر هذه الدفاتر؟)\n  - الإجابة: '.They are 30 riyals'",
            },
          },
          data: {
            text: "Examples:\n• How much is the sandwich? -> It is 15 riyals.\n• How much are these pens? -> They are 10 riyals.",
          },
        },
        {
          id: "b_l5_4_4",
          type: "reorder_words",
          isActive: true,
          purpose: "sentence_building",
          extensions: {
            instruction: {
              text: {
                en: "Reorder the words to form correct price questions and answers.",
                ar: "رتب الكلمات لتكوين أسئلة وإجابات صحيحة عن الأسعار.",
              },
            },
          },
          data: {
            items: [
              {
                id: "rw_5_4_1",
                words: ["much", "How", "coffee", "this", "is", "?"],
                correctOrder: ["How", "much", "is", "this", "coffee", "?"],
                points: 1,
              },
              {
                id: "rw_5_4_2",
                words: ["is", "It", "riyals", "25", "total", "in"],
                correctOrder: ["It", "is", "25", "riyals", "in", "total"],
                points: 1,
              },
            ],
          },
        },
        {
          id: "b_l5_4_5",
          type: "fill_blanks",
          isActive: true,
          purpose: "controlled_practice",
          extensions: {
            instruction: {
              text: {
                en: "Fill in the missing words: [ much, are, cash ]",
                ar: "أكمل الفراغات بالكلمات المناسبة: [ much, are, cash ]",
              },
            },
          },
          data: {
            items: [
              {
                id: "fb_5_4_1",
                text: "How _____ is this notebook?",
                answer: "much",
                points: 1,
              },
              {
                id: "fb_5_4_2",
                text: "How much _____ these water bottles?",
                answer: "are",
                points: 1,
              },
              {
                id: "fb_5_4_3",
                text: "I want to pay with _____, here is 50 riyals.",
                answer: "cash",
                points: 1,
              },
            ],
          },
        },
        {
          id: "b_l5_4_6",
          type: "free_practice",
          isActive: true,
          purpose: "production",
          extensions: {
            title: {
              text: {
                en: "Ask & Answer About a Price",
                ar: "اسأل وأجب عن سعر غرض ما",
              },
            },
            instruction: {
              text: {
                en: "Write a mini-dialogue of two sentences: one asking for the price of an item, and one answering with a price in riyals.",
                ar: "اكتب حواراً مصغراً من جملتين: الأولى تسأل فيها عن سعر غرض، والثانية تجيب فيها بالسعر بالريال.",
              },
            },
            tip: {
              icon: "lightbulb",
              text: {
                en: "Example: How much is this laptop bag? It is 100 riyals.",
                ar: "مثال: How much is this laptop bag? It is 100 riyals.",
              },
            },
          },
          data: {
            text: "Write a 2-sentence mini dialogue asking and giving a price.\nExample: How much is this tea? It is 8 riyals.",
          },
        },
      ],
    },
    // ------------------------------------------------------------------------
    // LESSON 5: Unit 5 Practice & Review
    // ------------------------------------------------------------------------
    {
      id: "lesson_5_5",
      title: {
        en: "Unit 5 Practice & Review",
        ar: "مراجعة وتقييم الوحدة الخامسة",
      },
      slug: "unit-5-review",
      description: {
        en: "Comprehensive review of likes and dislikes, Present Simple, languages, nationalities, and cash transactions.",
        ar: "مراجعة شاملة للتفضيلات، المضارع البسيط، اللغات والجنسيات، والسؤال عن الأسعار والمعاملات المالية.",
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
          id: "b_l5_5_1",
          type: "matching",
          isActive: false, // معطل تفاعلياً حسب التوجيهات
          purpose: "unit_comprehensive_matching",
          extensions: {
            instruction: {
              text: {
                en: "Match the questions or statements on the left with their correct answers on the right.",
                ar: "صل الأسئلة أو العبارات على اليسار بالإجابات المناسبة لها على اليمين.",
              },
            },
          },
          data: {
            items: [
              {
                id: "m_5_5_1",
                left: "Do you speak English?",
                right: "Yes, I speak Arabic and English.",
                points: 1,
              },
              {
                id: "m_5_5_2",
                left: "How much is this coffee?",
                right: "It is 15 riyals.",
                points: 1,
              },
              {
                id: "m_5_5_3",
                left: "Do you like fast food?",
                right: "No, I don't. I prefer healthy food.",
                points: 1,
              },
            ],
          },
        },
        {
          id: "b_l5_5_2",
          type: "fill_blanks",
          isActive: true,
          purpose: "comprehensive_grammar_check",
          extensions: {
            title: {
              text: {
                en: "Review Fill-in-the-Blanks",
                ar: "اختبار مراجعة الفراغات",
              },
            },
            instruction: {
              text: {
                en: "Fill in the missing words using: [ love, speak, much, don't ]",
                ar: "أكمل الفراغات باستخدام الكلمات التالية: [ love, speak, much, don't ]",
              },
            },
          },
          data: {
            items: [
              {
                id: "fb_5_5_1",
                text: "I _____ playing football with my friends every weekend.",
                answer: "love",
                points: 1,
              },
              {
                id: "fb_5_5_2",
                text: "They _____ like tea; they prefer cold drinks.",
                answer: "don't",
                points: 1,
              },
              {
                id: "fb_5_5_3",
                text: "We _____ Arabic and English fluently.",
                answer: "speak",
                points: 1,
              },
              {
                id: "fb_5_5_4",
                text: "How _____ are these notebooks in total?",
                answer: "much",
                points: 1,
              },
            ],
          },
        },
        {
          id: "b_l5_5_3",
          type: "reorder_words",
          isActive: true,
          purpose: "sentence_structure_review",
          extensions: {
            instruction: {
              text: {
                en: "Reorder the words to build correct sentences.",
                ar: "رتب الكلمات لبناء جمل صحيحة.",
              },
            },
          },
          data: {
            items: [
              {
                id: "rw_5_5_1",
                words: ["prefer", "I", "coffee", "tea", "over"],
                correctOrder: ["I", "prefer", "coffee", "over", "tea"],
                points: 1,
              },
              {
                id: "rw_5_5_2",
                words: ["much", "How", "the", "is", "total", "?"],
                correctOrder: ["How", "much", "is", "the", "total", "?"],
                points: 1,
              },
            ],
          },
        },
        {
          id: "b_l5_5_4",
          type: "free_practice",
          isActive: true,
          purpose: "final_unit_challenge",
          extensions: {
            title: {
              text: {
                en: "Unit 5 Final Production Challenge",
                ar: "التحدي النهائي للوحدة الخامسة",
              },
            },
            instruction: {
              text: {
                en: "Write 3 sentences: 1) Express a preference (drink or sport). 2) State your nationality and a language you speak. 3) Ask or state a price for an item.",
                ar: "اكتب 3 جمل: 1) اعبر عن تفضيلك (مشروب أو رياضة). 2) اذكر جنسيتك ولغة تتحدثها. 3) اسأل أو اذكر سعر غرض ما.",
              },
            },
            tip: {
              icon: "lightbulb",
              text: {
                en: "Example: I love coffee. I am Saudi and I speak English. This notebook is 15 riyals.",
                ar: "مثال: I love coffee. I am Saudi and I speak English. This notebook is 15 riyals.",
              },
            },
          },
          data: {
            text: "Write 3 sentences covering preference, language, and price.\nExample: I prefer football to tennis. I am Saudi and speak Arabic. The coffee is 12 riyals.",
          },
        },
      ],
    },
  ],
};
