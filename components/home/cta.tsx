import { FaDiscord } from 'react-icons/fa6'

import { links } from '@/config/links'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { Blur2 } from '@/components/blur'
import { LinkWrapper } from '@/components/link-wrapper'

export function CTA() {
  return (
    <div className="relative pb-16">
      <Blur2 />
      <div className="relative">
        <div className="mt-6 space-y-8 text-center">
          <h2 className="font-heading text-4xl font-extrabold text-mewwme md:text-4xl">
            What are you waiting for?
          </h2>
          <LinkWrapper
            href={links.botInvite}
            external
            className={cn(
              buttonVariants({
                size: 'lg',
              }),
              'w-full rounded-full bg-gradient-to-r from-[#5d83ec] to-[#5d83ec] px-4 py-2 text-black transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-gradient-to-r hover:from-[#5d83ec] hover:to-[#5d83ec] hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#5d83ec] sm:w-max',
            )}
          >
            <FaDiscord className="mr-2 h-5 w-5" />
            Add to your Discord
          </LinkWrapper>
        </div>
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
