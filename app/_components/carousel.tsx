"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";

export const CarouselFunc = ({ data }: { data: string[] }) => {
  const autoplay = useRef(
    Autoplay({
      delay: 2000,
      stopOnInteraction: false, // ⬅️ заавал false
    })
  );

  return (
    <Carousel
      plugins={[autoplay.current]}
      onMouseEnter={() => autoplay.current.stop()}
      onMouseLeave={() => autoplay.current.reset()}
      className="h-[400px] w-full overflow-hidden rounded-3xl shadow-lg"
    >
      <CarouselContent className="h-full">
        {data.map((postImg, index) => {
          return (
            <CarouselItem key={index} className="h-full">
              <div
                className="h-[400px] bg-cover bg-center"
                style={{ backgroundImage: `url(${postImg})` }}
              />
            </CarouselItem>
          );
        })}
      </CarouselContent>

      <CarouselPrevious hidden />
      <CarouselNext hidden />
    </Carousel>
  );
};
