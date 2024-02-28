import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const Banner = () => {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };

    return (
        <div>
            <div className="slider-containe">
                <Slider {...settings}>
                    <div>
                       <h3 className="bg-red-500">1</h3>
                    </div>
                    <div>
                        <h3 className="bg-yellow-500">2</h3>
                    </div>
                    <div>
                        <h3 className="bg-red-500">3</h3>
                    </div>
                    <div>
                        <h3 className="bg-yellow-500">4</h3>
                    </div>
                    <div>
                        <h3 className="bg-red-500">5</h3>
                    </div>
                    <div>
                        <h3 className="bg-yellow-500">6</h3>
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default Banner;