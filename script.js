/* =========================================================
   School Hub  ·  Shkolla 7 Marsi  ·  grades 4–9
   ========================================================= */

const SCHOOL_NAME = "Shkolla 7 Marsi";

/* ─────────────────────────────────────────────────────────
   TRANSLATIONS
   "I know crazy right?" is always English — never translated.
───────────────────────────────────────────────────────── */
const TRANSLATIONS = {
  en: {
    madeFor:              'Made for "Shkolla 7 Marsi"',
    continue:             "Continue",
    whoAreYou:            "Who are you?",
    chooseAccountType:    "Choose your account type to continue.",
    rolePupil:            "Pupil",
    rolePupilDesc:        "View news, timetable, events, and nature. Send an idea to the school.",
    roleTeacher:          "Teacher",
    roleTeacherDesc:      "Manage your class. You need the teacher access code.",
    back:                 "Back",
    signUp:               "Sign Up",
    logIn:                "Log In",
    createPupilAccount:   "Create a Pupil Account",
    pupilSignupLead:      "Enter the access code your teacher gave you, then set your own password.",
    createTeacherAccount: "Create a Teacher Account",
    teacherSignupLead:    "Enter the access code the school office gave you, then set your own password.",
    firstName:            "First name",
    lastName:             "Last name",
    grade:                "Grade",
    class:                "Class",
    chooseGrade:          "Choose grade",
    chooseClass:          "Choose class",
    accessCode:           "Access Code",
    choosePassword:       "Choose a password",
    createAccount:        "Create account",
    pupilLogIn:           "Pupil Log In",
    pupilLoginLead:       "Select your grade and class, then enter your password.",
    teacherLogIn:         "Teacher Log In",
    teacherLoginLead:     "Select your grade and class, then enter your password.",
    password:             "Password",
    enter:                "Enter →",
    announcements:        "Announcements",
    announcementsLead:    "Important school news for everyone.",
    postAnnouncement:     "Post an announcement",
    timetable:            "Timetable",
    timetableLead:        "Your weekly class plan.",
    scheduleHint:         "Tap a cell, type the lesson, then press Save.",
    saveTimetable:        "Save timetable",
    events:               "Events",
    eventsLead:           "What is coming up at Shkolla 7 Marsi.",
    addEvent:             "Add an event",
    eventName:            "Event name",
    when:                 "When",
    details:              "Details",
    nature:               "Nature",
    natureLead:           "Plants, animals, and our school garden.",
    addNatureNote:        "Add a nature note",
    ideas:                "Ideas",
    ideasLeadPupil:       "Send a kind idea. Other pupils will not see it.",
    ideasLeadTeacher:     "Read pupil ideas. Mark them as read when done.",
    sendIdea:             "Send an idea",
    yourIdea:             "Your idea",
    sendToSchool:         "Send to the school",
    alerts:               "Alerts",
    alertsLead:           "Important messages from teachers.",
    sendAlert:            "Send an alert to pupils",
    message:              "Message",
    addImage:             "Add a picture (optional)",
    addFile:              "Add a file (optional)",
    title:                "Title",
    text:                 "Text",
    post:                 "Post",
    add:                  "Add",
    send:                 "Send",
    cancel:               "Cancel",
    save:                 "Save",
    remove:               "Remove",
    markRead:             "Mark as read",
    about:                "About",
    whatThisAppIsFor:     "What this app is for",
    whatThisAppIsNot:     "What this app is not",
    aboutItem1:           "School announcements",
    aboutItem2:           "Class timetable",
    aboutItem3:           "Upcoming events",
    aboutItem4:           "Nature and educational notes",
    aboutItem5:           "Pupil ideas for the school",
    notItem1:             "No grades",
    notItem2:             "No homework sharing",
    notItem3:             "No pupil-to-pupil messaging",
    notItem4:             "No pupil rankings",
    madeBy:               "Made by Aron Dervishi",
    footerNote:           "Be kind. Stay informed. Have fun.",
    pupilOfMonth:         "Pupil of the Month",
    setPupilOfMonth:      "Set Pupil of the Month",
    pupilName:            "Pupil name",
    gradeAndClass:        "Grade and class (e.g. 7B)",
    reason:               "Reason",
    schoolClubs:          "School Clubs",
    schoolClubsLead:      "Find a club you like, make friends, and try something new.",
    home:                 "Home",
    news:                 "News",
    homeText_pupil:       "Look at news, your timetable, events, and nature. You can send an idea to the school.",
    homeText_teacher:     "Share school information. No grades, no pupil chats, no rankings.",
    postUpdates:          "Post updates",
    schoolUpdates:        "School updates",
    editLessons:          "Edit lessons",
    todaysLessons:        "Today's lessons",
    addEvents:            "Add events",
    whatIsComing:         "What is coming",
    addNotes:             "Add notes",
    learnOutside:         "Learn outside",
    seeAnnouncements:     "See announcements",
    openNature:           "Open Nature",
    logOut:               "Log out",
    nothingYet:           "Nothing here yet.",
    emptyAnnouncements:   "No announcements yet.",
    emptyEvents:          "No events yet.",
    emptyNature:          "No nature content yet.",
    emptyNotes:           "No alerts yet.",
    emptyIdeas:           "No suggestions yet.",
    emptySchedule:        "No schedule available yet.",
    emptyClubs:           "No clubs have been added yet.",
    pupilChip:            "Pupil",
    teacherChip:          "Teacher",
    officeChip:           "Office",
    classLabel:           "Class",
    accountExists:        "An account already exists for this class. Please log in instead.",
    wrongPassword:        "Password is not correct.",
    noAccount:            "No account found for this class. Please sign up first.",
    codeWrong_pupil:      "That access code is not correct for this class. Ask your teacher.",
    codeWrong_teacher:    "That access code is not correct. Ask the school office.",
    codeIsStudent:        "That is a pupil code. Teachers need a different code.",
    fillAll:              "Please fill in all fields.",
    selectGradeClass:     "Please select both a grade and a class.",
    accountPendingAlready:"A sign-up for this class is already waiting for teacher approval.",
    pendingTitle:         "Waiting for Approval",
    pendingMsg:           "Your account is waiting for teacher approval. Come back soon!",
  },
  sq: {
    madeFor:              'Bërë për "Shkolla 7 Marsi"',
    continue:             "Vazhdo",
    whoAreYou:            "Kush jeni?",
    chooseAccountType:    "Zgjidhni llojin e llogarisë tuaj.",
    rolePupil:            "Nxënës",
    rolePupilDesc:        "Shiko lajmet, orarin, ngjarjet dhe natyrën. Dërgo një ide.",
    roleTeacher:          "Mësues",
    roleTeacherDesc:      "Menaxhoni klasën tuaj. Keni nevojë për kodin e mësuesit.",
    back:                 "Kthehu",
    signUp:               "Regjistrohu",
    logIn:                "Hyr",
    createPupilAccount:   "Krijo Llogari Nxënësi",
    pupilSignupLead:      "Shkruaj kodin që të dha mësuesi, pastaj vendos fjalëkalimin tënd.",
    createTeacherAccount: "Krijo Llogari Mësuesi",
    teacherSignupLead:    "Shkruaj kodin nga zyra e shkollës, pastaj vendos fjalëkalimin tënd.",
    firstName:            "Emri",
    lastName:             "Mbiemri",
    grade:                "Klasa (numri)",
    class:                "Klasa (shkronja)",
    chooseGrade:          "Zgjidh klasën",
    chooseClass:          "Zgjidh shkronjën",
    accessCode:           "Kodi i hyrjes",
    choosePassword:       "Vendos një fjalëkalim",
    createAccount:        "Krijo llogari",
    pupilLogIn:           "Hyrje Nxënësi",
    pupilLoginLead:       "Zgjidh klasën dhe shkruaj fjalëkalimin.",
    teacherLogIn:         "Hyrje Mësuesi",
    teacherLoginLead:     "Zgjidh klasën dhe shkruaj fjalëkalimin.",
    password:             "Fjalëkalimi",
    enter:                "Hyr →",
    announcements:        "Njoftime",
    announcementsLead:    "Lajme të rëndësishme nga shkolla.",
    postAnnouncement:     "Posto një njoftim",
    timetable:            "Orari",
    timetableLead:        "Plani javor i klasës suaj.",
    scheduleHint:         "Klikoni një qelizë, shkruani mësimin, pastaj ruani.",
    saveTimetable:        "Ruaj orarin",
    events:               "Ngjarje",
    eventsLead:           "Çfarë po vjen në Shkolla 7 Marsi.",
    addEvent:             "Shto ngjarje",
    eventName:            "Emri i ngjarjes",
    when:                 "Kur",
    details:              "Detaje",
    nature:               "Natyra",
    natureLead:           "Bimë, kafshë dhe kopshti i shkollës.",
    addNatureNote:        "Shto një shënim natyre",
    ideas:                "Ide",
    ideasLeadPupil:       "Dërgo një ide. Nxënësit e tjerë nuk do ta shohin.",
    ideasLeadTeacher:     "Lexo idetë e nxënësve.",
    sendIdea:             "Dërgo një ide",
    yourIdea:             "Ideja jote",
    sendToSchool:         "Dërgo në shkollë",
    alerts:               "Sinjalizime",
    alertsLead:           "Mesazhe të rëndësishme nga mësuesit.",
    sendAlert:            "Dërgo sinjalizim",
    message:              "Mesazh",
    addImage:             "Shto foto (opsionale)",
    addFile:              "Shto skedar (opsionale)",
    title:                "Titulli",
    text:                 "Teksti",
    post:                 "Posto",
    add:                  "Shto",
    send:                 "Dërgo",
    cancel:               "Anulo",
    save:                 "Ruaj",
    remove:               "Hiq",
    markRead:             "Shëno si lexuar",
    about:                "Rreth",
    whatThisAppIsFor:     "Për çfarë është kjo aplikacion",
    whatThisAppIsNot:     "Çfarë nuk është",
    aboutItem1:           "Njoftime shkollore",
    aboutItem2:           "Orari i klasës",
    aboutItem3:           "Ngjarjet e ardhshme",
    aboutItem4:           "Shënime natyre",
    aboutItem5:           "Idetë e nxënësve",
    notItem1:             "Pa nota",
    notItem2:             "Pa detyra shtëpie",
    notItem3:             "Pa mesazhe nxënës-nxënës",
    notItem4:             "Pa renditje nxënësish",
    madeBy:               "Bërë nga Aron Dervishi",
    footerNote:           "Ji i sjellshëm. Qëndro i informuar. Argëtohu.",
    pupilOfMonth:         "Nxënësi i Muajit",
    setPupilOfMonth:      "Cakto Nxënësin e Muajit",
    pupilName:            "Emri i nxënësit",
    gradeAndClass:        "Klasa (p.sh. 7B)",
    reason:               "Arsyeja",
    schoolClubs:          "Klubet Shkollore",
    schoolClubsLead:      "Gjej një klub, bëj miq dhe provo diçka të re.",
    home:                 "Kreu",
    news:                 "Lajme",
    homeText_pupil:       "Shiko lajmet, orarin, ngjarjet dhe natyrën. Dërgo një ide.",
    homeText_teacher:     "Ndaj informacion. Pa nota, pa biseda, pa renditje.",
    postUpdates:          "Posto përditësime",
    schoolUpdates:        "Lajme shkollore",
    editLessons:          "Ndrysho mësimet",
    todaysLessons:        "Mësimet e sotme",
    addEvents:            "Shto ngjarje",
    whatIsComing:         "Çfarë po vjen",
    addNotes:             "Shto shënime",
    learnOutside:         "Mëso jashtë",
    seeAnnouncements:     "Shiko njoftime",
    openNature:           "Hap Natyrën",
    logOut:               "Dil",
    nothingYet:           "Asgjë këtu akoma.",
    emptyAnnouncements:   "Nuk ka njoftime ende.",
    emptyEvents:          "Nuk ka ngjarje ende.",
    emptyNature:          "Nuk ka përmbajtje natyre ende.",
    emptyNotes:           "Nuk ka alarme ende.",
    emptyIdeas:           "Nuk ka sugjerime ende.",
    emptySchedule:        "Nuk ka orar ende.",
    emptyClubs:           "Nuk ka klube të shtuara ende.",
    pupilChip:            "Nxënës",
    teacherChip:          "Mësues",
    officeChip:           "Zyrë",
    classLabel:           "Klasa",
    accountExists:        "Ka tashmë një llogari për këtë klasë. Ju lutemi hyni.",
    wrongPassword:        "Fjalëkalimi nuk është i saktë.",
    noAccount:            "Nuk u gjet llogari. Ju lutemi regjistrohuni fillimisht.",
    codeWrong_pupil:      "Kodi nuk është i saktë. Pyete mësuesin.",
    codeWrong_teacher:    "Kodi nuk është i saktë. Pyete zyrën e shkollës.",
    codeIsStudent:        "Ai është kodi i nxënësit. Mësuesit kanë kod tjetër.",
    fillAll:              "Ju lutemi plotësoni të gjitha fushat.",
    selectGradeClass:     "Ju lutemi zgjidhni klasën dhe shkronjën.",
  },
  fr: {
    madeFor:              'Fait pour "Shkolla 7 Marsi"',
    continue:             "Continuer",
    whoAreYou:            "Qui êtes-vous ?",
    chooseAccountType:    "Choisissez votre type de compte.",
    rolePupil:            "Élève",
    rolePupilDesc:        "Voir les actualités, l'emploi du temps, les événements et la nature.",
    roleTeacher:          "Enseignant",
    roleTeacherDesc:      "Gérez votre classe. Vous avez besoin du code d'accès enseignant.",
    back:                 "Retour",
    signUp:               "S'inscrire",
    logIn:                "Se connecter",
    createPupilAccount:   "Créer un compte élève",
    pupilSignupLead:      "Entrez le code donné par votre enseignant, puis choisissez un mot de passe.",
    createTeacherAccount: "Créer un compte enseignant",
    teacherSignupLead:    "Entrez le code du bureau de l'école, puis choisissez un mot de passe.",
    firstName:            "Prénom",
    lastName:             "Nom de famille",
    grade:                "Niveau",
    class:                "Classe",
    chooseGrade:          "Choisir le niveau",
    chooseClass:          "Choisir la classe",
    accessCode:           "Code d'accès",
    choosePassword:       "Choisir un mot de passe",
    createAccount:        "Créer le compte",
    pupilLogIn:           "Connexion Élève",
    pupilLoginLead:       "Sélectionnez votre niveau et classe, puis entrez votre mot de passe.",
    teacherLogIn:         "Connexion Enseignant",
    teacherLoginLead:     "Sélectionnez votre niveau et classe, puis entrez votre mot de passe.",
    password:             "Mot de passe",
    enter:                "Entrer →",
    announcements:        "Annonces",
    announcementsLead:    "Actualités importantes pour tout le monde.",
    postAnnouncement:     "Publier une annonce",
    timetable:            "Emploi du temps",
    timetableLead:        "Le plan hebdomadaire de votre classe.",
    scheduleHint:         "Tapez dans une case, entrez la matière, puis enregistrez.",
    saveTimetable:        "Enregistrer l'emploi du temps",
    events:               "Événements",
    eventsLead:           "Ce qui arrive à Shkolla 7 Marsi.",
    addEvent:             "Ajouter un événement",
    eventName:            "Nom de l'événement",
    when:                 "Quand",
    details:              "Détails",
    nature:               "Nature",
    natureLead:           "Plantes, animaux et notre jardin scolaire.",
    addNatureNote:        "Ajouter une note de nature",
    ideas:                "Idées",
    ideasLeadPupil:       "Envoyez une idée. Les autres élèves ne la verront pas.",
    ideasLeadTeacher:     "Lire les idées des élèves.",
    sendIdea:             "Envoyer une idée",
    yourIdea:             "Votre idée",
    sendToSchool:         "Envoyer à l'école",
    alerts:               "Alertes",
    alertsLead:           "Messages importants des enseignants.",
    sendAlert:            "Envoyer une alerte aux élèves",
    message:              "Message",
    addImage:             "Ajouter une image (facultatif)",
    addFile:              "Ajouter un fichier (facultatif)",
    title:                "Titre",
    text:                 "Texte",
    post:                 "Publier",
    add:                  "Ajouter",
    send:                 "Envoyer",
    cancel:               "Annuler",
    save:                 "Enregistrer",
    remove:               "Supprimer",
    markRead:             "Marquer comme lu",
    about:                "À propos",
    whatThisAppIsFor:     "À quoi sert cette application",
    whatThisAppIsNot:     "Ce que cette application n'est pas",
    aboutItem1:           "Annonces scolaires",
    aboutItem2:           "Emploi du temps",
    aboutItem3:           "Événements à venir",
    aboutItem4:           "Notes sur la nature",
    aboutItem5:           "Idées des élèves",
    notItem1:             "Pas de notes",
    notItem2:             "Pas de partage de devoirs",
    notItem3:             "Pas de messagerie élève-élève",
    notItem4:             "Pas de classements",
    madeBy:               "Créé par Aron Dervishi",
    footerNote:           "Soyez gentils. Restez informés. Amusez-vous.",
    pupilOfMonth:         "Élève du Mois",
    setPupilOfMonth:      "Définir l'Élève du Mois",
    pupilName:            "Nom de l'élève",
    gradeAndClass:        "Niveau et classe (ex. 7B)",
    reason:               "Raison",
    schoolClubs:          "Clubs Scolaires",
    schoolClubsLead:      "Trouvez un club, faites des amis et essayez quelque chose de nouveau.",
    home:                 "Accueil",
    news:                 "Actualités",
    homeText_pupil:       "Voir les actualités, l'emploi du temps, les événements et la nature.",
    homeText_teacher:     "Partager des informations. Pas de notes, pas de chat, pas de classements.",
    postUpdates:          "Publier des mises à jour",
    schoolUpdates:        "Actualités scolaires",
    editLessons:          "Modifier les cours",
    todaysLessons:        "Cours du jour",
    addEvents:            "Ajouter des événements",
    whatIsComing:         "Ce qui arrive",
    addNotes:             "Ajouter des notes",
    learnOutside:         "Apprendre dehors",
    seeAnnouncements:     "Voir les annonces",
    openNature:           "Ouvrir Nature",
    logOut:               "Déconnexion",
    nothingYet:           "Rien ici pour l'instant.",
    emptyAnnouncements:   "Aucune annonce pour l'instant.",
    emptyEvents:          "Aucun événement pour l'instant.",
    emptyNature:          "Aucun contenu nature pour l'instant.",
    emptyNotes:           "Aucune alerte pour l'instant.",
    emptyIdeas:           "Aucune suggestion pour l'instant.",
    emptySchedule:        "Aucun emploi du temps disponible pour l'instant.",
    emptyClubs:           "Aucun club ajouté pour l'instant.",
    pupilChip:            "Élève",
    teacherChip:          "Enseignant",
    officeChip:           "Bureau",
    classLabel:           "Classe",
    accountExists:        "Un compte existe déjà pour cette classe. Veuillez vous connecter.",
    wrongPassword:        "Mot de passe incorrect.",
    noAccount:            "Aucun compte trouvé. Veuillez vous inscrire.",
    codeWrong_pupil:      "Ce code d'accès est incorrect. Demandez à votre enseignant.",
    codeWrong_teacher:    "Ce code d'accès est incorrect. Demandez au bureau.",
    codeIsStudent:        "C'est un code élève. Les enseignants ont un code différent.",
    fillAll:              "Veuillez remplir tous les champs.",
    selectGradeClass:     "Veuillez sélectionner un niveau et une classe.",
  }
};

