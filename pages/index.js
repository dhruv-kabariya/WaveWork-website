import Head from 'next/head'
import { Inter } from 'next/font/google'
import MainSection from '@/components/MainSection'
import Step1Function from '@/components/Step1Section'
import Step2Function from '@/components/Step2Section'
import Step3Function from '@/components/Step3Section'
import Footer from '@/components/Footer'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Get Work Done with WaveWork - Your Trusted Platforms</title>
        <meta name="description" content="Connect with nearby service providers on WaveWork. Compare bids, pick experts, and accomplish tasks efficiently. Your go-to platform for simplified day-to-day services." />
        <meta name="keywords" content="nearby service providers, compare bids, household solutions, daily tasks, WaveWork" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta property="og:title" content="Post, Compare, and Get Work Done with WaveWork" />
        <meta property="og:description" content="Connect with nearby service providers on WaveWork. Compare bids, pick experts, and accomplish tasks efficiently." />
        <meta property="og:image" content="https://wavework.in/logo-icon.png" />
        <meta property="og:url" content="https://wavework.in" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Post, Compare, and Get Work Done with WaveWork" />
        <meta name="twitter:description" content="Connect with nearby service providers on WaveWork. Compare bids, pick experts, and accomplish tasks efficiently." />
        <meta name="twitter:image" content="https://wavework.in/logo-icon.png" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className='d-flex flex-column'>
        <MainSection />
        <Step1Function />
        <Step2Function />
        <Step3Function />
        <Footer />
      </div>
    </>
  )
}
