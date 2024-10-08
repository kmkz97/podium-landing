import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const FAQ = () => {
  const { t } = useTranslation();

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How much does it cost?",
      answer: (
        <>
          {t('Podium has multiple plans to fit your needs and volume. Visit our')}{' '}
          <a
            href="https://hello.podium.page/pricing"
            className="text-black underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('pricing page')}
          </a>{' '}
          {t('to learn more.')}
        </>
      )
    },
    {
      question: "Can I only get a transcript? (or clips? or...)",
      answer: t("Currently, Podium's features do not come 'a la carte'. If you process with us, a podcast, we provide you with all the features available.")
    },
    {
      question: "What languages are supported?",
      answer: t("Podium works with over 90 languages including full support for English, Spanish, Indonesian, German, French, Italian, and Swedish.")
    },
    {
      question: "How does Podium differ from all the other similar tools out there?",
      answer: (
        <>
          {t('Unlike other tools, which strictly utilize publicly available (yet powerful) tools like GPT-3 and ChatGPT, Podium mixes these tools with proprietary AI which has been made for podcasts specifically. (Much of this is also being utilized for the')}{' '}
          <a
            href="https://hello.fathom.fm/"
            className="text-black underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('Fathom podcast player')}
          </a> .)
          <br></br> {t('For example, most other tools cannot find clips or create chapters for your podcast, as these cannot easily be re-created using ChatGPT or GPT-3.')}
        </>
      )
    },
    {
      question: "Does Podium use ChatGPT or GPT-3/GPT-4?",
      answer: t("Podium does utilize GPT-4, but alone, it's not enough to deliver the quality that Podium aspires to. As such, we mix this (amazing) technology with proprietary neural networks which were created with podcasting and other audio content in mind.")
    },
    {
      question: "Who is this for?",
      answer: (
        <>
        {t('Podium has helped solo podcasters on a budget, professional podcasters, producers, production studios, marketing directors, and more.')} <br></br>{t('If at any point you have found yourself assisting in the podcast creation process—Podium can help.')}
        </>
      )
    }
  ];

  return (
    <div className='w-full bg-gray-50'>
    <div className="items-center justify-center max-w-4xl mx-auto py-8">
      {faqs.map((faq, index) => (
        <div key={index} className="border-b border-gray-300">
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full text-left py-4 px-2 focus:outline-none flex justify-between items-center"
          >
            <span className="font-medium mr-2">{t(faq.question)}</span>
            <svg
              className={`w-6 h-6 min-w-6 transform transition-transform duration-400 ${
                activeIndex === index ? "rotate-180" : "rotate-0"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div
            className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
              activeIndex === index ? 'max-h-fit' : 'max-h-0'
            }`}
          >
            <div className="p-2 pb-4 text-left text-gray-600">
              {faq.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default FAQ;
