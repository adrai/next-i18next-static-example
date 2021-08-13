import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'

export const StaticI18nLink = (props) => {
  const { i18n } = useTranslation()
  const router = useRouter()

  const locale = props.locale || i18n.language || ''

  if (!locale) {
    const href = props.href || router.asPath
    return <Link {...props} href={href}></Link>
  } else {
    const href = props.href
      ? `/${locale}${props.href}`
      : router.pathname.replace('[locale]', locale)
    return <Link {...props} href={href} locale={undefined}></Link>
  }
}
