import { UnitType } from "@/types/learning";

// ============================================================================
// UNIT 1: First Connections
// ============================================================================

export const unit_1: UnitType = {
  id: "unit_1",
  title: {
    en: "Say Hi!",
    ar: "قل مرحباً!",
  },
  slug: "say-hi",
  overview: {
    summary: {
      en: "Learn foundational greetings, self-introductions, possessive adjectives, workplace items, and numbers 1-10.",
      ar: "تعلم التحيات الأساسية، التعريف بالنفس، صفات الملكية، الأشياء اليومية في مكان العمل، والأرقام من 1 إلى 10.",
    },
    learningObjectives: [
      {
        en: "Greet people at different times of the day",
        ar: "إلقاء التحية في أوقات اليوم المختلفة",
      },
      {
        en: "Introduce yourself and others using 'to be' and possessive adjectives",
        ar: "التعريف بالنفس وبالآخرين باستخدام فعل الكينونة وصفات الملكية",
      },
      {
        en: "Use articles (a / an) correctly with singular nouns",
        ar: "استخدام أدوات التنكير (a / an) بشكل صحيح مع الأسماء المفردة",
      },
      {
        en: "Count objects from 1 to 10 and use simple plural forms",
        ar: "عد الأشياء من 1 إلى 10 واستخدام صيغ الجمع البسيطة",
      },
    ],
    keyVocabulary: [
      "Hello",
      "Good morning",
      "Good afternoon",
      "Good evening",
      "Good night",
      "Name",
      "Team",
      "Manager",
      "Colleague",
      "Office",
      "bag",
      "apple",
      "house",
      "umbrella",
      "key",
      "phone",
    ],
    grammarFocus: [
      "Verb 'to be' (I am, You are)",
      "Possessive adjectives (my, your, his, her)",
      "Indefinite articles (a / an)",
      "Plural nouns with -s",
    ],
    skills: ["speaking", "listening", "vocabulary", "grammar", "reading"],
    prerequisites: [],
  },

  lessons: [
    // ==========================================================================
    // LESSON 1: First Encounters
    // ==========================================================================

    {
      id: "lesson_1_1",

      title: {
        en: "First Encounters",
        ar: "اللقاء الأول",
      },

      slug: "first-encounters",

      description: {
        en: "Learn essential greetings, self-introductions, and basic verb 'to be' structures.",
        ar: "تعلم التحيات الأساسية، والتعريف بالنفس، واستخدام الفعل To Be الأساسي.",
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
          id: "b_l1_1",

          type: "word_list",

          isActive: true,

          purpose: "vocabulary_presentation",

          extensions: {
            title: {
              text: {
                en: "Key Vocabulary",
                ar: "المفردات المفتاحية",
              },
            },

            instruction: {
              text: {
                en: "Study these core expressions used for introducing yourself.",
                ar: "استكشف الكلمات والعبارات الأساسية المستخدمة للتعريف بالنفس.",
              },
            },
          },

          data: {
            words: [
              {
                id: "w_1_1",
                word: "Hello",
                definition: "A standard greeting",
                example: "Hello! My name is Alex.",
              },
              {
                id: "w_1_2",
                word: "Hi",
                definition: "An informal greeting",
                example: "Hi! How are you?",
              },
              {
                id: "w_1_3",
                word: "Name",
                definition: "What a person is called",
                example: "My name is Sarah.",
              },
              {
                id: "w_1_4",
                word: "Nice to meet you",
                definition:
                  "A polite phrase when meeting someone for the first time",
                example: "Nice to meet you, Alex!",
              },
            ],
          },
        },

        {
          id: "b_l1_2",

          type: "dialogue",

          isActive: true,

          purpose: "contextual_presentation",

          extensions: {
            instruction: {
              text: {
                en: "Listen to and read this dialogue between Alex and Sarah.",
                ar: "استمع إلى هذا الحوار بين أليكس وسارة واقرأه بتمعن.",
              },
            },
          },

          data: {
            lines: [
              {
                id: "dl_1_1",
                speakerId: "alex",
                speaker: "Alex",
                text: "Hello! My name is Alex. What is your name?",
              },
              {
                id: "dl_1_2",
                speakerId: "sarah",
                speaker: "Sarah",
                text: "Hi! I am Sarah. Nice to meet you, Alex.",
              },
              {
                id: "dl_1_3",
                speakerId: "alex",
                speaker: "Alex",
                text: "Nice to meet you too, Sarah!",
              },
            ],
          },
        },

        {
          id: "b_l1_3",

          type: "grammar_point",

          isActive: true,

          purpose: "grammar_explanation",

          extensions: {
            title: {
              text: {
                en: "Grammar: Verb 'To Be' (I / You)",
                ar: "القواعد: الفعل (To Be) مع الضميرين I و You",
              },
            },

            explanation: {
              en: "Use 'I am' to state your identity. Use 'You are' when talking to another person. Short forms: I'm / You're.",
              ar: "استخدم 'I am' للحديث عن نفسك، واستخدم 'You are' عند التحدث المباشر مع الشخص الآخر. الصيغ القصيرة: I'm و You're.",
            },
          },

          data: {
            text: "Examples:\n• I am Alex. (I'm Alex)\n• You are Sarah. (You're Sarah)",
          },
        },

        {
          id: "b_l1_4",

          type: "matching",

          isActive: false,

          purpose: "greeting_matching",

          extensions: {
            instruction: {
              text: {
                en: "Match the greetings and phrases with their responses.",
                ar: "صل التحيات والعبارات بالردود المناسبة لها.",
              },
            },
          },

          data: {
            items: [
              {
                id: "m_1_1",
                left: "Hello!",
                right: "Hi!",
                points: 1,
              },
              {
                id: "m_1_2",
                left: "My name is Alex.",
                right: "Nice to meet you, Alex!",
                points: 1,
              },
              {
                id: "m_1_3",
                left: "Nice to meet you!",
                right: "Nice to meet you too!",
                points: 1,
              },
            ],
          },
        },

        {
          id: "b_l1_5",

          type: "fill_blanks",

          isActive: true,

          purpose: "controlled_practice",

          extensions: {
            instruction: {
              text: {
                en: "Complete the sentences with the missing words.",
                ar: "أكمل الجمل التالية بالكلمات المناسبة.",
              },
            },
          },

          data: {
            items: [
              {
                id: "fb_1_1",
                text: "Hello! I _____ Sarah.",
                answer: "am",
                points: 1,
              },
              {
                id: "fb_1_2",
                text: "My _____ is Alex.",
                answer: "name",
                points: 1,
              },
              {
                id: "fb_1_3",
                text: "Nice to _____ you!",
                answer: "meet",
                points: 1,
              },
            ],
          },
        },

        {
          id: "b_l1_6",

          type: "reorder_words",

          isActive: true,

          purpose: "sentence_building",

          extensions: {
            instruction: {
              text: {
                en: "Arrange the words to build a correct sentence.",
                ar: "رتب الكلمات لبناء جملة صحيحة.",
              },
            },
          },

          data: {
            items: [
              {
                id: "rw_1_1",
                words: ["is", "My", "Alex", "name"],
                correctOrder: ["My", "name", "is", "Alex"],
                points: 1,
              },
              {
                id: "rw_1_2",
                words: ["meet", "to", "Nice", "you"],
                correctOrder: ["Nice", "to", "meet", "you"],
                points: 1,
              },
            ],
          },
        },

        {
          id: "b_l1_7",

          type: "free_practice",

          isActive: true,

          purpose: "production",

          extensions: {
            title: {
              text: {
                en: "Practice Speaking",
                ar: "ممارسة التحدث",
              },
            },

            instruction: {
              text: {
                en: "Introduce yourself in English.",
                ar: "قدّم نفسك باللغة الإنجليزية.",
              },
            },

            tip: {
              icon: "lightbulb",

              text: {
                en: "Try saying: 'Hello! My name is...' and 'Nice to meet you!'",
                ar: "جرب أن تقول: 'Hello! My name is...' ثم 'Nice to meet you!'",
              },
            },
          },

          data: {
            text: "Practice introducing yourself out loud or in writing using your actual name.",
          },
        },
      ],
    },

    // ==========================================================================
    // LESSON 2: Meeting the Team
    // ==========================================================================

    {
      id: "lesson_1_2",

      title: {
        en: "Meeting the Team",
        ar: "التعرف على الفريق",
      },

      slug: "meeting-the-team",

      description: {
        en: "Learn possessive adjectives (my, your, his, her) and work-related vocabulary.",
        ar: "تعلم صفات الملكية (my, your, his, her) ومفردات التعارف في بيئة العمل.",
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
          id: "b_l2_1",

          type: "word_list",

          isActive: true,

          purpose: "vocabulary_presentation",

          extensions: {
            title: {
              text: {
                en: "Workplace & Team Words",
                ar: "مفردات بيئة العمل والفريق",
              },
            },

            instruction: {
              text: {
                en: "Learn these words for talking about colleagues and roles.",
                ar: "تعلم هذه المفردات للحديث عن الزملاء والأدوار في العمل.",
              },
            },
          },

          data: {
            words: [
              {
                id: "w_2_1",
                word: "Team",
                definition: "A group of people working together",
                example: "Welcome to our team!",
              },
              {
                id: "w_2_2",
                word: "Manager",
                definition:
                  "A person responsible for a department or group",
                example: "This is my manager, Omar.",
              },
              {
                id: "w_2_3",
                word: "Colleague",
                definition: "A person you work with",
                example: "Mona is my colleague.",
              },
              {
                id: "w_2_4",
                word: "Office",
                definition: "A place where business work is done",
                example: "Our office is on the second floor.",
              },
            ],
          },
        },

        {
          id: "b_l2_2",

          type: "dialogue",

          isActive: true,

          purpose: "contextual_presentation",

          extensions: {
            instruction: {
              text: {
                en: "Read how Alex introduces team members to Sarah.",
                ar: "اقرأ كيف يقدم أليكس أعضاء الفريق لسارة.",
              },
            },
          },

          data: {
            lines: [
              {
                id: "dl_2_1",
                speakerId: "alex",
                speaker: "Alex",
                text: "Sarah, this is Omar. His role is manager.",
              },
              {
                id: "dl_2_2",
                speakerId: "sarah",
                speaker: "Sarah",
                text: "Nice to meet you, Omar! And who is she?",
              },
              {
                id: "dl_2_3",
                speakerId: "alex",
                speaker: "Alex",
                text: "Her name is Mona. She is our lead designer.",
              },
              {
                id: "dl_2_4",
                speakerId: "sarah",
                speaker: "Sarah",
                text: "Great! Welcome to the team, Mona.",
              },
            ],
          },
        },

        {
          id: "b_l2_3",

          type: "grammar_point",

          isActive: true,

          purpose: "grammar_explanation",

          extensions: {
            title: {
              text: {
                en: "Grammar: Possessive Adjectives",
                ar: "القواعد: صفات الملكية (Possessive Adjectives)",
              },
            },

            explanation: {
              en: "Possessive adjectives go before nouns to show ownership:\n• my = belonging to me\n• your = belonging to you\n• his = belonging to a male\n• her = belonging to a female",

              ar: "تأتي صفات الملكية قبل الأسماء لإظهار الملكية:\n• my = لي\n• your = لك / لكم\n• his = له (للمذكر)\n• her = لها (للمؤنث)",
            },
          },

          data: {
            text: "Summary:\nI -> my\nYou -> your\nHe -> his\nShe -> her",
          },
        },

        {
          id: "b_l2_4",

          type: "matching",

          isActive: false,

          purpose: "pronoun_possessive_matching",

          extensions: {
            instruction: {
              text: {
                en: "Match the subject pronouns on the left to their possessive forms on the right.",
                ar: "طابق الضمائر الفاعلية على اليسار مع صفات الملكية المقابلة لها على اليمين.",
              },
            },
          },

          data: {
            items: [
              {
                id: "m_2_1",
                left: "I (Alex)",
                right: "my name",
                points: 1,
              },
              {
                id: "m_2_2",
                left: "He (Omar)",
                right: "his office",
                points: 1,
              },
              {
                id: "m_2_3",
                left: "She (Mona)",
                right: "her role",
                points: 1,
              },
              {
                id: "m_2_4",
                left: "You",
                right: "your team",
                points: 1,
              },
            ],
          },
        },

        {
          id: "b_l2_5",

          type: "fill_blanks",

          isActive: true,

          purpose: "controlled_practice",

          extensions: {
            instruction: {
              text: {
                en: "Complete each sentence with my, your, his, or her.",
                ar: "أكمل كل جملة باستخدام my أو your أو his أو her.",
              },
            },
          },

          data: {
            items: [
              {
                id: "fb_2_1",
                text: "This is Mona. _____ name is written on the desk.",
                answer: "Her",
                points: 1,
              },
              {
                id: "fb_2_2",
                text: "This is Omar. _____ office is near the entrance.",
                answer: "His",
                points: 1,
              },
              {
                id: "fb_2_3",
                text: "I am Alex, and this is _____ colleague Sarah.",
                answer: "my",
                points: 1,
              },
            ],
          },
        },

        {
          id: "b_l2_6",

          type: "free_practice",

          isActive: true,

          purpose: "production",

          extensions: {
            title: {
              text: {
                en: "Student Turn: Introduce a Colleague",
                ar: "تطبيق الطالب: التعريف بزميل",
              },
            },

            instruction: {
              text: {
                en: "Write or say two sentences introducing a colleague using his/her.",
                ar: "اكتب أو قل جملتين تعرّف فيهما بزميل لك باستخدام his أو her.",
              },
            },

            tip: {
              icon: "lightbulb",

              text: {
                en: "Example: This is Omar. His role is manager.",
                ar: "مثال: This is Omar. His role is manager.",
              },
            },
          },

          data: {
            text: "Write or say two sentences introducing a colleague using his or her.\nExample: This is Omar. His role is manager.",
          },
        },
      ],
    },
    //
    {
  id: "lesson_1_3",
  title: {
    en: "Day & Night Greetings",
    ar: "تحيات النهار والليل",
  },
  slug: "day-and-night-greetings",
  description: {
    en: "Learn time-specific greetings and how to ask about someone's day politely.",
    ar: "تعلم التحيات الخاصة بكل وقت من اليوم وكيفية السؤال عن الحال بتهذيب.",
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
      id: "b_l3_1",
      type: "dialogue",
      isActive: true,
      purpose: "contextual_presentation",
      extensions: {
        instruction: {
          id: "inst_6",
          text: {
            en: "Listen to the morning greeting at a local bakery.",
            ar: "استمع إلى تحية الصباح في المخبز.",
          },
        },
        audio: {
          url: "/audio/unit1/lesson3/dialogue1.mp3",
          ref: "Audio 3.1",
        },
      },
      data: {
        image: {
          url: "/images/unit1/bakery-morning.jpg",
          description:
            "A cozy bakery in a sunny European street at 8:30 AM. Sunlight streaming through the window. Clock shows 8:30. Emma is ordering at the counter from Mario.",
        },
        lines: [
          { id: "l3_1", speakerId: "1st", speaker: "Mario", text: "Good morning! How are you today?" },
          { id: "l3_2", speakerId: "2nd", speaker: "Emma", text: "Good morning, Mario! I’m very well, thank you." },
          { id: "l3_3", speakerId: "1st", speaker: "Mario", text: "Here is your coffee. Have a nice day!" },
          { id: "l3_4", speakerId: "2nd", speaker: "Emma", text: "Thank you! You too." },
        ],
      },
    },

    {
      id: "b_l3_2",
      type: "grammar_point",
      isActive: true,
      purpose: "time_greetings_rule",
      extensions: {
        title: {
          text: {
            en: "Greetings by Time of Day",
            ar: "التحيات حسب أوقات اليوم",
          },
        },
        tip: {
          icon: "lamp",
          text: {
            en: "8:00 AM - 12:00 PM = Good morning! | 12:00 PM - 5:00 PM = Good afternoon! | 5:00 PM - 9:00 PM = Good evening! | Bedtime / Leaving at night = Good night!",
            ar: "من 8:00 صباحاً إلى 12:00 ظهراً = Good morning! | من 12:00 ظهراً إلى 5:00 مساءً = Good afternoon! | من 5:00 مساءً إلى 9:00 مساءً = Good evening! | عند النوم أو المغادرة ليلاً = Good night!",
          },
        },
      },
      data: {
        text: "• Morning (8:00 AM – 12:00 PM): Good morning!\n• Afternoon (12:00 PM – 5:00 PM): Good afternoon!\n• Evening (5:00 PM – 9:00 PM): Good evening!\n• Night (Bedtime / Leaving): Good night!",
      },
    },

    {
      id: "b_l3_3",
      type: "dialogue",
      isActive: true,
      purpose: "everyday_situation_afternoon",
      extensions: {
        audio: {
          url: "/audio/unit1/lesson3/dialogue2.mp3",
          ref: "Audio 3.2",
        },
      },
      data: {
        image: {
          url: "/images/unit1/park-afternoon.jpg",
          description:
            "A public city park at 2:15 PM. Bright sun. Two friends walking their dogs meet on a path.",
        },
        lines: [
          { id: "l3_c1_1", speakerId: "1st", speaker: "Tom", text: "Good afternoon, Anna!" },
          { id: "l3_c1_2", speakerId: "2nd", speaker: "Anna", text: "Good afternoon, Tom! How’s it going?" },
          { id: "l3_c1_3", speakerId: "1st", speaker: "Tom", text: "All good, thanks!" },
        ],
      },
    },

    {
      id: "b_l3_4",
      type: "dialogue",
      isActive: true,
      purpose: "everyday_situation_evening",
      data: {
        image: {
          url: "/images/unit1/hotel-evening.jpg",
          description:
            "A warm hotel reception area at 7:00 PM. Dim orange lighting. Receptionist greeting a guest.",
        },
        lines: [
          { id: "l3_c2_1", speakerId: "1st", speaker: "Receptionist", text: "Good evening, sir. Welcome!" },
          { id: "l3_c2_2", speakerId: "2nd", speaker: "Guest", text: "Good evening. I have a reservation." },
        ],
      },
    },

    {
      id: "b_l3_5",
      type: "dialogue",
      isActive: true,
      purpose: "everyday_situation_night",
      data: {
        image: {
          url: "/images/unit1/bedroom-night.jpg",
          description:
            "A cozy bedroom at 10:30 PM. Bedside lamp is on. A mother saying goodnight to her son in bed.",
        },
        lines: [
          { id: "l3_c3_1", speakerId: "1st", speaker: "Mom", text: "Good night, Leo!" },
          { id: "l3_c3_2", speakerId: "2nd", speaker: "Leo", text: "Good night, Mom! See you tomorrow." },
        ],
      },
    },

    {
      id: "b_l3_6",
      type: "fill_blanks",
      isActive: true,
      purpose: "controlled_practice",
      extensions: {
        title: {
          text: {
            en: "Student Turn: Practice Greetings",
            ar: "تطبيق الطالب: ممارسة التحيات",
          },
        },
        instruction: {
          id: "inst_7",
          text: {
            en: "Complete the sentences based on the clock times provided.",
            ar: "أكمل الجمل بناءً على الوقت المحدد أمامك.",
          },
        },
      },
      data: {
        items: [
          {
            id: "blank_t1",
            text: "9:00 AM: _____! How are you?",
            answer: "Good morning",
            points: 1,
          },
          {
            id: "blank_t2",
            text: "3:00 PM: _____, Tom!",
            answer: "Good afternoon",
            points: 1,
          },
          {
            id: "blank_t3",
            text: "10:00 PM (Bedtime): _____! See you tomorrow.",
            answer: "Good night",
            points: 1,
          },
        ],
      },
    },
  ],
},
//
  {
  id: "lesson_1_4",
  title: {
    en: "My Workspace & Numbers",
    ar: "مساحة عملي والأرقام",
  },
  slug: "workspace-and-numbers",
  description: {
    en: "Identify everyday objects with articles (a/an) and learn numbers 1 to 10 with plurals.",
    ar: "التعرف على الأشياء اليومية مع أدوات التنكير (a/an) وتعلم الأرقام من 1 إلى 10 مع الجمع.",
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
      id: "b_l4_1",
      type: "image_cards",
      isActive: true,
      purpose: "visual_vocabulary",
      extensions: {
        instruction: {
          id: "inst_8",
          text: {
            en: "Listen and repeat the everyday objects.",
            ar: "استمع وكرر أسماء الأشياء اليومية.",
          },
        },
        audio: {
          url: "/audio/unit1/lesson4/vocab.mp3",
          ref: "Audio 4.1",
        },
      },
      data: {
        items: [
          {
            id: "card_1",
            image: { url: "/images/unit1/bag.jpg", alt: "bag" },
            text: "a bag (حقيبة)",
          },
          {
            id: "card_2",
            image: { url: "/images/unit1/apple.jpg", alt: "apple" },
            text: "an apple (تفاحة)",
          },
          {
            id: "card_3",
            image: { url: "/images/unit1/house.jpg", alt: "house" },
            text: "a house (بيت)",
          },
          {
            id: "card_4",
            image: { url: "/images/unit1/umbrella.jpg", alt: "umbrella" },
            text: "an umbrella (مظلة)",
          },
          {
            id: "card_5",
            image: { url: "/images/unit1/key.jpg", alt: "key" },
            text: "a key (مفتاح)",
          },
          {
            id: "card_6",
            image: { url: "/images/unit1/phone.jpg", alt: "phone" },
            text: "a phone (هاتف)",
          },
        ],
      },
    },

    {
      id: "b_l4_2",
      type: "grammar_point",
      isActive: true,
      purpose: "articles_rule",
      extensions: {
        title: {
          text: {
            en: "Using a / an",
            ar: "استخدام a / an",
          },
        },
        tip: {
          icon: "lamp",
          text: {
            en: "Use 'a' before consonant sounds (a bag, a key). Use 'an' before vowel sounds a, e, i, o, u (an apple, an umbrella).",
            ar: "استخدم 'a' قبل الأصوات الساكنة (مثل: a bag, a key). واستخدم 'an' قبل حروف العلة a, e, i, o, u (مثل: an apple, an umbrella).",
          },
        },
      },
      data: {
        text: "• a + Consonant sound (a bag / a house / a key / a phone)\n• an + Vowel sound (an apple / an umbrella)",
      },
    },

    {
      id: "b_l4_3",
      type: "dialogue",
      isActive: true,
      purpose: "contextual_practice",
      extensions: {
        audio: {
          url: "/audio/unit1/lesson4/dialogue1.mp3",
          ref: "Audio 4.2",
        },
      },
      data: {
        image: {
          url: "/images/unit1/fruit-market.jpg",
          description:
            "A vibrant outdoor street fruit market on a rainy afternoon. Carlos holding an umbrella, buying apples from a vendor.",
        },
        lines: [
          { id: "l4_1", speakerId: "1st", speaker: "Vendor", text: "Hello! Good afternoon." },
          { id: "l4_2", speakerId: "2nd", speaker: "Carlos", text: "Hi! Three apples and a bag, please." },
          { id: "l4_3", speakerId: "1st", speaker: "Vendor", text: "Here you go. Three apples and one bag." },
          { id: "l4_4", speakerId: "2nd", speaker: "Carlos", text: "Thank you very much!" },
          { id: "l4_5", speakerId: "1st", speaker: "Vendor", text: "You're welcome. Have a nice day!" },
        ],
      },
    },

    {
      id: "b_l4_4",
      type: "word_list",
      isActive: true,
      purpose: "numbers_and_plurals",
      extensions: {
        title: {
          text: {
            en: "Numbers 1 to 10 & Plural Nouns",
            ar: "الأرقام من 1 إلى 10 وأسماء الجمع",
          },
        },
        audio: {
          url: "/audio/unit1/lesson4/numbers.mp3",
          ref: "Audio 4.3",
        },
        tip: {
          icon: "lamp",
          text: {
            en: "To make a noun plural, add 's' at the end: one key -> two keys.",
            ar: "لجعل الاسم جمعاً، أضف حرف 's' في نهايته: one key -> two keys.",
          },
        },
      },
      data: {
        words: [
          { id: "num_1", word: "1 - One", definition: "one bag (or a bag)" },
          { id: "num_2", word: "2 - Two", definition: "two bags" },
          { id: "num_3", word: "3 - Three", definition: "three apples" },
          { id: "num_4", word: "4 - Four", definition: "four keys" },
          { id: "num_5", word: "5 - Five", definition: "five houses" },
          { id: "num_6", word: "6 - Six", definition: "six phones" },
          { id: "num_7", word: "7 - Seven", definition: "seven umbrellas" },
          { id: "num_8", word: "8 - Eight", definition: "eight apples" },
          { id: "num_9", word: "9 - Nine", definition: "nine keys" },
          { id: "num_10", word: "10 - Ten", definition: "ten bags" },
        ],
      },
    },

    {
      id: "b_l4_5",
      type: "free_practice",
      isActive: true,
      purpose: "speaking_production",
      extensions: {
        title: {
          text: {
            en: "Student Turn: Practice Speaking",
            ar: "تطبيق الطالب: ممارسة التحدث",
          },
        },
        instruction: {
          id: "inst_9",
          text: {
            en: "Look around your room or desk. Say or write 2 things you have using numbers.",
            ar: "انظر حولك في الغرفة. قل أو اكتب شيئين تملكهما مع الأرقام.",
          },
        },
        tip: {
          icon: "lightbulb",
          text: {
            en: "Example: I have two phones and three keys.",
            ar: "مثال: أملك هاتفين وثلاثة مفاتيح.",
          },
        },
      },
      data: {
        text: "Look around your room or desk. Say or write 2 things you have using numbers.\nExample: I have two phones and three keys.",
      },
    },
  ],
},
//
  {
  id: "lesson_1_5",
  title: {
    en: "Unit 1 Practice & Review",
    ar: "مراجعة وتقييم الوحدة الأولى",
  },
  slug: "unit-1-review",
  description: {
    en: "Comprehensive review of greetings, self-introductions, possessive adjectives, workplace items, and numbers 1-10.",
    ar: "مراجعة شاملة للتحيات، التعارف، صفات الملكية، مفردات مكان العمل، والأرقام من 1 إلى 10.",
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
      id: "b_l5_1",
      type: "matching",
      isActive: false, // تم تعيينه false حسب التوجيهات لبلوكات matching و table
      purpose: "situational_matching",
      extensions: {
        instruction: {
          id: "inst_10",
          text: {
            en: "Match the situation on the left with the correct greeting or phrase on the right.",
            ar: "صل الموقف في اليسار بالتحية المناسبة في اليمين.",
          },
        },
      },
      data: {
        items: [
          {
            id: "m_5_1",
            left: "Meeting someone at 9:00 AM in a bakery.",
            right: "Good morning!",
            points: 1,
          },
          {
            id: "m_5_2",
            left: "Saying goodbye to family at 10:30 PM.",
            right: "Good night!",
            points: 1,
          },
          {
            id: "m_5_3",
            left: "Meeting a friend at 3:00 PM in the park.",
            right: "Good afternoon!",
            points: 1,
          },
          {
            id: "m_5_4",
            left: "Introducing a colleague: Sarah, _____ Adam.",
            right: "this is",
            points: 1,
          },
        ],
      },
    },
    {
      id: "b_l5_2",
      type: "fill_blanks",
      isActive: true,
      purpose: "dialogue_completion",
      extensions: {
        title: {
          text: {
            en: "Comprehensive Dialogue Practice",
            ar: "تمرين حوار شامل",
          },
        },
        instruction: {
          id: "inst_11",
          text: {
            en: "Complete the dialogue using: [ is, My, am, Nice, is ]",
            ar: "أكمل الحوار باستخدام الكلمات التالية: [ is, My, am, Nice, is ]",
          },
        },
      },
      data: {
        items: [
          {
            id: "rev_b1",
            text: "Omar: Hi! What _____ your name?",
            answer: "is",
            points: 1,
          },
          {
            id: "rev_b2",
            text: "Lina: Hello! _____ name is Lina. And you?",
            answer: "My",
            points: 1,
          },
          {
            id: "rev_b3",
            text: "Omar: I _____ Omar.",
            answer: "am",
            points: 1,
          },
          {
            id: "rev_b4",
            text: "Lina: _____ to meet you, Omar!",
            answer: "Nice",
            points: 1,
          },
          {
            id: "rev_b5",
            text: "Omar: Nice to meet you too! This _____ my brother, Rayan.",
            answer: "is",
            points: 1,
          },
        ],
      },
    },
    {
      id: "b_l5_3",
      type: "reorder_words",
      isActive: true,
      purpose: "sentence_structure_review",
      extensions: {
        title: {
          text: {
            en: "Sentence Order Practice",
            ar: "تمرين ترتيب الجمل",
          },
        },
        instruction: {
          id: "inst_12",
          text: {
            en: "Put the words in the correct order to form complete sentences.",
            ar: "رتب الكلمات لتكوين جمل صحيحة.",
          },
        },
      },
      data: {
        items: [
          {
            id: "ro_1",
            words: ["name", "My", "Alex", "is"],
            correctOrder: ["My", "name", "is", "Alex"],
            points: 1,
          },
          {
            id: "ro_2",
            words: ["you", "are", "How", "today", "?"],
            correctOrder: ["How", "are", "you", "today", "?"],
            points: 1,
          },
          {
            id: "ro_3",
            words: ["keys", "three", "have", "I"],
            correctOrder: ["I", "have", "three", "keys"],
            points: 1,
          },
        ],
      },
    },
    {
      id: "b_l5_4",
      type: "fill_blanks",
      isActive: true,
      purpose: "grammar_articles_plurals_check",
      extensions: {
        title: {
          text: {
            en: "Grammar & Articles Check",
            ar: "اختبار القواعد وأدوات التنكير",
          },
        },
        instruction: {
          id: "inst_13",
          text: {
            en: "Type the correct word (a, an, two, one).",
            ar: "اكتب الكلمة الصحيحة (a, an, two, one).",
          },
        },
      },
      data: {
        items: [
          {
            id: "gc_1",
            text: "I have _____ apple in my bag.",
            answer: "an",
            points: 1,
          },
          {
            id: "gc_2",
            text: "She has _____ phone.",
            answer: "a",
            points: 1,
          },
          {
            id: "gc_3",
            text: "Look at those _____ umbrellas!",
            answer: "two",
            points: 1,
          },
          {
            id: "gc_4",
            text: "There is _____ house on the street.",
            answer: "one",
            points: 1,
          },
        ],
      },
    },
    {
      id: "b_l5_5",
      type: "free_practice",
      isActive: true,
      purpose: "final_challenge_production",
      extensions: {
        title: {
          text: {
            en: "Final Challenge",
            ar: "التحدي النهائي",
          },
        },
        instruction: {
          id: "inst_14",
          text: {
            en: "Record or write 3 sentences introducing yourself, introducing a friend, and listing 2 things you have.",
            ar: "سجل أو اكتب 3 جمل تعرّف فيها بنفسك، وبصديقك، وتذكر شيئين تملكهما.",
          },
        },
        tip: {
          icon: "lightbulb",
          text: {
            en: "Example: Hi, I'm Alex. This is my friend Sarah. I have two keys and a phone.",
            ar: "مثال: Hi, I'm Alex. This is my friend Sarah. I have two keys and a phone.",
          },
        },
      },
      data: {
        text: "Record or write 3 sentences introducing yourself, introducing a friend, and listing 2 things you have.\nExample: Hi, I'm Alex. This is my friend Sarah. I have two keys and a phone.",
      },
    },
  ],
},
],
};