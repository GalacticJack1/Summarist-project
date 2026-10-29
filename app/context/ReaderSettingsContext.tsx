"use client";

import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

type ReaderSettingsType = {
    fontSize: number;
    setFontSize: (size: number) => void;
};

const ReaderSettingsContext = createContext<ReaderSettingsType | null>(null);

export function ReaderSettingsProvider({
    children,
}: {
    children: ReactNode;
}) {
    const [fontSize, setFontSize] = useState(14);

    return (
        <ReaderSettingsContext.Provider value={{ fontSize, setFontSize }}>
            {children}
        </ReaderSettingsContext.Provider>
    );
}

export function useReaderSettings() {
    const context = useContext(ReaderSettingsContext);

    if (!context) {
        throw new Error("ReaderSettingsProvider is missing");
    }

    return context;
}
