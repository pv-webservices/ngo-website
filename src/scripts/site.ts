const lang = document.body.dataset.lang || 'en';
const slug = document.body.dataset.slug || '';
const localizedPath = (language: string) =>
  `${language === 'hi' ? '/hi' : ''}/${slug ? slug + '/' : ''}`;
// Persist an explicit choice; a first visit always starts in English.
try {
  const preferred = localStorage.getItem('shanti-language');
  if (
    preferred &&
    preferred !== lang &&
    (preferred === 'en' || preferred === 'hi')
  )
    location.replace(localizedPath(preferred));
} catch {
  /* Navigation still works when storage is blocked. */
}
document
  .querySelectorAll<HTMLAnchorElement>('[data-language]')
  .forEach((link) =>
    link.addEventListener('click', () => {
      try {
        localStorage.setItem('shanti-language', link.dataset.language!);
      } catch {
        /* Keep the normal link. */
      }
    }),
  );
const toggle = document.querySelector<HTMLButtonElement>('.menu-toggle');
const nav = document.querySelector<HTMLElement>('#navigation');
const closeMenu = () => {
  toggle?.setAttribute('aria-expanded', 'false');
  nav?.classList.remove('is-open');
};
toggle?.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') !== 'true';
  toggle.setAttribute('aria-expanded', String(open));
  nav?.classList.toggle('is-open', open);
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && nav?.classList.contains('is-open')) {
    closeMenu();
    toggle?.focus();
  }
});
document.addEventListener('click', (event) => {
  if (
    event.target instanceof Node &&
    !nav?.contains(event.target) &&
    !toggle?.contains(event.target)
  )
    closeMenu();
});
matchMedia('(min-width: 1200px)').addEventListener('change', closeMenu);
document.querySelectorAll<HTMLButtonElement>('[data-copy]').forEach((button) =>
  button.addEventListener('click', async () => {
    const status = button.parentElement?.querySelector('.copy-status');
    try {
      await navigator.clipboard.writeText(button.dataset.copy!);
      if (status) status.textContent = button.dataset.success!;
      button.querySelector('span')!.textContent = button.dataset.success!;
    } catch {
      if (status) status.textContent = button.dataset.error!;
    }
  }),
);
const photos = Array.from(
  document.querySelectorAll<HTMLButtonElement>('[data-gallery]'),
);
const dialog = document.querySelector<HTMLDialogElement>('.lightbox');
let activeIndex = 0;
let previousFocus: HTMLElement | null = null;
const visiblePhotos = () =>
  photos.filter(
    (photo) => !photo.closest<HTMLElement>('[data-category]')?.hidden,
  );
function showPhoto(index: number) {
  const currentPhotos = visiblePhotos();
  activeIndex = (index + currentPhotos.length) % currentPhotos.length;
  const item = currentPhotos[activeIndex];
  if (!dialog || !item) return;
  const image = dialog.querySelector('img')!;
  image.src = item.dataset.src!;
  image.alt = item.dataset.caption!;
  dialog.querySelector('p')!.textContent = item.dataset.caption!;
  dialog.querySelector('[data-counter]')!.textContent =
    `${activeIndex + 1} / ${currentPhotos.length}`;
}
photos.forEach((button) =>
  button.addEventListener('click', () => {
    showPhoto(visiblePhotos().indexOf(button));
    previousFocus = button;
    dialog?.showModal();
    document.body.classList.add('modal-open');
  }),
);
dialog
  ?.querySelector('[data-close]')
  ?.addEventListener('click', () => dialog.close());
dialog
  ?.querySelector('[data-next]')
  ?.addEventListener('click', () => showPhoto(activeIndex + 1));
dialog
  ?.querySelector('[data-prev]')
  ?.addEventListener('click', () => showPhoto(activeIndex - 1));
