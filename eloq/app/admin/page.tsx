"use client";

import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabase/client";
import { units } from "@/data/curriculum/beginner-a1/beginner-a1";
import type { UnitType, Lesson } from "@/types/learning";

const TARGET_LEVEL_SLUG = "beginner";

/*
 * هذه الأنواع لا نرفعها إلى Supabase حاليًا.
 *
 * Word list:
 * لا نريد رفعه.
 *
 * Self check:
 * لا نريد رفعه.
 *
 * Free practice:
 * لا نريد رفعه.
 *
 * الأنواع الأخرى الموجودة في البيانات الحالية والمسموح برفعها:
 * dialogue
 * fill_blanks
 * grammar_point
 * image_card
 * image_cards
 * matching
 * reading
 * reorder_words
 *
 * multiple_choice موجود أيضًا ونسمح به.
 *
 * أي نوع آخر غير موجود هنا سيتم تخطيه.
 */
const UPLOADABLE_BLOCK_TYPES = new Set([
  "dialogue",
  "fill_blanks",
  "grammar_point",
  "image_card",
  "image_cards",
  "matching",
  "reading",
  "reorder_words",
  "multiple_choice",
]);

const SKIPPED_BLOCK_TYPES = new Set([
  "word_list",
  "self_check",
  "free_practice",
]);

type Mode = "unit" | "lesson";

type Status =
  | "idle"
  | "loading"
  | "found"
  | "missing"
  | "exists"
  | "error";

type MessageType = "success" | "warning" | "error";

interface MessageState {
  type: MessageType;
  text: string;
}

interface SkippedBlock {
  index: number;
  type: string;
  reason: string;
}

interface UploadReport {
  uploaded: number;
  skipped: SkippedBlock[];
  alreadyExisting: number;
}