/* ─── Active language ─────────────────────────────────────── */
let LANG = localStorage.getItem("schoolhub-lang") || "en";

function t(key) {
  return (TRANSLATIONS[LANG] && TRANSLATIONS[LANG][key]) ||
         (TRANSLATIONS["en"] && TRANSLATIONS["en"][key]) || key;
}

function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    const text = t(key);
    if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
      // inputs use placeholder, not textContent
      el.placeholder = text;
    } else if (el.tagName === "LABEL") {
      // Labels contain child inputs — only update the first text node, not innerHTML
      // Find or create a <span class="label-text"> as the first child
      let span = el.querySelector(".label-text");
      if (!span) {
        span = document.createElement("span");
        span.className = "label-text";
        el.insertBefore(span, el.firstChild);
      }
      span.textContent = text;
    } else {
      el.textContent = text;
    }
  });
}

/* ─── Access Codes  (grades 5–9 only) ───────────────────── */
const CLASS_CODES = {
  "5-A": { student: "STU-5A-8RMP-X4QK-6VNZ-29TL", teacher: "TCH-5A-R3VK-8XQP-M6NZ-41HT" },
  "5-B": { student: "STU-5B-6XQN-9KVR-P3MT-57LW", teacher: "TCH-5B-Q9LM-5WKR-2XVT-P7NC" },
  "5-C": { student: "STU-5C-Q7VL-2RXP-M8KN-64TZ", teacher: "TCH-5C-X4NP-7RQM-K9VL-63TZ" },
  "6-A": { student: "STU-6A-4KNP-8QRM-X7VT-35LZ", teacher: "TCH-6A-K8WV-3XRM-P6QN-94LT" },
  "6-B": { student: "STU-6B-9RXL-5QVK-M2NP-78WT", teacher: "TCH-6B-V5QK-9NXP-R2ML-78ZW" },
  "6-C": { student: "STU-6C-7MPQ-X3RN-V9KL-42ZT", teacher: "TCH-6C-M7RT-4KVL-X8QP-35NZ" },
  "7-A": { student: "STU-7A-5QKR-8XNM-R4VL-63WT", teacher: "TCH-7A-9XKM-P4VR-7QNL-28WT" },
  "7-B": { student: "STU-7B-X9VP-3KQM-7RNL-58ZT", teacher: "TCH-7B-R6NP-8QVK-M3XT-59LZ" },
  "7-C": { student: "STU-7C-6RMX-9QKP-V4NW-27LT", teacher: "TCH-7C-W4QL-7RMP-X9KN-62VT" },
  "8-A": { student: "STU-8A-8KVL-4XQP-M7RN-52ZT", teacher: "TCH-8A-P9VX-3KQM-R7WL-48NZ" },
  "8-B": { student: "STU-8B-3QXM-7RKP-N9VL-64WT", teacher: "TCH-8B-6RKN-X8QP-4MVT-73LZ" },
  "8-C": { student: "STU-8C-9RKN-X5QM-2VLP-78ZT", teacher: "TCH-8C-Q5WM-9XRL-K2NP-67VT" },
  "9-A": { student: "STU-9A-4XRP-8KQM-V6NL-35WT", teacher: "TCH-9A-8KVP-M4QX-7RNL-35ZT" },
  "9-B": { student: "STU-9B-7QVK-M3XR-9NLP-52ZT", teacher: "TCH-9B-X7QM-5RKL-P9VN-42WT" },
  "9-C": { student: "STU-9C-X6RM-4QKP-V8NL-73WT", teacher: "TCH-9C-M3XR-8QKP-V6NL-79TZ" }
};

/* ─── Admin ───────────────────────────────────────────────── */
const ADMIN_ACCOUNT = { username: "office", password: "7marsi" };

/* ─── Clubs ───────────────────────────────────────────────── */
const SCHOOL_CLUBS = [];

/* ─── Storage keys ────────────────────────────────────────── */
const KEYS = {
  session:         "schoolhub-session",
  accounts:        "schoolhub-accounts",
  announcements:   "schoolhub-announcements",
  events:          "schoolhub-events",
  nature:          "schoolhub-nature",
  ideas:           "schoolhub-ideas",
  notes:           "schoolhub-notes",
  schedule:        "schoolhub-schedule",
  sotm:            "schoolhub-sotm",
  lang:            "schoolhub-lang",
  moments:         "schoolhub-moments",         // approved school moments photos
  momentsPending:  "schoolhub-moments-pending", // awaiting teacher approval
  pupilApprovals:  "schoolhub-pupil-approvals", // pending pupil account sign-ups
  appeals:         "schoolhub-appeals",          // account-change requests from pupils
  studentNotifs:   "schoolhub-student-notifications", // notifications sent to pupils
  notifPrefs:      "schoolhub-notif-prefs",      // per-user notification preferences
  theme:           "schoolhub-theme"             // selected UI theme
};

/* =========================================================
   Helpers
   ========================================================= */
function load(key, fallback) {
  try { const r = localStorage.getItem(key); return r ? JSON.parse(r) : fallback; }
  catch { return fallback; }
}
function save(key, value) { localStorage.setItem(key, JSON.stringify(value)); }
function uid(p) { return p + "-" + Date.now() + "-" + Math.floor(Math.random() * 1000); }
function escapeHtml(v) {
  return String(v).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
}
function currentUser() { return load(KEYS.session, null); }
function canManage(u)   { return u && (u.role === "teacher" || u.role === "admin"); }

function seedIfNeeded() {
  // Version stamp — bump this to wipe content data on next load
  const DATA_VERSION = "4";
  if (localStorage.getItem("schoolhub-data-version") !== DATA_VERSION) {
    localStorage.removeItem(KEYS.announcements);
    localStorage.removeItem(KEYS.events);
    localStorage.removeItem(KEYS.nature);
    localStorage.removeItem(KEYS.ideas);
    localStorage.removeItem(KEYS.notes);
    localStorage.removeItem(KEYS.schedule);
    localStorage.removeItem(KEYS.sotm);
    localStorage.removeItem(KEYS.moments);
    localStorage.removeItem(KEYS.momentsPending);
    localStorage.removeItem(KEYS.pupilApprovals);
    localStorage.removeItem(KEYS.accounts);   // wipe all accounts
    localStorage.removeItem(KEYS.session);    // wipe any active session
    localStorage.removeItem(KEYS.appeals);
    localStorage.removeItem(KEYS.studentNotifs);
    localStorage.setItem("schoolhub-data-version", DATA_VERSION);
  }
  if (!localStorage.getItem(KEYS.announcements))  save(KEYS.announcements, []);
  if (!localStorage.getItem(KEYS.events))         save(KEYS.events, []);
  if (!localStorage.getItem(KEYS.nature))         save(KEYS.nature, []);
  if (!localStorage.getItem(KEYS.ideas))          save(KEYS.ideas, []);
  if (!localStorage.getItem(KEYS.notes))          save(KEYS.notes, []);
  if (!localStorage.getItem(KEYS.schedule))       save(KEYS.schedule, []);
  if (!localStorage.getItem(KEYS.accounts))       save(KEYS.accounts, {});
  if (!localStorage.getItem(KEYS.moments))        save(KEYS.moments, []);
  if (!localStorage.getItem(KEYS.momentsPending)) save(KEYS.momentsPending, []);
  if (!localStorage.getItem(KEYS.pupilApprovals)) save(KEYS.pupilApprovals, []);
  if (!localStorage.getItem(KEYS.appeals))        save(KEYS.appeals, []);
  if (!localStorage.getItem(KEYS.studentNotifs))  save(KEYS.studentNotifs, []);
}

