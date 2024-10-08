import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Language = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  // Function to change language
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    setIsOpen(false); // Close the dropdown after language is selected
  };

  const currentLanguage = i18n.language;

  // Toggle the dropdown
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className='relative'>
      {/* Trigger button */}
      <button onClick={toggleDropdown} className='flex items-center space-x-2'>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 5H15M9 3V5M10.0482 14.5C8.52083 12.9178 7.28073 11.0565 6.41187 9M12.5 18H19.5M11 21L16 11L21 21M12.7511 5C11.7831 10.7702 8.06969 15.6095 3 18.129"
            stroke="#9CA3AF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3 5H15M9 3V5M10.0482 14.5C8.52083 12.9178 7.28073 11.0565 6.41187 9M12.5 18H19.5M11 21L16 11L21 21M12.7511 5C11.7831 10.7702 8.06969 15.6095 3 18.129"
            stroke="black"
            strokeOpacity="0.2"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className='absolute mt-4 -right-2 bg-white border border-gray-200 shadow-lg rounded-md w-48'>
          <ul>
  <li>
    <button
      className='w-full text-left px-4 py-2 hover:bg-gray-100 flex justify-between'
      onClick={() => changeLanguage('en')}
    >
      English
      {
        currentLanguage === 'en' && 
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M16.7071 5.29289C17.0976 5.68342 17.0976 6.31658 16.7071 6.70711L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071L3.29289 10.7071C2.90237 10.3166 2.90237 9.68342 3.29289 9.29289C3.68342 8.90237 4.31658 8.90237 4.70711 9.29289L8 12.5858L15.2929 5.29289C15.6834 4.90237 16.3166 4.90237 16.7071 5.29289Z" fill="#111827"/>
        </svg>
      }
    </button>
  </li>
  <li>
    <button
      className='w-full text-left px-4 py-2 hover:bg-gray-100 flex justify-between'
      onClick={() => changeLanguage('fr')}
    >
      Français
      {
        currentLanguage === 'fr' && 
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M16.7071 5.29289C17.0976 5.68342 17.0976 6.31658 16.7071 6.70711L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071L3.29289 10.7071C2.90237 10.3166 2.90237 9.68342 3.29289 9.29289C3.68342 8.90237 4.31658 8.90237 4.70711 9.29289L8 12.5858L15.2929 5.29289C15.6834 4.90237 16.3166 4.90237 16.7071 5.29289Z" fill="#111827"/>
        </svg>
      }
    </button>
  </li>
  <li>
    <button
      className='w-full text-left px-4 py-2 hover:bg-gray-100 flex justify-between'
      onClick={() => changeLanguage('es')}
    >
      Español
      {
        currentLanguage === 'es' && 
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M16.7071 5.29289C17.0976 5.68342 17.0976 6.31658 16.7071 6.70711L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071L3.29289 10.7071C2.90237 10.3166 2.90237 9.68342 3.29289 9.29289C3.68342 8.90237 4.31658 8.90237 4.70711 9.29289L8 12.5858L15.2929 5.29289C15.6834 4.90237 16.3166 4.90237 16.7071 5.29289Z" fill="#111827"/>
        </svg>
      }
    </button>
  </li>
  <li>
    <button
      className='w-full text-left px-4 py-2 hover:bg-gray-100 flex justify-between'
      onClick={() => changeLanguage('pt')}
    >
      Português
      {
        currentLanguage === 'pt' && 
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M16.7071 5.29289C17.0976 5.68342 17.0976 6.31658 16.7071 6.70711L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071L3.29289 10.7071C2.90237 10.3166 2.90237 9.68342 3.29289 9.29289C3.68342 8.90237 4.31658 8.90237 4.70711 9.29289L8 12.5858L15.2929 5.29289C15.6834 4.90237 16.3166 4.90237 16.7071 5.29289Z" fill="#111827"/>
        </svg>
      }
    </button>
  </li>
  <li>
    <button
      className='w-full text-left px-4 py-2 hover:bg-gray-100 flex justify-between'
      onClick={() => changeLanguage('it')}
    >
      Italiano
      {
        currentLanguage === 'it' && 
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M16.7071 5.29289C17.0976 5.68342 17.0976 6.31658 16.7071 6.70711L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071L3.29289 10.7071C2.90237 10.3166 2.90237 9.68342 3.29289 9.29289C3.68342 8.90237 4.31658 8.90237 4.70711 9.29289L8 12.5858L15.2929 5.29289C15.6834 4.90237 16.3166 4.90237 16.7071 5.29289Z" fill="#111827"/>
        </svg>
      }
    </button>
  </li>
  <li>
    <button
      className='w-full text-left px-4 py-2 hover:bg-gray-100 flex justify-between'
      onClick={() => changeLanguage('de')}
    >
      Deutsch
      {
        currentLanguage === 'de' && 
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M16.7071 5.29289C17.0976 5.68342 17.0976 6.31658 16.7071 6.70711L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071L3.29289 10.7071C2.90237 10.3166 2.90237 9.68342 3.29289 9.29289C3.68342 8.90237 4.31658 8.90237 4.70711 9.29289L8 12.5858L15.2929 5.29289C15.6834 4.90237 16.3166 4.90237 16.7071 5.29289Z" fill="#111827"/>
        </svg>
      }
    </button>
  </li>
  <li>
    <button
      className='w-full text-left px-4 py-2 hover:bg-gray-100 flex justify-between'
      onClick={() => changeLanguage('ru')}
    >
      Русский
      {
        currentLanguage === 'ru' && 
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M16.7071 5.29289C17.0976 5.68342 17.0976 6.31658 16.7071 6.70711L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071L3.29289 10.7071C2.90237 10.3166 2.90237 9.68342 3.29289 9.29289C3.68342 8.90237 4.31658 8.90237 4.70711 9.29289L8 12.5858L15.2929 5.29289C15.6834 4.90237 16.3166 4.90237 16.7071 5.29289Z" fill="#111827"/>
        </svg>
      }
    </button>
  </li>
  <li>
    <button
      className='w-full text-left px-4 py-2 hover:bg-gray-100 flex justify-between'
      onClick={() => changeLanguage('zh')}
    >
      中文
      {
        currentLanguage === 'zh' && 
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M16.7071 5.29289C17.0976 5.68342 17.0976 6.31658 16.7071 6.70711L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071L3.29289 10.7071C2.90237 10.3166 2.90237 9.68342 3.29289 9.29289C3.68342 8.90237 4.31658 8.90237 4.70711 9.29289L8 12.5858L15.2929 5.29289C15.6834 4.90237 16.3166 4.90237 16.7071 5.29289Z" fill="#111827"/>
        </svg>
      }
    </button>
  </li>
          </ul>

        </div>
      )}
    </section>
  );
};

export default Language;
