import {
  AppleMusic,
  Deezer,
  Soundcloud,
  Spotify,
  Youtube,
} from '@/components/brands'

interface MusicSourceItems {
  label: string
  href: string
  svg: any
}

export const musicSourceItems: MusicSourceItems[] = [
  { label: 'Spotify', href: 'https://open.spotify.com/', svg: Spotify },
  {
    label: 'AppleMusic',
    href: 'https://music.apple.com/',
    svg: AppleMusic,
  },
  { label: 'Youtube', href: 'https://music.youtube.com/', svg: Youtube },
  { label: 'Deezer', href: 'https://www.deezer.com/', svg: Deezer },
  { label: 'Soundcloud', href: 'https://soundcloud.com/', svg: Soundcloud },
]

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
