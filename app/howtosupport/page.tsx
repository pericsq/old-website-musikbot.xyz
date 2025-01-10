import { ReactElement } from 'react'
import Image from 'next/image'

import { LuExternalLink } from 'react-icons/lu'
import {
  SiBuymeacoffee,
  SiDiscord,
  SiFiverr,
  SiKofi,
  SiPatreon,
} from 'react-icons/si'
import Balancer from 'react-wrap-balancer'

import { links as l } from '@/config/links'
import { cn } from '@/lib/utils'
import { Separator } from '@/components/ui/separator'
import { Blur } from '@/components/blur'
import { Icons } from '@/components/icons'
import { LinkWrapper } from '@/components/link-wrapper'

interface Link {
  label: string
  url: string
  icon?: ReactElement
  color?: string
  isFree?: boolean
}

const links: Link[] = [
  {
    label: 'Top.gg',
    url: l.topgg,
    icon: <Icons.topgg className="h-8 w-8 text-white" />,
    color: 'bg-[#FF3366]',
    isFree: true,
  },
  {
    label: 'Server Support',
    url: l.supportServer,
    icon: <SiDiscord className="h-8 w-8 text-white" />,
    color: 'bg-[#5865F2]',
    isFree: true,
  },
  {
    label: 'Patreon',
    url: l.patreon,
    icon: <SiPatreon className="h-6 w-6 text-white" />,
    color: 'bg-[#FF424D]',
    isFree: false,
  },
  {
    label: 'Ko-fi',
    url: l.kofi,
    icon: <SiKofi className="h-6 w-6 text-white" />,
    color: 'bg-[#FF424D]',
    isFree: false,
  },
  {
    label: 'Fiverr',
    url: l.fiverr,
    icon: <SiFiverr className="h-10 w-10 text-white" />,
    color: 'bg-[#1dbf73]',
    isFree: false,
  },
  {
    label: 'BuiltByBit',
    url: l.builtbybit,
    icon: (
      <Image
        src="/assets/builtbybit.png"
        alt="BuiltByBit Icon"
        width={45}
        height={45}
      />
    ),
    isFree: false,
  },

  {
    label: 'Buy Me a Coffee',
    url: l.buymeacoffee,
    icon: <SiBuymeacoffee className="h-6 w-6 text-neutral-900" />,
    color: 'bg-[#FFDD00]',
    isFree: false,
  },
]

export default function Page() {
  return (
    <div className="relative">
      <Blur />
      <div className="relative">
        <div className="space-y-4">
          <h1 className="mt-10 font-heading text-4xl font-bold text-mewwme lg:text-5xl">
            Support Musik
          </h1>
          <p className="text-xl text-muted-foreground">
            <Balancer>
              Thank you for considering supporting Musik! I really appreciate
              it.
            </Balancer>
          </p>
        </div>
        <Separator className="my-4" />
        <div className="mt-8 flex flex-col space-y-8">
          <div>
            <h2 className="font-heading text-2xl font-semibold text-mewwme">
              Free ways
            </h2>
            <p className="text-lg text-muted-foreground">
              <Balancer>
                You can support me by voting for Musik, inviting Musik to your
                server, or joining the support server.
              </Balancer>
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-start space-x-12 space-y-6">
              {links.map(
                (link) =>
                  link.isFree && (
                    <LinkWrapper
                      key={link.url}
                      href={link.url}
                      className="group inline-flex items-center justify-center space-x-4"
                      external
                    >
                      <span
                        className={cn(
                          'flex h-12 w-12 shrink-0 items-center justify-center rounded-full',
                          link.color,
                        )}
                      >
                        {link.icon}
                      </span>
                      <h3 className="font-heading text-xl font-semibold text-muted-foreground">
                        {link.label} <LuExternalLink className="inline" />
                      </h3>
                    </LinkWrapper>
                  ),
              )}
            </div>
          </div>
          <div>
            <h2 className="font-heading text-2xl font-semibold text-mewwme">
              Get Premium
            </h2>
            <p className="text-lg text-muted-foreground">
              <Balancer>
                Subscribe to premium for exclusive features or make a donation
                to support Musik! <br /> Compare the features of our free and
                premium plans <LinkWrapper href="/premium">here</LinkWrapper>{' '}
              </Balancer>
            </p>
            <div className="mt-6 grid grid-cols-1 place-items-start gap-8 sm:grid-cols-3">
              {links.map(
                (link) =>
                  !link.isFree &&
                  !link.label.includes('Fiverr') &&
                  !link.label.includes('BuiltByBit') && (
                    <LinkWrapper
                      key={link.url}
                      href={link.url}
                      className="group inline-flex items-center justify-center space-x-4"
                      external
                    >
                      <span
                        className={cn(
                          'flex h-12 w-12 shrink-0 items-center justify-center rounded-full',
                          link.color,
                        )}
                      >
                        {link.icon}
                      </span>
                      <h3 className="font-heading text-xl font-semibold text-muted-foreground">
                        {link.label} <LuExternalLink className="inline" />
                      </h3>
                    </LinkWrapper>
                  ),
              )}
            </div>
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
