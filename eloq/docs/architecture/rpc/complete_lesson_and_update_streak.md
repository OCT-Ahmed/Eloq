Complete Lesson RPC

«Function Name: "complete_lesson_and_update_streak"
Status: Design Specification
Version: 1.0.0
Owner: Ahmed Elkhair
Domain: Learning System
Module: Lesson Completion
Last Updated: 2026-08-05»

---

Overview

This document defines the design and responsibilities of the "complete_lesson_and_update_streak" RPC. It describes the complete lesson submission workflow, including validation, scoring, progress tracking, XP rewards, streak management, and database updates. The goal is to provide a single source of truth for both implementation and future maintenance of the lesson completion process.

---

Table of Contents

- "Purpose" (#purpose)
- "Responsibilities" (#responsibilities)
- "Input Parameters" (#input-parameters)
- "Returned Data" (#returned-data)
- "Execution Flow" (#execution-flow)
- "Validation Rules" (#validation-rules)
- "Business Rules" (#business-rules)
- "Database Tables" (#database-tables)
- "Transaction Order" (#transaction-order)
- "Error Handling" (#error-handling)
- "Future Improvements" (#future-improvements)
- "Related Documents" (#related-documents)
- "Design Principles" (#design-principles)
- "Document Metadata" (#document-metadata)
- "Change Log" (#change-log)

---

Purpose

"complete_lesson_and_update_streak" is the primary Remote Procedure Call (RPC) responsible for finalizing a student's lesson attempt.

Its purpose is to ensure that all learning-related updates are executed atomically inside a single database transaction. This guarantees data consistency, prevents duplicate rewards, and makes the database the single source of truth for lesson completion.

This RPC is the only backend entry point responsible for confirming that a lesson has been submitted successfully.

---

Responsibilities

This RPC is responsible for:

- Validating the submitted lesson attempt.
- Evaluating the student's answers.
- Calculating the lesson score.
- Determining whether the lesson is passed.
- Saving the student's latest block answers.
- Recording the lesson attempt.
- Updating lesson completion status (only if passed).
- Updating the student's learning progress.
- Updating XP when applicable.
- Updating the daily streak according to the streak rules.
- Returning the final result to the client.

The frontend must never update these records directly.

---

Input Parameters

The RPC receives:

Parameter| Type| Description
"p_student_id"| UUID| Student identifier
"p_lesson_id"| UUID| Lesson identifier
"p_unit_id"| UUID| Unit identifier
"p_level_id"| UUID| Level identifier
"p_started_at"| TIMESTAMPTZ| Time when the student started the lesson
"p_blocks_data"| JSONB| Student responses for every submitted block

Example:

[
  {
    "block_id": "...",
    "saved_responses": {}
  }
]

The frontend sends only user responses.

The backend is responsible for reading the original block data from the database and performing all scoring.

---

Returned Data

The RPC returns only the information required by the frontend immediately after submission.

Current response:

Field| Description
"passed"| Whether the lesson has been passed
"score"| Final calculated score
"streak_count"| Updated streak
"highest_streak"| Highest streak achieved
"last_activity_at"| Updated activity timestamp

Additional fields may be returned in future versions.

---

Execution Flow

The RPC executes the following steps in order.

1. Receive submission.
2. Validate input.
3. Load lesson blocks.
4. Evaluate student answers.
5. Calculate:
   - Total score
   - Wrong answers
   - Passed / Failed
6. Update "student_block_answers".
7. Insert a new record into "lesson_attempts".
8. If the lesson is passed:
   - Mark lesson as completed (if not already).
   - Update learning progress.
   - Grant XP if eligible.
   - Update daily streak.
9. Return the final result.

---

Validation Rules

The RPC must validate:

- Student exists.
- Lesson exists.
- Unit exists.
- Level exists.
- Submitted blocks belong to the lesson.
- Block IDs are valid.
- Responses match supported block types.
- Score is calculated only on the server.
- The client is never trusted for scoring.

---

Business Rules

The following business rules define the expected behavior.

Lesson Attempts

Every lesson submission creates a new lesson attempt.

Both successful and failed attempts are recorded.

Lesson Completion

A lesson is considered completed only when the student satisfies the lesson passing criteria.

Repeated successful attempts must not create duplicate completion records.

XP

XP is granted only according to the XP system.

Repeated submissions must not generate duplicate XP unless explicitly allowed by future rules.

Daily Streak

The streak is updated only after a successful lesson completion.

Multiple successful lessons completed on the same day must not increase the streak more than once.

Future versions may support a Streak Freeze feature.

Student Answers

The latest student answers overwrite previous answers for the same block.

Historical answer versions are not stored.

---

Database Tables

This RPC interacts with the following tables.

Table| Purpose
"blocks"| Original lesson content
"lessons"| Lesson metadata
"students"| XP, streak and activity
"student_block_answers"| Latest answers for every block
"student_completed_lessons"| Completed lessons
"student_progress"| Current learning progress
"lesson_attempts"| History of every submission

---

Transaction Order

The entire operation must execute inside a single transaction.

Recommended order:

1. Validate request.
2. Read lesson blocks.
3. Calculate score.
4. Update latest block answers.
5. Insert lesson attempt.
6. Update completed lessons.
7. Update learning progress.
8. Update XP.
9. Update streak.
10. Commit transaction.

If any step fails, the entire transaction must be rolled back.

---

Error Handling

The RPC should reject the request if:

- Student does not exist.
- Lesson does not exist.
- Invalid block IDs are submitted.
- Responses cannot be evaluated.
- Required data is missing.
- Database constraints fail.

Meaningful error messages should be returned whenever possible.

---

Future Improvements

Possible future enhancements include:

- AI-assisted answer analysis.
- Detailed mistake analytics.
- Per-block statistics.
- Adaptive difficulty.
- Achievement system.
- XP multipliers.
- Streak Freeze support.
- Lesson replay analytics.
- Teacher dashboard integration.

These improvements should not require redesigning the database schema.

---

Related Documents

- "xp-system.md"
- "streak-system.md"
- "lesson-attempts.md"
- "student-progress.md"
- "blocks-schema.md"
- "learning-architecture.md"

---

Design Principles

This RPC follows the following architectural principles:

- Single Source of Truth.
- Atomic Transactions.
- Server-side Validation.
- Frontend Never Calculates Final Results.
- Database Consistency First.
- Future Scalability.

---

Document Metadata

Property| Value
Document Type| Technical Design Specification
Audience| Developers, Backend Engineers, Database Engineers
Domain| Learning System
Component| Lesson Completion
Database| PostgreSQL (Supabase)
Language| SQL / PLpgSQL
Related Feature| Learning

---

Change Log

Version 1.0.0

- Initial technical specification.
- Defined RPC responsibilities.
- Defined execution flow.
- Defined validation rules.
- Defined business rules.
- Defined transaction order.
- Listed affected database tables.
- Documented future extension points.
- Added document metadata and navigation.