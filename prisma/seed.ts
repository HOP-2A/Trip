import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.tripPlan.createMany({
    data: [
      { title: "Tokyo Neon Escape", destination: "Japan" },
      { title: "Bali Island", destination: "Indonesia" },
      { title: "Paris City of Lights", destination: "France" },
      { title: "Seoul Urban Vibes", destination: "South Korea" },
      { title: "Bangkok Street Adventure", destination: "Thailand" },
      { title: "Dubai Desert Luxury", destination: "United Arab Emirates" },
      { title: "Rome Timeless Journey", destination: "Italy" },
      { title: "London Royal Getaway", destination: "United Kingdom" },
      { title: "Singapore Future Escape", destination: "Singapore" },
      { title: "Khovsgol Great Lake", destination: "Mongolia" },
      { title: "Hong Kong Skyline Trip", destination: "China" },
      { title: "New York City Pulse", destination: "United States" },
      { title: "Istanbul Cultural Blend", destination: "Turkiye" },
      { title: "Sydney Harbor Escape", destination: "Australia" },
      { title: "Taipei Foodie Run", destination: "Taiwan" },
      { title: "Maldives Ocean Chill", destination: "Maldives" },
      { title: "Barcelona Vibrant Streets", destination: "Spain" },
      { title: "Amsterdam Canal Escape", destination: "Netherlands" },
      { title: "Vienna Classical Getaway", destination: "Austria" },
      { title: "Moscow City Journey", destination: "Russia" },
    ],
  });
}

main()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());
