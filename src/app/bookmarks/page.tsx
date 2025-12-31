import { BookmarkCard } from '@/components/bookmark/BookmarkCard'
import { SimpleLayout } from '@/components/layout/SimpleLayout'
import {
  ais,
  articles,
  bookmarkHeadLine,
  bookmarkIntro,
  cracks,
  developerTools,
  informations,
  navigationStations,
  paywalls,
  softwares,
  uiComponents,
} from '@/config/bookmarks'

export default function Bookmarks() {
  return (
    <SimpleLayout title={bookmarkHeadLine} intro={bookmarkIntro}>
      {/*  UI Component */}
      <div className="mx-auto my-4 flex max-w-xl flex-col gap-6 border-t border-muted py-8 lg:max-w-none">
        <h2 className="mb-4 flex flex-row items-center justify-start gap-2 text-xl font-semibold tracking-tight opacity-80 md:text-3xl">
          UI Component
        </h2>
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-3"
        >
          {uiComponents.map((bookmark) => (
            <BookmarkCard key={bookmark.name} bookmark={bookmark} />
          ))}
        </ul>
      </div>

      {/* Navigation Station */}
      <div className="mx-auto my-4 flex max-w-xl flex-col gap-6 border-t border-muted py-8 lg:max-w-none">
        <h2 className="mb-4 flex flex-row items-center justify-start gap-2 text-xl font-semibold tracking-tight opacity-80 md:text-3xl">
          Navigation Station
        </h2>
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-3"
        >
          {navigationStations.map((bookmark) => (
            <BookmarkCard key={bookmark.name} bookmark={bookmark} />
          ))}
        </ul>
      </div>
      {/* Developer Tools */}
      <div className="mx-auto my-4 flex max-w-xl flex-col gap-6 border-t border-muted py-8 lg:max-w-none">
        <h2 className="mb-4 flex flex-row items-center justify-start gap-2 text-xl font-semibold tracking-tight opacity-80 md:text-3xl">
          Developer Tool
        </h2>
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-3"
        >
          {developerTools.map((bookmark) => (
            <BookmarkCard key={bookmark.name} bookmark={bookmark} />
          ))}
        </ul>
      </div>
      {/* Articles */}
      <div className="mx-auto my-4 flex max-w-xl flex-col gap-6 border-t border-muted py-8 lg:max-w-none">
        <h2 className="mb-4 flex flex-row items-center justify-start gap-2 text-xl font-semibold tracking-tight opacity-80 md:text-3xl">
          Articles
        </h2>
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-3"
        >
          {articles.map((bookmark) => (
            <BookmarkCard key={bookmark.name} bookmark={bookmark} />
          ))}
        </ul>
      </div>

      {/* AI Tools */}
      <div className="mx-auto my-4 flex max-w-xl flex-col gap-6 border-t border-muted py-8 lg:max-w-none">
        <h2 className="mb-4 flex flex-row items-center justify-start gap-2 text-xl font-semibold tracking-tight opacity-80 md:text-3xl">
          AI Tools
        </h2>
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-3"
        >
          {ais.map((bookmark) => (
            <BookmarkCard key={bookmark.name} bookmark={bookmark} />
          ))}
        </ul>
      </div>

      {/* Informations */}
      <div className="mx-auto my-4 flex max-w-xl flex-col gap-6 border-t border-muted py-8 lg:max-w-none">
        <h2 className="mb-4 flex flex-row items-center justify-start gap-2 text-xl font-semibold tracking-tight opacity-80 md:text-3xl">
          Informations
        </h2>
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-3"
        >
          {informations.map((bookmark) => (
            <BookmarkCard key={bookmark.name} bookmark={bookmark} />
          ))}
        </ul>
      </div>

      {/* Paywalls */}
      <div className="mx-auto my-4 flex max-w-xl flex-col gap-6 border-t border-muted py-8 lg:max-w-none">
        <h2 className="mb-4 flex flex-row items-center justify-start gap-2 text-xl font-semibold tracking-tight opacity-80 md:text-3xl">
          Paywalls
        </h2>
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-3"
        >
          {paywalls.map((bookmark) => (
            <BookmarkCard key={bookmark.name} bookmark={bookmark} />
          ))}
        </ul>
      </div>

      {/* cracks */}
      <div className="mx-auto my-4 flex max-w-xl flex-col gap-6 border-t border-muted py-8 lg:max-w-none">
        <h2 className="mb-4 flex flex-row items-center justify-start gap-2 text-xl font-semibold tracking-tight opacity-80 md:text-3xl">
          Cracks
        </h2>
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-3"
        >
          {cracks.map((bookmark) => (
            <BookmarkCard key={bookmark.name} bookmark={bookmark} />
          ))}
        </ul>
      </div>

      {/* softwares */}
      <div className="mx-auto my-4 flex max-w-xl flex-col gap-6 border-t border-muted py-8 lg:max-w-none">
        <h2 className="mb-4 flex flex-row items-center justify-start gap-2 text-xl font-semibold tracking-tight opacity-80 md:text-3xl">
          Softwares
        </h2>
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-3"
        >
          {softwares.map((bookmark) => (
            <BookmarkCard key={bookmark.name} bookmark={bookmark} />
          ))}
        </ul>
      </div>
    </SimpleLayout>
  )
}
