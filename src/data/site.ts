export type Lang = 'en' | 'hi';
export const site = {
  name: 'Shanti Jan Kalyan Sansthan (Regd.)',
  domain: 'shantijankalyansanstha.in',
  email: 'sunitabhushan67@gmail.com',
  phones: ['+919821958768', '+919315514056'],
  phoneLabels: ['+91 98219 58768', '+91 93155 14056'],
  facebook: 'https://www.facebook.com/share/19gLWQBAkK/',
  instagram:
    'https://www.instagram.com/sonibhushan62?utm_source=qr&stkn=MWpueWxjcXJya21lZQ==',
  // Address as printed on the NGO's card ("नजफू" corrected to Majnu Ka Tilla, PIN 110054).
  address: {
    en: 'Shanti Dham Ashram, Yamuna Ka Kinara, Dera Baba Chhubitas, near Majnu Ka Tilla Gurudwara Bus Stand, Delhi – 110054, India',
    hi: 'शान्ति धाम आश्रम, जमुना का किनारा, डेरा बाबा छुबितास, मजनू का टीला गुरुद्वारा बस स्टैंड के पास, दिल्ली – 110054',
  },
  mapUrl:
    'https://www.google.com/maps/search/?api=1&query=Majnu+Ka+Tilla+Gurudwara+Delhi+110054',
  bank: {
    name: 'UNION BANK OF INDIA',
    accountName: 'SHANTI JAN KALYAN SANSTHAN',
    account: '063721010000024',
    ifsc: 'UBINO906379',
  },
};
export const routes = [
  '',
  'about',
  'our-work',
  'old-age-home',
  'child-welfare',
  'yoga-meditation',
  'medical-support',
  'day-care',
  'our-journey',
  'activities',
  'gallery',
  'videos',
  'get-involved',
  'donate',
  'contact',
  'privacy-policy',
  'terms',
  'support-policy',
];
export const url = (lang: Lang, slug = '') =>
  `${lang === 'hi' ? '/hi' : ''}/${slug ? slug + '/' : ''}`;
// The NGO's own photographs, prepared by scripts/prepare-photos.mjs.
export const img = (name: string) => `/images/photos/${name}.webp`;
export const imgSm = (name: string) => `/images/photos/${name}-sm.webp`;
export const srcset = (name: string) =>
  `${imgSm(name)} 640w, ${img(name)} 1600w`;

// Header photograph for inner routes; policy pages have none.
export const pageImages: Record<string, string> = {
  about: 'president-with-resident',
  'our-work': 'residents-gathering',
  'our-journey': 'ashram-dormitory',
  activities: 'street-outreach',
  gallery: 'shared-meal',
  videos: 'yoga-session',
  'get-involved': 'volunteers',
  donate: 'ration-distribution',
  contact: 'office-celebration',
};

