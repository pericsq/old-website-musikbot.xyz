import { Suspense } from 'react'

import { Blur } from '@/components/blur'

import { BlogList, BlogListSkeleton } from '@/app/blog/_components'

const BlogPosts = async () => {
  return (
    <div className="relative">
      <Blur />
      <div className="mx-auto max-w-6xl text-center">
        <h1 className="mt-20 font-heading text-4xl font-bold text-mewwme lg:text-5xl">
          Musik&apos;s Blog
        </h1>
        <p className="mb-5 text-xl text-muted-foreground">
          For information on features, updates, settings, and more
        </p>
      </div>
      <div className="mt-8 flex flex-col gap-4">
        <Suspense fallback={<BlogListSkeleton />}>
          <BlogList />
        </Suspense>
      </div>
    </div>
  )
}

export default BlogPosts

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
