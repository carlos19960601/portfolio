'use client'

import { BookmarkItemType } from '@/config/bookmarks'
import { utm_source } from '@/config/siteConfig'
import { ArrowUpRight } from '@phosphor-icons/react'
import { Favicon } from 'favicon-stealer'
import Link from 'next/link'

export function BookmarkCard({ bookmark }: { bookmark: BookmarkItemType }) {
   const utmLink = `${bookmark.url}?utm_source=${utm_source}`

  return (
    <li className="group relative flex h-full flex-col items-start">
      <div className="relative flex h-full w-full flex-col justify-between rounded-2xl border border-muted-foreground/20 p-4 shadow-sm transition-all group-hover:scale-[1.03] group-hover:bg-muted/5 group-hover:shadow-md">
        <div className="">
          <div className="flex flex-col items-start justify-center gap-4 sm:flex-row sm:items-center sm:justify-start">
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full">
              <Favicon
                url={bookmark.url}
                src={bookmark.logo}
                alt={`${bookmark.name} logo`}
                size={32}
              />
            </div>
            <h2 className="text-base font-semibold">{bookmark.name}</h2>
          </div>
          <p className="relative z-10 ml-2 mt-2 text-sm text-muted-foreground">
            {bookmark.description}
          </p>
        </div>

        <Link
          href={utmLink}
          target='_blank'
          rel='noopener noreferrer'
          className='absolute inset-0 z-20'>
          <ArrowUpRight size={32} weight="duotone" className="absolute top-4 right-4 h-4 w-4 group-hover:text-primary group-hover:cursor-pointer" />
        </Link>
      </div>
    </li>
  )
}
