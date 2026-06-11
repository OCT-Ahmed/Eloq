import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
		<main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 text-white bg-background dark:bg-black sm:items-start">
			<div className="flex flex-col items-center justify-center gap-4">
			<Link href="/dashboard">
				<Button className="border border-primary w-60 hover:bg-primary cursor-pointer">
					Go to the Dashboard
					<ArrowRight />
				</Button>
			</Link>

			<Link href="/dashboard/learn/academic/beginner/units/">
				<Button className="text-white border border-primary w-60 hover:bg-primary cursor-pointer">
					Go to A1 Lessons
					<ArrowRight />
				</Button>
			</Link>
			</div>
		</main>
    </div>
  );
}
