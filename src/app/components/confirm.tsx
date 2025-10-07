import Image from 'next/image'

export const Confirm = () => {
  return (
    <div className='h-full w-[70%] pt-7 px-10 flex flex-col justify-center items-center'>
        <Image src="/images/icon-thank-you.svg" width={60} height={60} alt='icon-thank-you' />
        <h1 className='text-[#02295a] font-bold text-2xl mt-[0.7rem]'>Thank you!</h1>
        <p className="text-[#9699ab] text-[15px] mt-[0.2rem] mb-[1rem] text-center">Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
    </div>
  )
}
