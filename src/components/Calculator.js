import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const plans = ['1-3', '3-10', '10-20', '20-50', '50+'];
const savings = [5, 15, 30, 50, 100]; // Corresponding savings for each plan

const Calculator = () => {
  const { t } = useTranslation();
  const [selectedPlan, setSelectedPlan] = useState(0); // Default to the first plan
  const [animatedValue, setAnimatedValue] = useState(savings[0]); // Counter value

  useEffect(() => {
    // Calculate the difference between current value and target value
    const targetValue = savings[selectedPlan];
    const increment = targetValue > animatedValue ? 1 : -1;

    const interval = setInterval(() => {
      setAnimatedValue((prev) => {
        if (prev === targetValue) {
          clearInterval(interval); // Stop animation once target is reached
          return prev;
        }
        return prev + increment; // Increment/decrement towards the target
      });
    }, 10); // Adjust speed of counter effect here (lower = faster)

    return () => clearInterval(interval); // Cleanup on component unmount or value change
  }, [selectedPlan]);

  return (
    <section className="Calculator bg-gray-200 items-center px-[36px] justify-center rounded-tl-[78px]">
      <div className="flex flex-col w-full items-center text-center p-8 justify-center">
        <p className="mt-8 text-sm md:text-base font-medium text-gray-400">
          {t('CALCULATOR')}
        </p>
        <h2 className="mt-4 text-3xl md:text-5xl lg:text-6xl font-bold text-black">
          {t('Calculate your time savings')}
        </h2>
        <p className="mt-4 text-xl font-light text-gray-600">
          {t('See how much time you can save using Longformer.')}
        </p>
      </div>
      <div className="flex w-full items-center justify-center pb-12">
        <div className="flex flex-col md:flex-row w-full max-w-md md:max-w-5xl md:h-[420px] overflow-hidden rounded-[36px]">
          {/* Left Section */}
          <div className="flex flex-col w-full p-8 gap-12 items-center justify-center bg-white min-h-[280px] rounded-tl-[36px] rounded-tr-[36px] md:rounded-tr-[0px] md:rounded-bl-[36px] border-r-2 md:border-r-0 md:border-b-2 border-l-2 border-t-2 border-gray-300">
            <div className="text-lg md:text-xl lg:text-2xl font-medium text-gray-900 text-center">
              {t('How many hours of content do you create per month?')}
            </div>
            <div className="relative flex flex-row w-full items-center justify-between gap-4">
              {/* Static Bar */}
              <div className="absolute top-2 w-[98%] h-2 bg-gray-300 z-0"></div>

              {/* Selector */}
              {plans.map((plan, index) => (
                <label
                  key={index}
                  className="flex flex-col items-center gap-2 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="plans"
                    value={index}
                    checked={selectedPlan === index}
                    onChange={() => setSelectedPlan(index)}
                    className="hidden"
                  />
                  <div
                    className={`w-6 h-6 items-center z-10 justify-center bg-white rounded-full border-2 ${
                      selectedPlan === index
                        ? 'border-indigo-700'
                        : 'border-gray-300'
                    }`}
                  >
                    <div
                      className={`w-3 h-3 m-1 rounded-full ${
                        selectedPlan === index ? 'bg-indigo-700' : ''
                      }`}
                    ></div>
                  </div>
                  <span
                    className={`text-sm mt-2 ${
                      selectedPlan === index
                        ? 'font-bold text-indigo-600'
                        : 'font-semibold text-gray-700'
                    }`}
                  >
                    {plan}
                  </span>
                </label>
              ))}
            </div>
          </div>
          {/* Right Section */}
          <div className="flex flex-col w-full p-8 gap-8 bg-indigo-700 items-center min-h-[280px] justify-center">
            <div className="flex flex-col items-center justify-center gap-4">
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                {t("Monthly you'll save:")}
              </h3>
              <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                {animatedValue} {t('hours')}
              </span>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <button 
                  className='my-2 flex h-12 w-full sm:w-fit sm:px-8 bg-white text-indigo-600 font-medium text-xl rounded-lg shadow-[0_0_5px_rgba(98,0,128,0.6)] hover:shadow-[0_0_10px_rgba(98,0,128,0.6)] items-center justify-center'
                  onClick={() => window.location.href = 'https://podium.page/create-account'}
                >
                  {t('Try it yourself →')}
                </button>
                <p className='text-base font-regular text-white'>No credit card required.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
