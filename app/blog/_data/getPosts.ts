import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { cache } from 'react'

import matter from 'gray-matter'

import { POST_PATH, postPaths } from '@/utils/mdx'

export type Post = {
  content: string
  data: {
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
  }
  filePath: string
}

export const getPosts = cache(async (): Promise<Post[]> => {
  const buffers = await Promise.all(
    postPaths.map((filePath) => readFile(path.join(POST_PATH, filePath))),
  )
  return buffers.map((buffer, i) => {
    const { content, data } = matter(buffer)

    return {
      content,
      data,
      filePath: postPaths[i],
    }
  }) as Post[]
})

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
