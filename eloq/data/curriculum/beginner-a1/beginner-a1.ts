type sectionTypes = [
  "starter",
  "grammar",
  "vocabulary",
  "listening",
  "speaking",
  "reading",
  "writing",
  "quiz",
  "everyday_english"
];

export const unit1 = {
  unit_id: 1,
  slug: "hello",
  unit_title: "What's up!",
  sections: [
    {
      id: "1.1",
      type: "starter",
      title: "What's your name?",
      icon: "fa-play-circle",
      content: {
        instruction: "Read and listen. Say your name.",
        dialogues: [
          {
            speaker: "Sara",
            text: "Hello, I'm Sara.",
            image_desc: "A woman smiling"
          },
          {
            speaker: "Adam",
            text: "Hello, I'm Adam.",
            image_desc: "A young man waving"
          },
          {
            speaker: "Lina",
            text: "Hello, I'm Lina.",
            image_desc: "A girl with a book"
          }
        ],
        audio_ref: "1.1"
      }
    },
    {
      id: "1.2",
      type: "grammar",
      title: "am/is, my/your",
      icon: "fa-pen-fancy",
      exercises: [
        {
          step: 1,
          instruction: "Read and listen.",
          dialogue: [
            {
              speaker: "Layla",
              text: "Hello. I'm Layla. What's your name?"
            },
            {
              speaker: "Omar",
              text: "My name's Omar."
            },
            {
              speaker: "Layla",
              text: "Hello, Omar."
            }
          ],
          audio_ref: "1.2"
        },
        {
          step: 2,
          instruction: "Listen again and repeat.",
          grammar_spot: {
            title: "GRAMMAR SPOT",
            rules: [
              "I'm = I am",
              "What's = What is",
              "name's = name is"
            ]
          }
        },
        {
          step: 3,
          instruction: "Stand up and practise.",
          practice_frames: [
            "Hello, I'm [Name]. What's your name?",
            "My name's [Name]."
          ]
        }
      ]
    },
    {
      id: "1.3",
      type: "vocabulary",
      title: "What's this in English?",
      icon: "fa-language",
      content: {
        instruction: "Write the words.",
        items: [
          { id: 1, word: "a book", image_ref: "📚" },
          { id: 2, word: "a phone", image_ref: "📱" },
          { id: 3, word: "a photo", image_ref: "📷" },
          { id: 4, word: "a bike", image_ref: "🚲" },
          { id: 5, word: "a sandwich", image_ref: "🥪" },
          { id: 6, word: "a house", image_ref: "🏠" },
          { id: 7, word: "a laptop", image_ref: "💻" },
          { id: 8, word: "a bag", image_ref: "🎒" },
          { id: 9, word: "a watch", image_ref: "⌚" },
          { id: 10, word: "a bus", image_ref: "🚌" },
          { id: 11, word: "an apple", image_ref: "🍎" },
          { id: 12, word: "an umbrella", image_ref: "☂️" }
        ],
        grammar_spot: {
          title: "GRAMMAR SPOT",
          rules: [
            "It's = It is",
            "a book (consonant)",
            "an apple (vowel: a, e, i, o, u)"
          ]
        }
      }
    },
    {
      id: "1.4",
      type: "listening",
      title: "How are you?",
      icon: "fa-headphones",
      content: {
        instruction: "Read and listen.",
        dialogues: [
          {
            id: 1,
            lines: [
              { speaker: "Zaid", text: "Hi, Kareem. How are you?" },
              { speaker: "Kareem", text: "Fine, thanks, Zaid. And you?" },
              { speaker: "Zaid", text: "I'm OK, thanks." }
            ]
          },
          {
            id: 2,
            lines: [
              { speaker: "Mona", text: "Hello, Reem. How are you?" },
              { speaker: "Reem", text: "Very well, thank you. How are you?" },
              { speaker: "Mona", text: "Fine." }
]
          }
        ],
        audio_ref: "1.5"
      }
    },
    {
      id: "1.5",
      type: "speaking",
      title: "Introductions - This is ...",
      icon: "fa-microphone",
      exercises: [
        {
          step: 1,
          instruction: "Read and listen.",
          dialogue: [
            { speaker: "Layla", text: "Omar, this is Sami." },
            { speaker: "Layla", text: "Sami, this is Omar." },
            { speaker: "Omar", text: "Hello, Sami." },
            { speaker: "Sami", text: "Hello, Omar." }
          ],
          audio_ref: "1.3"
        },
        {
          step: 2,
          instruction: "Practise in groups of three.",
          practice_frames: [
            "[Name 1], this is [Name 2].",
            "Hello, [Name 2].",
            "Hello, [Name 1]."
          ]
        },
        {
          step: 3,
          instruction: "Read and listen.",
          dialogue: [
            { speaker: "Ali", text: "Hello. My name's Ali Mansour." },
            { speaker: "Nora", text: "Hello. I'm Nora Salem. Nice to meet you." },
            { speaker: "Ali", text: "Nice to meet you, too." }
          ],
          audio_ref: "1.4"
        },
        {
          step: 4,
          instruction: "Practise in pairs. Say your first name and your surname.",
          practice_frames: [
            "A: Hello. My name's [First Name] [Surname].",
            "B: Hello. I'm [First Name] [Surname]. Nice to meet you.",
            "A: Nice to meet you, too."
          ]
        },
        {
          step: 5,
          instruction: "Choose a name. Stand up and say hello.",
          examples: [
            "Hello. My name's Albert Einstein.",
            "Hello. I'm Marie Curie.",
            "Nice to meet you.",
            "Nice to meet you, too."
          ]
        }
      ]
    },
    {
      id: "1.6",
      type: "reading",
      title: "A holiday in New York",
      icon: "fa-book-open",
      content: {
        text: "This is a photo of Claude and Holly Duval from Montreal in Canada. They are on holiday in New York City. Holly is from Canada and Claude is from France. They are married. Holly is an architect. Her office is in the centre of Montreal. Claude is a doctor. His hospital is in the centre of Montreal, too.",
        vocabulary: [
          { word: "architect", meaning: "مهندس معماري" },
          { word: "doctor", meaning: "طبيب" },
          { word: "married", meaning: "متزوج" },
          { word: "on holiday", meaning: "في عطلة" }
        ],
        comprehension_questions: [
          {
            question: "Where are Claude and Holly from?",
            options: [
              "France",
              "Canada",
              "New York",
              "Montreal"
            ],
            answer: 1
          },
          {
            question: "What is Holly's job?",
            options: [
              "Doctor",
              "Architect",
              "Teacher",
              "Engineer"
            ],
            answer: 1
          },
          {
            question: "Where is Claude's hospital?",
            options: [
              "New York",
              "France",
              "Montreal",
              "Canada"
            ],
            answer: 2
          }
        ],
        audio_ref: "1.10"
      }
    },
    {
      id: "1.7",
      type: "writing",
      title: "Complete the conversations",
      icon: "fa-pen",
      exercises: [
        {
          instruction: "Complete the conversations with the correct words.",
          dialogues_to_complete: [
            {
              id: 1,
              lines: [
                "A: Hello. My name's Huda. ___ your name?",
                "B: ___ Ben."
              ],
              answers: ["What's", "I'm"]
},
            {
              id: 2,
              lines: [
                "A: Ahmed, ___ is Khalid.",
                "B: Hello, Khalid.",
                "C: Hello, Ahmed. ___ to meet you."
              ],
              answers: ["this", "Nice"]
            },
            {
              id: 3,
              lines: [
                "A: Hi, Salma. How ___ you?",
                "B: Fine, thanks, Maya. And ___?",
                "A: ___ well, thanks."
              ],
              answers: ["are", "you", "I'm"]
            }
          ]
        },
        {
          instruction: "Put the words in the correct order.",
          tasks: [
            { scrambled: "are you How today", answer: "How are you today?" },
            { scrambled: "please coffee A", answer: "A coffee, please." },
            { scrambled: "nice Have day a", answer: "Have a nice day." },
            { scrambled: "you later See", answer: "See you later." },
            { scrambled: "well Sleep", answer: "Sleep well." }
          ]
        }
      ]
    },
    {
      id: "1.8",
      type: "everyday_english",
      title: "Good morning!",
      icon: "fa-sun",
      exercises: [
        {
          step: 1,
          instruction: "Complete the conversations.",
          word_bank: ["Goodbye!", "Goodnight!", "Good morning!", "Good afternoon!"],
          dialogues: [
            {
              id: 1,
              lines: [
                "A: Good morning!",
                "B: Good morning! What a lovely day!"
              ]
            },
            {
              id: 2,
              lines: [
                "A: ___",
                "B: Hello. A cup of coffee, please."
              ]
            },
            {
              id: 3,
              lines: [
                "A: ___ . Have a nice day!",
                "B: Bye! See you later, Mum!"
              ]
            },
            {
              id: 4,
              lines: [
                "A: ___ !",
                "B: Sleep well. Night night, Dad."
              ]
            }
          ],
          audio_ref: "1.6"
        }
      ]
    },
    {
      id: "1.9",
      type: "quiz",
      title: "Unit 1 Quiz",
      icon: "fa-question-circle",
      content: {
        instruction: "Test your knowledge from Unit 1",
        questions: [
          {
            id: 1,
            type: "multiple_choice",
            question: "What does 'I'm' mean?",
            options: ["I am", "I have", "I do", "I will"],
            correct_answer: 0
          },
          {
            id: 2,
            type: "multiple_choice",
            question: "Which word uses 'an'?",
            options: ["a book", "an apple", "a phone", "a bike"],
            correct_answer: 1
          },
          {
            id: 3,
            type: "multiple_choice",
            question: "How do you say 'مرحبا' in English?",
            options: ["Goodbye", "Hello", "Thank you", "Please"],
            correct_answer: 1
          },
          {
            id: 4,
            type: "multiple_choice",
            question: "What is the plural of 'book'?",
            options: ["book", "books", "booksss", "bookes"],
            correct_answer: 1
          },
          {
            id: 5,
            type: "multiple_choice",
            question: "Complete: 'My name's ___'",
            options: ["you", "me", "Omar", "he"],
            correct_answer: 2
          }
        ]
      }
    }
  ],
  unitQuiz: {
    title: "Unit 1 - Complete Review Quiz",
    description: "Test your understanding of all topics covered in Unit 1",
    total_questions: 15,
    passing_score: 70,
    questions: [
      {
        id: 1,
        type: "multiple_choice",
        question: "What is the correct greeting?",
options: ["Goodbye", "Hello", "Thank you", "Sorry"],
        correct_answer: 1
      },
      {
        id: 2,
        type: "fill_in_blank",
        question: "I ___ Sara.",
        options: ["am", "is", "are", "be"],
        correct_answer: 0
      },
      {
        id: 3,
        type: "multiple_choice",
        question: "Which is correct?",
        options: ["What's you name?", "What's your name?", "What is you name?", "What are your name?"],
        correct_answer: 1
      },
      {
        id: 4,
        type: "matching",
        question: "Match the words with their meanings",
        pairs: [
          { english: "architect", arabic: "مهندس معماري" },
          { english: "doctor", arabic: "طبيب" },
          { english: "married", arabic: "متزوج" }
        ]
      },
      {
        id: 5,
        type: "multiple_choice",
        question: "How do you count to 5 in English?",
        options: [
          "one, two, three, four, five",
          "uno, dos, tres, cuatro, cinco",
          "1, 2, 3, 4, 5",
          "a, b, c, d, e"
        ],
        correct_answer: 0
      }
    ]
  }
};