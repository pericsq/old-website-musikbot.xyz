import Image from 'next/image'

import Balancer from 'react-wrap-balancer'

import { Card } from '@/components/card'

interface Feature {
  title: string
  body: string
  icon?: string
}
const features: Feature[] = [
  {
    title: 'Music Filters',
    body: 'Musik`s has a large collection of music filters such as 8D, Bass Boost, etc. which can be applied by a select menu!',
    icon: 'https://api.iconify.design/mi:filter.svg?color=%23f4e0c7',
  },
  {
    title: 'Radio Stations',
    body: 'Enjoy high-quality music streaming from top radio stations. Discover a wide variety of music choices tailored to your taste and experience unparalleled listening enjoyment.',
    icon: 'https://api.iconify.design/streamline:radio-solid.svg?color=%23f4e0c7',
  },
  {
    title: 'Customizable Music Cards',
    body: 'Choose from various themes for your music cards and customize them to match your style. Enjoy a personalized look with the command /themes.',
    icon: 'https://api.iconify.design/mdi:palette.svg?color=%23f4e0c7',
  },
  {
    title: 'Customization',
    body: 'Musik`s is greatly customizable, which allows you to setup request channels and much more!.',
    icon: 'https://api.iconify.design/ph:gear-fill.svg?color=%23f4e0c7',
  },
  {
    title: 'Easy to use & FREE',
    body: 'No need to pay for everything, the main features are free and will stay free forever!',
    icon: 'https://api.iconify.design/emojione-monotone:free-button.svg?color=%23f4e0c7',
  },
  {
    title: 'Crisp Quality',
    body: 'Have you ever dreamt of quality music without any lag issues or any downtime? Musik`s is what you need!.',
    icon: 'https://api.iconify.design/oi:audio.svg?color=%23f4e0c7',
  },
  {
    title: 'Buttons',
    body: 'Musik`s boasts an impressive feature set that includes convenient buttons located below the now playing messages.',
    icon: 'https://api.iconify.design/teenyicons:button-solid.svg?color=%23f4e0c7',
  },
  {
    title: 'Custom Playlist',
    body: 'Create your own playlist with your favorite songs and enjoy your music with Musik`s',
    icon: 'https://api.iconify.design/zondicons:playlist.svg?color=%23f4e0c7',
  },
  {
    title: 'Request Channel',
    body: 'Request your favorite songs to be played in a specific channel with Musik`s',
    icon: 'https://api.iconify.design/carbon:intent-request-inactive.svg?color=%23f4e0c7',
  },
  {
    title: 'Autoplay',
    body: "If you're busy, Musik`s can think and choose for you with the auto-play feature, as it is intelligent.",
    icon: 'https://api.iconify.design/pajamas:autoplay.svg?color=%23f4e0c7',
  },
  {
    title: 'Multi-Language',
    body: 'Musik`s is a versatile Discord bot that supports multiple languages, providing users with the ability to communicate and collaborate in their preferred language.',
    icon: 'https://api.iconify.design/lucide:languages.svg?color=%23f4e0c7',
  },
  {
    title: 'Security',
    body: "Discord music bot, Musik`s takes user's privacy seriously and strives to maintain the trust of its users.",
    icon: 'https://api.iconify.design/carbon:security.svg?color=%23f4e0c7',
  },
]

export function Features() {
  return (
    <div className="mx-auto max-w-6xl text-center">
      <h2 className="font-heading text-3xl font-bold text-mewwme md:text-4xl">
        <Balancer>
          Feature-rich commands are the same as the premium plan, but still
          free!
        </Balancer>
      </h2>
      <section className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <Card
            key={index}
            title={
              <div className="flex items-center text-mewwme">
                {feature.icon && (
                  <div className="mr-2">
                    <Image
                      src={feature.icon}
                      alt={feature.title}
                      width={24}
                      height={24}
                    />
                  </div>
                )}
                <span>{feature.title}</span>
              </div>
            }
            description={feature.body}
          />
        ))}
      </section>
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
