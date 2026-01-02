import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";

export const POST = async () => {
  const response = await prisma.mustVisitLocation.createMany({
    data:[{
  title: "Эрмитаж музей",
  description: "Оросын Санкт-Петербург хотод байрлах алдартай урлагийн музей, дэлхийн хамгийн том цуглуулгатай.",
  images: ["https://www.hon.ru/upload/resize_cache/iblock/1e2/450_300_2/1e271ff5e423e5c4748f62261409544e.jpg"],
  factId: "2KIJMB2kYklvLbTo5GNkd"
},
{
  title: "Keukenhof Flower Park",
  description: "Нидерландын алдартай цэцгийн парк, зуны улиралд сая сая хошин өнгийн цэцэгсээр дүүрдэг.",
  images: ["https://www.amsterdam.net/en/wp-content/uploads/sites/136/gardens-keukenhof-hd.jpg"],
  factId: "6PHIk29Q72CyR3cLhtqp6"
},
{
  title:"Fushimi Inari Taisha",
  description:"Японы Киото хотод байрлах алдартай сүм бөгөөд мянга мянган улаан торон хаалгаар үүссэн үзэсгэлэнтэй замаараа дэлхий даяар танигдсан.",
  images:["https://2.bp.blogspot.com/-CWKnT9xK860/Wg4x_NGXvUI/AAAAAAAAUkY/S_FZotOBaVQMLqS77m6M0gPgWZTn1qnlACEwYBhgL/s1600/IMG_9132.jpg"],
  factId:"BXkrL1R13PX8NgKI9fDZ-"
},
{
  title:"Schönbrunn Palace",
  description:"Австрийн Вена хотод байрлах түүхэн ордон, тансаг интерьер, үзэсгэлэнтэй цэцэрлэгээрээ алдартай.",
  images:["https://www.viennasightseeing.at/fileadmin/_processed_/1/c/csm_5__c__Bildagentur_Zolles_KG_Christian_Hofer_f7328a75b7.jpg"],
  factId:"CdG158pIvAzbXbLoCN1SD"
},
{
  title:"Baa Atoll",
  description:"Мальдивын алдартай аялал жуулчлалын бүс, тунгалаг ус, далайн амьтдын баялаг биологийн төрөл зүйлээрээ танигдсан.",
  images:["https://entiretravel.imgix.net/getmedia/acc5fa4a-ffd4-4f15-b549-435d3bd069ad/maldives-amilla-fushi-aerial1.jpg?auto=format&w=3024&fit=crop"],
  factId:"E9H9XwNKRPtmI05FKphOG"
},
{
  title:"Eiffel Tower",
  description:"Францын Парис хотод байрлах алдартай цамхаг, хотын бэлгэдэл бөгөөд гайхалтай үзэмж, романтик уур амьсгалаараа алдартай.",
  images:["https://quiltripping.com/wp-content/uploads/2017/07/DSC_0781-scaled.jpg"],
  factId:"EfAfz8NeeBcXa6tNFGY4K"
},
{
  title:"Burj Khalifa",
  description:"Нэгдсэн Араб Эмират улсын Дубайд байрлах дэлхийн хамгийн өндөр цамхаг, орчин үеийн архитектур, гайхалтай хотын үзэмжээрээ алдартай.",
  images:["https://www.guinnessworldrecords.com/records/hall-of-fame/easset_upload_file31459_12897_e.jpg"],
  factId:"GsQRDy-ZO21ntz4BdONjl"
},
{
  title:"Grand Palace",
  description:"Тайландын Бангкок хотод байрлах түүхэн сүмийн цогцолбор, гоёмсог архитектур, урлагийн өвөрмөц хэв маягаар алдартай.",
  images:["https://media.tacdn.com/media/attractions-splice-spp-674x446/07/69/05/a2.jpg"],
  factId:"Ij3WPE-eERFyq1lBKl3Eb"
},

{
  title:"Hagia Sophia",
  description:"Туркийн Стамбул хотод байрлах түүхэн сүм, сүм хийд, музейн цогцолбор бөгөөд гайхалтай архитектур, соёлын өвөрмөц түүхээрээ алдартай.",
  images:["https://cdn.britannica.com/04/188504-050-1C761AAE/Interior-Hagia-Sophia-Istanbul.jpg"],
  factId:"JH57GRX4zYNSbqq0BxteU"
},
{
  title:"Marina Bay Sands",
  description:"Сингапурын алдартай зочид буудал, скайпарк, infinity pool болон орчин үеийн архитектураараа танигдсан.",
  images:["https://mavenwireless.com/app/uploads/2025/01/Marina-Bay-Sands-Singapore-Cellular_s_o-1024x683.jpg"],
  factId:"JQXYbTdhZm7Rk6zhVfXQy"
},
{
  title:"Grand Canyon",
  description:"Америкийн Аризона мужид байрлах байгалийн гайхамшигт хавцал, өргөн уудам үзэмж, эртний геологийн тогтоцоороо алдартай.",
  images:["https://npf-prod.imgix.net/uploads/shutterstock_97706066_1.jpg?auto=compress%2Cformat&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&h=900&q=80&w=1600"],
  factId:"Qju-8FcTFPzZOX5Xfn5af"
},
{
  title:"Sydney Opera House",
  description:"Австралийн Сидней хотод байрлах алдартай опера, гоёмсог архитектур, далайн эргийн гайхалтай үзэмжээрээ алдартай.",
  images:["https://ychef.files.bbci.co.uk/1280x720/p0gp95cq.jpg"],
  factId:"UrMobKTJnbLYfWREcJXTS"
},
{
  title:"Taipei 101",
  description:"Тайпей хотод байрлах өндөр цамхаг, орчин үеийн архитектур, хотын гайхалтай үзэмжээрээ алдартай.",
  images:["https://image-tc.galaxy.tf/wijpeg-19za0ro24q24b9b9ez8lz2e9x/taipei-101_standard.jpg?crop=112%2C0%2C1777%2C1333"],
  factId:"YaKTOubdeIT1EJFLnWJpN"
},
{
  title:"Tower of London",
  description:"Их Британийн Лондон хотод байрлах түүхэн цайз, эртний хааны ордон, түүх, соёлын өвөрмөц үнэ цэнээрээ алдартай.",
  images:["https://images.immediate.co.uk/production/volatile/sites/7/2020/10/GettyImages-520189738-b20ea44.jpg?quality=90&resize=980,654"],
  factId:"a2pfTGcgrAJXE-xLZKLFS"
},
{
  title:"Colosseum",
  description:"Итали улсын Ром хотод байрлах эртний Ромын хүрээлэн, түүхэн архитектур, соёлын өвөрмөц үнэ цэнээрээ алдартай.",
  images:["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXOJx8k9uykyqZKJOp1JsPm5lpJW0iJ9iLVQ&s"],
  factId:"drztlni6k_X56iXggsXHT"

},
{
  title:"Gyeongbokgung Palace",
  description:"БНСУ-ын Сөүл хотод байрлах түүхэн хааны ордон, уламжлалт архитектур, соёлын өвөрмөц гоёмсог байдалтай.",
  images:["https://ucarecdn.com/2667d034-3197-4c39-b162-579a4e2e583a/-/crop/1920x1007/0,72/-/resize/1200x630/"],
  factId:"dvqh1Lr_1dUL1xE0icZ5Y"
},
{
  title:"Sagrada Família –",
  description:"Испанийн Барселона хотод байрлах алдартай сүм, гоёмсог архитектур, Антони Гаудигийн бүтээлийн өвөрмөц хэв маягаар алдартай.",
  images:["https://images.adsttc.com/media/images/5254/4190/e8e4/4eff/0200/06cf/large_jpg/sfpassio.jpg?1381253501"],
  factId:"m_PIq2Cyh6z7vg-FSWZW0"
},
{
  title:"Gobi Desert",
  description:" Монгол Улсад байрлах алдартай цөл, өргөн уудам нутаг, өвөрмөц байгалийн ландшафт, аялал жуулчлалын өвөрмөц боломжоороо танигдсан.",
  images:["https://www.discovermongolia.mn/uploads/gallery-khongor-sand-dunes-camel.jpg"],
  factId:"wNl56nGXuGVjCtAYO_CLo"
},
{
  title:"Borobudur Temple",
  description:"Индонезийн Ява аралд байрлах дэлхийн хамгийн том буддын сүм, түүхэн өв, нарийн ур хийц, гоёмсог рельефээрээ алдартай.",
  images:["https://www.mystreal.com/_next/image/?url=%2Ftemple%2Fborobudur-temple%2FScene-1-The-Lost-Origins-of-Borobudur-2.webp&w=3840&q=75"],
  factId:"x8T-p2Gqq6PxcUPpIBbW6"
},
{
  title:"Great Wall of China",
  description:"Хятадын хамгийн алдартай түүхэн байгууламж, урт хана, эртний хамгаалалтын систем болон гайхалтай байгалийн үзэмжээрээ алдартай.",
  images:["https://www.popsci.com/wp-content/uploads/2025/02/Great-Wall-China.jpg?quality=85&w=2000"],
  factId:"ys5HzKAbzOsfGLZGKIGTV"
},


    ]

  });
  return NextResponse.json(response);
};
