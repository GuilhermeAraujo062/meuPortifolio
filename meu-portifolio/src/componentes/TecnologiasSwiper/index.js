import './TecnologiasSwiper.css';
import { register } from "swiper/element/bundle";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";

register();

const TecnologiasSwiper = () => {

    const data = [
        {id: '1', icone: <FaHtml5 className='icons icon-html'/>},
        {id: '2', icone: <IoLogoCss3 className='icons icon-css'/>},
        {id: '3', icone: <IoLogoJavascript className='icons icon-js'/>},
        {id: '4', icone: <FaReact className='icons'/>},
        {id: '5', icone: <FaNodeJs className='icons icon-node'/>}
    ]

    return (
        <div className='container'>
            <h1 className='title'>Tecnologias</h1>

            <Swiper
                slidesPerView={5}
                pagination={{clickable:true}}
                navigation
            >
                {data.map( (item) => (
                    <SwiperSlide key={item.id}>
                        <div className='p'>{item.icone}</div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default TecnologiasSwiper;