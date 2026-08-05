"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { supabase } from "@/lib/supabase/client"
import { units } from "@/data/curriculum/beginner-a1/beginner-a1"

export default function AdminPage() {
  const [selectedUnit, setSelectedUnit] = useState(0)
  const [lessonSlug, setLessonSlug] = useState(
    units[0]?.sections?.[0]?.slug ?? ""
  )
  const [isLoading, setIsLoading] = useState(false)

  const lessonsToSelect =
    units[selectedUnit]?.sections?.map((section) => ({
      slug: section.slug,
      title: section.title,
    })) ?? []

  const lessonBlocks =
    units[selectedUnit]?.sections?.find(
      (section) => section.slug === lessonSlug
    )?.blocks ?? []

  async function handleUpload() {
    if (!lessonSlug) {
      alert("Please choose a lesson first.")
      return
    }

    if (lessonBlocks.length === 0) {
      alert("No blocks found for this lesson.")
      return
    }

    try {
      setIsLoading(true)

      const { data: lesson, error } = await supabase
        .from("lessons")
        .select("id")
        .eq("slug", lessonSlug)
        .single()

      if (error || !lesson) {
        alert(JSON.stringify(error))
        console.error(error)
        return
      }

      // حذف البلوكات القديمة لنفس الدرس
      await supabase
        .from("blocks")
        .delete()
        .eq("lesson_id", lesson.id)

      const dbRows = lessonBlocks.map((b, index) => ({
        lesson_id: lesson.id,
        type: b.type,
        audio_url: b.extensions?.audio?.url ?? null,
        extensions: b.extensions ?? null,
        content: b.data,
        order_idx: (index + 1) * 10,
        version: 1,
        style: b.style ?? null,
        layout: b.layout ?? null,
      }))

      const { error: insertError } = await supabase
        .from("blocks")
        .insert(dbRows)

      if (insertError) {
        console.error(insertError)
        alert(JSON.stringify(insertError))
        return
      }

      alert("Uploaded Successfully")
    } catch (err) {
      console.error(err)
      alert(`Something went wrong\n${JSON.stringify(err)}`)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="border p-5 md:p-6 lg:p-8 flex flex-col gap-4 h-full">
      <label>Choose Unit</label>

      <select
        className="border rounded p-2"
        value={selectedUnit}
        onChange={(e) => {
          const unitIndex = Number(e.target.value)

          setSelectedUnit(unitIndex)

          setLessonSlug(
            units[unitIndex]?.sections?.[0]?.slug ?? ""
          )
        }}
      >
        {units.map((unit, index) => (
          <option key={unit.id} value={index}>
            {unit.title}
          </option>
        ))}
      </select>

      <label>Choose Lesson</label>

      <select
        className="border rounded p-2"
        value={lessonSlug}
        onChange={(e) => setLessonSlug(e.target.value)}
      >
        {lessonsToSelect.map((lesson) => (
          <option
            key={lesson.slug}
            value={lesson.slug}
          >
            {lesson.title}
          </option>
        ))}
      </select>

      <Button
        onClick={handleUpload}
        disabled={isLoading}
        className="bg-eloq-purple"
      >
        {isLoading ? "Uploading..." : "Upload Lesson Blocks"}
      </Button>
    </div>
  )
}