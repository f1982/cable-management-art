import HoverScaleImage from '@/components/atoms/hover-scale-image'
import { Badge } from '@/components/ui/badge'
import clsx from 'clsx'
import { sampleSize } from 'lodash'
import { Link2 } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const PostItemView: React.FC<{
  title: string
  coverImage: string
  date: string
  description: string
  url: string
  tags: string[]
}> = ({ title, coverImage, description, date, url, tags }) => (
  <div className="w-full flex flex-col gap-3">
    <div className="cursor-pointer relative aspect-video w-full rounded-xl overflow-hidden">
      <Link href={url} scroll={false}>
        <HoverScaleImage src={coverImage} alt={title} />

        <h1
          className={clsx(
            'text-lg absolute top-0 left-0 p-5 leading-5 font-bold text-white pointer-events-none',
          )}
          style={{
            textShadow: '0px 1px 0px rgba(0, 0, 0, 0.6)',
          }}>
          {title}
        </h1>
        {/* If content is a url, show a link icon */}
        {url.startsWith('http') && (
          <span className="absolute left-3 bottom-2 text-muted pointer-events-none">
            <Link2 className="text-primary-foreground" />
          </span>
        )}
        {/* Tags */}
        <div className="absolute right-3 bottom-3 text-muted pointer-events-none">
          {sampleSize(tags, 2)?.map((tag) => (
            <Badge
              key={tag}
              className={clsx(
                'mr-2 text-xs rounded-xl',
                'bg-popover text-popover-foreground',
              )}>
              {tag}
            </Badge>
          ))}
        </div>
      </Link>
    </div>
    {/*  */}
    <div>
      <span className="text-xs text-muted-foreground">{date}</span>
      <p>{description}</p>
    </div>
  </div>
)

export default PostItemView
