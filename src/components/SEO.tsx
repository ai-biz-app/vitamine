import Head from 'next/head'
import { useRouter } from 'next/router'

interface SEOProps {
  title: string
  description: string
  image?: string
  type?: string
  lang?: string
  schema?: Record<string, unknown>
}

const SITE_URL = 'https://vitamin.ai-biz.app'
const DEFAULT_IMAGE = `${SITE_URL}/brand-logo.png`

export default function SEO({
  title,
  description,
  image = DEFAULT_IMAGE,
  type = 'website',
  lang = 'en',
  schema,
}: SEOProps) {
  const router = useRouter()
  const asPath = router.asPath.split('?')[0]
  const url = `${SITE_URL}${asPath === '/' ? '' : asPath}`
  const fullTitle = title.includes('ClearlyVitamins')
    ? title
    : `${title} | ClearlyVitamins`

  return (
    <Head>
      <html lang={lang} />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="ClearlyVitamins" />
      <meta property="og:locale" content={lang === 'ko' ? 'ko_KR' : 'en_US'} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}
    </Head>
  )
}
