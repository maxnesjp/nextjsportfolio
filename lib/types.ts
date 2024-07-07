import { links } from "./data";

export type SectionName = (typeof links)[number]["name"];

export type cert_data = {
    title: string,
    description: string,
    tags: string [],
    imageUrl: string[],
}

export type ActionSectionContextProviderProps = {
    children: React.ReactNode;
};

export type ActiveSectionContextType = {
    activeSection: SectionName;
    setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
    timeOfLastClick: number;
    setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

export type ContactFormEmailProps = {
    sender: string,
    message: string
}