/* ─── Account store helpers ──────────────────────────────── */
function accountKey(grade, classLetter, role) {
  return `${grade}-${classLetter}-${role}`;
}
function getAccount(grade, classLetter, role) {
  return load(KEYS.accounts, {})[accountKey(grade, classLetter, role)] || null;
}
function saveAccount(grade, classLetter, role, data) {
  const all = load(KEYS.accounts, {});
  all[accountKey(grade, classLetter, role)] = data;
  save(KEYS.accounts, all);
}

/* =========================================================
   Gate helpers
   ========================================================= */
const gate      = document.getElementById("gate");
const appShell  = document.getElementById("app-shell");
const nav       = document.getElementById("main-nav");
const navToggle = document.querySelector(".nav-toggle");
const clubGrid  = document.getElementById("club-grid");
const modal     = document.getElementById("club-modal");
const modalBody = document.getElementById("club-modal-body");

function showGateScreen(id) {
  document.querySelectorAll(".gate-screen").forEach((s) => {
    s.classList.toggle("is-visible", s.id === "screen-" + id);
  });
}

function setAlert(alertId, message) {
  const el = document.getElementById(alertId);
  if (!el) return;
  if (!message) { el.hidden = true; el.textContent = ""; return; }
  el.hidden = false;
  el.textContent = message;
}

/* =========================================================
   Language screen
   ========================================================= */
document.getElementById("btn-continue").addEventListener("click", () => {
  showGateScreen("lang");
});

// Language buttons → role picker (sign up / log in)
document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    LANG = btn.dataset.lang;
    localStorage.setItem(KEYS.lang, LANG);
    applyTranslations();
    showGateScreen("role");
  });
});

// Language buttons for login flow (same behaviour now)
document.querySelectorAll(".lang-btn-login").forEach((btn) => {
  btn.addEventListener("click", () => {
    LANG = btn.dataset.lang;
    localStorage.setItem(KEYS.lang, LANG);
    applyTranslations();
    showGateScreen("role");
  });
});

/* =========================================================
   Role choice
   ========================================================= */
document.querySelectorAll("[data-go]").forEach((btn) => {
  btn.addEventListener("click", () => showGateScreen(btn.dataset.go));
});

document.querySelectorAll("[data-role-choice]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const role = btn.dataset.roleChoice;
    if (role === "pupil")   showGateScreen("pupil-choice");
    if (role === "teacher") showGateScreen("teacher-choice");
  });
});

document.getElementById("btn-pupil-signup").addEventListener("click",   () => showGateScreen("pupil-signup"));
document.getElementById("btn-pupil-login").addEventListener("click",    () => showGateScreen("pupil-login"));
document.getElementById("btn-teacher-signup").addEventListener("click", () => showGateScreen("teacher-signup"));
document.getElementById("btn-teacher-login").addEventListener("click",  () => showGateScreen("teacher-login"));

/* =========================================================
   Sign Up — Pupil  (account goes PENDING until teacher approves)
   ========================================================= */
document.getElementById("form-pupil-signup").addEventListener("submit", async (e) => {
  e.preventDefault();
  const d = Object.fromEntries(new FormData(e.target));
  if (!d.grade || !d.classLetter) { setAlert("pupil-signup-alert", t("selectGradeClass")); return; }
  if (!d.firstName || !d.lastName || !d.password) { setAlert("pupil-signup-alert", t("fillAll")); return; }

  const codeKey = `${d.grade}-${d.classLetter}`;
  const codes   = CLASS_CODES[codeKey];
  if (!codes || d.code !== codes.student) {
    setAlert("pupil-signup-alert", t("codeWrong_pupil")); return;
  }

  // Check if already a live account for this class
  if (getAccount(d.grade, d.classLetter, "pupil")) {
    setAlert("pupil-signup-alert", t("accountExists")); return;
  }

  // Check if there is already a pending request from same class
  const pending = load(KEYS.pupilApprovals, []);
  const alreadyPending = pending.some(
    (p) => p.grade === d.grade && p.classLetter === d.classLetter && p.status === "pending"
  );
  if (alreadyPending) {
    setAlert("pupil-signup-alert", t("accountPendingAlready")); return;
  }

  // Read optional profile photo
  const photoFile = document.getElementById("pupil-photo-input").files[0] || null;
  const photoData = await readFileAsDataURL(photoFile);

  // Add to pending approvals queue for the teacher of that class
  pending.push({
    id:          uid("pa"),
    grade:       d.grade,
    classLetter: d.classLetter,
    className:   `${d.grade}${d.classLetter}`,
    firstName:   d.firstName.trim(),
    lastName:    d.lastName.trim(),
    password:    d.password,
    photoData:   photoData || null,
    status:      "pending"
  });
  save(KEYS.pupilApprovals, pending);
  setAlert("pupil-signup-alert", "");
  showGateScreen("pupil-pending");
});

/* =========================================================
   Log In — Pupil
   ========================================================= */
document.getElementById("form-pupil-login").addEventListener("submit", (e) => {
  e.preventDefault();
  const d = Object.fromEntries(new FormData(e.target));
  if (!d.grade || !d.classLetter) { setAlert("pupil-login-alert", t("selectGradeClass")); return; }

  // Check if still pending approval
  const pending = load(KEYS.pupilApprovals, []);
  const myPending = pending.find(
    (p) => p.grade === d.grade && p.classLetter === d.classLetter && p.status === "pending"
  );
  if (myPending) {
    // Let them "log in" but hold them on the waiting screen
    save(KEYS.session, {
      role: "pupil-pending", grade: d.grade, classLetter: d.classLetter,
      className: `${d.grade}${d.classLetter}`,
      firstName: myPending.firstName, lastName: myPending.lastName
    });
    setAlert("pupil-login-alert", "");
    showGateScreen("pupil-pending");
    return;
  }

  const acc = getAccount(d.grade, d.classLetter, "pupil");
  if (!acc) { setAlert("pupil-login-alert", t("noAccount")); return; }
  if (d.password !== acc.password) { setAlert("pupil-login-alert", t("wrongPassword")); return; }

  save(KEYS.session, {
    role: "pupil", grade: d.grade, classLetter: d.classLetter,
    className: `${d.grade}${d.classLetter}`,
    firstName: acc.firstName, lastName: acc.lastName
  });
  setAlert("pupil-login-alert", "");
  enterApp();
});

/* =========================================================
   Sign Up — Teacher
   ========================================================= */
document.getElementById("form-teacher-signup").addEventListener("submit", async (e) => {
  e.preventDefault();
  const d = Object.fromEntries(new FormData(e.target));
  if (!d.grade || !d.classLetter) { setAlert("teacher-signup-alert", t("selectGradeClass")); return; }
  if (!d.firstName || !d.lastName || !d.password) { setAlert("teacher-signup-alert", t("fillAll")); return; }

  const codeKey = `${d.grade}-${d.classLetter}`;
  const codes   = CLASS_CODES[codeKey];
  if (!codes) { setAlert("teacher-signup-alert", t("codeWrong_teacher")); return; }
  if (d.code === codes.student) { setAlert("teacher-signup-alert", t("codeIsStudent")); return; }
  if (d.code !== codes.teacher) { setAlert("teacher-signup-alert", t("codeWrong_teacher")); return; }

  if (getAccount(d.grade, d.classLetter, "teacher")) {
    setAlert("teacher-signup-alert", t("accountExists")); return;
  }

  // Read optional profile photo
  const photoFile = document.getElementById("teacher-photo-input").files[0] || null;
  const photoData = await readFileAsDataURL(photoFile);

  saveAccount(d.grade, d.classLetter, "teacher", {
    firstName: d.firstName.trim(), lastName: d.lastName.trim(),
    password:  d.password, photoData: photoData || null
  });
  save(KEYS.session, {
    role: "teacher", grade: d.grade, classLetter: d.classLetter,
    className: `${d.grade}${d.classLetter}`,
    firstName: d.firstName.trim(), lastName: d.lastName.trim()
  });
  setAlert("teacher-signup-alert", "");
  enterApp();
});

/* =========================================================
   Log In — Teacher
   ========================================================= */
document.getElementById("form-teacher-login").addEventListener("submit", (e) => {
  e.preventDefault();
  const d = Object.fromEntries(new FormData(e.target));
  if (!d.grade || !d.classLetter) { setAlert("teacher-login-alert", t("selectGradeClass")); return; }

  const acc = getAccount(d.grade, d.classLetter, "teacher");
  if (!acc) { setAlert("teacher-login-alert", t("noAccount")); return; }
  if (d.password !== acc.password) { setAlert("teacher-login-alert", t("wrongPassword")); return; }

  save(KEYS.session, {
    role: "teacher", grade: d.grade, classLetter: d.classLetter,
    className: `${d.grade}${d.classLetter}`,
    firstName: acc.firstName, lastName: acc.lastName
  });
  setAlert("teacher-login-alert", "");
  enterApp();
});

/* =========================================================
   Admin
   ========================================================= */
document.getElementById("form-admin-login").addEventListener("submit", (e) => {
  e.preventDefault();
  const d = Object.fromEntries(new FormData(e.target));
  if (d.username.trim().toLowerCase() === ADMIN_ACCOUNT.username && d.password === ADMIN_ACCOUNT.password) {
    save(KEYS.session, { role: "admin", firstName: "School", lastName: "Office", className: "" });
    setAlert("admin-alert", "");
    enterApp();
  } else {
    setAlert("admin-alert", "Incorrect school office login.");
  }
});

/* =========================================================
   App enter / leave
   ========================================================= */
function enterApp() {
  const user = currentUser();

  // Block pending pupils — show waiting screen
  if (user && user.role === "pupil-pending") {
    gate.hidden     = false;
    appShell.hidden = true;
    document.body.classList.add("is-gated");
    showGateScreen("pupil-pending");
    return;
  }

  // Close gate, show app
  gate.hidden     = true;
  appShell.hidden = false;
  document.body.classList.remove("is-gated");

  renderNav(user);
  renderChrome(user);
  renderHome(user);
  renderClubs();
  renderAnnouncements();
  renderSchedule();
  renderEvents();
  renderNature();
  renderIdeas();
  renderNotes();
  renderSotm();
  renderMoments();
  renderMyClass();
  renderPupilApprovals();
  renderMediaApprovals();
  renderTeacherInbox();
  renderOffice();
  renderSettingsPage();
  renderStudentInbox();
  showPage("home");
}

function openGate(screen) {
  gate.hidden     = false;
  appShell.hidden = false;
  document.body.classList.add("is-gated");
  showGateScreen(screen || (localStorage.getItem(KEYS.lang) ? "splash" : "lang"));
}

function leaveApp() {
  document.body.classList.add("is-gated");
  gate.hidden     = false;
  appShell.hidden = true;
  showGateScreen(localStorage.getItem(KEYS.lang) ? "splash" : "lang");
}

function logout() {
  localStorage.removeItem(KEYS.session);
  localStorage.removeItem(KEYS.lang);
  LANG = "en"; // reset in-memory lang

  appShell.hidden = true;
  gate.hidden     = false;
  document.body.classList.add("is-gated");
  showGateScreen("splash");
}

/* =========================================================
   Navigation  — primary links always visible, rest in "More ▾"
   ========================================================= */
