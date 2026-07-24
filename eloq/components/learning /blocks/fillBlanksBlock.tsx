"use client"
import { FillBlanksBlock as FillBlanksBlockType } from "@/types/learning"
import { useState, useEffect } from "react"
import { storage } from "@/utils/storage" 

interface FillBlanksBlockProps {
    id: string;
    data: FillBlanksBlockType["data"]
}

/*const storage = {
      save(key:string, value:unknown) {
        localStorage.setItem(key, JSON.stringify(value))
      },
      get(key:string) {
        const value = localStorage.getItem(key);
          return value ? JSON.parse(value) : null;
      }
    }*/

export default function FillBlanksBlock({
    id,
    data
}:FillBlanksBlockProps) {
  useEffect(() => {
    const saved = storage.get(`userAnswers:${id}`);
    if (saved) {
      setUserAnswers(saved)
    }
  },[])
    const [userAnswers, setUserAnswers] = useState<string[][]>([]);
    const [status, setStatus] = useState<("unAnswered" | "correctAnswer" | "wrongAnswer")[][]>([])
    
    const checkAnswers = (user_answer, correct_answer, text_index, blank_index) => {
      const newStatus = [...status];
      if (!newStatus[text_index]) {newStatus[text_index] = [];}
      
      if (user_answer.length < 1) {
        newStatus[text_index][blank_index] = "unAnswered"
        setStatus(newStatus)
      } else if (user_answer === correct_answer) {
        newStatus[text_index][blank_index] = "correctAnswer"
        setStatus(newStatus)
      } else if (user_answer !== correct_answer) {
        newStatus[text_index][blank_index] = "wrongAnswer"
        setStatus(newStatus)
      } 
    }
    return (
        <div>
            {
                data?.items?.map((item, i) => (
                    <div key={i} className="flex gap-1 text-base">
                        <p> 
      {item?.text?.split(/\[blank_\d+\]|\[blank\]|___/g)
.map((part, index, arr) => {
                        const newAnswers = [...userAnswers];
                        const currentAnswer = newAnswers[i]?.[index];
                        const currentStatus = status[i]?.[index];
                        return (
                        <span key={index}>
                          {part}
                          {index < arr.length - 1 && (
                          <input 
                            type="text" 
                            name="blank-answer" 
                            className={`font-medium outline-none w-20 mt-[-44px] mx-1 px-1 border-b-2 ${currentStatus === "correctAnswer" ? "border-green-700" : currentStatus === "wrongAnswer" ? "border-red-700" : "border-muted" }`}
                            value={userAnswers[i]?.[index] ?? ""}
                            onChange={(e) => {
                        if (!newAnswers[i]) {
                        newAnswers[i] = []
                        }
                        newAnswers[i][index] = e.target.value.trim();
                        setUserAnswers(newAnswers);   
                          }}
                        onBlur={() => {
                          checkAnswers(userAnswers[i][index], item.answer, i, index) 
                        storage.save(`userAnswers:${id}`, userAnswers) 
                        }}
                      />
                        )}
                        </span>
                      )})}
                        </p>
                        <p className="hidden">{item.answer}</p>
                    </div>
                ))
            }
        </div>
    )
}
