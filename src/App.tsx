import React, { useState } from 'react';
import LanguageContext from './context/LanguageContext'
import './App.css';
import UserCreate from './component/UserCreate';

function App() {
  const [language, setlanguage] = useState<string>('english')
  const onLanguageChange = (language: string):void => {
    setlanguage(language)
    
  }

  return (
    <div className="ui container">

      Select a Language:
      <i className='flag us' onClick={() => onLanguageChange('english')}></i>
      <i className='flag np' onClick={() => onLanguageChange('nepali')}></i>

      <LanguageContext.Provider value={language}>
        <UserCreate lan={language} />
      </LanguageContext.Provider>
    </div>
  );
}

export default App;
