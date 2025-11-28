// ====== الإعدادات الأساسية ======
const TOTAL_PAGES = 604; 
let currentPage = 1;
const BASE_URL = 'assets/pages'; 

// ====== عناصر التحكم ======
const appBody = document.getElementById('app-body');
const sidebar = document.getElementById('sidebar-menu');
const openSidebarBtn = document.getElementById('open-sidebar-btn');
const closeSidebarBtn = document.getElementById('close-sidebar-btn');
const overlay = document.getElementById('overlay');
const sidebarNavLinks = document.querySelectorAll('.sidebar-nav .nav-link');
const themeToggleBtn = document.getElementById('theme-toggle');

const navigationArea = document.getElementById('navigation-area');
const navigationContent = document.getElementById('navigation-content');
const navigationTitle = document.getElementById('navigation-title');
const quranViewElement = document.getElementById('quran-view');
const quranTextContainer = document.getElementById('quran-text-container');
const currentSuraTitleElement = document.getElementById('current-sura-title');
const pageNumberDisplay = document.getElementById('page-number-display');

// ** تم إلغاء أزرار nextPageBtn و prevPageBtn **

// **********************************
// 1. إدارة الوضع الليلي (Dark Mode)
// **********************************

function initializeTheme() {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
        appBody.classList.add('dark-mode');
        themeToggleBtn.textContent = '🌙';
    } else {
        appBody.classList.remove('dark-mode');
        themeToggleBtn.textContent = '☀️';
    }
}

function toggleTheme() {
    const isDarkMode = appBody.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
    themeToggleBtn.textContent = isDarkMode ? '🌙' : '☀️';
}
themeToggleBtn.addEventListener('click', toggleTheme);

// **********************************
// 2. إدارة القائمة الجانبية
// **********************************
function openSidebar() {
    sidebar.style.width = '300px'; 
    overlay.classList.remove('hidden');
}
function closeSidebar() {
    sidebar.style.width = '0';
    overlay.classList.add('hidden');
}
openSidebarBtn.addEventListener('click', openSidebar);
closeSidebarBtn.addEventListener('click', closeSidebar);
overlay.addEventListener('click', closeSidebar);

function showContentScreen(screenId) {
    document.querySelectorAll('.app-screen').forEach(screen => {
        screen.classList.add('hidden');
    });
    document.getElementById(`${screenId}-screen`).classList.remove('hidden');
    document.querySelectorAll('.main-link').forEach(link => link.classList.remove('active'));
    document.querySelector(`.main-link[data-screen="${screenId}"]`).classList.add('active');
    
    if (screenId === 'mus-haf') {
        if (!navigationArea.classList.contains('hidden')) {
             navigationArea.classList.remove('hidden');
             quranViewElement.classList.add('hidden');
        } else {
            navigationArea.classList.add('hidden');
            quranViewElement.classList.remove('hidden');
        }
    }
}

// **********************************
// 3. منطق المصحف (Offline - صور الصفحات)
// **********************************

function updateHeader(pageNumber) {
    const info = getPageInfo(pageNumber); 
    let suraDisplay = 'المصحف الشريف';
    let juzDisplay = '';

    if (info) {
        suraDisplay = `سورة ${info.suraName}`;
        if (info.juz) {
            juzDisplay = `الجزء ${info.juz}`;
        }
    }
    
    currentSuraTitleElement.textContent = suraDisplay;
    pageNumberDisplay.textContent = `${juzDisplay} | صفحة ${pageNumber}`;
}

function displayPageImage(pageNumber) {
    if (pageNumber < 1) {
        currentPage = 1;
        return; 
    }
    if (pageNumber > TOTAL_PAGES) {
        currentPage = TOTAL_PAGES;
        return;
    }
    
    currentPage = pageNumber;
    
    const fileName = String(pageNumber).padStart(3, '0') + '.jpg';
    const imagePath = `${BASE_URL}/${fileName}`;
    
    quranTextContainer.innerHTML = `
        <img src="${imagePath}" alt="الصفحة رقم ${pageNumber}" style="width: 100%; height: auto;"
             onerror="this.onerror=null; this.src='assets/placeholder.jpg'; console.error('ملف الصورة ${fileName} غير موجود.');">
    `;
    
    updateHeader(pageNumber);
    saveLastRead(pageNumber);
}

// 3.1 منطق السحب (Swipe Functionality) 🌟 التعديل الجديد 🌟
let touchstartX = 0;
let touchendX = 0;
const SWIPE_THRESHOLD = 50; 

function handleGesture() {
    const deltaX = touchendX - touchstartX;
    if (Math.abs(deltaX) < SWIPE_THRESHOLD) return; 

    // السحب من اليمين لليسار = الصفحة التالية
    if (deltaX < 0) { 
        displayPageImage(currentPage + 1);
    } 

    // السحب من اليسار لليمين = الصفحة السابقة
    if (deltaX > 0) {
        displayPageImage(currentPage - 1);
    }
}

quranTextContainer.addEventListener('touchstart', e => {
    // التأكد من أن اللمسة بدأت على الصورة الرئيسية
    if (e.target.tagName === 'IMG') {
        touchstartX = e.changedTouches[0].screenX;
    }
});

quranTextContainer.addEventListener('touchend', e => {
    // التأكد من أن اللمسة انتهت على الصورة الرئيسية
    if (e.target.tagName === 'IMG') {
        touchendX = e.changedTouches[0].screenX;
        handleGesture();
    }
});

// **********************************
// 4. منطق الفهرس والأجزاء
// **********************************