dialog?.addEventListener('click', (event) => {
  if (event.target === dialog) dialog.close();
});
dialog?.addEventListener('close', () => {
  document.body.classList.remove('modal-open');
  previousFocus?.focus();
});
dialog?.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowRight') {
    event.preventDefault();
    showPhoto(activeIndex + 1);
  }
  if (event.key === 'ArrowLeft') {
    event.preventDefault();
    showPhoto(activeIndex - 1);
  }
});
// Gallery filters. "All" respects the "show more" state; a single category shows
// every matching photograph.
let galleryExpanded = false;
let activeFilter = 'all';
const moreButton = document.querySelector<HTMLButtonElement>(
  '[data-gallery-more]',
);
function applyGalleryFilter() {
  document.querySelectorAll<HTMLElement>('[data-category]').forEach((item) => {
    const matches =
      activeFilter === 'all' || item.dataset.category === activeFilter;
    const collapsed =
      activeFilter === 'all' &&
      !galleryExpanded &&
      item.dataset.more !== undefined;
    item.hidden = !matches || collapsed;
  });
  if (moreButton)
    moreButton.parentElement!.hidden =
      galleryExpanded || activeFilter !== 'all';
}
document
  .querySelectorAll<HTMLButtonElement>('[data-filter]')
  .forEach((button) =>
    button.addEventListener('click', () => {
      document.querySelectorAll('[data-filter]').forEach((item) => {
        item.classList.remove('active');
        item.setAttribute('aria-pressed', 'false');
      });
      button.classList.add('active');
      button.setAttribute('aria-pressed', 'true');
      activeFilter = button.dataset.filter || 'all';
      applyGalleryFilter();
    }),
  );
moreButton?.addEventListener('click', () => {
  const firstHidden = document.querySelector<HTMLElement>(
    '[data-more][hidden]',
  );
  galleryExpanded = true;
  applyGalleryFilter();
  firstHidden?.querySelector<HTMLButtonElement>('button')?.focus();
});
const form = document.querySelector<HTMLFormElement>('#contact-form');
form?.addEventListener('input', () => {
  const draft = form.querySelector<HTMLAnchorElement>('.draft-link')!;
  draft.hidden = true;
  draft.removeAttribute('href');
  form.querySelector('.form-status')!.textContent = '';
});
form?.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  const body = `${lang === 'hi' ? 'नाम' : 'Name'}: ${data.get('name')}\n${lang === 'hi' ? 'फोन' : 'Phone'}: ${data.get('phone') || '—'}\n${lang === 'hi' ? 'ईमेल' : 'Email'}: ${data.get('email')}\n\n${data.get('message')}`;
  const href = `mailto:${form.dataset.email}?subject=${encodeURIComponent(String(data.get('subject')))}&body=${encodeURIComponent(body)}`;
  const draft = form.querySelector<HTMLAnchorElement>('.draft-link')!;
  draft.href = href;
  draft.hidden = false;
  form.querySelector('.form-status')!.textContent = form.dataset.ready!;
  draft.focus();
});
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
// Header shadow once the page scrolls.
const header = document.querySelector<HTMLElement>('.site-header');
const updateHeader = () =>
  header?.classList.toggle('scrolled', window.scrollY > 8);
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });
// Videos load only when asked for; starting one pauses any other.
const videoCards = Array.from(
  document.querySelectorAll<HTMLElement>('.video-card'),
);
videoCards.forEach((card) => {
  const video = card.querySelector('video');
  const play = card.querySelector<HTMLButtonElement>('[data-video-play]');
  if (!video || !play) return;
  play.addEventListener('click', () => {
    card.classList.add('is-playing');
    video.controls = true;
    video.play().catch(() => {
      /* Native controls stay available if autoplay is refused. */
    });
    video.focus();
  });
  video.addEventListener('play', () =>
    videoCards.forEach((other) => {
      const otherVideo = other.querySelector('video');
      if (otherVideo && otherVideo !== video) otherVideo.pause();
    }),
  );
});
// The moving hero photographs pause on hover and focus, and with the visible
// toggle (WCAG 2.2.2). The toggle's label always describes its next action.
document.querySelectorAll<HTMLElement>('[data-reel]').forEach((reel) => {
  const toggle = reel.querySelector<HTMLButtonElement>('.h-reel-toggle');
  const label = toggle?.querySelector('.sr-only');
  toggle?.addEventListener('click', () => {
    const paused = reel.classList.toggle('is-paused');
    toggle.setAttribute('aria-pressed', String(paused));
    if (label)
      label.textContent = paused
        ? toggle.dataset.labelPlay!
        : toggle.dataset.labelPause!;
  });
});
// Touch screens get the same card lift as hover while a card is pressed.
const TOUCH_RELEASE_MS = 450;
document.querySelectorAll<HTMLElement>('.lift').forEach((card) => {
  let timer = 0;
  card.addEventListener(
    'touchstart',
    () => {
      window.clearTimeout(timer);
      card.classList.add('is-touched');
    },
    { passive: true },
  );
  const release = () => {
    timer = window.setTimeout(
      () => card.classList.remove('is-touched'),
      TOUCH_RELEASE_MS,
    );
  };
  card.addEventListener('touchend', release, { passive: true });
  card.addEventListener('touchcancel', release, { passive: true });
});
// Gallery carousel arrows scroll one photo at a time and wrap around.
document
  .querySelectorAll<HTMLButtonElement>('[data-carousel]')
  .forEach((button) =>
    button.addEventListener('click', () => {
      const track =
        button.parentElement?.querySelector<HTMLElement>('.carousel-track');
      const item = track?.firstElementChild as HTMLElement | null;
      if (!track || !item) return;
      const step = item.offsetWidth + 18;
      const direction = Number(button.dataset.carousel);
      const maxScroll = track.scrollWidth - track.clientWidth - 4;
      let target = track.scrollLeft + step * direction;
      if (direction > 0 && track.scrollLeft >= maxScroll) target = 0;
      if (direction < 0 && track.scrollLeft <= 4) target = maxScroll + 4;
      track.scrollTo({
        left: target,
        behavior: reducedMotion ? 'auto' : 'smooth',
      });
    }),
  );
