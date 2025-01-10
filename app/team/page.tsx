import Image from 'next/image'

import { Blur } from '@/components/blur'

import teams from '../../data/team.json'

export default function Team() {
  // Ambil daftar kategori (roles) yang tersedia dalam data tim
  const availableRoles = Array.from(
    new Set(teams.flatMap((team) => team.categories)),
  )

  return (
    <div className="relative">
      <Blur />
      <div className="mx-auto max-w-6xl text-center">
        <h1 className="mt-20 font-heading text-4xl font-bold text-mewwme lg:text-5xl">
          Meet The Team
        </h1>
        <p className="text-xl text-muted-foreground">
          Meet the amazing team and contributors behind Musik&apos;s
        </p>
      </div>
      <div className="mx-auto h-full max-w-5xl justify-center px-8 text-center">
        {availableRoles.map((role, i) => (
          <div key={role}>
            <h2 className="mt-10 select-none text-2xl font-semibold text-mewwme lg:text-2xl">
              {role}
            </h2>
            <ul
              role="list"
              className="text-pretty mx-auto mt-10 flex max-w-2xl flex-wrap justify-center gap-6 lg:mx-0 lg:max-w-none lg:gap-8"
            >
              {teams
                .filter((team) => team.categories.includes(role))
                .map((team, index) => (
                  <li
                    key={team.id}
                    className={`relative flex basis-full flex-col content-center rounded-2xl bg-neutral-800 px-4 py-8 shadow-lg transition duration-300 ease-in-out hover:shadow-2xl sm:basis-1/3 sm:px-6 lg:basis-[22.5%] lg:px-8 lg:hover:-translate-y-2 xl:px-10 ${
                      index % 2 === 0 ? 'bg-neutral-900' : 'bg-neutral-900'
                    }`}
                    style={{
                      boxShadow:
                        '0 0 1px 1px #020202, 0 0 1px 2px #2b2626, 0 0 5px 1px #bbad9b',
                    }}
                  >
                    <Image
                      className="mx-auto h-28 w-28 rounded-full md:h-24 md:w-24"
                      src={team.imageUrl}
                      width={128}
                      height={128}
                      alt=""
                    />
                    <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-white">
                      {team.name}
                      {/* Add badge if not null */}
                      {team.badge !== null && (
                        <span className="absolute right-0 top-0 ml-2 -translate-y-2 translate-x-2 rounded-full bg-mewwme px-1 py-0 text-xs font-semibold text-gray-800">
                          {team.badge}
                        </span>
                      )}
                    </h3>
                    <p className="mb-4 text-sm leading-6 text-gray-400">
                      {team.description}
                    </p>
                    {team.websiteUrl !== null && (
                      <ul
                        role="list"
                        className="absolute bottom-5 left-1/2 mt-2 flex -translate-x-1/2 justify-center align-bottom"
                      >
                        <li className="hover:text-gray-300">
                          <a
                            href={team.websiteUrl}
                            target="_blank"
                            className="text-gray-400"
                          >
                            <span className="sr-only">website link</span>
                            <svg
                              className="h-5 w-5"
                              aria-hidden="true"
                              fill="currentColor"
                              viewBox="0 0 120 120"
                              style={{ marginTop: '8px' }}
                            >
                              <switch>
                                <g>
                                  <path d="M60 120C26.9 120 0 93.1 0 60S26.9 0 60 0s60 26.9 60 60-26.9 60-60 60M60 5C29.7 5 5 29.7 5 60s24.7 55 55 55 55-24.7 55-55S90.3 5 60 5" />
                                  <path d="M60 120c-19.3 0-34.4-26.4-34.4-60S40.7 0 60 0s34.4 26.4 34.4 60-15.1 60-34.4 60M60 5C43.8 5 30.5 29.7 30.5 60s13.2 55 29.5 55 29.5-24.7 29.5-55S76.2 5 60 5" />
                                  <path d="M12.2 25.6h95.6v5H12.2zm0 63.9h95.6v5H12.2zm-9.7-32h115v5H2.5z" />
                                  <path d="M57.5 2.5h5v115h-5z" />
                                </g>
                              </switch>
                            </svg>
                          </a>
                        </li>
                      </ul>
                    )}
                  </li>
                ))}
            </ul>
          </div>
        ))}
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
