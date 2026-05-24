import { Section } from "@/types/learning";
import BlockRenderer from "./block-renderer";

export default function SectionRenderer({section}:{section:Section}) {
    return (
        <section className="w-full h-full grid grid-cols-2">
            {
                section.blocks.map(block => (
                    <article key={section.id} className={`mb-2 grid span depend on span value {span: full? one}`}>
                        {/* <SectionHeader title={section.title} type={section.type} /> */}
                        <h2 className="font-bold text-xl text-green-700">{section.title}</h2>
                        <BlockRenderer block={block} />
                    </article>
                ))
            }
        </section>
    )
}