'use client'

import { graphql } from '@/__generated__'
import { GetListBlogsHomeQuery } from '@/__generated__/graphql'
import Fadein from '@/app/components/animations/Fadein'
import LightSpeedInLeft from '@/app/components/animations/LightSpeedInLeft'
import { getImageUrl } from '@/app/utils/ultils'
import { useQuery } from '@apollo/client'
import dayjs from 'dayjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import LazyLoad from 'react-lazyload'
import { Keyboard, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import iconNextMobile from './assets/icon-right-mobile.png'
import iconPreMobile from './assets/icon-left-mobile.png'

const GetListBlogsHome = graphql(`
  query GetListBlogsHome($filter: posts_filter, $sort: [String]) {
    posts(filter: $filter, sort: $sort) {
      id
      slug
      title
      image {
        id
      }
      category {
        title
        id
      }
      date_created
      author {
        id
        name
        bio
      }
      summary
    }
  }
`)

function SessionOutBlogs() {
  const { data: dataPost, loading } = useQuery<GetListBlogsHomeQuery>(GetListBlogsHome, {
    fetchPolicy: 'cache-and-network',
    variables: {
      filter: {
        status: {
          _eq: 'published',
        },
      },
      sort: ['-date_created'],
    },
  })

  return (
    <LazyLoad offset={100} once placeholder={<div />}>
      <div className="flex flex-row py-6 px-4 justify-center font-montserrat items-center bg-[#043263] ">
        <div className="flex flex-col justify-center items-center w-full md:container-custom m-auto">
          <LightSpeedInLeft>
            <h2 className="text-[28px] text-white font-extrabold">OUR BLOGS</h2>
          </LightSpeedInLeft>
          <Fadein>
            <p className="text-base md:text-xl text-center text-white pb-6">
              Tips & Trick for Real Estate Photography & Videography
            </p>
          </Fadein>

          <div className="list-card list-card-slide-shadow before:bg-[#043263] before:[box-shadow:_-4px_-3px_5px_9px_#043263]  after:bg-[#043263] after:[box-shadow:_-4px_-3px_5px_9px_#043263] max-lg:before:left-[24px] max-md:before:hidden max-md:after:hidden relative w-full flex flex-row items-center gap-4 py-4 after:right-[24px]">
            <div className="swiper-button-prev-blogs z-[10000] cursor-pointer">
              <Image alt="swiper" src={iconPreMobile} className="min-w-[24px] w-[24px] h-[24px] " />
            </div>
            {dataPost?.posts && (
              <Swiper
                loop
                allowTouchMove
                breakpoints={{
                  1: {
                    slidesPerView: 'auto',
                  },
                  1280: {
                    slidesPerView: 3,
                  },
                }}
                centeredSlides
                spaceBetween={18}
                modules={[Keyboard, Pagination, Navigation]}
                className="w-full xl:w-[1000px] 2xl:w-[1080px] min-h-[400px]"
                navigation={{
                  nextEl: '.swiper-button-next-blogs',
                  prevEl: '.swiper-button-prev-blogs',
                }}
              >
                {!loading &&
                  dataPost?.posts?.map((item) => (
                    <SwiperSlide
                      key={`${item.title}-items-post`}
                      className="w-[315px] max-xl:max-w-[315px] xl:!w-[321px]  2xl:!w-[348px] "
                    >
                      <div className="card-item group itemBox  cursor-pointer border-solid border-[1px] border-gray-300 rounded-[12px] p-1.5 bg-white">
                        {item?.image?.id && (
                          <Image
                            alt="fotober"
                            width={400}
                            height={400}
                            src={getImageUrl(item?.image?.id)}
                            className="w-full h-[180px] object-cover rounded-[12px]"
                          />
                        )}
                        <div className="flex flex-row justify-between p-3.5">
                          <p className="text-[#909090] text-[12px] md:text-sm font-semibold">
                            By: {item?.author?.name}
                          </p>
                          <p className="text-[#909090] text-[12px] md:text-sm font-semibold">
                            {dayjs(item.date_created).format('MMMM D, YYYY')}
                          </p>
                        </div>
                        <div className="flex flex-col px-3.5">
                          <Link
                            href={`/${item.slug}`}
                            className="text-[#212123] text-[16px] md:text-[18px] font-bold  [display:-webkit-inline-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical] overflow-hidden text-ellipsis "
                          >
                            {item.title}
                          </Link>
                          <p className="text-[#434242] text-[14px] md:text-[16px] pt-2 md:pt-4 font-normal [display:-webkit-inline-box] [-webkit-line-clamp:3] [-webkit-box-orient:vertical] overflow-hidden text-ellipsis">
                            {item.summary}
                          </p>
                          <Link
                            href={`/${item.slug}`}
                            className="text-[14px] cursor-pointer group-hover:underline group-hover:text-[#0056e2] pt-3 font-bold uppercase text-[#CCCCCB]"
                          >
                            Read More
                          </Link>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
              </Swiper>
            )}

            <div className="swiper-button-next-blogs cursor-pointer  z-[10000]">
              <Image
                alt="swiper"
                src={iconNextMobile}
                className="min-w-[24px] w-[24px] h-[24px] "
              />
            </div>
          </div>
        </div>
      </div>
    </LazyLoad>
  )
}

export default SessionOutBlogs
