import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          description: {
            part1: 'Select a user to see their info',
            part2: 'Back',
            part3: 'Users',
            part4: 'Users Info',
            part5: 'Log Out',
            part6: 'Log In',
          },
        },
      },
      ru: {
        translation: {
          description: {
            part1:
              'Выберете пользователя, чтобы посмотреть подробную информацию о нем',
            part2: 'Назад',
            part3: 'Пользователи',
            part4: 'Информация о пользователе',
            part5: 'Выйти',
            part6: 'Ввойти',
          },
        },
      },
    },
  });

export default i18n;
