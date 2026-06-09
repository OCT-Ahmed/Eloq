export default function FillBlanksBlock({data}:{data:{
        questions: {
            text: string;
            answer: string;
        }[]
    }
}) {
    return (
        <div>
            {
                data.questions.map(question => (
                    <div className="flex gap-1">
                        <p> 
                            {question.text}
                        </p>
                        <p>{question.answer}</p>
                    </div>
                ))
            }
        </div>
    )
}