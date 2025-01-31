import React, {useState, useEffect} from "react";

function ImageSlider(){
    const images = [
        "Assets/homeimages/1.png",
        "Assets/homeimages/2.png",
        "Assets/homeimages/3.png",
        "Assets/homeimages/4.png",
        "Assets/homeimages/5.png"
    ];

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