'use server'

import { CompileMDXResult } from 'next-mdx-remote/rsc'

import { FrontMatter } from '@/app/blog/[slug]/_data'
import blogStyles from '@/styles/blog.module.css'

interface MainContentProps {
  source: CompileMDXResult<FrontMatter>
}

export async function MainContent({ source }: MainContentProps) {
  if (source.content) {
    source.content
  }
  return (
    <main
      className={`markdown max-w-8xl mx-auto w-full px-8 text-foreground/70 ${blogStyles.markdown}`}
    >
      {source.content}
    </main>
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
