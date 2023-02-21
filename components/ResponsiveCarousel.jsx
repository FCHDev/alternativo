import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from "react-responsive-carousel";
import {useEffect, useState} from "react";
import {onValue, ref} from "firebase/database";
import {db} from "../services/firebase-config";

export default function ResponsiveCarousel() {
    const [advices, setAdvices] = useState([]);
    const [autoPlay, setAutoPlay] = useState(false);


    useEffect(() => {
        onValue(ref(db), (snapshot) => {
            const data = snapshot.val();
            if (data !== null) {
                Object.values([data]).map((item) => {
                    setAdvices(Object.values(item));
                    setAutoPlay(true)
                    console.log("🔥🔥🔥🔥 Firebase is called 🔥🔥🔥🔥");
                });
            } else {
                throw new Error("Il y a un souci");
            }
        });
        return () => {
            // cleanup code
        }
    }, []);

    return (
        <div
            className="flex flex-col justify-center px-5 py-3 bg-[#FFEBEB] bg-opacity-80 sm:bg-white mx-auto mb-10 max-w-[98vw] h-auto md:h-[460px] md:max-w-[900px] rounded-2xl">
            <Carousel
                infiniteLoop={true}
                autoPlay={autoPlay}
                interval={3000}
                centerMode={true}
                centerSlidePercentage={100}
                showArrows={false}
                showStatus={false}
                showThumbs={false}
                showIndicators={false}
                dynamicHeight={false}
                emulateTouch={false}
                stopOnHover={false}
            >
                {advices.map((comment) => (
                    <div key={comment.id} className="avis-quotes flex flex-col justify-around">
                        <h2 className="text-[#174A5B] text-lg title-font font-medium lg:text-2xl mb-5">
                            {comment.title}
                        </h2>
                        <q className="leading-relaxed h-max my-10 text-base paragraphe lg:text-xl italic">
                            {comment.body}
                        </q>
                        <>
                            <div className="flex justify-end red-dark font-bold mt-10">
                                {comment.author}
                            </div>
                            <div className="flex justify-end text-[#174A5B] text-sm font-bold italic">
                                {comment.city}
                            </div>
                        </>
                    </div>
                ))}
            </Carousel>
        </div>
    );
}