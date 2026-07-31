"use client"
import { supabase } from "@/lib/supabase/client"
import { units } from "@/data/curriculum/beginner-a1/beginner-a1";
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function AdminPage() {
  const [lessonSlug, setLessonSlug] = useState("greetings-and-basics")
  const [isLoading, setIsLoading] = useState(false)
  
  const lessonBlocks = units[0].sections.find(section => section.slug === "greetings-and-basics")?.blocks;
  
  async function handleUpload(e) {
    try {
    setIsLoading(true)
    const { data: lessonId, error } = await supabase.from("lessons")
    .select("id")
    .eq("slug", lessonSlug)
    .single();
    
    const dbRows = lessonBlocks.map((b, index) => ({
      lesson_id: lessonId.id,
      type: b.type,
      audio_url: b.extensions?.url ?? null,
      extensions: b.extensions,
      content: b.data,
      order_idx: (index + 1) * 10,
      version: 1,
      style: b.style ?? null,
      layout: b.layout ?? null,
    }))
    
    if (error) { 
      setIsLoading(false)
      alert(JSON.stringify(error))
      console.error(error) 
      return 
    }
    const { data: insertError } = await supabase.from("blocks")
    .insert(dbRows)
    if (insertError) {
      alert(JSON.stringify(insertError))
    }
  } catch (err) {
    alert("something went wrong", JSON.stringify(err))
    console.error(err)
  } finally {
    alert("Uploaded Successfully")
    setIsLoading(false)
  }
  }
  return (
    <div className="border p-5 md:p-6 lg:p-8 flex flex-col gap-2 h-full">
      <label>Lesson</label>
      <select 
        className="w-20"
        value={lessonSlug}
        onChange={(e) => {
          setLessonSlug(e.target.value)
        }}
      >
        <option className="" value="greetings-and-basics">
          Greetings & Basics
        </option>
        <option className="" value="introductions-and-personal-info">
          Introductions & Personal Info
        </option>
        <option className="" value="day-and-night-greetings">
          Day & Night Greetings
        </option>
        <option className="" value="common-objects-and-numbers">
          Common Objects & Numbers
        </option>
        <option className="" value="unit-1-assessment">
          Unit 1 Assessment
        </option>
      </select>
      <Button className="py-2 px-4 bg-eloq-purple" onClick={handleUpload}>
       { isLoading ? "Uploading..." : "Upload Lesson Blocks" }
      </Button>
    </div>
  )
}