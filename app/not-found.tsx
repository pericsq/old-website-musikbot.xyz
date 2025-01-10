import { NextPage } from 'next'
import Image from 'next/image'

import { RiHomeFill } from 'react-icons/ri'

import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { LinkWrapper } from '@/components/link-wrapper'

const NotFound: NextPage = () => {
  return (
    <div className="relative">
      <div className="flex w-full items-center justify-center">
        {/* Gambar */}
        <div className="w-1/2 shrink-0">
          <Image
            src="/assets/404.svg"
            width={800}
            height={400}
            alt="404 illustration"
            className="w-full object-cover"
          />
        </div>
        <div className="flex-1 text-center">
          <h1 className="text-5xl font-bold">
            Oops!{' '}
            <span className="text-brand-red-100 drop-shadow-red-glow animate-pulse">
              404
            </span>
          </h1>
          <p className="mt-4 text-lg text-foreground/70">
            Well, this is awkward. Looks like this page took a vacation.
          </p>
          <LinkWrapper
            href="/"
            className={cn(
              buttonVariants({
                size: 'lg',
                variant: 'outline',
              }),
              'rounded-full',
              'transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-transparent focus:outline-none sm:w-max',
            )}
          >
            <RiHomeFill className="mr-2 h-4 w-4" />
            Back to Home
          </LinkWrapper>
        </div>
      </div>
    </div>
  )
}

export default NotFound

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