function renderNav(user) {
  // Primary: always visible in the bar
  const primary = [
    ["home",          t("home")],
    ["announcements", t("news")],
    ["timetable",     t("timetable")],
    ["moments",       "📸 Moments"],
    ["my-class",      "👥 My Class"],
  ];

  // Student inbox — primary nav for pupils only, with unread badge
  if (user && user.role === "pupil") {
    const allNotifs = load(KEYS.studentNotifs, []);
    const unread = allNotifs.filter(
      (n) => n.to === user.className && !n.read
    ).length;
    const badge = unread > 0 ? ` <span class="nav-badge">${unread}</span>` : "";
    primary.push(["student-inbox", `📬 Inbox${badge}`]);
  }

  // Secondary: hidden in "More" dropdown
  const secondary = [
    ["events",        t("events")],
    ["nature",        t("nature")],
    ["ideas",         t("ideas")],
    ["notifications", t("alerts")],
    ["about",         t("about")]
  ];

  // Teacher-only extras go in secondary
  if (user && user.role === "teacher") {
    secondary.push(
      ["teacher-inbox",     "📬 Inbox"],
      ["teacher-profile",   "👤 My Profile"],
      ["pupil-month",       t("pupilOfMonth")],
      ["pupil-approvals",   "Student Approvals"],
      ["media-approvals",   "Media Approval"]
    );
  }
  if (user && user.role === "admin") {
    secondary.push(["office", "Office"]);
  }

  // Settings always visible for all users
  secondary.push(["settings", "⚙️ Settings"]);

  // Inbox badge count for teachers
  let inboxBadge = "";
  if (user && user.role === "teacher") {
    const pendingPupils  = load(KEYS.pupilApprovals, []).filter(
      (p) => p.grade === user.grade && p.classLetter === user.classLetter && p.status === "pending"
    ).length;
    const pendingPhotos  = load(KEYS.momentsPending, []).filter(
      (p) => p.grade === user.grade && p.classLetter === user.classLetter
    ).length;
    const pendingIdeas   = load(KEYS.ideas, []).filter(
      (x) => x.grade === user.grade && x.classLetter === user.classLetter && x.status === "new"
    ).length;
    const total = pendingPupils + pendingPhotos + pendingIdeas;
    if (total > 0) inboxBadge = ` <span class="nav-badge">${total}</span>`;
  }

  // Logout lives directly in the header tools div (outside nav), not in More
  // We inject it into header-tools via a separate slot
  const moreDropdown = `
    <div class="nav-more-wrap" id="nav-more-wrap">
      <button class="nav-more-btn" type="button" id="btn-nav-more">More ▾${inboxBadge}</button>
      <div class="nav-more-menu" id="nav-more-menu" hidden>
        ${secondary.map(([id, label]) =>
          `<a href="javascript:void(0)" data-page="${id}" class="nav-more-item">${escapeHtml(label)}</a>`
        ).join("")}
        ${user
          ? `<button class="nav-more-item nav-logout-item" type="button" id="btn-logout">🚪 ${t("logOut")}</button>`
          : `<button class="nav-more-item nav-logout-item" type="button" id="btn-nav-login">🔑 ${t("logIn")}</button>`
        }
      </div>
    </div>`;

  nav.innerHTML = primary.map(([id, label]) =>
    `<a href="javascript:void(0)" data-page="${id}">${label}</a>`
  ).join("") + moreDropdown;

  // Remove any previous standalone action btn from header-tools if it exists
  const headerTools = document.querySelector(".header-tools");
  const prev = headerTools && headerTools.querySelector(".nav-action-btn");
  if (prev) prev.remove();

  // Toggle More menu
  const moreBtn  = document.getElementById("btn-nav-more");
  const moreMenu = document.getElementById("nav-more-menu");
  if (moreBtn && moreMenu) {
    moreBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      const open = moreMenu.hidden;
      moreMenu.hidden = !open;
      moreBtn.classList.toggle("is-open", open);
    });
  }
}

function renderChrome(user) {
  const chip = document.getElementById("user-chip");
  if (!user) { chip.textContent = ""; return; }
  const roleLabel = user.role === "admin" ? t("officeChip") : user.role === "teacher" ? t("teacherChip") : t("pupilChip");
  const name      = user.firstName ? `${user.firstName} ${user.lastName}` : "";
  const classLbl  = user.className ? ` · ${t("classLabel")} ${user.className}` : "";
  chip.textContent = name ? `${name} · ${roleLabel}${classLbl}` : `${roleLabel}${classLbl}`;
}

function renderHome(user) {
  const manage = canManage(user);
  const role   = user ? user.role : "guest";

  document.getElementById("home-eyebrow").textContent = `${SCHOOL_NAME} · grades 4–9`;
  document.getElementById("home-title").textContent   =
    user && user.firstName ? `Hello, ${user.firstName}` : "Welcome to School Hub";
  document.getElementById("home-text").textContent    =
    role === "pupil"   ? t("homeText_pupil") :
    role === "teacher" ? t("homeText_teacher") :
    "School news, the timetable, events, nature, and ideas.";

  document.getElementById("home-actions").innerHTML = `
    <a class="btn btn-primary" href="#announcements" data-page="announcements">${t("seeAnnouncements")}</a>
    <a class="btn btn-ghost"   href="#nature"        data-page="nature">${t("openNature")}</a>
  `;

  document.getElementById("quick-links").innerHTML = `
    <a class="quick-card" href="#announcements" data-page="announcements"><span>📢</span><strong>${t("news")}</strong><p>${t("schoolUpdates")}</p></a>
    <a class="quick-card" href="#timetable"     data-page="timetable"><span>🗓️</span><strong>${t("timetable")}</strong><p>${t("todaysLessons")}</p></a>
    <a class="quick-card" href="#events"        data-page="events"><span>🎉</span><strong>${t("events")}</strong><p>${t("whatIsComing")}</p></a>
    <a class="quick-card" href="#nature"        data-page="nature"><span>🌱</span><strong>${t("nature")}</strong><p>${t("learnOutside")}</p></a>
  `;

  // Teacher + buttons — only visible when logged in as teacher/admin
  const showAdd = (id) => { const btn = document.getElementById(id); if (btn) btn.hidden = !manage; };
  showAdd("btn-add-announcement");
  showAdd("btn-add-event");
  showAdd("btn-add-nature");
  showAdd("btn-add-note");

  document.getElementById("btn-save-schedule").hidden = !manage;
  document.getElementById("schedule-hint").hidden     = !manage;
  document.getElementById("form-idea").hidden         = role !== "pupil";
  document.getElementById("ideas-lead").textContent   =
    role === "pupil" ? t("ideasLeadPupil") : t("ideasLeadTeacher");

  const sotmForm = document.getElementById("form-sotm");
  if (sotmForm) sotmForm.hidden = !manage;
}

function showPage(pageId) {
  document.querySelectorAll(".page").forEach((p) => {
    p.classList.toggle("is-visible", p.dataset.page === pageId);
  });
  nav.querySelectorAll("a").forEach((a) => {
    a.classList.toggle("is-active", a.dataset.page === pageId);
  });
  nav.classList.remove("is-open");
  navToggle.setAttribute("aria-expanded", "false");
  if (pageId === "settings")      renderSettingsPage();
  if (pageId === "student-inbox") renderStudentInbox();
}

/* =========================================================
   Clubs
   ========================================================= */
function renderClubs() {
  if (!SCHOOL_CLUBS.length) {
    clubGrid.innerHTML = `<article class="info-card empty-state"><p>${t("emptyClubs")}</p></article>`;
    return;
  }
  clubGrid.innerHTML = SCHOOL_CLUBS.map((c) => `
    <article class="club-card" style="--club-color:${c.color}">
      <div class="club-icon">${c.emoji}</div>
      <h3>${c.name}</h3>
      <p>${c.short}</p>
      <button class="btn btn-club" type="button" data-club="${c.id}">Learn More</button>
    </article>`).join("");
}

function openClub(clubId) {
  const c = SCHOOL_CLUBS.find((x) => x.id === clubId);
  if (!c) return;
  modalBody.innerHTML = `<div class="club-icon">${c.emoji}</div><h2 id="club-modal-title">${c.name}</h2><p>${c.more}</p>`;
  modal.hidden = false;
}
function closeModal() { modal.hidden = true; }

/* =========================================================
   Card helpers
   ========================================================= */
function cardList(items, build, emptyKey) {
  if (!items.length) return `<article class="info-card empty-state"><p>${t(emptyKey || "nothingYet")}</p></article>`;
  return items.map(build).join("");
}

function mediaHtml(item) {
  let html = "";
  if (item.imageData) html += `<img class="card-img" src="${item.imageData}" alt="">`;
  if (item.fileName)  html += `<p class="card-file">📎 <a href="${item.fileData}" download="${escapeHtml(item.fileName)}">${escapeHtml(item.fileName)}</a></p>`;
  return html;
}

function readFileAsDataURL(file) {
  return new Promise((resolve) => {
    if (!file || file.size === 0) { resolve(null); return; }
    const r = new FileReader();
    r.onload = (e) => resolve(e.target.result);
    r.readAsDataURL(file);
  });
}

async function mediaFromForm(form) {
  const imgFile  = form.elements["image"]?.files[0]      || null;
  const atchFile = form.elements["attachment"]?.files[0] || null;
  return {
    imageData: await readFileAsDataURL(imgFile),
    fileData:  atchFile ? await readFileAsDataURL(atchFile) : null,
    fileName:  atchFile ? atchFile.name : null
  };
}

/* =========================================================
   Content renders
   ========================================================= */
function renderAnnouncements() {
  const user  = currentUser();
  const items = load(KEYS.announcements, []);
  document.getElementById("announcement-list").innerHTML = cardList(items, (item) => `
    <article class="info-card">
      <p class="meta">${escapeHtml(item.meta || "School")}</p>
      <h2>${escapeHtml(item.title)}</h2>
      <p>${escapeHtml(item.body)}</p>
      ${mediaHtml(item)}
      ${canManage(user) ? `<div class="item-actions"><button class="btn btn-small btn-danger" data-delete="announcements" data-id="${item.id}">${t("remove")}</button></div>` : ""}
    </article>`, "emptyAnnouncements");
}

function renderEvents() {
  const user  = currentUser();
  const items = load(KEYS.events, []);
  document.getElementById("event-list").innerHTML = cardList(items, (item) => `
    <article class="info-card">
      <p class="meta">${escapeHtml(item.when)}</p>
      <h2>${escapeHtml(item.title)}</h2>
      <p>${escapeHtml(item.body)}</p>
      ${mediaHtml(item)}
      ${canManage(user) ? `<div class="item-actions"><button class="btn btn-small btn-danger" data-delete="events" data-id="${item.id}">${t("remove")}</button></div>` : ""}
    </article>`, "emptyEvents");
}

function renderNature() {
  const user  = currentUser();
  const items = load(KEYS.nature, []);
  document.getElementById("nature-list").innerHTML = cardList(items, (item) => `
    <article class="info-card">
      <h2>${escapeHtml(item.title)}</h2>
      <p>${escapeHtml(item.body)}</p>
      ${mediaHtml(item)}
      ${canManage(user) ? `<div class="item-actions"><button class="btn btn-small btn-danger" data-delete="nature" data-id="${item.id}">${t("remove")}</button></div>` : ""}
    </article>`, "emptyNature");
}

function renderNotes() {
  const user  = currentUser();
  const items = load(KEYS.notes, []);
  document.getElementById("note-list").innerHTML = cardList(items, (item) => `
    <article class="info-card">
      <p class="meta">From ${escapeHtml(item.from)}</p>
      <p>${escapeHtml(item.body)}</p>
      ${mediaHtml(item)}
      ${canManage(user) ? `<div class="item-actions"><button class="btn btn-small btn-danger" data-delete="notes" data-id="${item.id}">${t("remove")}</button></div>` : ""}
    </article>`, "emptyNotes");
}

function renderIdeas() {
  const user    = currentUser();
  const items   = load(KEYS.ideas, []);
  const visible = user && user.role === "pupil"
    ? items.filter((x) => x.pupilClass === user.className)
    : items;
  document.getElementById("idea-list").innerHTML = cardList(visible, (item) => `
    <article class="info-card">
      ${canManage(user)
        ? `<p class="meta">From Class ${escapeHtml(item.pupilClass)}</p>`
        : `<p class="meta">${item.status === "done" ? "The school read this ✓" : "Sent to the school"}</p>`}
      <p>${escapeHtml(item.body)}</p>
      ${canManage(user) && item.status !== "done"
        ? `<div class="item-actions"><button class="btn btn-small btn-ok" data-idea-done="${item.id}">${t("markRead")}</button></div>`
        : ""}
    </article>`, "emptyIdeas");
}

