import Balancer from 'react-wrap-balancer'

import { links } from '@/config/links'
import { Separator } from '@/components/ui/separator'
import { Blur } from '@/components/blur'
import { LinkWrapper } from '@/components/link-wrapper'

export default function Page() {
  return (
    <div className="relative">
      <Blur />
      <div className="relative">
        <div className="space-y-4">
          <h1 className="mt-20 font-heading text-4xl font-bold lg:text-5xl">
            Thank you for inviting our bot to your Discord server!
          </h1>
          <p className="text-xl text-muted-foreground">
            <Balancer>
              Thank you for considering supporting Musik&apos;s! I really
              appreciate it.
            </Balancer>
          </p>
        </div>
        <Separator className="my-4" />
        <div className="mt-8 flex flex-col space-y-8">
          <div>
            <h2 className="font-heading text-2xl font-semibold">Thanks All</h2>
            <p className="text-lg text-muted-foreground">
              <Balancer>
                We&quot;re thrilled to be a part of your community. Join our
                official Discord server to gain exclusive access to content and
                the latest updates.
                <LinkWrapper href={links.supportServer} external>
                  {' '}
                  Support Server
                </LinkWrapper>{' '}
                to join now and interact with fellow community members!
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
