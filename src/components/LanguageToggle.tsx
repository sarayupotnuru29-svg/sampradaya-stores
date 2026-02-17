import { useTranslation } from 'react-i18next';

const LanguageToggle = () => {
  const { i18n } = useTranslation();

  return (
    <div className="flex items-center gap-1 rounded-lg border border-border bg-card p-1">
      <button
        onClick={() => i18n.changeLanguage('te')}
        className={`rounded-md px-3 py-1 text-sm font-medium transition-all font-telugu ${
          i18n.language === 'te' ? 'bg-primary text-primary-foreground' : 'text-foreground hover:bg-muted'
        }`}
      >
        తెలుగు
      </button>
      <button
        onClick={() => i18n.changeLanguage('en')}
        className={`rounded-md px-3 py-1 text-sm font-medium transition-all ${
          i18n.language === 'en' ? 'bg-primary text-primary-foreground' : 'text-foreground hover:bg-muted'
        }`}
      >
        English
      </button>
    </div>
  );
};

export default LanguageToggle;
