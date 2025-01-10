import { links } from '@/config/links'
import { Blur } from '@/components/blur'
import { LinkWrapper } from '@/components/link-wrapper'

export default function RefundPolicy() {
  return (
    <div className="relative">
      <Blur />
      <div className="relative">
        <div className="mx-auto mt-20 text-center lg:w-2/3">
          <div className="space-y-4">
            <h1 className="mt-20 font-heading text-4xl font-bold text-mewwme lg:text-5xl">
              Refund Policy
            </h1>
            <p className="text-xl text-muted-foreground">
              At Musik&apos;s, we want our users to be satisfied with their
              purchases. If you are not satisfied with your purchase, you may
              request a refund by submitting a refund request within 7 days of
              the purchase date and before the 5th of the month.
            </p>
            <p className="text-lg text-muted-foreground">
              To request a refund, please contact us at{' '}
              <LinkWrapper href={links.supportServer} external>
                {' '}
                Support Server
              </LinkWrapper>{' '}
              with your order number and the reason for your refund request. We
              will review your request and issue a refund if it meets our refund
              criteria
            </p>
            <p className="text-lg text-muted-foreground">
              Please note that we are unable to issue refunds for requests
              submitted after 7 days from the purchase date but must be before
              the 5th of the month if you have subscribed near the end of the
              month. We reserve the right to refuse refund requests that do not
              meet our refund criteria.
            </p>
            <p className="text-lg text-muted-foreground">
              If you have any questions about our refund policy, please contact
              us at{' '}
              <a
                href="mailto:support@Musik.xyz"
                style={{ textDecoration: 'underline' }}
              >
                support@Musik.xyz
              </a>
              &nbsp;For more information, check the Discord Terms Of Service.
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
