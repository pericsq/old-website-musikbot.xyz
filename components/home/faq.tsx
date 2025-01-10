import Balancer from 'react-wrap-balancer'

import { links } from '@/config/links'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { LinkWrapper } from '@/components/link-wrapper'

const faq = [
  {
    question: 'What is Musik?',
    answer: (
      <>
        Musik&apos;s is a Discord bot that revolutionizes the way you
        experience music on Discord, offering the cleanest user interface,
        high-quality audio, and a wide range of music-related features.
      </>
    ),
  },
  {
    question: 'How do i add Musik Bots to my server?',
    answer: (
      <>
        You can add Musik Bots to your server by clicking{' '}
        <LinkWrapper href={links.botInvite}>here</LinkWrapper>.<br />
        <em>
          NOTE: If you want to disable <code>Administrator</code> permission
          from Musik, it will not work properly! You will still be able to
          listen to basic music features but some things won&apos;t work.
        </em>
      </>
    ),
  },
  {
    question: 'Why is Musik sometimes offline or not working?',
    answer: (
      <>
        Musik is developed by a single developer. So sometimes I miss
        something, and Musik is not working correctly. If you find any bugs,
        please report them to me. I will fix it ASAP.
      </>
    ),
  },
  {
    question: 'How to get Premium?',
    answer: (
      <>
        Unlock exclusive access to our premium features not available in the
        free version. Subscribing to premium gives you an edge in exploring our
        platform with deeper insights and more benefits. Visit our{' '}
        <LinkWrapper href={links.patreon}>Patreon page</LinkWrapper> to start
        your premium subscription and enjoy.
      </>
    ),
  },
]

export function FAQ() {
  return (
    <div className="flex flex-col gap-12 lg:flex-row">
      <div className="text-center lg:w-5/12 lg:text-left">
        <h2 className="font-heading text-3xl font-bold text-mewwme md:text-4xl">
          <Balancer>Frequently asked questions</Balancer>
        </h2>
        <p className="mt-4 text-muted-foreground">
          <Balancer>
            Here are some of the most common questions. If you have any other
            questions, feel free to reach out to us at{' '}
            <LinkWrapper href={links.supportServer} external>
              Support Server
            </LinkWrapper>
            .
          </Balancer>
        </p>
      </div>
      <div className="text-mewwme lg:w-7/12">
        <Accordion type="multiple">
          {faq.map((item, i) => (
            <AccordionItem key={i} value={String(i)}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
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
