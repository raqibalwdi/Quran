// quran_data.js

const QURAN_SURA_DATA = [
    { id: 1, suraName: "الفاتحة", startPage: 1 },
    { id: 2, suraName: "البقرة", startPage: 2 },
    { id: 3, suraName: "آل عمران", startPage: 50 },
    { id: 4, suraName: "النساء", startPage: 77 },
    { id: 5, suraName: "المائدة", startPage: 106 },
    { id: 6, suraName: "الأنعام", startPage: 128 },
    { id: 7, suraName: "الأعراف", startPage: 151 },
    { id: 8, suraName: "الأنفال", startPage: 177 },
    { id: 9, suraName: "التوبة", startPage: 187 },
    { id: 10, suraName: "يونس", startPage: 208 },
    { id: 11, suraName: "هود", startPage: 221 },
    { id: 12, suraName: "يوسف", startPage: 235 },
    { id: 13, suraName: "الرعد", startPage: 249 },
    { id: 14, suraName: "إبراهيم", startPage: 255 },
    { id: 15, suraName: "الحجر", startPage: 262 },
    { id: 16, suraName: "النحل", startPage: 267 },
    { id: 17, suraName: "الإسراء", startPage: 282 },
    { id: 18, suraName: "الكهف", startPage: 293 },
    { id: 19, suraName: "مريم", startPage: 305 },
    { id: 20, suraName: "طه", startPage: 312 },
    { id: 21, suraName: "الأنبياء", startPage: 322 },
    { id: 22, suraName: "الحج", startPage: 332 },
    { id: 23, suraName: "المؤمنون", startPage: 342 },
    { id: 24, suraName: "النور", startPage: 350 },
    { id: 25, suraName: "الفرقان", startPage: 359 },
    { id: 26, suraName: "الشعراء", startPage: 367 },
    { id: 27, suraName: "النمل", startPage: 377 },
    { id: 28, suraName: "القصص", startPage: 385 },
    { id: 29, suraName: "العنكبوت", startPage: 396 },
    { id: 30, suraName: "الروم", startPage: 404 },
    { id: 31, suraName: "لقمان", startPage: 411 },
    { id: 32, suraName: "السجدة", startPage: 415 },
    { id: 33, suraName: "الأحزاب", startPage: 418 },
    { id: 34, suraName: "سبأ", startPage: 428 },
    { id: 35, suraName: "فاطر", startPage: 434 },
    { id: 36, suraName: "يس", startPage: 440 },
    { id: 37, suraName: "الصافات", startPage: 446 },
    { id: 38, suraName: "ص", startPage: 453 },
    { id: 39, suraName: "الزمر", startPage: 458 },
    { id: 40, suraName: "غافر", startPage: 467 }, 
    { id: 41, suraName: "فُصّلت", startPage: 477 },
    { id: 42, suraName: "الشورى", startPage: 483 },
    { id: 43, suraName: "الزخرف", startPage: 489 },
    { id: 44, suraName: "الدخان", startPage: 496 },
    { id: 45, suraName: "الجاثية", startPage: 499 },
    { id: 46, suraName: "الأحقاف", startPage: 502 },
    { id: 47, suraName: "محمد", startPage: 507 },
    { id: 48, suraName: "الفتح", startPage: 511 },
    { id: 49, suraName: "الحجرات", startPage: 515 },
    { id: 50, suraName: "ق", startPage: 518 },
    { id: 51, suraName: "الذاريات", startPage: 520 },
    { id: 52, suraName: "الطور", startPage: 523 },
    { id: 53, suraName: "النجم", startPage: 526 },
    { id: 54, suraName: "القمر", startPage: 528 },
    { id: 55, suraName: "الرحمن", startPage: 531 },
    { id: 56, suraName: "الواقعة", startPage: 534 },
    { id: 57, suraName: "الحديد", startPage: 537 },
    { id: 58, suraName: "المجادلة", startPage: 542 },
    { id: 59, suraName: "الحشر", startPage: 545 },
    { id: 60, suraName: "الممتحنة", startPage: 549 },
    { id: 61, suraName: "الصف", startPage: 551 },
    { id: 62, suraName: "الجمعة", startPage: 553 },
    { id: 63, suraName: "المنافقون", startPage: 554 },
    { id: 64, suraName: "التغابن", startPage: 556 },
    { id: 65, suraName: "الطلاق", startPage: 558 },
    { id: 66, suraName: "التحريم", startPage: 560 },
    { id: 67, suraName: "الملك", startPage: 562 },
    { id: 68, suraName: "القلم", startPage: 564 },
    { id: 69, suraName: "الحاقة", startPage: 566 },
    { id: 70, suraName: "المعارج", startPage: 568 },
    { id: 71, suraName: "نوح", startPage: 570 },
    { id: 72, suraName: "الجن", startPage: 572 },
    { id: 73, suraName: "المزمل", startPage: 574 },
    { id: 74, suraName: "المدثر", startPage: 575 },
    { id: 75, suraName: "القيامة", startPage: 577 },
    { id: 76, suraName: "الإنسان", startPage: 578 },
    { id: 77, suraName: "المرسلات", startPage: 580 },
    { id: 78, suraName: "النبأ", startPage: 582 },
    { id: 79, suraName: "النازعات", startPage: 583 },
    { id: 80, suraName: "عبس", startPage: 585 },
    { id: 81, suraName: "التكوير", startPage: 586 },
    { id: 82, suraName: "الانفطار", startPage: 587 },
    { id: 83, suraName: "المطففين", startPage: 587 },
    { id: 84, suraName: "الانشقاق", startPage: 589 },
    { id: 85, suraName: "البروج", startPage: 590 },
    { id: 86, suraName: "الطارق", startPage: 591 },
    { id: 87, suraName: "الأعلى", startPage: 591 },
    { id: 88, suraName: "الغاشية", startPage: 592 },
    { id: 89, suraName: "الفجر", startPage: 593 },
    { id: 90, suraName: "البلد", startPage: 594 },
    { id: 91, suraName: "الشمس", startPage: 595 },
    { id: 92, suraName: "الليل", startPage: 595 },
    { id: 93, suraName: "الضحى", startPage: 596 },
    { id: 94, suraName: "الشرح", startPage: 596 },
    { id: 95, suraName: "التين", startPage: 597 },
    { id: 96, suraName: "العلق", startPage: 597 },
    { id: 97, suraName: "القدر", startPage: 598 },
    { id: 98, suraName: "البينة", startPage: 598 },
    { id: 99, suraName: "الزلزلة", startPage: 599 },
    { id: 100, suraName: "العاديات", startPage: 599 },
    { id: 101, suraName: "القارعة", startPage: 600 },
    { id: 102, suraName: "التكاثر", startPage: 600 },
    { id: 103, suraName: "العصر", startPage: 601 },
    { id: 104, suraName: "الهمزة", startPage: 601 },
    { id: 105, suraName: "الفيل", startPage: 601 },
    { id: 106, suraName: "قريش", startPage: 602 },
    { id: 107, suraName: "الماعون", startPage: 602 },
    { id: 108, suraName: "الكوثر", startPage: 602 },
    { id: 109, suraName: "الكافرون", startPage: 603 },
    { id: 110, suraName: "النصر", startPage: 603 },
    { id: 111, suraName: "المسد", startPage: 603 },
    { id: 112, suraName: "الإخلاص", startPage: 604 },
    { id: 113, suraName: "الفلق", startPage: 604 },
    { id: 114, suraName: "الناس", startPage: 604 }
];

