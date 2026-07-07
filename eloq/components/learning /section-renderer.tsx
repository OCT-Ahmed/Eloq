import { Section } from "@/types/learning";
import BlockRenderer from "./block-renderer";
import SectionHeader from "./section-header";
import { Volume, Volume2 } from "lucide-react";

export default function SectionRenderer({
    section,
}:{
    section:Section;
}) { 

    return (
        <section className="w-full h-full flex flex-col items-start justify-start border border-green-700 lg:grid lg:gap-6 lg:space-x-8 mb-2 bg-blue-500 text-muted">
            <SectionHeader className="" title={section.title} type={section.type} lesson={section.lesson} />

            {
                section.blocks.map((block) => (
                    <article 
                        key={block?.id} 
                        className={`
                            mb-2 ${block?.span === "full" ? "col-span-full" : "col-span-1" } 
                        `}
                    >
                        <header className="flex items-cenetr justify-start gap-3 mb-2">
                            <p className="font-semibold text-xl text-green-700">
                                {block?.extensions?.instruction?.id}
                            </p>
                            {/* {block.instruction && <Volume2 className="" size={20} /> /* add hasAudio check   */}
                            <p>
                                {block?.extensions?.instruction?.text}
                            </p>
                        </header>
                        <div className="ml-6">
                            <BlockRenderer block={block} />
                        </div>
                    </article>
                ))
            }

        </section>
    )
}