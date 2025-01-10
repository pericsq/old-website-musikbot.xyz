import Balancer from 'react-wrap-balancer'

import { LinkWrapper } from '@/components/link-wrapper'

export function QuickStart() {
  return (
    <div>
      <h2
        className="text-center font-heading text-3xl font-bold md:text-4xl"
        style={{ color: '#5d83ec' }}
      >
        Quick Start
      </h2>
      <div className="text-1xl md:text-1xl text-center font-semibold">
        For information on features, updates, settings, and more, please refer
        to the <LinkWrapper href="/blog">Blog</LinkWrapper>
      </div>

      <ol className="my-8 grid gap-4 md:grid-cols-3">
        <li className="flex items-center space-x-6">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-rose-100 text-xl dark:bg-rose-900/20">
            1
          </span>
          <span>
            <h3 className="font-heading text-xl font-semibold text-mewwme">
              Invite
            </h3>
            <p className="mt-2 text-muted-foreground">
              <Balancer>
                Invite Musik&apos;s to your server by using the invite button
                on the top And grant <code>Administrator</code> permissions.
              </Balancer>
            </p>
          </span>
        </li>
        <li className="flex items-center space-x-6">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-rose-100 text-xl dark:bg-rose-900/20">
            2
          </span>
          <span>
            <h3 className="font-heading text-xl font-semibold text-mewwme">
              Type <code>/play</code>
            </h3>
            <p className="mt-2 text-muted-foreground">
              <Balancer>
                Join a voice channel and type <code>/play</code> in any text
                channel.
              </Balancer>
            </p>
          </span>
        </li>
        <li className="flex items-center space-x-6">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-rose-100 text-xl dark:bg-rose-900/20">
            3
          </span>
          <span>
            <h3 className="font-heading text-xl font-semibold text-mewwme">
              Done! 🎉
            </h3>
            <p className="mt-2 text-muted-foreground">
              <Balancer>
                Enjoy your music! Type <code>/help</code> to see all the
                commands you can use.
              </Balancer>
            </p>
          </span>
        </li>
      </ol>
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
