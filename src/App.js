import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';

// eslint-disable-next-line no-unused-vars
import { AppStyle, LandingPage } from './helper/directoryHelper';

function App() {

  return (
    <React.StrictMode>
      <BrowserRouter>
        <LandingPage />
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
