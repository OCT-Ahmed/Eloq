import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Link href="/a1">
          <Button className="border border-gray-500 w-60 hover:bg-gray-100  cursor-pointer">
            Go to A1 Lessons
            <ArrowRight />
          </Button>
        </Link>
          

      </main>
    </div>
  );
}
