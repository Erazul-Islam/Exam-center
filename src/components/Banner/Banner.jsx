/* eslint-disable react/no-unescaped-entities */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion"



const Banner = () => {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 3000,
        cssEase: "linear"
    };

    return (
        <div>
            <div className="slider-containe mt-12">
                <Slider {...settings}>
                    <div>
                        <img src="https://i.ibb.co/ZJ9dvM6/1.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://i.ibb.co/XZrV8S1/Untitle.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://i.ibb.co/FzNrzLx/Untitled.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://i.ibb.co/PT3XWNw/4.jpg" alt="" />
                    </div>
                </Slider>
            </div>
            <div className="text-center">
                <motion.p initial={{opacity:0, scale:0.5}} animate={{opacity:2, scale:1}} transition={{duration: 1}} className="text-xl mt-14 font-bold text-white lg:ml-36 lg:mr-36"><span className="text-yellow-400">Welcome to TestTrove</span>, your ultimate destination for online exam preparation. <br />
                    Whether you're gearing up for college admissions, professional certifications, or academic assessments, <br />
                    we've got you covered. Join thousands of students and professionals who trust <span className="text-yellow-400">TestTrove for their exam success.</span></motion.p>
            </div>
        </div>
    );
};

export default Banner;