function renderSuraList() {
    navigationArea.classList.remove('hidden');
    quranViewElement.classList.add('hidden');
    navigationTitle.textContent = 'الفهرس (السور)';
    
    let content = '<div class="sura-list-content">';
    getSuraList().forEach(info => { 
        content += `
            <div class="sura-item" data-page="${info.startPage}">
                <span class="sura-number">Sura ${info.id}</span>
                <span class="sura-name">${info.suraName}</span>
                <span class="sura-ayahs">(صفحة ${info.startPage})</span>
            </div>
        `;
    });
    content += '</div>';
    navigationContent.innerHTML = content;
    
    document.querySelectorAll('.sura-list-content .sura-item').forEach(item => {
        item.addEventListener('click', () => {
            const pageNumber = parseInt(item.getAttribute('data-page'));
            navigationArea.classList.add('hidden');
            quranViewElement.classList.remove('hidden');
            displayPageImage(pageNumber);
        });
    });
}

function renderJuzList() {
    navigationArea.classList.remove('hidden');
    quranViewElement.classList.add('hidden');
    navigationTitle.textContent = 'الأجزاء (30 جزء)';
    
    let content = '<div class="juz-list-content">';
    QURAN_JUZ_DATA.forEach(juz => {
        content += `
            <div class="juz-item" data-page="${juz.startPage}">
                الجزء ${juz.juz} (يبدأ في صفحة ${juz.startPage})
            </div>
        `;
    });
    content += '</div>';
    navigationContent.innerHTML = content;
    
    document.querySelectorAll('.juz-list-content .juz-item').forEach(item => {
        item.addEventListener('click', () => {
            const pageNumber = parseInt(item.getAttribute('data-page'));
            navigationArea.classList.add('hidden');
            quranViewElement.classList.remove('hidden');
            displayPageImage(pageNumber); 
        });
    });
}

// **********************************
// 5. منطق العلامات المرجعية
// **********************************
function saveLastRead(pageNumber) {
    localStorage.setItem('lastReadPage', pageNumber);
}
function saveBookmarkAction() {
    const currentPageToSave = localStorage.getItem('lastReadPage') || 1;
    localStorage.setItem('bookmarkPage', currentPageToSave);
    alert(`تم حفظ العلامة المرجعية في صفحة رقم ${currentPageToSave}`);
}
function goToBookmarkAction() {
    const bookmarkPage = localStorage.getItem('bookmarkPage');
    if (bookmarkPage) {
        navigationArea.classList.add('hidden');
        quranViewElement.classList.remove('hidden');
        displayPageImage(parseInt(bookmarkPage));
    } else {
        alert('لا توجد علامة مرجعية محفوظة.');
    }
}

// **********************************
// 6. ربط وظائف القائمة الجانبية
// **********************************
sidebarNavLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        closeSidebar();
        
        const screenId = link.getAttribute('data-screen');
        const action = link.getAttribute('data-action');
        
        if (screenId) showContentScreen(screenId);
        
        switch(action) {
            case 'show-sura-list':
                renderSuraList();
                break;
            case 'show-juz-list':
                renderJuzList();
                break;
            case 'save-bookmark':
                saveBookmarkAction();
                break;
            case 'go-to-bookmark':
                goToBookmarkAction();
                break;
        }
    });
});

// **********************************
// 7. منطق الأذكار والمسبحة
// **********************************

// منطق المسبحة
function initializeTasbeeh() {
    let count = 0;
    const display = document.getElementById('tasbeeh-display');
    const incrementBtn = document.getElementById('tasbeeh-increment');
    const resetBtn = document.getElementById('tasbeeh-reset');
    
    incrementBtn.addEventListener('click', () => {
        count++;
        display.textContent = count;
    });
    
    resetBtn.addEventListener('click', () => {
        count = 0;
        display.textContent = count;
    });
}

// محتوى الأذكار 🌟 تم تحديثها لاستخدام ADHKAR_DATA
function renderAdhkar() {
    const adhkarContent = document.getElementById('adhkar-content');
    
    const adhkarHtml = `
        <h3 style="color: var(--primary-color); margin-bottom: 15px;">أذكار الصباح ☀️</h3>
        ${ADHKAR_DATA.morning.map(dhikr => 
            `<div class="dhikr-card">
                <p class="dhikr-text">${dhikr.text}</p>
                <p class="dhikr-count">العدد: ${dhikr.count}</p>
            </div>`
        ).join('')}

        <hr style="margin: 30px 0; border-color: var(--border-color);">

        <h3 style="color: var(--primary-color); margin-bottom: 15px;">أذكار المساء 🌙</h3>
        ${ADHKAR_DATA.evening.map(dhikr => 
            `<div class="dhikr-card">
                <p class="dhikr-text">${dhikr.text}</p>
                <p class="dhikr-count">العدد: ${dhikr.count}</p>
            </div>`
        ).join('')}
    `;
    
    adhkarContent.innerHTML = adhkarHtml;
}

// **********************************
// 8. بدء التطبيق
// **********************************
document.addEventListener('DOMContentLoaded', () => {
    initializeTheme(); 
    const startPage = parseInt(localStorage.getItem('lastReadPage')) || 1; 
    displayPageImage(startPage); 
    initializeTasbeeh();
    renderAdhkar();
    showContentScreen('mus-haf'); 
    
    // إخفاء القائمة عند البدء وعرض المصحف
    navigationArea.classList.add('hidden');
    quranViewElement.classList.remove('hidden');
});