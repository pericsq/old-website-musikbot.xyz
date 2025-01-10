'use client'

import React, { useEffect, useRef, useState } from 'react'

import { links } from '@/config/links'
import { Blur } from '@/components/blur'
import { LinkWrapper } from '@/components/link-wrapper'

import commands from '../../data/commands.json'

export default function Commands() {
  interface Command {
    name: string
    description: string
    usage: string
    category: string[]
    subcommands?: string[]
    options?: string[]
  }

  const [openedCommand, setOpenedCommand] = useState('')
  const [isHovered, setIsHovered] = useState(false)
  const [copyText, setCopyText] = useState('')
  const [searchTerm, setSearchTerm] = useState<string>('')

  // State untuk kategori yang dipilih, default ke "Music"
  const [selectedCategory, setSelectedCategory] = useState('Music')

  const [filteredCommands, setFilteredCommands] = useState<Command[]>(
    commands as object as Command[],
  )

  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleCopyUsage = async (textToCopy: string) => {
    const commandPart = textToCopy.split(' ')[0]
    await navigator.clipboard.writeText(commandPart)
    setCopyText('Copied!')
  }

  useEffect(() => {
    const performSearch = () => {
      const lowerCaseTerm = searchTerm.toLowerCase()

      const filtered = commands.filter(
        (command) =>
          command.name.toLowerCase().includes(lowerCaseTerm) ||
          command.description.toLowerCase().includes(lowerCaseTerm),
      )

      setFilteredCommands(filtered as object as Command[])
    }

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    timeoutRef.current = setTimeout(performSearch, 500)
  }, [searchTerm])

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }

  const categories = [
    'Filter',
    'Music',
    'Playlist',
    'Settings',
    'Utils',
    'Info',
  ]

  // Filter commands berdasarkan kategori yang dipilih
  const categoryCommands = filteredCommands.filter((command) =>
    command.category.includes(selectedCategory),
  )

  return (
    <div className="relative">
      <Blur />
      <div className="relative">
        <div className="mx-auto max-w-6xl text-center">
          <h1 className="mt-20 font-heading text-4xl font-bold text-mewwme lg:text-5xl">
            Commands and Controls
          </h1>
          <p className="mb-5 text-xl text-muted-foreground">
            Here you can find all Musik&apos;s commands
          </p>
        </div>
        <input
          className="relative z-10 w-full rounded-md bg-neutral-900 p-2 text-neutral-300"
          onChange={handleSearchChange}
          id="search"
          type="text"
          placeholder="Search commands..."
        ></input>

        {/* Render Kategori */}
        <div className="my-5 grid gap-4 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-6">
          {categories.map((category) => (
            <button
              key={category}
              className={`rounded-md px-4 py-2 text-mewwme ${
                selectedCategory === category
                  ? 'bg-neutral-700'
                  : 'bg-neutral-800'
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Render commands berdasarkan kategori yang dipilih */}
        {categoryCommands.length > 0 ? (
          <div className="mb-10">
            {categoryCommands.map((command) => {
              const isActive = openedCommand === command.name

              return (
                <div
                  className={`relative mb-4 cursor-pointer overflow-hidden rounded-lg p-4 text-neutral-300 transition-all duration-300 ${
                    openedCommand === command.name
                      ? 'max-h-[250px] bg-neutral-900'
                      : 'max-h-[90px] bg-neutral-900'
                  }`}
                  style={{
                    boxShadow:
                      '0 0 1px 1px #020202, 0 0 1px 2px #2b2626, 0 0 5px 1px #bbad9b',
                  }}
                  onClick={() =>
                    isActive
                      ? setOpenedCommand('')
                      : setOpenedCommand(command.name)
                  }
                  key={command.name}
                >
                  <div className="flex items-center justify-between">
                    <div className="grow overflow-hidden">
                      <h4 className="mb-1 text-lg font-bold text-white">
                        <span className="mr-0.5 text-neutral-500">/</span>
                        {command.name}
                      </h4>
                      <p className="mb-3 max-w-full overflow-hidden text-ellipsis whitespace-nowrap text-sm">
                        {command.description}
                      </p>
                    </div>
                    <div className="h-[30px] w-[30px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        fill="currentColor"
                        viewBox="0 0 30 30"
                        className={`transition-all duration-300 ${
                          isActive
                            ? 'rotate-180 text-neutral-300'
                            : 'text-neutral-500'
                        }`}
                      >
                        <path d="M15 20.938a.93.93 0 0 1-.663-.275l-8.75-8.75a.938.938 0 1 1 1.327-1.327L15 18.674l8.088-8.088a.938.938 0 1 1 1.326 1.327l-8.75 8.75a.94.94 0 0 1-.665.274Z" />
                      </svg>
                    </div>
                  </div>
                  <div
                    className={`transition-all duration-300 ${
                      isActive ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <h5 className="mb-1">Usage</h5>
                    <h6
                      className="mb-2 w-fit rounded-md bg-neutral-900 px-2 py-1 font-mono text-xs"
                      onMouseEnter={() => {
                        setCopyText('--Click To Copy--')
                        setIsHovered(true)
                      }}
                      onMouseLeave={() => {
                        setCopyText(command.usage)
                        setIsHovered(false)
                      }}
                      onClick={(e) => {
                        e.stopPropagation()
                        handleCopyUsage(command.usage)
                      }}
                    >
                      {isHovered ? (
                        <div className="text-gray-400">{copyText}</div>
                      ) : (
                        <div>{command.usage}</div>
                      )}
                    </h6>
                    {command.subcommands && (
                      <>
                        <h5 className="mb-1">Subcommands</h5>
                        <h6 className="w-fit rounded-md bg-neutral-900 px-2 py-1 font-mono text-xs">
                          {command.subcommands.join(', ')}
                        </h6>
                      </>
                    )}
                    {command.options && (
                      <>
                        <h5 className="mb-1">Options</h5>
                        <h6 className="w-fit rounded-md bg-neutral-900 px-2 py-1 font-mono text-xs">
                          {command.options.join(', ')}
                        </h6>
                      </>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        ) : (
          <p className="select-none font-medium text-neutral-300">
            No commands found for this category!{' '}
            <LinkWrapper href={links.supportServer} className="font-semibold">
              Maybe suggest it?
            </LinkWrapper>
          </p>
        )}
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
