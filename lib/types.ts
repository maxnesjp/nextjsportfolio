import { links } from "./data";

export type SectionName = (typeof links)[number]["name"];

export type cert_data = {
    title: string,
    description: string,
    tags: string [],
    imageUrl: string[],
}