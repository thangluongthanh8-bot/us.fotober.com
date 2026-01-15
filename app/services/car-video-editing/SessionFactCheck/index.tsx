'use client'

import YoutubeEmbed from '@/app/components/YoutubeEmbed'
import React from 'react'

function SessionFactCheckVideo({ videoId }: { videoId: string }) {
  return (
    <YoutubeEmbed
      videoId={videoId}
      className="w-full h-[350px] md:h-[550px] rounded-tl-[12px] rounded-tr-[12px] object-cover"
      title="Fotober US"
      opts={{
        playerVars: {
          autoplay: 0,
          controls: 1,
          modestbranding: 1,
          rel: 0,
        },
      }}
    />
  )
}
export default SessionFactCheckVideo
