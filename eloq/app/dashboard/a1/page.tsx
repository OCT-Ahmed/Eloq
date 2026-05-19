import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { unit1 } from "@/data/curriculum/beginner-a1/unit-1";
import { ArrowLeft, ArrowRight } from "lucide-react";

const A1 = () => {
    return (
        <div className="flex flex-col gap-4 text-base h-full w-full overflow-hidden">
            {/* Lesson Layout Header */}
            <header className="flex-shrink-0">
                <Card className="flex flex-col items-start justify-start gap-0 p-4">
                    <h1 className="font-sans font-semibold text-2xl">
                        Unit 1 - Meeting New People
                    </h1>
                    <p className="">
                        Learn greetings and introductions.
                    </p>
                </Card>
            </header>
            {/* Main Lesson Layout Content */}
            <main className="flex-1 overflow-y-auto pr-1">
                <Card className="flex flex-col items-stretch justify-start gap-4 w-full bg-white shadow-lg px-4">
                    <h1 className="font-semibold text-xl">
                        Conversation 
                    </h1>
                    {/* Conversation Content */}
                    <div className="bg-background p-4 rounded rounded-lg" id="conversation-content">
                        <p>Adam: Hi, I'm Adam.</p>
                        <p>Sarah: Hello Adam! I'm Sarah.</p>
                    </div>
                    {/* Grammer Spot */}
                    <div className="bg-purple-500/15 p-2 rounded rounded-xl" id="conversation-content">
                        <h2 className="font-semibold text-lg">Grammer Spot</h2>
                        <p>I'm = I am</p>
                    </div>
                    {/* Choose The Correct Answer */}
                    <div className="flex flex-col items-start justify-center gap-2" id="conversation-content">
                        <h2 className="font-semibold text-lg">
                            Choose the correct sentence
                        </h2>
                        {/* Content */}
                        <div className="flex items-start justify-start gap-2">
                            <span className="px-3 py-2 hover:text-white text-center border border-purple-800 hover:bg-purple-800  w-auto h-auto rounded rounded-xl cursor-pointer transition-all duration-300">
                                I am Ahmed
                            </span>
                            <span className="px-3 py-2 hover:text-white text-center border border-purple-800 hover:bg-purple-800 w-auto h-auto rounded rounded-xl cursor-pointer transition-colors duration-200">
                                Im Ahmed
                            </span>
                        </div>
                    </div>

                    <div className="flex flex-col bg-green-200 p-8 rounded-lg">
                        {
                            <>
                                <p>{unit1.unitQuiz.title}</p>
                                <p>{unit1.unitQuiz.description}</p>
                                <p>Total questions: {unit1.unitQuiz.total_questions}</p>
                                <p>Passing scores: {unit1.unitQuiz.passing_score}</p>
                                <p>{unit1.unitQuiz.questions.map((q) => (
                                        <>
                                            <div>
                                                <p>q{q.id}: {q.type}</p>
                                                <p>{q.question}</p>
                                                {   
                                                    q.pairs &&
                                                    q.pairs?.map(p => (
                                                        <div>
                                                            {p.arabic}
                                                            {p.english}
                                                        </div>
                                                    ))
                                                }
                                                <div className="flex gap-3 p-4 rounded-lg bg-blue-600/15">{q.options?.map(op => (<span>{op}</span>))}</div>
                                            </div>
                                            <p>{q.correct_answer}</p>
                                        </>
                                    ))}
                                </p>
                            </>
                        }
                    </div>
                </Card>  
            </main>
            {/* Lesson Layout Footer */}
            {/* <footer className="flex-shrink-0">
                <div className="flex items-center justify-between ">
                    <Button className="text-white bg-eloq-black p-2 rounded rounded-xl flex gap-1">
                        <ArrowLeft />
                        Previous
                    </Button>
                    {/* RIGHT BUTTON //
                    <Button className="text-white bg-eloq-black p-2 rounded rounded-xl flex gap-1">
                        Next 
                        <ArrowRight />
                    </Button>
                </div>
            </footer> */}
        </div>
    )
}

export default A1;