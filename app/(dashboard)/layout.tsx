
import Sidebar from "@/Components/Sidebar";
import Searchbar from "@/Components/Searchbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <div className="ml-[200px] w-[calc(100%-200px)] min-w-0">
        <Searchbar />
        <main>{children}</main>
      </div>
    </div>
  );
}