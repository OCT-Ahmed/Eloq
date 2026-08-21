"use client";

import { X } from "lucide-react";

interface LessonVideoModalProps {
  videoUrl?: string;
  onClose: () => void;
}

export default function LessonVideoModal({ videoUrl, onClose }: LessonVideoModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs">
      <div className="w-full max-w-2xl overflow-hidden rounded-2xl bg-background border border-border shadow-2xl">
        <div className="flex items-center justify-between px-4 py-3 border-b border-border">
          <p className="text-sm font-bold">فيديو شرح القاعدة / الدرس</p>
          <button type="button" onClick={onClose} className="p-1 text-muted-foreground hover:bg-muted rounded-lg">
            <X size={18} />
          </button>
        </div>
        <div className="aspect-video w-full bg-black">
          {videoUrl ? (
            <iframe
              src={videoUrl}
              title="فيديو الشرح"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture"
              allowFullScreen
              className="h-full w-full border-0"
            />
          ) : (
            <div className="flex h-full items-center justify-center text-muted-foreground text-sm">
              لا يتوفر فيديو لهذا الدرس حالياً.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
