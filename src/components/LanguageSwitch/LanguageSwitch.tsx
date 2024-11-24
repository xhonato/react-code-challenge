import { MenuItem, Select } from '@mui/material';
import { useTranslation } from 'react-i18next';

export const LanguageSwitch = () => {
  const { t, i18n } = useTranslation();

  const onLanguageSelect = (newLanguage: string) => {
    i18n.changeLanguage(newLanguage);
  }

  return (
    <Select value={i18n.language} onChange={(e) => {
      onLanguageSelect(e.target.value);
    }} sx={{ color: '#fff', 'svg': { color: '#fff' }, border: 1 }}>
      <MenuItem value="en">{t('languages.english')}</MenuItem>
      <MenuItem value="de">{t('languages.german')}</MenuItem>
    </Select>
  )
}