function renderSchedule() {
  const user     = currentUser();
  const editable = canManage(user);
  const DAYS     = ["Mon", "Tue", "Wed", "Thu", "Fri"];

  // Load data — support both old flat-array format and new per-day object format.
  // If the stored value is an array (old format), treat every day as empty.
  const raw  = load(KEYS.schedule, {});
  const data = (raw && !Array.isArray(raw) && typeof raw === "object")
    ? raw
    : { Mon: [], Tue: [], Wed: [], Thu: [], Fri: [] };

  // Ensure every day key exists
  DAYS.forEach((d) => { if (!Array.isArray(data[d])) data[d] = []; });

  // Find the container — the .container.stack inside #timetable
  const section   = document.getElementById("timetable");
  const container = section && section.querySelector(".container.stack");
  if (!container) return;

  // Remove any previously injected .tt-grid and .tt-save-btn
  container.querySelectorAll(".tt-grid, .tt-save-btn").forEach((el) => el.remove());

  // Hide the legacy table-wrap (we never show it in the new UI)
  const tableWrap = container.querySelector(".table-wrap");
  if (tableWrap) tableWrap.hidden = true;

  // ── TEACHER / MANAGER VIEW ─────────────────────────────────────────────────
  if (editable) {
    const grid = document.createElement("div");
    grid.className = "tt-grid";

    DAYS.forEach((day) => {
      const col = document.createElement("div");
      col.className = "tt-col";
      col.dataset.day = day;

      // Column header
      const head = document.createElement("div");
      head.className = "tt-col-head";
      head.textContent = day;
      col.appendChild(head);

      // Existing periods
      (data[day] || []).forEach((lesson) => {
        col.appendChild(_makePeriodRow(lesson));
      });

      // "+ Add period" button
      const addBtn = document.createElement("button");
      addBtn.type = "button";
      addBtn.className = "tt-add-btn";
      addBtn.textContent = "+ Add period";
      addBtn.addEventListener("click", () => {
        col.insertBefore(_makePeriodRow(""), addBtn);
      });
      col.appendChild(addBtn);

      grid.appendChild(col);
    });

    // Save button (separate from the hidden #btn-save-schedule)
    const saveBtn = document.createElement("button");
    saveBtn.type = "button";
    saveBtn.className = "btn btn-primary tt-save-btn";
    saveBtn.textContent = "Save Timetable";
    saveBtn.addEventListener("click", saveSchedule);

    container.appendChild(grid);
    container.appendChild(saveBtn);
    return;
  }

  // ── STUDENT / GUEST VIEW ───────────────────────────────────────────────────
  const DAYS_ORDERED = ["Mon", "Tue", "Wed", "Thu", "Fri"];
  const allEmpty = DAYS_ORDERED.every((d) => !data[d] || data[d].length === 0);

  if (allEmpty) {
    const msg = document.createElement("p");
    msg.className = "info-card empty-state";
    msg.style.textAlign = "center";
    msg.textContent = "No timetable has been set yet.";
    container.appendChild(msg);
    return;
  }

  const grid = document.createElement("div");
  grid.className = "tt-grid";

  DAYS_ORDERED.forEach((day) => {
    const col = document.createElement("div");
    col.className = "tt-col";

    const head = document.createElement("div");
    head.className = "tt-col-head";
    head.textContent = day;
    col.appendChild(head);

    const lessons = data[day] || [];
    if (lessons.length === 0) {
      const empty = document.createElement("p");
      empty.className = "tt-empty";
      empty.textContent = "No lessons";
      col.appendChild(empty);
    } else {
      lessons.forEach((lesson) => {
        const row = document.createElement("div");
        row.className = "tt-period-row";
        row.textContent = lesson;
        col.appendChild(row);
      });
    }

    grid.appendChild(col);
  });

  container.appendChild(grid);
}

// Private helper — builds one editable period row for the teacher view
function _makePeriodRow(value) {
  const row = document.createElement("div");
  row.className = "tt-period-row";

  const input = document.createElement("input");
  input.type = "text";
  input.className = "tt-input";
  input.value = value;
  input.placeholder = "Lesson name…";

  const removeBtn = document.createElement("button");
  removeBtn.type = "button";
  removeBtn.className = "tt-remove-btn";
  removeBtn.textContent = "×";
  removeBtn.setAttribute("aria-label", "Remove period");
  removeBtn.addEventListener("click", () => row.remove());

  row.appendChild(input);
  row.appendChild(removeBtn);
  return row;
}

function saveSchedule() {
  const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri"];
  const section   = document.getElementById("timetable");
  const container = section && section.querySelector(".container.stack");
  if (!container) return;

  const grid = container.querySelector(".tt-grid");
  if (!grid) return;

  const data = {};
  DAYS.forEach((day) => {
    const col = grid.querySelector(`.tt-col[data-day="${day}"]`);
    if (!col) { data[day] = []; return; }
    data[day] = Array.from(col.querySelectorAll(".tt-input"))
      .map((inp) => inp.value.trim())
      .filter((v) => v.length > 0);
  });

  save(KEYS.schedule, data);
  renderSchedule();
}

function renderSotm() {
  const sotm = load(KEYS.sotm, null);
  const section = document.getElementById("sotm-section");
  const card    = document.getElementById("sotm-card");
  if (!sotm) { if (section) section.hidden = true; return; }
  if (section) section.hidden = false;
  card.innerHTML = `
    <div class="sotm-photo">${sotm.imageData ? `<img src="${sotm.imageData}" alt="">` : "🌟"}</div>
    <div>
      <p class="sotm-kicker">${t("pupilOfMonth")}</p>
      <h3>${escapeHtml(sotm.name)}</h3>
      <p class="sotm-grade">${escapeHtml(sotm.grade)}</p>
      <p class="sotm-reason">${escapeHtml(sotm.reason)}</p>
    </div>`;
  const pageCard = document.getElementById("sotm-page-card");
  if (pageCard) pageCard.innerHTML = card.innerHTML;
}

function renderOffice() {
  const user = currentUser();
  if (!user || user.role !== "admin") return;
  const el = document.getElementById("approved-teachers");
  if (!el) return;
  el.innerHTML = Object.keys(CLASS_CODES).map((k) => {
    const [g, l] = k.split("-");
    return `<p><strong>Class ${g}${l}</strong> · Grade ${g}</p>`;
  }).join("");
}

/* =========================================================
   Theme helper
   ========================================================= */
function applyTheme() {
  const theme = localStorage.getItem(KEYS.theme) || "system";
  document.body.classList.remove("theme-light", "theme-dark");
  if (theme === "light") document.body.classList.add("theme-light");
  if (theme === "dark")  document.body.classList.add("theme-dark");
}

/* =========================================================
   Settings button wiring helper
   ========================================================= */
function wireSettingsButtons(el) {
  el.querySelectorAll("[data-theme]").forEach((btn) => {
    btn.addEventListener("click", () => {
      localStorage.setItem(KEYS.theme, btn.dataset.theme);
      applyTheme();
      renderSettingsPage();
    });
  });
  el.querySelectorAll("[data-settings-lang]").forEach((btn) => {
    btn.addEventListener("click", () => {
      LANG = btn.dataset.settingsLang;
      localStorage.setItem(KEYS.lang, LANG);
      applyTranslations();
      renderSettingsPage();
    });
  });
}

/* =========================================================
   Settings page
   ========================================================= */
function renderSettingsPage() {
  const user = currentUser();
  const el   = document.getElementById("settings-content");
  if (!el) return;

  if (!user) {
    el.innerHTML = `
      <div class="settings-section">
        <h2>⚙️ Settings</h2>
        <p style="color:var(--muted);">Log in to access account settings and notifications.</p>
      </div>
      <div class="settings-section" id="settings-themes">
        <h2>🎨 Themes</h2>
        <div class="theme-btns">
          <button class="theme-btn ${(localStorage.getItem(KEYS.theme)||"system")==="light"?"is-active":""}" type="button" data-theme="light">☀️ Light</button>
          <button class="theme-btn ${(localStorage.getItem(KEYS.theme)||"system")==="dark"?"is-active":""}" type="button" data-theme="dark">🌙 Dark</button>
          <button class="theme-btn ${(localStorage.getItem(KEYS.theme)||"system")==="system"?"is-active":""}" type="button" data-theme="system">⚙️ System Default</button>
        </div>
      </div>
      <div class="settings-section" id="settings-langs">
        <h2>🌐 Language</h2>
        <div class="lang-settings-btns">
          <button class="lang-settings-btn ${LANG==="sq"?"is-active":""}" type="button" data-settings-lang="sq">🇦🇱 Albanian</button>
          <button class="lang-settings-btn ${LANG==="fr"?"is-active":""}" type="button" data-settings-lang="fr">🇫🇷 French</button>
          <button class="lang-settings-btn ${LANG==="en"?"is-active":""}" type="button" data-settings-lang="en">🇬🇧 English</button>
        </div>
      </div>`;
    wireSettingsButtons(el);
    return;
  }

  const notifKey   = `${KEYS.notifPrefs}-${user.className}`;
  const notifPrefs = load(notifKey, { appealDecisions: true });
  const theme      = localStorage.getItem(KEYS.theme) || "system";

  const accountTypeLabel =
    user.role === "teacher" ? "Teacher" :
    user.role === "admin"   ? "School Office" : "Pupil";

  // Load user's own appeals for the history section
  const myAppeals = user.role === "pupil"
    ? load(KEYS.appeals, []).filter((a) => a.type === "account-change" && a.from === user.className)
    : [];

  const statusBadge = (status) => {
    if (status === "approved") return "✅";
    if (status === "rejected") return "❌";
    return "⏳";
  };

  el.innerHTML = `
    <!-- Notifications -->
    <div class="settings-section" id="settings-notif">
      <h2>🔔 Notifications</h2>
      <div class="settings-row">
        <span>Appeal decisions (when a teacher approves or rejects your request)</span>
        <label class="toggle-switch" aria-label="Toggle appeal decision notifications">
          <input type="checkbox" id="notif-appeal-toggle" ${notifPrefs.appealDecisions ? "checked" : ""}>
          <span class="toggle-slider"></span>
        </label>
      </div>
    </div>

    <!-- Account -->
    <div class="settings-section" id="settings-account">
      <h2>👤 Account</h2>
      <div class="account-info-grid">
        <div class="account-info-item">
          <strong>Name</strong>
          <span>${escapeHtml(user.firstName)} ${escapeHtml(user.lastName)}</span>
        </div>
        <div class="account-info-item">
          <strong>Grade</strong>
          <span>${escapeHtml(user.grade || "—")}</span>
        </div>
        <div class="account-info-item">
          <strong>Class</strong>
          <span>${escapeHtml(user.className || "—")}</span>
        </div>
        <div class="account-info-item">
          <strong>Account type</strong>
          <span>${escapeHtml(accountTypeLabel)}</span>
        </div>
      </div>
      ${user.role === "pupil" ? `
      <p class="hint-box" style="margin-bottom:12px;">
        To change your name or other important information, submit a request to your teacher.
        They must approve it before anything changes.
      </p>
      <div class="account-change-form" id="account-change-form-wrap">
        <h3 style="font-size:1rem;margin-bottom:4px;">Request a change</h3>
        <label style="display:grid;gap:6px;font-weight:700;">
          What would you like to change?
          <textarea id="account-change-request-text" rows="3" placeholder="Describe what you'd like changed (e.g. correct my name spelling)..." maxlength="400" style="border:2px solid #d7e3f0;border-radius:12px;padding:10px 12px;font:inherit;resize:vertical;"></textarea>
        </label>
        <button class="btn btn-primary" type="button" id="btn-submit-account-change" style="align-self:flex-start;">
          Send request to teacher
        </button>
        <p id="account-change-status" style="color:var(--green);font-weight:700;display:none;">
          ✅ Request sent! Your teacher will review it.
        </p>
      </div>
      ${myAppeals.length ? `
        <div style="margin-top:18px;">
          <h3 style="font-size:0.95rem;margin-bottom:10px;color:var(--muted);">Your previous requests</h3>
          <div class="stack">
            ${myAppeals.map((a) => `
              <div class="info-card" style="padding:12px 14px;">
                <p style="font-size:0.9rem;">${escapeHtml(a.requestText)}</p>
                <p class="meta" style="margin-top:4px;">${statusBadge(a.status)} ${a.status.charAt(0).toUpperCase() + a.status.slice(1)}</p>
              </div>`).join("")}
          </div>
        </div>` : ""}
      ` : `<p class="hint-box">Account information cannot be changed here.</p>`}

      <!-- Change Password -->
      <div style="margin-top:20px;border-top:2px solid #eef2f7;padding-top:18px;">
        <h3 style="font-size:1rem;margin-bottom:12px;">🔑 Change Password</h3>
        <div style="display:grid;gap:10px;max-width:360px;">
          <label style="display:grid;gap:4px;font-weight:700;font-size:0.92rem;">
            Current password
            <input id="pw-current" type="password" class="settings-input" placeholder="Enter current password">
          </label>
          <label style="display:grid;gap:4px;font-weight:700;font-size:0.92rem;">
            New password
            <input id="pw-new" type="password" class="settings-input" placeholder="Enter new password" minlength="4">
          </label>
          <label style="display:grid;gap:4px;font-weight:700;font-size:0.92rem;">
            Confirm new password
            <input id="pw-confirm" type="password" class="settings-input" placeholder="Confirm new password">
          </label>
          <p id="pw-msg" style="font-size:0.88rem;font-weight:700;display:none;"></p>
          <button class="btn btn-primary" type="button" id="btn-change-password" style="align-self:flex-start;">Save new password</button>
        </div>
      </div>

      <!-- Delete Account -->
      <div style="margin-top:20px;border-top:2px solid #fde8e4;padding-top:18px;">
        <h3 style="font-size:1rem;margin-bottom:6px;color:#9a2b1f;">⚠️ Delete Account</h3>
        <p style="font-size:0.88rem;color:var(--muted);margin-bottom:12px;">
          This will permanently delete your account. You cannot undo this.
        </p>
        <div style="display:grid;gap:10px;max-width:360px;">
          <label style="display:grid;gap:4px;font-weight:700;font-size:0.92rem;">
            Enter your password to confirm
            <input id="delete-pw" type="password" class="settings-input" placeholder="Your current password">
          </label>
          <p id="delete-msg" style="font-size:0.88rem;font-weight:700;display:none;"></p>
          <button class="btn btn-danger btn-wide" type="button" id="btn-delete-account" style="align-self:flex-start;background:#ef6d5a;color:#fff;border:none;">Delete my account</button>
        </div>
      </div>
    </div>

    <!-- Themes -->
    <div class="settings-section" id="settings-themes">
      <h2>🎨 Themes</h2>
      <div class="theme-btns">
        <button class="theme-btn ${theme === "light"  ? "is-active" : ""}" type="button" data-theme="light">☀️ Light</button>
        <button class="theme-btn ${theme === "dark"   ? "is-active" : ""}" type="button" data-theme="dark">🌙 Dark</button>
        <button class="theme-btn ${theme === "system" ? "is-active" : ""}" type="button" data-theme="system">⚙️ System Default</button>
      </div>
    </div>

    <!-- Languages -->
    <div class="settings-section" id="settings-langs">
      <h2>🌐 Language</h2>
      <div class="lang-settings-btns">
        <button class="lang-settings-btn ${LANG === "sq" ? "is-active" : ""}" type="button" data-settings-lang="sq">🇦🇱 Albanian</button>
        <button class="lang-settings-btn ${LANG === "fr" ? "is-active" : ""}" type="button" data-settings-lang="fr">🇫🇷 French</button>
        <button class="lang-settings-btn ${LANG === "en" ? "is-active" : ""}" type="button" data-settings-lang="en">🇬🇧 English</button>
      </div>
    </div>
  `;

  // Wire notification toggle
  const notifToggle = document.getElementById("notif-appeal-toggle");
  if (notifToggle) {
    notifToggle.addEventListener("change", (e) => {
      const prefs = load(notifKey, { appealDecisions: true });
      prefs.appealDecisions = e.target.checked;
      save(notifKey, prefs);
    });
  }

  // Wire theme + language buttons
  wireSettingsButtons(el);

  // Wire change password button
  const changePwBtn = document.getElementById("btn-change-password");
  if (changePwBtn) {
    changePwBtn.addEventListener("click", () => {
      const current = document.getElementById("pw-current").value;
      const newPw   = document.getElementById("pw-new").value;
      const confirm = document.getElementById("pw-confirm").value;
      const msg     = document.getElementById("pw-msg");

      const acc = getAccount(user.grade, user.classLetter, user.role);
      const realPw = acc ? acc.password : null;

      msg.style.display = "block";
      if (!current || !newPw || !confirm) {
        msg.style.color = "#ef6d5a"; msg.textContent = "Please fill in all fields."; return;
      }
      if (current !== realPw) {
        msg.style.color = "#ef6d5a"; msg.textContent = "Current password is incorrect."; return;
      }
      if (newPw.length < 4) {
        msg.style.color = "#ef6d5a"; msg.textContent = "New password must be at least 4 characters."; return;
      }
      if (newPw !== confirm) {
        msg.style.color = "#ef6d5a"; msg.textContent = "New passwords do not match."; return;
      }
      // Save new password
      const updated = { ...acc, password: newPw };
      saveAccount(user.grade, user.classLetter, user.role, updated);
      msg.style.color = "#2f9e6b"; msg.textContent = "✅ Password changed successfully!";
      document.getElementById("pw-current").value = "";
      document.getElementById("pw-new").value     = "";
      document.getElementById("pw-confirm").value = "";
    });
  }

  // Wire delete account button
  const deleteBtn = document.getElementById("btn-delete-account");
  if (deleteBtn) {
    deleteBtn.addEventListener("click", () => {
      const pw  = document.getElementById("delete-pw").value;
      const msg = document.getElementById("delete-msg");

      const acc    = getAccount(user.grade, user.classLetter, user.role);
      const realPw = acc ? acc.password : null;

      msg.style.display = "block";
      if (!pw) {
        msg.style.color = "#ef6d5a"; msg.textContent = "Please enter your password to confirm."; return;
      }
      if (pw !== realPw) {
        msg.style.color = "#ef6d5a"; msg.textContent = "Password is incorrect."; return;
      }
      // Delete the account from storage
      const all = load(KEYS.accounts, {});
      delete all[accountKey(user.grade, user.classLetter, user.role)];
      save(KEYS.accounts, all);
      // Log out and go to splash
      logout();
    });
  }

  // Wire account change request button (pupils only)
  const submitBtn = document.getElementById("btn-submit-account-change");
  if (submitBtn) {
    submitBtn.addEventListener("click", () => {
      const textEl = document.getElementById("account-change-request-text");
      const text   = textEl ? textEl.value.trim() : "";
      if (!text) return;
      const appeals = load(KEYS.appeals, []);
      appeals.push({
        id:              uid("appeal"),
        type:            "account-change",
        from:            user.className,
        pupilName:       `${user.firstName} ${user.lastName}`,
        requestText:     text,
        status:          "pending",
        teacherResponse: null,
        timestamp:       Date.now()
      });
      save(KEYS.appeals, appeals);
      const statusEl = document.getElementById("account-change-status");
      if (statusEl) statusEl.style.display = "block";
      submitBtn.disabled    = true;
      submitBtn.textContent = "Request sent";
    });
  }
}

