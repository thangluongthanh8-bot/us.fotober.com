'use client'

import { graphql } from '@/app/__generated__'
import { CreateFormContactMutation } from '@/app/__generated__/graphql'
import Button from '@/app/components/commons/Button'
import iconEmail from '@/app/assets/icons/icon-email.png'
import iconAddress from '@/app/assets/icons/address.png'
import iconChat from '@/app/assets/icons/icon-whatsapp.png'
import FormSuccess from '@/app/components/FormSuccess'
import { whatAppsFormat, whatAppsUrl, mockSubmitContactForm, USE_STATIC_DATA } from '@/app/utils/ultils'
import { useMutation } from '@apollo/client/react'
import Image from 'next/image'
import React, { useCallback, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'

type FormValues = {
  user_name: string
  email: string
  phone_number: string
  messages?: string
}

const CreateFormContact = graphql(`
  mutation CreateFormContact($data: create_contact_form_input!) {
    create_contact_form_item(data: $data) {
      id
    }
  }
`)

function ContactFrom() {
  const [isErrorSubmitForm, setIsErrorSubmitForm] = useState<boolean>(false)
  const [isSuccess, setIsSuccess] = useState<boolean>(false)
  const [staticLoading, setStaticLoading] = useState<boolean>(false)

  const [createContact, { loading: loadingCreate }] = useMutation<CreateFormContactMutation>(
    CreateFormContact,
    {
      onCompleted: () => {
        setIsSuccess(true)
      },
      onError: () => {
        setIsErrorSubmitForm(true)
      },
    },
  )

  // Combined loading state for both static and API modes
  const loading = USE_STATIC_DATA ? staticLoading : loadingCreate

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>()

  const onCreateContact: SubmitHandler<FormValues> = React.useCallback(
    async (dataSubmit) => {
      // Static mode - use mock function
      if (USE_STATIC_DATA) {
        setStaticLoading(true)
        try {
          await mockSubmitContactForm(dataSubmit)
          setIsSuccess(true)
        } catch {
          setIsErrorSubmitForm(true)
        } finally {
          setStaticLoading(false)
        }
        return
      }

      // API mode - original logic
      await createContact({
        variables: {
          data: dataSubmit,
        },
      })
    },
    [createContact],
  )

  const onResetData = useCallback(() => {
    void reset({})
    setIsSuccess(false)
  }, [reset])


  return (
    <div className="container-custom relative z-30 m-auto w-full flex flex-col md:flex-row justify-between gap-6">
      <div className="flex flex-col gap-8 pt-6 md:pr-12">
        <p className="text-[#043263] font-extrabold uppercase whitespace-nowrap text-[21px]  lg:text-[28px]">
          Connect with Us!
        </p>
        <a
          target="_blank"
          rel="noreferrer"
          href="mailto:Luongquan.ftbus@gmail.com"
          data-test-id="contact-info-1"
          className="bg-[#043263] rounded-[16px] p-4"
        >
          <p className="text-[#febe1f] text-lg font-bold">Email</p>
          <div className="flex flex-row gap-4 items-center">
            <Image alt="Fotober US" src={iconEmail} className="w-[34px] h-[34px] object-contain" />
            <p className="text-white font-bold text-sm">Luongquan.ftbus@gmail.com</p>
          </div>
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          aria-label="Chat on WhatsApp"
          href={whatAppsUrl}
          data-test-id="contact-info-2"
          className="bg-[#043263] rounded-[16px] p-4"
        >
          <p className="text-[#febe1f] text-lg font-bold">Whatsapp</p>
          <div className="flex flex-row gap-4 items-center">
            <Image alt="Fotober US" src={iconChat} className="w-[34px] h-[34px] object-contain" />
            <p className="text-white font-bold text-sm">{whatAppsFormat}</p>
          </div>
        </a>
        <div data-test-id="contact-info-3" className="bg-[#043263] rounded-[16px] p-4">
          <p className="text-[#febe1f] text-lg font-bold">Address</p>
          <div className="flex flex-row gap-4 items-center">
            <Image alt="Fotober US" src={iconAddress} className="w-[34px] h-[34px] object-contain" />
            <p className="text-white font-bold text-sm">30 N Gould St, Ste R, Sheridan, WY 82801, USA</p>
          </div>
        </div>
      </div>
      <form
        onSubmit={handleSubmit(onCreateContact)}
        className="info w-full bg-white md:w-[50%] border-solid border-2 border-black flex flex-col gap-4 py-6 px-6 rounded-[25px] mb-37.5 "
      >
        {isSuccess ? (
          <FormSuccess onReset={onResetData} />
        ) : (
          <>
            <div className="mb-4 text-center">
              <p className="text-[#043263] text-center font-extrabold uppercase whitespace-nowrap text-[21px] lg:text-[28px]">
                How can we help you?
              </p>
            </div>
            <div>
              <p className="text-[#043263] font-semibold text-xl pb-1">Name*</p>
              <input
                {...register('user_name', { required: true, maxLength: 80 })}
                placeholder="For example: John Wick"
                className={twMerge(
                  'border-solid border-[1.5px] outline-0 w-full rounded-[12px] px-4 h-[45px]',
                  errors.user_name
                    ? 'border-[#FE2E2E] [boxShadow:_0px_0px_5px_0px_#FE2E2E]'
                    : 'border-[#000000] [boxShadow:_5px_5px_5px_0px_#000000a1]',
                )}
              />
              {errors.user_name && (
                <p className="text-[#FE2E2E] text-sm mt-2 text-left">The field is required.</p>
              )}
            </div>
            <div>
              <p className="text-[#043263] font-semibold text-xl pb-1">Email*</p>
              <input
                {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                placeholder="For example: JohnWick@gmail.com"
                className={twMerge(
                  'border-solid border-[1.7px] outline-0 w-full rounded-[12px] px-4 h-[45px]',
                  errors.email
                    ? 'border-[#FE2E2E] [boxShadow:_0px_0px_5px_0px_#FE2E2E]'
                    : 'border-[#000000] [boxShadow:_5px_5px_5px_0px_#000000a1]',
                )}
              />
              {errors.email && (
                <p className="text-[#FE2E2E] text-sm mt-2 text-left">The field is required.</p>
              )}
            </div>
            <div>
              <p className="text-[#043263] font-semibold text-xl pb-1">Phone number*</p>
              <input
                {...register('phone_number', { required: true, maxLength: 80 })}
                placeholder="For example: +123456789"
                className={twMerge(
                  'border-solid border-[1.7px] outline-0 w-full rounded-[12px] px-4 h-[45px]',
                  errors.phone_number
                    ? 'border-[#FE2E2E] [boxShadow:_0px_0px_5px_0px_#FE2E2E]'
                    : 'border-[#000000] [boxShadow:_5px_5px_5px_0px_#000000a1]',
                )}
              />
              {errors.phone_number && (
                <p className="text-[#FE2E2E] text-sm mt-2 text-left">The field is required.</p>
              )}
            </div>
            <div className="flex flex-col gap-4 justify-center items-center">
              <p className="text-[#043263] w-full text-left font-semibold text-xl">
                Anything you want us to know
              </p>
              <textarea
                {...register('messages')}
                placeholder="Write your message here..."
                className="border-[#000000] border-solid border-[1.7px] outline-0 w-full rounded-[12px] p-4 h-[100px] [boxShadow:_5px_5px_5px_0px_#000000a1]"
              />
              <Button
                disabled={loading}
                loading={loading}
                type="submit"
                title="SUBMIT"
                showArrow
                colorArrow="arow-right-hover"
                className='btn-bg-primary rounded-[12px] p-2 flex text-[#] hover:text-white '
              />
              {isErrorSubmitForm && (
                <p className="text-[#FE2E2E] text-sm mt-2 text-left">
                  An error occurred during the submission process. Please try again or contact us
                  via email at contact@fotober.com.
                </p>
              )}
            </div>
          </>
        )}
      </form>
    </div>
  )
}

export default ContactFrom
