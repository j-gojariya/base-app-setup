import { ConfigProvider } from 'antd';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Spinner from 'components/base/Spinner';
import themeConfig from 'configs/themeConfig';
import { persistor, store } from 'store/store';

import './index.css';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const LazyApp = React.lazy(() => import('./App'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading="loading persistor" persistor={persistor}>
        <React.Suspense fallback={<Spinner />}>
          <ConfigProvider theme={themeConfig}>
            <LazyApp />
          </ConfigProvider>
        </React.Suspense>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