export const copy = {
  en: {
    name: site.name,
    tagline: 'Service to Humanity for a Better Tomorrow',
    nav: [
      'Home',
      'About Us',
      'Our Work',
      'Gallery',
      'Videos',
      'Get Involved',
      'Contact',
    ],
    titles: [
      'Home',
      'About Us',
      'Our Work',
      'Old Age Home',
      'Orphanage & Child Care',
      'Yoga & Meditation',
      'Medical Support',
      'Day Care',
      'Our Journey',
      'Activities',
      'Photo Gallery',
      'NGO Activity Videos',
      'Get Involved',
      'Support Our Cause',
      'Contact Us',
      'Privacy Policy',
      'Terms & Conditions',
      'Donation & Support Information',
    ],
    donate: 'Donate Now',
    work: 'Explore Our Work',
    ourWork: 'Our Work',
    support: 'Support Us',
    more: 'Learn More',
    read: 'Read More',
    skip: 'Skip to content',
    menu: 'Open navigation',
    close: 'Close',
    follow: 'Follow Us:',
    language: 'Language',
    heroScript: 'Together for a Kinder, Healthier and Happier Society',
    hero1: 'Care Today',
    hero2: 'Brighter Tomorrows',
    heroText:
      'Shanti Jan Kalyan Sansthan (Regd.) is dedicated to the care of the elderly, support for orphans, promotion of yoga and meditation, and providing medical facilities to those in need.',
    heroBadges: [
      'Registered NGO',
      'Free care for destitute elders',
      'Serving Delhi with love',
    ],
    heroEyebrow: 'Shanti Dham Ashram · Delhi',
    heroTitle: 'No elder should be left without care.',
    heroAlt: 'Residents of Shanti Dham Ashram gathered with our team',
    heroPhotoAlts: [
      'A shared meal at Shanti Dham Vridhashram',
      'A caregiver checking on a resident’s health',
    ],
    heroPlace: 'Majnu Ka Tilla, Delhi',
    heroNoteTitle: 'Free of cost',
    heroNoteText: 'Shelter, meals and medical care for destitute elders',
    credentials: [
      'Regd. No. 323',
      '80G & 12A registered',
      'NITI Aayog Darpan listed',
    ],
    eyebrow: 'Our Programs',
    aboutEyebrow: 'About Us',
    aboutTitle: 'A helping hand. A place to belong.',
    aboutText:
      'Shanti Jan Kalyan Sansthan (Regd.) is a social welfare organization committed to serving humanity. We run an old age home, support orphans, promote yoga and meditation, and provide essential medical facilities to the needy. Our aim is to create a healthier, more compassionate and inclusive society.',
    aboutText2:
      'For destitute elders, our ashram offers shelter, meals, yoga, meditation and medical facilities free of cost — because every person deserves to live with warmth, respect and dignity.',
    leader: 'Sunita Bhushan',
    leaderRole: 'National President',
    aboutLinks: [
      'Our Mission',
      'Our Vision',
      'Our Objectives',
      'Our Activities',
      'Join Our Cause',
    ],
    mission: 'Our Mission',
    missionText:
      'To support destitute elders, orphaned children and people in need through compassionate care, free facilities and community service.',
    vision: 'Our Vision',
    visionText:
      'A kinder, healthier society where no elder is left alone and every child has a chance to grow with love.',
    objectives: 'Our Objectives',
    objectivesText:
      'Our purpose is to connect practical support with care that respects each person.',
    objectivesList: [
      'Provide shelter, nutritious food and companionship to destitute elders.',
      'Give orphaned and underprivileged children education, food and love.',
      'Promote physical and mental well-being through yoga and meditation.',
      'Make basic healthcare and medicines reachable for the needy.',
    ],
    values: 'Dignity · Compassion · Community',
    aboutPhoto: 'Care that feels like family',
    impactEyebrow: 'Our Impact',
    impactTitle: 'Changing Lives, Building a Kinder Society',
    stats: [
      'Elderly People Supported',
      'Children & Orphans Cared For',
      'Medical Beneficiaries',
      'Yoga & Meditation Participants',
    ],
    programsEyebrow: 'Our Programs & Work Areas',
    programsTitle: 'Focused Initiatives for a Healthier and Happier Community',
    programsText: 'Every program is built around dignity, care and compassion.',
    viewPrograms: 'View All Programs',
    journeyEyebrow: 'Our Shared Purpose',
    journeyTitle: 'A journey rooted in service.',
    journeyText:
      'Our work connects everyday care with a wider commitment to community well-being.',
    journey: [
      'Listen with empathy',
      'Respond with care',
      'Build connections',
      'Continue together',
    ],
    journeyDescriptions: [
      'We understand the needs of elders, children and families who reach out to us.',
      'Shelter, food, medical help and companionship — offered with dignity.',
      'Volunteers, donors and neighbours join hands in community service.',
      'Every initiative keeps care, respect and compassion at its heart.',
    ],
    journeyLink: 'Explore Our Journey',
    galleryEyebrow: 'Photo Gallery',
    galleryTitle: 'Photo Gallery',
    galleryText: 'Moments of Care, Compassion and Community',
    viewPhotos: 'View More Photos',
    all: 'All Photos',
    photoNote:
      'Every photograph on this website was taken during the work of Shanti Jan Kalyan Sansthan.',
    next: 'Next photograph',
    previous: 'Previous photograph',
    enlarge: 'View photograph',
    galleryFilters: {
      elders: 'Elder Care',
      health: 'Medical Care',
      wellness: 'Yoga & Wellness',
      outreach: 'Street Outreach',
      community: 'Community',
    },
    videosEyebrow: 'Our Work in Action',
    videosTitle: 'NGO Activity Videos',
    videosText: 'Watch Our Work in Action',
    videosPageText:
      'Short films recorded by our team at the ashram and on the streets of Delhi. More stories are shared regularly on our Facebook and Instagram pages.',
    playVideo: 'Play video',
    minutes: 'min',
    viewVideos: 'View All Videos',
    watchOn: 'Watch on Facebook',
    followFacebook: 'Follow on Facebook',
    followInstagram: 'Follow on Instagram',
    supportEyebrow: 'Support Our Cause',
    supportTitle: 'Your Kindness Can Change Lives',
    supportText:
      'Your contribution helps us provide food, shelter, healthcare, education and a better future for the elderly, children and underprivileged people. Together we can build a more compassionate and healthier society.',
    supportUses: [
      'Nutritious meals for elders & children',
      'Medicines and health check-ups',
      'Education and school supplies',
      'Warm clothes, blankets and shelter',
    ],
    bankTitle: 'Bank Details',
    bankLabels: ['Bank Name', 'Account Name', 'Account No.', 'IFSC Code'],
    copyAccount: 'Copy account number',
    copied: 'Account number copied',
    copyError: 'Please select and copy the account number.',
    scan: 'Scan & Donate',
    qrAlt: 'Donation QR code of Shanti Jan Kalyan Sansthan',
    qrNote: 'Scan this QR code to support our work',
    livesEyebrow: 'Lives We Touch',
    livesTitle: 'The people at the heart of our work',
    livesText:
      'Elders, patients and people from the street who found care, dignity and company with us.',
    pauseStrip: 'Pause moving photographs',
    involvedTitle: 'A little of your time. A world of possibility.',
    involvedText:
      'Volunteer, donate, partner with us or help spread awareness. Every helping hand brings comfort to someone who needs it.',
    involved: 'Find Your Way to Help',
    involvedOptions: [
      'Volunteer Your Time',
      'Donate & Sponsor',
      'Partner With Us',
      'Spread the Word',
    ],
    involvedDescriptions: [
      'Spend time with elders, teach children or help at our health and yoga sessions.',
      'Sponsor meals, medicines, blankets or a child’s education with any amount.',
      'Schools, companies and groups can join hands for drives and health camps.',
      'Share our story and official social pages so more people can help.',
    ],
    involvedActions: ['Contact Us', 'Donate Now', 'Contact Us', 'Follow Us'],
    contactEyebrow: 'Get In Touch',
    contactTitle: 'We would love to hear from you.',
    contactText:
      'Join hands with us for a better and kinder society. Call, email or visit us — we are happy to help.',
    office: 'Our Office',
    directions: 'Get Directions',
    call: 'Call Us',
    email: 'Email Us',
    website: 'Website',
    location: 'Delhi, India',
    quickLinks: 'Quick Links',
    ourPrograms: 'Our Programs',
    contact: 'Contact Us',
    rights: 'All rights reserved.',
    designed: 'Designed with',
    designedFor: 'for a Better Society',
    footerText:
      'Working together for a kinder, healthier and happier society through care, compassion and service.',
    intro: 'Care, compassion and community guide everything we do.',
    why: 'Why this work matters',
    provides: 'What we provide',
    helpTitle: 'Be part of this work',
    helpText:
      'Your support — time, supplies or a donation — directly reaches the people in our care.',
    related: 'Explore More of Our Work',
    activityTitle: 'A closer look at community care.',
    activityText:
      'Daily life at our ashram is filled with care, prayer, yoga, meals together and moments of joy. Contact our team to visit or take part.',
    formTitle: 'Send Us a Message',
    formNote:
      'This form prepares a draft in your email app. Your message is sent when you send the email.',
    fields: [
      'Your name',
      'Phone number',
      'Email address',
      'Subject',
      'Your message',
    ],
    subjects: [
      'General enquiry',
      'Volunteering',
      'Program enquiry',
      'Donation enquiry',
      'Partnership',
    ],
    formSubmit: 'Prepare Email',
    formSuccess:
      'Your email draft is ready. Open it, review and send it from your email app.',
    formFallback: 'Open the prepared email',
    faqTitle: 'Before You Donate',
    faqs: [
      [
        'How can I make a contribution?',
        'Transfer to our Union Bank of India account or scan the QR code with any UPI app. Please confirm the recipient name “Shanti Jan Kalyan Sansthan” before paying.',
      ],
      [
        'Can I donate food, clothes or medicines?',
        'Yes. Call us to know the current needs of the ashram and a convenient time to drop off supplies.',
      ],
      [
        'How do I get an acknowledgement for my donation?',
        'Call or email the team with your transfer details and we will get back to you. Never share your payment PIN, password or OTP with anyone.',
      ],
    ],
    policyIntro:
      'Practical information about using this website and contacting the organization.',
    privacy: [
      [
        'Information you share',
        'The contact form creates an email draft on your device. This website does not itself submit or store form entries. Information you choose to send by email or provide by phone is received by the organization.',
      ],
      [
        'Language preference',
        'Your language choice is saved in your browser’s local storage. You can remove it by clearing site data.',
      ],
      [
        'External services',
        'Social, maps and email links open third-party services. Their own privacy practices apply. This website does not include embedded social trackers or analytics.',
      ],
      [
        'Questions',
        'For questions about information you have shared with the organization, contact us by email or phone.',
      ],
    ],
    terms: [
      [
        'Using the website',
        'This website provides general information about the organization and its areas of work. Please contact the team to confirm current availability and participation arrangements.',
      ],
      [
        'Photographs and content',
        'The logo, photographs and videos belong to the organization and show its own work. Please ask the organization before reusing any content.',
      ],
      [
        'External links',
        'Links to Facebook, Instagram and Google Maps lead to external services. The organization’s team can help with questions about official updates.',
      ],
      [
        'Enquiries',
        'Preparing an email draft does not submit a message or confirm a booking, volunteer placement or donation.',
      ],
    ],
    supportPolicy: [
      [
        'How to support',
        'Contributions can be made using the bank information and QR code supplied by the organization. Confirm the recipient and payment details before making a transfer.',
      ],
      [
        'Questions about payments',
        'Contact the organization directly for contribution-related questions, acknowledgements or any request concerning a payment.',
      ],
      [
        'Receipts and tax questions',
        'This website does not promise tax benefits or automatic receipts. Ask the team for any applicable documentation before contributing.',
      ],
      [
        'Payment processing',
        'This website does not process payments, collect card details or provide transaction confirmation. Transfers are handled by your bank or payment provider.',
      ],
    ],
    notFound: 'This page could not be found.',
    backHome: 'Return Home',
  },
  hi: {
    name: 'शांति जन कल्याण संस्थान (रजि.)',
    tagline: 'मानवता की सेवा, बेहतर कल के लिए',
    nav: [
      'होम',
      'हमारे बारे में',
      'हमारे कार्य',
      'गैलरी',
      'वीडियो',
      'हमसे जुड़ें',
      'संपर्क',
    ],
    titles: [
      'होम',
      'हमारे बारे में',
      'हमारे कार्य',
      'वृद्ध आश्रम',
      'अनाथालय एवं बाल देखभाल',
      'योग एवं ध्यान',
      'चिकित्सा सहयोग',
      'डे केयर',
      'हमारी यात्रा',
      'गतिविधियाँ',
      'फोटो गैलरी',
      'संस्थान की गतिविधियों के वीडियो',
      'हमसे जुड़ें',
      'हमारे कार्यों में सहयोग करें',
      'संपर्क करें',
      'गोपनीयता नीति',
      'नियम एवं शर्तें',
      'दान और सहयोग की जानकारी',
    ],
    donate: 'दान करें',
    work: 'हमारे कार्य देखें',
    ourWork: 'हमारे कार्य',
    support: 'हमारा साथ दें',
    more: 'और जानें',
    read: 'और पढ़ें',
    skip: 'मुख्य सामग्री पर जाएँ',
    menu: 'नेविगेशन खोलें',
    close: 'बंद करें',
    follow: 'हमसे जुड़ें:',
    language: 'भाषा',
    heroScript: 'एक दयालु, स्वस्थ और खुशहाल समाज के लिए साथ मिलकर',
    hero1: 'आज की देखभाल',
    hero2: 'कल की नई उम्मीद',
    heroText:
      'शांति जन कल्याण संस्थान (रजि.) बुज़ुर्गों की देखभाल, अनाथ बच्चों के सहयोग, योग एवं ध्यान के प्रचार और ज़रूरतमंदों को चिकित्सा सुविधाएँ उपलब्ध कराने के लिए समर्पित है।',
    heroBadges: [
      'पंजीकृत संस्था',
      'बेसहारा बुज़ुर्गों की निःशुल्क देखभाल',
      'दिल्ली में प्रेम से सेवा',
    ],
    heroEyebrow: 'शान्ति धाम आश्रम · दिल्ली',
    heroTitle: 'कोई भी बुज़ुर्ग बेसहारा न रहे।',
    heroAlt: 'हमारी टीम के साथ शान्ति धाम आश्रम के निवासी',
    heroPhotoAlts: [
      'शान्ति धाम वृद्धाश्रम में साथ भोजन',
      'एक निवासी के स्वास्थ्य की जाँच करती देखभालकर्ता',
    ],
    heroPlace: 'मजनू का टीला, दिल्ली',
    heroNoteTitle: 'पूरी तरह निःशुल्क',
    heroNoteText: 'बेसहारा बुज़ुर्गों के लिए आश्रय, भोजन और चिकित्सा देखभाल',
    credentials: [
      'पंजीकरण सं. 323',
      '80G और 12A पंजीकृत',
      'नीति आयोग दर्पण में सूचीबद्ध',
    ],
    eyebrow: 'हमारी पहल',
    aboutEyebrow: 'हमारे बारे में',
    aboutTitle: 'सहारा देने वाला हाथ। अपनापन देने वाली जगह।',
    aboutText:
      'शांति जन कल्याण संस्थान (रजि.) मानवता की सेवा के लिए समर्पित एक सामाजिक कल्याण संस्था है। हम वृद्ध आश्रम चलाते हैं, अनाथ बच्चों का सहयोग करते हैं, योग और ध्यान को बढ़ावा देते हैं और ज़रूरतमंदों को आवश्यक चिकित्सा सुविधाएँ देते हैं। हमारा लक्ष्य एक स्वस्थ, संवेदनशील और समावेशी समाज बनाना है।',
    aboutText2:
      'बेसहारा बुज़ुर्गों के लिए हमारे आश्रम में रहना, खाना, योग, मेडिटेशन और चिकित्सा सुविधाएँ निःशुल्क उपलब्ध हैं — क्योंकि हर व्यक्ति स्नेह, सम्मान और गरिमा के साथ जीने का हकदार है।',
    leader: 'सुनीता भूषण',
    leaderRole: 'राष्ट्रीय अध्यक्ष',
    aboutLinks: [
      'हमारा मिशन',
      'हमारा दृष्टिकोण',
      'हमारे उद्देश्य',
      'हमारी गतिविधियाँ',
      'हमारे साथ जुड़ें',
    ],
    mission: 'हमारा मिशन',
    missionText:
      'संवेदनशील देखभाल, निःशुल्क सुविधाओं और सामुदायिक सेवा से बेसहारा बुज़ुर्गों, अनाथ बच्चों और ज़रूरतमंदों का सहारा बनना।',
    vision: 'हमारा दृष्टिकोण',
    visionText:
      'एक दयालु और स्वस्थ समाज, जहाँ कोई बुज़ुर्ग अकेला न रहे और हर बच्चे को प्यार से बढ़ने का अवसर मिले।',
    objectives: 'हमारे उद्देश्य',
    objectivesText:
      'हमारा उद्देश्य व्यावहारिक सहयोग को ऐसी देखभाल से जोड़ना है, जिसमें हर व्यक्ति का सम्मान हो।',
    objectivesList: [
      'बेसहारा बुज़ुर्गों को आश्रय, पौष्टिक भोजन और अपनापन देना।',
      'अनाथ और वंचित बच्चों को शिक्षा, भोजन और स्नेह देना।',
      'योग और ध्यान से शारीरिक व मानसिक स्वास्थ्य को बढ़ावा देना।',
      'ज़रूरतमंदों तक बुनियादी स्वास्थ्य सेवा और दवाइयाँ पहुँचाना।',
    ],
    values: 'सम्मान · करुणा · समुदाय',
    aboutPhoto: 'परिवार जैसा अपनापन',
    impactEyebrow: 'हमारा प्रभाव',
    impactTitle: 'जीवन में बदलाव, एक दयालु समाज का निर्माण',
    stats: [
      'बुज़ुर्गों को सहारा',
      'बच्चों व अनाथों की देखभाल',
      'चिकित्सा लाभार्थी',
      'योग एवं ध्यान प्रतिभागी',
    ],
    programsEyebrow: 'हमारे कार्यक्रम एवं कार्य क्षेत्र',
    programsTitle: 'स्वस्थ और खुशहाल समुदाय के लिए केंद्रित पहल',
    programsText: 'हमारा हर कार्यक्रम सम्मान, देखभाल और करुणा पर आधारित है।',
    viewPrograms: 'सभी कार्यक्रम देखें',
    journeyEyebrow: 'हमारा साझा उद्देश्य',
    journeyTitle: 'सेवा से जुड़ी एक यात्रा।',
    journeyText:
      'हमारी पहल रोज़मर्रा की देखभाल को समुदाय की खुशहाली के व्यापक संकल्प से जोड़ती है।',
    journey: [
      'संवेदनशीलता से सुनें',
      'देखभाल से साथ दें',
      'संबंध बनाएँ',
      'साथ आगे बढ़ें',
    ],
    journeyDescriptions: [
      'हम बुज़ुर्गों, बच्चों और परिवारों की ज़रूरतों को समझते हैं।',
      'आश्रय, भोजन, चिकित्सा और अपनापन — पूरे सम्मान के साथ।',
      'स्वयंसेवक, दानदाता और पड़ोसी सेवा में हाथ मिलाते हैं।',
      'हर पहल के केंद्र में देखभाल, सम्मान और करुणा रहती है।',
    ],
    journeyLink: 'हमारी यात्रा जानें',
    galleryEyebrow: 'फोटो गैलरी',
    galleryTitle: 'फोटो गैलरी',
    galleryText: 'देखभाल, करुणा और समुदाय के पल',
    viewPhotos: 'और फोटो देखें',
    all: 'सभी फोटो',
    photoNote:
      'इस वेबसाइट की सभी तस्वीरें शांति जन कल्याण संस्थान के कार्यों के दौरान ली गई हैं।',
    next: 'अगली तस्वीर',
    previous: 'पिछली तस्वीर',
    enlarge: 'तस्वीर देखें',
    galleryFilters: {
      elders: 'बुज़ुर्गों की देखभाल',
      health: 'चिकित्सा देखभाल',
      wellness: 'योग एवं स्वास्थ्य',
      outreach: 'सड़क पर सेवा',
      community: 'समुदाय',
    },
    videosEyebrow: 'हमारे कार्यों की झलक',
    videosTitle: 'संस्थान की गतिविधियों के वीडियो',
    videosText: 'हमारे कार्यों को देखें',
    videosPageText:
      'आश्रम और दिल्ली की सड़कों पर हमारी टीम द्वारा रिकॉर्ड किए गए छोटे वीडियो। नई कहानियाँ हमारे फेसबुक और इंस्टाग्राम पेज पर नियमित रूप से साझा की जाती हैं।',
    playVideo: 'वीडियो चलाएँ',
    minutes: 'मिनट',
    viewVideos: 'सभी वीडियो देखें',
    watchOn: 'फेसबुक पर देखें',
    followFacebook: 'फेसबुक पर जुड़ें',
    followInstagram: 'इंस्टाग्राम पर जुड़ें',
    supportEyebrow: 'हमारे कार्य में सहयोग करें',
    supportTitle: 'आपकी दयालुता जीवन बदल सकती है',
    supportText:
      'आपका सहयोग बुज़ुर्गों, बच्चों और वंचित लोगों के लिए भोजन, आश्रय, स्वास्थ्य सेवा, शिक्षा और बेहतर भविष्य देने में मदद करता है। साथ मिलकर हम एक अधिक संवेदनशील और स्वस्थ समाज बना सकते हैं।',
    supportUses: [
      'बुज़ुर्गों और बच्चों के लिए पौष्टिक भोजन',
      'दवाइयाँ और स्वास्थ्य जाँच',
      'शिक्षा और पढ़ाई की सामग्री',
      'गर्म कपड़े, कंबल और आश्रय',
    ],
    bankTitle: 'बैंक विवरण',
    bankLabels: ['बैंक का नाम', 'खाते का नाम', 'खाता संख्या', 'आईएफएससी कोड'],
    copyAccount: 'खाता संख्या कॉपी करें',
    copied: 'खाता संख्या कॉपी हो गई',
    copyError: 'कृपया खाता संख्या चुनकर कॉपी करें।',
    scan: 'स्कैन करें और दान दें',
    qrAlt: 'शांति जन कल्याण संस्थान का दान क्यूआर कोड',
    qrNote: 'हमारे कार्य में सहयोग के लिए यह क्यूआर कोड स्कैन करें',
    livesEyebrow: 'जिनके जीवन को हमने छुआ',
    livesTitle: 'हमारे कार्य के केंद्र में ये लोग हैं',
    livesText:
      'बुज़ुर्ग, मरीज़ और सड़क पर रहने वाले लोग, जिन्हें हमारे साथ देखभाल, सम्मान और अपनापन मिला।',
    pauseStrip: 'चलती तस्वीरें रोकें',
    involvedTitle: 'आपका थोड़ा सा समय। नई संभावनाओं की शुरुआत।',
    involvedText:
      'स्वयंसेवा करें, दान दें, साथ काम करें या जागरूकता फैलाएँ। मदद का हर हाथ किसी ज़रूरतमंद को सुकून देता है।',
    involved: 'सहयोग का अपना रास्ता चुनें',
    involvedOptions: [
      'अपना समय दें',
      'दान और प्रायोजन',
      'हमारे साथ भागीदार बनें',
      'जागरूकता फैलाएँ',
    ],
    involvedDescriptions: [
      'बुज़ुर्गों के साथ समय बिताएँ, बच्चों को पढ़ाएँ या स्वास्थ्य व योग सत्रों में मदद करें।',
      'किसी भी राशि से भोजन, दवाइयाँ, कंबल या किसी बच्चे की पढ़ाई प्रायोजित करें।',
      'स्कूल, कंपनियाँ और समूह अभियानों व स्वास्थ्य शिविरों में साथ जुड़ सकते हैं।',
      'हमारी कहानी और आधिकारिक सोशल पेज साझा करें ताकि और लोग मदद कर सकें।',
    ],
    involvedActions: ['संपर्क करें', 'दान करें', 'संपर्क करें', 'हमसे जुड़ें'],
    contactEyebrow: 'संपर्क में रहें',
    contactTitle: 'हमें आपसे बात करके खुशी होगी।',
    contactText:
      'एक बेहतर और दयालु समाज के लिए हमारे साथ जुड़ें। कॉल करें, ईमेल करें या मिलने आएँ — हम मदद के लिए तैयार हैं।',
    office: 'हमारा कार्यालय',
    directions: 'रास्ता देखें',
    call: 'कॉल करें',
    email: 'ईमेल करें',
    website: 'वेबसाइट',
    location: 'दिल्ली, भारत',
    quickLinks: 'महत्वपूर्ण लिंक',
    ourPrograms: 'हमारे कार्यक्रम',
    contact: 'संपर्क करें',
    rights: 'सर्वाधिकार सुरक्षित।',
    designed: 'प्रेम',
    designedFor: 'से बेहतर समाज के लिए बनाया गया',
    footerText:
      'देखभाल, करुणा और सेवा से एक दयालु, स्वस्थ और खुशहाल समाज के लिए साथ काम करें।',
    intro: 'देखभाल, करुणा और समुदाय हमारे हर कार्य का आधार हैं।',
    why: 'यह पहल क्यों ज़रूरी है',
    provides: 'हम क्या देते हैं',
    helpTitle: 'इस पहल से जुड़ें',
    helpText:
      'आपका सहयोग — समय, सामग्री या दान — सीधे हमारी देखभाल में रहने वाले लोगों तक पहुँचता है।',
    related: 'हमारे अन्य कार्य देखें',
    activityTitle: 'सामुदायिक देखभाल को करीब से जानें।',
    activityText:
      'हमारे आश्रम का रोज़मर्रा का जीवन देखभाल, प्रार्थना, योग, साथ भोजन और खुशी के पलों से भरा है। मिलने या जुड़ने के लिए हमारी टीम से संपर्क करें।',
    formTitle: 'हमें संदेश भेजें',
    formNote:
      'यह फ़ॉर्म आपके ईमेल ऐप में मसौदा तैयार करता है। ईमेल भेजने पर ही संदेश जाएगा।',
    fields: ['आपका नाम', 'फोन नंबर', 'ईमेल पता', 'विषय', 'आपका संदेश'],
    subjects: [
      'सामान्य जानकारी',
      'स्वयंसेवा',
      'कार्यक्रम की जानकारी',
      'दान संबंधी प्रश्न',
      'भागीदारी',
    ],
    formSubmit: 'ईमेल तैयार करें',
    formSuccess:
      'आपका ईमेल मसौदा तैयार है। इसे खोलें, जाँचें और अपने ईमेल ऐप से भेजें।',
    formFallback: 'तैयार ईमेल खोलें',
    faqTitle: 'दान से पहले जानें',
    faqs: [
      [
        'मैं योगदान कैसे दे सकता/सकती हूँ?',
        'हमारे यूनियन बैंक ऑफ इंडिया खाते में ट्रांसफर करें या किसी भी यूपीआई ऐप से क्यूआर कोड स्कैन करें। भुगतान से पहले प्राप्तकर्ता का नाम “शांति जन कल्याण संस्थान” जाँच लें।',
      ],
      [
        'क्या मैं भोजन, कपड़े या दवाइयाँ दान कर सकता/सकती हूँ?',
        'हाँ। आश्रम की वर्तमान ज़रूरतें और सामग्री देने का सुविधाजनक समय जानने के लिए हमें कॉल करें।',
      ],
      [
        'दान की पावती कैसे मिलेगी?',
        'अपने ट्रांसफर के विवरण के साथ टीम को कॉल या ईमेल करें, हम आपसे संपर्क करेंगे। भुगतान पिन, पासवर्ड या ओटीपी कभी किसी से साझा न करें।',
      ],
    ],
    policyIntro:
      'वेबसाइट का उपयोग करने और संस्थान से संपर्क करने की व्यावहारिक जानकारी।',
    privacy: [
      [
        'आपके द्वारा दी गई जानकारी',
        'संपर्क फ़ॉर्म आपके उपकरण में ईमेल मसौदा बनाता है। यह वेबसाइट स्वयं फ़ॉर्म की जानकारी भेजती या सहेजती नहीं है। ईमेल या फोन से दी गई जानकारी संस्थान को मिलती है।',
      ],
      [
        'भाषा की पसंद',
        'आपकी चुनी हुई भाषा ब्राउज़र के स्थानीय भंडारण में सहेजी जाती है। साइट डेटा हटाकर आप इसे मिटा सकते हैं।',
      ],
      [
        'बाहरी सेवाएँ',
        'सोशल, मैप और ईमेल लिंक अन्य सेवाएँ खोलते हैं। उनकी अपनी गोपनीयता नीतियाँ लागू होती हैं। इस वेबसाइट में सोशल ट्रैकर या विश्लेषण उपकरण नहीं लगाए गए हैं।',
      ],
      [
        'प्रश्न',
        'संस्थान को दी गई जानकारी से जुड़े प्रश्नों के लिए ईमेल या फोन से संपर्क करें।',
      ],
    ],
    terms: [
      [
        'वेबसाइट का उपयोग',
        'यह वेबसाइट संस्थान और उसके कार्यों की सामान्य जानकारी देती है। वर्तमान उपलब्धता और भागीदारी की पुष्टि के लिए टीम से संपर्क करें।',
      ],
      [
        'तस्वीरें और सामग्री',
        'लोगो, तस्वीरें और वीडियो संस्थान के हैं और उसके अपने कार्यों को दर्शाते हैं। दोबारा इस्तेमाल से पहले संस्थान से अनुमति लें।',
      ],
      [
        'बाहरी लिंक',
        'फेसबुक, इंस्टाग्राम और गूगल मैप्स के लिंक अन्य सेवाओं पर ले जाते हैं। आधिकारिक अपडेट से जुड़े प्रश्नों में संस्थान की टीम सहायता कर सकती है।',
      ],
      [
        'पूछताछ',
        'ईमेल मसौदा तैयार करने से संदेश नहीं भेजा जाता और किसी मुलाकात, स्वयंसेवा या दान की पुष्टि नहीं होती।',
      ],
    ],
    supportPolicy: [
      [
        'सहयोग के तरीके',
        'संस्थान द्वारा उपलब्ध बैंक जानकारी और क्यूआर कोड से योगदान दिया जा सकता है। हस्तांतरण से पहले प्राप्तकर्ता और भुगतान विवरण की पुष्टि करें।',
      ],
      [
        'भुगतान से जुड़े प्रश्न',
        'योगदान संबंधी प्रश्नों, पावती या भुगतान से जुड़ी किसी सहायता के लिए सीधे संस्थान से संपर्क करें।',
      ],
      [
        'रसीद और कर संबंधी प्रश्न',
        'यह वेबसाइट कर लाभ या स्वचालित रसीद का वादा नहीं करती। योगदान से पहले आवश्यक दस्तावेज़ों के बारे में टीम से पूछें।',
      ],
      [
        'भुगतान की प्रक्रिया',
        'यह वेबसाइट भुगतान संसाधित नहीं करती, कार्ड की जानकारी नहीं लेती और लेनदेन की पुष्टि नहीं देती। हस्तांतरण आपके बैंक या भुगतान सेवा द्वारा किया जाता है।',
      ],
    ],
    notFound: 'यह पृष्ठ नहीं मिला।',
    backHome: 'होम पर लौटें',
  },
};

