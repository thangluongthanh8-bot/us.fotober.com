'use client'

import YoutubeEmbed from '@/app/components/YoutubeEmbed'
import React from 'react'

function SessionFactCheck() {
  return (
    <YoutubeEmbed
      videoId="5rVNUNAqGM4"
      className="w-full h-[215px] md:h-[550px] rounded-tl-[12px] rounded-tr-[12px] object-cover"
      title="fotober"
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
export default SessionFactCheck
