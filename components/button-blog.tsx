import { cva, VariantProps } from 'class-variance-authority'

const button = cva('flex items-center rounded-lg px-6 py-3 transition-all', {
  variants: {
    variant: {
      blue: 'bg-brand-blue-100 hover:bg-brand-blue-200 text-white',
      red: 'bg-brand-red-100 hover:bg-brand-red-200 text-white',
    },
  },
  defaultVariants: {
    variant: 'blue',
  },
})

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

const Button: React.FC<ButtonProps> = ({ className, variant, ...props }) => (
  <button className={button({ variant, className })} {...props} />
)

export default Button

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
