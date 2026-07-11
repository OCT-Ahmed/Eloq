import { Section } from "@/types/learning";
import BlockRenderer from "./block-renderer";
import SectionHeader from "./section-header";
import { Volume, Volume2 } from "lucide-react";

export default function SectionRenderer({
    section,
}: {
    section: Section;
}) { 
    return (
        <section className="w-full flex flex-col gap-6 text-base pt-4">
            {/* هيدر القسم الرئيسي */}
            <SectionHeader title={section.title} type={section.type} lesson={section.lesson} />

            <div className="flex flex-col gap-6 w-full">
                {section.blocks.map((block) => (
                    <article 
                        key={block?.id} 
                        className={`w-full flex flex-col gap-3 pb-4 border-b border-neutral-200/10 last:border-0`}
                    >
                        {/* رأس البلوك (التعليمات رقم التمرين) */}
                        <header className="flex items-start justify-start gap-3 w-full mb-4">
                            <span className="font-bold text-lg sm:text-xl text-green-600 dark:text-green-500 shrink-0 select-none">
                                {block?.extensions?.instruction?.id}
                            </span>
                            <div className="flex items-center gap-2 text-neutral-800 dark:text-neutral-200 font-bold text-base sm:text-lg leading-normal">
                                <p>{block?.extensions?.instruction?.text}</p>
                                {/* <Volume2 className="text-purple-500 cursor-pointer hover:scale-105 transition-transform" size={18} /> */}
                            </div>
                        </header>
                        
                        {/* منطقة رندرة البلوك: مسافة بادئة مرنة مع خط دليل جانبي أنيق مخصص للموبايل */}
                        <div className="pl-3 sm:pl-6 border-l-2 border-purple-500/20 ml-2 sm:ml-3 w-full text-neutral-700 dark:text-neutral-300">
                            <BlockRenderer block={block} />
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
