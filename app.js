// ===== Profile Data - Based on WhatsApp Chat Analysis =====
const profiles = [
    {
        id: 1,
        name: "שלום פריד",
        aliases: ["שלום", "פריד", "שלום פ"],
        nickname: "גאון הטכנולוגיה 🤖",
        role: "מומחה AI ובינה מלאכותית, המשתף הפורה ביותר בקבוצה",
        avatar: "💻",
        messageCount: 380,
        mediaCount: 85,
        linkCount: 45,
        traits: [
            "מומחה ב-AI ובינה מלאכותית - עובד עם Claude, Gemini ו-GPT",
            "משתף יצירות AI מרהיבות - תמונות, סרטונים ותמלולים",
            "עובר תקופה אישית מאתגרת עם ניכור הורי ומחפש תמיכה",
            "מספר סיפורים אישיים ופתוח לגבי המצב שלו",
            "יוזם פרויקטים יצירתיים - סרטונים על אמשינוב וחסידות",
            "מחפש עבודה ונמצא בתהליך שיקום כלכלי",
            "נלהב מטכנולוגיה חדשה ומשתף גילויים עם הקבוצה",
            "חולה על ארי סמט ומשתף שירים שלו"
        ],
        quote: "קלאוד התקדמו עם אופוס 4.1",
        topics: ["AI", "טכנולוגיה", "ניכור הורי", "יצירות דיגיטליות", "אמשינוב"]
    },
    {
        id: 2,
        name: "חיים בוים",
        aliases: ["חיים", "בוים", "חיים ב"],
        nickname: "מפיץ החדשות 📰",
        role: "משתף חדשות, מנהגי חסידויות ותוכן מעניין",
        avatar: "📢",
        messageCount: 145,
        mediaCount: 35,
        linkCount: 15,
        traits: [
            "משתף חדשות פוליטיות ועדכונים מהעולם החרדי",
            "מביא מידע על מנהגי חסידויות שונות",
            "מעורב בדיונים על גור וסכסוכים פנימיים",
            "שואל שאלות ומעורר דיונים בקבוצה",
            "מציע טרמפים ועוזר לאנשים להגיע למקומות",
            "מגיב בהומור ובחכמה לסיטואציות",
            "מעודכן תמיד במה שקורה בשטח",
            "דואג לחברי הקבוצה ושואל לשלומם"
        ],
        quote: "המדינה החדשה שמצטרפת להסכמי אברהם: ניו יורק",
        topics: ["חדשות", "פוליטיקה", "גור", "מנהגי חסידויות", "עזרה הדדית"]
    },
    {
        id: 3,
        name: "מאיר פלדמן",
        aliases: ["מאיר", "פלדמן", "מאיר פ"],
        nickname: "האבא הגאה 👨‍👧",
        role: "חבר קרוב ותומך, בנו של רב בקהילה",
        avatar: "🎉",
        messageCount: 130,
        mediaCount: 25,
        linkCount: 20,
        traits: [
            "תומך בחברים בזמנים קשים - 'העם אתך'",
            "משתף שמחות ומזל טובות - אירוסין של בנו ישעי'",
            "בנו של רב ידוע בקהילה - מגן על אביו",
            "הומוריסטי ומצחיק - 'מעניין לי את ה🥚 השמאלית'",
            "מעורב בדיונים ומביע דעות",
            "משתף סרטונים וקישורים מעניינים",
            "דואג לחברים ושואל לשלומם",
            "מגיב במהירות להודעות בקבוצה"
        ],
        quote: "זה עובר לידי, בכלל לא נכנס לאוזן",
        topics: ["משפחה", "שמחות", "תמיכה בחברים", "הומור"]
    },
    {
        id: 4,
        name: "ראובן מוזסון",
        aliases: ["ראובן", "מוזסון", "ראובן מ"],
        nickname: "האיש המעשי 🔧",
        role: "מספק מידע מעשי ועוזר לכולם",
        avatar: "🗺️",
        messageCount: 95,
        mediaCount: 15,
        linkCount: 12,
        traits: [
            "מספק מידע מעשי - כתובות, טלפונים, הוראות הגעה",
            "עוזר לאנשים למצוא טרמפים ודרכים",
            "שואל שאלות כדי להבין מצבים",
            "מברך מזל טובות ומשתתף בשמחות",
            "יודע לעזור עם בעיות טכניות",
            "מציע פתרונות יצירתיים לבעיות",
            "מעיר הערות חכמות על נושאים",
            "מקושר לעניינים קהילתיים"
        ],
        quote: "לא גבורה של יהודי גבורה של ערבי",
        topics: ["עזרה מעשית", "לוגיסטיקה", "שאלות", "קהילה"]
    },
    {
        id: 5,
        name: "שמוליק קליין",
        aliases: ["שמוליק", "קליין", "שמוליק ק"],
        nickname: "המנתח הפוליטי 🎯",
        role: "מנתח חדשות ופוליטיקה, עוקב אחרי משפטי נתניהו",
        avatar: "⚖️",
        messageCount: 75,
        mediaCount: 20,
        linkCount: 10,
        traits: [
            "עוקב בצמוד אחרי משפטי נתניהו והפצ\"רית",
            "מנתח את המצב הפוליטי - 'הממשלה מפסיקה לתת לבג\"ץ את הלחי השנייה'",
            "משתף סקרים והצבעות בקבוצה",
            "מתעניין בביטחון ואירועים ביטחוניים",
            "מספר על משפחתו - בת דודה שנפלה באוסטריה",
            "מבקש תפילות עבור קרובים",
            "הומוריסטי - 'על עבירות שבין אדם לחבירו אין צורך לבקש סליחה'",
            "משתף תמונות מטיולים באוסטריה"
        ],
        quote: "אני מרותק. השופטים צולבים את נציג היועמ\"שית",
        topics: ["פוליטיקה", "משפט", "ביטחון", "משפחה"]
    },
    {
        id: 6,
        name: "דוב זיגלמן",
        aliases: ["דוב", "זיגלמן", "דובי ז"],
        nickname: "המעדכן המהיר ⚡",
        role: "משתף עדכונים וחדשות בזמן אמת",
        avatar: "📲",
        messageCount: 70,
        mediaCount: 15,
        linkCount: 8,
        traits: [
            "משתף חדשות מקבוצות שונות - 'הצללים', 'חדשות מהרגע'",
            "מעדכן על אירועים בזמן אמת",
            "שואל שאלות להבהרה - 'מי זה?', 'מנין לך?'",
            "מספק מידע על נח עקשטיין וארכיון שלו",
            "מציע לולבים ועוזר לחגים",
            "מגיב בהומור - 'חחח הנגרר לא מחובר לרכב בכלל'",
            "יודע מידע פנימי על אנשים",
            "מעדכן על מצב הסוללה בשטיבל"
        ],
        quote: "דרמטי! היועמשית מורידה את עצמה מהחקירה",
        topics: ["חדשות", "עדכונים", "נח עקשטיין", "לולבים"]
    },
    {
        id: 7,
        name: "שמשי פוקס",
        aliases: ["שמשי", "פוקס", "שמשי פ"],
        nickname: "מחפש הוילות 🏠",
        role: "מחפש מידע על מצלמות, וילות ושירותים",
        avatar: "📋",
        messageCount: 45,
        mediaCount: 5,
        linkCount: 3,
        traits: [
            "משתף רשימות מצלמות חניה בבני ברק",
            "מחפש וילות לשבת בצפון - 10 חדרים עם ג'קוזי",
            "שואל על קפלן 144 והחלפן כספים",
            "מעיר שגם שנים שאין מכות באמשינוב",
            "מבקש המלצות - 'מישהו מכיר תימר וילה?'",
            "משתף מדבקות ואימוג'ים",
            "מעודכן במה שקורה בקהילה"
        ],
        quote: "מישהו מכיר תימר וילה 10 מיטות למשפחה?",
        topics: ["מצלמות", "וילות", "שירותים", "קפלן"]
    },
    {
        id: 8,
        name: "דובי בר נתן",
        aliases: ["דובי", "בר נתן", "דובי ב"],
        nickname: "מגן המשפחה 🛡️",
        role: "תומך בחברים ומגיב בחכמה",
        avatar: "👊",
        messageCount: 40,
        mediaCount: 8,
        linkCount: 2,
        traits: [
            "מספר על שבת בחוקותי ושהמכות זה בקושי טיפות",
            "שואל לשלום הילדים - 'הילדים שלי כבר מתגעגעים'",
            "מגיב בהומור על נושאים טכנולוגיים",
            "מבקש תוכנות ועוזר עם בעיות",
            "מתעניין בוילות ונסיעות משפחתיות",
            "משתף מידע על ויזניץ והגמ\"ח",
            "מגיב על סיפורים ומבקש פרטים נוספים"
        ],
        quote: "אם אתה משתמש בטלפון בנהיגה אז בכל מקרה כבר ויתרת על הכל",
        topics: ["משפחה", "טכנולוגיה", "ויזניץ", "וילות"]
    },
    {
        id: 9,
        name: "אברימי יעקובוביץ",
        aliases: ["אברימי", "יעקובוביץ", "אברימי י"],
        nickname: "מייסד הקבוצה 👑",
        role: "יצר את הקבוצה ומנהל פעילויות גיבוש",
        avatar: "⭐",
        messageCount: 35,
        mediaCount: 6,
        linkCount: 2,
        traits: [
            "יצר את הקבוצה 'החתיכים' ב-11.10.2023",
            "מנחה פעילויות גיבוש - 'ילדים לא לריב'",
            "מעדכן על בריתות - 'מי ביום הראשון?'",
            "יודע מידע על ארכיון נח עקשטיין",
            "משתף סרטונים ותמונות",
            "מגיב בקצרה - 'ענק', 'מזל טוב'",
            "נמצא ביוטיוב - ערוץ אברימי יעקובוביץ",
            "מסכים שהיעקובוביץ'ים הם ביישנים"
        ],
        quote: "ילדים לא לריב",
        topics: ["גיבוש", "בריתות", "יוטיוב", "ניהול קבוצה"]
    },
    {
        id: 10,
        name: "שמואל ברים",
        aliases: ["שמואל", "ברים", "שמואל ב"],
        nickname: "המעצב היצירתי 🎨",
        role: "יוצר מדבקות ועיצובים לקבוצה",
        avatar: "✏️",
        messageCount: 30,
        mediaCount: 12,
        linkCount: 1,
        traits: [
            "מעצב מדבקות לקבוצה - 'מהמדבקה הבאה אני גובה תשלום'",
            "יוצר גרפיקות ועיצובים מהירים",
            "מזדהה עם סיפורי ניכור הורי - 'מזדהה עם כל מילה מניסיון'",
            "מספר שמשפחתו במקור היתה 'קלאקסברוין'",
            "מעיר הערות על תמלולים ואיכות",
            "מבין בהיסטוריה של החסידויות",
            "משתף תמונות ויצירות"
        ],
        quote: "מהמדבקה הבאה אני גובה תשלום 🤓",
        topics: ["עיצוב", "מדבקות", "ניכור הורי", "היסטוריה"]
    },
    {
        id: 11,
        name: "שימעלה בן שם",
        aliases: ["שימעלה", "בן שם", "שימעלה ב"],
        nickname: "יודע הפרטים 🔍",
        role: "מספק מידע מפורט על אנשים ואירועים",
        avatar: "🧠",
        messageCount: 25,
        mediaCount: 5,
        linkCount: 2,
        traits: [
            "יודע פרטים על אנשים - 'זה הבן מעליו בחור מאוד רציני'",
            "מספר סיפורים מפורטים - הברית של משה רוזן",
            "משתף דעות פוליטיות - 'ביבי הזה ממזר גדול'",
            "שואל שאלות - 'מישהו יכול להסביר לי איך מסריטים מסך?'",
            "מעדכן על החלטות ממשלתיות",
            "משתף תמונות ומדיה",
            "יודע על ישיבות ולימודים"
        ],
        quote: "ביבי הזה ממזר גדול",
        topics: ["מידע", "פוליטיקה", "ישיבות", "משפחות"]
    },
    {
        id: 12,
        name: "+972 55-994-2871",
        aliases: ["0559942871", "055-994-2871", "972559942871"],
        nickname: "המנתח בAI 🤖",
        role: "מנתח תמונות וסרטונים עם בינה מלאכותית",
        avatar: "🔬",
        messageCount: 22,
        mediaCount: 3,
        linkCount: 1,
        traits: [
            "מנתח תמונות עם AI - זיהוי מכשירי טלפון",
            "מעיר הערות חכמות - 'הנגרר לא מחובר במקום'",
            "מברך ומאחל - 'תודה שאתה מעדכן שיש באמשינוב אנשים אכפתיים'",
            "שואל על אחוזי סטייה בסקרים",
            "מציע רעיונות - 'תעשה מזה סרטון'",
            "מעודכן בטכנולוגיה ו-AI"
        ],
        quote: "הנגרר לא מחובר לרכב בכלל",
        topics: ["AI", "ניתוח", "טכנולוגיה", "ברכות"]
    },
    {
        id: 13,
        name: "+972 53-331-4118",
        aliases: ["0533314118", "053-331-4118", "972533314118"],
        nickname: "השואל הסקרן ❓",
        role: "שואל שאלות ומתעניין בפרטים",
        avatar: "🤔",
        messageCount: 20,
        mediaCount: 4,
        linkCount: 0,
        traits: [
            "שואל שאלות - 'על מה?', 'בת כמה?', 'תמצתו במילה אחת'",
            "משתף תמונות מאירועים",
            "מעיר הערות קצרות - 'כבוד', 'וואו'",
            "הומוריסטי - 'הפצרית כולה ליל טבילה מה הדרמה'",
            "משתף מידע על רכב ומסריטות"
        ],
        quote: "הפצרית כולה ליל טבילה מה הדרמה",
        topics: ["שאלות", "אירועים", "הומור"]
    },
    {
        id: 14,
        name: "+972 53-350-8584",
        aliases: ["0533508584", "053-350-8584", "972533508584"],
        nickname: "השואל המעשי 📞",
        role: "שואל שאלות מעשיות",
        avatar: "📱",
        messageCount: 8,
        mediaCount: 0,
        linkCount: 0,
        traits: [
            "שואל על מנחה בשטיבל",
            "מבקש מספרי טלפון",
            "שואל על אתרוגים ולולבים",
            "פעיל בקבוצה"
        ],
        quote: "מתי מנחה בשטיבל?",
        topics: ["תפילות", "מספרים", "לולבים"]
    },
    {
        id: 15,
        name: "+972 58-666-4413",
        aliases: ["0586664413", "058-666-4413", "972586664413"],
        nickname: "המעודד 💪",
        role: "מעודד ומשתף קישורים",
        avatar: "🙌",
        messageCount: 10,
        mediaCount: 0,
        linkCount: 3,
        traits: [
            "משתף קישורים ליוטיוב",
            "מודיע על כבוד - '@אברימי יעקובוביץ כבוד!'",
            "מחפש עזרה עם פנצ'ר",
            "מגיב בהתלהבות"
        ],
        quote: "@אברימי יעקובוביץ כבוד!",
        topics: ["יוטיוב", "עידוד", "עזרה"]
    }
];

