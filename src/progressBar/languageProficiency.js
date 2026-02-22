import React, {useEffect, useState} from 'react';
import '../App.css'
import './progressBar.css'
import {ProgressBar} from "./progressBar";

const LanguageProfiency = () => {
  const languages = [
    { id: 1, name: 'Portuguese', proficiency: 100, level: 'C2', description: 'Native/Fluent' },
    { id: 2, name: 'English', proficiency: 100, level: 'C2', description: 'Native/Fluent' },
    { id: 3, name: 'French', proficiency: 20, level: 'A2', description: 'Elementary' },
  ];

  return (
    <div className="languages-list">
      {languages.map((language) => (
        <LanguageBar key={language.id} language={language} />
      ))}
    </div>
  );
};


const LanguageBar = ({ language }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setWidth(language.proficiency);
    }, 100);

    return () => clearTimeout(timer);
  }, [language.proficiency]);

  return (
    <div className="language-item">
      <div className="language-header">
        <span className="contentSubTitle textPrimary">{language.name}</span>
        <span className="contentText textPrimary">
          {language.level} • {language.description}
        </span>
      </div>

      <ProgressBar width={width} />
    </div>
  );
};

export default LanguageProfiency;