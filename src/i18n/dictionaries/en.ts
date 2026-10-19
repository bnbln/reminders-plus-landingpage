// Source dictionary for the website. Every other language mirrors these keys.
// Where a string also exists in the app (bnbln/reminders-plus, i18n/locales),
// the app key is noted so the wording stays the same as inside the app.
// Placeholders: {minIos} and {languageCount} are filled in from src/lib/app-info.ts.
const en = {
    meta: {
        title: 'Reminders+ — Build habits. Keep streaks. Stay productive.',
        description: 'A modern task and routine app that helps you build consistency. Complete one task every day and keep your streak alive.',
    },
    nav: {
        features: 'Features',
        plus: 'Plus',
        faq: 'FAQ',
        download: 'Download',
        home: 'Home',
        logoAlt: 'Reminders+ logo',
    },
    language: {
        // Accessible name of the language button and heading of its list.
        label: 'Language',
    },
    hero: {
        badge: 'Start your streak today',
        titleLine1: 'One task a day.',
        titleLine2: 'Endless results.',
        subtitle: 'Build lasting habits with daily streaks. Organize tasks and routines in one beautiful app.',
        cta: 'Download free',
        note: 'iPhone & iPad · No account needed',
        tasksScreenAlt: 'Reminders+ Tasks screen',
        streaksScreenAlt: 'Reminders+ Streaks screen',
    },
    featureIcons: {
        streaksTitle: 'Daily streaks',
        streaksSubtitle: 'One task a day keeps the fire burning',
        tasksTitle: 'Tasks & routines',
        tasksSubtitle: 'Everything in one place',
        privacyTitle: 'Private by design',
        privacySubtitle: 'No account, no tracking',
    },
    featureCards: {
        titleLine1: 'Simple habits,',
        titleLine2: 'powerful results.',
        subtitle: 'Build consistency with small daily wins. No overwhelming to-do lists.',
        streakLabel: 'Daily streaks',
        dayStreak: 'day streak', // app: streaks.hero.other
        activity: 'Activity', // app: streaks.chart.activity
        streakText: 'Complete at least one task daily and watch your streak grow.',
        todayLabel: 'Today', // app: common.today
        task1Title: 'Morning run',
        task1Meta: 'Routine · Daily',
        task2Title: 'Read 20 pages',
        task2Meta: 'Today · Personal',
        task3Title: 'Groceries',
        task3Meta: 'Today · Home',
        swipeTitle: 'Swipe right', // app: seed.task.swipeRight.title
        swipeSubtitle: 'to complete the task', // app: seed.task.swipeRight.subtitle
        tasksText: 'Swipe, drag and drop. Tasks and routines in one calm list.',
        dataLabel: 'Your data',
        dataOnDevice: 'Stored on your device',
        dataNoAccount: 'No account required',
        dataNoTracking: 'No tracking, no ads',
        dataText: 'Your tasks stay on your device. Optional iCloud sync runs through your own Apple account.',
    },
    moreFeatures: {
        titleLine1: 'Everything you need,',
        titleLine2: 'nothing you don\'t.',
        subtitle: 'Free to use. Upgrade to Plus for AI Assist, more than 4 projects and iCloud Sync.',
        plusBadge: 'Plus',
        widgetsTitle: 'Widgets',
        widgetsText: 'Your streak and today\'s tasks on the Home Screen and Lock Screen. Check tasks off without opening the app.',
        assistTitle: 'AI Assist', // app: plus.benefit.assist
        assistText: 'Create, find and move tasks in plain language. Runs on Apple Intelligence, right on your device.',
        syncTitle: 'iCloud Sync',
        syncText: 'Keep tasks and projects in sync across your iPhone and iPad through your own iCloud account.',
        importTitle: 'Import from Apple',
        importText: 'Bring in reminders from Apple Reminders and events from Apple Calendar as tasks.',
        themeTitle: 'Make it yours',
        themeText: 'Light and dark mode, accent colors, and an app icon that takes on your color.',
        languagesTitle: '{languageCount} languages',
        languagesText: 'Use Reminders+ in English, German, Spanish, French, Japanese, Chinese, Arabic and many more.',
    },
    plus: {
        label: 'Reminders+ Plus',
        titleLine1: 'Do more,',
        titleLine2: 'when you want.',
        text: 'Reminders+ is free. Plus adds AI Assist, more projects and iCloud Sync, as a monthly subscription or a one-time lifetime purchase through the App Store.',
        plans: 'Monthly · Lifetime', // app: plus.offer.monthly.title · plus.offer.lifetime.title
        cardTitle: 'More focus, fewer limits.', // app: plus.hero.title
        cardText: 'Activate AI Assist, more projects and Cloud Sync directly via Apple.', // app: plus.source.default
        benefitAssist: 'AI Assist', // app: plus.benefit.assist
        benefitProjects: 'More than 4 projects', // app: plus.benefit.projects
        benefitSync: 'Cloud Sync on Apple devices', // app: plus.benefit.sync
        cta: 'Discover Plus', // app: settings.remindsPlus.action.discover
    },
    testimonials: {
        title: 'They love it, so will you',
        quote1: 'Finally an app that keeps me consistent',
        role1: 'Productivity enthusiast',
        quote2: 'The streak system is incredibly motivating',
        role2: 'Daily user',
        quote3: 'Simple, beautiful, and it just works',
        role3: 'Habit builder',
    },
    faq: {
        titleLine1: 'Got questions?',
        titleLine2: 'Here are the answers.',
        subtitle: 'Everything you need to know about Reminders+.',
        items: [
            {
                question: 'What is Reminders+?',
                answer: 'Reminders+ is a modern task and routine app designed to help you build consistency. Instead of overwhelming to-do lists, it focuses on one simple principle: complete at least one task every day and keep your streak alive.',
            },
            {
                question: 'How does the streak system work?',
                answer: 'Every day you complete at least one task, your streak increases by one. Miss a day, and it resets to zero. This simple mechanism motivates you to stay productive and build lasting habits through consistent daily progress.',
            },
            {
                question: 'Is my data private?',
                answer: 'Yes. Your tasks, projects and routines are stored on your device. There is no account, no tracking and no ads. If you turn on iCloud Sync, your data is synced through your own iCloud account via Apple. You can export all your data as a JSON file at any time.',
            },
            {
                question: 'What platforms is it available on?',
                answer: 'Reminders+ is available for iPhone and iPad (iOS {minIos} or later). Home Screen and Lock Screen widgets show your streak and today\'s tasks at a glance.',
            },
            {
                question: 'Is Reminders+ free?',
                answer: 'Yes, Reminders+ is free to download and use, including daily streaks, routines, widgets and data export. The optional Plus upgrade, available as a monthly subscription or a one-time lifetime purchase through the App Store, adds AI Assist, more than 4 projects and iCloud Sync across your Apple devices.',
            },
            {
                question: 'What is AI Assist?',
                answer: 'AI Assist helps you create, find and organize tasks and projects in plain language. It runs on Apple\'s on-device Foundation Models, so your requests are processed on your device. It requires a device that supports Apple Intelligence.',
            },
            {
                question: 'Can I import from Apple Reminders or Calendar?',
                answer: 'Yes. With your permission, Reminders+ can import reminders from Apple Reminders and events from Apple Calendar into your tasks.',
            },
            {
                question: 'Does it support multiple languages?',
                answer: 'Yes! Reminders+ is available in {languageCount} languages, including English, German, Spanish, French, Japanese, Chinese and Arabic.',
            },
        ],
    },
    cta: {
        step1: 'Download the app',
        step2: 'Add your first task',
        step3: 'Start your streak!',
        appSubtitle: 'Tasks & Habits',
        appIconAlt: 'Reminders+ app icon',
        badgeAlt: 'Download on the App Store',
        note: 'Free download · No account required',
    },
    footer: {
        product: 'Product',
        legal: 'Legal',
        getStarted: 'Get Started',
        privacy: 'Privacy Policy',
        terms: 'Terms of Use',
        impressum: 'Impressum',
        contact: 'Contact',
        rights: 'All rights reserved.',
        version: 'Version {version} · iPhone & iPad · iOS {minIos} or later',
    },
    contact: {
        metaTitle: 'Contact — Reminders+',
        metaDescription: 'Contact Reminders+ for support, feedback, or inquiries',
        title: 'Contact us',
        subtitle: 'We\'d love to hear from you',
        supportTitle: 'Support',
        supportText: 'Having issues with the app? We\'re here to help.',
        feedbackTitle: 'Feedback',
        feedbackText: 'Have a suggestion or feature request? Let us know!',
        generalTitle: 'General inquiries',
        generalText: 'For all other questions and inquiries.',
        rateTitle: 'Rate the app',
        rateText: 'Enjoying Reminders+? Leave us a review!',
        rateLink: 'Open in App Store',
        responseTitle: 'Response time',
        responseText: 'We typically respond within 24 to 48 hours on business days. For urgent issues, please include "URGENT" in your email subject line.',
        legalText: 'Legal information',
    },
    legal: {
        // Shown above the Privacy Policy, Terms and Impressum, which are only
        // published in English. Empty for English itself.
        originalOnly: '',
    },
};

export default en;
