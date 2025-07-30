import React from 'react';
import { Globe } from 'lucide-react';
import logo from '../../public/mr-kaakes-logo.jpeg';
import { useLanguage } from '../contexts/LanguageContext';

const Header: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-40 shadow-sm">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-kaakeslime rounded-full flex items-center justify-center shadow-md overflow-hidden">
            <img
              src={logo}
              alt="MR Kaakes Logo"
              className="w-10 h-10 object-cover"
              style={{ borderRadius: '50%' }}
            />
          </div>
          <div>
            <h1 className="text-lg font-bold text-kaakesbrown">Mr Kaak</h1>
            {/* <p className="text-xs text-kaakeslime/80">{t('loading.subtitle')}</p> */}
          </div>
        </div>

        {/* Language Switcher */}
        <div className="flex items-center space-x-2">
          <Globe className="w-6 h-6 text-gray-600" />
          <div className="flex bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <button
              onClick={() => setLanguage('en')}
              className={`px-4 py-1 text-sm font-medium focus:outline-none transition-colors duration-150 ${
                language === 'en'
                  ? 'bg-kaakeslime text-kaakesbrown'
                  : 'bg-transparent text-gray-500 hover:bg-gray-100'
              }`}
              aria-pressed={language === 'en'}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage('ar')}
              className={`px-4 py-1 text-sm font-medium focus:outline-none transition-colors duration-150 border-l border-gray-200 ${
                language === 'ar'
                  ? 'bg-kaakeslime text-kaakesbrown'
                  : 'bg-transparent text-gray-500 hover:bg-gray-100'
              }`}
              aria-pressed={language === 'ar'}
            >
              AR
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;