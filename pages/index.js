import Head from 'next/head'
import { Inter } from 'next/font/google'
import MainSection from '@/components/MainSection'
import Step1Function from '@/components/Step1Section'
import Step2Function from '@/components/Step2Section'
import Step3Function from '@/components/Step3Section'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Work Waves</title>
        <meta name="description" content="Get Work Done" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
