import { UnitType } from "@/types/learning";

/* ========================================
    UNIT 2: Around the Globe
=================================== */
export const unit_2: UnitType = {
  id: "unit_2",
  title: {
    en: "Around the Globe",
    ar: "حول العالم",
  },
  slug: "around-the-globe",
  overview: {
    summary: {
      en: "Learn to discuss countries, cities, origins, subject pronouns, possessive adjectives, place descriptions, and numbers 11 to 30.",
      ar: "تعلم الحديث عن الدول والمدن والبلد الأصلي، وضمائر الفاعل، وصفات الملكية، ووصف الأماكن، والأرقام من 11 إلى 30.",
    },
    learningObjectives: [
      {
        en: "Ask and answer where people are from (Countries & Cities)",
        ar: "السؤال والإجابة عن البلد والمدينة للأشخاص",
      },
      {
        en: "Use subject pronouns correctly (he, she, they)",
        ar: "استخدام ضمائر الفاعل بشكل صحيح (he, she, they)",
      },
      {
        en: "Master possessive adjectives (his, her, their)",
        ar: "إتقان صفات الملكية (his, her, their)",
      },
      {
        en: "Combine simple adjectives with nouns to describe places",
        ar: "دمج الصفات مع الأسماء لوصف الأماكن",
      },
      {
        en: "Count numbers from 11 to 30 in real-life contexts",
        ar: "عد الأرقام من 11 إلى 30 في سياقات الحياة اليومية",
      },
    ],
    keyVocabulary: [
      "Saudi Arabia",
      "Riyadh",
      "Egypt",
      "Cairo",
      "UK",
      "London",
      "big",
      "small",
      "quiet",
      "beautiful",
      "eleven",
      "twelve",
      "twenty",
      "thirty",
    ],
    grammarFocus: [
      "Where are you from? / I am from...",
      "Subject pronouns: he, she, they",
      "Possessive adjectives: his, her, their",
      "Adjective + Noun order (e.g., a big city)",
    ],
    skills: ["speaking", "listening", "vocabulary", "grammar", "reading"],
    prerequisites: ["unit_1"],
  },
  lessons: [
    // ------------------------------------------------------------------------
    // LESSON 1: Where Are You From?
    // ------------------------------------------------------------------------
    {
      id: "lesson_2_1",
      title: {
        en: "Where Are You From?",
        ar: "من أين أنت؟",
      },
      slug: "where-are-you-from",
      description: {
        en: "Learn to ask and answer questions about countries, cities, and national origins.",
        ar: "تعلم كيفية السؤال والإجابة عن الدول، المدن، والبلد الأصلي.",
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
          id: "b_l2_1_1",
          type: "word_list",
          isActive: true,
          purpose: "vocabulary_presentation",
          extensions: {
            title: {
              text: {
                en: "Countries & Cities",
                ar: "الدول والمدن",
              },
            },
            instruction: {
              text: {
                en: "Learn essential vocabulary for countries and capital cities.",
                ar: "تعلم المفردات الأساسية للدول والمدن العواصم.",
              },
            },
          },
          data: {
            words: [
              {
                id: "w_2_1_1",
                word: "Saudi Arabia",
                definition: "A country in the Middle East",
                example: "I am from Saudi Arabia.",
              },
              {
                id: "w_2_1_2",
                word: "Riyadh",
                definition: "The capital city of Saudi Arabia",
                example: "Riyadh is a big city.",
              },
              {
                id: "w_2_1_3",
                word: "Egypt",
                definition: "A country in North Africa",
                example: "She is from Egypt.",
              },
              {
                id: "w_2_1_4",
                word: "London",
                definition: "The capital city of the UK",
                example: "London is in the UK.",
              },
            ],
          },
        },
        {
          id: "b_l2_1_2",
          type: "dialogue",
          isActive: true,
          purpose: "contextual_presentation",
          extensions: {
            instruction: {
              text: {
                en: "Listen to Tariq and John meeting at an international airport.",
                ar: "استمع إلى طارق وجون أثناء لقائهما في مطار دولي.",
              },
            },
          },
          data: {
            lines: [
              {
                id: "dl_2_1_1",
                speakerId: "tariq",
                speaker: "Tariq",
                text: "Hello! Where are you from?",
              },
              {
                id: "dl_2_1_2",
                speakerId: "john",
                speaker: "John",
                text: "Hi! I am from London, in the UK. And you?",
              },
              {
                id: "dl_2_1_3",
                speakerId: "tariq",
                speaker: "Tariq",
                text: "I am from Saudi Arabia. I live in Riyadh.",
              },
              {
                id: "dl_2_1_4",
                speakerId: "john",
                speaker: "John",
                text: "Welcome to London, Tariq!",
              },
            ],
          },
        },
        {
          id: "b_l2_1_3",
          type: "grammar_point",
          isActive: true,
          purpose: "grammar_explanation",
          extensions: {
            title: {
              text: {
                en: "Asking About Origin",
                ar: "السؤال عن بلد المنشأ",
              },
            },
            explanation: {
              en: "To ask someone about their country or city, use: 'Where are you from?'. Answer with: 'I am from [Country/City]'.",
              ar: "للسؤال عن بلد أو مدينة شخص ما، استخدم: '?Where are you from'. وللإجابة استخدم: '[I am from [Country/City'.",
            },
          },
          data: {
            text: "Question: Where are you from?\nAnswer: I am from Saudi Arabia. / I'm from Cairo.",
          },
        },
        {
          id: "b_l2_1_4",
          type: "matching",
          isActive: false,
          purpose: "country_city_matching",
          extensions: {
            instruction: {
              text: {
                en: "Match the countries on the left with their cities on the right.",
                ar: "صل الدول على اليسار بالمدن التابعة لها على اليمين.",
              },
            },
          },
          data: {
            items: [
              {
                id: "m_2_1_1",
                left: "Saudi Arabia",
                right: "Riyadh",
                points: 1,
              },
              {
                id: "m_2_1_2",
                left: "UK",
                right: "London",
                points: 1,
              },
              {
                id: "m_2_1_3",
                left: "Egypt",
                right: "Cairo",
                points: 1,
              },
            ],
          },
        },
        {
          id: "b_l2_1_5",
          type: "fill_blanks",
          isActive: true,
          purpose: "controlled_practice",
          extensions: {
            instruction: {
              text: {
                en: "Complete the questions and answers with from, Where, or am.",
                ar: "أكمل الأسئلة والإجابات باستخدام from أو Where أو am.",
              },
            },
          },
          data: {
            items: [
              {
                id: "fb_2_1_1",
                text: "_____ are you from?",
                answer: "Where",
                points: 1,
              },
              {
                id: "fb_2_1_2",
                text: "I _____ from Egypt.",
                answer: "am",
                points: 1,
              },
              {
                id: "fb_2_1_3",
                text: "He is _____ Saudi Arabia.",
                answer: "from",
                points: 1,
              },
            ],
          },
        },
        {
          id: "b_l2_1_6",
          type: "free_practice",
          isActive: true,
          purpose: "production",
          extensions: {
            title: {
              text: {
                en: "Practice Speaking: State Your Origin",
                ar: "تطبيق الطالب: اذكر من أين أنت",
              },
            },
            instruction: {
              text: {
                en: "Say or write where you are from (country and city).",
                ar: "قل أو اكتب من أين أنت (الدولة والمدينة).",
              },
            },
            tip: {
              icon: "lightbulb",
              text: {
                en: "Example: I am from Saudi Arabia. I live in Sakaka.",
                ar: "مثال: I am from Saudi Arabia. I live in Sakaka.",
              },
            },
          },
          data: {
            text: "State your country and city in English.\nExample: I am from Saudi Arabia. I live in Sakaka.",
          },
        },
      ],
    },

    // ------------------------------------------------------------------------
    // LESSON 2: Pronouns & People
    // ------------------------------------------------------------------------
    {
      id: "lesson_2_2",
      title: {
        en: "Pronouns & People",
        ar: "الضمائر والحديث عن الآخرين",
      },
      slug: "pronouns-and-people",
      description: {
        en: "Master subject pronouns (he, she, they) and possessive adjectives (his, her, their) to talk about people.",
        ar: "أتقن ضمائر الفاعل (he, she, they) وصفات الملكية (his, her, their) للحديث عن الآخرين.",
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
          id: "b_l2_2_1",
          type: "word_list",
          isActive: true,
          purpose: "vocabulary_presentation",
          extensions: {
            title: {
              text: {
                en: "Subject Pronouns & Possessive Forms",
                ar: "ضمائر الفاعل وصيغ الملكية",
              },
            },
            instruction: {
              text: {
                en: "Study how pronouns change when showing ownership or connection.",
                ar: "ادرس كيف تتغير الضمائر عند إظهار الملكية أو الارتباط.",
              },
            },
          },
          data: {
            words: [
              {
                id: "w_2_2_1",
                word: "He / His",
                definition: "Used for a male person",
                example: "He is Carlos. His city is Madrid.",
              },
              {
                id: "w_2_2_2",
                word: "She / Her",
                definition: "Used for a female person",
                example: "She is Anna. Her country is Germany.",
              },
              {
                id: "w_2_2_3",
                word: "They / Their",
                definition: "Used for more than one person",
                example: "They are tourists. Their hotel is big.",
              },
            ],
          },
        },
        {
          id: "b_l2_2_2",
          type: "dialogue",
          isActive: true,
          purpose: "contextual_presentation",
          extensions: {
            instruction: {
              text: {
                en: "Read how Sara introduces international colleagues.",
                ar: "اقرأ كيف تُعرف سارة بالزملاء الدوليين.",
              },
            },
          },
          data: {
            lines: [
              {
                id: "dl_2_2_1",
                speakerId: "sara",
                speaker: "Sara",
                text: "Look at Carlos. He is from Spain. His city is Madrid.",
              },
              {
                id: "dl_2_2_2",
                speakerId: "ali",
                speaker: "Ali",
                text: "And who is she?",
              },
              {
                id: "dl_2_2_3",
                speakerId: "sara",
                speaker: "Sara",
                text: "She is Marie. Her country is France.",
              },
              {
                id: "dl_2_2_4",
                speakerId: "ali",
                speaker: "Ali",
                text: "Who are they?",
              },
              {
                id: "dl_2_2_5",
                speakerId: "sara",
                speaker: "Sara",
                text: "They are Leo and Mia. Their home is in Italy.",
              },
            ],
          },
        },
        {
          id: "b_l2_2_3",
          type: "grammar_point",
          isActive: true,
          purpose: "grammar_explanation",
          extensions: {
            title: {
              text: {
                en: "Subject vs Possessive (He / She / They)",
                ar: "ضمائر الفاعل مقابل الملكية (He / She / They)",
              },
            },
            explanation: {
              en: "• He -> His\n• She -> Her\n• They -> Their",
              ar: "• He (فاعل للمذكر) -> His (ملكية للمذكر)\n• She (فاعل للمؤنث) -> Her (ملكية للمؤنث)\n• They (فاعل للجمع) -> Their (ملكية للجمع)",
            },
          },
          data: {
            text: "Summary:\n• He is from Japan. -> His name is Ken.\n• She is from Brazil. -> Her name is Maria.\n• They are from the USA. -> Their city is New York.",
          },
        },
        {
          id: "b_l2_2_4",
          type: "matching",
          isActive: false,
          purpose: "pronoun_matching",
          extensions: {
            instruction: {
              text: {
                en: "Match the subject pronouns on the left with their possessive adjectives on the right.",
                ar: "صل ضمائر الفاعل على اليسار بصفات الملكية المناسبة على اليمين.",
              },
            },
          },
          data: {
            items: [
              {
                id: "m_2_2_1",
                left: "He",
                right: "his",
                points: 1,
              },
              {
                id: "m_2_2_2",
                left: "She",
                right: "her",
                points: 1,
              },
              {
                id: "m_2_2_3",
                left: "They",
                right: "their",
                points: 1,
              },
            ],
          },
        },
        {
          id: "b_l2_2_5",
          type: "fill_blanks",
          isActive: true,
          purpose: "controlled_practice",
          extensions: {
            instruction: {
              text: {
                en: "Fill in the blanks with he, her, or their.",
                ar: "أكمل الفراغات بـ he أو her أو their.",
              },
            },
          },
          data: {
            items: [
              {
                id: "fb_2_2_1",
                text: "This is Ali. _____ is a student.",
                answer: "He",
                points: 1,
              },
              {
                id: "fb_2_2_2",
                text: "Lina is in London. _____ city is cold today.",
                answer: "Her",
                points: 1,
              },
              {
                id: "fb_2_2_3",
                text: "Tom and Alex are friends. _____ teacher is helpful.",
                answer: "Their",
                points: 1,
              },
            ],
          },
        },
        {
          id: "b_l2_2_6",
          type: "free_practice",
          isActive: true,
          purpose: "production",
          extensions: {
            title: {
              text: {
                en: "Describe a Person",
                ar: "وصف شخص آخر",
              },
            },
            instruction: {
              text: {
                en: "Write two sentences about a friend or family member stating their origin and name.",
                ar: "اكتب جملتين عن صديق أو فرد من العائلة تذكر فيهما اسمه وبلده.",
              },
            },
            tip: {
              icon: "lightbulb",
              text: {
                en: "Example: He is Ahmed. His city is Sakaka.",
                ar: "مثال: He is Ahmed. His city is Sakaka.",
              },
            },
          },
          data: {
            text: "Write two sentences using He/His or She/Her.\nExample: She is Layla. Her city is Jeddah.",
          },
        },
      ],
    },
  // ------------------------------------------------------------------------
    // LESSON 3: Describing Places
    // ------------------------------------------------------------------------
    {
      id: "lesson_2_3",
      title: {
        en: "Describing Places",
        ar: "وصف الأماكن",
      },
      slug: "describing-places",
      description: {
        en: "Learn simple adjectives and combine them with nouns to describe cities, towns, and countries.",
        ar: "تعلم الصفات البسيطة ودمجها مع الأسماء لوصف المدن والبلدان.",
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
          id: "b_l2_3_1",
          type: "image_cards",
          isActive: true,
          purpose: "visual_vocabulary",
          extensions: {
            instruction: {
              text: {
                en: "Look at the images and learn descriptive phrases for places.",
                ar: "انظر إلى الصور وتعلم العبارات الوصفية للأماكن.",
              },
            },
          },
          data: {
            items: [
              {
                id: "card_2_3_1",
                image: { url: "/images/unit2/big-city.jpg", alt: "Big City" },
                text: "a big city (مدينة كبيرة)",
              },
              {
                id: "card_2_3_2",
                image: { url: "/images/unit2/quiet-town.jpg", alt: "Quiet Town" },
                text: "a quiet town (بلدة هادئة)",
              },
              {
                id: "card_2_3_3",
                image: { url: "/images/unit2/beautiful-country.jpg", alt: "Beautiful Country" },
                text: "a beautiful country (بلد جميل)",
              },
              {
                id: "card_2_3_4",
                image: { url: "/images/unit2/hot-weather.jpg", alt: "Hot Weather" },
                text: "hot weather (طقس حار)",
              },
            ],
          },
        },
        {
          id: "b_l2_3_2",
          type: "grammar_point",
          isActive: true,
          purpose: "grammar_explanation",
          extensions: {
            title: {
              text: {
                en: "Adjective + Noun Order",
                ar: "ترتيب الصفة والموصوف في الإنجليزية",
              },
            },
            explanation: {
              en: "In English, adjectives go BEFORE nouns: 'a big city' (not 'a city big'). Use 'a/an' before singular descriptive phrases.",
              ar: "في اللغة الإنجليزية، تأتي الصفة قَبْلَ الاسم الموصوف: 'a big city' (وليس 'a city big'). وتستخدم a/an قبل العبارات الوصفية المفردة.",
            },
          },
          data: {
            text: "Structure:\n[ Article (a/an) ] + [ Adjective ] + [ Noun ]\n• a + big + city = a big city\n• an + old + town = an old town",
          },
        },
        {
          id: "b_l2_3_3",
          type: "dialogue",
          isActive: true,
          purpose: "contextual_presentation",
          extensions: {
            instruction: {
              text: {
                en: "Read this conversation comparing two cities.",
                ar: "اقرأ هذا الحوار الذي يوازن بين مدينتين.",
              },
            },
          },
          data: {
            lines: [
              {
                id: "dl_2_3_1",
                speakerId: "fahad",
                speaker: "Fahad",
                text: "Is Riyadh a quiet place?",
              },
              {
                id: "dl_2_3_2",
                speakerId: "omar",
                speaker: "Omar",
                text: "No, Riyadh is a big and busy city! What about your hometown?",
              },
              {
                id: "dl_2_3_3",
                speakerId: "fahad",
                speaker: "Fahad",
                text: "My hometown is quiet and beautiful.",
              },
            ],
          },
        },
        {
          id: "b_l2_3_4",
          type: "reorder_words",
          isActive: true,
          purpose: "sentence_building",
          extensions: {
            instruction: {
              text: {
                en: "Reorder the words to form correct descriptive sentences.",
                ar: "رتب الكلمات لتكوين جمل وصفية صحيحة.",
              },
            },
          },
          data: {
            items: [
              {
                id: "rw_2_3_1",
                words: ["city", "a", "Riyadh", "big", "is"],
                correctOrder: ["Riyadh", "is", "a", "big", "city"],
                points: 1,
              },
              {
                id: "rw_2_3_2",
                words: ["beautiful", "is", "a", "Egypt", "country"],
                correctOrder: ["Egypt", "is", "a", "beautiful", "country"],
                points: 1,
              },
            ],
          },
        },
        {
          id: "b_l2_3_5",
          type: "free_practice",
          isActive: true,
          purpose: "production",
          extensions: {
            title: {
              text: {
                en: "Describe Your Place",
                ar: "صف مدينتك أو بلدك",
              },
            },
            instruction: {
              text: {
                en: "Write one or two sentences describing your city using adjectives.",
                ar: "اكتب جملة أو جملتين تصف فيهما مدينتك باستخدام الصفات.",
              },
            },
            tip: {
              icon: "lightbulb",
              text: {
                en: "Example: Sakaka is a quiet and beautiful city.",
                ar: "مثال: Sakaka is a quiet and beautiful city.",
              },
            },
          },
          data: {
            text: "Write a sentence describing a place.\nExample: Sakaka is a quiet and beautiful city.",
          },
        },
      ],
    },

    // ------------------------------------------------------------------------
    // LESSON 4: Numbers 11 to 30
    // ------------------------------------------------------------------------
    {
      id: "lesson_2_4",
      title: {
        en: "Numbers 11 to 30",
        ar: "الأرقام من 11 إلى 30",
      },
      slug: "numbers-11-to-30",
      description: {
        en: "Learn numbers 11 to 30 and use them in real-life context (ages, room numbers, prices).",
        ar: "تعلم الأرقام من 11 إلى 30 واستخدامها في مواقف الحياة اليومية (الأعمار، أرقام الغرف، الأسعار).",
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
          id: "b_l2_4_1",
          type: "word_list",
          isActive: true,
          purpose: "vocabulary_presentation",
          extensions: {
            title: {
              text: {
                en: "Numbers 11 to 20",
                ar: "الأرقام من 11 إلى 20",
              },
            },
            instruction: {
              text: {
                en: "Listen to and learn numbers 11 through 20.",
                ar: "استمع وتعلّم الأرقام من 11 إلى 20.",
              },
            },
          },
          data: {
            words: [
              { id: "num_11", word: "11 - Eleven", definition: "11 items", example: "Room 11" },
              { id: "num_12", word: "12 - Twelve", definition: "12 items", example: "12 months" },
              { id: "num_13", word: "13 - Thirteen", definition: "13 items", example: "Page 13" },
              { id: "num_15", word: "15 - Fifteen", definition: "15 items", example: "15 minutes" },
              { id: "num_20", word: "20 - Twenty", definition: "20 items", example: "Twenty dollars" },
            ],
          },
        },
        {
          id: "b_l2_4_2",
          type: "word_list",
          isActive: true,
          purpose: "vocabulary_presentation",
          extensions: {
            title: {
              text: {
                en: "Numbers 21 to 30",
                ar: "الأرقام من 21 إلى 30",
              },
            },
            instruction: {
              text: {
                en: "Notice the pattern: Twenty-one, Twenty-two...",
                ar: "لاحظ النمط: Twenty-one, Twenty-two...",
              },
            },
          },
          data: {
            words: [
              { id: "num_21", word: "21 - Twenty-one", definition: "21", example: "He is 21 years old." },
              { id: "num_24", word: "24 - Twenty-four", definition: "24", example: "24 hours a day" },
              { id: "num_25", word: "25 - Twenty-five", definition: "25", example: "Gate 25" },
              { id: "num_30", word: "30 - Thirty", definition: "30", example: "30 days in September" },
            ],
          },
        },
        {
          id: "b_l2_4_3",
          type: "dialogue",
          isActive: true,
          purpose: "contextual_presentation",
          extensions: {
            instruction: {
              text: {
                en: "Listen to a hotel check-in conversation using numbers.",
                ar: "استمع لحوار تسجيل الدخول في فندق يشتمل على استخدام الأرقام.",
              },
            },
          },
          data: {
            lines: [
              {
                id: "dl_2_4_1",
                speakerId: "receptionist",
                speaker: "Receptionist",
                text: "Welcome! Your room is number 25 on the third floor.",
              },
              {
                id: "dl_2_4_2",
                speakerId: "guest",
                speaker: "Guest",
                text: "Thank you. How much is the key card?",
              },
              {
                id: "dl_2_4_3",
                speakerId: "receptionist",
                speaker: "Receptionist",
                text: "It is 15 riyals.",
              },
            ],
          },
        },
        {
          id: "b_l2_4_4",
          type: "fill_blanks",
          isActive: true,
          purpose: "controlled_practice",
          extensions: {
            instruction: {
              text: {
                en: "Type the correct word form for the numbers in brackets.",
                ar: "اكتب الأرقام بالكلمات كما هو موضح بين القوسين.",
              },
            },
          },
          data: {
            items: [
              {
                id: "fb_2_4_1",
                text: "I am [19] _____ years old.",
                answer: "nineteen",
                points: 1,
              },
              {
                id: "fb_2_4_2",
                text: "There are [30] _____ days in this month.",
                answer: "thirty",
                points: 1,
              },
              {
                id: "fb_2_4_3",
                text: "Flight departure is at Gate [12] _____.",
                answer: "twelve",
                points: 1,
              },
            ],
          },
        },
        {
          id: "b_l2_4_5",
          type: "free_practice",
          isActive: true,
          purpose: "production",
          extensions: {
            title: {
              text: {
                en: "State Your Numbers",
                ar: "عَبّر بالأرقام",
              },
            },
            instruction: {
              text: {
                en: "Write or say one sentence using a number between 11 and 30.",
                ar: "اكتب أو قل جملة واحدة تحتوي على رقم بين 11 و 30.",
              },
            },
            tip: {
              icon: "lightbulb",
              text: {
                en: "Example: I have 15 books on my shelf.",
                ar: "مثال: I have 15 books on my shelf.",
              },
            },
          },
          data: {
            text: "Write a sentence with a number between 11 and 30.\nExample: I have 15 books on my shelf.",
          },
        },
      ],
    },
    // ------------------------------------------------------------------------
    // LESSON 5: Unit 2 Practice & Review
    // ------------------------------------------------------------------------
    {
      id: "lesson_2_5",
      title: {
        en: "Unit 2 Practice & Review",
        ar: "مراجعة وتقييم الوحدة الثانية",
      },
      slug: "unit-2-review",
      description: {
        en: "Comprehensive review of origins, subject pronouns, possessive adjectives, place descriptions, and numbers 11-30.",
        ar: "مراجعة شاملة للبلد الأصلي، الضمائر، صفات الملكية، وصف الأماكن، والأرقام من 11 إلى 30.",
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
          id: "b_l2_5_1",
          type: "matching",
          isActive: false,
          purpose: "unit_comprehensive_matching",
          extensions: {
            instruction: {
              text: {
                en: "Match the questions on the left with their correct answers on the right.",
                ar: "صل الأسئلة على اليسار بالإجابات الصحيحة لها على اليمين.",
              },
            },
          },
          data: {
            items: [
              {
                id: "m_2_5_1",
                left: "Where are you from?",
                right: "I am from Saudi Arabia.",
                points: 1,
              },
              {
                id: "m_2_5_2",
                left: "Who is she?",
                right: "She is Marie from France.",
                points: 1,
              },
              {
                id: "m_2_5_3",
                left: "Is Riyadh a small town?",
                right: "No, it is a big city.",
                points: 1,
              },
            ],
          },
        },
        {
          id: "b_l2_5_2",
          type: "fill_blanks",
          isActive: true,
          purpose: "pronouns_and_adjectives_check",
          extensions: {
            title: {
              text: {
                en: "Grammar & Vocabulary Check",
                ar: "اختبار القواعد والمفردات",
              },
            },
            instruction: {
              text: {
                en: "Fill in the blanks using: [ Her, from, big, twenty ]",
                ar: "أكمل الفراغات مع استخدام: [ Her, from, big, twenty ]",
              },
            },
          },
          data: {
            items: [
              {
                id: "fb_2_5_1",
                text: "Carlos is _____ Spain.",
                answer: "from",
                points: 1,
              },
              {
                id: "fb_2_5_2",
                text: "This is Mona. _____ home is in Cairo.",
                answer: "Her",
                points: 1,
              },
              {
                id: "fb_2_5_3",
                text: "London is a _____ city.",
                answer: "big",
                points: 1,
              },
              {
                id: "fb_2_5_4",
                text: "There are _____ [20] students in the class.",
                answer: "twenty",
                points: 1,
              },
            ],
          },
        },
        {
          id: "b_l2_5_3",
          type: "reorder_words",
          isActive: true,
          purpose: "sentence_structure_review",
          extensions: {
            instruction: {
              text: {
                en: "Order the words to form correct sentences.",
                ar: "رتب الكلمات لبناء جمل صحيحة.",
              },
            },
          },
          data: {
            items: [
              {
                id: "rw_2_5_1",
                words: ["from", "Where", "they", "are", "?"],
                correctOrder: ["Where", "are", "they", "from", "?"],
                points: 1,
              },
              {
                id: "rw_2_5_2",
                words: ["a", "Egypt", "country", "beautiful", "is"],
                correctOrder: ["Egypt", "is", "a", "beautiful", "country"],
                points: 1,
              },
            ],
          },
        },
        {
          id: "b_l2_5_4",
          type: "free_practice",
          isActive: true,
          purpose: "final_unit_challenge",
          extensions: {
            title: {
              text: {
                en: "Unit 2 Final Challenge",
                ar: "التحدي النهائي للوحدة الثانية",
              },
            },
            instruction: {
              text: {
                en: "Write 3 sentences: 1) Say where you are from. 2) Describe your city with an adjective. 3) State a number between 11 and 30.",
                ar: "اكتب 3 جمل: 1) اذكر بلدك والمدينة. 2) صف مدينتك باستخدام صفة. 3) اذكر رقماً بين 11 و 30.",
              },
            },
            tip: {
              icon: "lightbulb",
              text: {
                en: "Example: I am from Saudi Arabia. Riyadh is a big city. I am 20 years old.",
                ar: "مثال: I am from Saudi Arabia. Riyadh is a big city. I am 20 years old.",
              },
            },
          },
          data: {
            text: "Write 3 sentences covering country, place description, and numbers.\nExample: I am from Saudi Arabia. Sakaka is a quiet city. I have 15 books.",
          },
        },
      ],
    },
  ],
};