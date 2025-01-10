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
    question: 'Can I send a refund request?',
    answer: (
      <>
        We will process refunds in accordance with our refund policy. If your
        request meets these guidelines, please contact us via the{' '}
        <LinkWrapper href={links.supportServer}>Server Support</LinkWrapper>.
        For more details, please refer to our{' '}
        <LinkWrapper href="/refundpolicy">Refund Policy</LinkWrapper>.
      </>
    ),
  },
  {
    question: 'How to redeem my Premium perks?',
    answer: (
      <>
        1. <strong>Subscribe on Patreon</strong>
        <br />
        Make sure to link your Discord account with Patreon to receive the
        premium perks.
        <br />
        <br />
        2. <strong>Join the Discord Server Support</strong>
        <br />
        Visit the{' '}
        <LinkWrapper href={links.supportServer}>Server Support</LinkWrapper>.
        <br />
        <br />
        3. <strong>Open a Ticket for Premium Activation</strong>
        <br />
        Find the &quot;open-ticket&quot; channel on the Discord server.
        <br />
        Click the icon to open a new ticket.
        <br />
        Provide the following information:
        <br />
        - Your Patreon username.
        <br />
        - The tier of your subscription.
        <br />
        <br />
        4. <strong>Verification and Activation</strong>
        <br />
        Our support team will verify your information.
        <br />
        After verification, your premium will be activated.
      </>
    ),
  },
  {
    question: 'Can I transfer premium to another server?',
    answer: (
      <>
        Yes, you can transfer your premium to another server. To do this, please
        provide:
        <br />
        1. Your current tier.
        <br />
        2. The ID of the server you&apos;re transferring from.
        <br />
        3. The ID of the server you want to transfer to.
        <br />
        Our support team will help you with the transfer.
      </>
    ),
  },
  {
    question: 'What should I do if my Premium subscription has expired?',
    answer: (
      <>
        If your premium subscription has expired and you renew your subscription
        on our <LinkWrapper href={links.patreon}>Patreon page</LinkWrapper>, you
        will need to reactivate your premium access by following the activation
        steps provided earlier.
      </>
    ),
  },
]

export default function FaqPremium() {
  return (
    <div className="flex flex-col gap-12 lg:flex-row">
      <div className="text-center lg:w-5/12 lg:text-left">
        <h2 className="font-heading text-3xl font-bold text-mewwme md:text-4xl">
          <Balancer>Premium FAQ</Balancer>
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