// Scroll reveals: elements inside each section enter one after another as they come into
// view, with a variant suited to what they are. Content stays visible without JS and with
// reduced motion; nothing above the fold is hidden.
const REVEAL_GROUPS: [string, string][] = [
  ['.eyebrow', 'rv rv-line'],
  [
    'h2, .lead, .section-sub, .section-head > .text-link, .section-head > .btn, .btn-row, .h-why-lead, .h-why-note, .h-mahila-count, .story-kicker, .album-head, .fine-print, .mahila-intro .lead',
    'rv',
  ],
  [
    '.cause-card, .program-card, .value-card, .involve-card, .activity-card, .contact-card, .h-proof-list li, .h-needs li, .trust-list li, .need-cards li, .journey-steps li, .faq details, .fact-list div, .album-nav a, .gallery-item, .video-card, .check-list li, .policy-content article, .bank-panel, .qr-panel, .planned-card, .doc-panel, .enquiry-form, .office-card',
    'rv',
  ],
  [
    '.story-pair img, .h-mosaic, .h-who-main, .story-image, .festival-strip img, .journey-photos figure, .h-why-media img, .donate-photo',
    'rv rv-media',
  ],
  ['.h-who-portrait, .h-journey-still, .story-thumbs li', 'rv rv-scale'],
];
if (!reducedMotion && 'IntersectionObserver' in window) {
  // Clip-path reveals start fully clipped, which IntersectionObserver reports as never
  // visible, so those are observed through their parent and revealed with it.
  const waiting = new Map<Element, HTMLElement[]>();
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        waiting.get(entry.target)?.forEach((el) => el.classList.add('is-in'));
        waiting.delete(entry.target);
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
  );
  const watch = (el: HTMLElement, viaParent: boolean) => {
    const target = (viaParent && el.parentElement) || el;
    waiting.set(target, [...(waiting.get(target) ?? []), el]);
    observer.observe(target);
  };
  const MAX_STAGGER = 6;
  document
    .querySelectorAll<HTMLElement>(
      'main > section:not(.h-hero):not(.ph), main > section > section, .touch-band',
    )
    .forEach((section) => {
      REVEAL_GROUPS.forEach(([selector, classes]) => {
        const items = Array.from(
          section.querySelectorAll<HTMLElement>(selector),
        ).filter(
          (el) =>
            !el.closest('.lightbox, .rv') &&
            el.getBoundingClientRect().top > window.innerHeight,
        );
        items.forEach((el) => {
          // Siblings stagger; the count restarts for every parent container.
          const index = Array.from(el.parentElement?.children ?? []).indexOf(
            el,
          );
          el.classList.add(...classes.split(' '));
          el.style.setProperty('--rv-i', String(Math.min(index, MAX_STAGGER)));
          watch(el, classes.includes('rv-media'));
        });
      });
    });
}
// Inner-page hero collage follows the pointer slightly (desktop pointers only).
const collage = document.querySelector<HTMLElement>('[data-parallax]');
if (collage && !reducedMotion && matchMedia('(pointer: fine)').matches) {
  const hero = collage.closest<HTMLElement>('[data-ph]')!;
  hero.addEventListener('pointermove', (event) => {
    const rect = hero.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    collage.style.setProperty('--mx', x.toFixed(3));
    collage.style.setProperty('--my', y.toFixed(3));
  });
  hero.addEventListener('pointerleave', () => {
    collage.style.setProperty('--mx', '0');
    collage.style.setProperty('--my', '0');
  });
}
