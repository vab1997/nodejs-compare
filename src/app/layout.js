import './globals.css'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import InfoUpdate from '@/components/InfoUpdate'

const URL_WEB = 'http://localhost:3000'
const title = 'Node.js | compare downloads Nodejs'

export const metadata = {
  title,
  description: 'Compare Nodejs is a website that allows you to show and compare the downloads of Nodejs in different countries and different days or months.',
  twitter: {
    card: 'summary_large_image',
    site: '@victorbejas',
    creator: '@victorbejas',
    title,
    domain: 'http://twitter.com/victorbejas'
  },
  openGraph: {
    title,
    description:
      'Compare Nodejs is a website that allows you to show and compare the downloads of Nodejs in different countries and different days or months.',
    url: `${URL_WEB}`,
    siteName: title,
    images: [
      {
        url: `${URL_WEB}/og.png`,
        width: 1024,
        height: 768
      }
    ]
  }
}

export default function RootLayout ({ children }) {
  return (
    <html
      lang='en'
    >
      <body>
        <Header />
        <InfoUpdate />
        {children}
        <Footer />
      </body>
    </html>
  )
}
