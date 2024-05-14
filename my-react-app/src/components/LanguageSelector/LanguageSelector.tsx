import { useState, useEffect, useRef } from "react";
import i18n from "../../i18n";
import { useTranslation } from "react-i18next";

const LanguageSelector = () => {
  const bodyDirection = useRef(document.body.style.direction);
  const { t } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  useEffect(() => {
    bodyDirection.current = selectedLanguage === "ar" ? "rtl" : "ltr";
    document.body.style.direction = bodyDirection.current;
  }, [selectedLanguage]);

  //bodyDirection.current = selectedLanguage === "ar" ? "rtl" : "ltr";
  const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newLanguage = event.target.value;
    i18n.changeLanguage(newLanguage);
    setSelectedLanguage(newLanguage);
  };
  return (
    <div className="absolute -top-6 left-0">
      <label className="mr-2 text-xl font-bold"> {t("selectLanguage")}</label>
      <select
        className=" border-2 p-1 my-2 rounded-xl hover:bg-violet-100"
        value={selectedLanguage}
        onChange={changeLanguage}
      >
        <option value="en">English</option>
        <option value="de">German</option>
        <option value="ar">Arabic</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
