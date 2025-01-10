import { AnchorHTMLAttributes } from 'react'
import Link from 'next/link'

interface LinkWrapperProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  children: React.ReactNode
  external?: boolean
}

export function LinkWrapper({
  href,
  children,
  external = false,
  ...props
}: LinkWrapperProps) {
  return external ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="link"
      {...props}
    >
      {children}
    </a>
  ) : (
    <Link href={href} className="link" {...props}>
      {children}
    </Link>
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