/* =========================================================
   Student Inbox 📬
   ========================================================= */
function renderStudentInbox() {
  const user = currentUser();
  const el   = document.getElementById("student-inbox-list");
  if (!el) return;

  if (!user || user.role !== "pupil") {
    el.innerHTML = `<article class="info-card empty-state"><p>Log in as a pupil to see your inbox.</p></article>`;
    return;
  }

  const notifs = load(KEYS.studentNotifs, []).filter((n) => n.to === user.className)
    .sort((a, b) => b.timestamp - a.timestamp);

  if (!notifs.length) {
    el.innerHTML = `<article class="info-card empty-state"><p>Your inbox is empty.</p></article>`;
    return;
  }

  el.innerHTML = notifs.map((n) => {
    const isApproved   = n.decision === "approved";
    const icon         = isApproved ? "✅" : "❌";
    const decisionText = isApproved
      ? `You got approved by ${escapeHtml(n.teacherName)}`
      : `Your request was not approved by ${escapeHtml(n.teacherName)}`;
    const date = new Date(n.timestamp).toLocaleDateString();
    return `
      <article class="info-card notif-card ${n.read ? "is-read" : "is-unread"}">
        <div class="notif-icon">${icon}</div>
        <div style="flex:1;">
          <p style="font-weight:700;margin-bottom:4px;">${decisionText}</p>
          <p style="color:var(--muted);font-size:0.88rem;">Your request: "${escapeHtml(n.requestText)}"</p>
          <p style="color:var(--muted);font-size:0.82rem;margin-top:4px;">${date}</p>
          ${!n.read ? `<button class="btn btn-small" style="margin-top:8px;background:#e7f1ff;color:var(--blue);" data-mark-notif-read="${n.id}">Mark as read</button>` : ""}
        </div>
      </article>`;
  }).join("");
}

/* =========================================================
   School Moments 📸
   ========================================================= */
function renderMoments() {
  const user     = currentUser();
  const approved = load(KEYS.moments, []);
  const pending  = load(KEYS.momentsPending, []);

  // Pupil: show their own pending submissions + approved moments for their class
  // Teacher / guest: show all approved moments
  const myClass  = user ? user.className : null;

  // Approved moments (all users see these)
  const listEl = document.getElementById("moments-list");
  if (listEl) {
    if (!approved.length) {
      listEl.innerHTML = `<article class="info-card empty-state"><p>No school moments yet.</p></article>`;
    } else {
      listEl.innerHTML = approved.map((m) => `
        <article class="info-card moment-card">
          <img class="moment-img" src="${m.imageData}" alt="School moment">
          ${m.caption ? `<p class="moment-caption">${escapeHtml(m.caption)}</p>` : ""}
          <p class="meta">Class ${escapeHtml(m.className)} · ${escapeHtml(m.firstName)} ${escapeHtml(m.lastName)}</p>
          ${canManage(user) ? `<div class="item-actions"><button class="btn btn-small btn-danger" data-delete-moment="${m.id}">${t("remove")}</button></div>` : ""}
        </article>`).join("");
    }
  }

  // Pupil: show their own pending uploads below
  const myPendingEl = document.getElementById("moments-my-pending");
  if (myPendingEl) {
    if (user && user.role === "pupil") {
      const mine = pending.filter((p) => p.className === myClass);
      myPendingEl.hidden = mine.length === 0;
      myPendingEl.innerHTML = mine.length
        ? mine.map((p) => `
          <article class="info-card pending-card">
            <img class="moment-img" src="${p.imageData}" alt="">
            ${p.caption ? `<p class="moment-caption">${escapeHtml(p.caption)}</p>` : ""}
            <p class="meta pending-tag">⏳ Waiting for teacher approval.</p>
          </article>`).join("")
        : "";
    } else {
      myPendingEl.hidden = true;
    }
  }

  // Camera section — inject into moments page if not already there
  const momentsPage = document.getElementById("moments");
  if (momentsPage && user && user.role === "pupil") {
    if (!document.getElementById("camera-section")) {
      const cameraHtml = `
        <div class="camera-section" id="camera-section">
          <button class="btn btn-primary" type="button" id="btn-open-camera">📷 Take a Photo</button>
          <div class="camera-panel" id="camera-panel" hidden>
            <video id="camera-preview" autoplay playsinline muted></video>
            <div class="camera-controls">
              <button class="btn btn-primary" type="button" id="btn-capture">📸 Capture</button>
              <button class="btn btn-danger" type="button" id="btn-cancel-camera">Cancel</button>
            </div>
            <div id="camera-error" hidden></div>
          </div>
          <div class="camera-captured-preview" id="camera-captured-preview" hidden>
            <img id="camera-captured-img" src="" alt="Captured photo">
            <input id="camera-caption-input" type="text" placeholder="Add a caption (optional)…" maxlength="150" style="border:2px solid #d7e3f0;border-radius:12px;padding:10px 12px;font:inherit;width:100%;margin-bottom:8px;">
            <div class="camera-controls">
              <button class="btn btn-primary" type="button" id="btn-use-photo">📤 Send for Approval</button>
              <button class="btn btn-ghost"   type="button" id="btn-retake-photo">🔄 Retake</button>
            </div>
          </div>
          <canvas id="camera-canvas" hidden></canvas>
          <button class="btn btn-text" type="button" id="btn-show-upload" style="margin-top:8px;font-size:0.85rem;color:var(--muted);">📁 Upload a file instead</button>
        </div>`;
      const uploadFormRef = document.getElementById("form-moment");
      if (uploadFormRef) {
        const wrapper = document.createElement("div");
        wrapper.innerHTML = cameraHtml;
        uploadFormRef.parentNode.insertBefore(wrapper.firstElementChild, uploadFormRef);
      }
    }
  } else if (!user || user.role !== "pupil") {
    const existing = document.getElementById("camera-section");
    if (existing) existing.remove();
  }

  // Upload form: hidden by default — only show if camera is explicitly not used
  // Camera section handles submissions directly; file upload is a fallback
  const uploadForm = document.getElementById("form-moment");
  if (uploadForm) {
    uploadForm.hidden = !(user && user.role === "pupil");
    // If camera section exists, hide the redundant file picker
    if (document.getElementById("camera-section")) {
      uploadForm.hidden = true;
    }
  }
}

/* ─── Camera helpers ─────────────────────────────────────── */
let _cameraStream = null;

function startCamera() {
  const video   = document.getElementById("camera-preview");
  const errorEl = document.getElementById("camera-error");
  if (!video) return;
  if (errorEl) { errorEl.hidden = true; errorEl.textContent = ""; }
  stopCamera();
  navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" }, audio: false })
    .then((stream) => {
      _cameraStream = stream;
      video.srcObject = stream;
    })
    .catch((err) => {
      if (errorEl) {
        errorEl.hidden = false;
        errorEl.textContent = err.name === "NotAllowedError"
          ? "Camera permission was denied. Please allow camera access in your browser settings."
          : `Could not access camera: ${err.message}`;
      }
    });
}

function stopCamera() {
  if (_cameraStream) {
    _cameraStream.getTracks().forEach((t) => t.stop());
    _cameraStream = null;
  }
  const video = document.getElementById("camera-preview");
  if (video) video.srcObject = null;
}

function capturePhoto() {
  const video   = document.getElementById("camera-preview");
  const canvas  = document.getElementById("camera-canvas");
  const panel   = document.getElementById("camera-panel");
  const preview = document.getElementById("camera-captured-preview");
  const img     = document.getElementById("camera-captured-img");
  if (!video || !canvas) return;
  canvas.width  = video.videoWidth  || 640;
  canvas.height = video.videoHeight || 480;
  canvas.getContext("2d").drawImage(video, 0, 0, canvas.width, canvas.height);
  const dataUrl = canvas.toDataURL("image/jpeg", 0.85);
  if (img)     img.src = dataUrl;
  if (panel)   panel.hidden   = true;
  if (preview) preview.hidden = false;
  stopCamera();
}