export const programs = [
  {
    slug: 'old-age-home',
    icon: 'elder',
    color: 'orange',
    image: 'residents-gathering',
    photo: 'ashram-dormitory',
    category: 'elders',
    en: {
      title: 'Old Age Home',
      card: 'A safe, caring and dignified home for senior citizens.',
      short: 'A caring home. A life of dignity.',
      text: 'Shelter, nutrition, care and emotional support for senior citizens.',
      why: 'Many elders are left alone in their final years. At our ashram, destitute senior citizens receive a safe place to live, meals, medical help and the companionship of a family — free of cost.',
      focus: [
        'Free shelter and nutritious meals',
        'Daily care and companionship',
        'Medical check-ups and medicines',
        'Prayer, yoga and festivals together',
      ],
    },
    hi: {
      title: 'वृद्ध आश्रम',
      card: 'वरिष्ठ नागरिकों के लिए सुरक्षित, स्नेह भरा और सम्मानजनक घर।',
      short: 'स्नेह भरा घर। सम्मान भरा जीवन।',
      text: 'वरिष्ठ नागरिकों के लिए आश्रय, पोषण, देखभाल और भावनात्मक सहयोग।',
      why: 'कई बुज़ुर्ग जीवन के अंतिम वर्षों में अकेले रह जाते हैं। हमारे आश्रम में बेसहारा वरिष्ठ नागरिकों को रहने की सुरक्षित जगह, भोजन, चिकित्सा सहायता और परिवार जैसा अपनापन — निःशुल्क मिलता है।',
      focus: [
        'निःशुल्क आश्रय और पौष्टिक भोजन',
        'रोज़ाना देखभाल और अपनापन',
        'स्वास्थ्य जाँच और दवाइयाँ',
        'साथ में प्रार्थना, योग और त्योहार',
      ],
    },
  },
  {
    slug: 'child-welfare',
    icon: 'child',
    color: 'blue',
    image: 'ration-distribution',
    photo: 'office-celebration',
    category: 'community',
    en: {
      title: 'Orphanage',
      card: 'Love, education and support for a brighter future.',
      short: 'Nurturing hope for the next generation.',
      text: 'Education, food, shelter and love for orphaned and underprivileged children.',
      why: 'Every child deserves a safe childhood. We help orphaned and underprivileged children with food, education and care so they can grow with confidence and hope.',
      focus: [
        'Food, clothing and basic needs',
        'Education and school supplies',
        'Care, guidance and encouragement',
        'Joyful time with elders and festivals',
      ],
    },
    hi: {
      title: 'अनाथालय',
      card: 'उज्ज्वल भविष्य के लिए प्यार, शिक्षा और सहयोग।',
      short: 'अगली पीढ़ी के लिए नई उम्मीद।',
      text: 'अनाथ और वंचित बच्चों के लिए शिक्षा, भोजन, आश्रय और स्नेह।',
      why: 'हर बच्चे को सुरक्षित बचपन का हक है। हम अनाथ और वंचित बच्चों को भोजन, शिक्षा और देखभाल देते हैं ताकि वे आत्मविश्वास और उम्मीद के साथ बढ़ सकें।',
      focus: [
        'भोजन, कपड़े और बुनियादी ज़रूरतें',
        'शिक्षा और पढ़ाई की सामग्री',
        'देखभाल, मार्गदर्शन और प्रोत्साहन',
        'बुज़ुर्गों के साथ खुशी के पल और त्योहार',
      ],
    },
  },
  {
    slug: 'yoga-meditation',
    icon: 'lotus',
    color: 'green',
    image: 'yoga-session',
    photo: 'yoga-group',
    category: 'wellness',
    en: {
      title: 'Yoga & Meditation',
      card: 'For better physical, mental and emotional well-being.',
      short: 'A little balance. A better everyday.',
      text: 'Regular yoga and meditation sessions for physical and mental well-being.',
      why: 'Gentle movement, breathing and meditation bring calm, strength and connection. Our regular sessions help elders and community members stay active and peaceful.',
      focus: [
        'Morning yoga sessions',
        'Guided meditation and pranayama',
        'Stress relief and mental peace',
        'Community wellness gatherings',
      ],
    },
    hi: {
      title: 'योग एवं ध्यान',
      card: 'बेहतर शारीरिक, मानसिक और भावनात्मक स्वास्थ्य के लिए।',
      short: 'थोड़ा संतुलन। बेहतर रोज़मर्रा।',
      text: 'शारीरिक और मानसिक स्वास्थ्य के लिए नियमित योग और ध्यान सत्र।',
      why: 'हल्का व्यायाम, श्वास और ध्यान शांति, शक्ति और जुड़ाव लाते हैं। हमारे नियमित सत्र बुज़ुर्गों और समुदाय को सक्रिय और शांत रहने में मदद करते हैं।',
      focus: [
        'सुबह के योग सत्र',
        'निर्देशित ध्यान और प्राणायाम',
        'तनाव से राहत और मानसिक शांति',
        'सामुदायिक स्वास्थ्य कार्यक्रम',
      ],
    },
  },
  {
    slug: 'medical-support',
    icon: 'pulse',
    color: 'red',
    image: 'hand-care',
    photo: 'hospital-admission',
    category: 'health',
    en: {
      title: 'Medical Support',
      card: 'Basic healthcare and medical facilities for the underprivileged.',
      short: 'Helping care reach those in need.',
      text: 'Health check-ups, medicines and medical facilities for the needy.',
      why: 'Illness can be a heavy burden for people with no support. We arrange check-ups, medicines and medical help so that care reaches those who need it most.',
      focus: [
        'Regular health check-ups',
        'Free medicines for residents',
        'Health camps for the community',
        'Help reaching hospitals when needed',
      ],
    },
    hi: {
      title: 'चिकित्सा सहयोग',
      card: 'वंचितों के लिए बुनियादी स्वास्थ्य सेवा और चिकित्सा सुविधाएँ।',
      short: 'ज़रूरतमंद लोगों तक सहायता।',
      text: 'ज़रूरतमंदों के लिए स्वास्थ्य जाँच, दवाइयाँ और चिकित्सा सुविधाएँ।',
      why: 'बिना सहारे वाले लोगों के लिए बीमारी बड़ा बोझ बन सकती है। हम स्वास्थ्य जाँच, दवाइयों और चिकित्सा सहायता की व्यवस्था करते हैं ताकि देखभाल सबसे ज़रूरतमंद तक पहुँचे।',
      focus: [
        'नियमित स्वास्थ्य जाँच',
        'निवासियों के लिए निःशुल्क दवाइयाँ',
        'समुदाय के लिए स्वास्थ्य शिविर',
        'ज़रूरत पड़ने पर अस्पताल तक मदद',
      ],
    },
  },
  {
    slug: 'day-care',
    icon: 'group',
    color: 'purple',
    image: 'shared-meal',
    photo: 'wheelchair-friends',
    category: 'elders',
    en: {
      title: 'Day Care',
      card: 'Care, engagement and companionship for the elderly.',
      short: 'Company, connection and everyday care.',
      text: 'Care, engagement and companionship for the elderly through the day.',
      why: 'Loneliness affects health as much as illness. Our day care gives elders a warm place to spend the day with friends, activities, tea and caring attention.',
      focus: [
        'A warm and safe place during the day',
        'Games, conversation and activities',
        'Tea, snacks and meals',
        'Caring attention from our team',
      ],
    },
    hi: {
      title: 'डे केयर',
      card: 'बुज़ुर्गों के लिए देखभाल, गतिविधियाँ और साथ।',
      short: 'साथ, जुड़ाव और रोज़मर्रा की देखभाल।',
      text: 'दिनभर बुज़ुर्गों के लिए देखभाल, गतिविधियाँ और अपनापन।',
      why: 'अकेलापन भी बीमारी जितना ही असर करता है। हमारा डे केयर बुज़ुर्गों को दोस्तों, गतिविधियों, चाय और स्नेह भरी देखभाल के साथ दिन बिताने की गर्मजोशी भरी जगह देता है।',
      focus: [
        'दिन में सुरक्षित और आत्मीय जगह',
        'खेल, बातचीत और गतिविधियाँ',
        'चाय, नाश्ता और भोजन',
        'हमारी टीम की स्नेह भरी देखभाल',
      ],
    },
  },
];

