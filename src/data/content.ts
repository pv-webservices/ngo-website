// Homepage, Mahila Diwas and Transparency content. Every statement here is backed by a
// photograph, banner or video supplied by the NGO; anything still unconfirmed is listed in
// README.md under "Confirm with the NGO before launch" and is not claimed publicly.
import type { Lang } from './site';

type Bi<T> = Record<Lang, T>;
export type Status = 'ongoing' | 'periodic' | 'planned';

export const statusLabels: Bi<Record<Status, string>> = {
  en: { ongoing: 'Ongoing', periodic: 'Held periodically', planned: 'Planned' },
  hi: { ongoing: 'निरंतर जारी', periodic: 'समय-समय पर', planned: 'प्रस्तावित' },
};

// Site-wide interface text added in the colourful redesign (header, loader, WhatsApp,
// footer QR, hero slider controls).
export const chrome: Bi<{
  topNote: string;
  home: string;
  whatsapp: string;
  whatsappText: string;
  loading: string;
  loaderTag: string;
  qrTitle: string;
  qrText: string;
  indiaOnly: string;
  slidesLabel: string;
  goToSlide: string;
  pauseSlides: string;
  playSlides: string;
}> = {
  en: {
    topNote: 'Be a helping hand for elders who have no one',
    home: 'Home',
    whatsapp: 'Chat with us on WhatsApp',
    whatsappText:
      'Namaste! I would like to know more about Shanti Jan Kalyan Sansthan.',
    loading: 'Loading',
    loaderTag: 'Joining hands in care',
    qrTitle: 'Scan & Donate',
    qrText: 'Use any UPI app. Check the name “Shanti Jan Kalyan Sansthan” before you pay.',
    indiaOnly:
      'Indian donors only. The Sansthan is not registered under FCRA, so it cannot accept donations from abroad.',
    slidesLabel: 'Photographs of our work',
    goToSlide: 'Show photograph',
    pauseSlides: 'Pause the slideshow',
    playSlides: 'Play the slideshow',
  },
  hi: {
    topNote: 'बेसहारा बुज़ुर्गों का सहारा बनें',
    home: 'होम',
    whatsapp: 'व्हाट्सऐप पर बात करें',
    whatsappText:
      'नमस्ते! मैं शांति जन कल्याण संस्थान के बारे में और जानना चाहता/चाहती हूँ।',
    loading: 'लोड हो रहा है',
    loaderTag: 'सेवा में जुड़ते हाथ',
    qrTitle: 'स्कैन करें और दान दें',
    qrText: 'किसी भी यूपीआई ऐप से। भुगतान से पहले नाम “शांति जन कल्याण संस्थान” जाँच लें।',
    indiaOnly:
      'केवल भारतीय दानदाता। संस्थान एफसीआरए में पंजीकृत नहीं है, इसलिए विदेश से दान स्वीकार नहीं कर सकता।',
    slidesLabel: 'हमारे कार्यों की तस्वीरें',
    goToSlide: 'तस्वीर दिखाएँ',
    pauseSlides: 'स्लाइड शो रोकें',
    playSlides: 'स्लाइड शो चलाएँ',
  },
};

// Splits a heading so its last word can carry the marker highlight.
export const splitLast = (text: string): [string, string] => {
  const i = text.trimEnd().lastIndexOf(' ');
  return i < 0 ? ['', text] : [text.slice(0, i + 1), text.slice(i + 1)];
};

// Homepage hero slideshow: only photographs of hands-on care for people (grooming, hospital
// visits, eye checks, first aid, sitting with residents), as the client asked.
// `focus` is the object-position that keeps faces in frame when the photograph is cropped.
export interface HeroSlide {
  image: string;
  focus: string;
  /** Soft white fade over the top-right corner, to calm text burnt into the photograph. */
  fadeTopRight?: boolean;
}
export const heroSlides: HeroSlide[] = [
  { image: 'hand-care', focus: '50% 55%' },
  { image: 'beard-grooming', focus: '50% 40%' },
  { image: 'gift-for-resident', focus: '55% 40%' },
  { image: 'hospital-admission', focus: '50% 35%' },
  { image: 'eye-camp-team', focus: '62% 45%' },
  { image: 'street-outreach', focus: '50% 40%' },
  { image: 'president-with-elder', focus: '62% 55%' },
  { image: 'hair-care', focus: '50% 0%', fadeTopRight: true },
  { image: 'eye-checkup-ashram', focus: '38% 55%' },
  { image: 'winter-fire', focus: '62% 55%' },
  { image: 'food-distribution-winter', focus: '35% 45%' },
  { image: 'yoga-session', focus: '50% 50%' },
];

// One photograph for each "What we can show you" point, in the same order as `proof`.
export const proofImages: HeroSlide[] = [
  { image: 'residents-gathering', focus: '50% 55%' },
  { image: 'eye-camp-checkup', focus: '50% 42%' },
  { image: 'mahila-diwas-2022', focus: '60% 40%' },
  { image: 'holi-children-2023', focus: '50% 35%' },
];

export interface Cause {
  href: string; // route slug, optionally with #anchor
  image: string;
  status: Status;
  icon: string;
  en: [string, string];
  hi: [string, string];
}

