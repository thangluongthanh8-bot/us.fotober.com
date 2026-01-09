import React from 'react'

function TitleH3({ title }: { title?: string }) {
  return (
    <h3 className="text-[#333333] w-full text-center text-lg md:text-[21px] font-bold">{title}</h3>
  )
}

export default TitleH3
