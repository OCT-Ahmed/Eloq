"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabase/client";
import { units } from "@/data/curriculum/beginner-a1/beginner-a1";

export default function AdminPage() {
  const [selectedUnit, setSelectedUnit] = useState(0);
  const [lessonSlug, setLessonSlug] = useState(
    units[0]?.sections?.[0]?.slug ?? ""
  );
  const [isLoading, setIsLoading] = useState(false);

  const lessonsToSelect =
    units[selectedUnit]?.sections?.map((section) => ({
      slug: section.slug,
      title: section.title,
    })) ?? [];

  const lesson =
    units[selectedUnit]?.sections?.find(
      (section) => section.slug === lessonSlug
    );

  const lessonBlocks = lesson?.blocks ?? [];

  async function handleUpload() {
    if (!lessonSlug) {
      alert("Please choose a lesson first.");
      return;
    }

    if (lessonBlocks.length === 0) {
      alert("No blocks found for this lesson.");
      return;
    }

    try {
      setIsLoading(true);

      const { data: lessonRow, error: lessonError } = await supabase
        .from("lessons")
        .select("id")
        .eq("slug", lessonSlug)
        .single();

      if (lessonError || !lessonRow) {
        console.error(lessonError);
        alert(JSON.stringify(lessonError));
        return;
      }

      // حذف البلوكات القديمة لنفس الدرس
      const { error: deleteError } = await supabase
        .from("blocks")
        .delete()
        .eq("lesson_id", lessonRow.id);

      if (deleteError) {
        console.error(deleteError);
        alert(JSON.stringify(deleteError));
        return;
      }

      const dbRows = lessonBlocks.map((block, index) => ({
        lesson_id: lessonRow.id,

        // نوع البلوك
        type: block.type,

        // data من TypeScript → content في Supabase
        content: block.data,

        // metadata
        purpose: block.purpose ?? null,
        extensions: block.extensions ?? null,
        style: block.style ?? null,
        layout: block.layout ?? null,

        // حالة البلوك
        // إذا لم توجد isActive نعتبره فعالًا
        is_active: block.isActive !== false,

        // التفاعلات — تحفظ إن وجدت
        interactions: block.interactions ?? null,

        // الصور / الوسائط — تحفظ إن وجدت
        media: block.media ?? null,

        // الترتيب
        order_idx: (index + 1) * 10,

        // إصدار البلوك
        version: 1,
      }));

      const { error: insertError } = await supabase
        .from("blocks")
        .insert(dbRows);

      if (insertError) {
        console.error(insertError);
        alert(JSON.stringify(insertError));
        return;
      }

      alert("Lesson blocks uploaded successfully.");
    } catch (error) {
      console.error(error);
      alert(`Something went wrong\n${JSON.stringify(error)}`);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="border p-5 md:p-6 lg:p-8 flex flex-col gap-4 h-full">
      <label>Choose Unit</label>

      <select
        className="border rounded p-2"
        value={selectedUnit}
        onChange={(e) => {
          const unitIndex = Number(e.target.value);

          setSelectedUnit(unitIndex);

          setLessonSlug(
            units[unitIndex]?.sections?.[0]?.slug ?? ""
          );
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
          <option key={lesson.slug} value={lesson.slug}>
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
  );
}