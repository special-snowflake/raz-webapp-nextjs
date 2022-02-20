import 'src/common/styles/globals.css';
import 'src/common/styles/OverRideBootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'react-toastify/dist/ReactToastify.css';
import {Provider} from 'react-redux';
import {store} from 'src/store';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor} from 'src/store';
import Script from 'next/script';
import {ToastContainer} from 'react-toastify';

function MyApp({Component, pageProps}) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Component {...pageProps} />
        <ToastContainer
          position='top-right'
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Script
          src='https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js'
          integrity='sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p'
          crossOrigin='anonymous'></Script>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
