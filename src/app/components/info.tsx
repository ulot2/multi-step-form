import { NextButton } from "../ui/button";

type Errors = {
  name: string;
  email: string;
  phoneNumber: string;
  plan: string;
};

type Props = {
  errors: Errors;
  handleInfoChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleNextStep: () => void;
};

export const Info = ({
  errors,
  handleInfoChange,
  handleNextStep
}: Props) => {
    

  return (
    <div className="lg:w-[70%] pt-7 px-10 bg-white rounded-lg lg:rounded-none top-[9rem] left-[1rem] right-[1rem] lg:m-[0] absolute lg:static">
      <h1 className="text-[#02295a] font-bold text-2xl">Personal info</h1>
      <p className="text-[#9699ab] text-[13px] mt-[0.2rem] mb-[1rem]">
        Please provide your name, email address, and phone number
      </p>
      <div className="relative pb-20">
        <form>
          <div className="mb-[1rem]">
            <div className="flex justify-between items-center">
              <label
                className="block mb-[0.3rem] text-[#02295a]"
                htmlFor="name"
              >
                Name
              </label>
              {errors.name && (
                <p className="text-[red] text-[12px]">{errors.name}</p>
              )}
            </div>
            <input
              onChange={handleInfoChange}
              className=" outline-[1px] outline-[#d6d9e6] focus-within:outline focus-within:outline-[#473dff] hover:outline-[#473dff] text-[#02295a] font-bold transition cursor-pointer rounded w-full pl-[0.7rem] py-[0.2rem] placeholder:text-[13px]"
              type="text"
              placeholder="e.g. Stephen King"
              name="name"
            />
          </div>
          <div className="mb-[1rem]">
            <div className="flex justify-between items-center">
              <label
                className="block mb-[0.3rem] text-[#02295a]"
                htmlFor="name"
              >
                Email Address
              </label>
              {errors.email && (
                <p className="text-[red] text-[12px]">{errors.email}</p>
              )}
            </div>
            <input
              onChange={handleInfoChange}
              className="outline-[1px] outline-[#d6d9e6] focus-within:outline focus-within:outline-[#473dff] hover:outline-[#473dff] text-[#02295a] font-bold transition cursor-pointer rounded w-full pl-[0.7rem] py-[0.2rem] placeholder:text-[13px]"
              type="email"
              name="email"
              placeholder="e.g. loremipsum@lorem.com"
            />
          </div>
          <div className="mb-[1rem]">
            <div className="flex justify-between items-center">
              <label
                className="block mb-[0.3rem] text-[#02295a]"
                htmlFor="name"
              >
                Phone number
              </label>
              {errors.phoneNumber && (
                <p className="text-[red] text-[12px]">{errors.phoneNumber}</p>
              )}
            </div>
            <input
              onChange={handleInfoChange}
              type="number"
              name="phoneNumber"
              className="no-spinner outline-[1px] outline-[#d6d9e6] focus-within:outline focus-within:outline-[#473dff] hover:outline-[#473dff] text-[#02295a] font-bold transition cursor-pointer rounded w-full pl-[0.7rem] py-[0.2rem] placeholder:text-[13px]"
              placeholder="e.g. +234 567 876 890"
            />
          </div>
        </form>
        <div className="absolute right-0 bottom-5">
          <NextButton handleNextStep={handleNextStep}
          />
        </div>
      </div>
    </div>
  );
};
