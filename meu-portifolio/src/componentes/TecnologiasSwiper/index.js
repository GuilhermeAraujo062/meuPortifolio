import './TecnologiasSwiper.css';
import { register } from "swiper/element/bundle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState, useEffect } from 'react';

import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


register();

const TecnologiasSwiper = () => {

    const [slidePerView, setSlidePerView] = useState(5);
    const data = [
        {id: '1', icone: <FaHtml5 className='icons icon-html'/>},
        {id: '2', icone: <IoLogoCss3 className='icons icon-css'/>},
        {id: '3', icone: <IoLogoJavascript className='icons icon-js'/>},
        {id: '4', icone: <FaReact className='icons'/>},
        {id: '5', icone: <FaNodeJs className='icons icon-node'/>}
    ]

    useEffect ( () => {
        function handResize() {
            if (window.innerWidth < 380) {
                setSlidePerView(1);
            } else if (window.innerWidth < 660) {
                setSlidePerView(2);
            } else if (window.innerWidth < 770) {
                setSlidePerView(3);
            } else {
                setSlidePerView(5);
            }
        }

        handResize();

        window.addEventListener("resize", handResize);

        return () => {
            window.removeEventListener("resize", handResize);
        }
    }, [])

    return (
        <div className='container'>
            <h1 className='title'>Tecnologias</h1>

            <Swiper
                slidesPerView={slidePerView}
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