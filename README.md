# Portfolio Website Profesional

Website portfolio modern dan responsif yang dibangun dengan React, TypeScript, dan Tailwind CSS.

## 🌟 Demo Live
**URL Deployment:** https://8157eydv5h.space.minimax.io

## 🚀 Fitur Utama

### ✨ Desain & UI/UX
- **Modern & Minimalis**: Desain clean dengan tipografi yang elegan
- **Dark/Light Mode**: Toggle tema dengan transisi smooth dan opsi sistem
- **Responsive Design**: Mobile-first design yang sempurna di semua device
- **Animasi Halus**: Framer Motion untuk animasi yang engaging
- **Color Scheme Profesional**: Palet warna yang konsisten dan eye-friendly

### 🎯 Komponen Lengkap

#### 1. **Hero Section**
- Nama dan headline dengan typing animation effect
- Tombol CTA: "View Portfolio" dan "Contact Me"
- Background gradient dengan pattern subtle
- Social media links dan scroll indicator

#### 2. **About Section**
- Deskripsi personal dalam bahasa Indonesia
- Foto profil placeholder dengan design elegant
- Statistics achievements (50+ Projects, 30+ Clients, 500+ Coffee, 3+ Years)
- Tech stack badges yang interaktif

#### 3. **Portfolio Section**
- Grid 6 proyek unggulan dengan card design menarik
- Project thumbnails dengan hover overlay effects
- Tech stack badges untuk setiap proyek
- Links ke GitHub repo dan demo live
- Kategori Featured projects

#### 4. **Skills Section**
- Kategorisasi: Frontend, Backend, Tools & Technologies, Mobile & Other
- Progress bars animated dengan rating visual
- 20+ teknologi dengan emoji icons
- Additional skills grid dengan hover effects

#### 5. **Contact Section**
- Form kontak dengan validasi lengkap (React Hook Form)
- Error messages dalam bahasa Indonesia
- Contact information cards dengan icons
- Social media links dengan hover effects
- Toast notifications untuk success/error states

#### 6. **Footer**
- Quick navigation links
- Social media icons
- Copyright notice dengan Heart icon
- Back to top button (desktop & mobile floating)

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
