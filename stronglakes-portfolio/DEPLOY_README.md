# Portafolio — Luis Fernando Fuertes @stronglakes

Template Rayo personalizado con tus datos reales.

---

## Estructura del sitio

```
/                  ← index.html (página principal, la que fue personalizada)
/works-simple.html ← portafolio de proyectos (requiere personalización)
/about-me.html     ← página "Sobre mí" (requiere personalización)
/services.html     ← servicios (requiere personalización)
/contact.html      ← contacto (ya tiene tu email en el formulario)
/css/              ← estilos (NO modificar)
/js/               ← scripts (NO modificar)
/img/              ← imágenes del template (reemplazar con las tuyas)
```

---

## Opción A — GitHub Pages (gratis, dominio: stronglakes.github.io/portfolio)

1. Crea un nuevo repo en GitHub, ej: `stronglakes/portfolio`
2. Sube todos los archivos de esta carpeta al repo
3. Ve a **Settings → Pages → Source: main branch / root**
4. En ~2 minutos tu sitio estará en `https://stronglakes.github.io/portfolio`

**Comandos rápidos:**
```bash
git init
git add .
git commit -m "Portfolio v2 - Rayo template"
git remote add origin https://github.com/stronglakes/portfolio.git
git push -u origin main
```

---

## Opción B — Servidor con Plesk

1. Comprime todos los archivos en un ZIP
2. En Plesk ve a **File Manager** del dominio deseado
3. Sube el ZIP a `httpdocs/` (o la carpeta raíz del dominio)
4. Extrae el ZIP en ese directorio
5. Asegúrate de que `index.html` quede en la raíz

---

## Páginas pendientes de personalizar

Estas páginas del template aún tienen contenido genérico — las puedes editar con los mismos patrones usados en index.html:

- `about-me.html` → agrega tu bio larga, foto, testimonios
- `works-simple.html` → agrega todos tus proyectos con imágenes reales
- `services.html` → detalla cada servicio con precios o CTA
- `contact.html` → el formulario usa `mail.php`, necesita configuración en servidor

---

## Imágenes de proyectos

Para reemplazar los placeholders grises:
1. Agrega tus imágenes en `/img/projects/`
2. En `index.html` busca `preview-image-1`, `preview-image-7`, `preview-image-4`
3. En `/css/main.css` busca `.preview-image-1` y cambia `background-image: url(...)`

---

## Cambiar color de acento

En `/css/main.css` busca `--accent` y cambia el valor hexadecimal.
El template ya tiene modo oscuro/claro activado (botón en el header).

---

## Tu foto

La foto actual se carga desde `https://stronglakes.github.io/img/sp_photo.jpg`
Para que funcione offline, descarga la foto y guárdala como `img/photo-lf.jpg`,
luego reemplaza las URL en index.html.