// ===== Fuzzy Matching Functions =====

function levenshteinDistance(str1, str2) {
    const m = str1.length;
    const n = str2.length;
    const dp = Array(m + 1).fill(null).map(() => Array(n + 1).fill(0));
    
    for (let i = 0; i <= m; i++) dp[i][0] = i;
    for (let j = 0; j <= n; j++) dp[0][j] = j;
    
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + 1);
            }
        }
    }
    return dp[m][n];
}

function calculateSimilarity(input, target) {
    const inputLower = input.trim().toLowerCase();
    const targetLower = target.trim().toLowerCase();
    
    if (inputLower === targetLower) return 1;
    if (targetLower.includes(inputLower) || inputLower.includes(targetLower)) return 0.9;
    
    const minLen = Math.min(inputLower.length, targetLower.length);
    let matchingPrefix = 0;
    for (let i = 0; i < minLen; i++) {
        if (inputLower[i] === targetLower[i]) matchingPrefix++;
        else break;
    }
    if (matchingPrefix >= 3) return 0.7 + (matchingPrefix / targetLower.length) * 0.2;
    
    const distance = levenshteinDistance(inputLower, targetLower);
    const maxLen = Math.max(inputLower.length, targetLower.length);
    return 1 - (distance / maxLen);
}

function normalizePhoneNumber(phone) {
    return phone.replace(/[\s\-\+\(\)]/g, '');
}

