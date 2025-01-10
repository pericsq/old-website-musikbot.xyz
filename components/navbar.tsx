'use client'

import { useState } from 'react'

import { useMotionValueEvent, useScroll } from 'framer-motion'
import { FaDiscord, FaHandHoldingHeart } from 'react-icons/fa6'
import { LuMenu } from 'react-icons/lu'

import { links } from '@/config/links'
import { cn } from '@/lib/utils'
import { Button, buttonVariants } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { LinkWrapper } from '@/components/link-wrapper'

export function Navbar() {
  const { scrollY } = useScroll()

  const [position, setPosition] = useState(0)

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setPosition(latest)
  })

  return (
    <div
      className={cn(
        'fixed z-50 flex h-20 w-full transform-gpu items-center bg-transparent transition-all duration-300',
        position > 180 && 'h-16',
      )}
    >
      <div className="container">
        <MainNav />
      </div>
    </div>
  )
}

function MainNav() {
  return (
    <div className="flex justify-between">
      <LinkWrapper
        href="/"
        className="mr-6 flex items-center space-x-2 transition-transform duration-300 ease-in-out hover:scale-110 focus:outline-none sm:w-max"
      >
        <span className="hidden font-heading text-2xl font-bold text-mewwme sm:inline-block">
          Musik&apos;s
        </span>
      </LinkWrapper>
      {/* MainNave */}
      <nav className="hidden items-center space-x-6 text-sm font-medium sm:flex">
        <LinkWrapper
          href="/howtosupport"
          className={cn(
            buttonVariants({
              variant: 'ghost',
            }),
            'rounded-full text-yellow-500 transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-transparent hover:text-yellow-500 focus:outline-none sm:w-max',
          )}
        >
          <FaHandHoldingHeart className="mr-2 h-4 w-4" />
          How to Support
        </LinkWrapper>
        <LinkWrapper
          href={links.botInvite}
          external
          className={cn(
            buttonVariants(),
            'flex items-center justify-center rounded-lg bg-gradient-to-r from-[#5d83ec] to-[#5d83ec] px-4 py-2 text-black transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-gradient-to-r hover:from-[#5d83ec] hover:to-[#5d83ec] hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#5d83ec] sm:w-max',
          )}
        >
          <FaDiscord className="mr-2 h-5 w-5" />
          Add Musik&apos;s
        </LinkWrapper>
      </nav>
      {/* MobileNav */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="sm:hidden">
            <LuMenu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="top">
          <nav className="mt-8 flex flex-col items-center space-y-6 text-sm font-medium">
            <LinkWrapper
              href="/howtosupport"
              className={cn(
                buttonVariants({
                  variant: 'ghost',
                }),
                'w-full text-yellow-500 hover:bg-yellow-500/10 hover:text-yellow-500 sm:w-max',
              )}
            >
              <FaHandHoldingHeart className="mr-2 h-4 w-4" />
              How to Support
            </LinkWrapper>
            <LinkWrapper
              href={links.botInvite}
              external
              className={cn(
                buttonVariants(),
                'w-full rounded-full bg-gradient-to-r from-[#5d83ec] to-[#9f6fc9] text-black hover:bg-gradient-to-r hover:from-[#5d83ec] hover:to-[#9f6fc9] sm:w-max',
              )}
            >
              <FaDiscord className="mr-2 h-5 w-5" />
              Add Musik&apos;s
            </LinkWrapper>
            <Separator />
            {/*  <div className="w-full text-right">
              <ThemeToggle side="bottom" />
            </div> */}
          </nav>
        </SheetContent>
      </Sheet>
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
