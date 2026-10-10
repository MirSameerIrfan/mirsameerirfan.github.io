// All page behaviour lives here. It re-runs after every view-transition
// navigation, so each feature registers a cleanup for the page it leaves.

let cleanups: Array<() => void> = [];
const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");
const finePointer = matchMedia("(hover: hover) and (pointer: fine)");

function reveals() {
  const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
  if (reducedMotion.matches || !("IntersectionObserver" in window)) {
    els.forEach((el) => el.classList.add("is-in"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add("is-in");
        io.unobserve(entry.target);
      }
    },
    { rootMargin: "0px 0px -6% 0px", threshold: 0.01 },
  );
  els.forEach((el) => io.observe(el));
  cleanups.push(() => io.disconnect());
}

function counters() {
  const els = document.querySelectorAll<HTMLElement>("[data-count]");
  if (reducedMotion.matches || !els.length) return;
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        io.unobserve(entry.target);
        const el = entry.target as HTMLElement;
        const to = Number(el.dataset.count);
        const start = performance.now();
        const duration = 1500;
        const tick = (now: number) => {
          const p = Math.min(1, (now - start) / duration);
          el.textContent = String(Math.round(to * (1 - Math.pow(1 - p, 4))));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    },
    { threshold: 0.6 },
  );
  els.forEach((el) => io.observe(el));
  cleanups.push(() => io.disconnect());
}

function clock() {
  const els = document.querySelectorAll<HTMLElement>("[data-clock]");
  if (!els.length) return;
  const format = new Intl.DateTimeFormat("en-CA", {
    timeZone: els[0].dataset.clock,
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  const update = () => els.forEach((el) => (el.textContent = format.format(new Date())));
  update();
  const id = setInterval(update, 15_000);
  cleanups.push(() => clearInterval(id));
}

function magnetic(signal: AbortSignal) {
  if (reducedMotion.matches || !finePointer.matches) return;
  document.querySelectorAll<HTMLElement>("[data-magnetic]").forEach((el) => {
    el.addEventListener(
      "pointermove",
      (e) => {
        const r = el.getBoundingClientRect();
        const dx = e.clientX - (r.left + r.width / 2);
        const dy = e.clientY - (r.top + r.height / 2);
        el.style.transform = `translate(${dx * 0.22}px, ${dy * 0.3}px)`;
      },
      { signal },
    );
    el.addEventListener("pointerleave", () => (el.style.transform = ""), { signal });
  });
}

// Cover image that trails the cursor over the work list
function preview(signal: AbortSignal) {
  const list = document.querySelector<HTMLElement>("[data-preview-list]");
  const box = document.querySelector<HTMLElement>("[data-preview]");
  if (!list || !box || !finePointer.matches || reducedMotion.matches) return;
  const items = box.querySelectorAll<HTMLElement>("[data-preview-item]");
  let x = 0;
  let y = 0;
  let tx = 0;
  let ty = 0;
  let raf = 0;
  let on = false;

  const target = (e: PointerEvent) => {
    const w = box.offsetWidth;
    const h = box.offsetHeight;
    tx = Math.min(e.clientX + 28, innerWidth - w - 16);
    ty = Math.max(16, Math.min(e.clientY - h / 2, innerHeight - h - 16));
  };
  const loop = () => {
    const vx = tx - x;
    x += vx * 0.13;
    y += (ty - y) * 0.13;
    const tilt = Math.max(-6, Math.min(6, vx * 0.04));
    box.style.transform = `translate3d(${x}px, ${y}px, 0) rotate(${tilt}deg)`;
    raf = on || Math.abs(vx) > 0.2 ? requestAnimationFrame(loop) : 0;
  };

  list.querySelectorAll<HTMLElement>("[data-preview-row]").forEach((row, i) => {
    row.addEventListener(
      "pointerenter",
      (e) => {
        target(e);
        if (!on) {
          x = tx;
          y = ty;
        }
        on = true;
        box.classList.add("is-on");
        items.forEach((item, j) => item.classList.toggle("is-active", i === j));
        if (!raf) raf = requestAnimationFrame(loop);
      },
      { signal },
    );
  });
  list.addEventListener("pointermove", target, { signal });
  list.addEventListener(
    "pointerleave",
    () => {
      on = false;
      box.classList.remove("is-on");
    },
    { signal },
  );
  cleanups.push(() => cancelAnimationFrame(raf));
}

// Hero background: a dot grid with a slow wave that brightens near the cursor
function dotField(signal: AbortSignal) {
  const canvas = document.querySelector<HTMLCanvasElement>("[data-dots]");
  const ctx = canvas?.getContext("2d");
  if (!canvas || !ctx) return;

  const gap = 22;
  let w = 0;
  let h = 0;
  let raf = 0;
  let visible = true;
  let px = -9999;
  let py = -9999;

  const resize = () => {
    const dpr = Math.min(devicePixelRatio || 1, 2);
    w = canvas.clientWidth;
    h = canvas.clientHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };

  const draw = (time: number) => {
    const t = time / 1000;
    ctx.clearRect(0, 0, w, h);
    for (let gy = gap / 2; gy < h; gy += gap) {
      for (let gx = gap / 2; gx < w; gx += gap) {
        const wave = Math.sin(gx * 0.012 + gy * 0.02 - t * 0.9) * 0.5 + 0.5;
        const dist = Math.hypot(gx - px, gy - py);
        const near = Math.max(0, 1 - dist / 170);
        const size = 1 + wave * 0.9 + near * 2.4;
        if (near > 0.02) {
          ctx.fillStyle = `rgba(255, 90, 44, ${0.25 + near * 0.75})`;
        } else {
          ctx.fillStyle = `rgba(237, 235, 230, ${0.09 + wave * wave * 0.38})`;
        }
        ctx.fillRect(gx - size / 2, gy - size / 2, size, size);
      }
    }
  };

  const loop = (time: number) => {
    draw(time);
    raf = visible && !document.hidden ? requestAnimationFrame(loop) : 0;
  };
  const start = () => {
    if (!raf && !reducedMotion.matches) raf = requestAnimationFrame(loop);
  };

  resize();
  draw(0);
  start();

  const ro = new ResizeObserver(() => {
    resize();
    draw(performance.now());
  });
  ro.observe(canvas);
  const io = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    if (visible) start();
  });
  io.observe(canvas);

  document.addEventListener("visibilitychange", start, { signal });
  window.addEventListener(
    "pointermove",
    (e) => {
      const r = canvas.getBoundingClientRect();
      px = e.clientX - r.left;
      py = e.clientY - r.top;
    },
    { signal, passive: true },
  );
  cleanups.push(() => {
    cancelAnimationFrame(raf);
    ro.disconnect();
    io.disconnect();
  });
}

function init() {
  cleanups.forEach((fn) => fn());
  cleanups = [];
  const controller = new AbortController();
  cleanups.push(() => controller.abort());

  reveals();
  counters();
  clock();
  magnetic(controller.signal);
  preview(controller.signal);
  dotField(controller.signal);
}

document.addEventListener("astro:page-load", init);
document.addEventListener("astro:after-swap", () => document.documentElement.classList.add("js"));
