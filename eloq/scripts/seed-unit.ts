import { createClient } from "@supabase/supabase-js";
import { unit_1 } from "@/data/curriculum/beginner-a1/units/unit-1";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function uploadUnit() {
  try {
    // 0️⃣-أ: إنشاء أو جلب المسار (Track)
    const { data: track, error: trackError } = await supabase
      .from("tracks")
      .upsert(
        {
          slug: "general",
          name_ar: "المسار العام",
          name_en: "General Track",
          description: "المسار الأساسي لتعلم اللغة الإنجليزية",
          order_idx: 1,
        },
        { onConflict: "slug" }
      )
      .select("id")
      .single();

    if (trackError || !track) {
      console.error("❌ خطأ أثناء إنشاء/جلب المسار:", trackError?.message);
      return;
    }

    console.log("✅ 1. تم تجهيز المسار (Track ID):", track.id);

    // 0️⃣-ب: إنشاء أو جلب المستوى (Level) وربطه بالمسار
    const { data: level, error: levelError } = await supabase
      .from("levels")
      .upsert(
        {
          track_id: track.id,
          slug: "a1",
          title_ar: "المستوى المبتدئ (A1)",
          title_en: "Beginner (A1)",
          order_idx: 1,
        },
        { onConflict: "slug" }
      )
      .select("id")
      .single();

    if (levelError || !level) {
      console.error("❌ خطأ أثناء إنشاء/جلب المستوى:", levelError?.message);
      return;
    }

    console.log("✅ 2. تم تجهيز المستوى (Level ID):", level.id);

    // 1️⃣ إدخال الوحدة (Unit)
    const { data: unit, error: unitError } = await supabase
      .from("units")
      .insert({
        level_id: level.id,
        slug: unit_1.slug,
        title_ar: unit_1.title_ar || unit_1.title,
        title_en: unit_1.title_en || unit_1.title,
        goals: unit_1.goals ?? [],
        order_idx: unit_1.order_idx ?? 1,
      })
      .select("id")
      .single();

    if (unitError) {
      console.error("❌ خطأ أثناء رفع الوحدة:", unitError.message);
      return;
    }

    console.log("✅ 3. تم رفع الوحدة بنجاح (Unit ID):", unit.id);

    // 2️⃣ إعداد ورفع الدروس (Lessons)
    const lessonsToInsert = unit_1.sections.map((sec, index) => ({
      unit_id: unit.id,
      slug: sec.slug,
      title_ar: sec.title_ar || sec.title,
      title_en: sec.title_en || sec.title,
      lesson_type: sec.type ?? "practice",
      order_idx: index + 1,
    }));

    const { data: insertedLessons, error: lessonsError } = await supabase
      .from("lessons")
      .insert(lessonsToInsert)
      .select("id, slug");

    if (lessonsError || !insertedLessons) {
      console.error("❌ خطأ أثناء رفع الدروس:", lessonsError?.message);
      return;
    }

    console.log(`✅ 4. تم رفع ${insertedLessons.length} دروس بنجاح!`);

    const lessonMap = new Map(insertedLessons.map((l) => [l.slug, l.id]));

    // 3️⃣ تجميع ورفع كافة البلوكات (Blocks)
    const blocksToInsert = unit_1.sections.flatMap((sec) => {
      const lessonId = lessonMap.get(sec.slug);
      if (!lessonId) return [];

      return sec.blocks.map((b, blockIdx) => ({
        lesson_id: lessonId,
        type: b.type,
        content: b.data ?? b.content,
        style: b.style ? { custom: b.style } : null,
        order_idx: blockIdx + 1,
      }));
    });

    const { error: blocksError } = await supabase
      .from("blocks")
      .insert(blocksToInsert);

    if (blocksError) {
      console.error("❌ خطأ أثناء رفع البلوكات:", blocksError.message);
      return;
    }

    console.log(`🎉 5. تم اكتكال الرفع بنجاح ورفع ${blocksToInsert.length} بلوك!`);
  } catch (err) {
    console.error("❌ حدث خطأ غير متوقع:", err);
  }
}

uploadUnit();
