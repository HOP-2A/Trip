// import * as React from "react";

// import { Card, CardContent } from "@/components/ui/card";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
// import Autoplay from "embla-carousel-autoplay";

// export function CarouselOrientation(data: { data: string[] }) {
//   const plugIn = React.useRef(
//     Autoplay({ delay: 2000, stopOnInteraction: true })
//   );
//   return (
//     <div>
//       <Carousel
//         plugins={[plugIn.current]}
//         onMouseEnter={plugIn.current.stop}
//         onMouseLeave={plugIn.current.reset}
//         className="w-full max-w-xs"
//       >
//         <CarouselContent>
//           {post.images.map((postImg, index) => (
//             <CarouselItem key={index}>
//               <div className="p-1">
//                 <img src={postImg} />
//               </div>
//             </CarouselItem>
//           ))}
//         </CarouselContent>
//         <CarouselPrevious hidden={true} />
//         <CarouselNext hidden={true} />
//       </Carousel>
//     </div>
//   );
// }
