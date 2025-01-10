'use server'

interface TableOfContentsProps {
  toc: string[]
}

export const TableOfContents = async ({ toc }: TableOfContentsProps) => {
  if (toc.length === 0) return null
  return (
    <div className="flex max-w-full flex-col gap-1 xl:max-w-[200px] 2xl:max-w-[240px]">
      <p className="mb-1 font-semibold text-foreground">TABLE OF CONTENTS</p>
      <ol>
        {toc.map((x) => {
          return (
            <li key={x} className="mt-3">
              <p className="text-sm text-foreground/60">{x}</p>
            </li>
          )
        })}
      </ol>
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
