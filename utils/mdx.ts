import { readdirSync } from 'fs'
import path from 'path'

export const POST_PATH = path.join(process.cwd(), 'posts')

export const postPaths = readdirSync(POST_PATH)
  .filter((path) => path.charAt(0) !== '_')
  .filter((path) => /\.mdx?$/.test(path))

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