export default function AdminPage() {
  const [selectedUnit, setSelectedUnit] = useState(0);

  const [lessonSlug, setLessonSlug] = useState(
    units[0]?.lessons?.[0]?.slug ?? ""
  );

  const [mode, setMode] = useState<Mode>("unit");

  const [isLoading, setIsLoading] = useState(false);

  const [levelId, setLevelId] = useState<string | null>(null);
  const [levelStatus, setLevelStatus] =
    useState<Status>("idle");

  const [unitStatus, setUnitStatus] =
    useState<Status>("idle");

  const [lessonStatus, setLessonStatus] =
    useState<Status>("idle");

  const [message, setMessage] =
    useState<MessageState | null>(null);

  const [uploadReport, setUploadReport] =
    useState<UploadReport | null>(null);

  /*
   * ============================================================
   * SOURCE DATA
   * ============================================================
   */

  const sourceUnit: UnitType | undefined =
    units[selectedUnit];

  /*
   * مهم:
   *
   * بياناتك تستخدم:
   *
   * unit.lessons
   *
   * وليس:
   *
   * unit.sections
   */
  const lessonsToSelect = useMemo(() => {
    return (
      sourceUnit?.lessons?.map((lesson) => ({
        slug: lesson.slug,
        title: lesson.title,
      })) ?? []
    );
  }, [sourceUnit]);

  const sourceLesson: Lesson | undefined =
    sourceUnit?.lessons?.find(
      (lesson) => lesson.slug === lessonSlug
    );

  const lessonBlocks = sourceLesson?.blocks ?? [];

  /*
   * ============================================================
   * LOAD TARGET LEVEL
   * ============================================================
   */

  useEffect(() => {
    let cancelled = false;

    async function loadLevel() {
      setLevelStatus("loading");
      setLevelId(null);

      const { data, error } = await supabase
        .from("levels")
        .select("id")
        .eq("slug", TARGET_LEVEL_SLUG)
        .maybeSingle();

      if (cancelled) return;

      if (error) {
        console.error("Failed to fetch target level:", error);

        setLevelStatus("error");
        return;
      }

      if (!data) {
        setLevelStatus("missing");
        return;
      }

      setLevelId(data.id);
      setLevelStatus("found");
    }

    loadLevel();

    return () => {
      cancelled = true;
    };
  }, []);

  /*
   * ============================================================
   * CHECK UNIT
   * ============================================================
   */

  useEffect(() => {
    if (!levelId || !sourceUnit) {
      setUnitStatus("idle");
      return;
    }

    let cancelled = false;

    async function checkUnit() {
      setUnitStatus("loading");

      const { data, error } = await supabase
        .from("units")
        .select("id")
        .eq("level_id", levelId)
        .eq("slug", sourceUnit.slug)
        .maybeSingle();

      if (cancelled) return;

      if (error) {
        console.error("Failed to check unit:", error);

        setUnitStatus("error");
        return;
      }

      setUnitStatus(data ? "exists" : "missing");
    }

    checkUnit();

    return () => {
      cancelled = true;
    };
  }, [levelId, sourceUnit]);

  /*
   * ============================================================
   * CHECK LESSON
   * ============================================================
   */

  useEffect(() => {
    if (!levelId || !sourceUnit || !sourceLesson) {
      setLessonStatus("idle");
      return;
    }

    let cancelled = false;

    async function checkLesson() {
      setLessonStatus("loading");

      /*
       * أولاً نحصل على UUID الخاص بالوحدة
       *
       * لأن lesson يجب أن يرتبط بـ unit_id الحقيقي
       * وليس slug فقط.
       */
      const { data: unitRow, error: unitError } =
        await supabase
          .from("units")
          .select("id")
          .eq("level_id", levelId)
          .eq("slug", sourceUnit.slug)
          .maybeSingle();

      if (cancelled) return;

      if (unitError) {
        console.error(
          "Failed to find unit for lesson check:",
          unitError
        );

        setLessonStatus("error");
        return;
      }

      /*
       * الوحدة غير موجودة بعد.
       *
       * هذا طبيعي إذا كنا سنرفع الوحدة والدرس لاحقًا.
       */
      if (!unitRow) {
        setLessonStatus("missing");
        return;
      }

      const { data: lessonRow, error: lessonError } =
        await supabase
          .from("lessons")
          .select("id")
          .eq("unit_id", unitRow.id)
          .eq("slug", sourceLesson.slug)
          .maybeSingle();

      if (cancelled) return;

      if (lessonError) {
        console.error(
          "Failed to check lesson:",
          lessonError
        );

        setLessonStatus("error");
        return;
      }

      setLessonStatus(
        lessonRow ? "exists" : "missing"
      );
    }

    checkLesson();

    return () => {
      cancelled = true;
    };
  }, [levelId, sourceUnit, sourceLesson]);

  /*
   * ============================================================
   * UNIT CHANGE
   * ============================================================
   */

  function handleUnitChange(index: number) {
    setSelectedUnit(index);

    const nextUnit = units[index];

    /*
     * عند تغيير الوحدة نختار أول درس فيها.
     */
    const firstLesson =
      nextUnit?.lessons?.[0];

    setLessonSlug(firstLesson?.slug ?? "");

    setUnitStatus("idle");
    setLessonStatus("idle");

    setMessage(null);
    setUploadReport(null);
  }

  /*
   * ============================================================
   * UNIT UPLOAD
   * ============================================================
   */

  async function handleUploadUnit() {
    if (!levelId) {
      setMessage({
        type: "error",
        text: 'The target level "beginner" was not found.',
      });

      return;
    }

    if (!sourceUnit) {
      setMessage({
        type: "error",
        text: "No unit is selected.",
      });

      return;
    }

    if (unitStatus === "exists") {
      setMessage({
        type: "warning",
        text: `Unit "${sourceUnit.slug}" already exists. Nothing was uploaded.`,
      });

      return;
    }

    try {
      setIsLoading(true);
      setMessage(null);
      setUploadReport(null);

      /*
       * فحص أخير قبل الإدخال.
       *
       * لا نعتمد فقط على حالة الواجهة.
       */
      const { data: existingUnit, error: checkError } =
        await supabase
          .from("units")
          .select("id")
          .eq("level_id", levelId)
          .eq("slug", sourceUnit.slug)
          .maybeSingle();

      if (checkError) {
        throw checkError;
      }

      if (existingUnit) {
        setUnitStatus("exists");

        setMessage({
          type: "warning",
          text: `Unit "${sourceUnit.slug}" already exists. Upload cancelled.`,
        });

        return;
      }

      /*
       * order_idx:
       *
       * selectedUnit = 0
       * => (0 + 1) * 10 = 10
       *
       * selectedUnit = 1
       * => 20
       *
       * وهكذا.
       */
      const orderIdx =
        (selectedUnit + 1) * 10;

      /*
       * goals:
       *
       * جدول units الحالي يحتوي goals JSONB.
       *
       * لذلك نحفظ learningObjectives
       * والمعلومات المفيدة من overview داخله.
       *
       * لا نخترع أعمدة أخرى.
       */
      const goals = {
        learningObjectives:
          sourceUnit.overview?.learningObjectives ??
          [],

        keyVocabulary:
          sourceUnit.overview?.keyVocabulary ??
          [],

        grammarFocus:
          sourceUnit.overview?.grammarFocus ??
          [],

        skills:
          sourceUnit.overview?.skills ??
          [],

        prerequisites:
          sourceUnit.overview?.prerequisites ??
          [],

        summary:
          sourceUnit.overview?.summary ??
          null,
      };

      const { data: insertedUnit, error: insertError } =
        await supabase
          .from("units")
          .insert({
            level_id: levelId,

            slug: sourceUnit.slug,

            title_ar:
              sourceUnit.title?.ar ??
              sourceUnit.title?.en ??
              sourceUnit.slug,

            title_en:
              sourceUnit.title?.en ??
              sourceUnit.title?.ar ??
              sourceUnit.slug,

            /*
             * CEFR ليس موجودًا في UnitType نفسها،
             * لذلك لا نضع قيمة مخمنة.
             */
            cefr_level: null,

            cover_image: null,

            estimated_hours: null,

            goals,

            version: 1,

            order_idx: orderIdx,
          })
          .select("id")
          .single();

      if (insertError) {
        throw insertError;
      }

      /*
       * هنا Supabase أعطانا UUID الحقيقي.
       *
       * وهذا هو الـ ID الذي ستستخدمه الدروس.
       */
      setUnitStatus("exists");

      setMessage({
        type: "success",
        text: `Unit "${sourceUnit.slug}" uploaded successfully. Supabase ID: ${insertedUnit.id}`,
      });
    } catch (error) {
      console.error("Unit upload failed:", error);

      setMessage({
        type: "error",
        text: getErrorMessage(
          error,
          "Failed to upload unit."
        ),
      });
    } finally {
      setIsLoading(false);
    }
  }

  /*
   * ============================================================
   * LESSON UPLOAD
   * ============================================================
   */

  async function handleUploadLesson() {
    if (!levelId) {
      setMessage({
        type: "error",
        text: 'The target level "beginner" was not found.',
      });

      return;
    }

    if (!sourceUnit) {
      setMessage({
        type: "error",
        text: "No unit is selected.",
      });

      return;
    }

    if (!sourceLesson) {
      setMessage({
        type: "error",
        text: "No lesson is selected.",
      });

      return;
    }

    if (lessonStatus === "exists") {
      setMessage({
        type: "warning",
        text: `Lesson "${sourceLesson.slug}" already exists. Nothing was uploaded.`,
      });

      return;
    }

    try {
      setIsLoading(true);
      setMessage(null);
      setUploadReport(null);

      /*
       * ========================================================
       * 1. FIND UNIT
       * ========================================================
       */

      const { data: unitRow, error: unitError } =
        await supabase
          .from("units")
          .select("id")
          .eq("level_id", levelId)
          .eq("slug", sourceUnit.slug)
          .maybeSingle();

      if (unitError) {
        throw unitError;
      }

      /*
       * لا ننشئ lesson بدون unit.
       *
       * يجب أن تكون الوحدة مرفوعة أولاً.
       */
      if (!unitRow) {
        setMessage({
          type: "warning",
          text: `Unit "${sourceUnit.slug}" does not exist in Supabase yet. Upload the unit first.`,
        });

        setUnitStatus("missing");

        return;
      }

      /*
       * ========================================================
       * 2. DUPLICATE LESSON CHECK
       * ========================================================
       */

      const {
        data: existingLesson,
        error: duplicateLessonError,
      } = await supabase
        .from("lessons")
        .select("id")
        .eq("unit_id", unitRow.id)
        .eq("slug", sourceLesson.slug)
        .maybeSingle();

      if (duplicateLessonError) {
        throw duplicateLessonError;
      }

      if (existingLesson) {
        setLessonStatus("exists");

        setMessage({
          type: "warning",
          text: `Lesson "${sourceLesson.slug}" already exists inside this unit. Upload cancelled.`,
        });

        return;
      }

      /*
       * ========================================================
       * 3. CALCULATE LESSON ORDER
       * ========================================================
       */

      const lessonIndex =
        sourceUnit.lessons.findIndex(
          (lesson) =>
            lesson.slug === sourceLesson.slug
        );

      const lessonOrderIdx =
        (lessonIndex + 1) * 10;

      /*
       * ========================================================
       * 4. LESSON DATA
       * ========================================================
       */

      const titleAr =
        sourceLesson.title?.ar ??
        sourceLesson.title?.en ??
        sourceLesson.slug;

      const titleEn =
        sourceLesson.title?.en ??
        sourceLesson.title?.ar ??
        sourceLesson.slug;

      /*
       * ========================================================
       * 5. INSERT LESSON
       * ========================================================
       */

      const {
        data: insertedLesson,
        error: insertLessonError,
      } = await supabase
        .from("lessons")
        .insert({
          unit_id: unitRow.id,

          title_ar: titleAr,

          title_en: titleEn,

          slug: sourceLesson.slug,

          /*
           * lesson_type ليس موجودًا في LessonType.
           *
           * نستخدم practice كالقيمة الافتراضية
           * الموجودة أصلًا في schema.
           */
          lesson_type: "practice",

          youtube_video_id:
            getYoutubeVideoId(sourceLesson),

          estimated_minutes:
            getEstimatedMinutes(sourceLesson),

          /*
           * نرفع الدروس مباشرة كغير منشورة.
           */
          is_published: false,

          /*
           * order_idx = 10, 20, 30...
           */
          order_idx: lessonOrderIdx,

          /*
           * rules.maxErrors
           * ↳ allowed_errors
           */
          allowed_errors:
            sourceLesson.rules?.maxErrors ?? 3,
        })
        .select("id")
        .single();

      if (insertLessonError) {
        throw insertLessonError;
      }

      /*
       * ========================================================
       * 6. UPLOAD BLOCKS
       * ========================================================
       *
       * مهم جدًا:
       *
       * إذا كان block ممنوعًا:
       *   SKIP
       *
       * ولا نفشل العملية كلها.
       *
       * وإذا كان matching:
       *   UPLOAD
       *   لكن is_active = false
       *
       * أما باقي الأنواع المدعومة:
       *   is_active = block.isActive !== false
       */

      const report =
        await uploadLessonBlocks(
          insertedLesson.id,
          lessonBlocks
        );

      setLessonStatus("exists");

      setUploadReport(report);

      setMessage({
        type: "success",
        text: `Lesson "${sourceLesson.slug}" uploaded successfully. ${report.uploaded} block(s) uploaded and ${report.skipped.length} skipped.`,
      });
    } catch (error) {
      console.error(
        "Lesson upload failed:",
        error
      );

      setMessage({
        type: "error",
        text: getErrorMessage(
          error,
          "Failed to upload lesson."
        ),
      });
    } finally {
      setIsLoading(false);
    }
  }
    /*
   * ============================================================
   * BLOCK UPLOAD
   * ============================================================
   */

  async function uploadLessonBlocks(
    lessonId: string,
    blocks: readonly unknown[]
  ): Promise<UploadReport> {
    let uploaded = 0;
    let alreadyExisting = 0;

    const skipped: SkippedBlock[] = [];

    /*
     * ----------------------------------------------------------
     * GET EXISTING BLOCKS
     * ----------------------------------------------------------
     *
     * حتى لو كان الدرس جديدًا، نقوم بالفحص.
     *
     * لا نرفع نفس:
     *
     * lesson_id + order_idx + type
     *
     * أكثر من مرة.
     */

    const {
      data: existingBlocks,
      error: existingBlocksError,
    } = await supabase
      .from("blocks")
      .select("id, type, order_idx")
      .eq("lesson_id", lessonId);

    if (existingBlocksError) {
      throw existingBlocksError;
    }

    /*
     * ----------------------------------------------------------
     * UPLOAD ONE BY ONE
     * ----------------------------------------------------------
     *
     * نستخدم one-by-one هنا عمدًا.
     *
     * لأن هدف صفحة الإدارة هو أن نعرف بالضبط
     * أي block تم رفعه وأي block تم تخطيه.
     */

    for (let index = 0; index < blocks.length; index++) {
      const rawBlock = blocks[index] as {
        id?: string;
        type?: string;
        purpose?: string;
        data?: unknown;
        interactions?: Record<string, unknown>;
        extensions?: unknown;
        media?: unknown;
        span?: string;
        style?: unknown;
        isActive?: boolean;
        layout?: unknown;
        scoringRules?: unknown;
      };

      const type = String(
        rawBlock.type ?? ""
      );

      const orderIdx = (index + 1) * 10;

      /*
       * --------------------------------------------------------
       * UNSUPPORTED TYPE
       * --------------------------------------------------------
       */

      if (!UPLOADABLE_BLOCK_TYPES.has(type)) {
        skipped.push({
          index: index + 1,
          type: type || "unknown",
          reason: SKIPPED_BLOCK_TYPES.has(type)
            ? "Explicitly disabled for Supabase upload."
            : "Block type is not currently supported by the uploader.",
        });

        continue;
      }

      /*
       * --------------------------------------------------------
       * REQUIRED CONTENT
       * --------------------------------------------------------
       */

      /*
       * في schema:
       *
       * content jsonb NOT NULL
       *
       * لذلك إذا كان data غير موجود، لا يمكن إدخال block.
       */
      if (
        rawBlock.data === undefined ||
        rawBlock.data === null
      ) {
        skipped.push({
          index: index + 1,
          type,
          reason:
            "Block has no data/content.",
        });

        continue;
      }

      /*
       * --------------------------------------------------------
       * DUPLICATE BLOCK CHECK
       * --------------------------------------------------------
       */

      const alreadyExists =
        existingBlocks?.some(
          (existing) =>
            existing.order_idx === orderIdx &&
            existing.type === type
        ) ?? false;

      if (alreadyExists) {
        alreadyExisting++;

        skipped.push({
          index: index + 1,
          type,
          reason:
            "A block with the same lesson_id, order_idx and type already exists.",
        });

        continue;
      }

      /*
       * --------------------------------------------------------
       * MATCHING SPECIAL RULE
       * --------------------------------------------------------
       *
       * matching مسموح بالرفع.
       *
       * لكنه يجب أن يكون inactive دائمًا.
       *
       * حتى لو:
       *
       * isActive: true
       *
       * أو:
       *
       * isActive غير موجودة.
       */

      const isActive =
        type === "matching"
          ? false
          : rawBlock.isActive !== false;

      /*
       * --------------------------------------------------------
       * INSERT
       * --------------------------------------------------------
       */

      const row = {
        lesson_id: lessonId,

        type,

        /*
         * data في TypeScript
         * ↓
         * content في Supabase
         */
        content: rawBlock.data,

        layout:
          rawBlock.layout ??
          null,

        style:
          rawBlock.style ??
          null,

        version: 1,

        order_idx: orderIdx,

        extensions:
          rawBlock.extensions ??
          null,

        purpose:
          rawBlock.purpose ??
          null,

        scoring_rules:
          rawBlock.scoringRules ??
          null,

        is_active: isActive,

        interactions:
          rawBlock.interactions ??
          null,

        media:
          rawBlock.media ??
          null,
      };

      const {
        error: insertBlockError,
      } = await supabase
        .from("blocks")
        .insert(row);

      /*
       * --------------------------------------------------------
       * BLOCK INSERT ERROR
       * --------------------------------------------------------
       *
       * لا نتوقف عن بقية الدرس بسبب block واحد.
       *
       * نعتبره skipped مع السبب.
       */

      if (insertBlockError) {
        console.error(
          `Failed to upload block ${index + 1}:`,
          insertBlockError
        );

        skipped.push({
          index: index + 1,
          type,
          reason:
            insertBlockError.message ||
            "Supabase rejected this block.",
        });

        continue;
      }

      uploaded++;
    }

    return {
      uploaded,
      skipped,
      alreadyExisting,
    };
  }

  /*
   * ============================================================
   * HELPERS
   * ============================================================
   */

  function getYoutubeVideoId(
    lesson: Lesson
  ): string | null {
    /*
     * LessonType الذي أرسلته لا يحتوي youtubeVideoId،
     * لكن البيانات القديمة/الموسعة قد تحتويه.
     *
     * نقرأه بأمان دون أن نجبر TypeScript عليه.
     */
    const raw = lesson as Lesson & {
      youtubeVideoId?: string;
      youtube_video_id?: string;
    };

    return (
      raw.youtubeVideoId ??
      raw.youtube_video_id ??
      null
    );
  }

  function getEstimatedMinutes(
    lesson: Lesson
  ): number | null {
    const raw = lesson as Lesson & {
      estimatedMinutes?: number;
      estimated_minutes?: number;
    };

    return (
      raw.estimatedMinutes ??
      raw.estimated_minutes ??
      null
    );
  }

  function getLocalizedText(
    value:
      | string
      | {
          en?: string;
          ar?: string;
        }
      | undefined
  ): string {
    if (!value) {
      return "";
    }

    if (typeof value === "string") {
      return value;
    }

    return (
      value.en ??
      value.ar ??
      ""
    );
  }

  function getErrorMessage(
    error: unknown,
    fallback: string
  ): string {
    if (error instanceof Error) {
      return error.message;
    }

    if (
      error &&
      typeof error === "object" &&
      "message" in error
    ) {
      const possibleError = error as {
        message?: unknown;
      };

      if (
        typeof possibleError.message ===
        "string"
      ) {
        return possibleError.message;
      }
    }

    return fallback;
  }

  /*
   * ============================================================
   * UI
   * ============================================================
   */

  return (
    <div className="h-full min-h-0 overflow-y-auto pb-40">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-5 p-5 md:p-6 lg:p-8">
        {/* Header */}

        <header>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h1 className="text-2xl font-bold">
                Curriculum Uploader
              </h1>

              <p className="mt-1 text-sm text-muted-foreground">
                Development tool — Beginner curriculum
              </p>
            </div>

            <span className="rounded-full bg-yellow-500/10 px-3 py-1 text-xs font-medium text-yellow-700">
              DEV ONLY
            </span>
          </div>
        </header>

        {/* Target Level */}

        <section className="rounded-xl border p-5">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="font-semibold">
                Target Level
              </p>

              <p className="mt-1 text-sm text-muted-foreground">
                slug:{" "}
                <code className="rounded bg-muted px-1">
                  {TARGET_LEVEL_SLUG}
                </code>
              </p>
            </div>

            <StatusBadge
              variant={
                levelStatus === "found"
                  ? "success"
                  : levelStatus === "missing" ||
                      levelStatus === "error"
                    ? "error"
                    : "default"
              }
              text={
                levelStatus === "loading"
                  ? "Checking..."
                  : levelStatus === "found"
                    ? "Found"
                    : levelStatus === "missing"
                      ? "Not found"
                      : levelStatus === "error"
                        ? "Error"
                        : "Waiting"
              }
            />
          </div>

          {levelId && (
            <div className="mt-4 rounded-lg bg-muted p-3">
              <p className="text-xs text-muted-foreground">
                Supabase Level ID
              </p>

              <code className="mt-1 block break-all text-xs">
                {levelId}
              </code>
            </div>
          )}

          {levelStatus === "missing" && (
            <StatusBox
              variant="error"
              title="Level not found"
              text={`No level with slug "${TARGET_LEVEL_SLUG}" exists in Supabase.`}
            />
          )}
        </section>

        {/* Mode */}

        <section className="rounded-xl border p-5">
          <div className="grid grid-cols-2 gap-2 rounded-xl bg-muted p-1">
            <button
              type="button"
              onClick={() => {
                setMode("unit");
                setMessage(null);
                setUploadReport(null);
              }}
              className={`rounded-lg px-4 py-3 text-sm font-medium transition ${
                mode === "unit"
                  ? "bg-background shadow"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Upload Unit
            </button>

            <button
              type="button"
              onClick={() => {
                setMode("lesson");
                setMessage(null);
                setUploadReport(null);
              }}
              className={`rounded-lg px-4 py-3 text-sm font-medium transition ${
                mode === "lesson"
                  ? "bg-background shadow"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Upload Lesson
            </button>
          </div>
        </section>

        {/* Unit Selection */}

        <section className="rounded-xl border p-5">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h2 className="text-lg font-semibold">
                Source Unit
              </h2>

              <p className="mt-1 text-sm text-muted-foreground">
                Select the local unit that will be uploaded to
                the target level.
              </p>
            </div>

            {sourceUnit && (
              <div className="rounded-lg bg-muted px-3 py-2 text-right">
                <p className="text-xs text-muted-foreground">
                  order_idx
                </p>

                <p className="font-mono text-sm font-semibold">
                  {(selectedUnit + 1) * 10}
                </p>
              </div>
            )}
          </div>

          <div className="mt-5">
            <label className="mb-2 block text-sm font-medium">
              Unit
            </label>

            <select
              className="w-full rounded-lg border bg-background p-3"
              value={selectedUnit}
              onChange={(event) =>
                handleUnitChange(
                  Number(event.target.value)
                )
              }
            >
              {units.map((unit, index) => (
                <option
                  key={unit.id}
                  value={index}
                >
                  {getLocalizedText(unit.title)}{" "}
                  — {unit.slug}
                </option>
              ))}
            </select>
          </div>

          {sourceUnit && (
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              <InfoCard
                label="Slug"
                value={sourceUnit.slug}
              />

              <InfoCard
                label="Lessons"
                value={String(
                  sourceUnit.lessons.length
                )}
              />

              <InfoCard
                label="Order"
                value={String(
                  (selectedUnit + 1) * 10
                )}
              />
            </div>
          )}

          <div className="mt-4">
            {unitStatus === "loading" && (
              <StatusBox
                variant="default"
                title="Checking..."
                text="Checking whether this unit already exists in Supabase."
              />
            )}

            {unitStatus === "exists" && (
              <StatusBox
                variant="warning"
                title="Unit already exists"
                text={`"${sourceUnit?.slug}" is already stored under beginner. It will not be uploaded again.`}
              />
            )}

            {unitStatus === "missing" && (
              <StatusBox
                variant="success"
                title="Ready to upload"
                text="No duplicate unit was found."
              />
            )}

            {unitStatus === "error" && (
              <StatusBox
                variant="error"
                title="Duplicate check failed"
                text="The uploader could not verify whether this unit already exists."
              />
            )}
          </div>

          {mode === "unit" && (
            <Button
              type="button"
              onClick={handleUploadUnit}
              disabled={
                isLoading ||
                !levelId ||
                unitStatus !== "missing"
              }
              className="mt-5 w-full bg-eloq-purple"
            >
              {isLoading
                ? "Uploading Unit..."
                : "Upload Selected Unit"}
            </Button>
          )}
        </section>

        {/* Lesson Selection */}

        <section className="rounded-xl border p-5">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h2 className="text-lg font-semibold">
                Lesson + Blocks
              </h2>

              <p className="mt-1 text-sm text-muted-foreground">
                Lessons come directly from{" "}
                <code>unit.lessons</code>. The selected lesson
                will be linked to the selected unit.
              </p>
            </div>

            {sourceLesson && (
              <div className="rounded-lg bg-muted px-3 py-2 text-right">
                <p className="text-xs text-muted-foreground">
                  order_idx
                </p>

                <p className="font-mono text-sm font-semibold">
                  {(sourceUnit?.lessons.findIndex(
                    (lesson) =>
                      lesson.slug ===
                      sourceLesson.slug
                  ) ?? 0) *
                    10 +
                    10}
                </p>
              </div>
            )}
          </div>

          <div className="mt-5">
            <label className="mb-2 block text-sm font-medium">
              Lesson
            </label>

            <select
              className="w-full rounded-lg border bg-background p-3"
              value={lessonSlug}
              onChange={(event) => {
                setLessonSlug(
                  event.target.value
                );

                setLessonStatus("idle");
                setMessage(null);
                setUploadReport(null);
              }}
              disabled={
                !sourceUnit ||
                lessonsToSelect.length === 0
              }
            >
              {lessonsToSelect.length === 0 ? (
                <option value="">
                  No lessons available
                </option>
              ) : (
                lessonsToSelect.map((lesson) => (
                  <option
                    key={lesson.slug}
                    value={lesson.slug}
                  >
                    {getLocalizedText(
                      lesson.title
                    )}{" "}
                    — {lesson.slug}
                  </option>
                ))
              )}
            </select>
          </div>

          {sourceLesson && (
            <>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                <InfoCard
                  label="Lesson"
                  value={sourceLesson.slug}
                />

                <InfoCard
                  label="Source Blocks"
                  value={String(
                    lessonBlocks.length
                  )}
                />

                <InfoCard
                  label="Order"
                  value={String(
                    (sourceUnit?.lessons.findIndex(
                      (lesson) =>
                        lesson.slug ===
                        sourceLesson.slug
                    ) ?? 0) *
                      10 +
                      10
                  )}
                />
              </div>

              <div className="mt-4">
                {lessonStatus === "loading" && (
                  <StatusBox
                    variant="default"
                    title="Checking..."
                    text="Checking whether this lesson already exists inside the selected unit."
                  />
                )}

                {lessonStatus === "exists" && (
                  <StatusBox
                    variant="warning"
                    title="Lesson already exists"
                    text={`"${sourceLesson.slug}" already exists inside "${sourceUnit?.slug}". It will not be uploaded again.`}
                  />
                )}

                {lessonStatus === "missing" && (
                  <StatusBox
                    variant="success"
                    title="Ready to upload"
                    text="The lesson does not exist yet."
                  />
                )}

                {lessonStatus === "error" && (
                  <StatusBox
                    variant="error"
                    title="Lesson check failed"
                    text="The uploader could not verify whether this lesson already exists."
                  />
                )}
              </div>
{/* Block Preview */}

              <div className="mt-5 overflow-hidden rounded-xl border">
                <div className="border-b bg-muted px-4 py-3">
                  <p className="font-semibold">
                    Blocks
                  </p>

                  <p className="mt-1 text-xs text-muted-foreground">
                    order_idx is always 10, 20, 30...
                  </p>
                </div>

                <div className="divide-y">
                  {lessonBlocks.map(
                    (block, index) => {
                      const type = String(
                        block.type
                      );

                      const supported =
                        UPLOADABLE_BLOCK_TYPES.has(
                          type
                        );

                      const matching =
                        type === "matching";

                      const orderIdx =
                        (index + 1) * 10;

                      return (
                        <div
                          key={`${block.id}-${index}`}
                          className="flex items-center justify-between gap-4 px-4 py-3"
                        >
                          <div className="flex min-w-0 items-center gap-3">
                            <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-muted font-mono text-xs font-semibold">
                              {orderIdx}
                            </div>

                            <div className="min-w-0">
                              <code className="text-sm">
                                {type}
                              </code>

                              <p className="truncate text-xs text-muted-foreground">
                                {block.purpose ??
                                  "No purpose"}
                              </p>
                            </div>
                          </div>

                          <span
                            className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-medium ${
                              !supported
                                ? "bg-muted text-muted-foreground"
                                : matching
                                  ? "bg-yellow-500/10 text-yellow-700"
                                  : "bg-green-500/10 text-green-700"
                            }`}
                          >
                            {!supported
                              ? "SKIP"
                              : matching
                                ? "INACTIVE"
                                : "UPLOAD"}
                          </span>
                        </div>
                      );
                    }
                  )}
                </div>
              </div>

              {/* Upload Rules */}

              <div className="mt-4 rounded-xl border bg-muted/40 p-4">
                <p className="text-sm font-semibold">
                  Upload rules
                </p>

                <ul className="mt-2 list-disc space-y-1 pl-5 text-xs text-muted-foreground">
                  <li>
                    Word List → skipped
                  </li>

                  <li>
                    Self Check → skipped
                  </li>

                  <li>
                    Free Practice → skipped
                  </li>

                  <li>
                    Matching → uploaded as inactive
                  </li>

                  <li>
                    Unsupported/new types → skipped
                  </li>

                  <li>
                    Duplicate{" "}
                    <code>
                      lesson_id + order_idx + type
                    </code>{" "}
                    → skipped
                  </li>

                  <li>
                    Block order is always 10, 20, 30...
                  </li>
                </ul>
              </div>
            </>
          )}

          {mode === "lesson" && (
            <Button
              type="button"
              onClick={handleUploadLesson}
              disabled={
                isLoading ||
                !levelId ||
                !sourceLesson ||
                lessonStatus !== "missing"
              }
              className="mt-5 w-full bg-eloq-purple"
            >
              {isLoading
                ? "Uploading Lesson..."
                : `Upload Lesson + Blocks`}
            </Button>
          )}
        </section>

        {/* Upload Report */}

        {uploadReport && (
          <section className="rounded-xl border p-5">
            <h2 className="font-semibold">
              Upload Report
            </h2>

            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              <InfoCard
                label="Uploaded"
                value={String(
                  uploadReport.uploaded
                )}
              />

              <InfoCard
                label="Skipped"
                value={String(
                  uploadReport.skipped.length
                )}
              />

              <InfoCard
                label="Already Existing"
                value={String(
                  uploadReport.alreadyExisting
                )}
              />
            </div>

            {uploadReport.skipped.length > 0 && (
              <div className="mt-4 rounded-xl bg-muted p-4">
                <p className="text-sm font-semibold">
                  Skipped Blocks
                </p>

                <div className="mt-3 divide-y">
                  {uploadReport.skipped.map(
                    (item, index) => (
                      <div
                        key={`${item.index}-${item.type}-${index}`}
                        className="flex flex-col gap-1 py-3 sm:flex-row sm:items-center sm:justify-between"
                      >
                        <div className="flex items-center gap-3">
                          <span className="rounded bg-background px-2 py-1 font-mono text-xs">
                            {item.index * 10}
                          </span>

                          <code className="text-sm">
                            {item.type}
                          </code>
                        </div>

                        <span className="text-xs text-muted-foreground">
                          {item.reason}
                        </span>
                      </div>
                    )
                  )}
                </div>
              </div>
            )}
          </section>
        )}

        {/* Message */}

        {message && (
          <StatusBox
            variant={
              message.type === "success"
                ? "success"
                : message.type === "warning"
                  ? "warning"
                  : "error"
            }
            title={
              message.type === "success"
                ? "Success"
                : message.type === "warning"
                  ? "Upload blocked"
                  : "Error"
            }
            text={message.text}
          />
        )}

        {/* Development Warning */}

        <section className="rounded-xl border border-yellow-500/30 bg-yellow-500/10 p-4">
          <p className="text-sm font-semibold">
            Development-only uploader
          </p>

          <p className="mt-1 text-sm text-muted-foreground">
            This page is intended to exist only while the
            curriculum is being uploaded and verified. Remove
            or exclude it before the production/develop build.
          </p>
        </section>
      </div>
    </div>
  );
}

/*
 * ============================================================
 * UI HELPERS
 * ============================================================
 */

function StatusBadge({
  text,
  variant,
}: {
  text: string;
  variant:
    | "default"
    | "success"
    | "error";
}) {
  const classes = {
    default:
      "bg-muted text-muted-foreground",

    success:
      "bg-green-500/10 text-green-700",

    error:
      "bg-red-500/10 text-red-700",
  };

  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-medium ${classes[variant]}`}
    >
      {text}
    </span>
  );
}

function StatusBox({
  variant,
  title,
  text,
}: {
  variant:
    | "default"
    | "success"
    | "warning"
    | "error";

  title: string;
  text: string;
}) {
  const classes = {
    default:
      "border-border bg-muted/40",

    success:
      "border-green-500/30 bg-green-500/10",

    warning:
      "border-yellow-500/30 bg-yellow-500/10",

    error:
      "border-red-500/30 bg-red-500/10",
  };

  return (
    <div
      className={`rounded-lg border p-3 ${classes[variant]}`}
    >
      <p className="text-sm font-semibold">
        {title}
      </p>

      <p className="mt-1 text-sm text-muted-foreground">
        {text}
      </p>
    </div>
  );
}

function InfoCard({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-lg bg-muted p-3">
      <p className="text-xs text-muted-foreground">
        {label}
      </p>

      <p className="mt-1 truncate text-sm font-medium">
        {value}
      </p>
    </div>
  );
}