import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Language from './Language';

const Header = ({ scrollToFeatures }) => {
  const { t } = useTranslation();

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="w-full border-b border-gray-300">
      {/* Main Header Container */}
      <div className="flex items-center justify-between px-4 py-4 bg-white text-gray-400 sm:px-8">
        {/* Logo */}
        <div className='pr-16'>
            <svg width="112" height="24" viewBox="0 0 112 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.9251 8.46393C18.9251 12.6964 15.5862 16.1278 11.468 16.1278V0.800049C15.5874 0.800049 18.9251 4.23151 18.9251 8.46393ZM0 12.5921H10.3216V23.1999H0V12.5921ZM5.1614 11.4152C8.01196 11.4152 10.3228 9.04031 10.3228 6.1107C10.3228 3.1811 8.01196 0.806182 5.1614 0.806182C2.31084 0.806182 0 3.1811 0 6.1107C0 9.04031 2.31084 11.4152 5.1614 11.4152ZM29.9887 14.0437H32.8581V14.0424C37.2788 14.0424 39.0445 11.3211 39.0445 8.64588C39.0445 5.59376 36.9824 3.19584 32.8581 3.19584H26.5518V20.8046H29.9887V14.0437ZM35.5096 8.64712C35.5096 10.2117 34.6491 11.1955 32.7116 11.1955H29.9887V6.0726H32.7116C34.6491 6.0726 35.5096 7.08251 35.5096 8.64712ZM45.7185 20.8031C41.7915 20.8031 38.8217 17.9774 38.8217 13.5882C38.8217 9.19909 41.8883 6.37333 45.8166 6.37333C49.7448 6.37333 52.8138 9.17546 52.8138 13.5882C52.8138 18.001 49.6722 20.8031 45.7197 20.8031H45.7185ZM45.7185 17.7249C47.5362 17.7249 49.2789 16.3642 49.2789 13.5882C49.2789 10.8122 47.5846 9.45157 45.7669 9.45157C43.9493 9.45157 42.307 10.7886 42.307 13.5882C42.307 16.3879 43.8779 17.7249 45.7185 17.7249ZM64.3546 8.54502C63.424 7.23039 61.7031 6.37346 59.912 6.37346C56.4304 6.37346 53.6809 9.17559 53.6809 13.5386C53.6809 17.9016 56.4292 20.8032 59.889 20.8032C62.0238 20.8032 63.5462 19.7958 64.3546 18.5086V20.5769H67.8399V1.91095H64.3546V8.54502ZM57.1891 13.5386C57.1891 10.8907 58.9318 9.47906 60.7725 9.47906C62.6616 9.47906 64.3812 10.9392 64.3812 13.5884C64.3812 16.2375 62.6132 17.7014 60.7725 17.7014C58.9318 17.7014 57.1891 16.1865 57.1891 13.5386ZM69.6317 6.60102H73.0686V20.5768H69.6317V6.60102ZM84.2629 20.5768H87.7228V6.60102H84.2629V14.296C84.2629 16.5397 83.0358 17.7511 81.2181 17.7511C79.4005 17.7511 78.2 16.5409 78.2 14.296V6.60102H74.7631V14.7997C74.7631 18.6354 77.0455 20.7535 80.2125 20.7535C81.9067 20.7535 83.4025 19.996 84.2629 18.812V20.5768ZM108.562 12.8581C108.562 10.6368 107.358 9.47891 105.544 9.47891C103.73 9.47891 102.499 10.6368 102.499 12.8581V20.5767H99.0621V12.8581C99.0621 10.6368 97.8616 9.47891 96.0439 9.47891C94.2262 9.47891 92.9773 10.6368 92.9773 12.8581V20.5767H89.5404V6.60091H92.9773V8.29239C93.8341 7.13199 95.2815 6.40067 96.9757 6.40067C99.0887 6.40067 100.831 7.33472 101.763 9.07221C102.647 7.48396 104.438 6.40067 106.427 6.40067C109.692 6.40067 112 8.51875 112 12.3781V20.5767H108.563V12.8581H108.562ZM73.3856 2.86838C73.3856 4.01068 72.4846 4.9367 71.3731 4.9367C70.2616 4.9367 69.3606 4.01068 69.3606 2.86838C69.3606 1.72607 70.2616 0.800049 71.3731 0.800049C72.4846 0.800049 73.3856 1.72607 73.3856 2.86838Z" fill="black"/>
            </svg>
        </div>

        {/* Menu for Screens larger than sm */}
        <div className="hidden md:flex flex-1 justify-between items-center">
          <div></div> {/* Empty to keep middle and right parts centered */}
          <nav className="flex space-x-4">
          <button className="text-gray-400 font-medium hover:text-black" onClick={scrollToFeatures}>{t('What you get')}</button>
          <button className="text-gray-400 font-medium hover:text-black" onClick={() => window.location.href = 'https://hello.podium.page/pricing'}>{t('Pricing')}</button>
          <button className="text-gray-400 font-medium hover:text-black" onClick={() => window.location.href = 'https://hello.podium.page/api'}>{t('API')}</button>
          </nav>
          <div className="flex items-center space-x-4">
            <Language />
            <button className="text-gray-400 mr-4 hover:text-black" onClick={() => window.location.href = 'https://podium.page/login'}>{t('Log In')}</button>
            <button className='flex h-10 w-fit px-4 bg-gradient-to-r from-[#007AFF] to-[#F300FF] text-white text-base font-medium rounded-lg shadow-[0_0_5px_rgba(98,0,128,0.6)] hover:shadow-[0_0_10px_rgba(98,0,128,0.6)] items-center justify-center' onClick={() => window.location.href = 'https://podium.page/create-account'}>{t('Try it now')}</button>
          </div>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className='md:hidden flex flex-row items-center space-x-2'>
            <Language />
            <button
              className="text-black focus:outline-none"
              onClick={toggleMenu}
            >
              {menuOpen ? (
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
        </div>
      </div>

      {/* Mobile Menu (Full Screen Overlay) */}
      {menuOpen && (
        <div className="sm:hidden fixed inset-0 top-20 bg-white flex flex-col justify-left text-left text-gray-400">
          <nav className="flex w-full flex-col space-y-6 text-lg items-left justify-left p-4">
            <button className="text-left" onClick={() => window.location.href = 'https://hello.podium.page/pricing'}>{t('Pricing')}</button>
            <button className="text-left" onClick={() => window.location.href = 'https://hello.podium.page/api'}>{t('API')}</button>
            <button className="text-left" onClick={() => window.location.href = 'https://hello.podium.page/blog'}>{t('Resources')}</button>
            <button className="text-left" onClick={() => window.location.href = 'https://hello.podium.page/affiliates'}>{t('Affiliate Program')}</button>
            <button className="text-left" onClick={() => window.location.href = 'https://hello.podium.page/tos'}>{t('Terms of Service')}</button>
            <button className="text-left" onClick={() => window.location.href = 'https://hello.podium.page/privacy-policy'}>{t('Privacy Policy')}</button>
            <button className='my-4 flex h-12 w-full bg-gradient-to-r from-[#007AFF] to-[#F300FF] text-white font-medium text-xl rounded-lg shadow items-center justify-center' onClick={() => window.location.href = 'https://podium.page/create-account'}>{t('Try it now →')}</button>
            <button onClick={() => window.location.href = 'https://podium.page/login'}>{t('Log In')}</button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
