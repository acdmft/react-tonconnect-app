import { LanguageContext } from "../../context/LanguageContext";
import { useContext } from "react";
import WebApp from "@twa-dev/sdk";

export default function LanguageSelector() {
  const { language, changeLanguage, availableLanguages } =
    useContext(LanguageContext);
  console.log("language ", language);
  const sortedLanguages = [
    ...availableLanguages.filter((lang) => lang.code === language),
    ...availableLanguages.filter((lang) => lang.code !== language),
  ];

  const handleSelectChange = (e) => {
    // changeLanguage(e.code);
    console.log("e.target.vavlue", e.target.value);
    changeLanguage(e.target.value);
  };

  const selectLanguage = (lang) => {
    changeLanguage(lang);
  };
  const telegramEnvironment = WebApp.initData.length > 0;
  console.log("telegramEnvironment ", telegramEnvironment);
  return (
    <>
      {/* Select element don't work well in telegram desktop application */}
      {!telegramEnvironment ? (
        <select
          id="language"
          value={language}
          onChange={handleSelectChange}
          className="md:p-2 p-1 border border-gray-300 rounded-md shadow-sm text-xs md:text-regular focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
        dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200 dark:focus:border-indigo-400 dark:focus:ring-indigo-700 dark:focus:ring-opacity-50"
        >
          {sortedLanguages.map(({ code, label }, key) => (
            <option value={code} key={key}>
              {label}
            </option>
          ))}
        </select>
      ) : (
        <ul className="text-xs">
          {sortedLanguages.map((lang) => (
            <li
              key={language.code}
              onClick={() => selectLanguage(lang.code)}
              className={`${
                lang.code === language
                  ? "bg-blue-500 text-white"
                  : "bg-transparent"
              } py-1 px-2 rounded-md w-min`}
            >
              {lang.label}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
