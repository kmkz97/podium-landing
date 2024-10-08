// components/Intro.js
import React from 'react';
import { useTranslation } from 'react-i18next';

const Intro = () => {
  const { t } = useTranslation();

  return (
    <section className="intro">
      <div className="mt-12 flex flex-col w-full items-center justify-center p-8">
        <h1 className="text-4xl lg:text-5xl text-center font-bold text-black"><span className='text-indigo-600'>{t('Supercharge')}</span> {t('Your Podcast')}</h1>
      <p className='flex max-w-96 my-8 text-center text-xl font-light md:font-regular text-gray-600'>{t('Get instant transcript, show notes, clips, chapters and more!')}</p>
        <button 
          className='my-4 flex h-12 w-full sm:w-fit sm:px-8 bg-gradient-to-r from-[#007AFF] to-[#F300FF] text-white font-medium text-xl rounded-lg shadow-[0_0_5px_rgba(98,0,128,0.6)] hover:shadow-[0_0_10px_rgba(98,0,128,0.6)] items-center justify-center'
          onClick={() => window.location.href = 'https://podium.page/create-account'}
        >
          {t('Try it for free →')}
        </button>
      </div>
      <div className='my-4 flex flex-col items-center justify-center px-8'>
        <p className='text-2xl text-center text-regular md:font-semibold text-black'>{t('Used by over 20,000 creators and brands')}</p>
        <div className='flex flex-wrap w-full px-4 items-center justify-center mt-8 pb-8 gap-8 lg:gap-12'>
            <img 
                src="https://framerusercontent.com/images/XgvgnSlwj9M6jJrGkeHYMIAY.svg" 
                alt="Twit logo SVG" 
                className="h-10"
            />
            <img 
                src="https://framerusercontent.com/images/WA70wRobpWFa7C46F2cEvBJRE.svg" 
                alt="Nerdwallet logo SVG" 
                className="h-6"
            />
            <img 
                src="https://framerusercontent.com/images/TxxBW9FVSveHHhNzoWs1j6zSBg.svg?scale-down-to=512" 
                alt="Buzzsprout logo SVG" 
                className="h-6"
            />
            <img 
                src="https://framerusercontent.com/images/3a2AlDHrmc0wdCC3CdrvqiyxlHU.svg" 
                alt="mediaworks logo SVG" 
                className="h-6"
            />
            <img 
                src="https://framerusercontent.com/images/6fjbNSr8YH9KsQTYUVMggJ0KEHc.svg" 
                alt="Vast logo SVG" 
                className="h-6"
            />
            <img 
                src="https://framerusercontent.com/images/hBERXmSvjr2ZJYOD3DffA9tDps.svg" 
                alt="Torch logo SVG" 
                className="h-6"
            />
        </div>
        <div className='mt-8 mx-auto px-4 hidden md:flex max-w-5xl'>
            <img
                src="https://framerusercontent.com/images/BJ0bLozu94JBYTZN7vC72Abzg0.svg"
                alt="Podium dashboard interface"
            />
        </div>
      </div>
    </section>
  );
};

export default Intro;
