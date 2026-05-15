
export default function DashboardLayout({
    children,
}:{
    children: React.ReactNode,
}) {
    return (
        <div>
            <div className="w-full bg-green-500">
                This will apper every where inside dashboard/anycomponentfolder/page.tsx
            </div>
          {children}  
        </div>
        
    )
}