import { ReactNode } from 'react'
import { Caveat, Familjen_Grotesk } from 'next/font/google'
import localFont from 'next/font/local'
import Head from 'next/head'

import { SpeedInsights } from '@vercel/speed-insights/next'

import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import Alert from '@/components/alert'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { Providers } from '@/components/providers'

import '@/styles/globals.css'

const grotesk = Familjen_Grotesk({
  subsets: ['latin'],
  variable: '--font-sans',
})

const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-caveat',
})

const satoshi = localFont({
  src: '../assests/fonts/Satoshi-Variable.woff2',
  variable: '--font-satoshi',
})

export const metadata = {
  metadataBase: 'https://meww.me/',
  title: {
    default: 'Listen to your favorite music on discord with your friends!',
    template: '%s | Musik',
  },
  description:
    "Musik is a Discord bot that revolutionizes the way you experience music on Discord, offering the cleanest user interface, high-quality audio, and a wide range of music-related features.",
  keywords: [
    'discord bot',
    'music',
    'free',
    'radio',
    'lofi',
    'radio indonesia',
    'prambors radio',
    'discord bot',
    'Musik',
    'discord music 24/7',
    'Indonesia No.1 Hit Music Station',
  ],
  openGraph: {
    images: ['/assets/opengraph-mews.png'],
    type: 'website',
    locale: 'en_US',
    site_name: `Musik`,
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Head>
        {/* Set metadata */}
        <title>{metadata.title.default}</title>
        <meta name="description" content={metadata.description} />
        {/* Favicon */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link rel="icon" href="https://media.discordapp.net/attachments/1282666876085735477/1327202084554014730/Picsart_25-01-10_11-07-01-160.jpg?ex=678234c3&is=6780e343&hm=2d08a647dfb10e7bd1d74daf56381f1c837650f93eb4541f4b91b7a73268c9fa&=" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <link rel="shortcut icon" href="https://media.discordapp.net/attachments/1282666876085735477/1327202084554014730/Picsart_25-01-10_11-07-01-160.jpg?ex=678234c3&is=6780e343&hm=2d08a647dfb10e7bd1d74daf56381f1c837650f93eb4541f4b91b7a73268c9fa&=" />
        <meta name="msapplication-TileColor" content="#2b5797" />
        <meta
          name="msapplication-config"
          content="/favicon/browserconfig.xml"
        />
        <meta name="theme-color" content="#ffffff" />
        {/* Other necessary metadata */}
        <meta property="og:url" content={metadata.metadataBase} />
        <meta
          property="og:image"
          content={`${metadata.metadataBase}${metadata.openGraph.images[0]}`}
        />{' '}
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:locale" content={metadata.openGraph.locale} />
        <meta property="og:site_name" content={metadata.openGraph.site_name} />
        {/* Twitter metadata */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title.default} />
        <meta name="twitter:description" content={metadata.description} />
        <meta
          name="twitter:image"
          content={`${metadata.metadataBase}${metadata.openGraph.images[0]}`}
        />{' '}
      </Head>
      <html lang="en" suppressHydrationWarning>
        <body
          className={cn(
            grotesk.variable,
            satoshi.variable,
            caveat.variable,
            'flex min-h-screen flex-col font-sans antialiased',
          )}
        >
          <Alert
            href="/premium"
            className={cn(
              buttonVariants({
                size: 'sm',
                variant: 'alert',
              }),
              'hidden md:block',
            )}
            active
          >
            <b>♪ Those who wish to sing always find a song </b> • Upgrade your
            server with Premium
          </Alert>

          <div className="relative w-full">
            <Providers>
              <Navbar />
              <main className="container flex-1 py-32">{children}</main>
              <Footer />
            </Providers>
            <SpeedInsights />
          </div>
        </body>
      </html>
    </>
  )
}

/**
 *  __  __            Made by Tragic              _
 * |  \/  |   L RMN - https://hi-lrmn.is-a.dev   ( )
 * | \  / | _____      ____      ___ __ ___   ___|/ ___
 * | |\/| |/ _ \ \ /\ / /\ \ /\ / / '_ ` _ \ / _ \ / __|
 * | |  | |  __/\ V  V /  \ V  V /| | | | | |  __/ \__ \
 * |_|  |_|\___| \_/\_/    \_/\_/ |_| |_| |_|\___| |___/
 *
 *     Discord Support: https://meww.me/support
 *     Community Resources: https://meww.me/premium
 */
