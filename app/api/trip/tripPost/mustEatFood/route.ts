import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";

export const POST = async () => {
  const response = await prisma.mustEatFood.createMany({
    data: [
      {
        title: "Hainanese Chicken Rice",
        description:
          "Хайнан тахианы будаа нь зөөлөн тахианы мах, үнэрт будаа ашиглан хийдэг Сингапурын алдартай хоол бөгөөд амттай, тайтгаруулдаг, бүх насны хүмүүст тохиромжтой.",
        images: [
          "https://www.seriouseats.com/thmb/OVPH7U5DQfboRHeAJ-8VH4DBGBQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/hainanese-chicken-rice-set-recipe-hero-Fred-Hardy-d04b51b0338144dc8549c89802b721e4.JPG",
        ],
        factId: "JQXYbTdhZm7Rk6zhVfXQy",
      },
      {
        title: "Stroopwafel",
        description:
          "Гудамжны зах дээрээс шинэ, халуун струпвафель авах нь хамгийн алдартай бөгөөд бараг бүх хүнд таалагддаг. Хэрвээ зөвхөн нэг Нидерландын хоол идэх гэж байвал үүнийг сонгоорой.",
        images: [
          "https://offloadmedia.feverup.com/secretamsterdam.com/wp-content/uploads/2024/08/06134602/Couverture-BXL-1-1024x576.jpg",
        ],
        factId: "6PHIk29Q72CyR3cLhtqp6",
      },
      {
        title: "Sushi",
        description:
          "Гудамжны зах дээрээс шинэ, халуун струпвафель авах нь хамгийн алдартай бөгөөд бараг бүх хүнд таалагддаг. Хэрвээ зөвхөн нэг Нидерландын хоол идэх гэж байвал үүнийг сонгоорой.",
        images: [
          "https://images.contentstack.io/v3/assets/bltcedd8dbd5891265b/blt6542458a3d1e8c6f/664cbc3d213dc5f7fd48a20e/origin-of-sushi-hero.jpeg?q=70&width=3840&auto=webp",
        ],
        factId: "BXkrL1R13PX8NgKI9fDZ-",
      },
      {
        title: "Wiener Schnitzel",
        description:
          "Австрийн хамгийн алдартай хоол нь гурилаар бүрж шарсан үхрийн эсвэл гахайн махаар хийдэг бөгөөд хөвсгөр текстур, энгийн амтаараа дуртай байдаг.",
        images: [
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLLR6aBy-DbxQjpOJgbFJRYh1MiOZm68Xq3w&s",
        ],
        factId: "CdG158pIvAzbXbLoCN1SD",
      },
      {
        title: " Mas Huni",
        description:
          "Мальдивын хамгийн алдартай уламжлалт хоол нь туна загас, кокос, сонгино, чинжүүгээр хийгддэг бөгөөд ихэвчлэн өглөөний хоолонд иддэг.",
        images: [
          "https://img.freepik.com/premium-photo/mas-huni-traditional-maldivian-breakfast-tuna-coconut-onion-chili-with-chapati-tortillas-close-up_186456-3001.jpg",
        ],
        factId: "E9H9XwNKRPtmI05FKphOG",
      },
      {
        title: "Croissant",
        description:
          "Францын хамгийн алдартай бялуу, давслаг, хөвсгөр бүтэцтэй, энгийн өглөөний хоол эсвэл зууш болгон дэлхий даяар эдэлдэг.",
        images: [
          "https://assets.bonappetit.com/photos/68e6b4a316c63f9625380e02/1:1/w_2560%2Cc_limit/1025_Dominique-Ansel-RECIPE.jpg",
        ],
        factId: "EfAfz8NeeBcXa6tNFGY4K",
      },
      {
        title: "Al Machboos",
        description:
          "Амттай хувилсан будаа болон мах эсвэл далайн хоолоор хийдэг Эмиратын алдартай хоол бөгөөд баялаг үнэр, уламжлалт амтаараа алдартай.",
        images: [
          "https://foreignfork.com/wp-content/uploads/2022/02/Machboos-14.jpg",
        ],
        factId: "GsQRDy-ZO21ntz4BdONjl",
      },
      {
        title: "Pad Thai",
        description:
          "“Тайландын хамгийн алдартай хоол нь хуурсан будааны гоймон, далайн гаралтай бүтээгдэхүүн эсвэл тахиа, өндөг, амтлаг-халуун соустай хийдэг.",
        images: [
          "https://inquiringchef.com/wp-content/uploads/2023/02/Authentic-Pad-Thai_square-1908.jpg",
        ],
        factId: "Ij3WPE-eERFyq1lBKl3Eb",
      },

      {
        title: "Kebabs",
        description:
          "Туркийн хамгийн алдартай хоол нь шарах эсвэл жигнэсэн махаар хийгддэг бөгөөд ихэвчлэн талх, будаа эсвэл ногоотой хамт үйлчилдэг, утаатай амтаараа алдартай.",
        images: [
          "https://joyfoodsunshine.com/wp-content/uploads/2022/06/chicken-kebabs-recipe-1.jpg",
        ],
        factId: "JH57GRX4zYNSbqq0BxteU",
      },

      {
        title: "Hamburger",
        description:
          "Америкийн хамгийн алдартай хоол нь буланд тавьсан шөлтэй үхрийн махан зуурмаг, төрөл бүрийн дээгүүртэй, амт болон тохиромжтой байдалараа алдартай.",
        images: [
          "https://biteswithbri.com/wp-content/uploads/2021/02/HamburgerPattyRecipe04.jpg",
        ],
        factId: "Qju-8FcTFPzZOX5Xfn5af",
      },
      {
        title: "Meat Pie",
        description:
          "Австралийн уламжлалт таатай хоол, дүүргэсэн мах, шөлтэй амттай бялуу бөгөөд тэжээллэг, сэтгэл ханамжтай амтаараа алдартай.",
        images: [
          "https://www.allrecipes.com/thmb/ITzMWta04gWy7ri2zIWFYfMvr54=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-76296-Meat-Pie-DDMFS-4x3-beauty-f987781548f14bfcb0cb282f598e4e60.jpg",
        ],
        factId: "UrMobKTJnbLYfWREcJXTS",
      },
      {
        title: "Taiwanese Beef Noodle Soup",
        description:
          "Тайванийн хамгийн алдартай хоол нь шарсан үхрийн мах, амтлаг шөл, зөөлөн гоймонтой бөгөөд тайтгаруулах амтаараа алдартай.",
        images: [
          "https://redhousespice.com/wp-content/uploads/2025/10/taiwanese-beef-noodle-soup-3.jpg",
        ],
        factId: "YaKTOubdeIT1EJFLnWJpN",
      },
      {
        title: "Fish and Chips",
        description:
          "Нэгдсэн Вант улсын алдартай хоол нь гурилаар бүрж шарсан загас болон зузаан шарсан төмстэй, хөвсгөр ба таатай амтаараа алдартай.",
        images: [
          "https://cookingwithcocktailrings.com/wp-content/uploads/2023/05/Fish-and-chips-with-tartar-sauce-64.jpg",
        ],
        factId: "a2pfTGcgrAJXE-xLZKLFS",
      },
      {
        title: "Pizza Margherita",
        description:
          "“Итали улсын хамгийн алдартай хоол нь нимгэн царцсан талстай, шинэхэн улаан лооль, моцарелла бяслаг, базиликтай, энгийн бөгөөд амттай амтаараа алдартай.",
        images: [
          "https://ooni.com/cdn/shop/articles/20220211142347-margherita-9920_ba86be55-674e-4f35-8094-2067ab41a671.jpg?v=1737104576&width=1080",
        ],
        factId: "drztlni6k_X56iXggsXHT",
      },
      {
        title: "Kimchi",
        description:
          "БНСУ-ын алдартай хоол нь исгэсэн халуун ногоотой байцаа бөгөөд хүчтэй, хүчиллэг, умами амтаараа алдартай.",
        images: [
          "https://delishglobe.com/wp-content/uploads/2024/12/Kimchi-Fermented-Vegetables.png",
        ],
        factId: "dvqh1Lr_1dUL1xE0icZ5Y",
      },
      {
        title: "Paella",
        description:
          "Испанийн хамгийн алдартай хоол, шафрантай, далайн гаралтай бүтээгдэхүүн, тахиа, ногоотой амттай будаа, баялаг үнэртэй амттайгаараа алдартай.",
        images: [
          "https://www.goya.com/wp-content/uploads/2023/10/goya-shrimp-paella.jpg",
        ],
        factId: "m_PIq2Cyh6z7vg-FSWZW0",
      },
      {
        title: "Buuz",
        description:
          "онголын хамгийн алдартай уламжлалт хоол, мах, сонгино зэргийг дүүргэсэн амтат бууз, ихэвчлэн Цагаан сар зэрэг баяр ёслолд иддэг.",
        images: [
          "https://alchetron.com/cdn/buuz-cb077f8b-b9f9-4b76-82ae-d6c9a04093a-resize-750.jpeg",
        ],
        factId: "wNl56nGXuGVjCtAYO_CLo",
      },
      {
        title: "Nasi Goreng",
        description:
          "Индонезийн хамгийн алдартай хоол, ногоо, мах эсвэл далайн хоолтой амттай хуурсан будаа, амттай, хоол хүнсэнд таатай.",
        images: [
          "https://www.andy-cooks.com/cdn/shop/articles/20240903050510-andy-20cooks-20-20nasi-20goreng-20recipe.jpg?v=1725927823",
        ],
        factId: "x8T-p2Gqq6PxcUPpIBbW6",
      },
      {
        title: "Peking Duck",
        description:
          "Хятадын хамгийн алдартай хоол, арьс нь хөвсгөр, мах нь зөөлөн шарсан нугасны мах, амт нь өвөрмөц, баялаг.",
        images: [
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdZuyXqG2TXADu5m8mbDRG_6l4VqSWj4UXtg&s",
        ],
        factId: "ys5HzKAbzOsfGLZGKIGTV",
      },
      {
        title: "Borscht",
        description:
          "Оросын хамгийн алдартай хоол нь манжин, цагаан лууван, мах болон бусад ногоогоор хийдэг улаан шөл бөгөөд амт нь баялаг, тайтгаруулдаг.",
        images: [
          "https://www.allrecipes.com/thmb/LTMiS5Tk0Uf63rMvtkzwB96Boec=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/84450-ukranian-red-borscht-soup-ddmfs-0266-3x4-hero-890c67fee10b4b0e828f152d22888a56.jpg",
        ],
        factId: "2KIJMB2kYklvLbTo5GNkd",
      },
    ],
  });
  return NextResponse.json(response);
};
