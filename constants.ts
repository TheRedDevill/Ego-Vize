import { 
    Briefcase, 
    GraduationCap, 
    Users, 
    Plane, 
    FileCheck, 
    Zap
} from "lucide-react";
import { ServiceConfig, JobConfig, StepConfig, StatConfig } from "./types";

export const SERVICES_CONFIG: ServiceConfig[] = [
    {
        id: 'job',
        icon: Briefcase,
        color: "blue"
    },
    {
        id: 'student',
        icon: GraduationCap,
        color: "amber"
    },
    {
        id: 'family',
        icon: Users,
        color: "pink"
    },
    {
        id: 'tourist',
        icon: Plane,
        color: "purple"
    },
    {
        id: 'equivalence',
        icon: FileCheck,
        color: "teal"
    },
    {
        id: 'fasttrack',
        icon: Zap,
        color: "indigo"
    }
];

export const JOBS_CONFIG: JobConfig[] = [
    {
        id: 'mechanic',
        categoryColor: 'blue',
        trend: 'urgent'
    },
    {
        id: 'driver',
        categoryColor: 'amber',
        trend: 'urgent'
    },
    {
        id: 'engineer',
        categoryColor: 'orange',
        trend: 'up'
    },
    {
        id: 'nurse',
        categoryColor: 'pink',
        trend: 'urgent'
    },
    {
        id: 'craft',
        categoryColor: 'purple',
        trend: 'up'
    }
];

export const STEPS_CONFIG: StepConfig[] = [
    { id: '01', color: 'from-blue-600 to-cyan-500' },
    { id: '02', color: 'from-blue-600 to-cyan-500' },
    { id: '03', color: 'from-blue-600 to-cyan-500' },
    { id: '04', color: 'from-green-500 to-emerald-400' }
];

export const STATS: StatConfig[] = [
    {
        id: 'success',
        value: '98%',
        label: 'Başarı Oranı'
    },
    {
        id: 'clients',
        value: '2500+',
        label: 'Mutlu Danışan'
    },
    {
        id: 'experience',
        value: '10+',
        label: 'Yıllık Tecrübe'
    },
    {
        id: 'support',
        value: '7/24',
        label: 'Destek'
    }
];