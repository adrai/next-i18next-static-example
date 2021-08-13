import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import i18nextConfig from '../../next-i18next.config'
import { getI18nPaths } from '../../getI18nPaths'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { StaticI18nLink } from '../../components/StaticI18nLink'

const Homepage = () => {
  const { t, i18n } = useTranslation('common')

  return (
    <>
      <main>
        <Header heading={t('h1')} title={t('title')} />
        <div>
          <StaticI18nLink
            href='/'
            locale={i18n.language === 'en' ? 'de' : 'en'}
          >
            <button>
              {t('change-locale')}
            </button>
          </StaticI18nLink>
          <StaticI18nLink href='/second-page'>
            <button
              type='button'
            >
              {t('to-second-page')}
            </button>
          </StaticI18nLink>
        </div>
      </main>
      <Footer />
    </>
  )
}

export const getStaticPaths = () => ({
  fallback: false,
  paths: getI18nPaths(),
})

export const getStaticProps = async (ctx) => ({
  props: {
    ...await serverSideTranslations(ctx?.params?.locale, ['common', 'footer'], i18nextConfig),
  },
})

export default Homepage
