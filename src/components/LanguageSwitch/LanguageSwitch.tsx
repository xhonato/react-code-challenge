import { MenuItem, Select } from '@mui/material';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const key = 'osapiens-language';

export const LanguageSwitch = () => {
  const { t, i18n } = useTranslation();

  /**
   * Changes language and saves it on local storage
   * @param newLanguage to change
   */
  const onLanguageSelect = (newLanguage: string) => {
    // Change language
    i18n.changeLanguage(newLanguage);
    // Save new language on local storage
    localStorage.setItem(key, newLanguage);
  }

  // Change language on initial render
  useEffect(() => {
    // Get language from local storage
    const language = localStorage.getItem(key);
    // Check wether language value is valid
    if (language === 'en' || language === 'de') {
      // Update language
      i18n.changeLanguage(language);
    }
  }, []);

  return (
    <Select value={i18n.language} onChange={(e) => {
      onLanguageSelect(e.target.value);
    }} sx={{ color: '#fff', 'svg': { color: '#fff' }, border: 1 }}>
      <MenuItem value="en">{t('languages.english')}</MenuItem>
      <MenuItem value="de">{t('languages.german')}</MenuItem>
    </Select>
  )
}
