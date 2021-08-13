import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import i18nextConfig from '../../next-i18next.config'
import { getI18nPaths } from '../../getI18nPaths'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { StaticI18nLink } from '../../components/StaticI18nLink'

const SecondPage = () => {

  const { t } = useTranslation('second-page')

  return (
    <>
      <main>
        <Header heading={t('h1')} title={t('title')} />
        <StaticI18nLink href='/'>
          <button
            type='button'
          >
            {t('back-to-home')}
          </button>
        </StaticI18nLink>
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
    ...await serverSideTranslations(ctx?.params?.locale, ['second-page', 'footer'], i18nextConfig),
  },
})

export default SecondPage
