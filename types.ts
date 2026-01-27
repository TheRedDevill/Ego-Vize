import { LucideIcon } from "lucide-react";

export interface ServiceData {
    id: string;
    title: string;
    shortDesc: string;
    fullDesc: string;
    icon: LucideIcon;
    color: string; // Tailwind color class prefix (e.g. "blue", "orange")
    list: string[];
}

export interface JobData {
    id: string;
    category: string;
    categoryColor: string;
    title: string;
    subtitle: string;
    salary: string;
    trend: 'up' | 'urgent';
}

export interface Stat {
    value: string;
    label: string;
}