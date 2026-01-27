import { Language } from "./types";

export const translations = {
    tr: {
        nav: {
            home: 'Anasayfa',
            services: 'Hizmetler',
            jobs: 'İş Fırsatları',
            contact: 'İletişim',
            apply: 'Randevu Al',
            mobileApply: 'Hemen Başvur',
            subtitle: 'Consultancy'
        },
        hero: {
            titlePart1: 'Hayalinizdeki',
            titlePart2: "Avrupa'ya",
            titlePart3: 'Profesyonel Adım.',
            desc: "Ego Vize ile Almanya iş arama, öğrenci, aile birleşimi ve turistik vize başvurularınızda karmaşık prosedürleri sizin yerinize biz yönetelim.",
            ctaPrimary: 'Hemen Başvur',
            ctaSecondary: 'Hizmetleri İncele',
            badges: ['Hızlı Başvuru', 'Uzman Kadro', 'Yüksek Onay Oranı']
        },
        services: {
            tag: 'Hizmetlerimiz',
            title: 'Profesyonel Vize Çözümleri',
            desc: 'Almanya ve Avrupa hedefleriniz için uçtan uca, şeffaf ve sonuç odaklı danışmanlık hizmetleri.',
            cta: 'Detayları İncele',
            modal: {
                tag: 'Hizmet Detayları',
                processTitle: 'Süreç ve Gereksinimler',
                personal: 'Kişisel durumunuz için',
                btn: 'Ücretsiz Danışın'
            },
            items: {
                job: {
                    title: 'İş Arama Vizesi',
                    shortDesc: "Almanya'da kariyer yapmak isteyenler için profesyonel iş arama vizesi danışmanlığı.",
                    fullDesc: "2025 güncel Fırsat Kart (Chancenkarte) ve Mavi Kart düzenlemeleriyle Almanya'da iş aramak artık daha kolay. Özellikle IT, Mühendislik ve Sağlık alanlarında yıllık ortalama €50.000+ brüt maaşlı işlere başvurmanız için profesyonel CV hazırlığı ve süreç yönetimi yapıyoruz.",
                    list: [
                        'Puan sistemi analizi (Chancenkarte uyumluluğu).',
                        'Alman standartlarında (Lebenslauf) CV hazırlığı.',
                        'Bloke hesap ve sigorta işlemleri.',
                        'Sektörel maaş beklentisi analizi ve iş başvuru stratejisi.'
                    ]
                },
                student: {
                    title: 'Öğrenci Vizesi',
                    shortDesc: "Lisans, Yüksek Lisans veya Dil Okulu. Almanya'da eğitim hayalleriniz için eksiksiz dosya hazırlığı.",
                    fullDesc: "Almanya'nın prestijli üniversitelerinde lisans veya yüksek lisans eğitimi almak isteyenler için kapsamlı danışmanlık. Şartlı kabul, dil okulu kaydı ve garantörlük işlemlerinde yanınızdayız.",
                    list: [
                        'Üniversite ve bölüm araştırması.',
                        'Uni-assist üzerinden başvuru yönetimi.',
                        'Garantör belgesi veya bloke hesap desteği.',
                        'Vize görüşmesi simülasyonu.'
                    ]
                },
                family: {
                    title: 'Aile Birleşimi',
                    shortDesc: "Sevdiklerinize kavuşmanız için A1 sınavı bilgilendirmesi ve resmi başvuru süreci.",
                    fullDesc: "Almanya'da yaşayan eşinizin veya çocuklarınızın yanına yerleşmeniz için gereken ulusal vize (D Tipi) sürecini yönetiyoruz. Dil şartı (A1) ve gerekli resmi evrakların tercümesi konusunda rehberlik ediyoruz.",
                    list: [
                        'Almanca A1 sertifikası süreci bilgilendirmesi.',
                        'Uluslararası evlenme kayıt örneği (Formül B) temini.',
                        'Almanya\'daki eşin konut ve gelir yeterliliği kontrolü.',
                        'Konsolosluk başvuru formlarının doldurulması.'
                    ]
                },
                tourist: {
                    title: 'Turistik Schengen',
                    shortDesc: "Tüm Avrupa ülkeleri için turistik vize başvuruları. Otel, uçak ve seyahat planlaması.",
                    fullDesc: "Kısa süreli seyahatleriniz (90 güne kadar) için Schengen vize başvurularınızı hızlı ve hatasız yapıyoruz. Turistik, ticari veya aile ziyareti amaçlı seyahatlerinizde ret riskini en aza indiriyoruz.",
                    list: [
                        'Seyahat sağlık sigortası işlemleri.',
                        'Uçak ve otel rezervasyonlarının düzenlenmesi.',
                        'Banka hesap dökümü ve gelir belgeleri analizi.',
                        'Parmak izi randevusu takibi.'
                    ]
                },
                equivalence: {
                    title: 'Denklik (ZAB/DAB)',
                    shortDesc: "Mesleki yeterliliğinizin Almanya'da tanınması için gerekli denklik işlemlerinin takibi.",
                    fullDesc: "Türkiye'den aldığınız diplomanın Almanya'da geçerli sayılması için ZAB (Merkezi Yurt Dışı Eğitim Ofisi) veya meslek odaları nezdinde denklik başvurunuzu yapıyoruz. Mavi Kart başvuruları için zorunlu adımdır.",
                    list: [
                        'Diploma ve transkript tercüme işlemleri.',
                        'ZAB "Statement of Comparability" başvurusu.',
                        'Anabin veritabanı sorgulaması.',
                        'Eksik evrak tamamlama süreci yönetimi.'
                    ]
                },
                fasttrack: {
                    title: '81a Ön Onaylı Başvurular',
                    shortDesc: "İşvereniniz üzerinden yürütülen, vize sürecini haftalara indiren hızlandırılmış prosedür.",
                    fullDesc: "Almanya'daki işvereninizin Yabancılar Dairesi'ne (Ausländerbehörde) başvurarak başlattığı, vize randevusu ve onay sürecini ciddi oranda kısaltan resmi hızlandırma prosedürüdür (Beschleunigtes Fachkräfteverfahren).",
                    list: [
                        'İşveren ile vekaletname (Vollmacht) sürecinin yönetimi.',
                        'Almanya\'dan "Ön Onay" belgesinin temini.',
                        'Konsolosluktan 3 hafta içinde öncelikli randevu ataması.',
                        'Denklik işlemlerinin hızlandırılmış takibi.'
                    ]
                }
            }
        },
        market: {
            tag: 'Almanya Piyasası 2026',
            title: 'En Çok Aranan Meslekler',
            desc: "Bundesagentur für Arbeit verilerine göre Almanya'da en yüksek açık bulunan sektörler ve ortalama yıllık brüt maaşlar.",
            salaryLabel: 'Ort. Yıllık Brüt',
            disclaimer: '* Veriler "Make it in Germany" ve "Gehalt.de" 2025 projeksiyonlarına dayalıdır.',
            items: {
                mechanic: { category: 'Otomotiv', title: 'Araba Tamircisi', subtitle: 'Mekaniker & Mechatroniker', salary: '€38.000 - €52.000', trendLabel: 'Acil' },
                driver: { category: 'Lojistik', title: 'Tır & Kamyon Şoförü', subtitle: 'C & CE Ehliyet, Kod 95', salary: '€32.000 - €45.000', trendLabel: 'Acil' },
                engineer: { category: 'Mühendislik', title: 'Elektrik Mühendisi', subtitle: 'Enerji & Otomasyon', salary: '€55.000 - €90.000', trendLabel: 'Yüksek' },
                nurse: { category: 'Sağlık', title: 'Hemşire & Bakıcı', subtitle: 'Yoğun Bakım, Yaşlı Bakım', salary: '€38.000 - €52.000', trendLabel: 'Acil' },
                craft: { category: 'Zanaat', title: 'Elektrikçi / Tesisatçı', subtitle: 'İnşaat & Sanayi', salary: '€35.000 - €55.000', trendLabel: 'Yüksek' }
            }
        },
        process: {
            tag: 'Nasıl Çalışıyoruz?',
            title: '4 Adımda Vizeniz Cebinizde',
            desc: 'Profesyonel sürecimizle karmaşık vize işlemlerini basitleştiriyoruz.',
            steps: {
                '01': { title: 'Ücretsiz Ön Görüşme', desc: 'Durumunuzu analiz ediyor ve size en uygun vize türünü belirliyoruz.' },
                '02': { title: 'Evrak Hazırlığı', desc: 'Kişiye özel evrak listesi oluşturuyor ve dosyalarınızı eksiksiz hazırlıyoruz.' },
                '03': { title: 'Randevu ve Başvuru', desc: 'Konsolosluk veya aracı kurum randevunuzu alıyor, süreci yönetiyoruz.' },
                '04': { title: 'Sonuç Takibi', desc: 'Pasaportunuz size ulaşana kadar süreci takip ediyoruz.' }
            }
        },
        contact: {
            title: 'Bizimle İletişime Geçin',
            desc: 'Hayallerinizi ertelemeyin. Profesyonel destek almak için formu doldurun.',
            infoTitle: 'İletişim Bilgileri',
            form: {
                name: 'Adınız Soyadınız',
                phone: 'Telefon Numaranız',
                visaType: 'Vize Türü',
                message: 'Mesajınız',
                select: 'Seçiniz',
                btn: 'Gönder',
                successTitle: 'Başvurunuz Alındı!',
                successDesc: 'Talebiniz bize ulaştı. Uzman danışmanlarımız en kısa sürede sizinle iletişime geçecektir.',
                errors: {
                    required: 'Bu alan zorunludur.',
                    nameLength: 'Lütfen tam adınızı giriniz.',
                    phoneInvalid: 'Geçersiz TR (+90) veya DE (+49) numarası.',
                    messageLength: 'Mesajınız çok kısa.'
                },
                options: {
                    '81a': '81a Ön Onaylı Başvurular',
                    'JobSeeker': 'İş Arama Vizesi',
                    'Student': 'Öğrenci Vizesi',
                    'Tourist': 'Turistik Vize',
                    'Family': 'Aile Birleşimi',
                    'Other': 'Diğer'
                }
            }
        },
        footer: {
            desc: 'Almanya ve Avrupa vize başvurularınızda güvenilir çözüm ortağınız. Profesyonel danışmanlık hizmetlerimizle sürecinizi kolaylaştırın.',
            copyright: '© 2026 Ego Vize Danışmanlık. Tüm hakları saklıdır.'
        }
    },
    de: {
        nav: {
            home: 'Startseite',
            services: 'Dienstleistungen',
            jobs: 'Jobangebote',
            contact: 'Kontakt',
            apply: 'Termin Buchen',
            mobileApply: 'Jetzt Bewerben',
            subtitle: 'Beratung'
        },
        hero: {
            titlePart1: 'Ihr professioneller',
            titlePart2: "Weg nach",
            titlePart3: 'Europa.',
            desc: "Lassen Sie uns die komplexen Verfahren für Ihre Arbeitssuche, Studium, Familienzusammenführung und Touristenvisa in Deutschland für Sie verwalten.",
            ctaPrimary: 'Jetzt Bewerben',
            ctaSecondary: 'Dienstleistungen',
            badges: ['Schnelle Bewerbung', 'Expertenteam', 'Hohe Erfolgsquote']
        },
        services: {
            tag: 'Unsere Leistungen',
            title: 'Professionelle Visa-Lösungen',
            desc: 'End-to-End, transparente und ergebnisorientierte Beratungsdienste für Ihre Ziele in Deutschland und Europa.',
            cta: 'Details ansehen',
            modal: {
                tag: 'Leistungsdetails',
                processTitle: 'Prozess und Anforderungen',
                personal: 'Für Ihre Situation',
                btn: 'Kostenlose Beratung'
            },
            items: {
                job: {
                    title: 'Visum zur Arbeitssuche',
                    shortDesc: "Professionelle Beratung für Arbeitssuchende, die in Deutschland Karriere machen wollen.",
                    fullDesc: "Mit den aktuellen Chancenkarte- und Blue-Card-Regelungen 2025 ist die Arbeitssuche in Deutschland einfacher. Wir unterstützen Sie bei der professionellen CV-Erstellung und Prozessmanagement für Jobs im IT-, Ingenieur- und Gesundheitswesen mit €50.000+ Bruttojahresgehalt.",
                    list: [
                        'Punktesystem-Analyse (Chancenkarte).',
                        'CV-Erstellung nach deutschen Standards (Lebenslauf).',
                        'Sperrkonto- und Versicherungsverfahren.',
                        'Analyse der Gehaltserwartungen und Bewerbungsstrategie.'
                    ]
                },
                student: {
                    title: 'Studentenvisum',
                    shortDesc: "Bachelor, Master oder Sprachschule. Vollständige Vorbereitung für Ihre Bildungsträume.",
                    fullDesc: "Umfassende Beratung für diejenigen, die an renommierten deutschen Universitäten studieren möchten. Wir sind bei bedingter Zulassung, Sprachschulanmeldung und Bürgschaftsverfahren an Ihrer Seite.",
                    list: [
                        'Universitäts- und Fachbereichsrecherche.',
                        'Bewerbungsmanagement über Uni-assist.',
                        'Unterstützung bei Bürgschaft oder Sperrkonto.',
                        'Simulation des Visumgesprächs.'
                    ]
                },
                family: {
                    title: 'Familienzusammenführung',
                    shortDesc: "Informationen zur A1-Prüfung und offizieller Antragsprozess, um Ihre Lieben wiederzusehen.",
                    fullDesc: "Wir verwalten den Prozess für das nationale Visum (Typ D), damit Sie zu Ihrem Ehepartner oder Ihren Kindern in Deutschland ziehen können. Wir leiten Sie bei Sprachanforderungen (A1) und der Übersetzung offizieller Dokumente an.",
                    list: [
                        'Informationen zum A1-Zertifikatsprozess.',
                        'Beschaffung der internationalen Heiratsurkunde (Formel B).',
                        'Prüfung von Wohnraum und Einkommen des Ehepartners in DE.',
                        'Ausfüllen der Konsulatsantragsformulare.'
                    ]
                },
                tourist: {
                    title: 'Touristen-Schengen',
                    shortDesc: "Touristenvisumanträge für alle europäischen Länder. Hotel-, Flug- und Reiseplanung.",
                    fullDesc: "Wir stellen Ihre Schengen-Visumanträge für kurzfristige Reisen (bis zu 90 Tage) schnell und fehlerfrei. Wir minimieren das Ablehnungsrisiko bei touristischen, geschäftlichen oder familiären Besuchen.",
                    list: [
                        'Reisekrankenversicherung.',
                        'Flug- und Hotelreservierungen.',
                        'Analyse von Kontoauszügen und Einkommensnachweisen.',
                        'Verfolgung des Fingerabdrucktermins.'
                    ]
                },
                equivalence: {
                    title: 'Anerkennung (ZAB/DAB)',
                    shortDesc: "Verfolgung der notwendigen Anerkennungsverfahren für Ihre berufliche Qualifikation.",
                    fullDesc: "Wir beantragen die Anerkennung Ihres türkischen Diploms bei der ZAB oder den Berufskammern, damit es in Deutschland gültig ist. Dies ist ein obligatorischer Schritt für Blue-Card-Anträge.",
                    list: [
                        'Diplom- und Transkriptübersetzung.',
                        'ZAB "Statement of Comparability" Antrag.',
                        'Anabin-Datenbankabfrage.',
                        'Management fehlender Dokumente.'
                    ]
                },
                fasttrack: {
                    title: 'Beschleunigtes Fachkräfteverfahren',
                    shortDesc: "Verfahren über Ihren Arbeitgeber, das den Visumprozess auf Wochen verkürzt.",
                    fullDesc: "Offizielles Beschleunigungsverfahren (81a), das von Ihrem Arbeitgeber bei der Ausländerbehörde eingeleitet wird und Visumtermin sowie Genehmigungsprozess erheblich verkürzt.",
                    list: [
                        'Verwaltung der Vollmacht mit dem Arbeitgeber.',
                        'Beschaffung der "Vorabzustimmung" aus Deutschland.',
                        'Priorisierter Termin beim Konsulat innerhalb von 3 Wochen.',
                        'Beschleunigte Verfolgung von Anerkennungsverfahren.'
                    ]
                }
            }
        },
        market: {
            tag: 'Deutscher Markt 2026',
            title: 'Meistgesuchte Berufe',
            desc: "Branchen mit den höchsten offenen Stellen und durchschnittlichen Bruttojahresgehältern laut Bundesagentur für Arbeit.",
            salaryLabel: 'Ø Jahresbrutto',
            disclaimer: '* Daten basieren auf "Make it in Germany" und "Gehalt.de" 2025 Projektionen.',
            items: {
                mechanic: { category: 'Automobil', title: 'KFZ-Mechatroniker', subtitle: 'Mechaniker & Mechatroniker', salary: '€38.000 - €52.000', trendLabel: 'Dringend' },
                driver: { category: 'Logistik', title: 'LKW-Fahrer', subtitle: 'Führerschein C & CE, Code 95', salary: '€32.000 - €45.000', trendLabel: 'Dringend' },
                engineer: { category: 'Ingenieurwesen', title: 'Elektroingenieur', subtitle: 'Energie & Automatisierung', salary: '€55.000 - €90.000', trendLabel: 'Hoch' },
                nurse: { category: 'Gesundheit', title: 'Pflegefachkraft', subtitle: 'Intensivpflege, Altenpflege', salary: '€38.000 - €52.000', trendLabel: 'Dringend' },
                craft: { category: 'Handwerk', title: 'Elektriker / Installateur', subtitle: 'Bau & Industrie', salary: '€35.000 - €55.000', trendLabel: 'Hoch' }
            }
        },
        process: {
            tag: 'Wie wir arbeiten',
            title: 'In 4 Schritten zum Visum',
            desc: 'Wir vereinfachen komplexe Visumverfahren mit unserem professionellen Prozess.',
            steps: {
                '01': { title: 'Kostenloses Vorgespräch', desc: 'Wir analysieren Ihre Situation und bestimmen den passenden Visumtyp.' },
                '02': { title: 'Dokumentenvorbereitung', desc: 'Wir erstellen eine individuelle Dokumentenliste und bereiten Ihre Akte vor.' },
                '03': { title: 'Termin und Antrag', desc: 'Wir vereinbaren Ihren Termin beim Konsulat und verwalten den Prozess.' },
                '04': { title: 'Ergebnisverfolgung', desc: 'Wir verfolgen den Prozess, bis Ihr Reisepass bei Ihnen eintrifft.' }
            }
        },
        contact: {
            title: 'Kontaktieren Sie uns',
            desc: 'Verschieben Sie Ihre Träume nicht. Füllen Sie das Formular für professionelle Unterstützung aus.',
            infoTitle: 'Kontaktinformationen',
            form: {
                name: 'Vor- und Nachname',
                phone: 'Telefonnummer',
                visaType: 'Visumtyp',
                message: 'Ihre Nachricht',
                select: 'Bitte wählen',
                btn: 'Senden',
                successTitle: 'Antrag erhalten!',
                successDesc: 'Ihre Anfrage ist bei uns eingegangen. Unsere Experten werden sich in Kürze bei Ihnen melden.',
                errors: {
                    required: 'Dieses Feld ist erforderlich.',
                    nameLength: 'Bitte geben Sie Ihren vollständigen Namen ein.',
                    phoneInvalid: 'Ungültige TR (+90) oder DE (+49) Nummer.',
                    messageLength: 'Ihre Nachricht ist zu kurz.'
                },
                options: {
                    '81a': '81a Beschleunigtes Verfahren',
                    'JobSeeker': 'Visum zur Arbeitssuche',
                    'Student': 'Studentenvisum',
                    'Tourist': 'Touristenvisum',
                    'Family': 'Familienzusammenführung',
                    'Other': 'Sonstiges'
                }
            }
        },
        footer: {
            desc: 'Ihr zuverlässiger Partner für Visumanträge in Deutschland und Europa. Vereinfachen Sie Ihren Prozess mit unseren professionellen Beratungsdiensten.',
            copyright: '© 2026 Ego Vize Consultancy. Alle Rechte vorbehalten.'
        }
    }
};