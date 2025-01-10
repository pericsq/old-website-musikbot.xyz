import { links } from '@/config/links'
import { Blur } from '@/components/blur'
import { LinkWrapper } from '@/components/link-wrapper'

export default function Status() {
  return (
    <div className="relative">
      <Blur />
      <div className="relative">
        <div className="mx-auto max-w-6xl text-center">
          <h1 className="mt-20 font-heading text-4xl font-bold text-mewwme lg:text-5xl">
            All systems operational
          </h1>
          <p className="text-xl text-muted-foreground">
            <LinkWrapper href={links.uptime} external>
              {' '}
              Explore Uptime Metrics
            </LinkWrapper>{' '}
          </p>
        </div>
        <div className="mt-8 flex flex-col items-center space-y-8">
          {[
            {
              src: 'https://status.meww.me/#website_monitor',
              title: 'Website Monitor',
            },
            {
              src: 'https://status.meww.me/#bot_monitor',
              title: 'Last.fm Bot Monitor',
            },
            {
              src: 'https://status.meww.me/#restapi_monitor',
              title: 'REST API Monitor',
            },
            {
              src: 'https://status.meww.me/#lavalink_monitor',
              title: 'Lavalink Monitor',
            },
            {
              src: 'https://status.meww.me/#panel_monitor',
              title: 'Panel Monitor',
            },
            {
              src: 'https://status.meww.me/#server_monitor',
              title: 'Server Monitor',
            },
          ].map((iframe, index) => (
            <div
              key={index}
              className="relative h-[230px] w-full max-w-[820px]"
              style={{ aspectRatio: '16 / 9' }} // Maintain aspect ratio
            >
              <iframe
                src={iframe.src}
                title={iframe.title}
                className="absolute inset-0 h-full w-full rounded-lg"
                style={{ zIndex: 1, border: 'none' }}
              ></iframe>
            </div>
          ))}
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
