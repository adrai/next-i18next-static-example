import { appWithTranslation } from 'next-i18next'
import { useRouter } from 'next/router'

const MyApp = ({ Component, pageProps }) => <Component {...pageProps} />

const WrappedApp = appWithTranslation(MyApp)
// because we do not use the i18n feature of next.js
export default function RouterEmulatedApp ({ ...props }) {
  const router = useRouter();
  router.locale = props.router.query.locale
  
  props.router = router
  return <WrappedApp {...props} />
}