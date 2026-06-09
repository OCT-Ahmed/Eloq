export default function GrammerPointBlock({data}:{data: {
        title: string;
        rules: string[]
    }
} | any) {
    return (
        <div>
            {
                data.rules.map((rule:any) => (
                    <div className="flex gap-1">
                        <p> 
                            {rule.text}
                        </p>
                        <p>{rule.answer}</p>
                    </div>
                ))
            }
        </div>
    )
}