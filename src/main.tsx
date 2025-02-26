import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
//import { IntlProvider } from 'react-intl';
import {LanguageContext, LanguageProvider } from './components/LanguageProvider.tsx';
import { IntlProvider } from 'react-intl';
//import React from 'react';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider>
      <LanguageContext.Consumer>
        {({ locale, messages }) => (
          <IntlProvider locale={locale} messages={messages}>
            <App />
          </IntlProvider>
        )}
      </LanguageContext.Consumer>
    </LanguageProvider>
  </StrictMode>
);