export const causes: Cause[] = [
  {
    href: 'old-age-home',
    image: 'shared-meal',
    status: 'ongoing',
    icon: 'elder',
    en: [
      'Elder Shelter & Daily Care',
      'A home at Shanti Dham Ashram for elders with no one to care for them: a bed, meals, clean clothes and company.',
    ],
    hi: [
      'बुज़ुर्गों को आश्रय और रोज़ की देखभाल',
      'जिन बुज़ुर्गों का कोई सहारा नहीं, उनके लिए शान्ति धाम आश्रम में घर — बिस्तर, भोजन, साफ़ कपड़े और अपनापन।',
    ],
  },
  {
    href: 'medical-support',
    image: 'elder-checkup',
    status: 'ongoing',
    icon: 'pulse',
    en: [
      'Medical & Eye-Care Support',
      'Check-ups, medicines and help reaching hospital — and a free eye-test camp held at the ashram in July 2024.',
    ],
    hi: [
      'चिकित्सा एवं नेत्र सहायता',
      'स्वास्थ्य जाँच, दवाइयाँ और अस्पताल तक मदद — और जुलाई 2024 में आश्रम में निःशुल्क आँख जाँच शिविर।',
    ],
  },
  {
    href: 'mahila-diwas',
    image: 'mahila-diwas-honourees',
    status: 'periodic',
    icon: 'group',
    en: [
      'Women & Mahila Diwas',
      'Gatherings that honour women from the community, including our International Women’s Day Samman Samaroh.',
    ],
    hi: [
      'महिलाएँ एवं महिला दिवस',
      'समुदाय की महिलाओं को सम्मान देने वाले आयोजन, जिनमें अंतरराष्ट्रीय महिला दिवस सम्मान समारोह शामिल है।',
    ],
  },
  {
    href: 'child-welfare',
    image: 'children-class',
    status: 'periodic',
    icon: 'child',
    en: [
      'Support for Underprivileged Children',
      'Study sessions, books and festival days with children from nearby families.',
    ],
    hi: [
      'वंचित बच्चों के लिए सहयोग',
      'आसपास के परिवारों के बच्चों के साथ पढ़ाई, किताबें और त्योहार।',
    ],
  },
  {
    href: 'activities#winter',
    image: 'street-outreach',
    status: 'periodic',
    icon: 'heart',
    en: [
      'Street & Winter Outreach',
      'First aid, warm food and blankets for people living on the street, especially on cold Delhi nights.',
    ],
    hi: [
      'सड़क और सर्दियों में सेवा',
      'सड़क पर रहने वालों के लिए प्राथमिक उपचार, गरम भोजन और कंबल — ख़ासकर दिल्ली की सर्द रातों में।',
    ],
  },
  {
    href: 'yoga-meditation',
    image: 'yoga-group',
    status: 'periodic',
    icon: 'lotus',
    en: [
      'Yoga & Meditation',
      'Gentle yoga, breathing and meditation with residents, including International Yoga Day on 21 June.',
    ],
    hi: [
      'योग एवं ध्यान',
      'निवासियों के साथ हल्का योग, प्राणायाम और ध्यान, जिसमें 21 जून का अंतरराष्ट्रीय योग दिवस भी शामिल है।',
    ],
  },
];

// Nasha Mukti awareness is current work; the counselling centre it grew from has closed.
export const plannedCause = {
  href: 'our-journey#beginnings',
  image: 'kendra-building',
  en: [
    'Nasha Mukti Awareness',
    'We run awareness programmes on staying free from addiction. Our early centre, a Nasha Mukti Kendra, closed around 2024, so we no longer offer counselling or treatment there.',
  ],
  hi: [
    'नशा मुक्ति जागरूकता',
    'हम नशे से दूर रहने के लिए जागरूकता कार्यक्रम चलाते हैं। हमारा शुरुआती नशा मुक्ति केंद्र लगभग 2024 में बंद हो गया, इसलिए वहाँ अब परामर्श या इलाज नहीं दिया जाता।',
  ],
};

