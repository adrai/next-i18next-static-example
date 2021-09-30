import { appWithTranslation } from 'next-i18next'

const MyApp = ({ Component, pageProps }) => <Component {...pageProps} />

const WrappedApp = appWithTranslation(MyApp)

// because we do not use the i18n feature of next.js
export default function RouterEmulatedApp ({ ...props }) {
  props.router.locale = props.router.query.locale
  return <WrappedApp {...props} />
}