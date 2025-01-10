import Balancer from 'react-wrap-balancer'

import { links } from '@/config/links'
import { Separator } from '@/components/ui/separator'
import { Blur } from '@/components/blur'
import { LinkWrapper } from '@/components/link-wrapper'

export default function LastFmSucces() {
  return (
    <div className="relative">
      <Blur />
      <div className="relative">
        <div className="space-y-4">
          <h1 className="mt-20 font-heading text-4xl font-bold text-mewwme lg:text-5xl">
            You have successfully logged in to Last.fm.
          </h1>
          <p className="text-xl text-muted-foreground">
            <Balancer>
              Thank you for scrobbling with us! You can now close this window.
            </Balancer>
          </p>
        </div>
        <Separator className="my-4" />
        <div className="mt-8 flex flex-col space-y-8">
          <div>
            <h2 className="font-heading text-2xl font-semibold text-mewwme">
              What now?
            </h2>
            <p className="text-lg text-muted-foreground">
              <Balancer>
                If you change your mind, you can revoke these privileges later
                on your{' '}
                <LinkWrapper
                  href="https://www.last.fm/settings/applications"
                  external
                >
                  Setting page
                </LinkWrapper>{' '}
                . <br /> You can now close your browser and return to the
                Musik&apos;s application.
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
