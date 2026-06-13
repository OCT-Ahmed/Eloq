import { UnitType } from "@/types/learning";

export const unit_1:UnitType = {
  id: 1,
  slug: "unit-1",
  title: "HELLO!",
  CEFR: "A1", // for the level not the unit
  goals: ["am/is", "my/your","introdusing others"],
  sections: [
    {
      id: "sec_first_encounters",
      type: "starter",
      title: "First Encounters",
      slug: "first-encounters",
      lesson: "Greetings & Basics",
      blocks: [
        {
          id: "b_u1_s1_01",
          type: "dialouge",
          extensions: {
            instruction: {
              id: 1,
              text: "Listen and read the dialogue below. Two people meet at an international conference center."
            }
          },
          data: {
            lines: [
              { id: "l1", speakerId: "1st", speaker: "Samer", text: "Hi there! My name is Samer. What is your name?" },
              { id: "l2", speakerId: "2nd", speaker: "Elena", text: "Hello, Samer. I am Elena. Nice to meet you!" },
              { id: "l3", speakerId: "1st", speaker: "Samer", text: "Nice to meet you too, Elena. How are you today?" },
              { id: "l4", speakerId: "2nd", speaker: "Elena", text: "I am very well, thank you. And how are you?" },
              { id: "l5", speakerId: "1st", speaker: "Samer", text: "I am great, thanks! Welcome to London." },
              { id: "l6", speakerId: "2nd", speaker: "Elena", text: "Thank you, Samer!" }
            ]
          }
        },
        {
          id: "b_u1_s1_02",
          type: "fill_blanks",
          extensions: {
            instruction: {
              id: 2,
              text: "Look at the words from the dialogue. Write your own answers below:"
            }
          },
          data: {
            items: [
              { text: "My name is [blank].", answer: "" },
              { text: "I am [blank].", answer: "" }
            ]
          }
        },
        {
          id: "b_u1_s1_03",
          type: "fill_blanks",
          extensions: {
            instruction: {
              id: 3,
              text: "Complete the missing words in this short conversation:"
            }
          },
          data: {
            items: [
              { text: "A: Hi! I [blank] Sarah.", answer: "am" },
              { text: "B: Hello, Sarah. My [blank] is David.", answer: "name" },
              { text: "A: Nice to [blank] you, David.", answer: "meet" },
              { text: "B: Nice to meet [blank] too.", answer: "you" }
            ]
          }
        },
        {
          id: "b_u1_s1_04",
          type: "grammer_point",
          extensions: {
            instruction: {
              id: 4,
              text: "Read and Learn"
            },
            title: "Grammer Point"
          },
          data: {
            title: "Using 'am' and 'is'",
            instruction: "We use am and is to give personal information. Look at the patterns below:",
            rules: [ 
              "I am = I'm (Example: I am a teacher. I'm from Riyadh.)",
              "He is = He's (Example: He is a doctor. He's my friend.)",
              "She is = She's (Example: She is Elena. She's a student.)",
              "It is = It's (Example: It is a book. It's nice.)"
            ]
          }
        },
        {
          id: "b_u1_s1_05",
          type: "fill_blanks",
          extensions: {
            instruction: {
              id: 5,
              text: "Rewrite the sentences using short forms (contractions):"
            }
          },
          data: {
            items: [
              { text: "I am John. --> [blank]", answer: "I'm John." },
              { text: "She is a manager. --> [blank]", answer: "She's a manager." },
              { text: "It is a beautiful morning. --> [blank]", answer: "It's a beautiful morning." }
            ]
          }
        },
        {
          id: "b_u1_s1_06",
          type: "fill_blanks",
          extensions: {
            instruction: {
              id: 6,
              text: "Choose the correct word: am or is."
}
          },
          data: {
            items: [
              { text: "My name [blank] Ali.", answer: "is" },
              { text: "I [blank] fine, thank you.", answer: "am" },
              { text: "This [blank] my colleague, Maria.", answer: "is" },
              { text: "She [blank] from Canada.", answer: "is" }
            ]
          }
        }
      ]
    },
    {
      id: "sec_making_connections",
      type: "speaking",
      title: "Making Connections",
      slug: "making-connections",
      lesson: "Introducing Others & Personal Info",
      blocks: [
        {
          id: "b_u1_s2_01",
          type: "dialouge",
          extensions: {
            instruction: {
              id: 1,
              text: "Meet the Team: Read the dialogue. Samer introduces his colleague to Elena in the office hall."
            }
          },
          data: {
            lines: [
              { id: "l7", speakerId: "samer", speaker: "Samer", text: "Elena, this is my manager. His name is Mr. Robert." },
              { id: "l8", speakerId: "elena", speaker: "Elena", text: "Good morning, Mr. Robert. It is a pleasure to meet you." },
              { id: "l9", speakerId: "robert", speaker: "Mr. Robert", text: "Good morning, Elena. Welcome to our office. How are you?" },
              { id: "l10", speakerId: "elena", speaker: "Elena", text: "I am fine, thank you. Your office is very nice." },
              { id: "l11", speakerId: "robert", speaker: "Mr. Robert", text: "Thank you! This is your workspace right here." }
            ]
          }
        },
        {
          id: "b_u1_s2_02",
          type: "grammer_point",
          extensions: {
            instruction: {
              id: 2,
              text: "Key Structures for Introductions"
            }
          },
          data: {
            title: "Introducing Others",
            instruction: "When you introduce another person, use this simple structure:", 
            rules: [   
              "This is + [Name]", 
              "Example: This is Tom.",
              "Example: This is Dr. Khaled."
            ]
          }
        },
        {
          id: "b_u1_s2_03",
          type: "free_practice",
          extensions: {
            instruction: {
              id: 3,
              text: "Imagine you are introducing your friend 'Omar' to a new person. Write down exactly what you would say:"
            }
          },
          data: {
            text_area: "[text area]"
          }
        },
        {
          id: "b_u1_s2_04",
          type: "word_list",
          extensions: {
            instruction: {
              id: 4,
              text: "Asking Questions: Read the questions and answers to learn how people exchange personal details."
            }
          },
          data: {
            items: [
              { id: "wl1", primaryText: "What is your name?", secondaryText: "My name is Maya." },
              { id: "wl2", primaryText: "How are you?", secondaryText: "I am good, thank you." },
              { id: "wl3", primaryText: "Where is your office?", secondaryText: "This is my office over here." }
            ]
          }
        },
        {
          id: "b_u1_s2_05",
          type: "grammer_point",
          extensions: {
            instruction: {
              id: 5,
              text: "Read and notice the difference between my and your"
            }
          },
          data: {
            title: "Possessive Adjectives",
            rules: [
              "My belongs to me. (Example: This is my phone.)",
              "Your belongs to you. (Example: What is your email address?)"
            ]
          }
        },
        {
          id: "b_u1_s2_06",
          type: "matching",
          extensions: {
            instruction: {
              id: 6,
              text: "Match the Question to the Answer"
            }
          },
          data: {
            questions: [
              { id: "mq1", text: "How are you?" },
              { id: "mq2", text: "What is your name?" },
              { id: "mq3", text: "This is my friend, Adam." }
            ],
            answers: [
              { id: "ma1", text: "Nice to meet you, Adam." },
              { id: "ma2", text: "I am doing great, thanks!" },
              { id: "ma3", text: "I am Marcus." }
            ]
          }
        }
      ]
    },
    {
      id: "sec_objects_numbers",
      type: "vocabulary",
      title: "Objects & Numbers around Us",
      slug: "objects-numbers-around-us",
      lesson: "Workplace Items & Counting",
      blocks: [
        {
          id: "b_u1_s3_01",
          type: "image_cards",
          extensions: {
            instruction: {
              id: 1,
              text: "Essential Workplace Words: Learn the names of things you see around you every single day:"
            }
          },
          data: {
            layout: "grid",
            cards: [
              { id: "ic1", type: "image_card", data: { url: "/images/desk.png", text: "a desk", caption: "a working table" } },
              { id: "ic2", type: "image_card", data: { url: "/images/pen.png", text: "a pen", caption: "used for writing text" } },
              { id: "ic3", type: "image_card", data: { url: "/images/laptop.png", text: "a laptop", caption: "a portable computer" } },
              { id: "ic4", type: "image_card", data: { url: "/images/phone.png", text: "a phone", caption: "a mobile smartphone" } },
              { id: "ic5", type: "image_card", data: { url: "/images/key.png", text: "a key", caption: "used to open a locked door" } },
              { id: "ic6", type: "image_card", data: { url: "/images/bag.png", text: "a bag", caption: "used to carry things" } },
              { id: "ic7", type: "image_card", data: { url: "/images/notebook.png", text: "a notebook", caption: "used to write notes" } }
            ]
          }
        },
        {
          id: "b_u1_s3_02",
          type: "grammer_point",
          extensions: {
            instruction: {
              id: 2,
              text: "Pointing at Objects"
            }
          },
          data: {
            title: "Using 'This is a...'",
            rules: [
              "We use This is to point out an object that is near us.",
              "Example: This is a laptop.",
              "Example: This is a pen."
            ]
          }
        },
        {
          id: "b_u1_s3_03",
          type: "fill_blanks",
          extensions: {
            instruction: {
              id: 3,
              text: "Identification Practice: Write a complete sentence for each object using 'This is a...'"
            }
          },
          data: {
            items: [
              { text: "(phone) [blank]", answer: "This is a phone." },
              { text: "(bag) [blank]", answer: "This is a bag." },
              { text: "(notebook) [blank]", answer: "This is a notebook." }
            ]
          }
        },
        {
          id: "b_u1_s3_04",
          type: "word_list",
          extensions: {
            instruction: {
              id: 4,
              text: "Counting Lesson: Read the numbers and spell them out carefully:"
            }
          },
          data: {
            items: [
              { id: "n1", primaryText: "1", secondaryText: "One" },
              { id: "n2", primaryText: "2", secondaryText: "Two" },
              { id: "n3", primaryText: "3", secondaryText: "Three" },
              { id: "n4", primaryText: "4", secondaryText: "Four" },
              { id: "n5", primaryText: "5", secondaryText: "Five" },
              { id: "n6", primaryText: "6", secondaryText: "Six" },
{ id: "n7", primaryText: "7", secondaryText: "Seven" },
              { id: "n8", primaryText: "8", secondaryText: "Eight" },
              { id: "n9", primaryText: "9", secondaryText: "Nine" },
              { id: "n10", primaryText: "10", secondaryText: "Ten" }
            ]
          }
        },
        {
          id: "b_u1_s3_05",
          type: "word_list",
          extensions: {
            instruction: {
              id: 5,
              text: "Practical Application: We use numbers to share phone numbers, hotel room numbers, or counts. Read aloud:"
            }
          },
          data: {
            items: [
              { id: "pa1", primaryText: "Office number", secondaryText: "4 (Four)" },
              { id: "pa2", primaryText: "Desk number", secondaryText: "7 (Seven)" },
              { id: "pa3", primaryText: "Code", secondaryText: "1 - 5 - 9 - 2 (One, Five, Nine, Two)" }
            ]
          }
        },
        {
          id: "b_u1_s3_06",
          type: "fill_blanks",
          extensions: {
            instruction: {
              id: 6,
              text: "Number Challenge: Write the correct word for each digit below:"
            }
          },
          data: {
            items: [
              { text: "3: [blank]", answer: "three" },
              { text: "6: [blank]", answer: "six" },
              { text: "8: [blank]", answer: "eight" },
              { text: "10: [blank]", answer: "ten" }
            ]
          }
        },
        {
          id: "b_u1_s3_07",
          type: "grammer_point",
          extensions: {
            instruction: {
              id: 7,
              text: "From One to Many"
            }
          },
          data: {
            title: "Understanding Plurals",
            rules: [
              "In English, when we have more than one object, we usually add an -s to the end of the noun. Look at the change:",
              "1 object (Singular): a pen --> More than 1 (Plural): two pens",
              "Singular: a laptop --> Plural: three laptops",
              "Singular: a key --> Plural: five keys",
              "Singular: a bag --> Plural: four bags"
            ]
          }
        },
        {
          id: "b_u1_s3_08",
          type: "grammer_point",
          extensions: {
            instruction: {
              id: 8,
              text: "Grammar Note"
            }
          },
          data: {
            title: "Plural Restriction",
            rules: [
              "Notice that we do not use a or an with plural words.",
              "Correct: This is a desk. / These are four desks.",
              "Incorrect: This is a four desks."
            ]
          }
        },
        {
          id: "b_u1_s3_09",
          type: "fill_blanks",
          extensions: {
            instruction: {
              id: 9,
              text: "Plural Transformation Exercise: Change these singular items into plurals using the given numbers:"
            }
          },
          data: {
            items: [
              { text: "One phone --> Six [blank]", answer: "phones" },
              { text: "One notebook --> Two [blank]", answer: "notebooks" },
              { text: "One key --> Ten [blank]", answer: "keys" }
            ]
          }
        }
      ]
    },
    {
      id: "sec_milestone_check",
      type: "quiz",
      title: "Milestone Check",
      slug: "milestone-check",
      lesson: "Unit 1 Assessment",
      blocks: [
        {
          id: "b_u1_s4_01",
          type: "fill_blanks",
          extensions: {
            instruction: {
              id: 1,
              text: "Comprehensive Unit Test - Part A: Complete the Dialogue. Fill in the blanks with the correct phrases or words:"
            }
          },
          data: {
            items: [
              { text: "Sophia: Good morning! My [blank] is Sophia.", answer: "name" },
{ "text": "Liam: Hi Sophia. I [blank] Liam.", answer: "am" },
              { text: "Sophia: How [blank] you?", answer: "are" },
              { text: "Liam: I am [blank], thank you.", answer: "fine" },
              { text: "Liam: Sophia, [blank] is my colleague, Ethan.", answer: "this" }
            ]
          }
        },
        {
          id: "b_u1_s4_02",
          type: "fill_blanks",
          extensions: {
            instruction: {
              id: 2,
              text: "Part B: Vocabulary & Numbers. Look at the items below. Count them and write the full answer using numbers and plurals (e.g., 'four pens'):"
            }
          },
          data: {
            items: [
              { text: "[3 laptops] --> [blank]", answer: "three laptops" },
              { text: "[7 notebooks] --> [blank]", answer: "seven notebooks" },
              { text: "[5 keys] --> [blank]", answer: "five keys" }
            ]
          }
        },
        {
          id: "b_u1_s4_03",
          type: "fill_blanks",
          extensions: {
            instruction: {
              id: 3,
              text: "Part C: Grammar Identification. Choose the correct option inside the brackets:"
            }
          },
          data: {
            items: [
              { text: "[ I am / It is ] a software developer. --> [blank]", answer: "I am" },
              { text: "What is [ my / your ] name? (Asking the other person) --> [blank]", answer: "your" },
              { text: "This [ am / is ] a new smartphone. --> [blank]", answer: "is" }
            ]
          }
        },
        {
          id: "b_u1_s4_04",
          type: "fill_blanks",
          extensions: {
            instruction: {
              id: 4,
              text: "Self-Study Check: Can you confidently do the following? Fill in your answer with (Yes / No):"
            }
          },
          data: {
            items: [
              { text: "Can you introduce yourself? [blank]", answer: "Yes" },
              { text: "Can you ask someone their name? [blank]", answer: "Yes" },
              { text: "Can you count items from 1 to 10? [blank]", answer: "Yes" },
              { text: "Can you make basic objects plural? [blank]", answer: "Yes" }
            ]
          }
        }
      ]
    }
  ]
};