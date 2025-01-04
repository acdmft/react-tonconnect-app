import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { LanguageContext } from "../context/LanguageContext";

const Home = () => {
  const oneJettonPrice = import.meta.env.VITE_JETTON_PRICE;
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate("/sale");
  };
  const { t } = useTranslation();
 const { language } = useContext(LanguageContext);
 
  return (
    <div className="container mx-auto p-4 lg:w-1/2 md:w-2/3 sm:w-full">
      <div className="my-6">
        <h1 className={`flex ${language === 'en' ? 'jolly-lodger-regular': 'neucha-regular'} items-center justify-center h-64 text-6xl leading-normal sm:text-5xl md:text-9xl font-bold mb-8 text-center`}>
          <span>FLYING FOXES CRYPTO</span>
        </h1>
        <h2 className={`${language === 'en' ? 'jolly-lodger-regular': 'neucha-regular'} uppercase text-4xl md:text-7xl font-semibold text-center mt-24 mb-8`}>
          {t('home.heading1')}
        </h2>
        {/* <p className="text-lg text-rose-500">{t('welcome')}</p> */}
        <p className={`${language === 'en' ? 'fredoka-regular' : 'balsamiq-sans-regular '} tracking-wide sm:text-lg md:text-2xl text-gray-600 text-justify`}>
          {t('home.paragraph1')}
        </p>
      </div>
      <div className="mb-8">
        <h3 className={`${language === 'en' ? 'jolly-lodger-regular': 'neucha-regular'} uppercase text-4xl md:text-7xl font-semibold text-center mt-24 mb-8`}>
        {t('home.heading2')}
        </h3>
        <p className={`${language === 'en' ? 'fredoka-regular' : 'balsamiq-sans-regular '} tracking-wide sm:text-lg md:text-2xl text-gray-600 text-justify`}>
        {t('home.paragraph2')}
        </p>
        <h3 className={`${language === 'en' ? 'jolly-lodger-regular': 'neucha-regular'} uppercase text-4xl md:text-7xl font-semibold text-center mt-24 mb-8`}>
        {t('home.heading3')}
        </h3>
        <p className={`${language === 'en' ? 'fredoka-regular' : 'balsamiq-sans-regular '} tracking-wide sm:text-lg md:text-2xl text-gray-600 text-justify`}>
        {t('home.paragraph3')}
        </p>
        <h3 className={`${language === 'en' ? 'jolly-lodger-regular': 'neucha-regular'} uppercase text-4xl md:text-7xl font-semibold text-center mt-24 mb-8`}>
        {t('home.heading4')}
        </h3>
        <p className={`${language === 'en' ? 'fredoka-regular' : 'balsamiq-sans-regular '} tracking-wide sm:text-lg md:text-2xl text-gray-600 text-justify`}>
        {t('home.paragraph4')}
        </p>
        <p className={`${language === 'en' ? 'fredoka-regular' : 'balsamiq-sans-regular '} tracking-wide sm:text-lg md:text-2xl text-gray-600 text-justify`}>
          Believe in Flying Fox Crypto. Believe in you.
        </p>
      </div>
      <div className="mb-8">
        <h2 className={`${language === 'en' ? 'jolly-lodger-regular': 'neucha-regular'} uppercase text-4xl md:text-7xl font-semibold text-center mt-24 mb-8`}>
        {t('home.heading5')}
        </h2>
        <p className={`${language === 'en' ? 'fredoka-regular' : 'balsamiq-sans-regular '} tracking-wide sm:text-lg md:text-2xl text-gray-600 text-justify`}>{t('home.paragraph5.part1')}
         <a href="https://www.pudgypenguins.com/pengu"  target="_blank" rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-500"> Pengu. </a>{t('home.paragraph5.part2')}
        </p>
        <p className={`${language === 'en' ? 'fredoka-regular' : 'balsamiq-sans-regular '} tracking-wide sm:text-lg md:text-2xl text-gray-600 text-justify`}>
          <b>{t('home.paragraph5.bold1')}</b> {t('home.paragraph5.feature1')}
        </p>
        <p className={`${language === 'en' ? 'fredoka-regular' : 'balsamiq-sans-regular '} tracking-wide sm:text-lg md:text-2xl text-gray-600 text-justify`}>
          <b>{t('home.paragraph5.bold2')}</b> {t('home.paragraph5.feature2')}
        </p>
        <p className={`${language === 'en' ? 'fredoka-regular' : 'balsamiq-sans-regular '} tracking-wide sm:text-lg md:text-2xl text-gray-600 text-justify`}>
          <b>{t('home.paragraph5.bold3')}</b> {t('home.paragraph5.feature3')}
        </p>
        <p className={`${language === 'en' ? 'fredoka-regular' : 'balsamiq-sans-regular '} tracking-wide sm:text-lg md:text-2xl text-gray-600 text-justify`}>
        {t('home.paragraph6.part1')}<b> {t('home.paragraph6.bold1')}</b> for only <b>{oneJettonPrice}  {t('home.paragraph6.bold2')}</b>
        </p>
      </div>
      <div className="flex justify-center">
        <button
          onClick={handleRedirect}
          className="w-content bg-blue-500 hover:bg-blue-700 text-xl sm:text-2xl text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          {t('elements.buy_btn')}
        </button>
      </div>
      <div className="h-24"></div>
    </div>
  );
};

export default Home;
