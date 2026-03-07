# Landing D&D Contadores

Sitio corporativo de presentación para servicios contables de D&D.

## Arquitectura del proyecto

La estructura fue organizada con enfoque corporativo para escalar y mantener mejor el código.

```text
src/
├─ app/
│  └─ App.tsx
├─ pages/
│  └─ HomePage.tsx
├─ widgets/
│  └─ layout/
│     ├─ Navbar.tsx
│     ├─ Footer.tsx
│     └─ index.ts
├─ features/
│  └─ landing/
│     └─ sections/
│        ├─ HeroSection.tsx
│        ├─ ServicesSection.tsx
│        ├─ AnalysisSection.tsx
│        ├─ MidCtaSection.tsx
│        ├─ ContactSection.tsx
│        └─ index.ts
├─ shared/
│  ├─ components/
│  │  └─ Saludo.tsx
│  └─ ui/
│     ├─ cards/
│     │  ├─ ServiceCard.tsx
│     │  └─ ProcessCard.tsx
│     ├─ ContactItem.tsx
│     └─ ValueCard.tsx
├─ index.css
└─ main.tsx
```

## Convenciones

- Flujo por capas: `app -> pages -> features/widgets -> shared`.
- Imports absolutos con alias `@/` (ejemplo: `@/shared/ui/cards/ServiceCard`).
- Componentes reutilizables en `shared`.
- Bloques funcionales de la landing en `features/landing/sections`.

## Scripts

```bash
npm install
npm run dev
npm run build
npm run lint
```

## Imágenes

Los recursos visuales se encuentran en `public/images`.
