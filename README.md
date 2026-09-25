# Scalix — Propuesta visual de la web

Web de Scalix, empresa de posicionamiento y crecimiento online de negocios
(Google Maps, SEO, GEO, páginas web, hosting y dominio).

Propuesta visual construida como sitio **navegable y desplegable**: sirve para
entregar el trabajo (se puede grabar haciendo scroll) y, a la vez, es la base
para la web real que se subirá a GitHub y se desplegará en Vercel.

## Stack

- [Next.js 16](https://nextjs.org) (App Router) + React 19 + TypeScript
- Tailwind CSS v4
- Fuentes autoalojadas: Fraunces (titulares) y Manrope (interfaz)
- Sin imágenes externas: todo el diseño usa tipografía, color y SVG inline

## Scripts

```bash
npm install      # instalar dependencias
npm run dev      # desarrollo en http://localhost:3000
npm run build    # compilación de producción
npm run start    # servir la build de producción
npm run lint     # eslint
```

## Páginas

| Ruta            | Contenido |
| --------------- | --------- |
| `/`             | Hero + CTA "Agendar llamada", +50 clientes, servicios, proceso, planes, FAQ corta y CTA final |
| `/servicios`    | Los 5 servicios en detalle (Google Maps, SEO, GEO, Página web, Hosting y dominio) |
| `/planes`       | Planes de 49/82/99 € en tarjetas + tabla comparativa con ✓/— |
| `/sobre-nosotros` | +50 clientes recurrentes y espacios reservados para testimonios, logos, casos y resultados |
| `/faq`          | Preguntas frecuentes |
| `/contacto`     | Teléfonos 640 29 57 43 · 640 24 30 45 + CTA "Agendar llamada" |

## Estructura

```
src/
  app/            # páginas (layout, home, servicios, planes, sobre-nosotros, faq, contacto)
  components/     # Header, Footer, Hero, PlanCard, PlanTable, Faq, Reveal, etc.
  lib/
    site.ts       # contenido y datos editables (teléfonos, planes, servicios, FAQs)
```

Todo el contenido se edita en un solo lugar: `src/lib/site.ts`.

## Logo

Mientras no se suba el logo real, se usa un monograma placeholder en
`src/components/Logo.tsx` (marca + wordmark). Para reemplazarlo, suele bastar
con cambiar el bloque SVG del interior y, si es necesario, colocarlo en
`public/` y referenciarlo con `next/image`.

## Subir a GitHub y desplegar en Vercel

```bash
git remote add origin https://github.com/TU_USUARIO/TU_REPO.git
git add .
git commit -m "Propuesta visual de la web de Scalix"
git branch -M main
git push -u origin main
```

1. Crea un repositorio nuevo en https://github.com/new (o usa el paso anterior
   si ya lo creaste).
2. Entra en https://vercel.com/new e **Importa** el repositorio.
3. Vercel detecta Next.js automáticamente. Pulsa **Deploy**.
4. Listo: cada `git push` a `main` genera un nuevo despliegue.

## Grabación para la entrega

1. `npm run dev` (o `npm run build` + `npm run start`).
2. Abre `http://localhost:3000` en una ventana de ~1440 px de ancho.
3. Graba la pantalla y haz scroll por cada página (`/`, `/servicios`,
   `/planes`, `/sobre-nosotros`, `/faq`, `/contacto`).
4. Muestra bien el menú superior con el botón **Agendar llamada**, los planes,
   la comparativa y el CTA final con los dos teléfonos.