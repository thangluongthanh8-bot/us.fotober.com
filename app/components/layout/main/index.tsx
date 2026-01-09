'use client'

import {
  listChildArchitecture,
  listChildPhotoEditing,
  listChildVideoEditing,

} from '@/app/utils/ultils'
import Image from 'next/image'
import logoImage from '@/app/assets/logo.png'
import arrow from '@/app/assets/svg/arrow.svg'
import arrowBlue from '@/app/assets/svg/arrow-blue.svg'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { twMerge } from 'tailwind-merge'




const listMenubar = [
  {
    title: 'Services',
    link: '#',
    child: true,
  },
  {
    title: 'About Us',
    link: '/about-us',
    child: null,
  },
  {
    title: 'Privacy policy',
    link: '/privacy-policy',
  },
  {
    title: 'Contact Us',
    link: '/contact',
    child: null,
  },
]

const listSubMenuService = [
  {
    title: 'Photo Editing',
    link: '/photo-editing',
    listChild: listChildPhotoEditing,
  },
  {
    title: 'Video Editing',
    link: '/video-editing',
    listChild: listChildVideoEditing,
  },
  {
    title: 'Architecture Planning \n & Virtual Services',
    link: '/architecture-planning-and-virtual-services',
    listChild: listChildArchitecture,
  },
]

const groupLink = [...listChildPhotoEditing, ...listChildVideoEditing, ...listChildArchitecture]


