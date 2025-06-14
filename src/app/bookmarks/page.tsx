import { BookmarkCard } from '@/components/bookmark/BookmarkCard'
import { SimpleLayout } from '@/components/layout/SimpleLayout'
import {
  bookmarkHeadLine,
  bookmarkIntro,
  navigationStations,
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
    </SimpleLayout>
  )
}
