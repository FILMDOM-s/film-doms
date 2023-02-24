import { SwiperSlide } from "swiper/react"
import Image from "next/image"

function Slide({type, title, src}:{type:string, title:string, src:string}){
    return (
        <SwiperSlide >
            <div className="relative bg-black w-full h-full flex flex-col justify-center items-center">
                <div>{}</div>
                <Image width={200} height={300} src={src} alt=""></Image>
            </div>
        </SwiperSlide>
    )
}

export default Slide