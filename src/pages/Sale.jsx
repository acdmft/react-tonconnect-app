import React, { useContext } from "react";
import JSalesInput from "../components/JSalesInput/JSalesInput";
import { MdWarning } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { LanguageContext } from "../context/LanguageContext";


const Sale = () => {
  const oneJettonPrice = import.meta.env.VITE_JETTON_PRICE;
  const minForwardAmount = import.meta.env.VITE_FORWARD_FEE;
  const { language } = useContext(LanguageContext);
  const { t } = useTranslation();
  return (
    <div className="container mx-auto p-4 lg:w-1/2 md:w-2/3 sm:w-full">
      <h1 className={` ${language === 'en' ? 'jolly-lodger-regular': 'neucha-regular'} text-6xl leading-normal sm:text-5xl md:text-9xl font-bold  mb-8 text-center my-8`}>
       {t('sale.heading')}
      </h1>
      <div className="mb-12 space-y-4">
        <p className={`${language === 'en' ? 'fredoka-regular' : 'balsamiq-sans-regular '} tracking-wide text-base sm:text-lg md:text-xl text-gray-700 text-justify`}>
          {t('sale.item1')}
        </p>
        <p className={`${language === 'en' ? 'fredoka-regular' : 'balsamiq-sans-regular '} tracking-wide text-base sm:text-lg md:text-xl text-gray-700 text-justify`}>
        {t('sale.item2.start')} <br /><em>{t('sale.item2.em')}</em>
        </p>

        <p className={`${language === 'en' ? 'fredoka-regular' : 'balsamiq-sans-regular '} tracking-wide text-base sm:text-lg md:text-xl text-gray-700 text-justify`}>
        {t('sale.item3')}
        </p>
        <p className={`${language === 'en' ? 'fredoka-regular' : 'balsamiq-sans-regular '} tracking-wide text-base sm:text-lg md:text-xl text-gray-700 text-justify`}>
          {t('sale.price_info.1')} <b>1 {t('elements.nanojetton')} = {oneJettonPrice} {t('elements.nanoton')}</b>. {t('sale.price_info.2')} <b>{minForwardAmount} {t('elements.ton')}</b>{t('sale.price_info.3')}
          <a
            href="https://docs.ton.org/v3/documentation/smart-contracts/transaction-fees/fees"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-500 px-2"
          >
            {t('elements.here')}.
          </a>
        </p>
        {/* WARNING */} 
        <div className={`${language === 'en' ? 'fredoka-regular' : 'balsamiq-sans-regular '} tracking-wide  flex flex-col text-base sm:text-lg md:text-xl text-gray-700 text-justify  bg-amber-100 p-8 rounded-lg border-l-orange-300 border-l-4 shadow-md`}>
          <div className="flex">
            <MdWarning
              style={{ marginRight: "8px", height: "2rem", width: "2rem" }}
              size={24}
            />
            <span className="uppercase font-bold">Caution</span>
          </div>
          <p>{t('sale.caution')}</p>
          
        </div>
      </div>
      <div className="my-24">
      <JSalesInput />

      </div>
    </div>
  );
};

export default Sale;
