# 📱 Progressive Web App (PWA) - Next.js Learning App

Esta aplicación Next.js ahora es una **PWA completa** que se puede instalar en cualquier dispositivo!

## ✨ Características PWA

- ✅ **Instalable** - Se puede instalar como app nativa en escritorio y móvil
- ✅ **Offline** - Funciona sin conexión gracias al Service Worker
- ✅ **Rápida** - Caché inteligente para cargas instantáneas
- ✅ **Responsive** - Adaptada a todos los tamaños de pantalla
- ✅ **Icono en home screen** - Como cualquier app nativa

## 🚀 Cómo probar la PWA localmente

### 1. Hacer build de producción

```bash
cd my-app
npm run build -- --webpack
```

### 2. Servir la carpeta out/

La PWA necesita HTTPS para funcionar (excepto en localhost). Puedes usar cualquier servidor estático:

**Opción 1: Using serve (recomendado)**
```bash
npx serve@latest out
```

**Opción 2: Using http-server**
```bash
npx http-server out -p 3000
```

### 3. Abrir en navegador

Visita `http://localhost:3000` (o el puerto que uses)

### 4. Verificar que funciona

1. **Chrome DevTools:**
   - F12 → Application → Manifest (debería mostrar el manifest.json)
   - Application → Service Workers (debería estar registrado y activo)

2. **Lighthouse:**
   - F12 → Lighthouse → Generate Report → PWA
   - Debería dar un score alto (90+)

3. **Instalar:**
   - Chrome: Icono de instalación en la barra de direcciones
   - O ir a `/pwa` en la app y usar el botón de instalación

## 📦 Desplegar en Firebase Hosting

La app ya está configurada para deployment estático. Para desplegarla:

```bash
# 1. Build (ya lo hiciste)
npm run build -- --webpack

# 2. Deploy a Firebase
firebase deploy
```

La PWA funcionará automáticamente en Firebase Hosting (tiene HTTPS por defecto).

## 🎯 Probar funcionalidad offline

1. Abre la app en el navegador
2. Abre DevTools (F12) → Network
3. Marca "Offline"
4. Recarga la página
5. ¡Debería seguir funcionando!

## 🔧 Archivos importantes de PWA

```
my-app/
├── public/
│   ├── manifest.json          # Configuración PWA
│   ├── icon.svg               # Icono fuente
│   ├── icon-192x192.png       # Icono pequeño
│   ├── icon-512x512.png       # Icono grande
│   ├── sw.js                  # Service Worker (generado automáticamente)
│   └── workbox-*.js           # Librería Workbox (generado)
├── next.config.ts             # Configuración de next-pwa
├── app/layout.tsx             # Meta tags PWA
└── scripts/generate-icons.mjs # Script para generar iconos
```

## 🛠️ Generar nuevos iconos

Si cambias el `icon.svg`, regenera los PNGs:

```bash
npm run generate-icons
```

## 📱 Cómo instalar en diferentes dispositivos

### Chrome/Edge (Windows/Mac):
1. Haz clic en el icono de instalación en la barra de direcciones
2. O Menú (⋮) → "Instalar aplicación"
3. Confirma la instalación

### iOS (Safari):
1. Toca el botón de compartir
2. Selecciona "Agregar a pantalla de inicio"
3. Confirma

### Android (Chrome):
1. Toca el banner de instalación
2. O Menú (⋮) → "Agregar a pantalla de inicio"
3. Confirma

## 🔍 Troubleshooting

### La PWA no se puede instalar:
- ✅ Verifica que estés usando HTTPS (o localhost)
- ✅ Verifica que manifest.json esté accesible en `/manifest.json`
- ✅ Verifica que el Service Worker esté registrado (DevTools → Application)
- ✅ Verifica los iconos en manifest.json

### Service Worker no se registra:
- ✅ Verifica que hiciste `npm run build -- --webpack`
- ✅ Verifica que `sw.js` existe en `public/`
- ✅ Limpia caché del navegador (Ctrl+Shift+Delete)

### Cambios no se reflejan:
- ✅ El Service Worker cachea agresivamente
- ✅ Desregistra el SW en DevTools → Application → Service Workers → Unregister
- ✅ Hard refresh (Ctrl+Shift+R)
- ✅ O cierra todas las pestañas de la app y vuelve a abrir

## 📊 PWA Score

Para verificar que tu PWA está bien configurada:

1. Abre Chrome DevTools (F12)
2. Ve a Lighthouse
3. Selecciona "Progressive Web App"
4. Click "Generate Report"
5. Deberías obtener 90+ puntos

## 🎓 Comparación: Angular vs Next.js PWA

### Angular (@angular/pwa):
```bash
ng add @angular/pwa
# Genera todo automáticamente
```

### Next.js (next-pwa):
```bash
npm install next-pwa
# Requiere configuración manual en next.config.ts
# Más control pero más trabajo
```

**Ambos son excelentes!** Angular es más automático, Next.js da más control.

## 🚀 Próximos pasos

- [ ] Personalizar iconos con tu logo/marca
- [ ] Configurar push notifications (requiere backend)
- [ ] Agregar estrategias de caché personalizadas
- [ ] Implementar update notifications cuando hay nueva versión
- [ ] Analytics para PWA (medir instalaciones)

## 📚 Recursos

- [Next PWA Docs](https://github.com/shadowwalker/next-pwa)
- [PWA Checklist](https://web.dev/pwa-checklist/)
- [Workbox Docs](https://developers.google.com/web/tools/workbox)
- [Next.js PWA Examples](https://github.com/vercel/next.js/tree/canary/examples/progressive-web-app)

---

**¡Tu app Next.js ahora es una PWA completa! 🎉**

Visita `/pwa` en la aplicación para ver más información y probar la instalación.
