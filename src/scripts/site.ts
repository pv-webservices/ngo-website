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
      document
        .querySelectorAll<HTMLElement>('[data-category]')
        .forEach((item) => {
          item.hidden =
            button.dataset.filter !== 'all' &&
            item.dataset.category !== button.dataset.filter;
        });
    }),
  );
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
// Moving photo rows pause on hover and focus, and with the visible toggle (WCAG 2.2.2).
document.querySelectorAll<HTMLElement>('[data-lives]').forEach((strip) => {
  const toggle = strip.querySelector<HTMLButtonElement>('.lives-toggle');
  toggle?.addEventListener('click', () => {
    const paused = strip.classList.toggle('is-paused');
    toggle.setAttribute('aria-pressed', String(paused));
  });
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
// Count impact figures up once they are visible; the final value is in the HTML.
const COUNT_DURATION_MS = 1600;
function countUp(element: HTMLElement) {
  const target = Number(element.dataset.count);
  const start = performance.now();
  const tick = (now: number) => {
    const progress = Math.min((now - start) / COUNT_DURATION_MS, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    element.textContent = `${Math.round(target * eased).toLocaleString('en-IN')}+`;
    if (progress < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}
// Animate below-the-fold sections as they enter; content is always visible without JS.
if (!reducedMotion && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const target = entry.target as HTMLElement;
        if (target.dataset.count) countUp(target);
        else target.classList.add('revealed');
        observer.unobserve(target);
      });
    },
    { threshold: 0, rootMargin: '0px 0px -8% 0px' },
  );
  document
    .querySelectorAll('main .section, main .impact, .touch-band')
    .forEach((section) => {
      section.classList.add('reveal-ready');
      observer.observe(section);
    });
  document
    .querySelectorAll<HTMLElement>('[data-count]')
    .forEach((counter) => observer.observe(counter));
}
