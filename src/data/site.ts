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
  'mahila-diwas',
  'transparency',
];
// A slug may carry an in-page anchor ("activities#winter"); the trailing slash goes before it.
export const url = (lang: Lang, slug = ''): string => {
  const [path, hash] = slug.split('#');
  return `${lang === 'hi' ? '/hi' : ''}/${path ? path + '/' : ''}${hash ? '#' + hash : ''}`;
};
// The NGO's own photographs, prepared by scripts/prepare-photos.mjs.
export const img = (name: string) => `/images/photos/${name}.webp`;
export const imgSm = (name: string) => `/images/photos/${name}-sm.webp`;
export const srcset = (name: string) =>
  `${imgSm(name)} 640w, ${img(name)} 1600w`;

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
      'Support for Underprivileged Children',
      'Yoga & Meditation',
      'Medical & Eye-Care Support',
      'Day Care & Companionship',
      'Our Journey',
      'Events & Stories',
      'Photo Gallery',
      'NGO Activity Videos',
      'Get Involved',
      'Support Our Cause',
      'Contact Us',
      'Privacy Policy',
      'Terms & Conditions',
      'Donation & Support Information',
      'Mahila Diwas',
      'Transparency & Documents',
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
    heroText:
      'Shanti Jan Kalyan Sansthan (Regd.) runs Shanti Dham Ashram in Delhi, giving shelter, meals, medical help and company to elders with no family support, and reaching out to women, children and people on the street.',
    credentials: ['Regd. No. 323', 'Shanti Dham Ashram, Delhi'],
    eyebrow: 'Our Programs',
    aboutEyebrow: 'About Us',
    aboutTitle: 'A helping hand. A place to belong.',
    aboutText:
      'Shanti Jan Kalyan Sansthan (Regd.) is a social welfare organisation in Delhi. We run Shanti Dham Ashram for elders without family support, arrange medical help and eye-care camps, reach out to people on the street, and support women and underprivileged children through community events and study sessions.',
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
      'To support destitute elders, underprivileged children and people in need through compassionate care, free facilities and community service.',
    vision: 'Our Vision',
    visionText:
      'A kinder, healthier society where no elder is left alone and every child has a chance to grow with love.',
    objectives: 'Our Objectives',
    objectivesText:
      'Our purpose is to connect practical support with care that respects each person.',
    objectivesList: [
      'Provide shelter, nutritious food and companionship to destitute elders.',
      'Support underprivileged children with study sessions, books and festivals.',
      'Promote physical and mental well-being through yoga and meditation.',
      'Make basic healthcare and medicines reachable for the needy.',
    ],
    values: 'Dignity · Compassion · Community',
    aboutPhoto: 'Care that feels like family',
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
      health: 'Medical & Eye Care',
      women: 'Women & Mahila Diwas',
      children: 'Children',
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
      'Your contribution provides meals, shelter, medicines and daily care for elders at Shanti Dham Ashram, and keeps our outreach to people on the street, women and children going.',
    supportUses: [
      'Nutritious meals for residents',
      'Medicines and health check-ups',
      'Books and study materials for children',
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
    activityText:
      'Camps, winter outreach and festivals with children and residents — recorded by our own team, with dates wherever the photographs show them.',
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
      'Document request',
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
      [
        'Is my donation tax-deductible?',
        'This website does not promise a tax deduction. If you need a receipt for tax purposes, ask the team before you donate so they can confirm what applies.',
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
      'वंचित बच्चों के लिए सहयोग',
      'योग एवं ध्यान',
      'चिकित्सा एवं नेत्र सहायता',
      'डे केयर एवं अपनापन',
      'हमारी यात्रा',
      'आयोजन एवं कहानियाँ',
      'फोटो गैलरी',
      'संस्थान की गतिविधियों के वीडियो',
      'हमसे जुड़ें',
      'हमारे कार्यों में सहयोग करें',
      'संपर्क करें',
      'गोपनीयता नीति',
      'नियम एवं शर्तें',
      'दान और सहयोग की जानकारी',
      'महिला दिवस',
      'पारदर्शिता एवं दस्तावेज़',
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
    heroText:
      'शांति जन कल्याण संस्थान (रजि.) दिल्ली में शान्ति धाम आश्रम चलाता है, जहाँ बेसहारा बुज़ुर्गों को आश्रय, भोजन, चिकित्सा सहायता और अपनापन मिलता है, और महिलाओं, बच्चों व सड़क पर रहने वालों तक सेवा पहुँचती है।',
    credentials: ['पंजीकरण सं. 323', 'शान्ति धाम आश्रम, दिल्ली'],
    eyebrow: 'हमारी पहल',
    aboutEyebrow: 'हमारे बारे में',
    aboutTitle: 'सहारा देने वाला हाथ। अपनापन देने वाली जगह।',
    aboutText:
      'शांति जन कल्याण संस्थान (रजि.) दिल्ली की एक सामाजिक कल्याण संस्था है। हम बेसहारा बुज़ुर्गों के लिए शान्ति धाम आश्रम चलाते हैं, चिकित्सा सहायता और आँख जाँच शिविर आयोजित करते हैं, सड़क पर रहने वालों तक पहुँचते हैं, और सामुदायिक आयोजनों व पढ़ाई के सत्रों से महिलाओं और वंचित बच्चों का सहयोग करते हैं।',
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
      'संवेदनशील देखभाल, निःशुल्क सुविधाओं और सामुदायिक सेवा से बेसहारा बुज़ुर्गों, वंचित बच्चों और ज़रूरतमंदों का सहारा बनना।',
    vision: 'हमारा दृष्टिकोण',
    visionText:
      'एक दयालु और स्वस्थ समाज, जहाँ कोई बुज़ुर्ग अकेला न रहे और हर बच्चे को प्यार से बढ़ने का अवसर मिले।',
    objectives: 'हमारे उद्देश्य',
    objectivesText:
      'हमारा उद्देश्य व्यावहारिक सहयोग को ऐसी देखभाल से जोड़ना है, जिसमें हर व्यक्ति का सम्मान हो।',
    objectivesList: [
      'बेसहारा बुज़ुर्गों को आश्रय, पौष्टिक भोजन और अपनापन देना।',
      'पढ़ाई के सत्रों, किताबों और त्योहारों से वंचित बच्चों का सहयोग करना।',
      'योग और ध्यान से शारीरिक व मानसिक स्वास्थ्य को बढ़ावा देना।',
      'ज़रूरतमंदों तक बुनियादी स्वास्थ्य सेवा और दवाइयाँ पहुँचाना।',
    ],
    values: 'सम्मान · करुणा · समुदाय',
    aboutPhoto: 'परिवार जैसा अपनापन',
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
      health: 'चिकित्सा एवं नेत्र',
      women: 'महिलाएँ एवं महिला दिवस',
      children: 'बच्चे',
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
      'आपका योगदान शान्ति धाम आश्रम में बुज़ुर्गों के लिए भोजन, आश्रय, दवाइयाँ और रोज़ की देखभाल देता है, और सड़क पर रहने वालों, महिलाओं व बच्चों तक हमारी सेवा जारी रखता है।',
    supportUses: [
      'निवासियों के लिए पौष्टिक भोजन',
      'दवाइयाँ और स्वास्थ्य जाँच',
      'बच्चों के लिए किताबें और पढ़ाई की सामग्री',
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
    activityText:
      'शिविर, सर्दियों की सेवा, और बच्चों व निवासियों के साथ त्योहार — हमारी अपनी टीम द्वारा रिकॉर्ड, जहाँ तस्वीरों में तारीख़ दिखती है वहाँ तारीख़ के साथ।',
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
      'दस्तावेज़ का अनुरोध',
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
      [
        'क्या मेरे दान पर कर छूट मिलेगी?',
        'यह वेबसाइट किसी कर छूट का वादा नहीं करती। कर के लिए रसीद चाहिए तो दान से पहले टीम से पूछें ताकि वे बता सकें कि क्या लागू होता है।',
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
    status: 'ongoing',
    image: 'residents-gathering',
    photo: 'resident-and-caregiver',
    category: 'elders',
    en: {
      title: 'Elder Shelter & Care',
      card: 'A safe, caring and dignified home for elders with no family support.',
      short: 'A caring home. A life of dignity.',
      text: 'Shelter, meals, daily care and company for elders at Shanti Dham Ashram.',
      why: 'Many elders are left alone in their final years. At Shanti Dham Ashram, destitute senior citizens receive a safe place to live, meals, medical help and the companionship of a family — free of cost.',
      focus: [
        'Free shelter and nutritious meals',
        'Bathing, grooming and clean clothes',
        'Medical check-ups and medicines',
        'Prayer, yoga and festivals together',
      ],
    },
    hi: {
      title: 'बुज़ुर्गों को आश्रय और देखभाल',
      card: 'पारिवारिक सहारे से वंचित बुज़ुर्गों के लिए सुरक्षित, स्नेह भरा और सम्मानजनक घर।',
      short: 'स्नेह भरा घर। सम्मान भरा जीवन।',
      text: 'शान्ति धाम आश्रम में बुज़ुर्गों के लिए आश्रय, भोजन, रोज़ की देखभाल और अपनापन।',
      why: 'कई बुज़ुर्ग जीवन के अंतिम वर्षों में अकेले रह जाते हैं। शान्ति धाम आश्रम में बेसहारा वरिष्ठ नागरिकों को रहने की सुरक्षित जगह, भोजन, चिकित्सा सहायता और परिवार जैसा अपनापन — निःशुल्क मिलता है।',
      focus: [
        'निःशुल्क आश्रय और पौष्टिक भोजन',
        'नहलाना, साफ़-सफ़ाई और साफ़ कपड़े',
        'स्वास्थ्य जाँच और दवाइयाँ',
        'साथ में प्रार्थना, योग और त्योहार',
      ],
    },
  },
  {
    slug: 'medical-support',
    icon: 'pulse',
    color: 'red',
    status: 'ongoing',
    image: 'eye-camp-team',
    photo: 'hospital-admission',
    category: 'health',
    en: {
      title: 'Medical & Eye-Care Support',
      card: 'Check-ups, medicines, hospital visits and eye-care camps.',
      short: 'Helping care reach those in need.',
      text: 'Check-ups and medicines for residents, help reaching hospital, and free eye-test camps.',
      why: 'Illness is a heavy burden for someone with no one beside them. We arrange check-ups and medicines for residents, go with them to hospital, and bring care to the ashram — such as the free eye-test camp held there on 2 July 2024.',
      focus: [
        'Health check-ups and medicines for residents',
        'Going with residents to hospital',
        'Free eye-test camp at the ashram, 2 July 2024',
        'First aid for people on the street',
      ],
    },
    hi: {
      title: 'चिकित्सा एवं नेत्र सहायता',
      card: 'स्वास्थ्य जाँच, दवाइयाँ, अस्पताल तक मदद और आँख जाँच शिविर।',
      short: 'ज़रूरतमंद लोगों तक सहायता।',
      text: 'निवासियों के लिए जाँच और दवाइयाँ, अस्पताल तक मदद, और निःशुल्क आँख जाँच शिविर।',
      why: 'जिसके साथ कोई नहीं, उसके लिए बीमारी बड़ा बोझ है। हम निवासियों की जाँच और दवाइयों की व्यवस्था करते हैं, उनके साथ अस्पताल जाते हैं, और आश्रम तक देखभाल लाते हैं — जैसे 2 जुलाई 2024 को वहाँ लगा निःशुल्क आँख जाँच शिविर।',
      focus: [
        'निवासियों के लिए स्वास्थ्य जाँच और दवाइयाँ',
        'निवासियों के साथ अस्पताल जाना',
        'आश्रम में निःशुल्क आँख जाँच शिविर, 2 जुलाई 2024',
        'सड़क पर रहने वालों को प्राथमिक उपचार',
      ],
    },
  },
  {
    slug: 'child-welfare',
    icon: 'child',
    color: 'blue',
    status: 'periodic',
    image: 'children-education',
    photo: 'children-class',
    category: 'children',
    en: {
      title: 'Support for Underprivileged Children',
      card: 'Study sessions, books and festivals for children from nearby families.',
      short: 'Every child has the right to learn.',
      text: 'Study sessions, study materials and festival days with children from low-income families.',
      why: 'Children from low-income families near our centres often miss out on support with their studies. We hold study sessions with books and materials, and celebrate festivals such as Holi with them.',
      focus: [
        'Study sessions with books',
        'Study materials for children',
        'Festival days, such as Holi in March 2023',
        'Time with our elders and volunteers',
      ],
    },
    hi: {
      title: 'वंचित बच्चों के लिए सहयोग',
      card: 'आसपास के परिवारों के बच्चों के लिए पढ़ाई, किताबें और त्योहार।',
      short: 'हर बच्चे को पढ़ने का अधिकार है।',
      text: 'कम आय वाले परिवारों के बच्चों के साथ पढ़ाई के सत्र, पढ़ाई की सामग्री और त्योहार।',
      why: 'हमारे केंद्रों के आसपास कम आय वाले परिवारों के बच्चों को अक्सर पढ़ाई में सहयोग नहीं मिलता। हम किताबों और सामग्री के साथ पढ़ाई के सत्र करते हैं और होली जैसे त्योहार उनके साथ मनाते हैं।',
      focus: [
        'किताबों के साथ पढ़ाई के सत्र',
        'बच्चों के लिए पढ़ाई की सामग्री',
        'त्योहार, जैसे मार्च 2023 की होली',
        'हमारे बुज़ुर्गों और स्वयंसेवकों के साथ समय',
      ],
    },
  },
  {
    slug: 'yoga-meditation',
    icon: 'lotus',
    color: 'green',
    status: 'periodic',
    image: 'yoga-session',
    photo: 'yoga-group',
    category: 'wellness',
    en: {
      title: 'Yoga & Meditation',
      card: 'For better physical, mental and emotional well-being.',
      short: 'A little balance. A better everyday.',
      text: 'Yoga and meditation sessions with residents, including International Yoga Day.',
      why: 'Gentle movement, breathing and meditation bring calm, strength and connection. Our sessions help residents stay active and peaceful, and every 21 June we mark International Yoga Day together.',
      focus: [
        'Gentle yoga for residents',
        'Guided meditation and pranayama',
        'Stress relief and mental peace',
        'International Yoga Day, 21 June',
      ],
    },
    hi: {
      title: 'योग एवं ध्यान',
      card: 'बेहतर शारीरिक, मानसिक और भावनात्मक स्वास्थ्य के लिए।',
      short: 'थोड़ा संतुलन। बेहतर रोज़मर्रा।',
      text: 'निवासियों के साथ योग और ध्यान सत्र, जिसमें अंतरराष्ट्रीय योग दिवस शामिल है।',
      why: 'हल्का व्यायाम, श्वास और ध्यान शांति, शक्ति और जुड़ाव लाते हैं। हमारे सत्र निवासियों को सक्रिय और शांत रहने में मदद करते हैं, और हर 21 जून को हम साथ मिलकर अंतरराष्ट्रीय योग दिवस मनाते हैं।',
      focus: [
        'निवासियों के लिए हल्का योग',
        'निर्देशित ध्यान और प्राणायाम',
        'तनाव से राहत और मानसिक शांति',
        'अंतरराष्ट्रीय योग दिवस, 21 जून',
      ],
    },
  },
  {
    slug: 'day-care',
    icon: 'group',
    color: 'purple',
    status: 'ongoing',
    image: 'wheelchair-friends',
    photo: 'elders-arched-window',
    category: 'elders',
    en: {
      title: 'Day Care & Companionship',
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
      title: 'डे केयर एवं अपनापन',
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

export type PhotoCategory =
  | 'elders'
  | 'health'
  | 'women'
  | 'children'
  | 'wellness'
  | 'outreach'
  | 'community';

export interface Photo {
  image: string;
  category: PhotoCategory;
  en: string;
  hi: string;
}

// The NGO's own photographs (2025 and October 2026 batches). Last-rites images,
// missing-person appeals and photographs of undressed or hospitalised residents
// supplied by the client are deliberately not published.
export const photos: Photo[] = [
  {
    image: 'selfie-with-resident',
    category: 'elders',
    en: 'A team member with a resident of the ashram',
    hi: 'आश्रम की एक निवासी के साथ टीम की सदस्य',
  },
  {
    image: 'president-with-resident',
    category: 'elders',
    en: 'Our National President with a resident of Shanti Dham',
    hi: 'शान्ति धाम की एक निवासी के साथ हमारी राष्ट्रीय अध्यक्ष',
  },
  {
    image: 'eye-camp-team',
    category: 'health',
    en: 'The eye-care team at the free eye-test camp, 2 July 2024',
    hi: 'निःशुल्क आँख जाँच शिविर में नेत्र चिकित्सा टीम, 2 जुलाई 2024',
  },
  {
    image: 'mahila-diwas-group',
    category: 'women',
    en: 'Women’s Day Samman Samaroh on stage',
    hi: 'मंच पर महिला दिवस सम्मान समारोह',
  },
  {
    image: 'residents-gathering',
    category: 'elders',
    en: 'Residents gathered together at the ashram',
    hi: 'आश्रम में एक साथ बैठे निवासी',
  },
  {
    image: 'children-education',
    category: 'children',
    en: 'A study session for children with books',
    hi: 'किताबों के साथ बच्चों का पढ़ाई सत्र',
  },
  {
    image: 'night-blanket',
    category: 'outreach',
    en: 'A new blanket on a winter night',
    hi: 'सर्द रात में नया कंबल',
  },
  {
    image: 'shared-meal',
    category: 'elders',
    en: 'A warm meal at Shanti Dham Vridhashram',
    hi: 'शान्ति धाम वृद्धाश्रम में गरम भोजन',
  },
  {
    image: 'window-conversation',
    category: 'elders',
    en: 'Conversation by the window at the ashram',
    hi: 'आश्रम में खिड़की के पास बातचीत',
  },
  {
    image: 'eye-camp-checkup',
    category: 'health',
    en: 'An eye check-up inside the ashram',
    hi: 'आश्रम के अंदर आँखों की जाँच',
  },
  {
    image: 'mahila-diwas-2022',
    category: 'women',
    en: 'International Mahila Diwas Samman Samaroh, 2022',
    hi: 'अंतरराष्ट्रीय महिला दिवस सम्मान समारोह, 2022',
  },
  {
    image: 'holi-children-2023',
    category: 'children',
    en: 'Holi with children, March 2023',
    hi: 'बच्चों के साथ होली, मार्च 2023',
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
    image: 'food-distribution-winter',
    category: 'outreach',
    en: 'Serving hot food by the roadside in winter',
    hi: 'सर्दियों में सड़क किनारे गरम भोजन',
  },
  {
    image: 'resident-and-caregiver',
    category: 'elders',
    en: 'A resident with one of our caregivers',
    hi: 'हमारी एक देखभालकर्ता के साथ एक निवासी',
  },
  {
    image: 'street-outreach',
    category: 'outreach',
    en: 'First aid for a man living on the street',
    hi: 'सड़क पर रहने वाले एक व्यक्ति को प्राथमिक उपचार',
  },
  {
    image: 'volunteers-logo-wall',
    category: 'community',
    en: 'Volunteers in Sansthan T-shirts at our office',
    hi: 'हमारे कार्यालय में संस्थान की टी-शर्ट में स्वयंसेवक',
  },
  {
    image: 'children-class',
    category: 'children',
    en: 'Children at a study session',
    hi: 'पढ़ाई के सत्र में बच्चे',
  },
  {
    image: 'mahila-diwas-honourees',
    category: 'women',
    en: 'Women honoured with bouquets and stoles',
    hi: 'गुलदस्ते और दुपट्टे से सम्मानित महिलाएँ',
  },
  {
    image: 'ashram-dormitory',
    category: 'elders',
    en: 'The residents’ dormitory at the ashram',
    hi: 'आश्रम में निवासियों का शयनकक्ष',
  },
  {
    image: 'elders-arched-window',
    category: 'elders',
    en: 'Residents together in the ashram hall',
    hi: 'आश्रम के हॉल में साथ बैठे निवासी',
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
    image: 'mahila-diwas-felicitation',
    category: 'women',
    en: 'Greeting a guest at the Women’s Day felicitation',
    hi: 'महिला दिवस सम्मान समारोह में अतिथि का स्वागत',
  },
  {
    image: 'gift-for-resident',
    category: 'elders',
    en: 'A gift for a resident',
    hi: 'एक निवासी के लिए उपहार',
  },
  {
    image: 'yoga-group',
    category: 'wellness',
    en: 'Breathing practice together',
    hi: 'साथ मिलकर प्राणायाम',
  },
  {
    image: 'hospital-admission',
    category: 'health',
    en: 'Accompanying a patient to hospital',
    hi: 'मरीज़ को अस्पताल तक पहुँचाना',
  },
  {
    image: 'women-members',
    category: 'women',
    en: 'Women members in saffron stoles',
    hi: 'भगवा दुपट्टों में महिला सदस्य',
  },
  {
    image: 'office-elders',
    category: 'elders',
    en: 'Residents sitting together in the office',
    hi: 'कार्यालय में साथ बैठे निवासी',
  },
  {
    image: 'volunteers',
    category: 'community',
    en: 'Volunteers of the Sansthan',
    hi: 'संस्थान के स्वयंसेवक',
  },
  {
    image: 'kendra-women-members',
    category: 'women',
    en: 'Women members outside our early centre',
    hi: 'हमारे शुरुआती केंद्र के बाहर महिला सदस्य',
  },
  {
    image: 'roadside-grooming',
    category: 'outreach',
    en: 'Fresh clothes for someone in need',
    hi: 'ज़रूरतमंद के लिए साफ़ कपड़े',
  },
  {
    image: 'resident-portrait-woman',
    category: 'elders',
    en: 'A resident of Shanti Dham',
    hi: 'शान्ति धाम की एक निवासी',
  },
  {
    image: 'wheelchair-care',
    category: 'health',
    en: 'Care for a resident who uses a wheelchair',
    hi: 'व्हीलचेयर पर रहने वाले निवासी की देखभाल',
  },
  {
    image: 'holi-milan',
    category: 'community',
    en: 'Holi Milan with members',
    hi: 'सदस्यों के साथ होली मिलन',
  },
  {
    image: 'distribution-office',
    category: 'community',
    en: 'Distributing supplies at our office',
    hi: 'हमारे कार्यालय में सामग्री वितरण',
  },
  {
    image: 'mahila-diwas-audience',
    category: 'women',
    en: 'The audience at the Samman Samaroh',
    hi: 'सम्मान समारोह में उपस्थित लोग',
  },
  {
    image: 'resident-portrait-man',
    category: 'elders',
    en: 'A resident of Shanti Dham',
    hi: 'शान्ति धाम के एक निवासी',
  },
  {
    image: 'kendra-building',
    category: 'community',
    en: 'The Sansthan’s Nasha Mukti Paramarsh Kendra building',
    hi: 'संस्थान का नशा मुक्ति परामर्श केंद्र भवन',
  },
  {
    image: 'office-celebration',
    category: 'community',
    en: 'Welcoming a well-wisher at our office',
    hi: 'कार्यालय में एक शुभचिंतक का स्वागत',
  },
  {
    image: 'women-gathering',
    category: 'women',
    en: 'A gathering of women at our office',
    hi: 'हमारे कार्यालय में महिलाओं की बैठक',
  },
  {
    image: 'holi-elders-office',
    category: 'elders',
    en: 'Holi Milan with residents at the office',
    hi: 'कार्यालय में निवासियों के साथ होली मिलन',
  },
  {
    image: 'office-cake',
    category: 'community',
    en: 'A celebration at our office',
    hi: 'हमारे कार्यालय में उत्सव',
  },
  {
    image: 'resident-on-bed',
    category: 'elders',
    en: 'A resident in his room at the ashram',
    hi: 'आश्रम में अपने कमरे में एक निवासी',
  },
  {
    image: 'resident-banner',
    category: 'elders',
    en: 'A resident at the ashram',
    hi: 'आश्रम में एक निवासी',
  },
  {
    image: 'wheelchair-friends',
    category: 'elders',
    en: 'Friends at the ashram',
    hi: 'आश्रम के साथी',
  },
];

export const photoCaption = (image: string, lang: Lang): string =>
  photos.find((p) => p.image === image)?.[lang] ?? '';

// Reels recorded by the NGO, compressed into public/videos/ with posters in public/images/posters/.
export const videos = [
  {
    file: 'ashram-beginnings',
    duration: '0:55',
    en: [
      'Where Our Work Began',
      'Our early ashram at the Nasha Mukti Kendra building, with its collapsed ceiling.',
    ],
    hi: [
      'जहाँ से हमारा काम शुरू हुआ',
      'नशा मुक्ति केंद्र भवन में हमारा शुरुआती आश्रम, जिसकी छत गिर चुकी थी।',
    ],
  },
  {
    file: 'mother-daughter-reunion',
    duration: '0:29',
    en: ['Maa–Beti Milan', 'A mother and daughter meet again at the ashram.'],
    hi: ['माँ–बेटी मिलन', 'आश्रम में एक माँ और बेटी का फिर से मिलना।'],
  },
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
    file: 'resident-story',
    duration: '1:53',
    en: [
      'Someone to Hold Your Hand',
      'A resident cared for around the clock at the ashram.',
    ],
    hi: ['कोई जो हाथ थामे', 'आश्रम में चौबीसों घंटे देखभाल पाते एक निवासी।'],
  },
  {
    file: 'supplies-distribution',
    duration: '0:13',
    en: [
      'Sharing Supplies',
      'Distributing essentials to elders at our office.',
    ],
    hi: ['सामग्री का वितरण', 'हमारे कार्यालय में बुज़ुर्गों को ज़रूरी सामान।'],
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
    file: 'ashram-elders-talk',
    duration: '1:34',
    en: [
      'Voices from the Ashram',
      'Our President sits with residents of Shanti Dham.',
    ],
    hi: ['आश्रम से आवाज़ें', 'शान्ति धाम के निवासियों के साथ हमारी अध्यक्ष।'],
  },
  {
    file: 'holi-with-elders',
    duration: '0:13',
    en: ['Holi Milan', 'Celebrating Holi with residents at our office.'],
    hi: ['होली मिलन', 'हमारे कार्यालय में निवासियों के साथ होली।'],
  },
  {
    file: 'president-story',
    duration: '1:42',
    en: ['Our Story', 'How the ashram cares for elders who have no one.'],
    hi: ['हमारी कहानी', 'आश्रम कैसे बेसहारा बुज़ुर्गों की देखभाल करता है।'],
  },
  {
    file: 'medicine-round',
    duration: '0:06',
    en: ['Medicine Round', 'Medicines for a resident who is resting in bed.'],
    hi: ['दवा का समय', 'बिस्तर पर आराम कर रहे निवासी को दवाइयाँ।'],
  },
  {
    file: 'seva-moments',
    duration: '0:20',
    en: ['Seva in Action', 'Health care, outreach and our team at work.'],
    hi: ['सेवा की झलक', 'स्वास्थ्य सेवा, सड़क पर सेवा और काम करती हमारी टीम।'],
  },
  {
    file: 'warm-clothes',
    duration: '0:04',
    en: ['Keeping Warm', 'A warm cap and shawl for a resident in winter.'],
    hi: ['सर्दी से बचाव', 'सर्दियों में एक निवासी को गर्म टोपी और शॉल।'],
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
