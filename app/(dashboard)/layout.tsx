
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

      <div className="w-full md:w-[calc(100%-200px)] ml-0 md:ml-[200px]">
        <Searchbar />
        <main>{children}</main>
      </div>
    </div>
    </ReaderSettingsProvider>
  );
}