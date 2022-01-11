import '../../services/i18n';
import { Trans, useTranslation } from 'react-i18next';

export default function Greetings() {
  const { i18n } = useTranslation();

  return (
    <h1 className={'home-title'}>
      <Trans i18nKey="description.part7">
        Welcome to single page application
      </Trans>
    </h1>
  );
}
