import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Icon1 from '../../public/Group 82.png'

export default function review() {
  return (
    <div className="flex flex-col items-stretch px-5">
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
          <button className="text-blue-950 text-center text-3xl whitespace-nowrap justify-center items-stretch shadow-sm bg-white mt-5 px-9 py-6 rounded-[30px] border-[3.6px] border-solid border-blue-950 max-md:px-5">
            EXPLORE
          </button>
        </div>
      </div>
      <div className="flex flex-col items-stretch w-[41%] ml-5 max-md:w-full max-md:ml-0">
        <Image
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/70babcd4f644619ba6504b7aa625eaca4c6b5e56639bc309327d363fdb180da4?apiKey=718f8907f9624113b768d97c01c705e6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/70babcd4f644619ba6504b7aa625eaca4c6b5e56639bc309327d363fdb180da4?apiKey=718f8907f9624113b768d97c01c705e6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/70babcd4f644619ba6504b7aa625eaca4c6b5e56639bc309327d363fdb180da4?apiKey=718f8907f9624113b768d97c01c705e6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/70babcd4f644619ba6504b7aa625eaca4c6b5e56639bc309327d363fdb180da4?apiKey=718f8907f9624113b768d97c01c705e6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/70babcd4f644619ba6504b7aa625eaca4c6b5e56639bc309327d363fdb180da4?apiKey=718f8907f9624113b768d97c01c705e6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/70babcd4f644619ba6504b7aa625eaca4c6b5e56639bc309327d363fdb180da4?apiKey=718f8907f9624113b768d97c01c705e6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/70babcd4f644619ba6504b7aa625eaca4c6b5e56639bc309327d363fdb180da4?apiKey=718f8907f9624113b768d97c01c705e6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/70babcd4f644619ba6504b7aa625eaca4c6b5e56639bc309327d363fdb180da4?apiKey=718f8907f9624113b768d97c01c705e6&"
          className="aspect-[1.37] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
          alt=""
        />
      </div>
    </div>
  </div>
  <div className="flex flex-col items-stretch px-5">
    <div className="text-blue-950 text-center text-6xl italic leading-[54px] tracking-[16px] self-center max-md:max-w-full max-md:text-4xl max-md:leading-9"> WHY <span className="italic">CHOOSE</span> </div>
    <div className="text-blue-950 text-opacity-50 text-center text-2xl self-center max-w-[821px] mt-5 max-md:max-w-full"> Lorem ipsum dolor sit amet consectetur. Quis sed sed magna mattis et. Vulputate ut eu quam turpis vulputate proin. </div>
    <form className="w-full mt-16 max-md:max-w-full max-md:mt-10">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <section className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
          <div className="shadow-sm bg-white flex grow flex-col items-center w-full px-7 py-11 rounded-[39.249px] border-[1.57px] border-solid border-blue-950 max-md:mt-10 max-md:px-5">
            <Image
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2e5ff73a0864eb2be9b42e9f0c722e6d9f1210fd6a126da08dd57218b5fafac4?apiKey=718f8907f9624113b768d97c01c705e6&"
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
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2e5ff73a0864eb2be9b42e9f0c722e6d9f1210fd6a126da08dd57218b5fafac4?apiKey=718f8907f9624113b768d97c01c705e6&"
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
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2e5ff73a0864eb2be9b42e9f0c722e6d9f1210fd6a126da08dd57218b5fafac4?apiKey=718f8907f9624113b768d97c01c705e6&"
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
  <div className="shadow-sm bg-white flex flex-col justify-center items-stretch px-16 py-12 rounded-[48.739px] border-[1.95px] border-solid border-blue-950 max-md:px-5">
    <div className="mt-1.5 mb-1 max-md:max-w-full max-md:mr-2">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="flex flex-col items-stretch w-[43%] max-md:w-full max-md:ml-0">
          <Image
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9ab2c9df80a2279d64c77967b1c9a51ccd272bd293de4a413910089ea3a6db95?apiKey=718f8907f9624113b768d97c01c705e6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9ab2c9df80a2279d64c77967b1c9a51ccd272bd293de4a413910089ea3a6db95?apiKey=718f8907f9624113b768d97c01c705e6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9ab2c9df80a2279d64c77967b1c9a51ccd272bd293de4a413910089ea3a6db95?apiKey=718f8907f9624113b768d97c01c705e6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9ab2c9df80a2279d64c77967b1c9a51ccd272bd293de4a413910089ea3a6db95?apiKey=718f8907f9624113b768d97c01c705e6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9ab2c9df80a2279d64c77967b1c9a51ccd272bd293de4a413910089ea3a6db95?apiKey=718f8907f9624113b768d97c01c705e6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9ab2c9df80a2279d64c77967b1c9a51ccd272bd293de4a413910089ea3a6db95?apiKey=718f8907f9624113b768d97c01c705e6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9ab2c9df80a2279d64c77967b1c9a51ccd272bd293de4a413910089ea3a6db95?apiKey=718f8907f9624113b768d97c01c705e6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9ab2c9df80a2279d64c77967b1c9a51ccd272bd293de4a413910089ea3a6db95?apiKey=718f8907f9624113b768d97c01c705e6&"
            className="aspect-[1.58] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
            alt=""
          />
        </div>
        <div className="flex flex-col items-stretch w-[57%] ml-5 max-md:w-full max-md:ml-0">
          <div className="flex flex-col my-auto py-px items-start max-md:max-w-full max-md:mt-10">
            <div className="flex items-center justify-between gap-5">
              <Image
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e033c40082eca2a67deb195125ffe245f102f18db0274c0b04eaef42a3c26ee0?apiKey=718f8907f9624113b768d97c01c705e6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e033c40082eca2a67deb195125ffe245f102f18db0274c0b04eaef42a3c26ee0?apiKey=718f8907f9624113b768d97c01c705e6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e033c40082eca2a67deb195125ffe245f102f18db0274c0b04eaef42a3c26ee0?apiKey=718f8907f9624113b768d97c01c705e6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e033c40082eca2a67deb195125ffe245f102f18db0274c0b04eaef42a3c26ee0?apiKey=718f8907f9624113b768d97c01c705e6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e033c40082eca2a67deb195125ffe245f102f18db0274c0b04eaef42a3c26ee0?apiKey=718f8907f9624113b768d97c01c705e6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e033c40082eca2a67deb195125ffe245f102f18db0274c0b04eaef42a3c26ee0?apiKey=718f8907f9624113b768d97c01c705e6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e033c40082eca2a67deb195125ffe245f102f18db0274c0b04eaef42a3c26ee0?apiKey=718f8907f9624113b768d97c01c705e6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e033c40082eca2a67deb195125ffe245f102f18db0274c0b04eaef42a3c26ee0?apiKey=718f8907f9624113b768d97c01c705e6&"
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
