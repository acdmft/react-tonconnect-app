import React, {useContext} from "react";
import { FaDiscord, FaTelegram, FaGithub } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { LanguageContext } from "../context/LanguageContext";

const Contact = () => {
  const { language } = useContext(LanguageContext);
  const { t } = useTranslation();
  return (
    <div>
      <div className="container mx-auto p-4 lg:w-1/2 md:w-2/3 sm:w-full">
        <h1 className={` ${language === 'en' ? 'jolly-lodger-regular': 'neucha-regular'} text-6xl leading-normal sm:text-5xl md:text-9xl font-bold  mb-8 text-center my-8`}>
          {t('contact.heading')}
        </h1>
        <p className={`${language === 'en' ? 'fredoka-regular' : 'balsamiq-sans-regular '} tracking-wide text-base sm:text-lg md:text-xl text-gray-700 text-justify`}> 
          {t('contact.message')}{" "}
          <b>{t('sale.sent_msg_hash')}, {t('sale.sent_msg_hash')}</b> {t('contact.message_end')}.
        </p>
      </div>
      <div className="flex  justify-center flex-col items-start w-1/2 md:w-full mx-auto md:flex-row ">
      <div className="text-2xl mx-2">
          <a
            href="https://discord.gg/7XxuvKrs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-500 flex"
          >
            <FaDiscord size={33} /><b className="pb-2 px-2">Discord</b>
          </a>
        </div>
        <div className="text-2xl mx-2">
          <a
            href="https://t.me/ffx_on_ton"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-500 flex"
          >
            <FaTelegram size={32} /><b className="pb-2 px-2">Telegram</b>
          </a>
        </div>
        <div className="text-2xl mx-2">
          <a
            href="https://github.com/acdmft/react-tonconnect-app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-500 flex"
          >
            <FaGithub size={32} /><b className="pb-2 px-2">Github</b>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
