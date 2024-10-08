import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
    const { t } = useTranslation();

    return(
        <footer>
            <div className="flex flex-col lg:w-full lg:flex-row gap-16 lg:gap-0 py-8">
                <div className="px-4 sm:px-8">
                  <svg width="112" height="24" viewBox="0 0 112 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M18.9251 8.46393C18.9251 12.6964 15.5862 16.1278 11.468 16.1278V0.800049C15.5874 0.800049 18.9251 4.23151 18.9251 8.46393ZM0 12.5921H10.3216V23.1999H0V12.5921ZM5.1614 11.4152C8.01196 11.4152 10.3228 9.04031 10.3228 6.1107C10.3228 3.1811 8.01196 0.806182 5.1614 0.806182C2.31084 0.806182 0 3.1811 0 6.1107C0 9.04031 2.31084 11.4152 5.1614 11.4152ZM29.9887 14.0437H32.8581V14.0424C37.2788 14.0424 39.0445 11.3211 39.0445 8.64588C39.0445 5.59376 36.9824 3.19584 32.8581 3.19584H26.5518V20.8046H29.9887V14.0437ZM35.5096 8.64712C35.5096 10.2117 34.6491 11.1955 32.7116 11.1955H29.9887V6.0726H32.7116C34.6491 6.0726 35.5096 7.08251 35.5096 8.64712ZM45.7185 20.8031C41.7915 20.8031 38.8217 17.9774 38.8217 13.5882C38.8217 9.19909 41.8883 6.37333 45.8166 6.37333C49.7448 6.37333 52.8138 9.17546 52.8138 13.5882C52.8138 18.001 49.6722 20.8031 45.7197 20.8031H45.7185ZM45.7185 17.7249C47.5362 17.7249 49.2789 16.3642 49.2789 13.5882C49.2789 10.8122 47.5846 9.45157 45.7669 9.45157C43.9493 9.45157 42.307 10.7886 42.307 13.5882C42.307 16.3879 43.8779 17.7249 45.7185 17.7249ZM64.3546 8.54502C63.424 7.23039 61.7031 6.37346 59.912 6.37346C56.4304 6.37346 53.6809 9.17559 53.6809 13.5386C53.6809 17.9016 56.4292 20.8032 59.889 20.8032C62.0238 20.8032 63.5462 19.7958 64.3546 18.5086V20.5769H67.8399V1.91095H64.3546V8.54502ZM57.1891 13.5386C57.1891 10.8907 58.9318 9.47906 60.7725 9.47906C62.6616 9.47906 64.3812 10.9392 64.3812 13.5884C64.3812 16.2375 62.6132 17.7014 60.7725 17.7014C58.9318 17.7014 57.1891 16.1865 57.1891 13.5386ZM69.6317 6.60102H73.0686V20.5768H69.6317V6.60102ZM84.2629 20.5768H87.7228V6.60102H84.2629V14.296C84.2629 16.5397 83.0358 17.7511 81.2181 17.7511C79.4005 17.7511 78.2 16.5409 78.2 14.296V6.60102H74.7631V14.7997C74.7631 18.6354 77.0455 20.7535 80.2125 20.7535C81.9067 20.7535 83.4025 19.996 84.2629 18.812V20.5768ZM108.562 12.8581C108.562 10.6368 107.358 9.47891 105.544 9.47891C103.73 9.47891 102.499 10.6368 102.499 12.8581V20.5767H99.0621V12.8581C99.0621 10.6368 97.8616 9.47891 96.0439 9.47891C94.2262 9.47891 92.9773 10.6368 92.9773 12.8581V20.5767H89.5404V6.60091H92.9773V8.29239C93.8341 7.13199 95.2815 6.40067 96.9757 6.40067C99.0887 6.40067 100.831 7.33472 101.763 9.07221C102.647 7.48396 104.438 6.40067 106.427 6.40067C109.692 6.40067 112 8.51875 112 12.3781V20.5767H108.563V12.8581H108.562ZM73.3856 2.86838C73.3856 4.01068 72.4846 4.9367 71.3731 4.9367C70.2616 4.9367 69.3606 4.01068 69.3606 2.86838C69.3606 1.72607 70.2616 0.800049 71.3731 0.800049C72.4846 0.800049 73.3856 1.72607 73.3856 2.86838Z" fill="black"/>
                  </svg>
                </div>
                <div className="flex flex-col sm:flex-row sm:w-full sm:justify-center sm:mx-auto lg:mx-auto gap-16 px-4 sm:px-8">
                    <nav aria-label="Products" className="flex flex-col justify-left space-y-4">
                        <h4 className="text-lg font-bold text-black">{t('Products')}</h4>
                        <ul className="flex flex-col justify-left text-left gap-4">
                            <a className="text-lg font-regular text-gray-400 hover:text-black" href="https://hello.podium.page/feature/podiumgpt">{t('PodiumGPT')}</a>
                            <a className="text-lg font-regular text-gray-400 hover:text-black" href="https://hello.podium.page/feature/ai-generated-show-notes">{t('Show Notes')}</a>
                            <a className="text-lg font-regular text-gray-400 hover:text-black" href="https://hello.podium.page/feature/ai-generated-chapters">{t('Chapters')}</a>
                            <a className="text-lg font-regular text-gray-400 hover:text-black" href="https://hello.podium.page/feature/ai-generated-clips">{t('Highlight Clips')}</a>
                            <a className="text-lg font-regular text-gray-400 hover:text-black" href="https://hello.podium.page/feature/ai-generated-transcript">{t('Transcripts')}</a>
                            <a className="text-lg font-regular text-gray-400 hover:text-black" href="https://hello.podium.page/podbook">{t('Podbook')}</a>
                        </ul>
                    </nav>
                    <nav aria-label="Comparison with competition" className="flex flex-col justify-left space-y-4">
                        <h4 className="text-lg font-bold text-black">{t('Compare')}</h4>
                        <ul className="flex flex-col justify-left text-left gap-4">
                            <a className="text-lg font-regular text-gray-400 hover:text-black" href="https://hello.podium.page/blog/castmagic-vs-podium-which-one-is-right-for-you-2024">{t('vs Castmagic')}</a>
                            <a className="text-lg font-regular text-gray-400 hover:text-black" href="https://hello.podium.page/blog/podsqueeze-vs-podium-which-is-best-2024">{t('vs Podsqueeze')}</a>
                            <a className="text-lg font-regular text-gray-400 hover:text-black" href="https://hello.podium.page/blog/deciphr-vs-podium-which-should-you-use-2024">{t('vs Deciphr')}</a>
                            <a className="text-lg font-regular text-gray-400 hover:text-black" href="https://hello.podium.page/blog/swell-ai-vs-podium-which-is-best-2024">{t('vs Swell AI')}</a>
                            <a className="text-lg font-regular text-gray-400 hover:text-black" href="https://hello.podium.page/blog/capsho-vs-podium-which-one-is-right-for-you-2024">{t('vs Capsho')}</a>
                            <a className="text-lg font-regular text-gray-400 hover:text-black" href="https://hello.podium.page/blog/listener-fm-vs-podium-which-should-you-use-2024">{t('vs Listener.fm')}</a>
                        </ul>
                    </nav>
                    <nav aria-label="Company" className="flex flex-col justify-left space-y-4">
                        <h4 className="text-lg font-bold text-black">{t('Company')}</h4>
                        <ul className="flex flex-col justify-left text-left gap-4">
                            <a className="text-lg font-regular text-gray-400 hover:text-black" href="https://hello.podium.page/pricing">{t('Pricing')}</a>
                            <a className="text-lg font-regular text-gray-400 hover:text-black" href="https://hello.podium.page/affiliates">{t('Affiliates')}</a>
                            <a className="text-lg font-regular text-gray-400 hover:text-black" href="https://hello.podium.page/api">{('API')}</a>
                        </ul>
                    </nav>
                    <nav aria-label="Support Refs" className="flex flex-col justify-left space-y-4">
                        <h4 className="text-lg font-bold text-black">Support</h4>
                        <ul className="flex flex-col justify-left text-left gap-4">
                            <a className="text-lg font-regular text-gray-400 hover:text-black" href="https://hello.podium.page/blog">{t('Resources')}</a>
                            <a className="text-lg font-regular text-gray-400 hover:text-black" href="https://status.podium.page/">{t('API Status')}</a>
                            <a className="text-lg font-regular text-gray-400 hover:text-black" href="https://intercom.help/podium-page/en">{t('Customer Support')}</a>
                            <a className="text-lg font-regular text-gray-400 hover:text-black" href="https://hello.podium.page/" >{t('Contact Support')}</a>
                        </ul>
                    </nav>
                </div>
                <div className="w-2 lg:w-48"></div>
            </div>
            <div className="flex flex-col gap-4 p-4 sm:p-8">
                <div className="flex flex-row space-x-4">
                    <a href="https://hello.podium.page/tos" className="text-base font-regular text-gray-400 hover:text-black">{t('Terms of Service')}</a>
                    <a href="https://hello.podium.page/privacy-policy" className="text-base font-regular text-gray-400 hover:text-black">{t('Privacy Policy')}</a>
                </div>
                <p className="text-sm font-regular text-gray-400">Podium © 2024</p>
            </div>
        </footer>
    );
};

export default Footer;