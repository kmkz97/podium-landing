import React from 'react';
import VideoCarousel from './VideoCarousel';
import { useTranslation } from 'react-i18next';

const VideoTestimonials = () => {
    const { t } = useTranslation();
  
    return (
        <section className='VideoTestimonials'>
            <div className='mt-8 flex flex-col w-full items-center justify-center p-8'>
                <h2 className='text-3xl md:text-4xl lg:text-5xl text-center font-bold text-black'>{t('Love from our creators')}</h2>
                <p className='my-8 text-center text-xl font-light text-gray-600'>{t('Join the thousands saving time and creating more everyday.')}</p>
                <VideoCarousel />
            </div>
        </section>
    )
}

export default VideoTestimonials;