'use client'

import Button from '@/app/components/commons/Button'
import ItemService from '@/app/components/commons/ItemService'
import TitleH3 from '@/app/components/TitleH3'
import {
  listChildArchitecture,
  listChildPhotoEditing,
  listChildVideoEditing,
} from '@/app/utils/ultils'
import React, { useMemo, useState } from 'react'

const listService = [...listChildArchitecture, ...listChildPhotoEditing, ...listChildVideoEditing]

function WrapListService() {
  const [isShowFull, setIsShowFull] = useState<boolean>(false)
  const [withScreen, setWithScreen] = useState<number>(1024)

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      setWithScreen(window.innerWidth)
    }
  }, [])

  const listServiceInit = useMemo(() => {
    if (isShowFull) {
      return listService
    }
    if (withScreen < 768 && !isShowFull) {
      return listService.slice(0, 3)
    }
    return listService.slice(0, 6)
  }, [isShowFull, withScreen])

  return (
    <div className="container-custom m-auto px-4">
      <TitleH3 title="What can you find at Fotober?" />
      <h3 className="text-[#003366] font-extrabold text-xl md:text-[26px] md:leading-[45px]  text-center">
        EXPLORE ALL SERVICES
      </h3>
      <div className="flex flex-row gap-4 flex-wrap justify-between mt-4">
        {listServiceInit.map((item) => (
          <ItemService
            key={item.title}
            title={item.title}
            description={item.description}
            link={item.link}
            imageAfter={item.imageIdAfter}
            imageThumbId={item.imageThumbId}
            imageBefore={item.imageIdBefore}
            PhotoSphereUrl={item?.PhotoSphereUrl}
            videoThumbId={item.videoThumbId}
          />
        ))}
      </div>
      {!isShowFull && (
        <div className="flex mb-3 md:mb-6 flex-row justify-center">
          <div aria-hidden onClick={() => setIsShowFull(true)} className="w-[250px]">
            <Button title="View All Services" wrapClassName="mt-1 uppercase w-[250px]" showArrow />
          </div>
        </div>
      )}
    </div>
  )
}

export default WrapListService
