import i18nextConfig from '../next-i18next.config'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export const getStaticProps = () => {
  const { locales } = i18nextConfig.i18n
  return {
    props: {
      locales,
    },
  }
}

const Index = ({ locales }) => {
  const router = useRouter()

  // language detection
  // not recommended for production, use server redirection instead of this
  useEffect(() => {
    for (const locale of locales) {
      // eslint-disable-next-line no-undef
      for (const lang of navigator.languages) {
        if (lang.startsWith(locale)) {
          router.replace('/' + locale)
          return
        }
      }
    }
  }, [])

  return <></>
}

export default Index
