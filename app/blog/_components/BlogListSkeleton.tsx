'use server'

export async function BlogListSkeleton() {
  return (
    <>
      <ListItemSkeleton />
      <ListItemSkeleton />
      <ListItemSkeleton />
    </>
  )
}

/**
 * @private
 */
function ListItemSkeleton() {
  return (
    <div className="w-full animate-pulse rounded-lg bg-foreground/10 p-4 dark:bg-foreground/5">
      <div className="flex flex-col gap-3">
        <div className="flex w-full items-center justify-start gap-3">
          <div className="h-[40px] w-[40px] animate-pulse rounded-full bg-foreground/10" />
          <div className="h-[20px] w-3/4 animate-pulse rounded-lg bg-foreground/10 sm:w-1/2 md:w-1/4" />
        </div>
        <div className="flex flex-col gap-3">
          <div className="h-[20px] w-1/2 animate-pulse rounded-lg bg-foreground/10 md:w-1/4 lg:w-1/6" />
          <div className="h-[20px] w-full animate-pulse rounded-lg bg-foreground/10 sm:w-3/4" />
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
