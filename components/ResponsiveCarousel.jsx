import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from "react-responsive-carousel";
import {comments} from "../public/comments.json";

export default function ResponsiveCarousel() {
    const {swiper} = comments;
    console.log(comments)

    return (
        <div className="container px-5 mx-auto mb-10">
            <Carousel
                showArrows={false}
                autoPlay={true}
                showStatus={false}
                infiniteLoop={true}
                dynamicHeight={false}
                showThumbs={false}
                emulateTouch={false}
            >
                {swiper.map((comment) => (
                    <div key={comment.id} className="avis-quotes max-w-[320px] md:max-w-[900px]">
                        <h2 className="text-gray-900 text-lg title-font font-medium lg:text-2xl mb-5">
                            {comment.title}
                        </h2>
                        <q className="leading-relaxed my-10 text-base paragraphe lg:text-xl italic">
                            {comment.text}
                        </q>
                        <div className="red-dark font-bold mt-5 flex justify-end">{comment.author}</div>
                        <div className="flex justify-end text-sm font-bold italic">{comment.city}</div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
}