function LayoutMain({
  children,
  classHeader,
}: {
  children: React.ReactNode
  classHeader?: string
}) {
  const router = useRouter()
  const pathName = usePathname()
  const [openMenu, setOpenMenu] = useState<number | undefined>(undefined)
  const componentRef = useRef<HTMLDivElement | null>(null)
  const [openMobileMenu, setOpenMobileMenu] = useState<boolean>(false)
  const [isVisibleScroll, setIsVisibleScroll] = useState(false)

  const handleScroll = useCallback(() => {
    if (typeof window !== 'undefined') {
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrollPercent = (scrollTop / height) * 100

      if (scrollPercent > 5) {
        setIsVisibleScroll(true)
      } else {
        setIsVisibleScroll(false)
      }
    }
  }, [])

  const scrollToTop = useCallback(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        typeof window !== 'undefined' &&
        componentRef.current &&
        !componentRef.current.contains(event.target as Node) &&
        window?.innerWidth >= 1024
      ) {
        setOpenMenu(undefined)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  const navigateToPage = useCallback(
    (linkUrl: string) => {
      void router.push(linkUrl)
    },
    [router],
  )

  return (
    <>
      {openMobileMenu && (
        <div
          aria-hidden
          onClick={() => setOpenMobileMenu(false)}
          className="w-full h-full bg-[#04040473] fixed z-[11]"
        />
      )}
      {openMenu !== undefined && (
        <div
          aria-hidden
          onClick={() => setOpenMenu(undefined)}
          className="w-full h-full bg-[#04040473] fixed z-[11]"
        />
      )}
      <header
        id="main-header"
        className={twMerge(
          'fixed lg:w-full h-[64px] lg:h-[80px] w-full z-[100]',
          isVisibleScroll ? 'bg-[#043263]' : 'bg-[#000000b8]',
          classHeader,
        )}
      >
        <div
          data-test-id="desktop-menu"
          className="hidden relative lg:flex container-custom m-auto flex-row items-center w-full h-full justify-between"
        >
          <Link href="/">
            <Image
              alt="fotober"
              src={logoImage}
              loading="eager"
              className="h-[25px] xl:h-[34px] object-contain w-fit"
            />
          </Link>

          <div className="flex flex-row w-[50%] items-center gap-10 xl:gap-10" ref={componentRef}>
            {listMenubar?.map((menu, index) => (
              <div
                aria-hidden
                onMouseEnter={() => {
                  if (index === 0 || index === 4 || index === 3) {
                    setOpenMenu(index)
                  }
                }}
                onClick={() => {
                  if (index === 0 || index === 4 || index === 3) {
                    setOpenMenu((cur) => {
                      if (cur !== undefined) return undefined
                      return index
                    })
                  }
                }}
                key={menu.title}
                className={twMerge(
                  'cursor-pointer flex flex-row items-center gap-2 ',
                  index === 0 ? '' : 'relative',
                   pathName.startsWith(menu.link) ? 'font-extrabold' : '',
                  index === 0 && groupLink.some((i) => i.link.includes(pathName))
                    ? 'font-extrabold'
                    : '',
                )}
              >
                {index === 0 ? (
                  <span className="text-white text-lg font-montserrat-blank">
                    {menu.title}
                  </span>
                ) : (
                  <Link href={menu.link} prefetch={false}>
                    <span className="text-white text-lg font-montserrat-blank">
                      {menu.title}
                    </span>
                  </Link>
                )}

                {menu.child && <Image alt="fotober" src={arrow} />}
                {menu.child && openMenu === index && index === 0 && (
                  <div
                    onMouseEnter={() => setOpenMenu(index)}
                    onMouseLeave={() => setOpenMenu(undefined)}
                    className="sub-menu [box-shadow:rgba(0,0,0,0.35)_0px_8px_14px] duration-[1000ms] font-montserrat ransition w-[1024px]  absolute bg-white min-w-[200px] ![transform:translateX(-50%)] left-[50%]  top-[80px] z-10 p-5 rounded-[12px]"
                  >
                    <div className="flex flex-row items-start gap-8">
                      {listSubMenuService.map((item) => (
                        <div key={item.title} className="column-1 flex flex-col gap-4">
                          <div className="flex flex-row gap-3 items-start h-[60px]">
                            <div className="h-[50px] bg-[#043263] w-[3px]" />
                            <Link
                              href={item.link}
                              className="font-semibold text-[21px] text-[#043263]"
                            >
                              {item.title}
                            </Link>
                          </div>
                          {item.listChild.map(({ title, icon, description, link, classIcon }) => (
                            <Link key={title} href={link}>
                              {/* <Fadein delay={0.1}> */}
                                <div className="flex flex-row items-start gap-4 hover:bg-[#04326324] p-2 hover:rounded-[12px]">
                                  <Image
                                    alt="fotober"
                                    src={icon}
                                    className={twMerge('w-[35px]', classIcon)}
                                  />
                                  <div className="flex flex-col">
                                    <p className="text-[#043263] font-normal leading-[20px] pb-2 text-[18px]">
                                      {title}
                                    </p>
                                    <p className="text-[#000000] text-[11px] font-normal italic">
                                      {description}
                                    </p>
                                  </div>
                                </div>
                              {/* </Fadein> */}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
               
              
              </div>
            ))}
          </div>
          <div
            id="action"
            className="flex flex-row items-center gap-6 xl:gap-8 font-montserrat-alternates"
          >
       
          </div>
        </div>
        <div
          data-test-id="mobile-menu"
          className="px-6 flex lg:hidden items-center h-[64px] justify-between"
        >
          <Link href="/">
            <Image
              alt="fotober"
              width={50}
              src={logoImage}
              className="h-[25px] xl:h-[34px] object-contain w-fit"
            />
          </Link>
          {!openMobileMenu && (
            <div
              aria-hidden
              id="toggle-menu"
              onClick={() => setOpenMobileMenu((cur) => !cur)}
              className="flex flex-col items-center justify-center w-[28px] h-[30px]"
            >
              <div className="w-full h-1 bg-white my-1 transition-transform duration-300 one" />
              <div className="w-full h-1 bg-white my-1 transition-opacity duration-300 two" />
              <div className="w-full h-1 bg-white my-1 transition-transform duration-300 three" />
            </div>
          )}
          {openMobileMenu && (
            <div className="background-mobile-full h-screen overflow-y-scroll p-4">
              <div className="list-content flex flex-col">
                <div className="w-full flex flex-row justify-end">
                  <div
                    aria-hidden
                    id="toggle-menu"
                    onClick={() => setOpenMobileMenu((cur) => !cur)}
                    className="flex flex-col items-center justify-center w-[28px] h-[30px]"
                  >
                    <div
                      className="w-full h-1 bg-[#017bcf] my-1 transition-transform duration-300 one"
                      style={{
                        transform: 'translateY(2px) rotate(-45deg)',
                        animation: 'animateReverse 600ms ease-in-out',
                      }}
                    />
                    <div
                      style={{
                        transform: 'translateY(-10px) rotate(45deg)',
                        animation: 'animateReverse 600ms ease-in-out',
                      }}
                      className="w-full h-1 bg-[#017bcf] my-1 transition-transform duration-300 three"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-3 mt-4">
                  {[
                    ...listMenubar
                    
                  ]?.map((menu, index) => (
                    <div
                      aria-hidden
                      onClick={(e) => {
                        // Prevent triggering parent click when clicking children
                        if (menu.link !== '#' && !menu.child) { 
                           void navigateToPage(menu.link)
                        } else {
                           setOpenMenu((cur) => (cur === index ? undefined : index))
                        }
                      }}
                      key={`${menu.title}-mobile`}
                      className="cursor-pointer flex flex-col items-start gap-2 relative"
                    >
                      <>
                        <div className="animate__animated animate__fadeInDown animate__fast flex flex-row w-full justify-between">
                          <span className="text-[#043263] text-base font-semibold font-montserrat-alternates">
                            {menu.title}
                          </span>

                          {menu.child && (
                            <Image
                              alt="fotober"
                              src={arrowBlue}
                              className={twMerge(openMenu === index ? 'rotate-180' : '')}
                            />
                          )}
                        </div>
                      </>

                      {menu.child && openMenu === index && index === 0 && (
                        <div className="sub-menu transition font-montserrat duration-500 bg-white min-w-[200px]  rounded-[12px]">
                          <div className="flex flex-col items-start gap-4">
                            {listSubMenuService.map((item) => (
                           <>
                                <div className="animate__animated animate__fadeInRight column-1 flex flex-col gap-2">
                                  <div className="flex flex-row gap-3 items-center">
                                    <div className="h-[16px] bg-[#043263] w-[3px]" />
                                    <Link
                                      href={item.link}
                                      className="font-normal text-lg text-[#043263]"
                                    >
                                      {item.title}
                                    </Link>
                                  </div>
                                  {item.listChild.map(({ title, icon, description, link }) => (
                                    <Link
                                      key={`${title}-mobile`}
                                      href={link}
                                      className="flex flex-row items-start gap-4 hover:bg-[#04326324] p-1 hover:rounded-[12px]"
                                    >
                                      <Image alt="fotober" src={icon} className="w-[20px]" />
                                      <div className="flex flex-col">
                                        <p className="text-[#043263]  pb-2 text-sm">{title}</p>
                                        <p className="text-[#000000] text-[10px] italic">
                                          {description}
                                        </p>
                                      </div>
                                    </Link>
                                  ))}
                                </div>
                           </>
                            ))}
                          </div>
                        </div>
                      )}
                      
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
      <main className="bg-white font-montserrat text-[#043263] relative z-10 overflow-x-hidden">
        {children}
      </main>
      
    </>
  )
}

export default LayoutMain
