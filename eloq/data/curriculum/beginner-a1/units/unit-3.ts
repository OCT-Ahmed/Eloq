import { UnitType } from "@/types/learning";

// ========================================
// UNIT 3: Meet My World (الجزء 1 من 3)
// ========================================

export const unit_3: UnitType = {
  id: "unit_3",
  title: {
    en: "Meet My World",
    ar: "عالمي والناس من حولي",
  },
  slug: "meet-my-world",
  overview: {
    summary: {
      en: "Learn to discuss jobs, exchange personal information, use negative forms of 'be', ask short questions, and use everyday social expressions.",
      ar: "تعلم الحديث عن المهن، تبادل البيانات الشخصية، استخدام صيغ النفي للفعل To Be، طرح الأسئلة القصيرة، واستخدام العبارات الاجتماعية اليومية.",
    },
    learningObjectives: [
      {
        en: "Talk about various jobs and professions",
        ar: "الحديث عن مختلف الوظائف والمهن",
      },
      {
        en: "Exchange personal information (age, phone number, address)",
        ar: "تبادل المعلومات الشخصية (العمر، رقم الهاتف، العنوان)",
      },
      {
        en: "Use negative forms of 'be' (I'm not, he isn't, they aren't)",
        ar: "استخدام صيغ النفي مع الفعل To Be",
      },
      {
        en: "Ask and answer short yes/no questions confidently",
        ar: "طرح الأسئلة القصيرة (Yes/No) والإجابة عليها بثقة",
      },
      {
        en: "Use essential social expressions in everyday interactions",
        ar: "استخدام التعبيرات الاجتماعية الأساسية في التفاعلات اليومية",
      },
    ],
    keyVocabulary: [
      "teacher",
      "doctor",
      "engineer",
      "driver",
      "student",
      "age",
      "phone number",
      "address",
      "email",
      "excuse me",
      "thank you",
      "sorry",
    ],
    grammarFocus: [
      "Articles with jobs (a teacher / an engineer)",
      "Asking for personal details (How old...? / What is your...?)",
      "Negative forms of 'be' (am not / isn't / aren't)",
      "Yes/No questions with 'be' (Is he...? / Are you...?)",
    ],
    skills: ["speaking", "listening", "vocabulary", "grammar", "reading"],
    prerequisites: ["unit_2"],
  },
  lessons: [
    // ------------------------------------------------------------------------
    // LESSON 1: Jobs & Professions
    // ------------------------------------------------------------------------
    {
      id: "lesson_3_1",
      title: {
        en: "Jobs & Professions",
        ar: "الوظائف والمهن",
      },
      slug: "jobs-and-professions",
      description: {
        en: "Learn core vocabulary for jobs and practice using 'a/an' before professions.",
        ar: "تعلم المفردات الأساسية للمهن وتدرب على استخدام أداة التعريف والتنكير (a/an) قبل الوظائف.",
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
          id: "b_l3_1_1",
          type: "word_list",
          isActive: true,
          purpose: "vocabulary_presentation",
          extensions: {
            title: {
              text: {
                en: "Common Professions",
                ar: "المهن الشائعة",
              },
            },
            instruction: {
              text: {
                en: "Study these common job titles and their usage.",
                ar: "استكشف هذه المسميات الوظيفية الشائعة وطريقة استخدامها.",
              },
            },
          },
          data: {
            words: [
              {
                id: "w_3_1_1",
                word: "Teacher",
                definition: "A person who teaches students",
                example: "My father is a teacher.",
              },
              {
                id: "w_3_1_2",
                word: "Doctor",
                definition: "A person who treats sick people",
                example: "She is a doctor at the hospital.",
              },
              {
                id: "w_3_1_3",
                word: "Engineer",
                definition: "A person who designs or builds structures",
                example: "He is an engineer.",
              },
              {
                id: "w_3_1_4",
                word: "Developer",
                definition: "A person who creates software or websites",
                example: "I am a web developer.",
              },
            ],
          },
        },
        {
          id: "b_l3_1_2",
          type: "dialogue",
          isActive: true,
          purpose: "contextual_presentation",
          extensions: {
            instruction: {
              text: {
                en: "Listen to Omar and Hassan talking about their jobs.",
                ar: "استمع إلى عمر وحسان وهما يتحدثان عن وظائفهما.",
              },
            },
          },
          data: {
            lines: [
              {
                id: "dl_3_1_1",
                speakerId: "omar",
                speaker: "Omar",
                text: "What is your job, Hassan?",
              },
              {
                id: "dl_3_1_2",
                speakerId: "hassan",
                speaker: "Hassan",
                text: "I am an engineer. What about you?",
              },
              {
                id: "dl_3_1_3",
                speakerId: "omar",
                speaker: "Omar",
                text: "I am a teacher. I work at a school.",
              },
              {
                id: "dl_3_1_4",
                speakerId: "hassan",
                speaker: "Hassan",
                text: "That is great! My brother is a developer.",
              },
            ],
          },
        },
        {
          id: "b_l3_1_3",
          type: "grammar_point",
          isActive: true,
          purpose: "grammar_explanation",
          extensions: {
            title: {
              text: {
                en: "Articles 'a' and 'an' with Jobs",
                ar: "استخدام 'a' و 'an' مع الوظائف",
              },
            },
            explanation: {
              en: "Use 'a' before consonant sounds (a teacher, a doctor, a developer). Use 'an' before vowel sounds (an engineer, an artist).",
              ar: "استخدم 'a' قبل الأصوات الساكنة (a teacher, a doctor). واستخدم 'an' قبل الأصوات المتحركة (an engineer, an artist).",
            },
          },
          data: {
            text: "Examples:\n• a + teacher = a teacher\n• a + doctor = a doctor\n• an + engineer = an engineer",
          },
        },
        {
          id: "b_l3_1_4",
          type: "matching",
          isActive: false, // معطل تفاعلياً حسب التوجيهات
          purpose: "job_matching",
          extensions: {
            instruction: {
              text: {
                en: "Match the job title on the left with the correct article and word on the right.",
                ar: "صل المسمى الوظيفي على اليسار بالعبارة الصحيحة على اليمين.",
              },
            },
          },
          data: {
            items: [
              {
                id: "m_3_1_1",
                left: "Engineer",
                right: "an engineer",
                points: 1,
              },
              {
                id: "m_3_1_2",
                left: "Doctor",
                right: "a doctor",
                points: 1,
              },
              {
                id: "m_3_1_3",
                left: "Teacher",
                right: "a teacher",
                points: 1,
              },
            ],
          },
        },
        {
          id: "b_l3_1_5",
          type: "fill_blanks",
          isActive: true,
          purpose: "controlled_practice",
          extensions: {
            instruction: {
              text: {
                en: "Fill in the blanks with 'a' or 'an'.",
                ar: "أكمل الفراغات باستخدام 'a' أو 'an'.",
              },
            },
          },
          data: {
            items: [
              {
                id: "fb_3_1_1",
                text: "He is _____ engineer.",
                answer: "an",
                points: 1,
              },
              {
                id: "fb_3_1_2",
                text: "She is _____ doctor.",
                answer: "a",
                points: 1,
              },
              {
                id: "fb_3_3_3",
                text: "I am _____ developer.",
                answer: "a",
                points: 1,
              },
            ],
          },
        },
        {
          id: "b_l3_1_6",
          type: "free_practice",
          isActive: true,
          purpose: "production",
          extensions: {
            title: {
              text: {
                en: "State Your Profession",
                ar: "اذكر وظيفتك",
              },
            },
            instruction: {
              text: {
                en: "Write one sentence stating your job or a friend's job using a/an.",
                ar: "اكتب جملة واحدة تذكر فيها وظيفتك أو وظيفة صديق لك باستخدام a/an.",
              },
            },
            tip: {
              icon: "lightbulb",
              text: {
                en: "Example: I am a frontend developer.",
                ar: "مثال: I am a frontend developer.",
              },
            },
          },
          data: {
            text: "Write a sentence stating a job.\nExample: I am a developer.",
          },
        },
      ],
    },

    // ------------------------------------------------------------------------
    // LESSON 2: Personal Details
    // ------------------------------------------------------------------------
    {
      id: "lesson_3_2",
      title: {
        en: "Personal Details",
        ar: "البيانات الشخصية",
      },
      slug: "personal-details",
      description: {
        en: "Learn how to ask and answer questions about age, phone number, address, and email.",
        ar: "تعلم كيفية السؤال والإجابة عن العمر، رقم الهاتف، العنوان، والبريد الإلكتروني.",
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
          id: "b_l3_2_1",
          type: "word_list",
          isActive: true,
          purpose: "vocabulary_presentation",
          extensions: {
            title: {
              text: {
                en: "Personal Info Words",
                ar: "مفردات البيانات الشخصية",
              },
            },
            instruction: {
              text: {
                en: "Study vocabulary used for registration and personal forms.",
                ar: "ادرس المفردات المستخدمة في النماذج والتسجيل الشخصي.",
              },
            },
          },
          data: {
            words: [
              {
                id: "w_3_2_1",
                word: "Age",
                definition: "The number of years someone has lived",
                example: "My age is 19.",
              },
              {
                id: "w_3_2_2",
                word: "Phone Number",
                definition: "A series of digits used to call someone",
                example: "What is your phone number?",
              },
              {
                id: "w_3_2_3",
                word: "Address",
                definition: "The place where someone lives",
                example: "My address is Main Street, Sakaka.",
              },
              {
                id: "w_3_2_4",
                word: "Email",
                definition: "Electronic mail address",
                example: "My email is alex@example.com.",
              },
            ],
          },
        },
        {
          id: "b_l3_2_2",
          type: "dialogue",
          isActive: true,
          purpose: "contextual_presentation",
          extensions: {
            instruction: {
              text: {
                en: "Listen to a student registering at a language platform.",
                ar: "استمع إلى طالب يسجل بياناته في منصة لغوية.",
              },
            },
          },
          data: {
            lines: [
              {
                id: "dl_3_2_1",
                speakerId: "agent",
                speaker: "Agent",
                text: "How old are you, Ahmed?",
              },
              {
                id: "dl_3_2_2",
                speakerId: "ahmed",
                speaker: "Ahmed",
                text: "I am 19 years old.",
              },
              {
                id: "dl_3_2_3",
                speakerId: "agent",
                speaker: "Agent",
                text: "What is your phone number?",
              },
              {
                id: "dl_3_2_4",
                speakerId: "ahmed",
                speaker: "Ahmed",
                text: "My phone number is 0555-123-456.",
              },
              {
                id: "dl_3_2_5",
                speakerId: "agent",
                speaker: "Agent",
                text: "Thank you! What is your city?",
              },
              {
                id: "dl_3_2_6",
                speakerId: "ahmed",
                speaker: "Ahmed",
                text: "My city is Sakaka.",
              },
            ],
          },
        },
        {
          id: "b_l3_2_3",
          type: "grammar_point",
          isActive: true,
          purpose: "grammar_explanation",
          extensions: {
            title: {
              text: {
                en: "Asking Questions for Personal Details",
                ar: "صياغة الأسئلة عن البيانات الشخصية",
              },
            },
            explanation: {
              en: "• Age: How old are you? -> I am 19.\n• Phone: What is your phone number? -> My phone number is...\n• Address/City: Where do you live? / What is your city?",
              ar: "• العمر: ?How old are you -> I am 19.\n• الهاتف: ?What is your phone number -> ...My phone number is\n• السكن/المدينة: ?Where do you live",
            },
          },
          data: {
            text: "Question Patterns:\n• How old are you?\n• What is your phone number?\n• What is your address?",
          },
        },
        {
          id: "b_l3_2_4",
          type: "matching",
          isActive: false, // معطل تفاعلياً حسب التوجيهات
          purpose: "question_answer_matching",
          extensions: {
            instruction: {
              text: {
                en: "Match the question on the left to the correct answer on the right.",
                ar: "صل السؤال على اليسار بالإجابة المناسبة له على اليمين.",
              },
            },
          },
          data: {
            items: [
              {
                id: "m_3_2_1",
                left: "How old are you?",
                right: "I am 19 years old.",
                points: 1,
              },
              {
                id: "m_3_2_2",
                left: "What is your city?",
                right: "I live in Sakaka.",
                points: 1,
              },
              {
                id: "m_3_2_3",
                left: "What is your job?",
                right: "I am a developer.",
                points: 1,
              },
            ],
          },
        },
        {
          id: "b_l3_2_5",
          type: "fill_blanks",
          isActive: true,
          purpose: "controlled_practice",
          extensions: {
            instruction: {
              text: {
                en: "Fill in the missing question words: [ How, What, Where ]",
                ar: "أكمل الفراغات بكلمات السؤال المناسبة: [ How, What, Where ]",
              },
            },
          },
          data: {
            items: [
              {
                id: "fb_3_2_1",
                text: "_____ old are you?",
                answer: "How",
                points: 1,
              },
              {
                id: "fb_3_2_2",
                text: "_____ is your phone number?",
                answer: "What",
                points: 1,
              },
              {
                id: "fb_3_2_3",
                text: "_____ do you live?",
                answer: "Where",
                points: 1,
              },
            ],
          },
        },
        {
          id: "b_l3_2_6",
          type: "free_practice",
          isActive: true,
          purpose: "production",
          extensions: {
            title: {
              text: {
                en: "Personal Registration Practice",
                ar: "تطبيق تسجيل البيانات الشخصية",
              },
            },
            instruction: {
              text: {
                en: "Write two sentences giving your age and city.",
                ar: "اكتب جملتين تذكر فيهما عمرك ومدينتك.",
              },
            },
            tip: {
              icon: "lightbulb",
              text: {
                en: "Example: I am 19 years old. My city is Sakaka.",
                ar: "مثال: I am 19 years old. My city is Sakaka.",
              },
            },
          },
          data: {
            text: "Write two sentences giving your age and city.\nExample: I am 19 years old. My city is Sakaka.",
          },
        },
      ],
    },
    // ------------------------------------------------------------------------
    // LESSON 3: Negative Forms of 'be'
    // ------------------------------------------------------------------------
    {
      id: "lesson_3_3",
      title: {
        en: "Negative Forms of 'be'",
        ar: "صيغ النفي مع الفعل To Be",
      },
      slug: "negative-forms-of-be",
      description: {
        en: "Learn how to make negative sentences using am not, is not (isn't), and are not (aren't).",
        ar: "تعلم كيفية صياغة الجمل المنفية باستخدام am not و isn't و aren't.",
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
          id: "b_l3_3_1",
          type: "word_list",
          isActive: true,
          purpose: "vocabulary_presentation",
          extensions: {
            title: {
              text: {
                en: "Negative Forms",
                ar: "صيغ النفي",
              },
            },
            instruction: {
              text: {
                en: "Study these basic negative phrases with the verb 'to be'.",
                ar: "ادرس هذه العبارات المنفية الأساسية مع الفعل To Be.",
              },
            },
          },
          data: {
            words: [
              {
                id: "w_3_3_1",
                word: "I'm not",
                definition: "I am not",
                example: "I'm not a doctor. I am a teacher.",
              },
              {
                id: "w_3_3_2",
                word: "He isn't",
                definition: "He is not",
                example: "He isn't at home today.",
              },
              {
                id: "w_3_3_3",
                word: "She isn't",
                definition: "She is not",
                example: "She isn't a student.",
              },
              {
                id: "w_3_3_4",
                word: "They aren't",
                definition: "They are not",
                example: "They aren't from London.",
              },
            ],
          },
        },
        {
          id: "b_l3_3_2",
          type: "dialogue",
          isActive: true,
          purpose: "contextual_presentation",
          extensions: {
            instruction: {
              text: {
                en: "Listen to Alex and Sarah correcting mistaken information.",
                ar: "استمع إلى أليكس وسارة أثناء تصحيح بعض المعلومات الخاطئة.",
              },
            },
          },
          data: {
            lines: [
              {
                id: "dl_3_3_1",
                speakerId: "alex",
                speaker: "Alex",
                text: "Is Mark a teacher at your school?",
              },
              {
                id: "dl_3_3_2",
                speakerId: "sarah",
                speaker: "Sarah",
                text: "No, he isn't a teacher. He is an engineer.",
              },
              {
                id: "dl_3_3_3",
                speakerId: "alex",
                speaker: "Alex",
                text: "Are they from Egypt?",
              },
              {
                id: "dl_3_3_4",
                speakerId: "sarah",
                speaker: "Sarah",
                text: "No, they aren't from Egypt. They are from Jordan.",
              },
            ],
          },
        },
        {
          id: "b_l3_3_3",
          type: "grammar_point",
          isActive: true,
          purpose: "grammar_explanation",
          extensions: {
            title: {
              text: {
                en: "Forming Negatives (not / isn't / aren't)",
                ar: "صياغة النفي (not / isn't / aren't)",
              },
            },
            explanation: {
              en: "To make a sentence negative, add 'not' after the verb 'be':\n• I am -> I'm not\n• He / She / It is -> isn't (is not)\n• We / You / They are -> aren't (are not)",
              ar: "لتحويل الجملة إلى نفي، أضف 'not' بعد الفعل To Be:\n• I am -> I'm not\n• He / She / It is -> isn't\n• We / You / They are -> aren't",
            },
          },
          data: {
            text: "Examples:\n• I'm not a driver.\n• He isn't from Cairo.\n• They aren't in the office.",
          },
        },
        {
          id: "b_l3_3_4",
          type: "matching",
          isActive: false, // معطل تفاعلياً حسب التوجيهات
          purpose: "negative_forms_matching",
          extensions: {
            instruction: {
              text: {
                en: "Match the subject pronouns on the left to their negative verb forms on the right.",
                ar: "صل الضمائر على اليسار بصيغة النفي المناسبة لها على اليمين.",
              },
            },
          },
          data: {
            items: [
              {
                id: "m_3_3_1",
                left: "I",
                right: "'m not",
                points: 1,
              },
              {
                id: "m_3_3_2",
                left: "He / She",
                right: "isn't",
                points: 1,
              },
              {
                id: "m_3_3_3",
                left: "They / We",
                right: "aren't",
                points: 1,
              },
            ],
          },
        },
        {
          id: "b_l3_3_5",
          type: "fill_blanks",
          isActive: true,
          purpose: "controlled_practice",
          extensions: {
            instruction: {
              text: {
                en: "Complete the negative sentences with isn't, aren't, or 'm not.",
                ar: "أكمل الجمل المنفية باستخدام isn't أو aren't أو 'm not.",
              },
            },
          },
          data: {
            items: [
              {
                id: "fb_3_3_1",
                text: "He _____ a doctor. He is a teacher.",
                answer: "isn't",
                points: 1,
              },
              {
                id: "fb_3_3_2",
                text: "They _____ from London. They are from Manchester.",
                answer: "aren't",
                points: 1,
              },
              {
                id: "fb_3_3_3",
                text: "I _____ 20 years old. I am 19.",
                answer: "'m not",
                points: 1,
              },
            ],
          },
        },
        {
          id: "b_l3_3_6",
          type: "free_practice",
          isActive: true,
          purpose: "production",
          extensions: {
            title: {
              text: {
                en: "Correct a Statement",
                ar: "تصحيح معلومة منفية",
              },
            },
            instruction: {
              text: {
                en: "Write a negative sentence correcting a job or origin.",
                ar: "اكتب جملة منفية تُصحح فيها وظيفة أو بلداً.",
              },
            },
            tip: {
              icon: "lightbulb",
              text: {
                en: "Example: He isn't a doctor. He is an engineer.",
                ar: "مثال: He isn't a doctor. He is an engineer.",
              },
            },
          },
          data: {
            text: "Write a negative sentence using isn't or aren't.\nExample: She isn't from London. She is from Riyadh.",
          },
        },
      ],
    },

    // ------------------------------------------------------------------------
    // LESSON 4: Yes/No Questions with 'be'
    // ------------------------------------------------------------------------
    {
      id: "lesson_3_4",
      title: {
        en: "Yes/No Questions with 'be'",
        ar: "أسئلة نعم/لا مع الفعل To Be",
      },
      slug: "yes-no-questions-with-be",
      description: {
        en: "Learn to ask simple Yes/No questions and give short answers with 'be'.",
        ar: "تعلم طرح الأسئلة البسيطة الإجابة بنعم/لا وإعطاء إجابات قصيرة باستخدام To Be.",
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
          id: "b_l3_4_1",
          type: "word_list",
          isActive: true,
          purpose: "vocabulary_presentation",
          extensions: {
            title: {
              text: {
                en: "Short Answers",
                ar: "الإجابات القصيرة",
              },
            },
            instruction: {
              text: {
                en: "Learn these standard short responses to Yes/No questions.",
                ar: "تعلم هذه الإجابات القصيرة القياسية لأسئلة نعم/لا.",
              },
            },
          },
          data: {
            words: [
              {
                id: "w_3_4_1",
                word: "Yes, I am. / No, I'm not.",
                definition: "Short answer for 'Are you...?'",
                example: "Are you a student? - Yes, I am.",
              },
              {
                id: "w_3_4_2",
                word: "Yes, he is. / No, he isn't.",
                definition: "Short answer for 'Is he...?'",
                example: "Is he an engineer? - No, he isn't.",
              },
              {
                id: "w_3_4_3",
                word: "Yes, they are. / No, they aren't.",
                definition: "Short answer for 'Are they...?'",
                example: "Are they from Saudi Arabia? - Yes, they are.",
              },
            ],
          },
        },
        {
          id: "b_l3_4_2",
          type: "dialogue",
          isActive: true,
          purpose: "contextual_presentation",
          extensions: {
            instruction: {
              text: {
                en: "Listen to Tariq asking quick questions to confirm details.",
                ar: "استمع إلى طارق وهو يطرح أسئلة سريعة للتأكد من البيانات.",
              },
            },
          },
          data: {
            lines: [
              {
                id: "dl_3_4_1",
                speakerId: "tariq",
                speaker: "Tariq",
                text: "Are you from Sakaka?",
              },
              {
                id: "dl_3_4_2",
                speakerId: "faisal",
                speaker: "Faisal",
                text: "Yes, I am! Are you a developer?",
              },
              {
                id: "dl_3_4_3",
                speakerId: "tariq",
                speaker: "Tariq",
                text: "Yes, I am. Is your brother an engineer?",
              },
              {
                id: "dl_3_4_4",
                speakerId: "faisal",
                speaker: "Faisal",
                text: "No, he isn't. He is a teacher.",
              },
            ],
          },
        },
        {
          id: "b_l3_4_3",
          type: "grammar_point",
          isActive: true,
          purpose: "grammar_explanation",
          extensions: {
            title: {
              text: {
                en: "Yes/No Question Structure",
                ar: "ترتيب سؤال Yes/No",
              },
            },
            explanation: {
              en: "To create a question, switch the order of the subject and 'be':\n• You are a student -> Are you a student?\n• He is a teacher -> Is he a teacher?\n• They are from Egypt -> Are they from Egypt?",
              ar: "لتكوين سؤال، اعكس ترتيب الفاعل والفعل To Be:\n• You are -> ?Are you\n• He is -> ?Is he\n• They are -> ?Are they",
            },
          },
          data: {
            text: "Question Forms:\n• Am I...? -> Yes, you are. / No, you aren't.\n• Is he/she...? -> Yes, he is. / No, he isn't.\n• Are you/they...? -> Yes, they are. / No, they aren't.",
          },
        },
        {
          id: "b_l3_4_4",
          type: "reorder_words",
          isActive: true,
          purpose: "sentence_building",
          extensions: {
            instruction: {
              text: {
                en: "Arrange the words to build correct Yes/No questions.",
                ar: "رتب الكلمات لبناء أسئلة صحيحة.",
              },
            },
          },
          data: {
            items: [
              {
                id: "rw_3_4_1",
                words: ["you", "Are", "teacher", "a", "?"],
                correctOrder: ["Are", "you", "a", "teacher", "?"],
                points: 1,
              },
              {
                id: "rw_3_4_2",
                words: ["he", "Is", "Egypt", "from", "?"],
                correctOrder: ["Is", "he", "from", "Egypt", "?"],
                points: 1,
              },
            ],
          },
        },
        {
          id: "b_l3_4_5",
          type: "fill_blanks",
          isActive: true,
          purpose: "controlled_practice",
          extensions: {
            instruction: {
              text: {
                en: "Complete the questions with Is or Are.",
                ar: "أكمل الأسئلة بوضع Is أو Are.",
              },
            },
          },
          data: {
            items: [
              {
                id: "fb_3_4_1",
                text: "_____ you a web developer?",
                answer: "Are",
                points: 1,
              },
              {
                id: "fb_3_4_2",
                text: "_____ she from London?",
                answer: "Is",
                points: 1,
              },
              {
                id: "fb_3_4_3",
                text: "_____ they doctors?",
                answer: "Are",
                points: 1,
              },
            ],
          },
        },
        {
          id: "b_l3_4_6",
          type: "free_practice",
          isActive: true,
          purpose: "production",
          extensions: {
            title: {
              text: {
                en: "Ask a Question",
                ar: "طرح سؤال بسيط",
              },
            },
            instruction: {
              text: {
                en: "Write one Yes/No question using Is or Are to ask about someone's job or city.",
                ar: "اكتب سؤالاً واحداً بنعم/لا باستخدام Is أو Are للسؤال عن وظيفة أو مدينة شخص ما.",
              },
            },
            tip: {
              icon: "lightbulb",
              text: {
                en: "Example: Are you a developer?",
                ar: "مثال: ?Are you a developer",
              },
            },
          },
          data: {
            text: "Write a Yes/No question.\nExample: Is he from Saudi Arabia?",
          },
        },
      ],
    },
    // ------------------------------------------------------------------------
    // LESSON 5: Unit 3 Practice & Review
    // ------------------------------------------------------------------------
    {
      id: "lesson_3_5",
      title: {
        en: "Unit 3 Practice & Review",
        ar: "مراجعة وتقييم الوحدة الثالثة",
      },
      slug: "unit-3-review",
      description: {
        en: "Comprehensive review of jobs, personal details, negative 'be' forms, Yes/No questions, and social expressions.",
        ar: "مراجعة شاملة للمهن، البيانات الشخصية، صيغ النفي مع To Be، أسئلة نعم/لا، والعبارات الاجتماعية.",
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
          id: "b_l3_5_1",
          type: "matching",
          isActive: false, // معطل تفاعلياً حسب التوجيهات
          purpose: "unit_comprehensive_matching",
          extensions: {
            instruction: {
              text: {
                en: "Match the questions or phrases on the left with their correct answers on the right.",
                ar: "صل الأسئلة أو العبارات على اليسار بالإجابات المناسبة لها على اليمين.",
              },
            },
          },
          data: {
            items: [
              {
                id: "m_3_5_1",
                left: "Are you a teacher?",
                right: "No, I am a developer.",
                points: 1,
              },
              {
                id: "m_3_5_2",
                left: "How old is he?",
                right: "He is 19 years old.",
                points: 1,
              },
              {
                id: "m_3_5_3",
                left: "Is she from Egypt?",
                right: "No, she isn't.",
                points: 1,
              },
            ],
          },
        },
        {
          id: "b_l3_5_2",
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
                en: "Fill in the missing words using: [ are, am, isn't, number ]",
                ar: "أكمل الفراغات مع استخدام: [ are, am, isn't, number ]",
              },
            },
          },
          data: {
            items: [
              {
                id: "fb_3_5_1",
                text: "Excuse me, _____ you a doctor?",
                answer: "are",
                points: 1,
              },
              {
                id: "fb_3_5_2",
                text: "I _____ not an engineer. I am a student.",
                answer: "am",
                points: 1,
              },
              {
                id: "fb_3_5_3",
                text: "She _____ from Sakaka. She is from Riyadh.",
                answer: "isn't",
                points: 1,
              },
              {
                id: "fb_3_5_4",
                text: "What is your phone _____?",
                answer: "number",
                points: 1,
              },
            ],
          },
        },
        {
          id: "b_l3_5_3",
          type: "reorder_words",
          isActive: true,
          purpose: "sentence_structure_review",
          extensions: {
            instruction: {
              text: {
                en: "Reorder the words to form correct questions and negative statements.",
                ar: "رتب الكلمات لبناء أسئلة وجمل منفية صحيحة.",
              },
            },
          },
          data: {
            items: [
              {
                id: "rw_3_5_1",
                words: ["not", "a", "I", "doctor", "am"],
                correctOrder: ["I", "am", "not", "a", "doctor"],
                points: 1,
              },
              {
                id: "rw_3_5_2",
                words: ["he", "Is", "engineer", "an", "?"],
                correctOrder: ["Is", "he", "an", "engineer", "?"],
                points: 1,
              },
            ],
          },
        },
        {
          id: "b_l3_5_4",
          type: "free_practice",
          isActive: true,
          purpose: "final_unit_challenge",
          extensions: {
            title: {
              text: {
                en: "Unit 3 Self-Introduction Challenge",
                ar: "تحدي التعريف بالنفس للوحدة الثالثة",
              },
            },
            instruction: {
              text: {
                en: "Write 3 sentences: 1) State your job with a/an. 2) State your age. 3) Write one negative sentence about a job or city.",
                ar: "اكتب 3 جمل: 1) اذكر وظيفتك مع a/an. 2) اذكر عمرك. 3) اكتب جملة منفية تبيّن عدم صحة وظيفة أو مدينة ما.",
              },
            },
            tip: {
              icon: "lightbulb",
              text: {
                en: "Example: I am a developer. I am 19 years old. I am not a doctor.",
                ar: "مثال: I am a developer. I am 19 years old. I am not a doctor.",
              },
            },
          },
          data: {
            text: "Write 3 sentences covering job, age, and a negative statement.\nExample: I am a developer. I am 19 years old. I am not a doctor.",
          },
        },
      ],
    },
  ],
};