export const home: Bi<{
  heroEyebrow: string;
  heroTitle: [string, string];
  heroText: string;
  heroWatch: string;
  heroPause: string;
  heroPlay: string;
  heroCaption: string;
  regd: string;
  proofEyebrow: string;
  proofTitle: string;
  proof: { title: string; text: string; href: string; link: string }[];
  whoEyebrow: string;
  whoTitle: string;
  whoText: string[];
  whoCaption: string;
  whyEyebrow: string;
  whyTitle: string;
  whyLead: string;
  whyText: string;
  needs: [string, string][];
  whyNote: string;
  causesEyebrow: string;
  causesTitle: string;
  causesText: string;
  plannedLabel: string;
  journeyEyebrow: string;
  journeyTitle: string;
  journeyText: string[];
  journeyVideo: string;
  journeyVideoNote: string;
  journeyLink: string;
  mahilaEyebrow: string;
  mahilaTitle: string;
  mahilaText: string;
  mahilaLink: string;
  storiesEyebrow: string;
  storiesTitle: string;
  stories: {
    id: string;
    kicker: string;
    title: string;
    text: string;
    images: [string, string];
    alts: [string, string];
    href: string;
    link: string;
  }[];
  trustEyebrow: string;
  trustTitle: string;
  trustText: string;
  trustPoints: string[];
  trustLink: string;
  involveTitle: string;
  involveText: string;
  volunteer: string;
}> = {
  en: {
    heroEyebrow: 'Shanti Dham Ashram · Delhi',
    heroTitle: ['Compassion in action.', 'Dignity for every life.'],
    heroText:
      'Shanti Jan Kalyan Sansthan gives shelter, meals, medical help and company to elders who have no one — and reaches out to women, children and people on the streets of Delhi.',
    heroWatch: 'Watch where we began',
    heroPause: 'Pause moving photographs',
    heroPlay: 'Play moving photographs',
    heroCaption: 'Every photograph is from our own work',
    regd: 'Regd. No. 323',
    proofEyebrow: 'Real work. Real people.',
    proofTitle: 'What we can show you, not just tell you',
    proof: [
      {
        title: 'Shelter & daily care',
        text: 'Elders without family support live, eat and are cared for at Shanti Dham Ashram.',
        href: 'old-age-home',
        link: 'Elder care',
      },
      {
        title: 'Free eye-test camp · 2 July 2024',
        text: 'Held at Shanti Dham Ashram from 11 am to 4 pm with a visiting eye-care team.',
        href: 'activities#eye-camp',
        link: 'See the camp',
      },
      {
        title: 'Mahila Diwas Samman Samaroh · 2022',
        text: 'Women from the community honoured on International Women’s Day.',
        href: 'mahila-diwas',
        link: 'View the album',
      },
      {
        title: 'Holi with children · March 2023',
        text: 'Colours, sweets and time together with children from neighbouring families.',
        href: 'activities#children',
        link: 'See the day',
      },
    ],
    whoEyebrow: 'Who we are',
    whoTitle: 'A small team that treats strangers as family.',
    whoText: [
      'Shanti Jan Kalyan Sansthan (Regd.) is a Delhi charity led by its National President, Sunita Bhushan. Its main work is Shanti Dham Ashram, where elders who have been left alone receive a bed, food, clean clothes, medicines and the attention of people who know their names.',
      'Around that daily care the team takes help outside the ashram: first aid and blankets for people on the street, an eye-test camp, study sessions and festivals with children, and gatherings that honour women from the community.',
    ],
    whoCaption: 'Residents at the ashram office',
    whyEyebrow: 'Why your support matters',
    whyTitle:
      'For many elders who come to us, nothing can be taken for granted.',
    whyLead:
      'Many arrive with no family support — some from hospitals, some from the roadside. Food, a clean bed, medicines and someone to sit with them do not happen by themselves.',
    whyText:
      'The ashram runs on the kindness of donors. Your contribution keeps everyday care going, with dignity and compassion.',
    needs: [
      ['Meals every day', 'Breakfast, lunch and dinner for every resident.'],
      [
        'Medicines & hospital visits',
        'Check-ups, prescriptions and someone to go with them.',
      ],
      [
        'Clothes, bedding & blankets',
        'Clean clothes, and warmth through Delhi winters.',
      ],
      [
        'Care & companionship',
        'Bathing, grooming, conversation, prayer and festivals.',
      ],
    ],
    whyNote:
      'We do not publish a fixed cost per resident. Call us to hear what the ashram needs this month.',
    causesEyebrow: 'What we do',
    causesTitle: 'The work behind every act of care',
    causesText:
      'Each area is marked to show whether it runs every day, is held from time to time, or is still a plan.',
    plannedLabel: 'Awareness drive',
    journeyEyebrow: 'Our journey',
    journeyTitle: 'Where our work began',
    journeyText: [
      'For roughly the first three years, the team worked out of a Nasha Mukti Kendra building where part of the ceiling had collapsed and facilities were very limited.',
      'This video was recorded there. The work with elders carried on all the same — and that persistence is what the ashram is built on today.',
    ],
    journeyVideo: 'Play the video from our early ashram',
    journeyVideoNote: '55 seconds · recorded by our team · sound on',
    journeyLink: 'Read our story',
    mahilaEyebrow: 'Celebrating strength',
    mahilaTitle: 'Mahila Diwas with Shanti Jan Kalyan Sansthan',
    mahilaText:
      'Every March, around International Women’s Day, we bring together women from the community — members, volunteers and guests — to honour their work and their strength.',
    mahilaLink: 'Explore the Mahila Diwas album',
    storiesEyebrow: 'On the ground',
    storiesTitle: 'Moments from our work',
    stories: [
      {
        id: 'eye-camp',
        kicker: '2 July 2024 · Shanti Dham Ashram',
        title: 'A free eye-test camp at the ashram',
        text: 'A visiting eye-care team held free eye tests at the ashram from 11 am to 4 pm. The camp banner also announced free cataract (motiyabind) operations for those found to need them; these are carried out by Dr Shroff’s Eye Hospital, Noida.',
        images: ['eye-camp-team', 'eye-camp-checkup'],
        alts: [
          'The visiting eye-care team and our members under the camp banner',
          'An eye check-up taking place inside the ashram',
        ],
        href: 'medical-support',
        link: 'Medical & eye-care support',
      },
      {
        id: 'winter',
        kicker: 'Delhi winters',
        title: 'Warm food and blankets on cold nights',
        text: 'When the temperature drops, the team goes out with hot food and blankets for people sleeping on the street, and brings those who need care back to the ashram.',
        images: ['night-blanket', 'food-distribution-winter'],
        alts: [
          'An elderly woman wrapped in a new blanket on a winter night',
          'Serving hot food to people by the roadside',
        ],
        href: 'activities#winter',
        link: 'More from our outreach',
      },
      {
        id: 'children',
        kicker: 'Holi · March 2023',
        title: 'Festivals and study days with children',
        text: 'Children from neighbouring families join us for Holi and for study sessions under our banner “every child has the right to be educated”.',
        images: ['holi-children-2023', 'children-education'],
        alts: [
          'Children receiving Holi colours and sweets',
          'Children with books at a study session',
        ],
        href: 'child-welfare',
        link: 'Support for children',
      },
    ],
    trustEyebrow: 'Our documents & accountability',
    trustTitle: 'Give with confidence',
    trustText:
      'We would rather show you less than claim more. Here is what we publish, and what we will share on request.',
    trustPoints: [
      'Registered — Regd. No. 323; trust deed on Delhi e-stamp paper, March 2022',
      'Donations go only to the bank account in the name of Shanti Jan Kalyan Sansthan',
      '12A and 80G registration documents are published on the Transparency page',
      'Indian donors only: not registered under FCRA',
    ],
    trustLink: 'View transparency details',
    involveTitle: 'Give an hour, a meal, or a voice.',
    involveText:
      'Visit the ashram, help at a camp, bring supplies, or share our work with someone who can help.',
    volunteer: 'Volunteer with us',
  },
  hi: {
    heroEyebrow: 'शान्ति धाम आश्रम · दिल्ली',
    heroTitle: ['सेवा में करुणा।', 'हर जीवन को सम्मान।'],
    heroText:
      'शांति जन कल्याण संस्थान बेसहारा बुज़ुर्गों को आश्रय, भोजन, चिकित्सा सहायता और अपनापन देता है — और दिल्ली में महिलाओं, बच्चों और सड़क पर रहने वालों तक पहुँचता है।',
    heroWatch: 'हमारी शुरुआत देखें',
    heroPause: 'चलती तस्वीरें रोकें',
    heroPlay: 'चलती तस्वीरें चलाएँ',
    heroCaption: 'सभी तस्वीरें हमारे अपने कार्यों की हैं',
    regd: 'पंजीकरण सं. 323',
    proofEyebrow: 'सच्चा काम। सच्चे लोग।',
    proofTitle: 'जो हम सिर्फ़ कहते नहीं, दिखा भी सकते हैं',
    proof: [
      {
        title: 'आश्रय और रोज़ की देखभाल',
        text: 'परिवार के सहारे से वंचित बुज़ुर्ग शान्ति धाम आश्रम में रहते, खाते और देखभाल पाते हैं।',
        href: 'old-age-home',
        link: 'बुज़ुर्गों की देखभाल',
      },
      {
        title: 'निःशुल्क आँख जाँच शिविर · 2 जुलाई 2024',
        text: 'शान्ति धाम आश्रम में सुबह 11 से शाम 4 बजे तक नेत्र चिकित्सा टीम के साथ।',
        href: 'activities#eye-camp',
        link: 'शिविर देखें',
      },
      {
        title: 'महिला दिवस सम्मान समारोह · 2022',
        text: 'अंतरराष्ट्रीय महिला दिवस पर समुदाय की महिलाओं का सम्मान।',
        href: 'mahila-diwas',
        link: 'एल्बम देखें',
      },
      {
        title: 'बच्चों के साथ होली · मार्च 2023',
        text: 'पड़ोस के परिवारों के बच्चों के साथ रंग, मिठाई और साथ बिताया समय।',
        href: 'activities#children',
        link: 'वह दिन देखें',
      },
    ],
    whoEyebrow: 'हम कौन हैं',
    whoTitle: 'एक छोटी टीम, जो अजनबियों को परिवार मानती है।',
    whoText: [
      'शांति जन कल्याण संस्थान (रजि.) दिल्ली की एक सेवा संस्था है, जिसका नेतृत्व राष्ट्रीय अध्यक्ष सुनीता भूषण करती हैं। इसका मुख्य कार्य शान्ति धाम आश्रम है, जहाँ अकेले छोड़ दिए गए बुज़ुर्गों को बिस्तर, भोजन, साफ़ कपड़े, दवाइयाँ और ऐसे लोगों का साथ मिलता है जो उन्हें नाम से जानते हैं।',
      'इस रोज़ की देखभाल के साथ टीम आश्रम के बाहर भी मदद पहुँचाती है: सड़क पर रहने वालों के लिए प्राथमिक उपचार और कंबल, आँख जाँच शिविर, बच्चों के साथ पढ़ाई और त्योहार, और समुदाय की महिलाओं का सम्मान।',
    ],
    whoCaption: 'आश्रम कार्यालय में निवासी',
    whyEyebrow: 'आपका सहयोग क्यों ज़रूरी है',
    whyTitle: 'हमारे पास आने वाले कई बुज़ुर्गों के लिए कुछ भी आसान नहीं होता।',
    whyLead:
      'कई बुज़ुर्ग बिना किसी पारिवारिक सहारे के आते हैं — कुछ अस्पताल से, कुछ सड़क किनारे से। भोजन, साफ़ बिस्तर, दवाइयाँ और पास बैठने वाला कोई — ये अपने आप नहीं होते।',
    whyText:
      'आश्रम दानदाताओं की दयालुता से चलता है। आपका योगदान रोज़ की देखभाल को सम्मान और करुणा के साथ जारी रखता है।',
    needs: [
      ['हर दिन भोजन', 'हर निवासी के लिए नाश्ता, दोपहर और रात का खाना।'],
      ['दवाइयाँ और अस्पताल', 'जाँच, दवाइयाँ और साथ जाने वाला कोई।'],
      [
        'कपड़े, बिस्तर और कंबल',
        'साफ़ कपड़े और दिल्ली की सर्दियों में गर्माहट।',
      ],
      ['देखभाल और अपनापन', 'नहलाना, साफ़-सफ़ाई, बातचीत, प्रार्थना और त्योहार।'],
    ],
    whyNote:
      'हम प्रति निवासी कोई तय ख़र्च प्रकाशित नहीं करते। इस महीने आश्रम की ज़रूरतें जानने के लिए हमें कॉल करें।',
    causesEyebrow: 'हम क्या करते हैं',
    causesTitle: 'देखभाल के हर काम के पीछे का प्रयास',
    causesText:
      'हर कार्य के साथ लिखा है कि वह रोज़ चलता है, समय-समय पर होता है, या अभी योजना में है।',
    plannedLabel: 'जागरूकता अभियान',
    journeyEyebrow: 'हमारी यात्रा',
    journeyTitle: 'जहाँ से हमारा काम शुरू हुआ',
    journeyText: [
      'लगभग पहले तीन वर्षों तक टीम ने एक नशा मुक्ति केंद्र के भवन से काम किया, जहाँ छत का एक हिस्सा गिर चुका था और सुविधाएँ बहुत सीमित थीं।',
      'यह वीडियो वहीं रिकॉर्ड किया गया था। फिर भी बुज़ुर्गों की सेवा जारी रही — और यही लगन आज के आश्रम की नींव है।',
    ],
    journeyVideo: 'हमारे शुरुआती आश्रम का वीडियो चलाएँ',
    journeyVideoNote: '55 सेकंड · हमारी टीम द्वारा रिकॉर्ड · आवाज़ के साथ',
    journeyLink: 'हमारी कहानी पढ़ें',
    mahilaEyebrow: 'शक्ति का उत्सव',
    mahilaTitle: 'शांति जन कल्याण संस्थान के साथ महिला दिवस',
    mahilaText:
      'हर मार्च में, अंतरराष्ट्रीय महिला दिवस के आसपास, हम समुदाय की महिलाओं — सदस्यों, स्वयंसेविकाओं और अतिथियों — को उनके काम और शक्ति के सम्मान के लिए एक साथ लाते हैं।',
    mahilaLink: 'महिला दिवस एल्बम देखें',
    storiesEyebrow: 'ज़मीन पर काम',
    storiesTitle: 'हमारे कार्यों के पल',
    stories: [
      {
        id: 'eye-camp',
        kicker: '2 जुलाई 2024 · शान्ति धाम आश्रम',
        title: 'आश्रम में निःशुल्क आँख जाँच शिविर',
        text: 'नेत्र चिकित्सा टीम ने आश्रम में सुबह 11 से शाम 4 बजे तक निःशुल्क आँख जाँच की। शिविर के बैनर पर ज़रूरतमंदों के लिए निःशुल्क मोतियाबिंद ऑपरेशन की घोषणा भी थी; ये ऑपरेशन डॉ. श्रॉफ आई हॉस्पिटल, नोएडा द्वारा किए जाते हैं।',
        images: ['eye-camp-team', 'eye-camp-checkup'],
        alts: [
          'शिविर के बैनर के नीचे नेत्र चिकित्सा टीम और हमारे सदस्य',
          'आश्रम के अंदर आँखों की जाँच',
        ],
        href: 'medical-support',
        link: 'चिकित्सा एवं नेत्र सहायता',
      },
      {
        id: 'winter',
        kicker: 'दिल्ली की सर्दियाँ',
        title: 'सर्द रातों में गरम भोजन और कंबल',
        text: 'तापमान गिरने पर टीम सड़क पर सोने वालों के लिए गरम भोजन और कंबल लेकर निकलती है, और जिन्हें देखभाल चाहिए उन्हें आश्रम ले आती है।',
        images: ['night-blanket', 'food-distribution-winter'],
        alts: [
          'सर्द रात में नए कंबल में लिपटी एक बुज़ुर्ग महिला',
          'सड़क किनारे लोगों को गरम भोजन परोसते हुए',
        ],
        href: 'activities#winter',
        link: 'हमारी सेवा के और पल',
      },
      {
        id: 'children',
        kicker: 'होली · मार्च 2023',
        title: 'बच्चों के साथ त्योहार और पढ़ाई',
        text: 'पड़ोस के परिवारों के बच्चे होली पर और “सभी बच्चों को शिक्षित बनने का अधिकार” बैनर के नीचे पढ़ाई के सत्रों में हमारे साथ जुड़ते हैं।',
        images: ['holi-children-2023', 'children-education'],
        alts: [
          'होली के रंग और मिठाई पाते बच्चे',
          'पढ़ाई के सत्र में किताबों के साथ बच्चे',
        ],
        href: 'child-welfare',
        link: 'बच्चों के लिए सहयोग',
      },
    ],
    trustEyebrow: 'हमारे दस्तावेज़ और जवाबदेही',
    trustTitle: 'भरोसे के साथ दान करें',
    trustText:
      'हम ज़्यादा दावा करने के बजाय कम दिखाना पसंद करते हैं। यहाँ बताया गया है कि हम क्या प्रकाशित करते हैं और माँगने पर क्या साझा करेंगे।',
    trustPoints: [
      'पंजीकृत — पंजीकरण सं. 323; दिल्ली ई-स्टाम्प पेपर पर ट्रस्ट डीड, मार्च 2022',
      'दान केवल शांति जन कल्याण संस्थान के नाम वाले बैंक खाते में',
      '12A और 80G पंजीकरण दस्तावेज़ पारदर्शिता पृष्ठ पर उपलब्ध हैं',
      'केवल भारतीय दानदाता: संस्थान एफसीआरए में पंजीकृत नहीं है',
    ],
    trustLink: 'पारदर्शिता की जानकारी देखें',
    involveTitle: 'एक घंटा, एक भोजन या अपनी आवाज़ दें।',
    involveText:
      'आश्रम आएँ, शिविर में मदद करें, सामग्री लाएँ, या हमारा काम किसी ऐसे व्यक्ति तक पहुँचाएँ जो मदद कर सके।',
    volunteer: 'स्वयंसेवक बनें',
  },
};

