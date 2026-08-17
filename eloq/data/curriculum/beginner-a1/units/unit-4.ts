import { UnitType } from "@/types/learning";

// ============================================================================
// UNIT 4: People Near Me (الجزء 1 من 3)
// ============================================================================

export const unit_4: UnitType = {
  id: "unit_4",
  title: {
    en: "People Near Me",
    ar: "الناس المقربون مني",
  },
  slug: "people-near-me",
  overview: {
    summary: {
      en: "Learn to describe family relations, express ownership using possessive 's and 'have/has', spell details clearly, and handle natural everyday phone calls.",
      ar: "تعلم وصف العلاقات العائلية والشخصية، التعبير عن الملكية باستخدام S الملكية و Have/Has، تهجئة الأسماء، وإجراء مكالمات هاتفية يومية طبيعية.",
    },
    learningObjectives: [
      {
        en: "Describe family relations and personal connections in daily contexts",
        ar: "وصف العلاقات العائلية والشخصية في سياقات الحياة اليومية",
      },
      {
        en: "Use possessive 's (e.g., Sarah's phone) and possessive adjectives accurately",
        ar: "استخدام S الملكية (مثل Sarah's phone) وصفات الملكية بدقة",
      },
      {
        en: "Express possession using 'have' and 'has'",
        ar: "التعبير عن الملكية والامتلاك باستخدام 'have' و 'has'",
      },
      {
        en: "Spell names and words fluently using the English alphabet",
        ar: "تهجئة الأسماء والكلمات بطلاقة باستخدام الأبجدية الإنجليزية",
      },
      {
        en: "Handle short phone calls and natural greeting interactions",
        ar: "إجراء المكالمات الهاتفية القصيرة والرد على التحيات اليومية تلقائياً",
      },
    ],
    keyVocabulary: [
      "father",
      "mother",
      "brother",
      "sister",
      "cousin",
      "friend",
      "family",
      "phone",
      "laptop",
      "keys",
      "car",
    ],
    grammarFocus: [
      "Possessive 's (e.g., Ahmed's brother)",
      "Possessive adjectives (my, your, his, her, our, their)",
      "Verb 'to have' in present simple (have / has)",
      "Spelling out names and contact details",
    ],
    skills: ["speaking", "listening", "reading", "vocabulary", "grammar"],
    prerequisites: ["unit_3"],
  },
  lessons: [
    // ------------------------------------------------------------------------
    // LESSON 1: Family Relations & Connections
    // ------------------------------------------------------------------------
    {
      id: "lesson_4_1",
      title: {
        en: "Family & Connections",
        ar: "العائلة والمعارف",
      },
      slug: "family-and-connections",
      description: {
        en: "Learn vocabulary for family members and practice describing your close circle through real daily conversations.",
        ar: "تعلم مفردات أفراد العائلة وتدرب على وصف دائرتك المقربة من خلال حوارات يومية واقعية.",
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
          id: "b_l4_1_1",
          type: "word_list",
          isActive: true,
          purpose: "vocabulary_presentation",
          extensions: {
            title: {
              text: {
                en: "Family Vocabulary",
                ar: "مفردات العائلة",
              },
            },
            instruction: {
              text: {
                en: "Explore key terms used to talk about your family and relatives.",
                ar: "استكشف الكلمات الأساسية للتحدث عن أفراد العائلة والأقارب.",
              },
            },
          },
          data: {
            words: [
              {
                id: "w_4_1_1",
                word: "Father / Dad",
                definition: "Male parent",
                example: "My father is an experienced English instructor.",
              },
              {
                id: "w_4_1_2",
                word: "Mother / Mom",
                definition: "Female parent",
                example: "My mother works at a local salon.",
              },
              {
                id: "w_4_1_3",
                word: "Brother",
                definition: "A male sibling",
                example: "I have a close connection with my younger brother.",
              },
              {
                id: "w_4_1_4",
                word: "Sister",
                definition: "A female sibling",
                example: "My sister lives in Cairo.",
              },
              {
                id: "w_4_1_5",
                word: "Cousin",
                definition: "Child of an uncle or aunt",
                example: "My cousin Abrar always keeps in touch.",
              },
            ],
          },
        },
        {
          id: "b_l4_1_2",
          type: "dialogue",
          isActive: true,
          purpose: "contextual_presentation",
          extensions: {
            instruction: {
              text: {
                en: "Listen to Tariq showing photos of his family to his friend Artem during a coffee break.",
                ar: "استمع إلى طارق وهو يعرض صور عائلته لصديقه أرتم أثناء استراحة القهوة.",
              },
            },
          },
          data: {
            lines: [
              {
                id: "dl_4_1_1",
                speakerId: "artem",
                speaker: "Artem",
                text: "Hey Tariq! Is that a photo of your family on your phone?",
              },
              {
                id: "dl_4_1_2",
                speakerId: "tariq",
                speaker: "Tariq",
                text: "Yes, it is! Look, this is my father. He is a teacher, and he has taught English for over 20 years.",
              },
              {
                id: "dl_4_1_3",
                speakerId: "artem",
                speaker: "Artem",
                text: "That is amazing! And who is the young guy next to him?",
              },
              {
                id: "dl_4_1_4",
                speakerId: "tariq",
                speaker: "Tariq",
                text: "That is my younger brother. We are very close and do almost everything together.",
              },
              {
                id: "dl_4_1_5",
                speakerId: "artem",
                speaker: "Artem",
                text: "Nice! Do you have any sisters or cousins in this picture?",
              },
              {
                id: "dl_4_1_6",
                speakerId: "tariq",
                speaker: "Tariq",
                text: "No sisters, but this is my cousin Abrar. She lives nearby and calls me regularly.",
              },
            ],
          },
        },
        {
          id: "b_l4_1_3",
          type: "grammar_point",
          isActive: true,
          purpose: "grammar_explanation",
          extensions: {
            title: {
              text: {
                en: "Talking About Relationships",
                ar: "التحدث عن العلاقات العائلية",
              },
            },
            explanation: {
              en: "To introduce members of your family, combine subject pronouns or 'this is / these are' with possessive words:\n• 'This is my father.'\n• 'He is my brother.'\n• 'She is my cousin.'",
              ar: "لتقديم أفراد عائلتك، اجمع بين ضمائر الفاعل أو أسماء الإشارة (This is) مع صفة الملكية (my):\n• 'This is my father.' (هذا أبي)\n• 'He is my brother.' (هو أخي)\n• 'She is my cousin.' (هي ابنة عمي/خالي)",
            },
          },
          data: {
            text: "Key Expressions:\n• This is my [father/mother/brother].\n• These are my relatives.\n• I am very close to my brother.",
          },
        },
        {
          id: "b_l4_1_4",
          type: "matching",
          isActive: false, // معطل تفاعلياً حسب التوجيهات
          purpose: "family_vocab_matching",
          extensions: {
            instruction: {
              text: {
                en: "Match the family relation in English to its Arabic description.",
                ar: "صل صلة القرابة باللغة الإنجليزية بالوصف العربي المناسب لها.",
              },
            },
          },
          data: {
            items: [
              {
                id: "m_4_1_1",
                left: "Younger brother",
                right: "أخ أصغر",
                points: 1,
              },
              {
                id: "m_4_1_2",
                left: "Cousin",
                right: "ابن / ابنة العم أو الخال",
                points: 1,
              },
              {
                id: "m_4_1_3",
                left: "Father",
                right: "الأب",
                points: 1,
              },
            ],
          },
        },
        {
          id: "b_l4_1_5",
          type: "fill_blanks",
          isActive: true,
          purpose: "controlled_practice",
          extensions: {
            instruction: {
              text: {
                en: "Fill in the missing family words: [ brother, father, cousin ]",
                ar: "أكمل الفراغات بالكلمة العائلية المناسبة: [ brother, father, cousin ]",
              },
            },
          },
          data: {
            items: [
              {
                id: "fb_4_1_1",
                text: "This is my _____. He is a teacher with years of experience.",
                answer: "father",
                points: 1,
              },
              {
                id: "fb_4_1_2",
                text: "I am very close to my younger _____.",
                answer: "brother",
                points: 1,
              },
              {
                id: "fb_4_1_3",
                text: "Abrar is my _____. She calls me often.",
                answer: "cousin",
                points: 1,
              },
            ],
          },
        },
        {
          id: "b_l4_1_6",
          type: "free_practice",
          isActive: true,
          purpose: "production",
          extensions: {
            title: {
              text: {
                en: "Introduce a Family Member",
                ar: "عرّف بفرد من عائلتك",
              },
            },
            instruction: {
              text: {
                en: "Write two sentences introducing a family member and stating their job or connection to you.",
                ar: "اكتب جملتين تُعرّف فيهما بأحد أفراد عائلتك وتذكر وظيفته أو علاقتك به.",
              },
            },
            tip: {
              icon: "lightbulb",
              text: {
                en: "Example: This is my father. He is an English teacher.",
                ar: "مثال: This is my father. He is an English teacher.",
              },
            },
          },
          data: {
            text: "Write two sentences introducing a family member.\nExample: This is my brother. He plays football with me.",
          },
        },
      ],
    },

    // ------------------------------------------------------------------------
    // LESSON 2: Possessive 's & Possessive Adjectives
    // ------------------------------------------------------------------------
    {
      id: "lesson_4_2",
      title: {
        en: "Possessive 's & Adjectives",
        ar: "الملكية باستخدام 's وصفات الملكية",
      },
      slug: "possessives",
      description: {
        en: "Learn how to express ownership using 's (e.g., Sarah's phone) and possessive adjectives (my, your, his, her, our, their).",
        ar: "تعلم كيفية التعبير عن الملكية باستخدام S الملكية (مثل Sarah's phone) وصفات الملكية (my, your, his, her, our, their).",
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
          id: "b_l4_2_1",
          type: "word_list",
          isActive: true,
          purpose: "vocabulary_presentation",
          extensions: {
            title: {
              text: {
                en: "Possessive Adjectives Chart",
                ar: "جدول صفات الملكية",
              },
            },
            instruction: {
              text: {
                en: "Study how pronouns change into possessive adjectives.",
                ar: "ادرس كيف تتحول الضمائر إلى صفات ملكية تُحدد صاحب الغرض.",
              },
            },
          },
          data: {
            words: [
              {
                id: "w_4_2_1",
                word: "My / Your",
                definition: "Belonging to me / belonging to you",
                example: "My phone is on the table. Is this your laptop?",
              },
              {
                id: "w_4_2_2",
                word: "His / Her",
                definition: "Belonging to a male / female",
                example: "His car is outside. Her salon is downtown.",
              },
              {
                id: "w_4_2_3",
                word: "Our / Their",
                definition: "Belonging to us / belonging to them",
                example: "Our project is ready. Their house is big.",
              },
            ],
          },
        },
        {
          id: "b_l4_2_2",
          type: "dialogue",
          isActive: true,
          purpose: "contextual_presentation",
          extensions: {
            instruction: {
              text: {
                en: "Listen to Omar and Khaled looking for missing items in a shared study workspace.",
                ar: "استمع إلى عمر وخالد وهما يبحثان عن أغراض مفقودة في مساحة عمل مشتركة.",
              },
            },
          },
          data: {
            lines: [
              {
                id: "dl_4_2_1",
                speakerId: "omar",
                speaker: "Omar",
                text: "Hey Khaled, excuse me! Is this black smartphone your phone?",
              },
              {
                id: "dl_4_2_2",
                speakerId: "khaled",
                speaker: "Khaled",
                text: "No, that isn't my phone. My phone is a Poco X7 Pro, and it is in my bag.",
              },
              {
                id: "dl_4_2_3",
                speakerId: "omar",
                speaker: "Omar",
                text: "Ah, I see! Then whose phone is this on the desk?",
              },
              {
                id: "dl_4_2_4",
                speakerId: "khaled",
                speaker: "Khaled",
                text: "I think it is Sarah's phone. Look, her charger is next to it too.",
              },
              {
                id: "dl_4_2_5",
                speakerId: "omar",
                speaker: "Omar",
                text: "Oh right! And what about these car keys? Are they Hassan's keys?",
              },
              {
                id: "dl_4_2_6",
                speakerId: "khaled",
                speaker: "Khaled",
                text: "Yes, those are Hassan's keys. His car is parked right near the entrance.",
              },
            ],
          },
        },
        {
          id: "b_l4_2_3",
          type: "grammar_point",
          isActive: true,
          purpose: "grammar_explanation",
          extensions: {
            title: {
              text: {
                en: "Possessive 's vs Possessive Adjectives",
                ar: "الفرق بين S الملكية وصفات الملكية",
              },
            },
            explanation: {
              en: "1. Add 's to a person's name to show ownership:\n   • 'Sarah's phone' = the phone of Sarah\n   • 'Hassan's car' = the car of Hassan\n\n2. Use possessive adjectives before a noun:\n   • My phone / His car / Her charger / Their workspace.",
              ar: "1. أضف 's لاسم الشخص للتعبير عن الملكية:\n   • 'Sarah's phone' = هاتف سارة\n   • 'Hassan's car' = سيارة حسان\n\n2. استخدم صفات الملكية قبل الاسم الموصوف مباشرة:\n   • My phone / His car / Her charger",
            },
          },
          data: {
            text: "Examples:\n• This is Ahmed's laptop. -> It is his laptop.\n• That is Duaa's notebook. -> It is her notebook.",
          },
        },
        {
          id: "b_l4_2_4",
          type: "matching",
          isActive: false, // معطل تفاعلياً حسب التوجيهات
          purpose: "possessive_matching",
          extensions: {
            instruction: {
              text: {
                en: "Match the phrase with possessive 's to its equivalent possessive adjective phrase.",
                ar: "صل العبارة المحتوية على S الملكية بالعبارة المكافئة لها من صفات الملكية.",
              },
            },
          },
          data: {
            items: [
              {
                id: "m_4_2_1",
                left: "Khaled's phone",
                right: "His phone",
                points: 1,
              },
              {
                id: "m_4_2_2",
                left: "Mona's bag",
                right: "Her bag",
                points: 1,
              },
              {
                id: "m_4_2_3",
                left: "The students' project",
                right: "Their project",
                points: 1,
              },
            ],
          },
        },
        {
          id: "b_l4_2_5",
          type: "fill_blanks",
          isActive: true,
          purpose: "controlled_practice",
          extensions: {
            instruction: {
              text: {
                en: "Fill in the blanks using possessive 's or possessive adjectives: [ Sarah's, his, my ]",
                ar: "أكمل الفراغات باستخدام S الملكية أو صفات الملكية: [ Sarah's, his, my ]",
              },
            },
          },
          data: {
            items: [
              {
                id: "fb_4_2_1",
                text: "This charger belongs to Sarah. It is _____ charger.",
                answer: "Sarah's",
                points: 1,
              },
              {
                id: "fb_4_2_2",
                text: "Hassan left _____ car keys on the desk.",
                answer: "his",
                points: 1,
              },
              {
                id: "fb_4_2_3",
                text: "I am holding _____ new phone right now.",
                answer: "my",
                points: 1,
              },
            ],
          },
        },
        {
          id: "b_l4_2_6",
          type: "free_practice",
          isActive: true,
          purpose: "production",
          extensions: {
            title: {
              text: {
                en: "Describe Possessions Around You",
                ar: "صف الممتلكات من حولك",
              },
            },
            instruction: {
              text: {
                en: "Write two sentences describing items that belong to you and a friend or family member using possessive 's and adjectives.",
                ar: "اكتب جملتين تصف فيهما أشياء تخصك وتخص صديقاً أو فرداً من عائلتك باستخدام S الملكية وصفات الملكية.",
              },
            },
            tip: {
              icon: "lightbulb",
              text: {
                en: "Example: This is my laptop. That is Artem's desk.",
                ar: "مثال: This is my laptop. That is Artem's desk.",
              },
            },
          },
          data: {
            text: "Write two sentences using possessive forms.\nExample: This is my phone. That is my brother's car.",
          },
        },
      ],
    },
    // ------------------------------------------------------------------------
    // LESSON 3: Expressing Possession (Have / Has)
    // ------------------------------------------------------------------------
    {
      id: "lesson_4_3",
      title: {
        en: "Expressing Possession (Have / Has)",
        ar: "التعبير عن الملكية (Have / Has)",
      },
      slug: "expressing-possession",
      description: {
        en: "Learn how to use 'have' and 'has' to talk about items, equipment, and belongings in everyday scenarios.",
        ar: "تعلم كيفية استخدام 'have' و 'has' للتحدث عن الممتلكات والمعدات والأغراض الشخصية في الحياة اليومية.",
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
          id: "b_l4_3_1",
          type: "word_list",
          isActive: true,
          purpose: "vocabulary_presentation",
          extensions: {
            title: {
              text: {
                en: "Have & Has Forms",
                ar: "صيغ الفعل Have و Has",
              },
            },
            instruction: {
              text: {
                en: "Study how 'have' changes depending on the subject pronoun.",
                ar: "ادرس كيف يتغير شكل الفعل حسب الضمير الفاعل.",
              },
            },
          },
          data: {
            words: [
              {
                id: "w_4_3_1",
                word: "I / You / We / They + have",
                definition: "To possess or hold something",
                example: "I have a new smartphone. They have a big house.",
              },
              {
                id: "w_4_3_2",
                word: "He / She / It + has",
                definition: "To possess or hold something (singular third person)",
                example: "He has a laptop. She has two brothers.",
              },
              {
                id: "w_4_3_3",
                word: "don't have / doesn't have",
                definition: "Negative form of possession",
                example: "I don't have the keys. He doesn't have time.",
              },
            ],
          },
        },
        {
          id: "b_l4_3_2",
          type: "dialogue",
          isActive: true,
          purpose: "contextual_presentation",
          extensions: {
            instruction: {
              text: {
                en: "Listen to Ahmed and his teammate preparing their sports gear before a weekend match.",
                ar: "استمع إلى أحمد وزميله في الفريق وهما يتأكدان من تحضير معداتهما الرياضية قبل مباراة نهاية الأسبوع.",
              },
            },
          },
          data: {
            lines: [
              {
                id: "dl_4_3_1",
                speakerId: "ahmed",
                speaker: "Ahmed",
                text: "Hey Youssef! Are we ready for the match? Do you have the football boots?",
              },
              {
                id: "dl_4_3_2",
                speakerId: "youssef",
                speaker: "Youssef",
                text: "Yes, I have my boots and my sports bag in the car. What about the ball?",
              },
              {
                id: "dl_4_3_3",
                speakerId: "ahmed",
                speaker: "Ahmed",
                text: "I don't have a new ball, but Faisal has two good footballs in his trunk.",
              },
              {
                id: "dl_4_3_4",
                speakerId: "youssef",
                speaker: "Youssef",
                text: "Great! Does he have the water bottles for the whole team as well?",
              },
              {
                id: "dl_4_3_5",
                speakerId: "ahmed",
                speaker: "Ahmed",
                text: "No, he doesn't have them yet. We need to buy water on our way to the field.",
              },
              {
                id: "dl_4_3_6",
                speakerId: "youssef",
                speaker: "Youssef",
                text: "Sounds good! My brother has a small cooler, so we can keep the water cold.",
              },
            ],
          },
        },
        {
          id: "b_l4_3_3",
          type: "grammar_point",
          isActive: true,
          purpose: "grammar_explanation",
          extensions: {
            title: {
              text: {
                en: "Grammar: Have vs Has",
                ar: "قاعدة: الفرق بين Have و Has",
              },
            },
            explanation: {
              en: "• Affirmative:\n  - I / You / We / They -> HAVE (e.g., 'We have a meeting.')\n  - He / She / It -> HAS (e.g., 'She has a new laptop.')\n\n• Negative:\n  - I / You / We / They -> DON'T HAVE\n  - He / She / It -> DOESN'T HAVE",
              ar: "• الإثبات:\n  - مع الضمائر (I, You, We, They) نستخدم HAVE\n  - مع الضمائر (He, She, It) نستخدم HAS\n\n• النفي:\n  - مع (I, You, We, They) نستخدم DON'T HAVE\n  - مع (He, She, It) نستخدم DOESN'T HAVE",
            },
          },
          data: {
            text: "Examples:\n• I have a Poco smartphone.\n• He has an English course today.\n• She doesn't have her keys.",
          },
        },
        {
          id: "b_l4_3_4",
          type: "matching",
          isActive: false, // معطل تفاعلياً حسب التوجيهات
          purpose: "have_has_matching",
          extensions: {
            instruction: {
              text: {
                en: "Match the subjects on the left with the correct verb form on the right.",
                ar: "صل الضمائر على اليسار بصيغة الفعل المناسبة لها على اليمين.",
              },
            },
          },
          data: {
            items: [
              {
                id: "m_4_3_1",
                left: "I / They",
                right: "have a car",
                points: 1,
              },
              {
                id: "m_4_3_2",
                left: "He / She",
                right: "has a laptop",
                points: 1,
              },
              {
                id: "m_4_3_3",
                left: "My brother",
                right: "doesn't have time",
                points: 1,
              },
            ],
          },
        },
        {
          id: "b_l4_3_5",
          type: "fill_blanks",
          isActive: true,
          purpose: "controlled_practice",
          extensions: {
            instruction: {
              text: {
                en: "Complete the sentences using 'have' or 'has'.",
                ar: "أكمل الجمل باستخدام 'have' أو 'has'.",
              },
            },
          },
          data: {
            items: [
              {
                id: "fb_4_3_1",
                text: "I _____ a new web project to finish.",
                answer: "have",
                points: 1,
              },
              {
                id: "fb_4_3_2",
                text: "My friend Faisal _____ two footballs.",
                answer: "has",
                points: 1,
              },
              {
                id: "fb_4_3_3",
                text: "She _____ a very quiet home.",
                answer: "has",
                points: 1,
              },
            ],
          },
        },
        {
          id: "b_l4_3_6",
          type: "free_practice",
          isActive: true,
          purpose: "production",
          extensions: {
            title: {
              text: {
                en: "Express Your Belongings",
                ar: "عبّر عما تمتلكه أنت وصديقك",
              },
            },
            instruction: {
              text: {
                en: "Write two sentences: one describing something you have, and one describing something your friend or relative has.",
                ar: "اكتب جملتين: الأولى تصف شيئاً تملكه أنت، والثانية تصف شيئاً يملكه صديقك أو أحد أقاربك.",
              },
            },
            tip: {
              icon: "lightbulb",
              text: {
                en: "Example: I have a laptop. My brother has a smartphone.",
                ar: "مثال: I have a laptop. My brother has a smartphone.",
              },
            },
          },
          data: {
            text: "Write two sentences using 'have' and 'has'.\nExample: I have a phone. My friend has a car.",
          },
        },
      ],
    },

    // ------------------------------------------------------------------------
    // LESSON 4: Spelling Names & Phone Interactions
    // ------------------------------------------------------------------------
    {
      id: "lesson_4_4",
      title: {
        en: "Spelling & Phone Calls",
        ar: "تهجئة الأسماء والمكالمات الهاتفية",
      },
      slug: "spelling-and-phone-calls",
      description: {
        en: "Learn how to spell names letter-by-letter and handle standard phone calls and greetings confidently.",
        ar: "تعلم تهجئة الأسماء حرفاً بحرف وإجراء المكالمات الهاتفية والرد على التحيات اليومية بثقة.",
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
          id: "b_l4_4_1",
          type: "word_list",
          isActive: true,
          purpose: "vocabulary_presentation",
          extensions: {
            title: {
              text: {
                en: "Phone & Spelling Phrases",
                ar: "عبارات التهجئة والمكالمات",
              },
            },
            instruction: {
              text: {
                en: "Learn these expressions commonly used in customer calls and registrations.",
                ar: "تعلم هذه التعبيرات الشائعة في مكالمات الخدمة والتسجيل عبر الهاتف.",
              },
            },
          },
          data: {
            words: [
              {
                id: "w_4_4_1",
                word: "Spell",
                definition: "To write or name the letters of a word in order",
                example: "How do you spell your name?",
              },
              {
                id: "w_4_4_2",
                word: "Double",
                definition: "Two of the same letters together",
                example: "It is spelled with double 'O'.",
              },
              {
                id: "w_4_4_3",
                word: "Hold on, please",
                definition: "Ask someone to wait on the phone",
                example: "Hold on, please. Let me write that down.",
              },
              {
                id: "w_4_4_4",
                word: "Call back",
                definition: "To return a phone call",
                example: "Can I call you back in ten minutes?",
              },
            ],
          },
        },
        {
          id: "b_l4_4_2",
          type: "dialogue",
          isActive: true,
          purpose: "contextual_presentation",
          extensions: {
            instruction: {
              text: {
                en: "Listen to a phone call between Ahmed and a receptionist at a technical support center.",
                ar: "استمع إلى مكالمة هاتفية بين أحمد وموظف الاستقبال في مركز الدعم الفني.",
              },
            },
          },
          data: {
            lines: [
              {
                id: "dl_4_4_1",
                speakerId: "receptionist",
                speaker: "Receptionist",
                text: "Hello, good afternoon! Smart Tech Support, how can I help you today?",
              },
              {
                id: "dl_4_4_2",
                speakerId: "ahmed",
                speaker: "Ahmed",
                text: "Hello! My name is Ahmed. I would like to confirm my subscription details.",
              },
              {
                id: "dl_4_4_3",
                speakerId: "receptionist",
                speaker: "Receptionist",
                text: "Certainly! Could you please spell your last name for me?",
              },
              {
                id: "dl_4_4_4",
                speakerId: "ahmed",
                speaker: "Ahmed",
                text: "Sure! It is E-L-K-H-A-I-R.",
              },
              {
                id: "dl_4_4_5",
                speakerId: "receptionist",
                speaker: "Receptionist",
                text: "Thank you, Ahmed. And what is your contact phone number?",
              },
              {
                id: "dl_4_4_6",
                speakerId: "ahmed",
                speaker: "Ahmed",
                text: "My number is 0-5-5-5, double 3, 4-2-1.",
              },
              {
                id: "dl_4_4_7",
                speakerId: "receptionist",
                speaker: "Receptionist",
                text: "Perfect! Hold on a moment please... Yes, your details are confirmed. Have a great day!",
              },
            ],
          },
        },
        {
          id: "b_l4_4_3",
          type: "grammar_point",
          isActive: true,
          purpose: "grammar_explanation",
          extensions: {
            title: {
              text: {
                en: "Spelling Out Names & Saying Phone Numbers",
                ar: "تهجئة الأسماء وقراءة أرقام الهواتف",
              },
            },
            explanation: {
              en: "• To ask for spelling: 'How do you spell your name?' or 'Could you spell that, please?'\n• Say each letter clearly: A - H - M - E - D.\n• For repeated numbers, you can say 'double': '55' -> 'double five'.\n• '0' in phone numbers is often read as 'oh' or 'zero'.",
              ar: "• للسؤال عن التهجئة: '?How do you spell your name'\n• انطق كل حرف بوضوح بشكل منفصل.\n• عند تكرار رقمين متتاليين يمكنك استخدام كلمة 'double': الرقم 55 ينطق 'double five'.\n• الصفر يُنطق 'oh' أو 'zero'.",
            },
          },
          data: {
            text: "Examples:\n• Abrar -> A - B - R - A - R\n• 0500 -> Oh - five - double oh\n• Hold on, please -> انتظر لحظة من فضلك",
          },
        },
        {
          id: "b_l4_4_4",
          type: "reorder_words",
          isActive: true,
          purpose: "sentence_building",
          extensions: {
            instruction: {
              text: {
                en: "Reorder the words to form a polite request on the phone.",
                ar: "رتب الكلمات لتكوين طلب مؤدب أثناء المكالمة الهاتفية.",
              },
            },
          },
          data: {
            items: [
              {
                id: "rw_4_4_1",
                words: ["spell", "you", "Could", "name", "your", "?"],
                correctOrder: ["Could", "you", "spell", "your", "name", "?"],
                points: 1,
              },
              {
                id: "rw_4_4_2",
                words: ["please", "Hold", "on", "a", "moment"],
                correctOrder: ["Hold", "on", "a", "moment", "please"],
                points: 1,
              },
            ],
          },
        },
        {
          id: "b_l4_4_5",
          type: "fill_blanks",
          isActive: true,
          purpose: "controlled_practice",
          extensions: {
            instruction: {
              text: {
                en: "Complete the telephone phrases using: [ spell, number, Hold ]",
                ar: "أكمل عبارات المكالمة باستخدام الكلمات: [ spell, number, Hold ]",
              },
            },
          },
          data: {
            items: [
              {
                id: "fb_4_4_1",
                text: "How do you _____ your first name?",
                answer: "spell",
                points: 1,
              },
              {
                id: "fb_4_4_2",
                text: "_____ on please, let me check my calendar.",
                answer: "Hold",
                points: 1,
              },
              {
                id: "fb_4_4_3",
                text: "My phone _____ is 0555-123-456.",
                answer: "number",
                points: 1,
              },
            ],
          },
        },
        {
          id: "b_l4_4_6",
          type: "free_practice",
          isActive: true,
          purpose: "production",
          extensions: {
            title: {
              text: {
                en: "Spell Your Name & Give Phone Number",
                ar: "هَجِّ اسمك واذكر رقم هاتفك",
              },
            },
            instruction: {
              text: {
                en: "Write one sentence spelling out your name letter-by-letter and giving a sample contact number.",
                ar: "اكتب جملة واحدة تُهجئ فيها اسمك حرفاً بحرف وتذكر رقم هاتف للتواصل.",
              },
            },
            tip: {
              icon: "lightbulb",
              text: {
                en: "Example: My name is spelled A-H-M-E-D and my number is 0555-123-456.",
                ar: "مثال: My name is spelled A-H-M-E-D and my number is 0555-123-456.",
              },
            },
          },
          data: {
            text: "Spell your name and give a phone number.\nExample: My name is spelled O-M-A-R and my phone number is 0500-111-222.",
          },
        },
      ],
    },
    // ------------------------------------------------------------------------
    // LESSON 5: Unit 4 Practice & Review
    // ------------------------------------------------------------------------
    {
      id: "lesson_4_5",
      title: {
        en: "Unit 4 Practice & Review",
        ar: "مراجعة وتقييم الوحدة الرابعة",
      },
      slug: "unit-4-review",
      description: {
        en: "Comprehensive review of family relations, possessive 's, possessive adjectives, have/has, and spelling/phone interactions.",
        ar: "مراجعة شاملة للعلاقات العائلية، S الملكية، صفات الملكية، استخدام Have/Has، والتهجئة والمكالمات الهاتفية.",
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
          id: "b_l4_5_1",
          type: "matching",
          isActive: false, // معطل تفاعلياً حسب التوجيهات
          purpose: "unit_comprehensive_matching",
          extensions: {
            instruction: {
              text: {
                en: "Match the phrases on the left with their correct responses on the right.",
                ar: "صل العبارات على اليسار بالإجابات المناسبة لها على اليمين.",
              },
            },
          },
          data: {
            items: [
              {
                id: "m_4_5_1",
                left: "Is this Khaled's phone?",
                right: "Yes, it is his phone.",
                points: 1,
              },
              {
                id: "m_4_5_2",
                left: "Do you have the car keys?",
                right: "No, I don't have them.",
                points: 1,
              },
              {
                id: "m_4_5_3",
                left: "How do you spell your name?",
                right: "A - H - M - E - D.",
                points: 1,
              },
            ],
          },
        },
        {
          id: "b_l4_5_2",
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
                en: "Fill in the missing words using: [ brother's, has, spell, my ]",
                ar: "أكمل الفراغات باستخدام الكلمات التالية: [ brother's, has, spell, my ]",
              },
            },
          },
          data: {
            items: [
              {
                id: "fb_4_5_1",
                text: "This is _____ car. I drive it every day.",
                answer: "my",
                points: 1,
              },
              {
                id: "fb_4_5_2",
                text: "That is my _____ laptop. He uses it for work.",
                answer: "brother's",
                points: 1,
              },
              {
                id: "fb_4_5_3",
                text: "Faisal _____ two footballs in his car.",
                answer: "has",
                points: 1,
              },
              {
                id: "fb_4_5_4",
                text: "Could you please _____ your last name?",
                answer: "spell",
                points: 1,
              },
            ],
          },
        },
        {
          id: "b_l4_5_3",
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
                id: "rw_4_5_1",
                words: ["father", "an", "My", "is", "teacher", "English"],
                correctOrder: ["My", "father", "is", "an", "English", "teacher"],
                points: 1,
              },
              {
                id: "rw_4_5_2",
                words: ["have", "don't", "I", "keys", "the"],
                correctOrder: ["I", "don't", "have", "the", "keys"],
                points: 1,
              },
            ],
          },
        },
        {
          id: "b_l4_5_4",
          type: "free_practice",
          isActive: true,
          purpose: "final_unit_challenge",
          extensions: {
            title: {
              text: {
                en: "Unit 4 Final Production Challenge",
                ar: "التحدي النهائي للوحدة الرابعة",
              },
            },
            instruction: {
              text: {
                en: "Write 3 sentences: 1) Mention a family member's job or detail. 2) State something you or your family member has using 'have/has' or possessive 's. 3) Spell your first name out.",
                ar: "اكتب 3 جمل: 1) اذكر وظيفة أو معلومة عن فرد من عائلتك. 2) اذكر شيئاً تملكه أنت أو أحد أقاربك باستخدام 'have/has' أو S الملكية. 3) هَجِّ اسمك الأول.",
              },
            },
            tip: {
              icon: "lightbulb",
              text: {
                en: "Example: My father is a teacher. I have a new laptop. My name is spelled A-H-M-E-D.",
                ar: "مثال: My father is a teacher. I have a new laptop. My name is spelled A-H-M-E-D.",
              },
            },
          },
          data: {
            text: "Write 3 sentences covering family, possession, and spelling.\nExample: My brother plays football. That is my brother's bag. My name is spelled O-M-A-R.",
          },
        },
      ],
    },
  ],
};