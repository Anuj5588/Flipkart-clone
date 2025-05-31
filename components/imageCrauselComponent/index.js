import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import style from './index.module.css'

const NextJsCarousel = () => {
    const images = [
        {
            src: "https://rukminim2.flixcart.com/fk-p-flap/480/80/image/53dcf24ecc20bf27.jpg?q=20",
            legend: "Image 1",
        },
        {
            src: "https://rukminim2.flixcart.com/fk-p-flap/480/80/image/1c0f9d420302ebed.jpeg?q=20",
            legend: "Image 2",
        },
        {
            src: "https://rukminim2.flixcart.com/fk-p-flap/480/80/image/7f3cde58a30f6024.jpg?q=20",
            legend: "Image 3",
        },
        {
            src: "https://rukminim2.flixcart.com/fk-p-flap/480/80/image/ff72f0b262ab833e.jpeg?q=20",
            legend: "Image 4",
        },
    ];

    return (
        <div className={`${style.parent}`}>
            <Carousel 
                autoPlay 
                infiniteLoop 
                interval={5000} // Time between slides (in ms)
                transitionTime={1000} // Transition speed (in ms)
                showThumbs={false} 
                showStatus={false}
                swipeable 
                emulateTouch>
                {images.map((image, index) => (
                    <div className={`${style.crausel}`}  key={index}>
                        <img src={image.src} alt={`image${index + 1}`} />
                        {/* <p className="legend">{image.legend}</p> */}
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default NextJsCarousel;