function submitCameraPhoto() {
  const user = currentUser();
  if (!user || user.role !== "pupil") return;
  const canvas    = document.getElementById("camera-canvas");
  const captionEl = document.getElementById("camera-caption-input");
  if (!canvas) return;
  const dataUrl = canvas.toDataURL("image/jpeg", 0.85);
  const caption = captionEl ? captionEl.value.trim() : "";
  const pending = load(KEYS.momentsPending, []);
  pending.push({
    id:          uid("m"),
    grade:       user.grade,
    classLetter: user.classLetter,
    className:   user.className,
    firstName:   user.firstName,
    lastName:    user.lastName,
    imageData:   dataUrl,
    caption:     caption
  });
  save(KEYS.momentsPending, pending);
  if (captionEl) captionEl.value = "";
  const preview = document.getElementById("camera-captured-preview");
  if (preview) preview.hidden = true;
  renderMoments();
}

/* =========================================================
   My Class 👥
   ========================================================= */
/* Returns either a circular <img> or the grey SVG placeholder */
function avatarHtml(photoData, size) {
  const s = size || 52;
  if (photoData) {
    return `<img class="classmate-avatar-img" src="${photoData}" alt="Profile photo" style="width:${s}px;height:${s}px;">`;
  }
  return `<span class="classmate-avatar-img classmate-avatar-grey" style="width:${s}px;height:${s}px;">
    <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
      <circle cx="40" cy="40" r="40" fill="#d1d9e0"/>
      <circle cx="40" cy="30" r="14" fill="#9aaab4"/>
      <ellipse cx="40" cy="68" rx="22" ry="16" fill="#9aaab4"/>
    </svg>
  </span>`;
}

function renderMyClass() {
  const user = currentUser();
  const el   = document.getElementById("my-class-list");
  if (!el) return;

  if (!user || (user.role !== "pupil" && user.role !== "teacher")) {
    el.innerHTML = `<article class="info-card empty-state"><p>Log in to see your class.</p></article>`;
    return;
  }

  const accounts = load(KEYS.accounts, {});

  const teacherAcc  = accounts[`${user.grade}-${user.classLetter}-teacher`];
  const pupilAcc    = accounts[`${user.grade}-${user.classLetter}-pupil`];
  const classmates  = pupilAcc ? [pupilAcc] : [];

  if (!classmates.length && !teacherAcc) {
    el.innerHTML = `<article class="info-card empty-state"><p>No class members added yet.</p></article>`;
    return;
  }

  let html = "";

  if (teacherAcc && user.role === "pupil") {
    html += `<article class="info-card classmate-card teacher-card">
      ${avatarHtml(teacherAcc.photoData)}
      <div>
        <strong>${escapeHtml(teacherAcc.firstName)} ${escapeHtml(teacherAcc.lastName)}</strong>
        <p class="meta">Class Teacher · ${user.grade}${user.classLetter}</p>
      </div>
    </article>`;
  }

  html += classmates.map((acc) => `
    <article class="info-card classmate-card">
      ${avatarHtml(acc.photoData)}
      <div>
        <strong>${escapeHtml(acc.firstName)} ${escapeHtml(acc.lastName)}</strong>
        <p class="meta">Pupil · Class ${user.grade}${user.classLetter}</p>
      </div>
    </article>`).join("");

  el.innerHTML = html || `<article class="info-card empty-state"><p>No class members added yet.</p></article>`;
}

/* =========================================================
   Teacher: Pupil Approvals
   ========================================================= */
function renderPupilApprovals() {
  const user = currentUser();
  const el   = document.getElementById("pupil-approvals-list");
  if (!el || !user || user.role !== "teacher") return;

  const pending = load(KEYS.pupilApprovals, []).filter(
    (p) => p.grade === user.grade && p.classLetter === user.classLetter && p.status === "pending"
  );

  if (!pending.length) {
    el.innerHTML = `<article class="info-card empty-state"><p>No pending student sign-ups.</p></article>`;
    return;
  }

  el.innerHTML = pending.map((p) => `
    <article class="info-card approval-card">
      <div class="approval-info">
        <strong>${escapeHtml(p.firstName)} ${escapeHtml(p.lastName)}</strong>
        <p class="meta">Class ${escapeHtml(p.className)}</p>
      </div>
      <div class="item-actions">
        <button class="btn btn-small btn-ok"     data-approve-pupil="${p.id}">✅ Approve</button>
        <button class="btn btn-small btn-danger" data-reject-pupil="${p.id}">❌ Reject</button>
      </div>
    </article>`).join("");
}

/* =========================================================
   Teacher: Media Approvals
   ========================================================= */
function renderMediaApprovals() {
  const user = currentUser();
  const el   = document.getElementById("media-approvals-list");
  if (!el || !user || user.role !== "teacher") return;

  const pending = load(KEYS.momentsPending, []).filter(
    (p) => p.grade === user.grade && p.classLetter === user.classLetter
  );

  if (!pending.length) {
    el.innerHTML = `<article class="info-card empty-state"><p>No photos waiting for approval.</p></article>`;
    return;
  }

  el.innerHTML = pending.map((p) => `
    <article class="info-card approval-card">
      <img class="moment-img" src="${p.imageData}" alt="">
      ${p.caption ? `<p class="moment-caption">${escapeHtml(p.caption)}</p>` : ""}
      <p class="meta">${escapeHtml(p.firstName)} ${escapeHtml(p.lastName)} · Class ${escapeHtml(p.className)}</p>
      <div class="item-actions">
        <button class="btn btn-small btn-ok"     data-approve-moment="${p.id}">✅ Approve</button>
        <button class="btn btn-small btn-danger" data-reject-moment="${p.id}">❌ Reject</button>
      </div>
    </article>`).join("");
}

/* =========================================================
   Teacher: Inbox (pupil approvals + ideas + photo submissions)
   ========================================================= */
function renderTeacherInbox() {
  const user = currentUser();
  const el   = document.getElementById("teacher-inbox-list");
  if (!el || !user || user.role !== "teacher") return;

  const pendingPupils = load(KEYS.pupilApprovals, []).filter(
    (p) => p.grade === user.grade && p.classLetter === user.classLetter && p.status === "pending"
  );
  const pendingPhotos = load(KEYS.momentsPending, []).filter(
    (p) => p.grade === user.grade && p.classLetter === user.classLetter
  );
  const newIdeas = load(KEYS.ideas, []).filter(
    (x) => x.grade === user.grade && x.classLetter === user.classLetter && x.status === "new"
  );

  if (!pendingPupils.length && !pendingPhotos.length && !newIdeas.length) {
    // Check appeals too before showing empty state
    const pendingAppealsCheck = load(KEYS.appeals, []).filter(
      (a) => a.type === "account-change" && a.from === user.className && a.status === "pending"
    );
    if (!pendingAppealsCheck.length) {
      el.innerHTML = `<article class="info-card empty-state"><p>Your inbox is empty. 🎉</p></article>`;
      return;
    }
  }

  let html = "";

  if (pendingPupils.length) {
    html += `<article class="info-card"><h2 style="margin-bottom:12px;">👤 Student Sign-Up Requests (${pendingPupils.length})</h2><div class="stack">` +
      pendingPupils.map((p) => `
        <div class="approval-card">
          <div class="approval-info">
            <strong>${escapeHtml(p.firstName)} ${escapeHtml(p.lastName)}</strong>
            <p class="meta">Class ${escapeHtml(p.className)}</p>
          </div>
          <div class="item-actions">
            <button class="btn btn-small btn-ok"     data-approve-pupil="${p.id}">✅ Approve</button>
            <button class="btn btn-small btn-danger" data-reject-pupil="${p.id}">❌ Reject</button>
          </div>
        </div>`).join("") +
    `</div></article>`;
  }

  if (newIdeas.length) {
    html += `<article class="info-card"><h2 style="margin-bottom:12px;">💡 New Ideas (${newIdeas.length})</h2><div class="stack">` +
      newIdeas.map((x) => `
        <div class="info-card" style="background:#fffdf4;border-left:4px solid #f4b942;padding:14px 16px;">
          <p class="meta">From ${escapeHtml(x.from)} · Class ${escapeHtml(x.pupilClass)}</p>
          <p>${escapeHtml(x.body)}</p>
          <div class="item-actions">
            <button class="btn btn-small btn-ok" data-idea-done="${x.id}">${t("markRead")}</button>
          </div>
        </div>`).join("") +
    `</div></article>`;
  }

  if (pendingPhotos.length) {
    html += `<article class="info-card"><h2 style="margin-bottom:12px;">📸 Photo Submissions (${pendingPhotos.length})</h2><div class="stack">` +
      pendingPhotos.map((p) => `
        <div class="approval-card" style="flex-direction:column;align-items:flex-start;gap:10px;">
          <img class="moment-img" src="${p.imageData}" alt="" style="max-width:220px;border-radius:12px;">
          ${p.caption ? `<p class="moment-caption">${escapeHtml(p.caption)}</p>` : ""}
          <p class="meta">${escapeHtml(p.firstName)} ${escapeHtml(p.lastName)} · Class ${escapeHtml(p.className)}</p>
          <div class="item-actions">
            <button class="btn btn-small btn-ok"     data-approve-moment="${p.id}">✅ Approve</button>
            <button class="btn btn-small btn-danger" data-reject-moment="${p.id}">❌ Reject</button>
          </div>
        </div>`).join("") +
    `</div></article>`;
  }

  // Account-change appeals for this teacher's class
  const pendingAppeals = load(KEYS.appeals, []).filter(
    (a) => a.type === "account-change" && a.from === user.className && a.status === "pending"
  );
  if (pendingAppeals.length) {
    html += `<article class="info-card"><h2 style="margin-bottom:12px;">📝 Account Change Requests (${pendingAppeals.length})</h2><div class="stack">` +
      pendingAppeals.map((a) => `
        <div class="approval-card" style="flex-direction:column;align-items:flex-start;gap:10px;">
          <div>
            <strong>${escapeHtml(a.pupilName)}</strong>
            <p class="meta">Class ${escapeHtml(a.from)}</p>
            <p style="margin-top:6px;">${escapeHtml(a.requestText)}</p>
          </div>
          <div class="item-actions">
            <button class="btn btn-small btn-ok"     data-approve-appeal="${a.id}">✅ Approve</button>
            <button class="btn btn-small btn-danger" data-reject-appeal="${a.id}">❌ Reject</button>
          </div>
        </div>`).join("") +
    `</div></article>`;
  }

  el.innerHTML = html;

  // Update nav badge
  renderNav(user);
}

/* =========================================================
   Teacher: Inbox (pupil approvals + ideas + photo submissions)
   ========================================================= */
function setupAddButton(btnId, formId, cancelId) {
  const btn    = document.getElementById(btnId);
  const form   = document.getElementById(formId);
  const cancel = cancelId ? document.getElementById(cancelId) : null;
  if (!btn || !form) return;

  btn.addEventListener("click", () => {
    form.hidden = !form.hidden;
    btn.textContent = form.hidden ? "＋" : "✕";
  });
  if (cancel) {
    cancel.addEventListener("click", () => {
      form.hidden = true;
      btn.textContent = "＋";
    });
  }
}

setupAddButton("btn-add-announcement", "form-announcement", "btn-cancel-announcement");
setupAddButton("btn-add-event",        "form-event",        "btn-cancel-event");
setupAddButton("btn-add-nature",       "form-nature",       "btn-cancel-nature");
setupAddButton("btn-add-note",         "form-note",         "btn-cancel-note");

/* =========================================================
   Content form submissions (teacher only)
   ========================================================= */
document.getElementById("form-announcement").addEventListener("submit", async (e) => {
  e.preventDefault();
  if (!canManage(currentUser())) return;
  const d = Object.fromEntries(new FormData(e.target));
  const media = await mediaFromForm(e.target);
  const items = load(KEYS.announcements, []);
  items.unshift({ id: uid("a"), title: d.title, body: d.body, meta: "Posted today", ...media });
  save(KEYS.announcements, items);
  e.target.reset();
  document.getElementById("form-announcement").hidden = true;
  document.getElementById("btn-add-announcement").textContent = "＋";
  renderAnnouncements();
});

document.getElementById("form-event").addEventListener("submit", async (e) => {
  e.preventDefault();
  if (!canManage(currentUser())) return;
  const d = Object.fromEntries(new FormData(e.target));
  const media = await mediaFromForm(e.target);
  const items = load(KEYS.events, []);
  items.unshift({ id: uid("e"), title: d.title, when: d.when, body: d.body, ...media });
  save(KEYS.events, items);
  e.target.reset();
  document.getElementById("form-event").hidden = true;
  document.getElementById("btn-add-event").textContent = "＋";
  renderEvents();
});

document.getElementById("form-nature").addEventListener("submit", async (e) => {
  e.preventDefault();
  if (!canManage(currentUser())) return;
  const d = Object.fromEntries(new FormData(e.target));
  const media = await mediaFromForm(e.target);
  const items = load(KEYS.nature, []);
  items.unshift({ id: uid("n"), title: d.title, body: d.body, ...media });
  save(KEYS.nature, items);
  e.target.reset();
  document.getElementById("form-nature").hidden = true;
  document.getElementById("btn-add-nature").textContent = "＋";
  renderNature();
});