// Mahila Diwas collection: every unique supplied photograph of these events.
// Near-identical frames (source images 27 and 29) are kept in the archive only.
export const mahila = {
  albums: [
    {
      id: 'samman-2022',
      en: [
        'International Mahila Diwas Samman Samaroh · 2022',
        'The banner reads “Antarrashtriya Mahila Diwas ke avsar par … Samman Samaroh-2022”.',
      ],
      hi: [
        'अंतरराष्ट्रीय महिला दिवस सम्मान समारोह · 2022',
        'बैनर पर लिखा है “अंतरराष्ट्रीय महिला दिवस के अवसर पर … सम्मान समारोह-2022”।',
      ],
      photos: [
        {
          image: 'mahila-diwas-2022',
          en: 'Addressing the gathering at the 2022 Samman Samaroh',
          hi: '2022 सम्मान समारोह में सभा को संबोधित करते हुए',
        },
        {
          image: 'women-members',
          en: 'Women members in saffron stoles',
          hi: 'भगवा दुपट्टों में संस्थान की महिला सदस्य',
        },
      ],
    },
    {
      id: 'samman-stage',
      en: [
        'Women’s Day Samman Samaroh on stage',
        'A larger International Women’s Day felicitation held under a decorated marquee. Year to be confirmed by the NGO.',
      ],
      hi: [
        'मंच पर महिला दिवस सम्मान समारोह',
        'सजे हुए पंडाल में अंतरराष्ट्रीय महिला दिवस का बड़ा सम्मान समारोह। वर्ष की पुष्टि संस्था करेगी।',
      ],
      photos: [
        {
          image: 'mahila-diwas-group',
          en: 'Honoured guests and members on stage',
          hi: 'मंच पर सम्मानित अतिथि और सदस्य',
        },
        {
          image: 'mahila-diwas-honourees',
          en: 'Women honoured with bouquets and stoles',
          hi: 'गुलदस्ते और दुपट्टे से सम्मानित महिलाएँ',
        },
        {
          image: 'mahila-diwas-felicitation',
          en: 'Greeting a guest at the felicitation',
          hi: 'सम्मान समारोह में अतिथि का स्वागत',
        },
        {
          image: 'mahila-diwas-audience',
          en: 'The audience at the Samman Samaroh',
          hi: 'सम्मान समारोह में उपस्थित लोग',
        },
      ],
    },
    {
      id: 'mahila-8-march',
      en: [
        'Mahila Diwas · 8 March',
        'The banner reads “8 March … Mahila Diwas” under the Sansthan’s name. Year to be confirmed by the NGO.',
      ],
      hi: [
        'महिला दिवस · 8 मार्च',
        'संस्थान के नाम के साथ बैनर पर “8 मार्च … महिला दिवस” लिखा है। वर्ष की पुष्टि संस्था करेगी।',
      ],
      photos: [
        {
          image: 'mahila-diwas-march-group',
          en: 'Members and guests under the Mahila Diwas banner',
          hi: 'महिला दिवस बैनर के नीचे सदस्य और अतिथि',
        },
        {
          image: 'mahila-diwas-march-honour',
          en: 'Women honoured with bouquets and mementos',
          hi: 'गुलदस्ते और स्मृति-चिह्न से सम्मानित महिलाएँ',
        },
      ],
    },
    {
      id: 'women-gatherings',
      en: [
        'Women of the Sansthan',
        'Other gatherings of our women members and volunteers.',
      ],
      hi: [
        'संस्थान की महिलाएँ',
        'हमारी महिला सदस्यों और स्वयंसेविकाओं के अन्य आयोजन।',
      ],
      photos: [
        {
          image: 'kendra-women-members',
          en: 'Women members outside our early centre',
          hi: 'हमारे शुरुआती केंद्र के बाहर महिला सदस्य',
        },
        {
          image: 'women-gathering',
          en: 'A gathering of women at our office',
          hi: 'हमारे कार्यालय में महिलाओं की बैठक',
        },
        {
          image: 'holi-milan',
          en: 'Holi Milan with women members',
          hi: 'महिला सदस्यों के साथ होली मिलन',
        },
      ],
    },
  ],
  en: {
    intro:
      'Mahila Diwas is one of the recurring community events of Shanti Jan Kalyan Sansthan. Each March the Sansthan invites women members, volunteers and guests to an afternoon of speeches, felicitation and celebration.',
    note: 'All photographs were supplied by the NGO. Where the year of an event is not printed in the photograph, we have not guessed it.',
  },
  hi: {
    intro:
      'महिला दिवस शांति जन कल्याण संस्थान के नियमित सामुदायिक आयोजनों में से एक है। हर मार्च संस्थान महिला सदस्यों, स्वयंसेविकाओं और अतिथियों को भाषण, सम्मान और उत्सव के लिए आमंत्रित करता है।',
    note: 'सभी तस्वीरें संस्था द्वारा दी गई हैं। जहाँ तस्वीर में आयोजन का वर्ष नहीं छपा है, वहाँ हमने अनुमान नहीं लगाया है।',
  },
};

