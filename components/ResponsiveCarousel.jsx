import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from "react-responsive-carousel";
import {comments} from "../public/comments.json";

export default function ResponsiveCarousel() {
    const {swiper} = comments;
    console.log(comments)

    return (
        <div className="px-5 py-3 bg-[#FFEBEB] bg-opacity-80 mx-auto mb-10 max-w-[98vw] h-auto md:max-w-[900px] rounded-2xl">
            <Carousel
                infiniteLoop={true}
                autoPlay={true}
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
                {swiper.map((comment) => (
                    <div key={comment.id} className="avis-quotes">
                        <h2 className="text-[#174A5B] text-lg title-font font-medium lg:text-2xl mb-5">
                            {comment.title}
                        </h2>
                        <q className="leading-relaxed h-max my-10 text-base paragraphe lg:text-xl italic">
                            {comment.text}
                        </q>
                        <div className="flex justify-end red-dark font-bold mt-10">{comment.author}</div>
                        <div className="flex justify-end text-[#174A5B] text-sm font-bold italic">{comment.city}</div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
}