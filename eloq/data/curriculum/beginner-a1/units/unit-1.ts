import { UnitType } from "@/types/learning";

export const unit_1:UnitType = {
    id: 1,
    slug: "unit-1",
    title: "What's up",
    sections: [
        {
            id: "1.1",
            type: "starter",
            title: "Starter",
            blocks: [
                {
                
                    id: "b1",
                    type: "image_cards",
                    instruction: {
                        id: 1,
                        text: "Read and listen to people saying there names.",
                    },
                    data: {
                        audioRef: {
                            id: "1.1",
                            url: "",
                        },
                        cards: [
                            {
                                id: "1",
                                type: "image_card",
                                data: {
                                    url: "",      
                                    alt: "",
                                    style: "",
                                    text: "", 
                                },
                                
                            },
                        ],
                        layout: "grid",
                    }
                },
            ]
        },
        {
            id: "1.2",
            type: "grammar",
            title: "Grammar",
            lesson: "am/is, my/your",
            blocks: [
                {
                    id: "b1",
                    type: "dialouge",
                    instruction: {
                            id: 1,
                            text: "Read and listen."
                        },
                    data: {
                        lines: [
                            {
                                id: crypto.randomUUID(),
                                speakerId: "1st",
                                speaker: "Nura",
                                text: "Hello. I'm Nura. What's your name?"
                            },
                            {
                                id: crypto.randomUUID(),
                                speakerId: "2nd",
                                speaker: "Salem",
                                text: "My name's Salem."
                            },
                            {
                                id: crypto.randomUUID(),
                                speakerId: "1st",
                                speaker: "Nura",
                                text: "Hello. Salem."
                            },
                        ]
                    },
                },
            ]
        }
    ],
};