function isPhoneNumber(input) {
    const cleaned = input.replace(/[\s\-\+\(\)]/g, '');
    return /^\d{7,15}$/.test(cleaned);
}

function findProfile(input) {
    const cleanInput = input.trim();
    if (!cleanInput) return { match: null, suggestions: [] };
    
    if (isPhoneNumber(cleanInput)) {
        const normalizedInput = normalizePhoneNumber(cleanInput);
        
        for (const profile of profiles) {
            const normalizedName = normalizePhoneNumber(profile.name);
            if (normalizedName.includes(normalizedInput) || normalizedInput.includes(normalizedName.slice(-9))) {
                return { match: profile, suggestions: [] };
            }
            
            for (const alias of profile.aliases) {
                const normalizedAlias = normalizePhoneNumber(alias);
                if (normalizedAlias === normalizedInput || normalizedAlias.includes(normalizedInput) || normalizedInput.includes(normalizedAlias)) {
                    return { match: profile, suggestions: [] };
                }
            }
        }
        
        const phoneProfiles = profiles.filter(p => p.name.startsWith('+'));
        return { match: null, suggestions: phoneProfiles.slice(0, 4) };
    }
    
    let bestMatch = null;
    let bestScore = 0;
    const scores = [];
    
    for (const profile of profiles) {
        let maxScore = calculateSimilarity(cleanInput, profile.name);
        
        for (const alias of profile.aliases) {
            const aliasScore = calculateSimilarity(cleanInput, alias);
            if (aliasScore > maxScore) maxScore = aliasScore;
        }
        
        scores.push({ profile, score: maxScore });
        
        if (maxScore > bestScore) {
            bestScore = maxScore;
            bestMatch = profile;
        }
    }
    
    if (bestScore >= 0.6) return { match: bestMatch, suggestions: [] };
    
    scores.sort((a, b) => b.score - a.score);
    return { match: null, suggestions: scores.slice(0, 4).map(s => s.profile) };
}

