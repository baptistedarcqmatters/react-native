import I18n from 'react-native-i18n';
import translations from '../translations';

I18n.fallbacks = true;
I18n.translations = translations;
I18n.defaultLocale = 'en';

// Prevent name-collisions for vscode to better auto-import
const translator = I18n;
export default translator;
