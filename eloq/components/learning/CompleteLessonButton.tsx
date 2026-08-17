"use client"
import { useState } from "react"
import { completeBlockAction, BlockData } from "@/actions/lessons"
import { Button } from "@/components/ui"

interface CompleteLessonButtonProps {
  studentId: string
  lessonId: string
  unitId: string
  levelId: string
  blocksData: BlockData[]
  onSuccess?: (newStreak: number) => void
}

export function CompleteLessonButton({
  studentId,
  lessonId,
  unitId,
  levelId,
  blocksData,
  onSuccess,
}: CompleteLessonButtonProps) {
  const [loading, setLoading] = useState(false)
  const [completed, setCompleted] = useState(false)

  async function handleComplete() {
    if (loading) return

    setLoading(true)

    const result = await completeLessonAction({
      studentId,
      lessonId,
      unitId,
      levelId,
      blocksData,
    })

    setLoading(false)

    if (result.success) {
      setCompleted(true)
      if (onSuccess && result.newStreak !== undefined) {
        onSuccess(result.newStreak)
      }
    } else {
      alert(result.error)
      console.log("Error:", result.error)
    }
  }

  return (
    <Button
      onClick={handleComplete}
      disabled={loading || blocksData.length === 0}
      className="px-6 py-3 bg-green-600 hover:bg-green-700 disabled:opacity-50 text-white font-bold rounded-xl transition shadow-md"
    >
      {loading ? "pending..." : completed ? "Completed ✓"  : "Complete Lesson"}
    </Button>
  )
}
