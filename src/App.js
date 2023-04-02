import React, {useEffect} from 'react';
//import logo from './logo.svg';
//import './App.css';
import Home from './pages/Home/Home';
import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();
  useEffect(() => { 
    document.title = t('appTitle'); 
    
  }, []);
  //document.documentElement.lang = i18n.language;
  return (
    <div className="App">
     <Home />
    </div>
  );
}

export default App;