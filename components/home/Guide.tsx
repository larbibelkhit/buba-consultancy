import Image from "next/image"

const Guide = () => {
  return (
    <section className="flexCenter flex-col">
        <div className="w-full pb-14">
            <p className="regular-18 uppercase">we are here for you</p>
            <div className='flex flex-wrap justify-between gap-5 lg:gap-10'>
                <h2 className='bold-40 lg:bold-64 xl:max-w-[390px]'>Don't Go Into a New Venture On Your Own</h2>
                <p className='regular-16 xl:max-w-[520px]'>
                    We provide years of restaurant and hospitality expertise to guide you in the creation and expansion of new concepts, locally or even into international markets.
                    Our long or short term services provide business evaluations and comprehensive strategies for national and international growth.
                </p>
            </div>
        </div>
        <div className="flexCenter relative w-full">
            <Image src="/VillaSumosanRestaurant.jpg" alt='restaurant' width={1440} height={580} className='w-full object-cover object-center 2xl:rounded-5xl'/>
            <div className='absolute flex bg-red-700 py-8 pl-5 border border-white pr-7 gap-3 rounded-3xl shadow-md md:left-[5%] lg:top-20'>
                <div className='flexBetween flex-col'>
                    <div className='flex w-full flex-col'>
                        <div className='flexBetween w-full'>
                            <p className='regular-16 text-white'>Year</p>
                            <p className='bold-16 text-white'>2018</p>
                        </div>
                        <p className='bold-20 mt-2 text-white'>Villa Sumosan</p>
                    </div>
                    <div className='flex w-full flex-col mt-5'>
                        <p className='regular-16 text-white'>Location</p>
                        <h4 className='bold-20 mt-2 whitespace-nowrap text-white'>Moscow, Russia</h4>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Guide