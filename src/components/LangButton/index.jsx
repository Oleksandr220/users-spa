import { useTranslation } from 'react-i18next';
import './LangButton.scss';

const btnLngs = {
  en: { nativeName: 'English' },
  ru: { nativeName: 'Russian' },
};

export default function LangButton(click) {
  const { i18n } = useTranslation();

  return Object.keys(btnLngs).map((lng) => (
    <button
      key={lng}
      className={i18n.resolvedLanguage === lng ? 'lng-btn active' : 'lng-btn'}
      type="submit"
      onClick={() => i18n.changeLanguage(lng)}
    >
      {btnLngs[lng].nativeName}
    </button>
  ));
}
