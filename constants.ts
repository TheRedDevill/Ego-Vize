import { 
    Briefcase, 
    GraduationCap, 
    Users, 
    Plane, 
    FileCheck, 
    Zap, 
    Laptop, 
    Truck, 
    HardHat, 
    HeartPulse, 
    Wrench 
} from "lucide-react";
import { ServiceData, JobData, Stat } from "./types";

export const SERVICES: ServiceData[] = [
    {
        id: 'job',
        title: 'İş Arama Vizesi',
        shortDesc: "Almanya'da kariyer yapmak isteyenler için profesyonel iş arama vizesi danışmanlığı.",
        fullDesc: "2025 güncel Fırsat Kart (Chancenkarte) ve Mavi Kart düzenlemeleriyle Almanya'da iş aramak artık daha kolay. Özellikle IT, Mühendislik ve Sağlık alanlarında yıllık ortalama €50.000+ brüt maaşlı işlere başvurmanız için profesyonel CV hazırlığı ve süreç yönetimi yapıyoruz.",
        icon: Briefcase,
        color: "blue",
        list: [
            'Puan sistemi analizi (Chancenkarte uyumluluğu).',
            'Alman standartlarında (Lebenslauf) CV hazırlığı.',
            'Bloke hesap ve sigorta işlemleri.',
            'Sektörel maaş beklentisi analizi ve iş başvuru stratejisi.'
        ]
    },
    {
        id: 'student',
        title: 'Öğrenci Vizesi',
        shortDesc: "Lisans, Yüksek Lisans veya Dil Okulu. Almanya'da eğitim hayalleriniz için eksiksiz dosya hazırlığı.",
        fullDesc: "Almanya'nın prestijli üniversitelerinde lisans veya yüksek lisans eğitimi almak isteyenler için kapsamlı danışmanlık. Şartlı kabul, dil okulu kaydı ve garantörlük işlemlerinde yanınızdayız.",
        icon: GraduationCap,
        color: "amber",
        list: [
            'Üniversite ve bölüm araştırması.',
            'Uni-assist üzerinden başvuru yönetimi.',
            'Garantör belgesi veya bloke hesap desteği.',
            'Vize görüşmesi simülasyonu.'
        ]
    },
    {
        id: 'family',
        title: 'Aile Birleşimi',
        shortDesc: "Sevdiklerinize kavuşmanız için A1 sınavı bilgilendirmesi ve resmi başvuru süreci.",
        fullDesc: "Almanya'da yaşayan eşinizin veya çocuklarınızın yanına yerleşmeniz için gereken ulusal vize (D Tipi) sürecini yönetiyoruz. Dil şartı (A1) ve gerekli resmi evrakların tercümesi konusunda rehberlik ediyoruz.",
        icon: Users,
        color: "pink",
        list: [
            'Almanca A1 sertifikası süreci bilgilendirmesi.',
            'Uluslararası evlenme kayıt örneği (Formül B) temini.',
            'Almanya\'daki eşin konut ve gelir yeterliliği kontrolü.',
            'Konsolosluk başvuru formlarının doldurulması.'
        ]
    },
    {
        id: 'tourist',
        title: 'Turistik Schengen',
        shortDesc: "Tüm Avrupa ülkeleri için turistik vize başvuruları. Otel, uçak ve seyahat planlaması.",
        fullDesc: "Kısa süreli seyahatleriniz (90 güne kadar) için Schengen vize başvurularınızı hızlı ve hatasız yapıyoruz. Turistik, ticari veya aile ziyareti amaçlı seyahatlerinizde ret riskini en aza indiriyoruz.",
        icon: Plane,
        color: "purple",
        list: [
            'Seyahat sağlık sigortası işlemleri.',
            'Uçak ve otel rezervasyonlarının düzenlenmesi.',
            'Banka hesap dökümü ve gelir belgeleri analizi.',
            'Parmak izi randevusu takibi.'
        ]
    },
    {
        id: 'equivalence',
        title: 'Denklik (ZAB/DAB)',
        shortDesc: "Mesleki yeterliliğinizin Almanya'da tanınması için gerekli denklik işlemlerinin takibi.",
        fullDesc: "Türkiye'den aldığınız diplomanın Almanya'da geçerli sayılması için ZAB (Merkezi Yurt Dışı Eğitim Ofisi) veya meslek odaları nezdinde denklik başvurunuzu yapıyoruz. Mavi Kart başvuruları için zorunlu adımdır.",
        icon: FileCheck,
        color: "teal",
        list: [
            'Diploma ve transkript tercüme işlemleri.',
            'ZAB "Statement of Comparability" başvurusu.',
            'Anabin veritabanı sorgulaması.',
            'Eksik evrak tamamlama süreci yönetimi.'
        ]
    },
    {
        id: 'fasttrack',
        title: '81a Ön Onaylı Başvurular',
        shortDesc: "İşvereniniz üzerinden yürütülen, vize sürecini haftalara indiren hızlandırılmış prosedür.",
        fullDesc: "Almanya'daki işvereninizin Yabancılar Dairesi'ne (Ausländerbehörde) başvurarak başlattığı, vize randevusu ve onay sürecini ciddi oranda kısaltan resmi hızlandırma prosedürüdür (Beschleunigtes Fachkräfteverfahren).",
        icon: Zap,
        color: "indigo",
        list: [
            'İşveren ile vekaletname (Vollmacht) sürecinin yönetimi.',
            'Almanya\'dan "Ön Onay" belgesinin temini.',
            'Konsolosluktan 3 hafta içinde öncelikli randevu ataması.',
            'Denklik işlemlerinin hızlandırılmış takibi.'
        ]
    }
];

export const JOBS: JobData[] = [
    {
        id: 'mechanic',
        category: 'Otomotiv',
        categoryColor: 'blue',
        title: 'Araba Tamircisi',
        subtitle: 'Mekaniker & Mechatroniker',
        salary: '€38.000 - €52.000',
        trend: 'urgent'
    },
    {
        id: 'driver',
        category: 'Lojistik',
        categoryColor: 'amber',
        title: 'Tır & Kamyon Şoförü',
        subtitle: 'C & CE Ehliyet, Kod 95',
        salary: '€32.000 - €45.000',
        trend: 'urgent'
    },
    {
        id: 'engineer',
        category: 'Mühendislik',
        categoryColor: 'orange',
        title: 'Elektrik Mühendisi',
        subtitle: 'Enerji & Otomasyon',
        salary: '€55.000 - €90.000',
        trend: 'up'
    },
    {
        id: 'nurse',
        category: 'Sağlık',
        categoryColor: 'pink',
        title: 'Hemşire & Bakıcı',
        subtitle: 'Yoğun Bakım, Yaşlı Bakım',
        salary: '€38.000 - €52.000',
        trend: 'urgent'
    },
    {
        id: 'craft',
        category: 'Zanaat',
        categoryColor: 'purple',
        title: 'Elektrikçi / Tesisatçı',
        subtitle: 'İnşaat & Sanayi',
        salary: '€35.000 - €55.000',
        trend: 'up'
    }
];

export const STATS: Stat[] = [
    { value: "%98", label: "Başarı Oranı" },
    { value: "500+", label: "Mutlu Danışan" },
    { value: "7/24", label: "Destek Hattı" },
    { value: "10+", label: "Yıllık Tecrübe" }
];