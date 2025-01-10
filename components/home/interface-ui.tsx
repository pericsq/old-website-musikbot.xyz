'use client'

import { useRef } from 'react'
import Image from 'next/image'

import { useInView } from 'framer-motion'
import Tilt from 'react-parallax-tilt'

import { cn } from '@/lib/utils'
import { Blur } from '@/components/blur'

export function InterfaceUi() {
  const ref = useRef(null)
  const isInView = useInView(ref)

  return (
    <div className="relative">
      <Blur />
      <div className="flex flex-wrap items-center justify-center pl-2 text-center font-heading text-3xl font-bold md:text-4xl">
        <h2 className="text-center font-heading text-3xl font-bold text-mewwme md:text-4xl">
          Easy to Use with a{' '}
          <span className="gradient-text ml-2 pr-2 font-handwritting">
            Beautiful Interface! & Control Buttons
          </span>
        </h2>
        <div className="mt-8">
          <Tilt
            tiltMaxAngleX={5.5}
            tiltMaxAngleY={4}
            glareEnable
            tiltAngleYInitial={0}
            glareMaxOpacity={0.1}
            className={cn(
              'overflow-hidden rounded-2xl shadow-xl transition-all',
              isInView && 'animate-image-fade-in',
            )}
          >
            <Image
              src="/assets/ui-musikbot.webp"
              alt="interface"
              width={960}
              height={540}
              quality={100}
              ref={ref}
            />
          </Tilt>
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
