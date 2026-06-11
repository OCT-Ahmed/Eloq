import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Breadcrumb({
    links = []
}: {
    links:{
        label: string;
        slug: string;
    }[]
}) {
    
    let currentPath:string = "";

    return (
        <div className="flex items-start justify-start gap-1 text-sm text-zinc-500 h-5">
            {
                links.map((link, index) => {
                    currentPath += `/${link.slug}`

                    if (links.length === index + 1)  {
                        return (
                            <Link key={index} href={currentPath ?? ""}>
                                {link?.label}
                            </Link>
                        )
                    }

                    return (
                       <div className="flex items-center justify-center" key={index}>
                            <Link className="" href={currentPath ?? ""}>
                                {link?.label ?? ""}
                            </Link>
                            <span className="">
                                <ChevronRight size={15} />
                            </span>
                        </div>
                    )
                })
            }
        </div>
    )
}