const QURAN_JUZ_DATA = [
    { juz: 1, startPage: 1, suraName: "الفاتحة" },
    { juz: 2, startPage: 22, suraName: "البقرة" },
    { juz: 3, startPage: 42, suraName: "آل عمران" },
    { juz: 4, startPage: 62, suraName: "آل عمران" },
    { juz: 5, startPage: 82, suraName: "النساء" },
    { juz: 6, startPage: 102, suraName: "المائدة" },
    { juz: 7, startPage: 121, suraName: "المائدة" },
    { juz: 8, startPage: 142, suraName: "الأنعام" },
    { juz: 9, startPage: 162, suraName: "الأعراف" },
    { juz: 10, startPage: 182, suraName: "الأنفال" },
    { juz: 11, startPage: 202, suraName: "التوبة" },
    { juz: 12, startPage: 222, suraName: "هود" },
    { juz: 13, startPage: 242, suraName: "يوسف" },
    { juz: 14, startPage: 262, suraName: "الحجر" },
    { juz: 15, startPage: 282, suraName: "الإسراء" },
    { juz: 16, startPage: 302, suraName: "الكهف" },
    { juz: 17, startPage: 322, suraName: "الأنبياء" },
    { juz: 18, startPage: 342, suraName: "المؤمنون" },
    { juz: 19, startPage: 362, suraName: "الفرقان" },
    { juz: 20, startPage: 382, suraName: "النمل" },
    { juz: 21, startPage: 402, suraName: "العنكبوت" },
    { juz: 22, startPage: 422, suraName: "الأحزاب" },
    { juz: 23, startPage: 442, suraName: "يس" },
    { juz: 24, startPage: 462, suraName: "الزمر" },
    { juz: 25, startPage: 482, suraName: "فصلت" },
    { juz: 26, startPage: 502, suraName: "الأحقاف" },
    { juz: 27, startPage: 522, suraName: "الذاريات" },
    { juz: 28, startPage: 542, suraName: "المجادلة" },
    { juz: 29, startPage: 562, suraName: "الملك" },
    { juz: 30, startPage: 582, suraName: "النبأ" },
];

