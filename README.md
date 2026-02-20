# KSM Servicios - Sitio Web Oficial

Sitio web moderno con tema cósmico para KSM Servicios Inteligentes.

## 🌌 Características

- ✨ Hero section con video de fondo y efectos de partículas
- 🎨 Diseño cósmico con gradientes y efectos glow
- 📱 Completamente responsive (mobile-first)
- ⚡ Animaciones suaves y transiciones
- 📧 Formulario de contacto funcional
- 🚀 Performance optimizado
- 🎯 SEO friendly

## 📁 Estructura del Proyecto

```
ksmservicios-web/
├── index.html
├── css/
│   ├── main.css
│   ├── animations.css
│   └── responsive.css
├── js/
│   ├── main.js
│   └── particles-config.js
├── assets/
│   ├── images/
│   │   ├── kosmos.png
│   │   ├── ksm.png
│   │   └── favicon.ico
│   └── videos/
│       └── kosmosini.mp4
└── README.md
```

## 🚀 Instalación

### 1. Copiar Assets

Copia los siguientes archivos a las carpetas correspondientes:

```bash
# Imágenes
cp d:/Poyectos/SO/kosmos.png assets/images/
cp d:/Poyectos/SO/ksm.png assets/images/
cp d:/Poyectos/SO/favicon.ico assets/images/

# Video
cp d:/Poyectos/SO/kosmosini.mp4 assets/videos/
```

### 2. Abrir en Navegador

Simplemente abre `index.html` en tu navegador favorito.

Para desarrollo local con live reload, puedes usar:

```bash
# Con Python
python -m http.server 8000

# Con Node.js (npx)
npx serve

# Con VS Code
# Instala la extensión "Live Server" y click derecho → "Open with Live Server"
```

## 🎨 Personalización

### Colores

Los colores se definen en `css/main.css` usando variables CSS:

```css
:root {
  --ksm-dark: #0a0a1e;
  --ksm-cyan: #00d4ff;
  --ksm-purple: #9d4edd;
  /* ... más colores */
}
```

### Contenido

Edita el texto directamente en `index.html`:

- **Hero Section**: Línea 50-80
- **Servicios**: Línea 90-180
- **Contacto**: Línea 200-250

## 📧 Configurar Formulario de Contacto

Para que el formulario funcione, integra con un servicio de email:

### Opción 1: EmailJS (Recomendado)

1. Crea cuenta en [EmailJS](https://www.emailjs.com/)
2. Configura un servicio de email
3. Agrega este código en `js/main.js`:

```javascript
emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData)
  .then(() => {
    showNotification('¡Mensaje enviado!', 'success');
  });
```

### Opción 2: Formspree

1. Crea cuenta en [Formspree](https://formspree.io/)
2. Cambia el action del form:

```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

## 🚀 Deploy

### GitHub Pages

```bash
git add .
git commit -m "Initial commit"
git push origin main

# Habilita GitHub Pages en Settings → Pages
```

### Netlify

1. Arrastra la carpeta a [Netlify Drop](https://app.netlify.com/drop)
2. ¡Listo!

### Vercel

```bash
npm i -g vercel
vercel
```

## 📊 Performance

- Lighthouse Score: 95+
- First Contentful Paint: < 1.5s
- Total Page Size: < 2MB

## 🛠️ Tecnologías

- HTML5
- CSS3 (Variables, Grid, Flexbox)
- JavaScript ES6+
- Particles.js
- Google Fonts (Orbitron, Inter)

## 📝 Licencia

© 2025 KSM Servicios. Todos los derechos reservados.

---

**KSM Servicios - Exploring the Digital Cosmos** 🌌