// Figures from the client-approved homepage reference; confirm with the NGO before launch.
export const stats = [
  { value: 500, icon: 'elder', color: 'orange' },
  { value: 200, icon: 'child', color: 'red' },
  { value: 1000, icon: 'heart', color: 'blue' },
  { value: 300, icon: 'lotus', color: 'green' },
];

export type PhotoCategory =
  'elders' | 'health' | 'wellness' | 'outreach' | 'community';

export interface Photo {
  image: string;
  category: PhotoCategory;
  en: string;
  hi: string;
}

// The NGO's own photographs. Last-rites images supplied by the client are
// deliberately not published.
export const photos: Photo[] = [
  {
    image: 'president-with-resident',
    category: 'elders',
    en: 'Our National President with a resident of Shanti Dham',
    hi: 'शान्ति धाम की एक निवासी के साथ हमारी राष्ट्रीय अध्यक्ष',
  },
  {
    image: 'residents-gathering',
    category: 'elders',
    en: 'Residents gathered together at the ashram',
    hi: 'आश्रम में एक साथ बैठे निवासी',
  },
  {
    image: 'shared-meal',
    category: 'elders',
    en: 'A warm meal at Shanti Dham Vridhashram',
    hi: 'शान्ति धाम वृद्धाश्रम में गरम भोजन',
  },
  {
    image: 'hand-care',
    category: 'health',
    en: 'Checking on a resident’s health',
    hi: 'एक निवासी के स्वास्थ्य की जाँच',
  },
  {
    image: 'yoga-session',
    category: 'wellness',
    en: 'A morning yoga and meditation session',
    hi: 'सुबह का योग और ध्यान सत्र',
  },
  {
    image: 'street-outreach',
    category: 'outreach',
    en: 'First aid for a man living on the street',
    hi: 'सड़क पर रहने वाले एक व्यक्ति को प्राथमिक उपचार',
  },
  {
    image: 'ashram-dormitory',
    category: 'elders',
    en: 'The residents’ dormitory at the ashram',
    hi: 'आश्रम में निवासियों का शयनकक्ष',
  },
  {
    image: 'beard-grooming',
    category: 'health',
    en: 'Daily grooming and personal care',
    hi: 'रोज़ाना साफ़-सफ़ाई और व्यक्तिगत देखभाल',
  },
  {
    image: 'ration-distribution',
    category: 'community',
    en: 'Distributing rations and warm clothes',
    hi: 'राशन और गर्म कपड़ों का वितरण',
  },
  {
    image: 'yoga-group',
    category: 'wellness',
    en: 'Breathing practice together',
    hi: 'साथ मिलकर प्राणायाम',
  },
  {
    image: 'night-rescue',
    category: 'outreach',
    en: 'Reaching out on a winter night',
    hi: 'सर्द रात में ज़रूरतमंद तक पहुँचना',
  },
  {
    image: 'hospital-admission',
    category: 'health',
    en: 'Accompanying a patient to hospital',
    hi: 'मरीज़ को अस्पताल तक पहुँचाना',
  },
  {
    image: 'volunteers',
    category: 'community',
    en: 'Volunteers of the Sansthan',
    hi: 'संस्थान के स्वयंसेवक',
  },
  {
    image: 'roadside-grooming',
    category: 'outreach',
    en: 'Fresh clothes for someone in need',
    hi: 'ज़रूरतमंद के लिए साफ़ कपड़े',
  },
  {
    image: 'wheelchair-care',
    category: 'health',
    en: 'Care for a resident who uses a wheelchair',
    hi: 'व्हीलचेयर पर रहने वाले निवासी की देखभाल',
  },
  {
    image: 'yoga-elder',
    category: 'wellness',
    en: 'A resident at morning meditation',
    hi: 'सुबह के ध्यान में एक निवासी',
  },
  {
    image: 'office-celebration',
    category: 'community',
    en: 'Welcoming a well-wisher at our office',
    hi: 'कार्यालय में एक शुभचिंतक का स्वागत',
  },
  {
    image: 'wheelchair-friends',
    category: 'elders',
    en: 'Friends at the ashram',
    hi: 'आश्रम के साथी',
  },
];

