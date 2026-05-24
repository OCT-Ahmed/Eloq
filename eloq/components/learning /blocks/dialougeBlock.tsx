export default function DialougeBlock({data}:{data:{
        lines: {
            speaker: string;
            text: string;
        }[]
    }
}) {
    return (
        <div>
            {
                data.lines.map(line => (
                    <>
                        <p>
                            <span className="text-primary make diffrent colors for every speaker">
                                {line.speaker}
                            </span> 
                            {line.text}
                        </p>
                    </>
                ))
            }
        </div>
    )
}