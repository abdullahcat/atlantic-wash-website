import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import { PropsWithChildren, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

type Props = { options?: EmblaOptionsType } & PropsWithChildren;

const Slider = ({ children, options }: Props) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        slidesToScroll: 1,
        align: "start",
        ...options,
    });

    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(false);

    useEffect(() => {
        if (!emblaApi) return;

        const onSelect = () => {
            setCanScrollNext(emblaApi.canScrollNext());
            setCanScrollPrev(emblaApi.canScrollPrev());
        };

        emblaApi.on("select", onSelect);
        onSelect();

        return () => {
            emblaApi.off("select", onSelect);
        };
    }, [emblaApi]);

    return (
        <div className="relative bg-atlantic-white">
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex gap-0">{children}</div>
            </div>

            <button
                className={`absolute top-1/2 py-5 left-0 transform -translate-y-1/2 p-2 bg-black   ${!canScrollPrev ? 'opacity-50' : ''}`}
                onClick={() => emblaApi && emblaApi.scrollPrev()}
                disabled={!canScrollPrev}
            >
                <FontAwesomeIcon icon={faArrowLeft} className="text-white h-5" />
            </button>

            <button
                className={`absolute top-1/2 py-5 right-0 transform -translate-y-1/2 p-2 bg-black  ${!canScrollNext ? 'opacity-50' : ''}`}
                onClick={() => emblaApi && emblaApi.scrollNext()}
                disabled={!canScrollNext}
            >
                <FontAwesomeIcon icon={faArrowRight} className="text-white h-5" />
            </button>
        </div>
    );
};

export default Slider;