export const transparency: Bi<{
  publishedTitle: string;
  published: [string, string][];
  requestTitle: string;
  requestText: string;
  viewTitle: string;
  viewText: string;
  files: [string, string][];
  documents: string[];
  requestButton: string;
  taxTitle: string;
  taxText: string;
  useTitle: string;
  useText: string;
}> = {
  en: {
    publishedTitle: 'What we publish',
    published: [
      ['Registered name', 'Shanti Jan Kalyan Sansthan (Regd.)'],
      [
        'Registration number',
        '323 — as printed on the Sansthan’s banners and posters',
      ],
      [
        'Legal form',
        'Trust — trust deed on Delhi e-stamp paper dated 2 March 2022, with the Sub-Registrar’s stamp of 4 March 2022',
      ],
      [
        'Registered office (as on the registration documents)',
        'H-11, Ground Floor, West Patel Nagar, Delhi – 110008',
      ],
      [
        'Income-tax registration',
        'Sections 12A and 80G. PAN ABDTS7521E, URN ABDTS7521EE20216, order dated 12-06-2023, valid from AY 2022-23 to AY 2026-27',
      ],
      ['Leadership', 'Sunita Bhushan, National President'],
      [
        'Donation account',
        'Union Bank of India, in the name of Shanti Jan Kalyan Sansthan',
      ],
      [
        'Donations',
        'From Indian donors only. The Sansthan is not registered under FCRA',
      ],
      [
        'Main facility',
        'Shanti Dham Vridh Ashram, Anathalaya & Day-Care, Majnu Ka Tilla area, Delhi: stay, food, medical care, bhajan-kirtan, yoga and meditation, all free',
      ],
    ],
    viewTitle: 'Documents you can read now',
    viewText:
      'Copies supplied by the Sansthan. On the trust deed page, personal details (ID number, photograph and fingerprint) have been covered.',
    files: [
      ['12A registration order (PDF)', '/documents/12A-registration.pdf'],
      ['80G registration order (PDF)', '/documents/80G-registration.pdf'],
      [
        'Trust deed, first page (image)',
        '/documents/trust-deed-first-page-redacted.webp',
      ],
    ],
    requestTitle: 'More documents on request',
    requestText:
      'We will share copies of the following with donors, partners and volunteers who ask. They will be published here once the Sansthan has reviewed them for public display.',
    documents: [
      'The full registered trust deed',
      'Activity reports and accounts',
    ],
    requestButton: 'Request a document',
    taxTitle: 'About tax benefits',
    taxText:
      'The Sansthan holds 12A and 80G registration (copies above). A donor can claim a deduction under section 80G only if the registration covers the year of the donation, and subject to the Income Tax Act (for example, cash donations above ₹2,000 do not qualify). The registration shown here is valid from AY 2022-23 to AY 2026-27. Please ask the team to confirm the current position and to issue a receipt before you rely on it.',
    useTitle: 'How donations are used',
    useText:
      'Contributions go toward running Shanti Dham Ashram — meals, medicines, hospital visits, clothes, bedding and care — and toward outreach such as camps and winter relief. Ask us for an acknowledgement of any donation.',
  },
  hi: {
    publishedTitle: 'हम क्या प्रकाशित करते हैं',
    published: [
      ['पंजीकृत नाम', 'शांति जन कल्याण संस्थान (रजि.)'],
      ['पंजीकरण संख्या', '323 — जैसा संस्थान के बैनरों और पोस्टरों पर छपा है'],
      [
        'कानूनी स्वरूप',
        'ट्रस्ट — 2 मार्च 2022 के दिल्ली ई-स्टाम्प पेपर पर ट्रस्ट डीड, 4 मार्च 2022 की सब-रजिस्ट्रार की मुहर के साथ',
      ],
      [
        'पंजीकृत कार्यालय (पंजीकरण दस्तावेज़ों के अनुसार)',
        'एच-11, भूतल, वेस्ट पटेल नगर, दिल्ली – 110008',
      ],
      [
        'आयकर पंजीकरण',
        'धारा 12A और 80G। पैन ABDTS7521E, यूआरएन ABDTS7521EE20216, आदेश दिनांक 12-06-2023, निर्धारण वर्ष 2022-23 से 2026-27 तक मान्य',
      ],
      ['नेतृत्व', 'सुनीता भूषण, राष्ट्रीय अध्यक्ष'],
      ['दान खाता', 'यूनियन बैंक ऑफ इंडिया, शांति जन कल्याण संस्थान के नाम'],
      [
        'दान',
        'केवल भारतीय दानदाताओं से। संस्थान एफसीआरए में पंजीकृत नहीं है',
      ],
      [
        'मुख्य केंद्र',
        'शान्ति धाम वृद्ध आश्रम, अनाथालय एवं डे-केयर, मजनू का टीला क्षेत्र, दिल्ली: रहना, खाना, चिकित्सा, भजन-कीर्तन, योग और ध्यान, सब निःशुल्क',
      ],
    ],
    viewTitle: 'अभी पढ़ने योग्य दस्तावेज़',
    viewText:
      'संस्थान द्वारा दी गई प्रतियाँ। ट्रस्ट डीड के पृष्ठ पर व्यक्तिगत जानकारी (पहचान संख्या, फोटो और अंगूठे का निशान) ढँक दी गई है।',
    files: [
      ['12A पंजीकरण आदेश (PDF)', '/documents/12A-registration.pdf'],
      ['80G पंजीकरण आदेश (PDF)', '/documents/80G-registration.pdf'],
      [
        'ट्रस्ट डीड, पहला पृष्ठ (चित्र)',
        '/documents/trust-deed-first-page-redacted.webp',
      ],
    ],
    requestTitle: 'और दस्तावेज़ माँगने पर',
    requestText:
      'दानदाताओं, सहयोगियों और स्वयंसेवकों के माँगने पर हम इनकी प्रतियाँ साझा करेंगे। संस्था द्वारा सार्वजनिक प्रदर्शन के लिए जाँच के बाद इन्हें यहाँ प्रकाशित किया जाएगा।',
    documents: ['पूरी पंजीकृत ट्रस्ट डीड', 'गतिविधि रिपोर्ट और लेखा'],
    requestButton: 'दस्तावेज़ का अनुरोध करें',
    taxTitle: 'कर लाभ के बारे में',
    taxText:
      'संस्थान के पास 12A और 80G पंजीकरण है (प्रतियाँ ऊपर)। दानदाता धारा 80G के तहत कटौती तभी ले सकता है जब पंजीकरण दान के वर्ष को कवर करे, और आयकर अधिनियम की शर्तों के अधीन (जैसे ₹2,000 से अधिक नकद दान पर छूट नहीं)। यहाँ दिखाया गया पंजीकरण निर्धारण वर्ष 2022-23 से 2026-27 तक मान्य है। कृपया भरोसा करने से पहले टीम से वर्तमान स्थिति की पुष्टि और रसीद ले लें।',
    useTitle: 'दान का उपयोग कैसे होता है',
    useText:
      'योगदान शान्ति धाम आश्रम चलाने — भोजन, दवाइयाँ, अस्पताल, कपड़े, बिस्तर और देखभाल — और शिविर व सर्दियों की राहत जैसी सेवाओं में लगता है। किसी भी दान की पावती के लिए हमसे पूछें।',
  },
};

