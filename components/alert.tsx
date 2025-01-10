import React, { ReactNode } from 'react'
import Link from 'next/link'

import { cn } from '@/lib/utils'

interface AlertProps {
  active?: boolean
  className?: string
  children?: ReactNode
  href?: string
}

export default function Alert({
  children,
  className,
  active = false,
  href,
}: AlertProps) {
  return (
    active &&
    (href ? (
      <Link
        href={href}
        className={cn('z-10 w-full px-8 py-3 text-center', className)}
      >
        {children}
      </Link>
    ) : (
      <div className={cn('z-10 w-full px-8 py-3 text-center', className)}>
        {children}
      </div>
    ))
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
