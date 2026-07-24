import { UnitType } from "@/types/learning";

export const unit_1: UnitType = {
  id: 1,
  slug: "unit-1",
  title: "First Connections",
  CEFR: "A1",
  goals: [
    "Greet people and introduce yourself confidently",
    "Introduce third parties using 'This is...'",
    "Ask 'How are you?' and respond politely in daily situations",
    "Use time-appropriate greetings (Good morning / afternoon / evening / night)",
    "Identify everyday objects using indefinite articles 'a' and 'an'",
    "Count from 1 to 10 and construct basic plural nouns"
  ],
  sectionorder: [
    "sec_l1",
    "sec_l2",
    "sec_l3",
    "sec_l4",
    "sec_l5"
  ],
  sections: [
    /* ===================================================================
       LESSON 1: First Encounters
       =================================================================== */
    {
      id: "sec_l1",
      type: "starter",
      title: "First Encounters",
      slug: "first-encounters",
      lesson: "Lesson 1",
      blocks: [
        // Block 1: Main Dialogue
        {
          id: "b_l1_1",
          type: "dialogue",
          extensions: {
            instruction: {
              id: "inst_1",
              text: "Listen and read the dialogue below.",
              translation: "استمع واقرأ المحادثة التالية."
            },
            audio: {
              url: "/audio/unit1/lesson1/dialogue1.mp3",
              ref: "Audio 1.1"
            }
          },
          data: {
            image: {
              url: "/images/unit1/coworking-hub.jpg",
              desc: "A bright, modern co-working hub with indoor plants. Alex (a young male developer with headphones) is holding a coffee cup, talking to Sarah (a female UI designer sitting with a laptop)."
            },
            lines: [
              { id: "l1_1", speakerId: "1st", speaker: "Alex", text: "Hi! I’m Alex. What’s your name?" },
              { id: "l1_2", speakerId: "2nd", speaker: "Sarah", text: "Hello! My name’s Sarah." },
              { id: "l1_3", speakerId: "1st", speaker: "Alex", text: "Nice to meet you, Sarah." },
              { id: "l1_4", speakerId: "2nd", speaker: "Sarah", text: "Nice to meet you too!" }
            ]
          }
        },

        // Block 2: Grammar Point / Notice the Pattern
        {
          id: "b_l1_2",
          type: "grammar_point",
          extensions: {
            tip: {
              icon: "lamp",
              text: "In English conversations, contractions are very common: I am -> I'm | My name is -> My name's | What is -> What's"
            }
          },
          data: {
            title: "Notice the Pattern",
            rules: [
              "I am -> I'm (Example: I'm Alex)",
              "My name is -> My name's (Example: My name's Sarah)",
              "What is -> What's (Example: What's your name?)"
            ]
          }
        },

        // Block 3: Contextual Variations (Park & Elevator)
        {
          id: "b_l1_3",
          type: "dialogue",
          extensions: {
            title: "Everyday Situations",
            instruction: {
              id: "inst_2",
              text: "Listen and read how people greet each other in different places.",
              translation: "استمع واقرأ كيف يحيي الناس بعضهم في أماكن مختلفة."
            },
            audio: {
              url: "/audio/unit1/lesson1/dialogue2.mp3",
              ref: "Audio 1.2"
            }
          },
          data: {
            image: {
              url: "/images/unit1/park-greeting.jpg",
              desc: "Two young people carrying backpacks in a quiet city park during daytime."
            },
            lines: [
              { id: "l1_c1_1", speakerId: "1st", speaker: "Liam", text: "Hi, I'm Liam." },
              { id: "l1_c1_2", speakerId: "2nd", speaker: "Maya", text: "Hello Liam! My name's Maya." },
              { id: "l1_c1_3", speakerId: "1st", speaker: "Liam", text: "Nice to meet you, Maya." }
            ]
          }
        },
        {
          id: "b_l1_4",
          type: "dialogue",
          data: {
            image: {
              url: "/images/unit1/elevator-greeting.jpg",
              desc: "A male and female colleague standing in a modern office elevator."
            },
            lines: [
              { id: "l1_c2_1", speakerId: "1st", speaker: "David", text: "Hello! What's your name?" },
              { id: "l1_c2_2", speakerId: "2nd", speaker: "Elena", text: "Hi! My name's Elena. And you?" },
              { id: "l1_c2_3", speakerId: "1st", speaker: "David", text: "I'm David. Nice to meet you!" },
              { id: "l1_c2_4", speakerId: "2nd", speaker: "Elena", text: "Nice to meet you too." }
            ]
          }
        },

        // Block 5: Student Turn
        {
          id: "b_l1_5",
          type: "fill_blanks",
          extensions: {
            title: "Student Turn",
            instruction: {
              id: "inst_3",
              text: "Try it yourself: Imagine you are at a event. Complete the conversation with appropriate words.",
              translation: "جرب بنفسك: تخيل أنك في فعالية. أكمل الحوار بالكلمات المناسبة."
            }
          },
          data: {
            items: [
              {
                id: "item_l1_1",
                text: "Person A: Hi! I'm [blank_1]. What's your name?",
                answer: "Alex"
              },
              {
                id: "item_l1_2",
                text: "Person B: Hello! My [blank_2] is Sarah.",
                answer: "name"
              },
              {
                id: "item_l1_3",
                text: "Person A: [blank_3] to meet you!",
                answer: "Nice"
              },
              {
                id: "item_l1_4",
                text: "Person B: Nice to meet you [blank_4]!",
                answer: "too"
              }
            ]
          }
        }
      ]
    },

    /* ===================================================================
       LESSON 2: Meeting the Team
       =================================================================== */
    {
      id: "sec_l2",
      type: "speaking",
      title: "Meeting the Team",
      slug: "meeting-the-team",
      lesson: "Lesson 2",
      blocks: [
        // Block 1: Main Dialogue
        {
          id: "b_l2_1",
          type: "dialogue",
          extensions: {
            instruction: {
              id: "inst_4",
              text: "Listen to Alex introducing Adam to Sarah.",
              translation: "استمع إلى أليكس وهو يقدم أدم لسارة."
            },
            audio: {
              url: "/audio/unit1/lesson2/dialogue1.mp3",
              ref: "Audio 2.1"
            }
          },
          data: {
            image: {
              url: "/images/unit1/introducing-colleague.jpg",
              desc: "Alex, Sarah, and a new colleague (Adam) standing together in an office hallway. Alex is introducing Adam to Sarah."
            },
            lines: [
              { id: "l2_1", speakerId: "1st", speaker: "Alex", text: "Sarah, this is Adam. Adam, this is Sarah." },
              { id: "l2_2", speakerId: "2nd", speaker: "Sarah", text: "Hello, Adam. Nice to meet you." },
              { id: "l2_3", speakerId: "3rd", speaker: "Adam", text: "Nice to meet you too, Sarah." },
              { id: "l2_4", speakerId: "1st", speaker: "Alex", text: "How are you today, Adam?" },
              { id: "l2_5", speakerId: "3rd", speaker: "Adam", text: "I'm very well, thank you!" }
            ]
          }
        },

        // Block 2: Key Structure
        {
          id: "b_l2_2",
          type: "grammar_point",
          extensions: {
            tip: {
              icon: "lamp",
              text: "To introduce someone: 'This is + [Name]'. To ask about health/feeling: 'How are you?'"
            }
          },
          data: {
            title: "Language Focus",
            rules: [
              "Introducing someone: This is + [Name] (e.g. Sarah, this is Adam.)",
              "Asking how someone is: How are you?",
              "Responding: I'm very well, thank you. / I'm fine, thanks."
            ]
          }
        },

        // Block 3: Contextual Variations
        {
          id: "b_l2_3",
          type: "dialogue",
          extensions: {
            title: "Introducing Friends and Family",
            audio: {
              url: "/audio/unit1/lesson2/dialogue2.mp3",
              ref: "Audio 2.2"
            }
          },
          data: {
            image: {
              url: "/images/unit1/coffee-shop-intro.jpg",
              desc: "Three adults in a brightly lit coffee shop near a tech hub."
            },
            lines: [
              { id: "l2_c1_1", speakerId: "1st", speaker: "Mark", text: "Nina, this is Leo. Leo, this is Nina." },
              { id: "l2_c1_2", speakerId: "2nd", speaker: "Nina", text: "Nice to meet you, Leo." },
              { id: "l2_c1_3", speakerId: "3rd", speaker: "Leo", text: "Nice to meet you too, Nina." }
            ]
          }
        },
        {
          id: "b_l2_4",
          type: "dialogue",
          data: {
            image: {
              url: "/images/unit1/home-intro.jpg",
              desc: "A mother at the door of a house introducing a neighbor to her teenager son."
            },
            lines: [
              { id: "l2_c2_1", speakerId: "1st", speaker: "Hana", text: "Rayan, this is Omar. Omar, this is my son, Rayan." },
              { id: "l2_c2_2", speakerId: "2nd", speaker: "Omar", text: "Hello Rayan! Nice to meet you." },
              { id: "l2_c2_3", speakerId: "3rd", speaker: "Rayan", text: "Nice to meet you too, Omar." }
            ]
          }
        },

        // Block 4: Student Turn (Free Practice)
        {
          id: "b_l2_5",
          type: "free_practice",
          extensions: {
            title: "Student Turn: Roleplay",
            instruction: {
              id: "inst_5",
              text: "Scenario: Imagine introducing your friend Omar to Lina. Say or write the conversation below.",
              translation: "سيناريو: تخيل أنك تقدم صديقك عمر إلى لينا. قل أو اكتب الحوار أدناه."
            }
          },
          data: {
            prompt: "Introduce Omar to Lina:",
            placeholder: "Lina, this is Omar. Omar, this is Lina...",
            maxLength: 200,
            allowAudioRecord: true
          }
        }
      ]
    },

    /* ===================================================================
       LESSON 3: Day & Night Greetings
       =================================================================== */
    {
      id: "sec_l3",
      type: "everyday_english",
      title: "Day & Night Greetings",
      slug: "day-and-night-greetings",
      lesson: "Lesson 3",
      blocks: [
        // Block 1: Main Dialogue
        {
          id: "b_l3_1",
          type: "dialogue",
          extensions: {
            instruction: {
              id: "inst_6",
              text: "Listen to the morning greeting at a local bakery.",
              translation: "استمع إلى تحية الصباح في المخبز."
            },
            audio: {
              url: "/audio/unit1/lesson3/dialogue1.mp3",
              ref: "Audio 3.1"
            }
          },
          data: {
            image: {
              url: "/images/unit1/bakery-morning.jpg",
              desc: "A cozy bakery in a sunny European street at 8:30 AM. Sunlight streaming through the window. Clock shows 8:30. Emma is ordering at the counter from Mario."
            },
            lines: [
              { id: "l3_1", speakerId: "1st", speaker: "Mario", text: "Good morning! How are you today?" },
              { id: "l3_2", speakerId: "2nd", speaker: "Emma", text: "Good morning, Mario! I’m very well, thank you." },
              { id: "l3_3", speakerId: "1st", speaker: "Mario", text: "Here is your coffee. Have a nice day!" },
              { id: "l3_4", speakerId: "2nd", speaker: "Emma", text: "Thank you! You too." }
            ]
          }
        },

        // Block 2: Quick Tip
        {
          id: "b_l3_2",
          type: "grammar_point",
          extensions: {
            tip: {
              icon: "lamp",
              text: "8:00 AM - 12:00 PM = Good morning! | 12:00 PM - 5:00 PM = Good afternoon! | 5:00 PM - 9:00 PM = Good evening! | Bedtime / Leaving at night = Good night!"
            }
          },
          data: {
            title: "Greetings by Time of Day",
            rules: [
              "Morning (8:00 AM – 12:00 PM): Good morning!",
              "Afternoon (12:00 PM – 5:00 PM): Good afternoon!",
              "Evening (5:00 PM – 9:00 PM): Good evening!",
              "Night (Bedtime / Leaving): Good night!"
            ]
          }
        },

        // Block 3: Everyday Situations
        {
          id: "b_l3_3",
          type: "dialogue",
          extensions: {
            audio: {
              url: "/audio/unit1/lesson3/dialogue2.mp3",
              ref: "Audio 3.2"
            }
          },
          data: {
            image: {
              url: "/images/unit1/park-afternoon.jpg",
              desc: "A public city park at 2:15 PM. Bright sun. Two friends walking their dogs meet on a path."
            },
            lines: [
              { id: "l3_c1_1", speakerId: "1st", speaker: "Tom", text: "Good afternoon, Anna!" },
              { id: "l3_c1_2", speakerId: "2nd", speaker: "Anna", text: "Good afternoon, Tom! How’s it going?" },
              { id: "l3_c1_3", speakerId: "1st", speaker: "Tom", text: "All good, thanks!" }
            ]
          }
        },
        {
          id: "b_l3_4",
          type: "dialogue",
          data: {
            image: {
              url: "/images/unit1/hotel-evening.jpg",
              desc: "A warm hotel reception area at 7:00 PM. Dim orange lighting. Receptionist greeting a guest."
            },
            lines: [
              { id: "l3_c2_1", speakerId: "1st", speaker: "Receptionist", text: "Good evening, sir. Welcome!" },
              { id: "l3_c2_2", speakerId: "2nd", speaker: "Guest", text: "Good evening. I have a reservation." }
            ]
          }
        },
        {
          id: "b_l3_5",
          type: "dialogue",
          data: {
            image: {
              url: "/images/unit1/bedroom-night.jpg",
              desc: "A cozy bedroom at 10:30 PM. Bedside lamp is on. A mother saying goodnight to her son in bed."
            },
            lines: [
              { id: "l3_c3_1", speakerId: "1st", speaker: "Mom", text: "Good night, Leo!" },
              { id: "l3_c3_2", speakerId: "2nd", speaker: "Leo", text: "Good night, Mom! See you tomorrow." }
            ]
          }
        },

        // Block 4: Student Turn
        {
          id: "b_l3_6",
          type: "fill_blanks",
          extensions: {
            title: "Student Turn: Practice Greetings",
            instruction: {
              id: "inst_7",
              text: "Complete the sentences based on the clock times provided.",
              translation: "أكمل الجمل بناءً على الوقت المحدد أمامك."
            }
          },
          data: {
            items: [
              { id: "blank_t1", text: "9:00 AM: [blank_1]! How are you?", answer: "Good morning" },
              { id: "blank_t2", text: "3:00 PM: [blank_2], Tom!", answer: "Good afternoon" },
              { id: "blank_t3", text: "10:00 PM (Bedtime): [blank_3]! See you tomorrow.", answer: "Good night" }
            ]
          }
        }
      ]
    },

    /* ===================================================================
       LESSON 4: My Workspace & Numbers
       =================================================================== */
    {
      id: "sec_l4",
      type: "vocabulary",
      title: "My Workspace & Numbers",
      slug: "workspace-and-numbers",
      lesson: "Lesson 4",
      blocks: [
        // Block 1: Visual Vocabulary
        {
          id: "b_l4_1",
          type: "image_cards",
          extensions: {
            instruction: {
              id: "inst_8",
              text: "Listen and repeat the everyday objects.",
              translation: "استمع وكرر أسماء الأشياء اليومية."
            },
            audio: {
              url: "/audio/unit1/lesson4/vocab.mp3",
              ref: "Audio 4.1"
            }
          },
          data: {
            layout: "grid",
            cards: [
              { id: "card_1", url: "/images/unit1/bag.jpg", text: "a bag", caption: "حقيبة" },
              { id: "card_2", url: "/images/unit1/apple.jpg", text: "an apple", caption: "تفاحة" },
              { id: "card_3", url: "/images/unit1/house.jpg", text: "a house", caption: "بيت" },
              { id: "card_4", url: "/images/unit1/umbrella.jpg", text: "an umbrella", caption: "مظلة" },
              { id: "card_5", url: "/images/unit1/key.jpg", text: "a key", caption: "مفتاح" },
              { id: "card_6", url: "/images/unit1/phone.jpg", text: "a phone", caption: "هاتف" }
            ]
          }
        },

        // Block 2: Quick Tip (a / an)
        {
          id: "b_l4_2",
          type: "grammar_point",
          extensions: {
            tip: {
              icon: "lamp",
              text: "Use 'a' before consonant sounds (a bag, a key). Use 'an' before vowel sounds a, e, i, o, u (an apple, an umbrella)."
            }
          },
          data: {
            title: "Using a / an",
            rules: [
              "a + Consonant sound (a bag / a house / a key / a phone)",
              "an + Vowel sound (an apple / an umbrella)"
            ]
          }
        },

        // Block 3: Dialogue in the Market
        {
          id: "b_l4_3",
          type: "dialogue",
          extensions: {
            audio: {
              url: "/audio/unit1/lesson4/dialogue1.mp3",
              ref: "Audio 4.2"
            }
          },
          data: {
            image: {
              url: "/images/unit1/fruit-market.jpg",
              desc: "A vibrant outdoor street fruit market on a rainy afternoon. Carlos holding an umbrella, buying apples from a vendor."
            },
            lines: [
              { id: "l4_1", speakerId: "1st", speaker: "Vendor", text: "Hello! Good afternoon." },
              { id: "l4_2", speakerId: "2nd", speaker: "Carlos", text: "Hi! Three apples and a bag, please." },
              { id: "l4_3", speakerId: "1st", speaker: "Vendor", text: "Here you go. Three apples and one bag." },
              { id: "l4_4", speakerId: "2nd", speaker: "Carlos", text: "Thank you very much!" },
              { id: "l4_5", speakerId: "1st", speaker: "Vendor", text: "You're welcome. Have a nice day!" }
            ]
          }
        },

        // Block 4: Numbers 1-10 & Plurals
        {
          id: "b_l4_4",
          type: "word_list",
          extensions: {
            title: "Numbers 1 to 10 & Plural Nouns",
            audio: {
              url: "/audio/unit1/lesson4/numbers.mp3",
              ref: "Audio 4.3"
            },
            tip: {
              icon: "lamp",
              text: "To make a noun plural, add 's' at the end: one key -> two keys."
            }
          },
          data: {
            items: [
              { id: "num_1", primaryText: "1 - One", secondaryText: "one bag (or a bag)" },
              { id: "num_2", primaryText: "2 - Two", secondaryText: "two bags" },
              { id: "num_3", primaryText: "3 - Three", secondaryText: "three apples" },
              { id: "num_4", primaryText: "4 - Four", secondaryText: "four keys" },
              { id: "num_5", primaryText: "5 - Five", secondaryText: "five houses" },
              { id: "num_6", primaryText: "6 - Six", secondaryText: "six phones" },
              { id: "num_7", primaryText: "7 - Seven", secondaryText: "seven umbrellas" },
              { id: "num_8", primaryText: "8 - Eight", secondaryText: "eight apples" },
              { id: "num_9", primaryText: "9 - Nine", secondaryText: "nine keys" },
              { id: "num_10", primaryText: "10 - Ten", secondaryText: "ten bags" }
            ]
          }
        },

        // Block 5: Student Turn
        {
          id: "b_l4_5",
          type: "free_practice",
          extensions: {
            title: "Student Turn: Practice Speaking",
            instruction: {
              id: "inst_9",
              text: "Look around your room or desk. Say or write 2 things you have using numbers.",
              translation: "انظر حولك في الغرفة. قل أو اكتب شيئين تملكهما مع الأرقام."
            }
          },
          data: {
            prompt: "Example: I have two phones and three keys.",
            placeholder: "I have...",
            allowAudioRecord: true
          }
        }
      ]
    },

    /* ===================================================================
       LESSON 5: Unit 1 Review & Practice
       =================================================================== */
    {
      id: "sec_l5",
      type: "quiz",
      title: "Unit 1 Practice & Review",
      slug: "unit-1-review",
      lesson: "Lesson 5",
      blocks: [
        // Block 1: Matching
        {
          id: "b_l5_1",
          type: "matching",
          extensions: {
            instruction: {
              id: "inst_10",
              text: "Match the situation on the left with the correct greeting or phrase on the right.",
              translation: "صل الموقف في اليسار بالتحية المناسبة في اليمين."
            }
          },
          data: {
            questions: [
              { id: "q1", text: "Meeting someone at 9:00 AM in a bakery." },
              { id: "q2", text: "Saying goodbye to family at 10:30 PM." },
              { id: "q3", text: "Meeting a friend at 3:00 PM in the park." },
              { id: "q4", text: "Introducing a colleague: Sarah, _____ Adam." }
            ],
            answers: [
              { id: "a1", text: "Good morning!" },
              { id: "a2", text: "Good night!" },
              { id: "a3", text: "Good afternoon!" },
              { id: "a4", text: "this is" }
            ],
            correctPairs: [
              { questionId: "q1", answerId: "a1" },
              { questionId: "q2", answerId: "a2" },
              { questionId: "q3", answerId: "a3" },
              { questionId: "q4", answerId: "a4" }
            ]
          }
        },

        // Block 2: Complete Full Conversation
        {
          id: "b_l5_2",
          type: "fill_blanks",
          extensions: {
            title: "Comprehensive Dialogue Practice",
            instruction: {
              id: "inst_11",
              text: "Complete the dialogue using: [ is, My, am, Nice, is ]",
              translation: "أكمل الحوار باستخدام الكلمات التالية."
            }
          },
          data: {
            items: [
              { id: "rev_b1", text: "Omar: Hi! What [blank_1] your name?", answer: "is" },
              { id: "rev_b2", text: "Lina: Hello! [blank_2] name is Lina. And you?", answer: "My" },
              { id: "rev_b3", text: "Omar: I [blank_3] Omar.", answer: "am" },
              { id: "rev_b4", text: "Lina: [blank_4] to meet you, Omar!", answer: "Nice" },
              { id: "rev_b5", text: "Omar: Nice to meet you too! This [blank_5] my brother, Rayan.", answer: "is" }
            ]
          }
        },

        // Block 3: Reorder Words
        {
          id: "b_l5_3",
          type: "reorder_words",
          extensions: {
            title: "Sentence Order Practice",
            instruction: {
              id: "inst_12",
              text: "Put the words in the correct order to form complete sentences.",
              translation: "رتب الكلمات لتكوين جمل صحيحة."
            }
          },
          data: {
            items: [
              {
                id: "ro_1",
                words: ["name", "My", "Alex", "is"],
                correctOrder: ["My", "name", "is", "Alex"]
              },
              {
                id: "ro_2",
                words: ["you", "are", "How", "today", "?"],
                correctOrder: ["How", "are", "you", "today", "?"]
              },
              {
                id: "ro_3",
                words: ["keys", "three", "have", "I"],
                correctOrder: ["I", "have", "three", "keys"]
              }
            ]
          }
        },

        // Block 4: Grammar Choice (a / an / plurals)
        {
          id: "b_l5_4",
          type: "fill_blanks",
          extensions: {
            title: "Grammar & Articles Check",
            instruction: {
              id: "inst_13",
              text: "Type the correct word (a, an, two, one).",
              translation: "اكتب الكلمة الصحيحة."
            }
          },
          data: {
            items: [
              { id: "gc_1", text: "I have [blank_1] apple in my bag.", answer: "an" },
              { id: "gc_2", text: "She has [blank_2] phone.", answer: "a" },
              { id: "gc_3", text: "Look at those [blank_3] umbrellas!", answer: "two" },
              { id: "gc_4", text: "There is [blank_4] house on the street.", answer: "one" }
            ]
          }
        },

        // Block 5: Final Practice Challenge
        {
          id: "b_l5_5",
          type: "free_practice",
          extensions: {
            title: "Final Challenge",
            instruction: {
              id: "inst_14",
              text: "Record or write 3 sentences introducing yourself, introducing a friend, and listing 2 things you have.",
              translation: "سجل أو اكتب 3 جمل تعرّف فيها بنفسك، وبصديقك، وتذكر شيئين تملكهما."
            }
          },
          data: {
            prompt: "Example: Hi, I'm Alex. This is my friend Sarah. I have two keys and a phone.",
            placeholder: "Type your sentences here...",
            maxLength: 300,
            allowAudioRecord: true
          }
        }
      ]
    }
  ]
};