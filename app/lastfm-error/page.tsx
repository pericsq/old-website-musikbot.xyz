import Balancer from 'react-wrap-balancer'

import { links } from '@/config/links'
import { Separator } from '@/components/ui/separator'
import { Blur } from '@/components/blur'
import { LinkWrapper } from '@/components/link-wrapper'

export default function LastFmError() {
  return (
    <div className="relative">
      <Blur />
      <div className="relative">
        <div className="space-y-4">
          <h1 className="mt-20 font-heading text-4xl font-bold text-mewwme lg:text-5xl">
            Login to Last.fm Failed!
          </h1>
          <p className="text-xl text-muted-foreground"></p>
        </div>
        <Separator className="my-4" />
        <div className="mt-8 flex flex-col space-y-8">
          <div>
            <h2 className="font-heading text-2xl font-semibold text-mewwme">
              Login Error
            </h2>
            <p className="text-lg text-muted-foreground">
              <Balancer>
                We&apos;re sorry, but there was an error logging you into
                Last.fm. Please try again later. If the issue persists, visit
                our
                <LinkWrapper href={links.supportServer} external>
                  {' '}
                  Support Server
                </LinkWrapper>{' '}
                for assistance and further support. Thank you for your
                understanding.
              </Balancer>
            </p>
          </div>
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
