import Image from 'next/image'

type Props = {
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
  activeStep: number;
};

export const Confirm = ({ setActiveStep, activeStep }: Props) => {
  return (
    <div className='lg:h-full h-[400px] lg:w-[70%] pt-7 px-10 bg-white rounded-lg lg:rounded-none top-[9rem] left-[1rem] right-[1rem] lg:m-[0] absolute lg:static flex flex-col justify-center items-center'>
        <Image src="/images/icon-thank-you.svg" width={60} height={60} alt='icon-thank-you' />
        <h1 className='text-[#02295a] font-bold text-2xl mt-[0.7rem]'>Thank you!</h1>
        <p className="text-[#9699ab] text-[15px] mt-[0.2rem] mb-[1rem] text-center">Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
    </div>
  )
}
