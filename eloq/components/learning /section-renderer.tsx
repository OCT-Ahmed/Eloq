import { Section } from "@/types/learning";
import BlockRenderer from "./block-renderer";
import SectionHeader from "./section-header";
import { Volume, Volume2 } from "lucide-react";

export default function SectionRenderer({section}:{section:Section}) { 
    return (
        <section className="w-full h-full grid grid-cols-2 mb-2">
            
            <SectionHeader title={section.title} type={section.type} lesson={section.lesson} />

            {
                section.blocks.map((block) => (
                    <article key={block?.id} className={`mb-2 ${block?.span === "full" ? "col-span-full" : "col-span-1" } `}>
                        <div className="flex items-cenetr justify-start gap-3 mb-1">
                            <p className="font-semibold text-xl text-green-700">
                                {block.instruction?.id}
                            </p>
                            {/* {block.instruction && <Volume2 className="" size={20} /> /* add hasAudio check   */}
                            <p>
                                {block.instruction?.text}
                            </p>
                        </div>
                        
                        <BlockRenderer block={block} />
                    </article>
                ))
            }

        </section>
    )
}