// People cared for by the Sansthan, shown in the two moving photo rows on the homepage.
export const lives: { image: string; en: string; hi: string }[][] = [
  [
    {
      image: 'new-resident',
      en: 'Found a home at Shanti Dham',
      hi: 'शान्ति धाम में मिला घर',
    },
    {
      image: 'president-with-resident',
      en: 'Family, not just care',
      hi: 'सिर्फ़ देखभाल नहीं, परिवार',
    },
    {
      image: 'night-rescue',
      en: 'Warmth on a winter night',
      hi: 'सर्द रात में गर्माहट',
    },
    { image: 'yoga-elder', en: 'Morning meditation', hi: 'सुबह का ध्यान' },
    {
      image: 'wheelchair-care',
      en: 'Support at every step',
      hi: 'हर कदम पर सहारा',
    },
    {
      image: 'street-outreach',
      en: 'Care that reaches the street',
      hi: 'सड़क तक पहुँचती देखभाल',
    },
    { image: 'shared-meal', en: 'Hot meals, every day', hi: 'हर दिन गरम भोजन' },
  ],
  [
    {
      image: 'dressing-help',
      en: 'Fresh clothes, fresh start',
      hi: 'नए कपड़े, नई शुरुआत',
    },
    {
      image: 'elder-checkup',
      en: 'Regular health check-ups',
      hi: 'नियमित स्वास्थ्य जाँच',
    },
    {
      image: 'resident-with-mala',
      en: 'Peace in prayer',
      hi: 'प्रार्थना में सुकून',
    },
    {
      image: 'roadside-first-aid',
      en: 'First aid on the roadside',
      hi: 'सड़क किनारे प्राथमिक उपचार',
    },
    {
      image: 'hand-care',
      en: 'Gentle, daily attention',
      hi: 'रोज़ का स्नेह भरा ध्यान',
    },
    {
      image: 'wheelchair-friends',
      en: 'Friends at the ashram',
      hi: 'आश्रम के साथी',
    },
    {
      image: 'resting-resident',
      en: 'A safe bed to rest in',
      hi: 'आराम के लिए सुरक्षित बिस्तर',
    },
  ],
];

