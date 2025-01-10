import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { cache } from 'react'

import { compileMDX, CompileMDXResult } from 'next-mdx-remote/rsc'

import { mdxComponents } from '@/app/blog/[slug]/_data/mdxComponents'
import { POST_PATH } from '@/utils/mdx'

export interface FrontMatter {
  title: string
  description: string
  date: string
  seoDate: string
  thumbnail?: {
    large?: string
    banner?: string
    alt?: string
  }
  author: {
    name: string
    avatar: string
  }
  tags: string[]
  pinned?: boolean
  toc?: string[]
}

export const getPost = cache(
  async (slug: string): Promise<CompileMDXResult<FrontMatter>> => {
    const postFilePath = path.join(POST_PATH, `${slug}.mdx`)
    const source = await readFile(postFilePath)

    return await compileMDX({
      source: source.toString(),
      components: mdxComponents,
      options: {
        parseFrontmatter: true,
      },
    })
  },
)

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