document.getElementById("form-note").addEventListener("submit", async (e) => {
  e.preventDefault();
  const user = currentUser();
  if (!canManage(user)) return;
  const d = Object.fromEntries(new FormData(e.target));
  const media = await mediaFromForm(e.target);
  const items = load(KEYS.notes, []);
  items.unshift({ id: uid("note"), body: d.body, from: `${user.firstName} ${user.lastName}`, ...media });
  save(KEYS.notes, items);
  e.target.reset();
  document.getElementById("form-note").hidden = true;
  document.getElementById("btn-add-note").textContent = "＋";
  renderNotes();
});

document.getElementById("form-idea").addEventListener("submit", (e) => {
  e.preventDefault();
  const user = currentUser();
  if (!user || user.role !== "pupil") return;
  const d = Object.fromEntries(new FormData(e.target));
  const items = load(KEYS.ideas, []);
  items.unshift({
    id:          uid("idea"),
    body:        d.body,
    pupilClass:  user.className,
    grade:       user.grade,
    classLetter: user.classLetter,
    from:        `${user.firstName} ${user.lastName}`,
    status:      "new"
  });
  save(KEYS.ideas, items);
  e.target.reset();
  renderIdeas();
  renderTeacherInbox(); // refresh inbox badge
});

document.getElementById("btn-save-schedule").addEventListener("click", saveSchedule);

document.getElementById("form-sotm").addEventListener("submit", async (e) => {
  e.preventDefault();
  if (!canManage(currentUser())) return;
  const d = Object.fromEntries(new FormData(e.target));
  const imgFile = e.target.elements["photo"]?.files[0] || null;
  const imageData = await readFileAsDataURL(imgFile);
  save(KEYS.sotm, { name: d.name, grade: d.grade, reason: d.reason, imageData });
  e.target.reset();
  renderSotm();
});

/* School Moments — pupil upload (goes to pending) */
document.getElementById("form-moment").addEventListener("submit", async (e) => {
  e.preventDefault();
  const user = currentUser();
  if (!user || user.role !== "pupil") return;
  const d       = Object.fromEntries(new FormData(e.target));
  const imgFile = e.target.elements["photo"]?.files[0] || null;
  if (!imgFile) return;
  const imageData = await readFileAsDataURL(imgFile);
  if (!imageData) return;
  const pending = load(KEYS.momentsPending, []);
  pending.push({
    id:          uid("m"),
    grade:       user.grade,
    classLetter: user.classLetter,
    className:   user.className,
    firstName:   user.firstName,
    lastName:    user.lastName,
    imageData,
    caption:     d.caption ? d.caption.trim() : ""
  });
  save(KEYS.momentsPending, pending);
  e.target.reset();
  renderMoments();
});

/* =========================================================
   Global delegation
   ========================================================= */
navToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(open));
});

nav.addEventListener("click", (e) => {
  if (e.target.id === "btn-logout") { logout(); return; }
  if (e.target.id === "btn-nav-login") {
    gate.hidden     = false;
    appShell.hidden = false;
    document.body.classList.add("is-gated");
    showGateScreen(localStorage.getItem(KEYS.lang) ? "role" : "lang");
    return;
  }
  const link = e.target.closest("[data-page]");
  if (!link) return;
  e.preventDefault();
  // Close the More menu when any link is clicked
  const moreMenu = document.getElementById("nav-more-menu");
  const moreBtn  = document.getElementById("btn-nav-more");
  if (moreMenu) moreMenu.hidden = true;
  if (moreBtn)  moreBtn.classList.remove("is-open");
  showPage(link.dataset.page);
});

document.body.addEventListener("click", (e) => {
  // Close More menu on outside click
  if (!e.target.closest("#nav-more-wrap")) {
    const m = document.getElementById("nav-more-menu");
    const b = document.getElementById("btn-nav-more");
    if (m) m.hidden = true;
    if (b) b.classList.remove("is-open");
  }

  const pageLink = e.target.closest("a[data-page], button[data-page]");
  if (pageLink && !pageLink.closest(".main-nav")) {
    e.preventDefault(); showPage(pageLink.dataset.page);
  }

  const clubBtn = e.target.closest("[data-club]");
  if (clubBtn) { openClub(clubBtn.dataset.club); return; }

  const del = e.target.closest("[data-delete]");
  if (del && canManage(currentUser())) {
    const map = {
      announcements: KEYS.announcements, events: KEYS.events,
      nature: KEYS.nature, notes: KEYS.notes
    };
    const items = load(map[del.dataset.delete], []).filter((x) => x.id !== del.dataset.id);
    save(map[del.dataset.delete], items);
    renderAnnouncements(); renderEvents(); renderNature(); renderNotes();
    return;
  }

  const done = e.target.closest("[data-idea-done]");
  if (done && canManage(currentUser())) {
    const items = load(KEYS.ideas, []).map((x) =>
      x.id === done.dataset.ideaDone ? { ...x, status: "done" } : x
    );
    save(KEYS.ideas, items);
    renderIdeas(); return;
  }

  // Approve pupil
  const approvePupil = e.target.closest("[data-approve-pupil]");
  if (approvePupil && canManage(currentUser())) {
    const id      = approvePupil.dataset.approvePupil;
    const pending = load(KEYS.pupilApprovals, []);
    const p       = pending.find((x) => x.id === id);
    if (p) {
      saveAccount(p.grade, p.classLetter, "pupil", {
        firstName: p.firstName, lastName: p.lastName,
        password:  p.password,  photoData: p.photoData || null
      });
      const updated = pending.filter((x) => x.id !== id);
      save(KEYS.pupilApprovals, updated);
      renderPupilApprovals();
      renderMyClass();
      renderTeacherInbox();
    }
    return;
  }

  // Reject pupil
  const rejectPupil = e.target.closest("[data-reject-pupil]");
  if (rejectPupil && canManage(currentUser())) {
    const updated = load(KEYS.pupilApprovals, []).filter((x) => x.id !== rejectPupil.dataset.rejectPupil);
    save(KEYS.pupilApprovals, updated);
    renderPupilApprovals(); return;
  }

  // Approve moment
  const approveMoment = e.target.closest("[data-approve-moment]");
  if (approveMoment && canManage(currentUser())) {
    const id      = approveMoment.dataset.approveMoment;
    const pending = load(KEYS.momentsPending, []);
    const m       = pending.find((x) => x.id === id);
    if (m) {
      const approved = load(KEYS.moments, []);
      approved.unshift(m);
      save(KEYS.moments, approved);
      save(KEYS.momentsPending, pending.filter((x) => x.id !== id));
      renderMoments();
      renderMediaApprovals();
      renderTeacherInbox();
    }
    return;
  }

  // Reject moment
  const rejectMoment = e.target.closest("[data-reject-moment]");
  if (rejectMoment && canManage(currentUser())) {
    save(KEYS.momentsPending, load(KEYS.momentsPending, []).filter((x) => x.id !== rejectMoment.dataset.rejectMoment));
    renderMoments();
    renderMediaApprovals();
    renderTeacherInbox();
    return;
  }

  // Delete approved moment
  const delMoment = e.target.closest("[data-delete-moment]");
  if (delMoment && canManage(currentUser())) {
    save(KEYS.moments, load(KEYS.moments, []).filter((x) => x.id !== delMoment.dataset.deleteMoment));
    renderMoments(); return;
  }

  // Approve account-change appeal
  const approveAppeal = e.target.closest("[data-approve-appeal]");
  if (approveAppeal && canManage(currentUser())) {
    const teacher = currentUser();
    const id      = approveAppeal.dataset.approveAppeal;
    const appeals = load(KEYS.appeals, []);
    const appeal  = appeals.find((a) => a.id === id);
    if (appeal) {
      appeal.status          = "approved";
      appeal.teacherResponse = `${teacher.firstName} ${teacher.lastName}`;
      save(KEYS.appeals, appeals);
      const notifKey = `${KEYS.notifPrefs}-${appeal.from}`;
      const prefs    = load(notifKey, { appealDecisions: true });
      if (prefs.appealDecisions !== false) {
        const notifs = load(KEYS.studentNotifs, []);
        notifs.unshift({
          id:          uid("sn"),
          type:        "appeal-decision",
          to:          appeal.from,
          pupilName:   appeal.pupilName,
          decision:    "approved",
          requestText: appeal.requestText,
          teacherName: `${teacher.firstName} ${teacher.lastName}`,
          timestamp:   Date.now(),
          read:        false
        });
        save(KEYS.studentNotifs, notifs);
      }
      renderTeacherInbox();
      renderStudentInbox();
      renderSettingsPage();
    }
    return;
  }

  // Reject account-change appeal
  const rejectAppeal = e.target.closest("[data-reject-appeal]");
  if (rejectAppeal && canManage(currentUser())) {
    const teacher = currentUser();
    const id      = rejectAppeal.dataset.rejectAppeal;
    const appeals = load(KEYS.appeals, []);
    const appeal  = appeals.find((a) => a.id === id);
    if (appeal) {
      appeal.status          = "rejected";
      appeal.teacherResponse = `${teacher.firstName} ${teacher.lastName}`;
      save(KEYS.appeals, appeals);
      const notifKey = `${KEYS.notifPrefs}-${appeal.from}`;
      const prefs    = load(notifKey, { appealDecisions: true });
      if (prefs.appealDecisions !== false) {
        const notifs = load(KEYS.studentNotifs, []);
        notifs.unshift({
          id:          uid("sn"),
          type:        "appeal-decision",
          to:          appeal.from,
          pupilName:   appeal.pupilName,
          decision:    "rejected",
          requestText: appeal.requestText,
          teacherName: `${teacher.firstName} ${teacher.lastName}`,
          timestamp:   Date.now(),
          read:        false
        });
        save(KEYS.studentNotifs, notifs);
      }
      renderTeacherInbox();
      renderStudentInbox();
      renderSettingsPage();
    }
    return;
  }

  // Mark student notification as read
  const markRead = e.target.closest("[data-mark-notif-read]");
  if (markRead) {
    const id     = markRead.dataset.markNotifRead;
    const notifs = load(KEYS.studentNotifs, []).map((n) =>
      n.id === id ? { ...n, read: true } : n
    );
    save(KEYS.studentNotifs, notifs);
    renderStudentInbox();
    renderNav(currentUser());
    return;
  }

  // Camera — open
  if (e.target.id === "btn-open-camera") {
    const panel = document.getElementById("camera-panel");
    if (panel) {
      panel.hidden = false;
      startCamera();
    }
    return;
  }

  // Camera — capture
  if (e.target.id === "btn-capture") {
    capturePhoto();
    return;
  }

  // Camera — cancel
  if (e.target.id === "btn-cancel-camera") {
    stopCamera();
    const panel = document.getElementById("camera-panel");
    if (panel) panel.hidden = true;
    const preview = document.getElementById("camera-captured-preview");
    if (preview) preview.hidden = true;
    return;
  }

  // Camera — retake
  if (e.target.id === "btn-retake-photo") {
    const preview = document.getElementById("camera-captured-preview");
    if (preview) preview.hidden = true;
    const panel = document.getElementById("camera-panel");
    if (panel) panel.hidden = false;
    startCamera();
    return;
  }

  // Camera — use captured photo
  if (e.target.id === "btn-use-photo") {
    submitCameraPhoto();
    return;
  }

  // Camera — show file upload instead
  if (e.target.id === "btn-show-upload") {
    const uploadForm = document.getElementById("form-moment");
    const cameraSection = document.getElementById("camera-section");
    if (uploadForm)     uploadForm.hidden = false;
    if (cameraSection)  cameraSection.hidden = true;
    return;
  }

  if (e.target.closest("[data-close-modal]")) closeModal();
});

document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal(); });

/* =========================================================
   Avatar preview — live photo preview in signup forms
   ========================================================= */
function setupAvatarPreview(inputId, previewId) {
  const input   = document.getElementById(inputId);
  const preview = document.getElementById(previewId);
  if (!input || !preview) return;
  input.addEventListener("change", () => {
    const file = input.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      preview.innerHTML = `<img src="${e.target.result}" alt="Preview">`;
    };
    reader.readAsDataURL(file);
  });
}
setupAvatarPreview("pupil-photo-input",   "pupil-avatar-preview");
setupAvatarPreview("teacher-photo-input", "teacher-avatar-preview");

/* =========================================================
   Boot
   ========================================================= */
seedIfNeeded();

applyTranslations();
applyTheme();

if (window.location.hash === "#admin") {
  enterApp();
  openGate("admin-login");
} else if (currentUser()) {
  // Logged-in returning user — straight to homepage
  enterApp();
} else {
  // Always start at splash, wipe any saved lang so language screen shows fresh
  localStorage.removeItem(KEYS.lang);

  appShell.hidden = false;
  gate.hidden     = false;
  document.body.classList.add("is-gated");
  showGateScreen("splash");

  // Pre-render content behind the gate
  renderNav(null);
  renderChrome(null);
  renderHome(null);
  renderClubs();
  renderAnnouncements();
  renderSchedule();
  renderEvents();
  renderNature();
  renderIdeas();
  renderNotes();
  renderSotm();
  renderMoments();
  renderMyClass();
}
