import Link from 'next/link'

import Marquee from 'react-fast-marquee'

import { musicSourceItems } from '@/data/music-source'

export function MusicSource() {
  return (
    <div className="relative">
      <div className="ml-[-30%] w-[158.4%] rotate-3">
        <div className="pointer-events-none relative left-0 top-0 z-10 h-full w-1/3 bg-gradient-to-r from-background via-background/70 to-transparent" />
        <div className="pointer-events-none relative right-0 top-0 z-10 h-full w-1/3 bg-gradient-to-l from-background via-background/70 to-transparent" />
        <Marquee
          autoFill
          speed={40}
          className="flex items-center bg-transparent py-0.5"
        >
          <span className="ml-1 h-fit text-sm text-muted-foreground">
            Those who wish to sing always find a song •
          </span>
        </Marquee>
        <Marquee
          autoFill
          speed={30}
          direction="right"
          className="flex items-center bg-background/5 py-0.5"
        >
          {musicSourceItems.map((item, index) => (
            <Link
              href={item.href}
              target="_blank"
              key={index}
              className="ml-16 flex items-center"
              title={item.label}
            >
              <span className="sr-only">{item.label + "'s Company Logo"}</span>
              <item.svg
                alt={item.label + "'s Company Logo"}
                className="pointer-events-none h-32 w-32"
              />
            </Link>
          ))}
        </Marquee>
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