// Reels recorded by the NGO, compressed into public/videos/ with posters in public/images/posters/.
export const videos = [
  {
    file: 'president-message',
    duration: '1:30',
    en: [
      'A Message from Our President',
      'Sunita Bhushan speaks about the work of Shanti Dham.',
    ],
    hi: [
      'अध्यक्ष का संदेश',
      'सुनीता भूषण शान्ति धाम के कार्यों के बारे में बताती हैं।',
    ],
  },
  {
    file: 'bedside-care',
    duration: '0:30',
    en: [
      'Care at the Bedside',
      'Daily nursing for residents who cannot leave their beds.',
    ],
    hi: [
      'बिस्तर पर देखभाल',
      'बिस्तर से न उठ पाने वाले निवासियों की रोज़ाना सेवा।',
    ],
  },
  {
    file: 'resident-story',
    duration: '1:53',
    en: [
      'Someone to Hold Your Hand',
      'A resident cared for around the clock at the ashram.',
    ],
    hi: ['कोई जो हाथ थामे', 'आश्रम में चौबीसों घंटे देखभाल पाते एक निवासी।'],
  },
  {
    file: 'seva-moments',
    duration: '0:20',
    en: ['Seva in Action', 'Health care, outreach and our team at work.'],
    hi: ['सेवा की झलक', 'स्वास्थ्य सेवा, सड़क पर सेवा और काम करती हमारी टीम।'],
  },
  {
    file: 'ashram-elders-talk',
    duration: '1:34',
    en: [
      'Voices from the Ashram',
      'Our President sits with residents of Shanti Dham.',
    ],
    hi: ['आश्रम से आवाज़ें', 'शान्ति धाम के निवासियों के साथ हमारी अध्यक्ष।'],
  },
  {
    file: 'president-story',
    duration: '1:42',
    en: ['Our Story', 'How the ashram cares for elders who have no one.'],
    hi: ['हमारी कहानी', 'आश्रम कैसे बेसहारा बुज़ुर्गों की देखभाल करता है।'],
  },
  {
    file: 'resident-appeal',
    duration: '1:16',
    en: [
      'Be Part of This Seva',
      'An invitation to join the care of those in need.',
    ],
    hi: [
      'इस सेवा का हिस्सा बनें',
      'ज़रूरतमंदों की देखभाल से जुड़ने का निमंत्रण।',
    ],
  },
];
