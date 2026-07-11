export default function SectionHeader({ type, title, lesson }: {type:string; title:string; lesson?:string}) {
    return (    
        <div className="col-span-full font-bold mb-6"> 
            <h2 className="font-extrabold text-3xl text-green-700">
                {title}
            </h2>
            <h3 className="font-semibold italic text-2xl  text-base col-span-full">{lesson}</h3>
        </div> 
    )
}