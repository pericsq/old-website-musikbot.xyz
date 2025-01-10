import { MdDiamond } from 'react-icons/md'
import { RiSlashCommands2 } from 'react-icons/ri'
import Balancer from 'react-wrap-balancer'

import { links } from '@/config/links'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { LinkWrapper } from '@/components/link-wrapper'

export function Hero() {
  return (
    <div className="relative mx-12 mt-1 flex flex-col items-center justify-between lg:w-full lg:flex-row">
      <div className="relative z-10 flex-1 pt-8 lg:text-left">
        <h1 className="bg-gradient-to-br from-primary to-primary/80 bg-clip-text py-2 font-heading text-5xl font-black tracking-tighter text-mewwme md:text-5xl md:leading-[3.5rem]">
          <Balancer>Those who wish to sing, always find a song ♪</Balancer>
        </h1>
        <p
          className="mt-2 text-xl text-muted-foreground"
          style={{
            textShadow: '1px 1px 2px #000, 0 0 1px #5d83ec, 0 0 1px #5d83ec',
          }}
        >
          <Balancer>
          Musik&apos;s is a Discord bot that revolutionizes the way you
            experience music on Discord, offering the cleanest user interface,
            high-quality audio, and a wide range of music-related features.
          </Balancer>
        </p>

        <div className="mt-16 flex flex-wrap justify-start gap-x-6 gap-y-4">
          <LinkWrapper
            href="/commands"
            className={cn(
              buttonVariants({
                size: 'lg',
                variant: 'outline',
              }),
              'rounded-full',
              'transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-transparent focus:outline-none sm:w-max',
            )}
          >
            <RiSlashCommands2 className="mr-2 h-4 w-4" />
            Commands
          </LinkWrapper>
          <LinkWrapper
            href="/premium"
            className={cn(
              buttonVariants({
                size: 'lg',
                variant: 'outline',
              }),
              'rounded-full',
              'transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-transparent focus:outline-none sm:w-max',
            )}
          >
            <MdDiamond className="mr-2 h-4 w-4" />
            Premium
          </LinkWrapper>
        </div>
      </div>
      <div
        className="relative hidden lg:block lg:flex-1"
        style={{
          backgroundImage: "url('/assets/logo.png')",
          backgroundPosition: 'center center', // Ganti 'left center' dengan 'right center'
          backgroundRepeat: 'no-repeat',
          height: '42vh', // Adjust height to ensure visibility
          width: '100%', // Ensure full width
          opacity: 100, // Adjust the opacity as needed
        }}
      ></div>
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