// Inner-page heroes: a main photograph, two floating companions and a short accent line.
// Photographs are chosen so none repeats in the body of the same page.
export interface PageHero {
  images: [string, string, string];
  en: [string, string];
  hi: [string, string];
}

export const pageHeroes: Record<string, PageHero> = {
  about: {
    images: ['president-with-elder', 'ashram-team-beds', 'volunteers-logo-wall'],
    en: ['Who we are', 'Strangers, treated as family.'],
    hi: ['हम कौन हैं', 'अजनबी भी, परिवार की तरह।'],
  },
  'our-work': {
    images: ['window-conversation', 'eye-camp-team', 'children-class'],
    en: ['What we do', 'The work behind every act of care.'],
    hi: ['हम क्या करते हैं', 'देखभाल के हर काम के पीछे का प्रयास।'],
  },
  'our-journey': {
    images: ['resident-banner', 'office-elders', 'holi-elders-office'],
    en: ['Our story', 'From humble beginnings to continued service.'],
    hi: ['हमारी कहानी', 'साधारण शुरुआत से निरंतर सेवा तक।'],
  },
  activities: {
    images: ['food-distribution-winter', 'distribution-office', 'holi-milan'],
    en: ['On the ground', 'Real people. Real moments.'],
    hi: ['ज़मीन पर काम', 'सच्चे लोग। सच्चे पल।'],
  },
  'mahila-diwas': {
    images: ['mahila-diwas-group', 'women-members', 'kendra-women-members'],
    en: ['Celebrating strength', 'Every March, together.'],
    hi: ['शक्ति का उत्सव', 'हर मार्च, एक साथ।'],
  },
  gallery: {
    images: ['holi-milan', 'selfie-with-resident', 'yoga-session'],
    en: ['In pictures', 'Every photograph is our own.'],
    hi: ['तस्वीरों में', 'हर तस्वीर हमारे अपने काम की।'],
  },
  videos: {
    images: ['yoga-session', 'resident-and-caregiver', 'shared-meal'],
    en: ['Watch', 'Our work, in motion.'],
    hi: ['देखें', 'चलती तस्वीरों में हमारा काम।'],
  },
  'get-involved': {
    images: ['volunteers', 'ration-distribution', 'office-cake'],
    en: ['Join us', 'A little time, a world of difference.'],
    hi: ['हमसे जुड़ें', 'थोड़ा सा समय, बड़ा बदलाव।'],
  },
  donate: {
    images: ['gift-for-resident', 'shared-meal', 'resident-portrait-man'],
    en: ['Support our cause', 'Your contribution keeps care going.'],
    hi: ['हमारे कार्य में सहयोग करें', 'आपका योगदान देखभाल को जारी रखता है।'],
  },
  contact: {
    images: [
      'office-celebration',
      'elders-arched-window',
      'volunteers-logo-wall',
    ],
    en: ['Get in touch', 'We would love to hear from you.'],
    hi: ['संपर्क में रहें', 'हमें आपसे बात करके खुशी होगी।'],
  },
  transparency: {
    images: ['distribution-office', 'volunteers', 'office-celebration'],
    en: ['Accountability', 'Show, don’t just tell.'],
    hi: ['जवाबदेही', 'सिर्फ़ कहें नहीं, दिखाएँ।'],
  },
};
