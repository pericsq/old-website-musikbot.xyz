import { CheckIcon, CloseIcon } from './icons'

interface ArrayProps {
  criteria: string
  free: string | number | boolean
  premium: string | number | boolean
}

interface PlansComparisonProps {
  className?: string
  data: Array<ArrayProps>
  colSeparator?: boolean
  rowSeparator?: boolean
}

export default function PlansComparison({
  className,
  data,
  colSeparator,
  rowSeparator,
}: PlansComparisonProps) {
  return (
    <section
      className={`max-w-8xl mx-auto flex h-auto w-full flex-col text-foreground ${className}`}
    >
      <div className="flex w-full flex-col items-center justify-center">
        <div className="bg-background-light mt-6 flex h-16 w-full rounded-t-3xl">
          <div className="text-bold flex w-full basis-1/3 items-center justify-center"></div>
          <div className="flex w-full basis-1/3 items-center justify-center">
            Free
          </div>
          <div className="flex w-full basis-1/3 items-center justify-center">
            Premium
          </div>
        </div>
        {data.map((item, index) => (
          <div
            key={index}
            className={`flex h-16 w-full ${rowSeparator && index !== 0 ? 'border-background-light border-t-2' : ''}`}
          >
            <div className="flex w-full basis-1/3 items-center justify-center px-2 text-center text-sm sm:text-base">
              {item.criteria}
            </div>
            <div
              className={`text-md flex w-full basis-1/3 items-center justify-center font-bold text-[#7A7B7E] ${colSeparator ? 'border-background-light border-x-2' : ''}`}
            >
              {typeof item.free === 'boolean' ? (
                item.free ? (
                  <CheckIcon className="h-5 w-5 text-[#7A7B7E] sm:h-7 sm:w-7" />
                ) : (
                  <CloseIcon className="h-5 w-5 text-[#7A7B7E] sm:h-7 sm:w-7" />
                )
              ) : (
                <span className="px-2 text-center text-sm sm:text-base">
                  {item.free}
                </span>
              )}
            </div>
            <div className="text-md text-brand-customPrimary flex w-full basis-1/3 items-center justify-center font-bold">
              {typeof item.premium === 'boolean' ? (
                item.premium ? (
                  <CheckIcon className="text-brand-customPrimary h-5 w-5 sm:h-7 sm:w-7" />
                ) : (
                  <CloseIcon className="text-brand-customPrimary h-5 w-5 sm:h-7 sm:w-7" />
                )
              ) : (
                <span className="px-2 text-center text-sm sm:text-base">
                  {item.premium}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
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
