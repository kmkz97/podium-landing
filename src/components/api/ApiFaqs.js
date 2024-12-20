import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const APIFAQ = () => {
  const { t } = useTranslation();

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Who is API access for?",
      answer: t("API access is for you if you're building an app that requires Longformer features, or have some other reason for using Longformer in a programmatic way.")
    },
    {
      question: "Are there any other languages available other than English?",
      answer: t("Longformer can process and generate content in over 90 languages.")
    },
    {
      question: "How much does it cost?",
      answer: (
        <>
          <a
            href="https://form.typeform.com/to/kmqGwyGd"
            className="text-black underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('Click here')}
          </a> {t('to talk to us about API pricing.')}
        </>
      )
    },
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

export default APIFAQ;
