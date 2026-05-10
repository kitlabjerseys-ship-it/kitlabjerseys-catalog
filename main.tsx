@import "tailwindcss";

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  background: #f4ead8;
  color: #2a2323;
  font-family:
    Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
    sans-serif;
}

::selection {
  background: #4ba9b2;
  color: #fdf8f0;
}

button,
a[href],
input,
select,
textarea {
  border-radius: 999px;
}

textarea {
  border-radius: 24px;
}

article,
aside,
form {
  border-radius: 28px;
}

@keyframes hero-zoom {
  from {
    transform: scale(1.08);
  }
  to {
    transform: scale(1);
  }
}

@keyframes fade-up {
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slide-up {
  from {
    opacity: 0;
    transform: translateY(26px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-hero-zoom {
  animation: hero-zoom 18s ease-out both;
}

.animate-fade-up,
.catalog-card {
  animation: fade-up 0.72s cubic-bezier(0.2, 0.72, 0.2, 1) both;
}

.animate-fade-in {
  animation: fade-in 0.22s ease-out both;
}

.animate-slide-up {
  animation: slide-up 0.36s cubic-bezier(0.2, 0.72, 0.2, 1) both;
}

.motion-delay-1 {
  animation-delay: 120ms;
}

.motion-delay-2 {
  animation-delay: 220ms;
}

.motion-delay-3 {
  animation-delay: 340ms;
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 1ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-duration: 1ms !important;
  }
}
