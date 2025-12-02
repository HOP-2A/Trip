import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const trips = [
    {
      title: "Tokyo Neon Escape",
      startDate: "2025-04-03",
      endDate: "2025-04-12",
      images: [
        "https://assets.cntraveller.in/photos/60ba13c3556f29fbec5f2281/master/pass/Tokyo-Shibuya-neon-lights.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH15TWv4KmOF0ClcnMKnfBK4DlLcA9r_u8Rg&s",
      ],
    },
    {
      title: "Bali Island",
      startDate: "2025-05-05",
      endDate: "2025-05-10",
      images: [
        "https://www.gap360.com/tpl/lib/img/private/media/kelingking-beach-guidebook.jpg",
        "https://www.globetrove.com/wp-content/uploads/2022/08/Islands-Near-Bali.jpg",
        "https://balitourism.in/wp-content/uploads/the-best-all-inclusive-islands-in-Bali.jpg",
      ],
    },
    {
      title: "Paris City of Lights",
      startDate: "2025-06-01",
      endDate: "2025-06-10",
      images: [
        "https://images.squarespace-cdn.com/content/v1/569e766e69492e9dd5373ef6/1552923494555-VJQQOZ9B3N4CT1FHF479/paris-night-photo-tour-013.jpg",
        "https://worldinparis.com/wp-content/uploads/2022/01/Place-du-Tertre-Night.jpg",
      ],
    },
    {
      title: "Seoul Urban Vibes",
      startDate: "2025-03-15",
      endDate: "2025-03-22",
      images: [
        "https://upload.wikimedia.org/wikipedia/commons/8/81/Seoul_%28175734251%29.jpeg",
        "https://scwcontent.affino.com/AcuCustom/Sitename/DAM/011/news-energy-jan18-seoul.jpg",
      ],
    },
    {
      title: "Bangkok Street Adventure",
      startDate: "2025-07-08",
      endDate: "2025-07-14",
      images: [
        "https://www.foodandwine.com/thmb/9wsyzbtRCcwCs7D0s37eBNpaubE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GT-Best-Global-City-for-Food-Bangkok-FT-BLOG0325-04-0c10093965174c6db724bd2bf9382607.jpg",
        "https://static.independent.co.uk/2025/01/03/14/newFile-12.jpg",
        "https://www.frasersproperty.com/content/dam/frasers-hospitality/english/properties/thailand/modena-by-fraser-bangkok/images/city-guide-(monthly-blog)/Wat%20Arun%20temple%20illuminated%20at%20night.jpeg",
      ],
    },
    {
      title: "Dubai Desert Luxury",
      startDate: "2025-08-02",
      endDate: "2025-08-08",
      images: [
        "https://www.seabookings.com/wp-content/uploads/sergey-pesterev-_VqyrvQi6do-unsplash.jpg",
        "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/60000/60518-Dubai-Desert-Conservation-Area.jpg",
      ],
    },
    {
      title: "Rome Timeless Journey",
      startDate: "2025-09-10",
      endDate: "2025-09-18",
      images: [
        "https://i.natgeofe.com/k/a6c9f195-de20-445d-9d36-745ef56042c5/OG_Colosseum_Ancient-Rome_KIDS_1122_3x2.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8zlN2MynhkvSeX452Oxe-heMUuK_3iJMPcQ&s",
        "https://visit-rome-in-italy.global.ssl.fastly.net/pics/ancient-rome/colosseum/colosseum-arena-rome-italy-38.jpg",
      ],
    },
    {
      title: "London Royal Getaway",
      startDate: "2025-10-05",
      endDate: "2025-10-12",
      images: [
        "https://res.cloudinary.com/aenetworks/image/upload/c_fill,ar_2,w_3840,h_1920,g_auto/dpr_auto/f_auto/q_auto:eco/v1/topic-london-gettyimages-760251843-feature?_a=BAVAZGID0",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSgCuIJ7u1akapg_oTUETWMgshpXdIaABugw&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9Ih5mTjk2-g80zJEaE3b86f_CDFejkdK-og&s",
      ],
    },
    {
      title: "Singapore Future Escape",
      startDate: "2025-11-01",
      endDate: "2025-11-07",
      images: [
        "https://i.natgeofe.com/k/95d61645-a0c7-470f-b198-74a399dd5dfb/singapore-city_3x2.jpg",
        "https://i.natgeofe.com/k/6af87ab7-b964-4f81-861a-8a831c65f5d9/ww-light-displays-trees.jpg?wp=1&w=1084.125&h=609",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKGYPeIi_NYAe586B3iBSx1n0u1m5K0rtEqw&s",
      ],
    },
    {
      title: "Khovsgol Great Lake",
      startDate: "2025-04-15",
      endDate: "2025-04-22",
      images: [
        "https://www.remotelands.com/remotenew1/dist/images/country/mongolia/city/13010821/b130108104.jpg",
        "https://images.surferseo.art/c7aa3eca-2138-4010-a4e2-a1623ecc7618.jpeg",
        "https://www.steppestravel.com/app/uploads/2019/07/lake-hovsgol-mountains-mongolia.jpg",
        "https://www.toursmongolia.com/uploads/5c9c89c5-f034-44e9-980c-4cd2a2f1e629-khovsgol%20lake%20mongolia.jpg",
        "https://www.explore.com/img/gallery/a-massive-lake-in-mongolia-with-caribbean-like-waters-is-a-paradise-for-outdoor-lovers/l-intro-1734437159.jpg",
      ],
    },
    {
      title: "Hong Kong Skyline Trip",
      startDate: "2025-05-20",
      endDate: "2025-05-27",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXG5BymH7ydCDpwDr5y2_uJP3fPEwKHdAHWQ&s",
        "https://cdn.i-scmp.com/sites/default/files/d8/images/canvas/2024/03/09/2e0c9793-9c10-494d-861d-e8ca9b89d22e_b1de99a1.jpg",
      ],
    },
    {
      title: "New York City Pulse",
      startDate: "2025-06-10",
      endDate: "2025-06-16",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn-LV1BGjK0nkbMsanOUIMTiftBbIrQNdYMA&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7uehxNnssEVHpUtw3vqjK_D5pfJ9pLh05rA&s",
        "https://res.cloudinary.com/dtljonz0f/image/upload/c_auto,ar_4:3,w_3840,g_auto/f_auto/q_auto/v1/shutterstock_329662223_ss_non-editorial_3_csm8lw?_a=BAVAZGE70",
      ],
    },
    {
      title: "Istanbul Cultural Blend",
      startDate: "2025-07-12",
      endDate: "2025-07-18",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgJ44R0qxk1u8tpza6P2vbK2RlBu9xw2kKEw&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4j2_QHKLCgDPEA-C8rCgHl6iTXeofwmLd9w&s",
      ],
    },
    {
      title: "Sydney Harbor Escape",
      startDate: "2025-08-08",
      endDate: "2025-08-14",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRISqsHP9sow_rvw63FQgV-KcUvEZ4G1z7UpQ&s",
        "https://silversea-discover.imgix.net/2023/06/shutterstock_270798593.jpg?auto=compress%2Cformat&ixlib=php-3.3.1",
      ],
    },
    {
      title: "Taipei Foodie Run",
      startDate: "2025-09-03",
      endDate: "2025-09-09",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzEAl-4aT1CN_BxaZLRgFag3KsdQvED4nVtw&s",
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/d7/dc/f6/bigphotofortaipei.jpg?w=1100&h=1100&s=1",
        "https://i.guim.co.uk/img/media/736f7500852f07d483928742fcb6277ce0394f0e/0_200_6000_3600/master/6000.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=2c0f0a9b05d8d36b7dd53d95b96b20b7",
      ],
    },
    {
      title: "Maldives Ocean Chill",
      startDate: "2025-10-11",
      endDate: "2025-10-18",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQMAn_WND-HyQhmnkdmS7dFJ-xYFDt1srR4w&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1d8cNTKL3Em4a2jvhb4QES6IPEfkPPJGFyA&s",
      ],
    },
    {
      title: "Barcelona Vibrant Streets",
      startDate: "2025-11-05",
      endDate: "2025-11-12",
      images: [
        "https://www.cataloniahotels.com/en/blog/wp-content/uploads/2023/12/barcelona-city-overview.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlEyhiiGEEh32iyGaylXOvqcDKVQojqAwN6A&s",
      ],
    },
    {
      title: "Amsterdam Canal Escape",
      startDate: "2025-12-01",
      endDate: "2025-12-08",
      images: [
        "https://i.natgeofe.com/n/e2f26e6b-8255-4391-84be-4b0919d4c0d8/20240626-0349-Jonathan%20Irish-NGCW-CITI-AA-Amsterdam-_7R52855.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-X4eH1YaXCClE8ziX5jL3FDqI90PysUx72w&s",
      ],
    },
    {
      title: "Vienna Classical Getaway",
      startDate: "2025-03-20",
      endDate: "2025-03-28",
      images: [
        "https://thetourguy.com/wp-content/uploads/2023/01/TTTD-Vienna-feature-1440-675.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTiTS-EedHIQ79lNfZKSOO13wvVYlc0xcwhA&s",
      ],
    },
    {
      title: "Moscow City Journey",
      startDate: "2025-04-25",
      endDate: "2025-05-03",
      images: [
        "https://russiaeguide.com/wp-content/uploads/2021/12/blobid1532423350796-scaled-1.jpg",
        "https://travelseewrite.com/wp-content/uploads/2024/02/Saint-Basils-Cathedral-Moscow-RECTANGLE-1050x700.jpg.webp",
        "https://res.cloudinary.com/odysseytraveller/image/fetch/f_auto,q_auto,dpr_auto,r_4,w_765,h_535.5,c_limit/https://cdn.odysseytraveller.com/app/uploads/2017/03/iStock-500421118.jpg",
      ],
    },
  ];

  for (const trip of trips) {
    await prisma.tripPlan.update({
      where: { title: trip.title },
      data: {
        startDate: new Date(trip.startDate),
        endDate: new Date(trip.endDate),
        images: trip.images,
      },
    });
  }
}

main()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());
