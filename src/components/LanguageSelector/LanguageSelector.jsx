import { LanguageContext } from "../../context/LanguageContext";
import { useContext } from "react";

export default function LanguageSelector() {
  const { language, changeLanguage, availableLanguages } = useContext(LanguageContext);
  console.log('language ', language)
  const sortedLanguages = [
    ...availableLanguages.filter((lang) => lang.code === language),
    ...availableLanguages.filter((lang) => lang.code !== language),
  ];

  const handleSelectChange = (e)=>{
    // changeLanguage(e.code);
    console.log('e.target.vavlue', e.target.value)
    changeLanguage(e.target.value)
  };

  return (
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
  );
}
