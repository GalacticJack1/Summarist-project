import { Suspense } from "react";

export default function PlayerLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <Suspense fallback={<div>Loading player...</div>}>
            {children}
        </Suspense>
    );
}