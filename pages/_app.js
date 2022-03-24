import './style.css';
import './animate.min.css';
import './gallery.css';
import './cursor.css';
import TagManager from 'react-gtm-module';
import { useEffect } from 'react';
// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  useEffect(async () => {
    /* FB Pixel Start */
    const { default: ReactPixel } = await import('react-facebook-pixel');
    ReactPixel.init('433124015262470', null, {
      autoConfig: true,
      debug: true
    });
    ReactPixel.pageView();
    ReactPixel.track('ViewContent');

    /* FB Pixel End */

    /* GTM Pixel Start */
    TagManager.initialize({ gtmId: 'G-344TBBFY65' });
    /* GTM Pixel Start */
  });
  return <Component {...pageProps} />;
}