// ===== UI Functions =====

const searchForm = document.getElementById('searchForm');
const nameInput = document.getElementById('nameInput');
const resultsSection = document.getElementById('resultsSection');
const profileCard = document.getElementById('profileCard');
const suggestionsCard = document.getElementById('suggestionsCard');
const quickButtons = document.getElementById('quickButtons');
const profilesGrid = document.getElementById('profilesGrid');
const allProfilesSection = document.getElementById('allProfiles');

// Initialize quick access buttons
function initQuickButtons() {
    const topProfiles = profiles.slice(0, 8);
    quickButtons.innerHTML = topProfiles.map(p => 
        `<button class="quick-btn" data-name="${p.name}">${p.name.startsWith('+') ? p.nickname.split(' ')[0] : p.name.split(' ')[0]}</button>`
    ).join('');
    
    quickButtons.querySelectorAll('.quick-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const name = btn.dataset.name;
            nameInput.value = name;
            searchForm.dispatchEvent(new Event('submit'));
        });
    });
}

// Initialize all profiles grid
function initProfilesGrid() {
    profilesGrid.innerHTML = profiles.map(p => `
        <div class="profile-mini-card" data-id="${p.id}">
            <div class="profile-mini-header">
                <div class="profile-mini-avatar">${p.avatar}</div>
                <div class="profile-mini-info">
                    <div class="profile-mini-name">${p.name}</div>
                    <div class="profile-mini-nickname">${p.nickname}</div>
                </div>
            </div>
            <div class="profile-mini-stats">
                <span>💬 ${p.messageCount}</span>
                <span>📷 ${p.mediaCount}</span>
            </div>
        </div>
    `).join('');
    
    profilesGrid.querySelectorAll('.profile-mini-card').forEach(card => {
        card.addEventListener('click', () => {
            const id = parseInt(card.dataset.id);
            const profile = profiles.find(p => p.id === id);
            if (profile) {
                displayProfile(profile);
                nameInput.value = profile.name;
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
    });
}

function displayProfile(profile) {
    document.getElementById('profileAvatar').textContent = profile.avatar;
    document.getElementById('profileName').textContent = profile.name;
    document.getElementById('profileNickname').textContent = profile.nickname;
    document.getElementById('profileRole').textContent = profile.role;
    document.getElementById('messageCount').textContent = profile.messageCount;
    document.getElementById('mediaCount').textContent = profile.mediaCount;
    document.getElementById('linkCount').textContent = profile.linkCount;
    
    const traitsList = document.getElementById('profileTraits');
    traitsList.innerHTML = profile.traits.map(trait => `<li>${trait}</li>`).join('');
    
    document.getElementById('profileQuote').textContent = profile.quote;
    
    const topicsList = document.getElementById('profileTopics');
    topicsList.innerHTML = profile.topics.map(topic => `<span class="topic-tag">${topic}</span>`).join('');
    
    resultsSection.classList.remove('hidden');
    profileCard.classList.remove('hidden');
    suggestionsCard.classList.add('hidden');
    allProfilesSection.style.display = 'none';
    
    profileCard.style.animation = 'none';
    profileCard.offsetHeight;
    profileCard.style.animation = 'cardReveal 0.6s ease-out';
}

function displaySuggestions(suggestions) {
    const suggestionsList = document.getElementById('suggestionsList');
    suggestionsList.innerHTML = suggestions.map(profile => `
        <button class="suggestion-btn" data-id="${profile.id}">
            ${profile.name}
            <span class="suggestion-nickname">${profile.nickname}</span>
        </button>
    `).join('');
    
    suggestionsList.querySelectorAll('.suggestion-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = parseInt(btn.dataset.id);
            const profile = profiles.find(p => p.id === id);
            if (profile) {
                displayProfile(profile);
                nameInput.value = profile.name;
            }
        });
    });
    
    resultsSection.classList.remove('hidden');
    suggestionsCard.classList.remove('hidden');
    profileCard.classList.add('hidden');
    
    suggestionsCard.style.animation = 'none';
    suggestionsCard.offsetHeight;
    suggestionsCard.style.animation = 'cardReveal 0.6s ease-out';
}

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const input = nameInput.value.trim();
    if (!input) return;
    
    const result = findProfile(input);
    
    if (result.match) {
        displayProfile(result.match);
    } else if (result.suggestions.length > 0) {
        displaySuggestions(result.suggestions);
    } else {
        displaySuggestions(profiles.slice(0, 4));
    }
});

nameInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        searchForm.dispatchEvent(new Event('submit'));
    }
});

// Reset to show all profiles
nameInput.addEventListener('focus', () => {
    if (nameInput.value === '') {
        allProfilesSection.style.display = 'block';
        resultsSection.classList.add('hidden');
    }
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initQuickButtons();
    initProfilesGrid();
});
