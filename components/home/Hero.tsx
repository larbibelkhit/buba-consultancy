import Button from "../Button"
import EarthCanvas from "./EarthCanvas"

const Hero = () => {
  return (
    <section className="flex flex-col-reverse gap-10 mt-5 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
        <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
            <h1 className="bold-52 lg:bold-88 capitalize">We transform your Vision into Reality</h1>
            <p className="regular-16 mt-6 xl:max-w-[520px] capitalize">We work closely with businesses for new and expansion projects around the world</p>
            <div className="flex flex-col mt-5 w-full gap-3 sm:flex-row">
                <Button title="Get In Touch" type="button" variant="btn_red"/>
            </div>
        </div>
        <div className="relative flex flex-1 items-start">
            <EarthCanvas />
        </div>
    </section>
  )
}

export default Hero