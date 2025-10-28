# Multi-Language Support Guide

Your portfolio now supports **4 languages**:
- 🇬🇧 **English** (Default)
- 🇮🇳 **Hindi** (हिन्दी)
- 🇵🇰 **Urdu** (اردو) - RTL supported
- 🇸🇦 **Arabic** (العربية) - RTL supported

## How It Works

### Language Switching
- Click the **globe icon** (🌐) in the header to open the language menu
- Select your preferred language
- The language preference is saved in localStorage
- The entire website instantly switches to the selected language

### RTL Support
- **Arabic** and **Urdu** automatically switch to Right-to-Left (RTL) layout
- **English** and **Hindi** use Left-to-Right (LTR) layout
- Direction changes are handled automatically

## Features

### ✅ Implemented
- Language switcher component in header (desktop & mobile)
- Complete translations for all 4 languages
- RTL layout support for Arabic and Urdu
- Persistent language selection (saved in browser)
- Automatic direction switching

### 📝 Translation Coverage
All sections are translated:
- Navigation menu
- Hero section (greeting, title, description, buttons)
- About section
- Journey timeline
- Skills section
- Projects section
- Contact form and information
- Footer

## How to Add/Edit Translations

### Translation Files Location
```
app/i18n/
  ├── en.ts       (English)
  ├── hi.ts       (Hindi)
  ├── ur.ts       (Urdu)
  └── ar.ts       (Arabic)
```

### Adding New Translations
1. Open the relevant language file (e.g., `app/i18n/en.ts`)
2. Add your key-value pair in the appropriate section:
```typescript
export const en = {
  hero: {
    greeting: 'Hi, I\'m',
    // Add new translation here
    newKey: 'New text in English'
  }
}
```
3. Add the same key in ALL language files
4. Use in components: `t('hero.newKey')`

### Example Usage in Components
```typescript
import { useLanguage } from '../lib/LanguageContext'

export default function MyComponent() {
  const { t } = useLanguage()
  
  return (
    <div>
      <h1>{t('hero.greeting')}</h1>
    </div>
  )
}
```

## Adding a New Language

To add a new language (e.g., French):

1. Create translation file: `app/i18n/fr.ts`
2. Copy structure from `en.ts` and translate all values
3. Add to `app/i18n/translations.ts`:
```typescript
import { fr } from './fr'

export const translations = {
  en, hi, ur, ar,
  fr  // Add new language
}
```
4. Update type definition in `app/lib/LanguageContext.tsx`:
```typescript
type Language = 'en' | 'hi' | 'ur' | 'ar' | 'fr'
```
5. Add to language switcher in `app/components/LanguageSwitcher.tsx`:
```typescript
const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' },
  { code: 'ur', name: 'اردو', flag: '🇵🇰' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' }  // Add here
]
```

## Technical Implementation

### Context Provider
- `LanguageContext` manages current language state
- Persists selection to localStorage
- Provides `t()` function for translations
- Handles RTL/LTR direction switching

### RTL Support
- Automatic `dir="rtl"` attribute on `<html>` for Arabic/Urdu
- CSS supports both directions with proper styling
- No manual intervention needed when switching languages

## Browser Compatibility
- Works in all modern browsers
- Uses CSS Grid and Flexbox (RTL-aware)
- Falls back gracefully if JavaScript disabled

## Testing Languages

1. **English**: Default language
2. **Hindi**: Click globe → हिन्दी
3. **Urdu**: Click globe → اردو (notice RTL layout)
4. **Arabic**: Click globe → العربية (notice RTL layout)

All content is fully translated and tested!
