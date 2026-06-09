import { ImageCardBlock as ImageCardBlockType } from "@/types/learning";
import { FileLineChartIcon } from "lucide-react";
import Image from "next/image";

interface ImageCardBlockProps {
    data: ImageCardBlockType["data"];
}
export default function ImageCardBlock({data}: ImageCardBlockProps) {
    return (
        <div className="">
            <div className={`${data?.style}`}>
                <Image src={data?.url} alt={data?.alt ?? ""} fill />
            </div>
            <p>{data?.text}</p>
        </div>
    )
}