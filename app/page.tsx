import { Blur2 } from '@/components/blur'
import { BotList } from '@/components/home/botlist'
import { CTA } from '@/components/home/cta'
import { FAQ } from '@/components/home/faq'
import { Features } from '@/components/home/features'
import { Hero } from '@/components/home/hero'
import { Highlights } from '@/components/home/highlights'
import { InterfaceUi } from '@/components/home/interface-ui'
import { MusicSource } from '@/components/home/music-source'
import { QuickStart } from '@/components/home/quick-start'

export default function Home() {
  return (
    <div className="relative">
      <Blur2 />
      <div className="relative space-y-40">
        <Hero />
        <MusicSource />
        <QuickStart />

        <div className="hidden md:block">
          <BotList />
        </div>

        <InterfaceUi />

        <Highlights />

        <div className="hidden md:block">
          <Features />
        </div>

        <FAQ />

        <CTA />
      </div>
    </div>
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
