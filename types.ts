import { LucideIcon } from "lucide-react";

export type Language = 'tr' | 'de';

export interface ServiceConfig {
    id: string;
    icon: LucideIcon;
    color: string;
}

// Data from translation file
export interface ServiceContent {
    title: string;
    shortDesc: string;
    fullDesc: string;
    list: string[];
}

export interface JobConfig {
    id: string;
    categoryColor: string;
    trend: 'up' | 'urgent';
}

export interface JobContent {
    category: string;
    title: string;
    subtitle: string;
    salaryLabel: string;
    salary: string;
    trendLabel: string;
}

export interface StepConfig {
    id: string;
    color: string;
}

export interface StatConfig {
    id: string;
    value: string;
    label: string;
}