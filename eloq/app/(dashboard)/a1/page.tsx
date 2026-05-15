import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

const A1 = () => {
    return (
        <div className="py-4 px-6 flex flex-col gap-4 ">
            {/* Lesson Layout Header */}
            <header>
                <Card id="header-card" className="flex flex-col items-start justify-start gap-0 p-4 bg-foregroung">
                    <h1 className="font-sans font-semibold text-lg">
                        Unit 1 - Meeting New People
                    </h1>
                    <p className="">
                        Learn greetings and introductions.
                    </p>
                    <Link href="/dashboard">Dashboard</Link>
                </Card>
            </header>
            {/* Main Lesson Layout Content */}
            <main className="h-auto flex items-start justify-center">
                <Card id="main-card" className="flex flex-col items-start justify-center justify-center w-full bg-white shadow-2xl px-4">
                    <h1 className="font-semibold text-xl">
                        Conversation 
                    </h1>
                    {/* Conversation Content */}
                    <div className="" id="conversation-content">
                        <p>Adam: Hi, I'm Adam.</p>
                        <p>Sarah: Hello Adam! I'm Sarah.</p>
                    </div>
                    {/* Grammer Spot */}
                    <div id="grammer-spot" className="bg-purple-500/15 p-2 rounded rounded-xl" >
                        <h2 className="font-semibold text-lg">Grammer Spot</h2>
                        <p>I'm = I am</p>
                    </div>
                    {/* Choose The Correct Answer */}
                    <div id="question" className="flex flex-col items-start justify-center gap-2">
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
                <div className="w-full flex items-center justify-between">
                    <Button id="navigate-button" className="text-white bg-black p-2 rounded rounded-xl flex items-center justify-center gap-1 cursor-pointer">
                        <ArrowLeft />
                        Previous
                    </Button>
                    {/* RIGHT BUTTON */}
                    <Button id="navigate-button" className="text-white bg-black py-2 px-3 rounded rounded-xl flex items-center justify-center gap-1 cursor-pointer hover:scale-105">
                        Next 
                        <ArrowRight />
                    </Button>
                </div>
            </footer>
        </div>
    )
}

export default A1;