// 🌟 بيانات الأذكار (الصباح والمساء)
const ADHKAR_DATA = {
    morning: [
        { text: "أصبحنا وأصبح الملك لله والحمد لله، لا إله إلا الله وحده لا شريك له، له الملك وله الحمد وهو على كل شيء قدير.", count: 1 },
        { text: "اللهم بك أصبحنا، وبك أمسينا، وبك نحيا، وبك نموت، وإليك النشور.", count: 1 },
        { text: "اللهم أنت ربي لا إله إلا أنت، خلقتني وأنا عبدك، وأنا على عهدك ووعدك ما استطعت، أعوذ بك من شر ما صنعت، أبوء لك بنعمتك علي، وأبوء بذنبي فاغفر لي فإنه لا يغفر الذنوب إلا أنت.", count: 1 },
        { text: "يا حي يا قيوم برحمتك أستغيث أصلح لي شأني كله ولا تكلني إلى نفسي طرفة عين.", count: 3 },
        { text: "حسبي الله لا إله إلا هو عليه توكلت وهو رب العرش العظيم.", count: 7 }
    ],
    evening: [
        { text: "أمسينا وأمسى الملك لله والحمد لله، لا إله إلا الله وحده لا شريك له، له الملك وله الحمد وهو على كل شيء قدير.", count: 1 },
        { text: "اللهم بك أمسينا، وبك أصبحنا، وبك نحيا، وبك نموت، وإليك المصير.", count: 1 },
        { text: "اللهم إني أسألك العافية في الدنيا والآخرة، اللهم إني أسألك العفو والعافية في ديني ودنياي وأهلي ومالي.", count: 1 },
        { text: "أعوذ بكلمات الله التامات من شر ما خلق.", count: 3 },
        { text: "اللهم صل وسلم على نبينا محمد.", count: 10 }
    ]
};

// دالة مساعدة للحصول على معلومات السورة والجزء للصفحة الحالية
function getPageInfo(pageNumber) {
    let currentSura = null;
    for (let i = QURAN_SURA_DATA.length - 1; i >= 0; i--) {
        if (QURAN_SURA_DATA[i].startPage <= pageNumber) {
            currentSura = QURAN_SURA_DATA[i];
            break;
        }
    }
    
    let juz = null;
    for (let i = QURAN_JUZ_DATA.length - 1; i >= 0; i--) {
        if (QURAN_JUZ_DATA[i].startPage <= pageNumber) {
            juz = QURAN_JUZ_DATA[i];
            break;
        }
    }

    if (currentSura) {
        return {
            suraName: currentSura.suraName,
            juz: juz ? juz.juz : null
        };
    }
    return null;
}

// دالة مساعدة للحصول على قائمة السور للفهرس
function getSuraList() {
    return QURAN_SURA_DATA;
}