import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, ArrowRight } from "lucide-react";

const A1 = () => {
    return (
        <div className="py-4 px-6 flex flex-col gap-4 ">
            {/* Lesson Layout Header */}
            <header>
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
            <main className="h-auto flex items-start justify-center">
                <Card className="flex flex-col items-start justify-center justify-center w-full bg-white shadow-lg px-4">
                    <h1 className="font-semibold text-xl">
                        Conversation 
                    </h1>
                    {/* Conversation Content */}
                    <div className="" id="conversation-content">
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
                </Card>  
            </main>
            {/* Lesson Layout Footer */}
            <footer>
                <div>
                    <Button className="text-white bg-black p-2 rounded rounded-xl flex gap-1">
                        <ArrowLeft />
                        Previous
                    </Button>
                    {/* RIGHT BUTTON */}
                    <Button className="text-white bg-black p-2 rounded rounded-xl flex gap-1">
                        Next 
                        <ArrowRight />
                    </Button>
                </div>
            </footer>
        </div>
    )
}

export default A1;