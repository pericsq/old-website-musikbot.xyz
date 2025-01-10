'use client'

import { useState } from 'react'

import Balancer from 'react-wrap-balancer'

import { links } from '@/config/links'
import { Button, buttonVariants } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Blur } from '@/components/blur'
import { LinkWrapper } from '@/components/link-wrapper'

import PlansComparison from './_components/PlansComparison'
import FaqPremium from './faq/FaqPremium'

export default function PremiumPage() {
  const [selectedPlan, setSelectedPlan] = useState<'monthly' | 'custom'>(
    'monthly',
  )

  const plans = [
    {
      type: 'monthly',
      tiers: [
        {
          name: 'Premium User',
          description:
            'Access to all Premium features for your discord account only',
          price: '2',
          period: '/month',
          link: 'https://www.patreon.com/checkout/musikb?rid=24439932',
          features: [
            'Refundable for 7 days',
            'Access to all Premium features',
            'Cool role in support server',
            'Discord VIP Support',
          ],
          note: false,
        },
        {
          name: 'Premium Server x1',
          description:
            'Access to all Premium features for your discord server (1 server)',
          price: '3.5',
          period: '/month',
          link: 'https://www.patreon.com/checkout/musikb?rid=24439940',
          features: [
            'Refundable for 7 days',
            'Access to all Premium features',
            'Cool role in support server',
            'Discord VIP Support',
          ],
          note: false,
        },
        {
          name: 'Premium Server x3',
          description:
            'Access to all Premium features for your discord server (3 server)',
          price: '6',
          period: '/month',
          link: 'https://www.patreon.com/checkout/musikb?rid=24439956',
          features: [
            'Refundable for 7 days',
            'Access to all Premium features',
            'Cool role in support server',
            'Discord VIP Support',
          ],
          note: false,
        },
      ],
    },
    {
      type: 'custom',
      tiers: [
        {
          name: 'Premium (Yearly)',
          description:
            'Access to all Premium features for your discord account and x3 server',
          price: '10',
          period: '/year',
          link: links.supportServer,
          features: [
            'Refundable for 7 days',
            'Access to all Premium features',
            'Cool role in support server',
            'Discord VIP Support',
          ],
          note: 'NOTE : Contact staff for more information',
        },
        {
          name: 'Custom Bot',
          description: `Get your very own branded version of Musik bot`,
          price: '12',
          period: '/month',
          link: links.supportServer,
          features: [
            '1 Custom Bot with customizable settings',
            '15 Premium servers',
            'Access to all Premium features',
            'Custom embed color',
            'Custom status and activity',
            'Custom avatar and name',
            'Private node high quality audio',
            'Discord VIP Support',
          ],
          note: 'NOTE : Contact staff for more information',
        },
        {
          name: 'Premium (Lifetime)',
          description:
            'Access to all Premium features for your discord account and x3 server',
          price: '15',
          period: '/Lifetime',
          link: links.supportServer,
          features: [
            'Refundable for 7 days',
            'Access to all Premium features',
            'Cool role in support server',
            'Discord VIP Support',
          ],
          note: 'NOTE : Contact staff for more information',
        },
      ],
    },
  ]

  const data = [
    {
      criteria: '24/7 Mode',
      free: false,
      premium: true,
    },
    {
      criteria: 'Autoplay mode',
      free: false,
      premium: true,
    },
    {
      criteria: 'Custom Prefix',
      free: false,
      premium: true,
    },
    {
      criteria: 'Release votelocks',
      free: false,
      premium: true,
    },
    {
      criteria: 'Bypass Cooldown System',
      free: false,
      premium: true,
    },
    {
      criteria: 'Unlimited Tracks in queue',
      free: false,
      premium: true,
    },
    {
      criteria: 'Unlimited Youtube Links',
      free: false,
      premium: true,
    },
    {
      criteria: 'Unlimited custom playlists (collections) & tracks',
      free: 'Limited (10 collection, 50 tracks per collections)',
      premium: 'Unlimited',
    },
    {
      criteria: 'Unlimited Last.fm Scrobbled',
      free: 'Limited (50 scrobbled per day)',
      premium: 'Unlimited',
    },
    {
      criteria: 'Exclusive Music Filters',
      free: 'Unlock 3 filters',
      premium: 'Unlock all 27 filters',
    },
    {
      criteria: 'Song Request Channel',
      free: false,
      premium: true,
    },
    {
      criteria: 'Hide Music Controls & Card',
      free: false,
      premium: true,
    },
    {
      criteria: 'Youtube & Twitch Notify Streams',
      free: false,
      premium: true,
    },
  ]

  return (
    <div className="relative">
      <Blur />
      <div className="relative">
        <div className="space-y-4">
          <h1 className="mt-20 font-heading text-4xl font-bold text-mewwme lg:text-5xl">
            Pick the perfect plan for your server
          </h1>
          <p className="text-center text-xl text-muted-foreground">
            <Balancer>
              Upgrade to Premium to unlock extra features and support the
              development & operation of Musik&apos;s bot.
            </Balancer>
          </p>
        </div>
        <Separator className="my-4" />

        {/* Plan Selection with rounded box */}
        <div className="mb-6 flex justify-center">
          <div
            className={`flex space-x-2 rounded-full border p-2 ${selectedPlan ? 'border-gray-900 bg-gray-800' : 'border-gray-300 bg-transparent'}`}
          >
            <button
              className={`rounded-full px-2 py-1 font-bold ${selectedPlan === 'monthly' ? 'bg-mewwme text-gray-800' : 'text-gray-200'}`}
              onClick={() => setSelectedPlan('monthly')}
            >
              Monthly
            </button>
            <button
              className={`rounded-full px-2 py-1 font-bold ${selectedPlan === 'custom' ? 'bg-mewwme text-gray-800' : 'text-gray-200'}`}
              onClick={() => setSelectedPlan('custom')}
            >
              Custom
            </button>
          </div>
        </div>

        <Separator className="my-4" />

        {/* Plan Details with 3 tiers */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {plans
            .filter((plan) => plan.type === selectedPlan)
            .map((plan) =>
              plan.tiers.map((tier, index) => (
                <div key={index} className="rounded-lg border p-6 shadow-md">
                  <h2 className="font-heading text-2xl font-semibold text-mewwme">
                    {tier.name}
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    {tier.description}
                  </p>

                  {/* Harga dan Periode */}
                  <p className="mt-4 text-xl font-bold">
                    <span className="text-4xl">${tier.price}</span>{' '}
                    <span className="text-sm text-muted-foreground">
                      {tier.period}
                    </span>
                  </p>

                  {/* Centering the button right after price and period */}
                  <div className="mb-4 mt-2 flex justify-center">
                    <LinkWrapper
                      href={tier.link} // Menggunakan tautan dari tier
                      external
                      className="rounded-lg border border-gray-900 bg-gray-800 px-10 py-2 font-bold text-gray-200 transition-transform duration-300 ease-in-out hover:scale-110 hover:text-white focus:outline-none sm:w-max"
                    >
                      Choose Plan
                    </LinkWrapper>
                  </div>

                  <Separator className="my-4" />
                  <ul className="space-y-2">
                    {tier.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-muted-foreground"
                      >
                        <span className="mr-2 text-green-500">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  {/* Optional note rendering */}
                  {tier.note && (
                    <p className="mt-10 text-sm italic text-mewwme">
                      {tier.note}
                    </p>
                  )}
                </div>
              )),
            )}
        </div>

        <Separator className="my-8" />
        <div className="text-center"></div>
        <h1
          className="mt-20 font-heading text-4xl font-bold lg:text-5xl"
          style={{ color: '#5d83ec' }}
        >
          Plan Comparison
        </h1>
        <p className="mb-2 text-xl text-muted-foreground">
          Compare the features of our free and premium plans
        </p>
        <PlansComparison data={data} rowSeparator colSeparator />

        {/* FAQ Premium placed below Plan Comparison */}
        <div className="mt-20"></div>
        <FaqPremium />
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
