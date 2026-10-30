
import Sidebar from "@/Components/Sidebar";
import Searchbar from "@/Components/Searchbar";
import { ReaderSettingsProvider } from "@/app/context/ReaderSettingsContext";
import { Suspense } from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReaderSettingsProvider>
    <div className="flex min-h-screen">
      <Suspense fallback={null}>

      <Sidebar />
      </Suspense>

      <div className="ml-[200px] w-[calc(100%-200px)] min-w-0">
        <Searchbar />
        <main>{children}</main>
      </div>
    </div>
    </ReaderSettingsProvider>
  );
}