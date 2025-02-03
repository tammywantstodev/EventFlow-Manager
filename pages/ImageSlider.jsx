import React, {useState, useEffect} from "react";
import image1 from "../Assets/homeimages/1.png";
import image2 from '../Assets/homeimages/2.png';
import image3 from '../Assets/homeimages/3.png';
import image4 from '../Assets/homeimages/4.png';
import image5 from '../Assets/homeimages/5.png';

//Over achiever in group 5 ended us adding the image sliders just to test the waters
function ImageSlider(){
    const images = [image1, image2, image3, image4, image5];

    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto slide every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval); 
    }, []);

    return (
        <div className="image-slider">
            <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="slide-image" />
        </div>
    );
}
export default ImageSlider;