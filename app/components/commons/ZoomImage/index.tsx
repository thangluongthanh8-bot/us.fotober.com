import Image, { StaticImageData } from 'next/image'
import React, { useCallback, useRef, useState } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = {
  children: React.ReactNode
  src: string | StaticImageData
  alt?: string
  wrapperClassName?: string
}

function ZoomImageWrapper({ children, src, alt = '', wrapperClassName = '' }: Props) {
  const zoomableRef = useRef<HTMLImageElement | null>(null)

  const [isOpen, setIsOpen] = useState(false)
  const [defaultZoomLevel, setDefaultZoomLevel] = useState(1)
  const [zoomLevel, setZoomLevel] = useState(defaultZoomLevel)

  const toggleModal = useCallback(() => {
    setIsOpen((open) => !open)
  }, [])

  const handleWheel = useCallback(
    (event: React.WheelEvent) => {
      if (!zoomableRef.current) return
      event.preventDefault()

      const maxScale = Math.min(
        window.innerWidth / zoomableRef.current.offsetWidth,
        window.innerHeight / zoomableRef.current.offsetHeight,
      )

      let newZoomLevel = zoomLevel
      newZoomLevel =
        event.deltaY > 0
          ? Math.max(newZoomLevel - 0.25, defaultZoomLevel)
          : Math.min(newZoomLevel + 0.25, maxScale)

      setZoomLevel(newZoomLevel)
      zoomableRef.current.style.transform = `scale(${newZoomLevel})`
    },
    [defaultZoomLevel, zoomLevel],
  )

  const handleClickImage = useCallback((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation()
  }, [])

  const handleImageLoad = useCallback((event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const img = event.currentTarget
    if (img.height > window.innerHeight) {
      const newZoomLevel = window.innerHeight / img.height
      setDefaultZoomLevel(newZoomLevel)
      if (zoomableRef.current) {
        zoomableRef.current.style.transform = `scale(${newZoomLevel})`
      }
    }
  }, [])

  return (
    <div className="relative w-full h-full cursor-zoom-in">
      <div
        aria-hidden
        className={twMerge(wrapperClassName, 'cursor-zoom-in relative w-full h-full')}
        onClick={toggleModal}
      >
        {children}
      </div>
      {isOpen && (
        <div
          aria-hidden
          className="block fixed z-[10000000] inset-0 w-full h-full bg-black bg-opacity-[85%] overflow-hidden"
          onClick={toggleModal}
          tabIndex={-1}
        >
          <span className="absolute z-[101] top-6 right-[100px] max-md:right-2 max-xl:right-4 text-white text-4xl font-bold transition-all duration-300 hover:text-gray-400 hover:no-underline hover:cursor-pointer w-9 h-9 flex justify-center items-center bg-[#574E68] rounded-[6px] cursor-pointer">
            <span>X</span>
          </span>

          <div className=" w-full h-full flex justify-center items-center">
            <Image
              src={src}
              alt={alt}
              width={1000}
              height={1000}
              ref={zoomableRef}
              className="w-[700px] max-md:w-[95%]"
              onClick={handleClickImage}
              onLoad={handleImageLoad}
              onWheel={handleWheel}
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default ZoomImageWrapper
