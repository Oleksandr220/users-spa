import React from 'react'
import { useTranslation } from 'react-i18next';
import './LangButton.scss';

interface CurLng {
  [name: string]: {
    [key:string]: string
  };

}

const btnLngs: CurLng=  {
  ru: { nativeName: 'Russian' },
  en: { nativeName: 'English' },
};

export default function LangButton() {
  const { i18n } = useTranslation();

  return <>{Object.keys(btnLngs).map((lng) => {
    return (
      <button
        key={lng}
        className={i18n.resolvedLanguage === lng ? 'lng-btn active' : 'lng-btn'}
        type="submit"
        onClick={() => i18n.changeLanguage(lng)}>
        {btnLngs[lng].nativeName}
      </button>
    );
  })}</>;
}
