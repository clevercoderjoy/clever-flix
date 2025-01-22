import { useEffect, useRef, useState } from "react";
import { HiMiniChevronDown, HiMiniLanguage } from "react-icons/hi2";

const Header = () => {
  const [showLangOptions, setShowLangOptions] = useState(false);
  const [selectedLang, setSelectedLang] = useState("English");
  const langRef = useRef(null);

  const toggleLanguageOptions = () => {
    setShowLangOptions(!showLangOptions);
  }

  const handleLanguageSelection = (language) => {
    setSelectedLang(language);
    setShowLangOptions(false);
  }

  const handleOutsideClick = (e) => {
    if (langRef.current && !langRef.current.contains(e.target)) {
      setShowLangOptions(false);
    }
  }

  useEffect(() => {
    if (showLangOptions) {
      document.addEventListener("mousedown", handleOutsideClick);
    }
    else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    }
  }, [showLangOptions]);

  return (
    <header className="flex justify-between items-center p-4 bg-black">
      <div className="logo">
        <h1 className="text-[#e50914] font-bold tracking-widest text-2xl">CLEVERFLIX</h1>
      </div>
      <div className="headerBtns flex gap-4 items-center">
        <div className="language text-white" ref={langRef}>
          <div className="langSelect" onClick={toggleLanguageOptions}>
            <div className="flex gap-2 border-[1px] border-white px-2 py-1 rounded cursor-pointer w-[4rem] items-center justify-center">
              <HiMiniLanguage className="text-white" />
              <HiMiniChevronDown className="text-white" />
            </div>
            {
              showLangOptions && (
                <div className={`langOptions font-bold ${showLangOptions ? "block" : "hidden"} absolute flex flex-col gap-2 bg-[black] text-white rounded mt-[0.1rem]`}>
                  <span className={`hover:bg-[#4A90E2] hover:text-white p-2 rounded ${selectedLang === "English" ? "text-[#e50914]" : "text-white"}`} onClick={() => handleLanguageSelection("English")}>English</span>
                  <span className={`hover:bg-[#4A90E2] p-2 rounded ${selectedLang === "Hindi" ? "text-[#e50914] hover:text-white" : "text-white"}`} onClick={() => handleLanguageSelection("Hindi")}>Hindi</span>
                </div>
              )
            }
          </div>
        </div>
        <div className="authBtn">
          <button className="bg-[#e50914] py-1 px-4 font-bold rounded text-sm text-white">Sign In</button>
        </div>
      </div>
    </header>
  )
}

export default Header