export default function DashboardLayout({
     children,
     usertables
      }:
    { 
     children: React.ReactNode
    ,usertables:React.ReactNode }) {
    return (
        <div>
        {children}
        {usertables}
        </div>
    )
    

} 