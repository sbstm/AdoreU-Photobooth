import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Review1 from '../../../public/review1.png'
import Card from '../../../public/card.png'
import Testymon from '../../../public/testimon.png'

export default function review() {
  return (
    <div className="flex flex-col items-stretch px-5 p-10 gap-[100px]">
  <div>
    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
      <div className="flex flex-col items-stretch w-[59%] max-md:w-full max-md:ml-0">
        <div className="flex flex-col my-auto px-5 items-start max-md:max-w-full max-md:mt-10">
          <h1 className="text-blue-950 text-6xl leading-[54px] tracking-[16px] self-stretch max-md:max-w-full max-md:text-4xl max-md:leading-9" >
            <span className="italic">ELEVATE</span>
          </h1>
          <p className="text-blue-950 text-opacity-50 text-2xl leading-6 self-stretch mt-5 max-md:max-w-full">
            AdoreU, your trusted photobooth services provider. Let’s see our documentation, here!
          </p>
          <Link href="/review/nilai">
          <button className="text-blue-950 text-center text-3xl whitespace-nowrap justify-center items-stretch shadow-sm bg-white mt-5 px-9 py-6 rounded-[30px] border-[3.6px] border-solid border-blue-950 max-md:px-5">
            EXPLORE
          </button>
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-stretch w-[41%] ml-5 max-md:w-full max-md:ml-0">
        <Image
          src={Review1}
          loading="lazy"
          className="aspect-[1.37] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
          alt=""
        />
      </div>
    </div>
  </div>
  <div className="flex flex-col items-stretch px-5 m-10">
    <div className="text-blue-950 text-center text-6xl italic leading-[54px] tracking-[16px] self-center max-md:max-w-full max-md:text-4xl max-md:leading-9"> WHY <span className="italic">CHOOSE</span> </div>
    <div className="text-blue-950 text-opacity-50 text-center text-2xl self-center max-w-[821px] mt-5 max-md:max-w-full"> Lorem ipsum dolor sit amet consectetur. Quis sed sed magna mattis et. Vulputate ut eu quam turpis vulputate proin. </div>
    <form className="w-full mt-16 max-md:max-w-full max-md:mt-10">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <section className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
          <div className="shadow-sm bg-white flex grow flex-col items-center w-full px-7 py-11 rounded-[39.249px] border-[1.57px] border-solid border-blue-950 max-md:mt-10 max-md:px-5">
            <Image
            src={Card}
              loading="lazy"
              className="aspect-square object-contain object-center w-20 overflow-hidden max-w-full"
              alt=""
            />
            <div className="text-blue-950 text-center text-3xl leading-8 tracking-[8px] self-stretch mt-12 max-md:mt-10"> PERSONALIZED <br /> SERVICES </div>
            <div className="text-blue-950 text-opacity-80 text-center text-2xl self-stretch mt-5"> Lorem ipsum dolor sit amet consectetur. Quis sed sed magna mattis et. Vulputate ut eu quam turpis vulputate. </div>
          </div>
        </section>
        <section className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
          <div className="shadow-sm bg-white flex grow flex-col items-center w-full px-7 py-11 rounded-[39.249px] border-[1.57px] border-solid border-blue-950 max-md:mt-10 max-md:px-5">
            <Image
            src={Card}
              loading="lazy"
              className="aspect-square object-contain object-center w-20 overflow-hidden max-w-full"
              alt=""
            />
            <div className="text-blue-950 text-center text-3xl leading-8 tracking-[8px] self-stretch mt-12 max-md:mt-10"> PERSONALIZED <br /> SERVICES </div>
            <div className="text-blue-950 text-opacity-80 text-center text-2xl self-stretch mt-5"> Lorem ipsum dolor sit amet consectetur. Quis sed sed magna mattis et. Vulputate ut eu quam turpis vulputate. </div>
          </div>
        </section>
        <section className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
          <div className="shadow-sm bg-white flex grow flex-col items-center w-full pt-12 pb-6 px-7 rounded-[39.249px] border-[1.57px] border-solid border-blue-950 max-md:mt-10 max-md:px-5">
            <Image
              loading="lazy"
            src={Card}

              className="aspect-square object-contain object-center w-20 overflow-hidden max-w-full"
              alt=""
            />
            <div className="text-blue-950 text-center text-3xl leading-8 tracking-[8px] self-stretch mt-12 max-md:mt-10"> PERSONALIZED <br /> SERVICES </div>
            <div className="text-blue-950 text-opacity-80 text-center text-2xl self-stretch mt-4"> Lorem ipsum dolor sit amet consectetur. Quis sed sed magna mattis et. Vulputate ut eu quam turpis vulputate. </div>
          </div>
        </section>
      </div>
    </form>
  </div>
  <div className="shadow-sm bg-white flex flex-col justify-center items-stretch px-16 py-12 rounded-[48.739px] border-[1.95px] border-solid border-blue-950 max-md:px-5 m-10">
    <div className="mt-1.5 mb-1 max-md:max-w-full max-md:mr-2">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="flex flex-col items-stretch w-[43%] max-md:w-full max-md:ml-0">
          <Image
            loading="lazy"
            src={Testymon}

            className="aspect-[1.58] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
            alt=""
          />
        </div>
        <div className="flex flex-col items-stretch w-[57%] ml-5 max-md:w-full max-md:ml-0">
          <div className="flex flex-col my-auto py-px items-start max-md:max-w-full max-md:mt-10">
            <div className="flex items-center justify-between gap-5">
              <Image
            src={Testymon}
            loading="lazy"
                className="aspect-[1.02] object-contain object-center w-16 overflow-hidden shrink-0 max-w-full my-auto"
                alt=""
              />
              <div className="self-stretch flex grow basis-[0%] flex-col items-stretch">
                <div className="text-blue-950 text-4xl whitespace-nowrap">Muhammad Fatah</div>
                <div className="text-blue-950 text-opacity-50 text-3xl mt-3">16/12/2023</div>
              </div>
            </div>
            <div className="text-blue-950 text-justify text-3xl self-stretch mt-7 max-md:max-w-full">Lorem ipsum dolor sit amet consectetur. Quis sed sed magna mattis et. Vulputate ut eu quam turpis vulputate proin. Turpis dictum quam enim at enim suspendisse scelerisque volutpat viverra. Sapien ultrices hac faucibus nibh maecenas urna sagittis faucibus tristique.</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}
