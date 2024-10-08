import React from "react";
import { useTranslation } from "react-i18next";


const Testimonials2 = () => {
    const { t } = useTranslation();
  
    return (
        <section className="Testimonials">
            <div className="flex flex-col items-center justify-center text-center my-8 p-8">
                <p className='mt-8 text-sm md:text-base font-medium text-gray-400'>{t('CUSTOMER TESTIMONIALS')}</p>
                <h2 className='mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-black'>{t('More praise from our fans')}</h2>
                <p className='mt-4 text-xl font-light text-gray-600'>{t('Creators and agencies love Podium—you will too.')}</p>
            </div>
            <div className="flex w-full items-center justify-center px-16 pb-16 max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-gray-50 h-fit rounded-lg p-6 flex flex-col w-full max-w-sm">
                    <p className="mt-2 text-lg text-gray-600 font-light">{t('Its amazing. Congratulations on a stellar product! 👏')}</p>
                    <h3 className="mt-4 text-lg font-medium text-black">Drew Joseph</h3>
                    <p className="text-gray-400 text-lg font-medium">
                      ESL Communication Coach
                    </p>
                    <img 
                        src="https://framerusercontent.com/images/aNe6Ytsi1jCQtkFuOMvpepYi5aY.jpeg?scale-down-to=512" 
                        alt="Briar Harvey Portrait" 
                        className="mt-4 w-12 h-12 rounded-full" 
                    />
                </div>
                <div className="bg-gray-50 h-fit rounded-lg p-6 flex flex-col w-full max-w-sm">
                    <p className="mt-2 text-lg text-gray-600 font-light">{t('I am a huge fan of Podium and tell everyone about it!')}</p>
                    <h3 className="mt-4 text-lg font-medium text-black">Jesse Ulrich</h3>
                    <p className="text-gray-400 text-lg font-medium">
                      Rant9 Productions
                    </p>
                    <img 
                        src="https://framerusercontent.com/images/9U1x7vCDRPkcLbkpgH4lvySNo.jpeg" 
                        alt="Briar Harvey Portrait" 
                        className="mt-4 w-12 h-12 rounded-full" 
                    />
                </div>
                <div className="bg-gray-50 h-fit rounded-lg p-6 flex flex-col w-full max-w-sm">
                    <p className="mt-2 text-lg text-gray-600 font-light">{t('If anybody asks me about transcribing audio, I know where to send them. :)')}</p>
                    <h3 className="mt-4 text-lg font-medium text-black">Knox Bronson</h3>
                    <p className="text-gray-400 text-lg font-medium">
                      Riding the Wild Bubble
                    </p>
                    <img 
                        src="https://framerusercontent.com/images/BlnFmDZuSoMPXmLn5QU7e8hec.jpeg" 
                        alt="Briar Harvey Portrait" 
                        className="mt-4 w-12 h-12 rounded-full" 
                    />
                </div>
                <div className="bg-gray-50 h-fit rounded-lg p-6 flex flex-col w-full max-w-sm">
                    <p className="mt-2 text-lg text-gray-600 font-light">{t('PodiumGPT is extremely helpful and I have found it to be very valuable in my work.')}</p>
                    <h3 className="mt-4 text-lg font-medium text-black">Cody Gough</h3>
                    <p className="text-gray-400 text-lg font-medium">
                      NerdWallet
                    </p>
                    <img 
                        src="https://framerusercontent.com/images/94vqqmNldXbcNgGXA4qp13ax8es.jpeg?scale-down-to=512" 
                        alt="Briar Harvey Portrait" 
                        className="mt-4 w-12 h-12 rounded-full" 
                    />
                </div>
                <div className="bg-gray-50 h-fit rounded-lg p-6 flex flex-col w-full max-w-sm">
                    <p className="mt-2 text-lg text-gray-600 font-light">{t("I love PodiumGPT, and it's really gotten me over the postproduction inertia that pretty much stalled season one of my show.")}</p>
                    <h3 className="mt-4 text-lg font-medium text-black">Dr. Lisa Richardson</h3>
                    <p className="text-gray-400 text-lg font-medium">
                      Biz Over Tea
                    </p>
                    <img 
                        src="https://framerusercontent.com/images/IgH5w1WeklxVEg4Yi2DO5Ttb4IQ.png" 
                        alt="Briar Harvey Portrait" 
                        className="mt-4 w-12 h-12 rounded-full" 
                    />
                </div>
                <div className="bg-gray-50 h-fit rounded-lg p-6 flex flex-col w-full max-w-sm">
                    <p className="mt-2 text-lg text-gray-600 font-light">{t('Wow, I am impressed! These are great notes and title ideas etc! What a timesaver!')}</p>
                    <h3 className="mt-4 text-lg font-medium text-black">Kylie Patchett</h3>
                    <p className="text-gray-400 text-lg font-medium">
                      The Radiance Revolution
                    </p>
                    <img 
                        src="https://framerusercontent.com/images/J4FYLAGrqRaTqVbaQvJelnzSU.jpeg" 
                        alt="Briar Harvey Portrait" 
                        className="mt-4 w-12 h-12 rounded-full" 
                    />
                </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials2;