import { FileText } from "lucide-react";
import { MatchingBlock as MatchingBlockType } from "@/types/learning";

interface MatchingBlockProps {
    data: MatchingBlockType["data"];
}

export default function MatchingBlock({
    data,
}: MatchingBlockProps) {
    return (
        <div className="w-full">
            <div className="relative rounded-2xl border border-border-subtle bg-foreground p-4 shadow-md">

                <FileText
                    size={20}
                    className="absolute top-4 right-4 text-muted cursor-pointer"
                />

                <div className="mb-6">
                    <h2 className="text-xl font-bold text-eloq-purple">
                        Match the Words
                    </h2>
                    <p className="text-sm text-muted">
                        Match each question with the correct answer.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                    {/* Questions */}
                    <div>
                        <h3 className="mb-3 font-semibold text-lg text-eloq-purple">
                            Questions
                        </h3>

                        <div className="space-y-3">
                            {data.questions.map((question, index) => (
                                <div
                                    key={index}
                                    className="
                                        flex items-center gap-3
                                        rounded-xl
                                        border border-border-subtle
                                        bg-background
                                        px-4 py-3
                                        shadow-sm
                                        transition-all
                                        duration-200
                                        hover:border-eloq-purple
                                    "
                                >
                                    <div
                                        className="
                                            flex h-9 w-9 shrink-0
                                            items-center justify-center
                                            rounded-full
                                            bg-eloq-purple/10
                                            text-eloq-purple
                                            font-bold
                                        "
                                    >
                                        {index + 1}
                                    </div>

                                    <p className="font-medium leading-normal">
                                        {question.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Answers */}
                    <div>
                        <h3 className="mb-3 font-semibold text-lg text-primary">
                            Answers
                        </h3>

                        <div className="space-y-3">
                            {data.answers.map((answer, index) => (
                                <div
                                    key={index}
                                    className="
                                        flex items-center gap-3
                                        rounded-xl
                                        border border-border-subtle
                                        bg-background
                                        px-4 py-3
                                        shadow-sm
                                        transition-all
                                        duration-200
                                        hover:border-primary
                                    "
                                >
                                    <div
                                        className="
                                            flex h-9 w-9 shrink-0
                                            items-center justify-center
                                            rounded-full
                                            bg-primary/10
                                            text-primary
                                            font-bold
                                        "
                                    >
                                        {String.fromCharCode(65 + index)}
                                    </div>

                                    <p className="font-medium leading-normal">
                                        {answer.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
