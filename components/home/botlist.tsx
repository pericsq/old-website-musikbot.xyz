import React from 'react'
import Image from 'next/image'

import Marquee from 'react-fast-marquee'

import '../../styles/bot.list.css'

import botlistData from '../../data/botlist.json'

type ServerType = {
  name: string
  avatar: string
  verified: boolean
  partnered: boolean
  members: string
  invite: string
}

const ServerCard: React.FC<{ server: ServerType }> = ({ server }) => (
  <div className="server-card">
    <Image
      src={`/logos/${server.avatar}`}
      alt={server.name}
      width={60}
      height={60}
    />
    <div className="server-details">
      <div className="server-name">
        <h4>{server.name}</h4>
        {server.verified && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="61"
            fill="none"
            viewBox="0 0 60 61"
          >
            <path
              fill="#3BA55C"
              fillRule="evenodd"
              d="M60 30.555c0 2.959-4.8 5.169-5.7 7.828-.9 2.659 1.65 7.49 0 9.7-1.65 2.21-6.9 1.311-9.225 2.997-2.325 1.685-2.963 6.892-5.775 7.828-2.813.936-6.262-2.997-9.262-2.997-3 0-6.563 3.746-9.263 2.997-2.7-.75-3.45-6.143-5.775-7.828-2.325-1.686-7.5-.674-9.225-2.996-1.725-2.323.862-6.892 0-9.701C4.912 35.573 0 33.513 0 30.555c0-2.96 4.8-5.169 5.7-7.828.9-2.66-1.65-7.491 0-9.701 1.65-2.21 6.937-1.31 9.3-2.996 2.363-1.686 2.925-6.892 5.738-7.94C23.55 1.04 27 5.197 30 5.197c3 0 6.563-3.745 9.263-2.996 2.7.749 3.412 6.142 5.737 7.828 2.325 1.685 7.5.674 9.225 2.996 1.725 2.322-.863 6.892 0 9.7.862 2.81 5.775 4.87 5.775 7.829Z"
              clipRule="evenodd"
            />
            <path
              fill="#fff"
              d="m28.319 44.272-12.656-9.57 3.722-5.105 7.445 5.742 13.55-17.978 5.062 3.753-17.123 23.158Z"
            />
          </svg>
        )}
        {server.partnered && !server.verified && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="61"
            fill="none"
            viewBox="0 0 60 61"
          >
            <path
              fill="#5865F2"
              fillRule="evenodd"
              d="M59.987 30.112c0 2.959-4.799 5.168-5.698 7.827-.9 2.658 1.65 7.489 0 9.698-1.65 2.21-6.899 1.311-9.223 2.996-2.325 1.685-2.962 6.89-5.774 7.826-2.812.937-6.261-2.995-9.26-2.995-3 0-6.562 3.745-9.261 2.995-2.7-.748-3.45-6.14-5.774-7.826-2.325-1.685-7.499-.674-9.223-2.996-1.725-2.321.862-6.89 0-9.698C4.91 35.13 0 33.07 0 30.112s4.799-5.167 5.699-7.826c.9-2.659-1.65-7.49 0-9.699 1.65-2.21 6.936-1.31 9.298-2.996 2.362-1.685 2.924-6.89 5.736-7.938 2.812-1.049 6.261 3.108 9.26 3.108 3 0 6.562-3.745 9.261-2.996 2.7.749 3.412 6.141 5.737 7.826 2.324 1.686 7.498.675 9.223 2.996 1.724 2.322-.863 6.89 0 9.699.862 2.808 5.773 4.868 5.773 7.826Z"
              clipRule="evenodd"
            />
            <path
              fill="#fff"
              d="M49.843 29.937c0 1.494-.74 2.989-1.85 3.736L36.52 41.145c-2.22 1.494-4.441 2.241-7.032 2.241-1.11 0-1.85 0-2.96-.373-2.96-.747-5.18-2.242-7.031-4.483-.37-.748 0-1.495.37-1.868l5.18-3.363c.37-.373 1.111-.373 1.481 0 .74.374 1.48.747 1.85 1.12 1.48 0 2.59 0 3.7-.746l2.591-1.495 7.401-5.23 1.11-.747c1.85-1.121 4.811-.747 5.922 1.12.74 1.121.74 1.868.74 2.616Zm-9.236-6.78L35.39 26.54c-.746.375-1.119.375-1.864 0-.373-.376-1.118-.752-1.491-1.128-1.491-.376-2.61 0-3.728.752l-1.864 1.127-9.319 6.39c-2.237 1.127-4.846.751-5.964-1.504-1.491-1.88-.746-4.51 1.118-6.013l11.183-7.517c2.982-1.879 6.71-2.63 10.065-1.879 2.982.752 5.218 2.255 7.082 4.51.746.752.373 1.503 0 1.88Z"
            />
          </svg>
        )}
      </div>
      <p>{server.members}</p>
    </div>
    <a href={server.invite} target="_blank" rel="noopener noreferrer">
      Visit
    </a>
  </div>
)

export function BotList() {
  return (
    <section className="mt-8 text-xl text-muted-foreground">
      <h2 className="text-center font-heading text-3xl font-bold text-mewwme md:text-4xl">
        Invite our Partner bot
      </h2>
      <h3 className="text-center">Want to display here? Join Discord server</h3>

      <div className="container">
        <div className="server-slider-up"></div>
        <div className="server-slider-wrapper ml-[-30%] w-[162%]">
          <Marquee
            className="servers-slider-container"
            play={true}
            speed={45}
            gradient={true}
            gradientColor="rgb(16, 16, 16)"
          >
            {botlistData[0].map((server, index) => (
              <ServerCard key={index} server={server} />
            ))}
          </Marquee>
          <Marquee
            className="servers-slider-container"
            play={true}
            speed={30}
            gradient={true}
            gradientColor="rgb(16, 16, 16)"
            direction="right"
          >
            {botlistData[1].map((server, index) => (
              <ServerCard key={index} server={server} />
            ))}
          </Marquee>
        </div>
        <div className="server-slider-down"></div>
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
