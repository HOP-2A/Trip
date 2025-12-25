import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";


export const POST = async () => {
    
 
  const response = await prisma.tripDay.createMany({
    data:
     [
      {
        tripPlanId: "BCtl1xoW_YznjYbx7EkZz",
        dayNumber: 1,
        title: "Токио хотод хүрэлцэн ирэх, Шинжүкүгээр аялал",
        description:
          "Токио нисэх буудалд буугаад зочид буудалдаа байрлана. Үдээс хойш Шинжүкү дүүргээр алхаж, неон гэрлүүд, өндөр барилгуудын дунд хотын хэмнэлтэй танилцана. Оройн хоолонд Рамен эсвэл Япон карри амтална.",
      },
      {
        tripPlanId: "BCtl1xoW_YznjYbx7EkZz",
        dayNumber: 2,
        title: "Асакуса сүм + Скайтрий цамхаг",
        description: "Өглөө Асакуса дахь Сенсожи сүмд зочилж, Накамисэ худалдааны гудамжаар тойрно. Дараа нь Токио Скайтрий цамхгаас хотыг бүхэлд нь 360° харах боломжтой. Орой Сумида голын эрэгт тайван алхана.",
      },
       {
        tripPlanId: "BCtl1xoW_YznjYbx7EkZz",
        dayNumber: 3,
        title: "Шибүяа & Харужүкү стрессгүй өдөр",
        description: "Өдрийн эхний хэсэгт алдарт Шибүяа товчоо гарц дээр зураг дарж, Шибүяа Скай руу гарч хотын панорамыг үзнэ. Дараа нь Харужүкүгийн Такишита гудамжаар шоппинг хийж, Япон залуучуудын соёлыг мэдэрнэ. Орой Омотесандогоор алхахад тохиромжтой.",
      },
      {
        tripPlanId: "BCtl1xoW_YznjYbx7EkZz",
        dayNumber: 4,
        title: "Уено парк, музей, амьтны хүрээлэн",
        description: "Уено парк руу очиж, байгалтай өдрийг өнгөрөөнө. Токио үндэсний музей, Уено амьтны хүрээлэн эсвэл цөөрмийн эргээр завь унах боломжтой. Орой Амэёко худалдааны гудамжид амттан, street food туршина.",
      },
       {
        tripPlanId: "BCtl1xoW_YznjYbx7EkZz",
        dayNumber: 5,
        title: "Акаихабара электроник ба анимэ аялал",
        description: "Акаихабара гудамжинд технологи, электроник дэлгүүрүүдээр орж үзнэ. Анимэ, манга, тоглоом сонирходог бол энэ өдөр бүхэлдээ адал явдалтай. Мэйд кафе эсвэл тэмдэгт баатруудын сэдэвт кафег сонирхож болно.",
      },
      {
        tripPlanId: "BCtl1xoW_YznjYbx7EkZz",
        dayNumber: 6,
        title: "Фүжи уул ба Хаконе руу нэг өдрийн аялал",
        description: "Өглөө эрт Фүжи уулын орчим руу аялж, Кавагути нуурын эрэг дээрээс Фүжиг хараад зураг авна. Хаконед очвол халуун рашаанд (onsen) амран, рашаанд дүрэх Япон уламжлалыг мэдэрнэ. Орой Токио руу буцна.",
      },
      {
        tripPlanId: "BCtl1xoW_YznjYbx7EkZz",
        dayNumber: 7,
        title: "Гинза & Цукидзи захын хоол аялал",
        description: "Цукидзи гадаад зах дээр хамгийн амттай сүши, далайн бүтээгдэхүүн амтална. Дараа нь Гинза дүүргээр явж, Японы тансаг дэлгүүр, брендүүдээр сонирхож болно. Орой театрт шоу үзэх эсвэл зүгээр л тансаг кафе-д амрах боломжтой.",
      },
      
      {
        tripPlanId: "BCtl1xoW_YznjYbx7EkZz",
        dayNumber: 9,
        title: "Роппонги, Моригийн цамхаг & Шөнийн Токио",
        description: "Роппонги арт дүүрэгт Моригийн музей болон Моригийн цамхгийн ажиглалтын тавцан дээр гарна. Оройд нь Токиогийн шилдэг rooftop бар-аас шөнийн гэрлүүдийг харан бусдаас өөр өнцгөөр мэдэрнэ.",
      },
      {
        tripPlanId: "BCtl1xoW_YznjYbx7EkZz",
        dayNumber: 10,
        title: "Шоппинг, дурсгалын зүйлс ба Улаанбаатар руу буцах",
        description: "Сүүлчийн өдөр багахан шоппинг хийж, дурсгалын зүйлс худалдан авна. Буудлын ойролцоо амархан алхалт хийж, дараа нь нисэх буудал руу хөдөлнө. Токио хотын мартагдашгүй аялал өндөрлөнө.",
      },
      {
    tripPlanId: "HwsrY7Y67KULRi4Fr8XGQ",
    dayNumber: 1,
    title: "Бали аралд хүрэлцэн ирэх, Кута далайн эргээр амрах",
    description:
      "Нгура Рай олон улсын нисэх буудалд буугаад зочид буудалдаа байрлана. Үдээс хойш Кута далайн эргээр алхаж, далайн салхи, намуун орчныг мэдэрнэ. Орой далайн эргийн ресторануудад далайн бүтээгдэхүүнтэй оройн хоол зооглоорой."
  },
  {
    tripPlanId: "HwsrY7Y67KULRi4Fr8XGQ",
    dayNumber: 2,
    title: "Убуд хот, Бабит сүм, Monkey Forest зочлолт",
    description:
      "Өглөө Убуд руу хөдөлж, Бабит сүм болон түүний үзэсгэлэнт хүрээлэнг үзнэ. Дараа нь Monkey Forest-д зочилж, чөлөөтэй алхах сармагчингуудыг ойроос харж, байгалийн үзэсгэлэнг мэдэрнэ. Орой Убудын төвд шоппинг, кафе."
  },
  {
    tripPlanId: "HwsrY7Y67KULRi4Fr8XGQ",
    dayNumber: 3,
    title: "Тегалаланг бугаан талбай + Усан гулсуур, савлага",
    description:
      "Өглөө Тегалаланг-ийн алдарт шаталсан бугаан талбайд очиж зураг авалт, аялах боломжтой. Дараа нь алдарт giant swing буюу савлага дээр сууж үзнэ. Орой Кафе–үүдээр сууж Убудын тайван орчныг мэдэрнэ."
  },
  {
    tripPlanId: "HwsrY7Y67KULRi4Fr8XGQ",
    dayNumber: 4,
    title: "Нуса Пенида нэг өдрийн аялал",
    description:
      "Эртлэн гарч завиар Нуса Пенидад хүрнэ. Kelingking Beach, Broken Beach, Angel’s Billabong зэрэг гайхалтай байгальтай газруудаар аялна. Хөх цэнхэр ус, цохион дээрх үзэсгэлэнтэй байгаль мартагдашгүй дурсамж үлдээнэ."
  },
  {
    tripPlanId: "HwsrY7Y67KULRi4Fr8XGQ",
    dayNumber: 5,
    title: "Семиняк далайн эрэг + Beach Club амралт",
    description:
      "Семиняк далайн эрэг дээр тайван амарч, хүсвэл серфинг туршиж үзнэ. Үдээс хойш Potato Head эсвэл Finns Beach Club-д амрах боломжтой. Орой нар жаргах үзэмжийг харан ая тухтай оройн хооллоорой."
  },
  {
    tripPlanId: "HwsrY7Y67KULRi4Fr8XGQ",
    dayNumber: 6,
    title: "Дурсгалын зүйлс авах, буцах бэлтгэл",
    description:
      "Сүүлчийн өдөр шоппинг хийхэд тохиромжтой — Убудын зах, Семиняк дэлгүүрүүдээс дурсгалын зүйлс авна. Дараа нь нисэх буудал руу хөдөлж, аяллаа өндөрлөнө."
  },
  {
    tripPlanId: "uaQlS8z4Q5QmC-oF_3oeR",
    dayNumber: 1,
    title: "Парис хотод хүрэлцэн ирэх, зочид буудалдаа байрлах",
    description:
      "Шарль де Гол нисэх буудалд буугаад зочид буудалдаа байрлана. Үдээс хойш ойролцоох дүүрэгт алхаж, Парисын орчныг мэдэрнэ. Оройн хоолонд франц хоол амтлана."
  },
  {
    tripPlanId: "uaQlS8z4Q5QmC-oF_3oeR",
    dayNumber: 2,
    title: "Эйфелийн цамхаг + Сена голын аялал",
    description:
      "Өглөө Эйфелийн цамхагт гарч, хотыг дээшээс үзнэ. Дараа нь Сена голын аялал хийж, хотын үзэмжийг завиар тольдох боломжтой. Оройн хоолны дараа ойролцоох кафе-д амрана."
  },
  {
    tripPlanId: "uaQlS8z4Q5QmC-oF_3oeR",
    dayNumber: 3,
    title: "Лувр музей + Тюильри цэцэрлэг",
    description:
      "Лувр музейг үзэж, алдартай урлагийн бүтээлүүдийг сонирхоно. Дараа нь Тюильри цэцэрлэгээр алхаж, зураг авах боломжтой. Оройн хоолонд франц багет болон сыр амтлана."
  },
  {
    tripPlanId: "uaQlS8z4Q5QmC-oF_3oeR",
    dayNumber: 4,
    title: "Нотр-Дам сүм + Латин дүүрэг",
    description:
      "Өглөө Нотр-Дам сүмд зочилж, готик архитектурыг харах. Дараа нь Латин дүүрэгт алхаж, жижиг кафе, номын дэлгүүрүүдийг сонирхоно. Орой Франц уран зохиолын орчныг мэдэрнэ."
  },
  {
    tripPlanId: "uaQlS8z4Q5QmC-oF_3oeR",
    dayNumber: 5,
    title: "Монмартр & Сакрэ-Кёр сүм",
    description:
      "Өглөө Монмартрын уран бүтээлчдийн гудамжаар алхаж, Сакрэ-Кёр сүмийг үзнэ. Дараа нь ойролцоох кафед амсхийж, хотын панорам үзэсгэлэнт газраас зураг авна."
  },
  {
    tripPlanId: "uaQlS8z4Q5QmC-oF_3oeR",
    dayNumber: 6,
    title: "Версаль ордон өдөр аялал",
    description:
      "Өглөө Версаль ордонд өдөржингөө аялж, ордны өрөөнүүд болон гайхалтай цэцэрлэгүүдийг үзнэ. Орой Токио руу буцахгүй тул Парисын ресторанд оройн хооллоорой."
  },
  {
    tripPlanId: "uaQlS8z4Q5QmC-oF_3oeR",
    dayNumber: 7,
    title: "Шанз Элизе гудамж + Арк де Триомф",
    description:
      "Шанз Элизе гудамжаар шоппинг хийх, Арк де Триомф-д зочилно. Дараа нь хотын төвөөр алхаж, street cafe-д амрана."
  },
  {
    tripPlanId: "uaQlS8z4Q5QmC-oF_3oeR",
    dayNumber: 8,
    title: "Орсэй музей + Сена голын оройны аялал",
    description:
      "Орсэй музейд урлагийн бүтээлүүдийг үзэж, дараа нь Сена голоор шөнийн аялал хийж, хотын гэрлүүдийг харна. Орой Франц хоол амтална."
  },
  {
    tripPlanId: "uaQlS8z4Q5QmC-oF_3oeR",
    dayNumber: 9,
    title: "Латин дүүрэгт амралт + жижиг шоппинг",
    description:
      "Өглөө Латин дүүрэгт амрах, жижиг шоппинг хийх. Дараа нь ойролцоох кафед сууж, франц амттан амтлана. Орой хотын сүүлийн шөнийг өнгөрөөнө."
  },
  {
    tripPlanId: "uaQlS8z4Q5QmC-oF_3oeR",
    dayNumber: 10,
    title: "Буцах бэлтгэл + нисэх буудал руу хөдөлгөөн",
    description:
      "Сүүлчийн өдөр бага шоппинг хийх, дурсгалын зүйлс худалдан авах. Дараа нь нисэх буудал руу явж, Парис аялал өндөрлөнө."
  },
  {
  tripPlanId: "0WUQ3sQ0b_yvS32exSR_a",
  dayNumber: 1,
  title: "Амстердам хотод хүрэлцэн ирэх & Суваг дагуух оройн алхалт",
  description:
    "Амстердамын Схипхол нисэх буудалд буугаад зочид буудалдаа байрлана. Орой хотын алдарт сувгуудын дагуу тайван алхаж, хотын уур амьсгалыг мэдэрнэ."
},
{
  tripPlanId: "0WUQ3sQ0b_yvS32exSR_a",
  dayNumber: 2,
  title: "Хотын төв & Түүхэн дүүргүүд",
  description:
    "Дамын талбай, Хааны ордон, түүхэн төвөөр зочилно. Жордаан дүүргээр алхаж, уламжлалт кафе, жижиг дэлгүүрүүдийг сонирхоно. Орой сувгаар завиар аялахад тохиромжтой."
},
{
  tripPlanId: "0WUQ3sQ0b_yvS32exSR_a",
  dayNumber: 3,
  title: "Музейн талбай & Вонделпарк",
  description:
    "Музейн талбайд байрлах Рейкс музей эсвэл Ван Гогийн музейг үзнэ. Үдээс хойш Вонделпарк-д амарч, дугуй унах эсвэл ногоон орчинд тайван цагийг өнгөрөөнө."
},
{
  tripPlanId: "0WUQ3sQ0b_yvS32exSR_a",
  dayNumber: 4,
  title: "Заансе Сханс & Салхин тээрэм",
  description:
    "Заансе Сханс руу нэг өдрийн аялал хийж, салхин тээрэм, модон байшин, бяслаг, гутлын уламжлалт үйлдвэрлэлтэй танилцана. Орой Амстердамд буцна."
},
{
  tripPlanId: "0WUQ3sQ0b_yvS32exSR_a",
  dayNumber: 5,
  title: "Утрехт хотын аялал",
  description:
    "Галт тэргээр Утрехт хот руу явж, Домын цамхаг, түүхэн төвөөр алхана. Суваг доорх кафе, ресторануудын өвөрмөц уур амьсгалыг мэдэрнэ."
},
{
  tripPlanId: "0WUQ3sQ0b_yvS32exSR_a",
  dayNumber: 6,
  title: "Гаага & Шевенинген далайн эрэг",
  description:
    "Гаага хотод очиж Энхийн ордон, хотын төвийг үзнэ. Үдээс хойш Шевенинген далайн эрэг дээр алхаж, далайн агаараар амарна."
},
{
  tripPlanId: "0WUQ3sQ0b_yvS32exSR_a",
  dayNumber: 7,
  title: "Дэлгүүр хэсэх & Чөлөөт өдөр",
  description:
    "Сүүлчийн бүтэн өдрөө шоппинг, дурсгалын зүйлс худалдан авахад зориулна. Бяслаг, stroopwafel зэрэг Нидерландын онцлог бүтээгдэхүүн сонирхоно."
},
{
  tripPlanId: "0WUQ3sQ0b_yvS32exSR_a",
  dayNumber: 8,
  title: "Буцах өдөр",
  description:
    "Хотын ойролцоо богино алхалт хийж, дараа нь нисэх буудал руу хөдөлнө. Амстердамын мартагдашгүй аялал өндөрлөнө."
},
{
  tripPlanId: "5IB1l7Jdkks5MhyAsDwkD",
  dayNumber: 1,
  title: "Arrival in Taipei & Ximending Evening",
  description:
    "Arrive at Taoyuan International Airport and check into your hotel in Taipei. In the evening, explore Ximending for shopping, street food, and bubble tea. A relaxed introduction to Taiwan’s city life."
},
{
  tripPlanId: "5IB1l7Jdkks5MhyAsDwkD",
  dayNumber: 2,
  title: "Taipei City Highlights",
  description:
    "Visit Chiang Kai-shek Memorial Hall, then explore Longshan Temple. In the afternoon, head to Taipei 101 Observatory for panoramic city views. Evening free for cafés or night markets."
},
{
  tripPlanId: "5IB1l7Jdkks5MhyAsDwkD",
  dayNumber: 3,
  title: "National Palace Museum & Shilin Night Market",
  description:
    "Spend the morning at the National Palace Museum. Relax in the afternoon or explore nearby parks. In the evening, enjoy local snacks and street food at Shilin Night Market."
},
{
  tripPlanId: "5IB1l7Jdkks5MhyAsDwkD",
  dayNumber: 4,
  title: "Jiufen Old Street & Shifen Waterfall",
  description:
    "Day trip to Jiufen Old Street with its narrow alleys, tea houses, and sea views. Visit Shifen Waterfall and experience sky lantern releasing on the old railway line. Return to Taipei in the evening."
},
{
  tripPlanId: "5IB1l7Jdkks5MhyAsDwkD",
  dayNumber: 5,
  title: "Taichung & Rainbow Village",
  description:
    "Travel to Taichung by high-speed train. Visit Rainbow Village and explore the city’s cultural spots. Enjoy cafés and local food before returning to Taipei or staying overnight."
},
{
  tripPlanId: "5IB1l7Jdkks5MhyAsDwkD",
  dayNumber: 6,
  title: "Sun Moon Lake Scenic Day",
  description:
    "Full-day trip to Sun Moon Lake. Enjoy a boat ride, lakeside views, cycling paths, and nearby temples. A peaceful nature escape from the city."
},
{
  tripPlanId: "5IB1l7Jdkks5MhyAsDwkD",
  dayNumber: 7,
  title: "Shopping & Departure",
  description:
    "Return to Taipei for souvenir shopping and final sightseeing. Enjoy a relaxed walk or café visit before heading to the airport. The Taiwan journey comes to an end."
},
{
  tripPlanId: "7kwX0HmG-gB4fbFPAXhpM",
  dayNumber: 1,
  title: "Arrival in Vienna & Old Town Walk",
  description:
    "Arrive in Vienna and check into your hotel. Take a gentle walk around the historic city center, exploring Stephansplatz and St. Stephen’s Cathedral. Enjoy a traditional Austrian dinner in the evening."
},
{
  tripPlanId: "7kwX0HmG-gB4fbFPAXhpM",
  dayNumber: 2,
  title: "Vienna Palaces & Classical Culture",
  description:
    "Visit Schönbrunn Palace and its beautiful gardens in the morning. In the afternoon, explore Hofburg Palace and the Ringstraße. Optional classical music concert in the evening."
},
{
  tripPlanId: "7kwX0HmG-gB4fbFPAXhpM",
  dayNumber: 3,
  title: "Vienna Museums & Café Culture",
  description:
    "Spend the day in the MuseumsQuartier visiting the Kunsthistorisches Museum or Albertina. Take time to relax in famous Viennese cafés and try Sachertorte or Apfelstrudel."
},
{
  tripPlanId: "7kwX0HmG-gB4fbFPAXhpM",
  dayNumber: 4,
  title: "Wachau Valley & Melk Abbey",
  description:
    "Day trip to the Wachau Valley. Visit Melk Abbey and enjoy scenic views along the Danube River. Taste local food and enjoy charming small towns before returning to Vienna."
},
{
  tripPlanId: "7kwX0HmG-gB4fbFPAXhpM",
  dayNumber: 5,
  title: "Salzburg – Mozart’s City",
  description:
    "Travel to Salzburg by train. Explore Mirabell Gardens, Mozart’s birthplace, and the Old Town. Evening walk along the Salzach River with mountain views."
},
{
  tripPlanId: "7kwX0HmG-gB4fbFPAXhpM",
  dayNumber: 6,
  title: "Hallstatt & Alpine Scenery",
  description:
    "Day trip to Hallstatt, one of Austria’s most picturesque villages. Walk by the lake, enjoy alpine views, and explore the village streets. Return to Salzburg in the evening."
},
{
  tripPlanId: "7kwX0HmG-gB4fbFPAXhpM",
  dayNumber: 7,
  title: "Innsbruck & Tyrolean Alps",
  description:
    "Travel to Innsbruck. Explore the Old Town, Golden Roof, and enjoy views of the surrounding Alps. Optional cable car ride for panoramic mountain scenery."
},
{
  tripPlanId: "7kwX0HmG-gB4fbFPAXhpM",
  dayNumber: 8,
  title: "Shopping & Departure",
  description:
    "Enjoy last-minute shopping and a relaxed stroll in the city. Depending on your flight, depart from Vienna, Salzburg, or Innsbruck. The Austrian journey comes to an end."
},
{
  tripPlanId: "AioQtBKQ6LRlWGNJYS0Lb",
  dayNumber: 1,
  title: "Мальдивт хүрэлцэн ирэх & Амралтын эхлэл",
  description:
    "Мале олон улсын нисэх буудалд буугаад завь эсвэл усан онгоцоор амралтын арал руу шилжинэ. Зочид буудалдаа байрлаж, далайн эрэг дээр тайван амарч аяллаа эхлүүлнэ."
},
{
  tripPlanId: "AioQtBKQ6LRlWGNJYS0Lb",
  dayNumber: 2,
  title: "Далайн эргийн амралт & Чөлөөт өдөр",
  description:
    "Цагаан элстэй наран шарлагын газар амарч, тунгалаг усанд сэлнэ. Наран шарлагын орон дээр амарч, кокосын ундаа уун жинхэнэ тропик амралтыг мэдэрнэ."
},
{
  tripPlanId: "AioQtBKQ6LRlWGNJYS0Lb",
  dayNumber: 3,
  title: "Снорклинг & Далайн ертөнц",
  description:
    "Шүрэн арлуудын орчимд снорклинг хийж, өнгөлөг загас, далайн амьд ертөнцтэй танилцана. Зарим амралтын газрууд далайн яст мэлхий харах аялал санал болгодог."
},
{
  tripPlanId: "AioQtBKQ6LRlWGNJYS0Lb",
  dayNumber: 4,
  title: "Арлын аялал & Орон нутгийн соёл",
  description:
    "Орон нутгийн суурьшлын аралд очиж Мальдивын өдөр тутмын амьдрал, соёлтой танилцана. Гар урлал, дурсгалын зүйлс худалдан авах боломжтой."
},
{
  tripPlanId: "AioQtBKQ6LRlWGNJYS0Lb",
  dayNumber: 5,
  title: "Усан спорт & Адреналин",
  description:
    "Каяак, paddle board, усан мотоцикл зэрэг усан спортоор хичээллэнэ. Илүү идэвхтэй аялал сонирхдог хүмүүст тохиромжтой өдөр."
},
{
  tripPlanId: "AioQtBKQ6LRlWGNJYS0Lb",
  dayNumber: 6,
  title: "Спа & Хосын романтик өдөр",
  description:
    "Далайн дээгүүрх спа-д массаж хийлгэж, бүрэн амарна. Орой далайн эрэг дээрх романтик оройн хоол эсвэл sunset cruise-д суух боломжтой."
},
{
  tripPlanId: "AioQtBKQ6LRlWGNJYS0Lb",
  dayNumber: 7,
  title: "Чөлөөт амралт & Сүүлчийн наран жаргалт",
  description:
    "Сүүлчийн бүтэн өдрөө амралтын арал дээр чөлөөтэй өнгөрүүлнэ. Дурсгалын зураг авах, далайн эрэг дээр алхах, нар жаргахыг харах сайхан боломж."
},
{
  tripPlanId: "AioQtBKQ6LRlWGNJYS0Lb",
  dayNumber: 8,
  title: "Буцах өдөр",
  description:
    "Зочид буудлаас гарч, Мале нисэх буудал руу шилжинэ. Далайн диваажин Мальдивын мартагдашгүй аялал өндөрлөнө."
},
{
  tripPlanId: "MJJ8jfwBQrawK_fnwVtmg",
  dayNumber: 1,
  title: "Сөүл хотод хүрэлцэн ирэх & Мёндон оройн аялал",
  description:
    "Инчоны олон улсын нисэх буудалд буугаад Сөүл хотын зочид буудалдаа байрлана. Орой Мёндон дүүргээр алхаж, Солонгос street food, гоо сайхны дэлгүүрүүдийг сонирхоно."
},
{
  tripPlanId: "MJJ8jfwBQrawK_fnwVtmg",
  dayNumber: 2,
  title: "Хааны орднууд & Ханок тосгон",
  description:
    "Гёнбокгун ордон, Чандеокгун ордонд зочилж Солонгосын хаадын түүхтэй танилцана. Дараа нь Бүкчон ханок тосгоноор алхаж, уламжлалт байшингуудыг үзнэ."
},
{
  tripPlanId: "MJJ8jfwBQrawK_fnwVtmg",
  dayNumber: 3,
  title: "Сөүл хотын орчин үе & N Seoul Tower",
  description:
    "Донгдэмүн дизайн плаза (DDP), Хондэ дүүргийг сонирхоно. Орой N Seoul Tower дээр гарч Сөүл хотын шөнийн үзэмжийг тольдоно."
},
{
  tripPlanId: "MJJ8jfwBQrawK_fnwVtmg",
  dayNumber: 4,
  title: "DMZ хил орчмын аялал",
  description:
    "Хойд ба Өмнөд Солонгосын хилийн бүс (DMZ) руу хөтөчтэй аялалд оролцоно. Түүх, улс төрийн онцлогтой сонирхолтой өдөр болно."
},
{
  tripPlanId: "MJJ8jfwBQrawK_fnwVtmg",
  dayNumber: 5,
  title: "Бусан хот руу шилжих",
  description:
    "Өглөө хурдны галт тэргээр Бусан хот руу явна. Хэүндэ далайн эрэг дээр амарч, далайн хоол амтална."
},
{
  tripPlanId: "MJJ8jfwBQrawK_fnwVtmg",
  dayNumber: 6,
  title: "Бусан хотын соёл & Далайн эрэг",
  description:
    "Гамчон соёлын тосгон, Жагальчи загасны захыг үзнэ. Орой Гваналли далайн эрэг дээр гүүрний шөнийн гэрлийг харна."
},
{
  tripPlanId: "MJJ8jfwBQrawK_fnwVtmg",
  dayNumber: 7,
  title: "Шоппинг & Чөлөөт өдөр",
  description:
    "Бусанд шоппинг хийж, бэлэг дурсгалын зүйлс авна. Кафе, далайн эрэг дээр тайван амрахад тохиромжтой өдөр."
},
{
  tripPlanId: "MJJ8jfwBQrawK_fnwVtmg",
  dayNumber: 8,
  title: "Буцах өдөр",
  description:
    "Бусан эсвэл Инчон нисэх буудлаас буцах нислэгтээ бэлдэнэ. Өмнөд Солонгосын соёл, амьдралтай танилцсан гайхалтай аялал өндөрлөнө."
},
{
  tripPlanId: "_2m1kVBtmdTKszuoPBp_l",
  dayNumber: 1,
  title: "Улаанбаатар хотод хүрэлцэн ирэх & Хотын танилцах аялал",
  description:
    "Улаанбаатар хотод ирж зочид буудалдаа байрлана. Сүхбаатарын талбай, Чингис хааны хөшөө, Үндэсний түүхийн музейгээр зочилж хотын түүх, соёлтой танилцана."
},
{
  tripPlanId: "_2m1kVBtmdTKszuoPBp_l",
  dayNumber: 2,
  title: "Тэрэлжийн байгалийн цогцолборт газар",
  description:
    "Горхи-Тэрэлжийн байгалийн цогцолборт газарт очиж Яст мэлхийн хад, Арьяабалын сүм үзнэ. Морь унах, байгальд алхах, гэрт хонох боломжтой."
},
{
  tripPlanId: "_2m1kVBtmdTKszuoPBp_l",
  dayNumber: 3,
  title: "Чингис хааны хөшөөт цогцолбор & Нүүдэлчдийн соёл",
  description:
    "Чингис хааны морьт хөшөөт цогцолборт зочилж, дараа нь нүүдэлчдийн ахуй, уламжлалт соёлтой танилцана. Айраг, уламжлалт хоол амтална."
},
{
  tripPlanId: "_2m1kVBtmdTKszuoPBp_l",
  dayNumber: 4,
  title: "Хархорин & Эрдэнэзуу хийд",
  description:
    "Эртний нийслэл Хархорин хотод очиж Эрдэнэзуу хийд үзнэ. Монголын эзэнт гүрний түүх, археологийн дурсгалуудтай танилцана."
},
{
  tripPlanId: "_2m1kVBtmdTKszuoPBp_l",
  dayNumber: 5,
  title: "Өвөрхангайн байгаль & Хангайн нуруу",
  description:
    "Хангайн нурууны уудам тал, уулсын дунд аялж, байгалийн сайхныг мэдэрнэ. Рашаан, голын эрэг дагуу амарч, гэр буудалд хоноглоно."
},
{
  tripPlanId: "_2m1kVBtmdTKszuoPBp_l",
  dayNumber: 6,
  title: "Элсэн тасархай & Байгальтай ойр өдөр",
  description:
    "Элсэн тасархай (Баянговь орчим) үзэж, цөлийн болон хангайн байгалийн огтлолцлыг харна. Тэмээ унах, элсэн дээр алхах боломжтой."
},
{
  tripPlanId: "_2m1kVBtmdTKszuoPBp_l",
  dayNumber: 7,
  title: "Улаанбаатар руу буцах & Шоппинг",
  description:
    "Улаанбаатар хот руу буцаж ирнэ. Ноос ноолуур, гар урлал, бэлэг дурсгалын зүйлс худалдан авч, кафе, ресторанд амарна."
},
{
  tripPlanId: "_2m1kVBtmdTKszuoPBp_l",
  dayNumber: 8,
  title: "Буцах өдөр",
  description:
    "Сүүлчийн өдөр хотын ойролцоо богино алхалт хийж, нисэх буудал руу хөдөлнө. Монгол орны байгаль, соёлтой танилцсан мартагдашгүй аялал өндөрлөнө."
},
{
  tripPlanId: "yhkab5TV9nBuUD2Rtm4Xl",
  dayNumber: 1,
  title: "Москва хотод хүрэлцэн ирэх & Оройн алхалт",
  description:
    "Москва хотын нисэх буудалд бууж зочид буудалдаа байрлана. Орой хотын төвөөр богино алхалт хийж, Оросын нийслэлийн уур амьсгалыг мэдэрнэ."
},
{
  tripPlanId: "yhkab5TV9nBuUD2Rtm4Xl",
  dayNumber: 2,
  title: "Улаан талбай & Кремль",
  description:
    "Улаан талбай, Кремлийн ордон, Гэгээн Василийн сүмийг үзнэ. Түүхэн музейгээр зочилж Оросын түүхтэй танилцана. Орой Арбат гудамжаар алхана."
},
{
  tripPlanId: "yhkab5TV9nBuUD2Rtm4Xl",
  dayNumber: 3,
  title: "Москва хотын соёлын аялал",
  description:
    "Третьяковын галерей, Большой театрын гадна үзэмжийг сонирхоно. Москва голоор завиар аялах эсвэл паркаар алхах боломжтой."
},
{
  tripPlanId: "yhkab5TV9nBuUD2Rtm4Xl",
  dayNumber: 4,
  title: "Санкт-Петербург руу шилжих",
  description:
    "Өглөө хурдны галт тэргээр Санкт-Петербург хот руу явна. Хотын төвөөр алхаж, Нева мөрний эрэг дагуу амарна."
},
{
  tripPlanId: "yhkab5TV9nBuUD2Rtm4Xl",
  dayNumber: 5,
  title: "Эрмитаж музей & Ордон талбай",
  description:
    "Дэлхийн хамгийн том музейн нэг Эрмитажид зочилно. Ордон талбай, Нева мөрний гүүрүүдийг үзэж хотын сүр жавхланг мэдэрнэ."
},
{
  tripPlanId: "yhkab5TV9nBuUD2Rtm4Xl",
  dayNumber: 6,
  title: "Петергоф ордон & Усант оргилуур",
  description:
    "Петергофын ордон, алдарт усан оргилууруудыг үзэх нэг өдрийн аялал хийнэ. Орой Санкт-Петербург хотод буцна."
},
{
  tripPlanId: "yhkab5TV9nBuUD2Rtm4Xl",
  dayNumber: 7,
  title: "Хотын соёл & Сүмүүд",
  description:
    "Аврагчийн цусан дээрх сүм, Исаакийн сүмийг үзнэ. Хотын суваг дагуу завиар аялахад тохиромжтой."
},
{
  tripPlanId: "yhkab5TV9nBuUD2Rtm4Xl",
  dayNumber: 8,
  title: "Дэлгүүр хэсэх & Чөлөөт өдөр",
  description:
    "Сүүлчийн бүтэн өдрөө шоппинг, дурсгалын зүйлс авахад зарцуулна. Орон нутгийн кафе, ресторанд амарна."
},
{
  tripPlanId: "yhkab5TV9nBuUD2Rtm4Xl",
  dayNumber: 9,
  title: "Буцах өдөр",
  description:
    "Нислэгийн цагтаа тохируулан нисэх буудал руу хөдөлнө. Орос орны түүх, соёл, архитектуртай танилцсан аялал өндөрлөнө."
},
{
  tripPlanId: "op8pQmiVawXLUAwMXVL-b",
  dayNumber: 1,
  title: "Нью-Йорк хотод хүрэлцэн ирэх & Таймс Сквер оройн аялал",
  description:
    "JFK эсвэл LaGuardia нисэх буудалд буугаад зочид буудалдаа байрлана. Орой Таймс Сквер дээр алхаж, хотын гэрэл, уур амьсгалыг мэдэрнэ."
},
{
  tripPlanId: "op8pQmiVawXLUAwMXVL-b",
  dayNumber: 2,
  title: "Манхэттэн & Централь парк",
  description:
    "Өглөө Манхэттэн дүүрэгт алхаж, Central Park-д тайван амарна. Метрополитан урлагийн музей болон Америкийн байгалийн түүхийн музейг үзнэ. Орой хотын төвөөр богино алхалт."
},
{
  tripPlanId: "op8pQmiVawXLUAwMXVL-b",
  dayNumber: 3,
  title: "Эрх чөлөөний хөшөө & Эллис арлын аялал",
  description:
    "Эрх чөлөөний хөшөө рүү завиар очиж, Эллис арал болон Нью-Йоркийн боомтын үзэмжийг харна. Орой Lower Manhattan, Wall Street орчныг сонирхоно."
},
{
  tripPlanId: "op8pQmiVawXLUAwMXVL-b",
  dayNumber: 4,
  title: "Бруклин & Дуурийн соёл",
  description:
    "Бруклин гүүрээр алхаж, Бруклин Heights, Dumbo дүүргээр танилцана. Орой Бруклин эсвэл Манхэттэн дүүргийн кафе, ресторануудыг туршина."
},
{
  tripPlanId: "op8pQmiVawXLUAwMXVL-b",
  dayNumber: 5,
  title: "Шоппинг & Чөлөөт өдөр",
  description:
    "Fifth Avenue, SoHo зэрэг шоппинг дүүргүүдээр зочилно. Дурсгалын зүйлс худалдан авч, хотын үзэсгэлэнтэй газруудыг үзэж амарна."
},
{
  tripPlanId: "op8pQmiVawXLUAwMXVL-b",
  dayNumber: 6,
  title: "Өргөөний сүүлчийн өдөр & Буцах",
  description:
    "Сүүлчийн өдөр хотын ойролцоо алхалт хийж, кафе, ресторанаар амарна. Дараа нь нисэх буудал руу хөдөлнө. Нью-Йорк хотын аялал өндөрлөнө."
},
{
  tripPlanId: "KD5_oTb5ygzXh9nHETrMt",
  dayNumber: 1,
  title: "Стамбул хотод хүрэлцэн ирэх & Суваг дагуух оройн алхалт",
  description:
    "Стамбулын нисэх буудалд буугаад зочид буудалдаа байрлана. Орой Босфор голын эрэг дагуух алхалт хийж, хотын гэрэл, уур амьсгалыг мэдэрнэ."
},
{
  tripPlanId: "KD5_oTb5ygzXh9nHETrMt",
  dayNumber: 2,
  title: "Султанахмет дүүрэг & Түүхэн сүмүүд",
  description:
    "Султанахмет дүүрэгт Блу сүм, Айя София, Топкапы ордонд зочилно. Орой Гранд Базар эсвэл Египетийн ногоо, амттангийн захыг сонирхоно."
},
{
  tripPlanId: "KD5_oTb5ygzXh9nHETrMt",
  dayNumber: 3,
  title: "Босфорын завиар аялал & Галата гүүр",
  description:
    "Босфор голын завиар өдөржин аялж Европ, Ази тивийн үзэмжийг харна. Галата гүүр, Галата цамхагт зочилж хотын панорамыг үзнэ. Орой орон нутгийн хоол амтална."
},
{
  tripPlanId: "KD5_oTb5ygzXh9nHETrMt",
  dayNumber: 4,
  title: "Буцах өдөр & Шоппинг",
  description:
    "Сүүлчийн өдөр бага зэрэг шоппинг хийж, сувинер худалдан авна. Дараа нь нисэх буудал руу хөдөлж, Туркын аялал өндөрлөнө."
},
{
  tripPlanId: "QfxAFn2q7CXtVyPdVGjGS",
  dayNumber: 1,
  title: "Дубай хотод хүрэлцэн ирэх & Marina Walk",
  description:
    "Дубайн олон улсын нисэх буудалд буугаад зочид буудалдаа байрлана. Орой Dubai Marina орчим алхаж, сувгийн гэрэл, хотын орчинтой танилцана."
},
{
  tripPlanId: "QfxAFn2q7CXtVyPdVGjGS",
  dayNumber: 2,
  title: "Бурж Халифа & Dubai Mall",
  description:
    "Өглөө Бурж Халифа цамхагт гарч хотыг тольдоно. Дараа нь дэлхийд алдартай Dubai Mall-д шоппинг хийж, аквариум, indoor ice rink зэрэг үзвэрүүдийг үзнэ. Орой Dubai Fountain шоуг харна."
},
{
  tripPlanId: "QfxAFn2q7CXtVyPdVGjGS",
  dayNumber: 3,
  title: "Далайн эрэг & Jumeirah Beach",
  description:
    "Jumeirah Beach-д амарч, далайн спортоор хичээллэнэ. Орой Burj Al Arab зочид буудлын гаднах хэсгийг сонирхоно."
},
{
  tripPlanId: "QfxAFn2q7CXtVyPdVGjGS",
  dayNumber: 4,
  title: "Desert Safari & Соёлын аялал",
  description:
    "Өдрийн турш цөлийн сафари хийж, dune bashing, camel ride туршина. Орой араб хоол амтлах, шоу үзэх боломжтой."
},
{
  tripPlanId: "QfxAFn2q7CXtVyPdVGjGS",
  dayNumber: 5,
  title: "Буцах өдөр & Шоппинг",
  description:
    "Сүүлчийн өдөр бага шоппинг хийж сувинер худалдан авна. Дараа нь нисэх буудал руу хөдөлж, Дубайн аялал өндөрлөнө."
},
{
  tripPlanId: "zkSxhxVr2SBzCq6QBC9bi",
  dayNumber: 1,
  title: "Сидней хотод хүрэлцэн ирэх & Оройн алхалт",
  description:
    "Сидней олон улсын нисэх буудалд буугаад зочид буудалдаа байрлана. Орой Harbour Bridge болон Circular Quay орчмоор алхаж, хотын гэрэл, уур амьсгалыг мэдэрнэ."
},
{
  tripPlanId: "zkSxhxVr2SBzCq6QBC9bi",
  dayNumber: 2,
  title: "Сидней Оперын театр & The Rocks",
  description:
    "Сидней Оперын театр үзэж, Harbor дээр завиар аялана. Дараа нь The Rocks дүүрэгт алхаж, түүхэн гудамж, дэлгүүрүүдийг сонирхоно."
},
{
  tripPlanId: "zkSxhxVr2SBzCq6QBC9bi",
  dayNumber: 3,
  title: "Bondi Beach & Coastal Walk",
  description:
    "Bondi Beach дээр амарч, далайн спорт туршина. Өдрийн цагаар далайн эргээр Coastal Walk хийж, үзэсгэлэнтэй наран шарлагын газруудыг үзнэ."
},
{
  tripPlanId: "zkSxhxVr2SBzCq6QBC9bi",
  dayNumber: 4,
  title: "Blue Mountains өдөр тутмын аялал",
  description:
    "Blue Mountains руу өдөртөө аялал хийж Three Sisters хад, Scenic World сувгийг үзнэ. Байгалийн үзэсгэлэнг зураг аван хадгална."
},
{
  tripPlanId: "zkSxhxVr2SBzCq6QBC9bi",
  dayNumber: 5,
  title: "Мельбурн руу шилжих",
  description:
    "Өглөө нислэгээр Мельбурн руу очно. Хотын төвөөр алхаж Federation Square, Hosier Lane-г үзнэ. Орой Riverfront-д амарна."
},
{
  tripPlanId: "zkSxhxVr2SBzCq6QBC9bi",
  dayNumber: 6,
  title: "Great Ocean Road өдөр тутмын аялал",
  description:
    "Great Ocean Road дагуу өдөртөө аялж, Twelve Apostles хад, эргийн үзэмжийг харна. Өдөржингөө байгалийн үзэсгэлэнт газруудаар аялна."
},
{
  tripPlanId: "zkSxhxVr2SBzCq6QBC9bi",
  dayNumber: 7,
  title: "Шоппинг & Буцах өдөр",
  description:
    "Сүүлчийн өдөр хотын төвөөр богино алхалт хийж, сувинер худалдан авна. Дараа нь нисэх буудал руу хөдөлж, Австралийн аялал өндөрлөнө."
},
{
  tripPlanId: "t6nPT4bECoeo1dGWX9zXM",
  dayNumber: 1,
  title: "Ром хотод хүрэлцэн ирэх & Оройн алхалт",
  description:
    "Ромын нисэх буудалд буугаад зочид буудалдаа байрлана. Орой хотын төвөөр богино алхалт хийж, Piazza Navona, Испанийн шатнуудыг сонирхоно."
},
{
  tripPlanId: "t6nPT4bECoeo1dGWX9zXM",
  dayNumber: 2,
  title: "Колизей & Ромын түүхэн үзвэрүүд",
  description:
    "Колизей, Ромын форумаар зочилж, түүхэн газруудыг үзнэ. Орой Пантеон, Trevi шүршүүрийг харж, хотын уур амьсгалыг мэдэрнэ."
},
{
  tripPlanId: "t6nPT4bECoeo1dGWX9zXM",
  dayNumber: 3,
  title: "Ватикан хот & St. Peter's Basilica",
  description:
    "Ватикан хот руу аялж, St. Peter’s Basilica, Ватикан музей, Сикстиний ордон үзнэ. Орой хотод буцаж алхалт хийнэ."
},
{
  tripPlanId: "t6nPT4bECoeo1dGWX9zXM",
  dayNumber: 4,
  title: "Флоренц рүү шилжих",
  description:
    "Өглөө галт тэргээр Флоренц рүү явж, хотын төвөөр алхана. Дуомо катедрал, Ponte Vecchio-г үзнэ."
},
{
  tripPlanId: "t6nPT4bECoeo1dGWX9zXM",
  dayNumber: 5,
  title: "Флоренц & Уран зураг, урлаг",
  description:
    "Уффици галерей, Академи музейг үзэж, Renaissance урлагийг мэдэрнэ. Орой хотын төвөөр алхаж Итали хоол амтална."
},
{
  tripPlanId: "t6nPT4bECoeo1dGWX9zXM",
  dayNumber: 6,
  title: "Венеци рүү шилжих",
  description:
    "Венеци хот руу галт тэргээр явж, сувгууд дагуух алхалт, Гранд канал дээр завиар аялах боломжтой. Piazza San Marco-г үзнэ."
},
{
  tripPlanId: "t6nPT4bECoeo1dGWX9zXM",
  dayNumber: 7,
  title: "Венеци үзвэр & Сувгийн амралт",
  description:
    "Rialto гүүр, Doge's Palace-г үзнэ. Венеци сувгийн эрэг дээр амарч, gondola аялалд оролцоно."
},
{
  tripPlanId: "t6nPT4bECoeo1dGWX9zXM",
  dayNumber: 8,
  title: "Милан руу шилжих & Шоппинг",
  description:
    "Өглөө Милан руу шилжинэ. Дуомо, Galleria Vittorio Emanuele II-д шоппинг хийж, хотын үзэмжийг харна."
},
{
  tripPlanId: "t6nPT4bECoeo1dGWX9zXM",
  dayNumber: 9,
  title: "Буцах өдөр",
  description:
    "Сүүлчийн өдөр хотын ойролцоо алхалт хийж сувинер худалдан авна. Дараа нь нисэх буудал руу хөдөлж Итали аялал өндөрлөнө."
},
{
  tripPlanId: "wcrZs08IPkSn5gzs-t8b-",
  dayNumber: 1,
  title: "Лондон хотод хүрэлцэн ирэх & Оройн алхалт",
  description:
    "Лондон нисэх буудалд буугаад зочид буудалдаа байрлана. Орой хотын төвөөр богино алхалт хийж, Thames гол, London Eye-г гаднаас сонирхоно."
},
{
  tripPlanId: "wcrZs08IPkSn5gzs-t8b-",
  dayNumber: 2,
  title: "Лондон хотын түүхэн үзвэрүүд",
  description:
    "Британий музей, Tower of London, Tower Bridge-г үзнэ. Орой Covent Garden, Soho орчмоор алхаж, кафе, ресторанд амарна."
},
{
  tripPlanId: "wcrZs08IPkSn5gzs-t8b-",
  dayNumber: 3,
  title: "Westminster & Buckingham Palace",
  description:
    "Big Ben, Westminster Abbey-г үзнэ. Дараа нь Buckingham Palace-д очиж хааны ордны орчныг сонирхоно. Орой Piccadilly Circus болон Regent Street-д алхалт."
},
{
  tripPlanId: "wcrZs08IPkSn5gzs-t8b-",
  dayNumber: 4,
  title: "Oxford эсвэл Cambridge өдөр тутмын аялал",
  description:
    "Оксфорд эсвэл Кембриж хотод өдөртөө аялж, их сургуулиуд, түүхэн төвөөр танилцана. Орой Лондонд буцна."
},
{
  tripPlanId: "wcrZs08IPkSn5gzs-t8b-",
  dayNumber: 5,
  title: "Stonehenge & Bath өдөртөө аялал",
  description:
    "Stonehenge түүхэн дурсгалт газар болон Bath хотод өдөртөө аялж, Ромын ванн, түүхэн төвөөр алхана. Орой Лондонд буцна."
},
{
  tripPlanId: "wcrZs08IPkSn5gzs-t8b-",
  dayNumber: 6,
  title: "Шоппинг & Буцах өдөр",
  description:
    "Сүүлчийн өдөр Oxford Street, Harrods-д шоппинг хийж сувинер авна. Дараа нь нисэх буудал руу хөдөлж, Английн аялал өндөрлөнө."
},
{
  tripPlanId: "Zfm5IgT8pKv2pAQZIPWnl",
  dayNumber: 1,
  title: "Сингапур хотод хүрэлцэн ирэх & Marina Bay Sands оройн алхалт",
  description:
    "Чанги нисэх буудалд буугаад зочид буудалдаа байрлана. Орой Marina Bay Sands орчмоор алхаж, хотын гэрэл, суваг дагуух үзэмжийг мэдэрнэ."
},
{
  tripPlanId: "Zfm5IgT8pKv2pAQZIPWnl",
  dayNumber: 2,
  title: "Gardens by the Bay & Merlion Park",
  description:
    "Өглөө Gardens by the Bay үзэж Supertree Grove, Flower Dome-г сонирхоно. Дараа нь Merlion Park, Esplanade Theater орчмоор алхана."
},
{
  tripPlanId: "Zfm5IgT8pKv2pAQZIPWnl",
  dayNumber: 3,
  title: "Sentosa арал & Universal Studios",
  description:
    "Sentosa аралд өдөртөө амарч, Universal Studios Singapore-д зочилно. Орой далайн эрэг дээр амрах боломжтой."
},
{
  tripPlanId: "Zfm5IgT8pKv2pAQZIPWnl",
  dayNumber: 4,
  title: "Чайнатаун & Little India",
  description:
    "Өдөр Чайнатаун, Little India дүүрэгт аялж, соёл, хоолны уламжлалыг мэдэрнэ. Орой Orchard Road шоппинг болон кафе-р амарна."
},
{
  tripPlanId: "Zfm5IgT8pKv2pAQZIPWnl",
  dayNumber: 5,
  title: "Буцах өдөр & Шоппинг",
  description:
    "Сүүлчийн өдөр бага шоппинг хийж сувинер худалдан авна. Дараа нь нисэх буудал руу хөдөлж, Сингапурын аялал өндөрлөнө."
},
{
  tripPlanId: "wdoAwxYhthoLP1VIZeUW4",
  dayNumber: 1,
  title: "Мадрид хотод хүрэлцэн ирэх & Оройн алхалт",
  description:
    "Мадридын нисэх буудалд буугаад зочид буудалдаа байрлана. Орой хотын төвөөр богино алхалт хийж, Puerta del Sol, Plaza Mayor-г сонирхоно."
},
{
  tripPlanId: "wdoAwxYhthoLP1VIZeUW4",
  dayNumber: 2,
  title: "Мадрид түүх, урлаг",
  description:
    "Prado музей, Royal Palace үзэж, Мадридын түүх, урлагтай танилцана. Орой Retiro парк болон хотын гудамжаар алхалт хийнэ."
},
{
  tripPlanId: "wdoAwxYhthoLP1VIZeUW4",
  dayNumber: 3,
  title: "Толедо өдөртөө аялал",
  description:
    "Толедо хотод өдөртөө аялж, хуучин хот, сүм хийдүүд, дундад зууны архитектурыг үзнэ. Орой Мадрид руу буцна."
},
{
  tripPlanId: "wdoAwxYhthoLP1VIZeUW4",
  dayNumber: 4,
  title: "Барселона руу шилжих & Гауди урлаг",
  description:
    "Өглөө галт тэргээр Барселона руу явж, Sagrada Familia-г үзнэ. Oрой хотын төвөөр алхаж, Готик дүүргийн гудамжийг сонирхоно."
},
{
  tripPlanId: "wdoAwxYhthoLP1VIZeUW4",
  dayNumber: 5,
  title: "Барселона & Park Güell",
  description:
    "Park Güell, Casa Batlló, La Pedrera зэрэг Гаудигийн бүтээлүүдийг үзэж, хотын урлаг, архитектурыг мэдэрнэ. Орой далайн эрэг орчмоор алхана."
},
{
  tripPlanId: "wdoAwxYhthoLP1VIZeUW4",
  dayNumber: 6,
  title: "Валенсиа руу шилжих",
  description:
    "Өглөө Валенсиа руу шилжинэ. City of Arts and Sciences, Oceanografic үзэж, оройн хоолоо далайн бүтээгдэхүүнээр амтлана."
},
{
  tripPlanId: "wdoAwxYhthoLP1VIZeUW4",
  dayNumber: 7,
  title: "Валенсиа & Beach амралт",
  description:
    "Өдрийн ихэнх хэсэг далайн эрэг дээр амарч, хотын төвөөр алхана. Орой сувинер худалдан авалт."
},
{
  tripPlanId: "wdoAwxYhthoLP1VIZeUW4",
  dayNumber: 8,
  title: "Буцах өдөр",
  description:
    "Сүүлчийн өдөр хотын ойролцоо богино алхалт хийж, нисэх буудал руу хөдөлнө. Испани орны аялал өндөрлөнө."
},
{
  tripPlanId: "eyvxr8RVzqnoDnwFeDMB1",
  dayNumber: 1,
  title: "Бангкок хотод хүрэлцэн ирэх & Оройн алхалт",
  description:
    "Бангкокын нисэх буудалд бууж, зочид буудалдаа байрлана. Орой хотын төвөөр богино алхалт хийж, Khao San Road, Chao Phraya голын ойролцоох хэсгийг сонирхоно."
},
{
  tripPlanId: "eyvxr8RVzqnoDnwFeDMB1",
  dayNumber: 2,
  title: "Бангкок түүх, соёл",
  description:
    "Grand Palace, Wat Pho, Wat Arun сүмүүдийг үзэж, Бангкокын түүх, соёлыг мэдэрнэ. Орой хотын гудамжаар алхалт хийнэ."
},
{
  tripPlanId: "eyvxr8RVzqnoDnwFeDMB1",
  dayNumber: 3,
  title: "Аютая өдөртөө аялал",
  description:
    "Аютая хотод өдөртөө аялж, эртний сүм хийдүүд, чулуун барилгуудыг үзнэ. Орой Бангкок руу буцна."
},
{
  tripPlanId: "eyvxr8RVzqnoDnwFeDMB1",
  dayNumber: 4,
  title: "Чианг Май руу шилжих & Урлаг, соёл",
  description:
    "Өглөө нислэгээр Чианг Май руу явж, Doi Suthep сүмийг үзнэ. Орой хотын төвөөр алхаж, орон нутгийн захуудаар сонирхоно."
},
{
  tripPlanId: "eyvxr8RVzqnoDnwFeDMB1",
  dayNumber: 5,
  title: "Чианг Май & Арлын аялал",
  description:
    "Өдрийн турш орон нутгийн соёл, урлагийн төвүүдийг үзэж, орой хотын гудамжаар алхана. Зөөлөн массаж, орон нутгийн хоолоор амрана."
},
{
  tripPlanId: "eyvxr8RVzqnoDnwFeDMB1",
  dayNumber: 6,
  title: "Пхукет руу шилжих & Далайн эрэг",
  description:
    "Өглөө Пхукет руу нисэж, далайн эрэг дээр амрана. Орой далайн эрэг орчмоор алхаж, далайн хоолоор амтлана."
},
{
  tripPlanId: "eyvxr8RVzqnoDnwFeDMB1",
  dayNumber: 7,
  title: "Буцах өдөр",
  description:
    "Сүүлчийн өдөр богино алхалт хийж, сувинер худалдан авч, нисэх буудал руу хөдөлнө. Тайландын аялал өндөрлөнө."
},
{
  tripPlanId: "SMJF3B_kbMglHjwwnz1Nl",
  dayNumber: 1,
  title: "Хонгконг хотод хүрэлцэн ирэх & Оройн алхалт",
  description:
    "Хонгконгийн нисэх буудалд бууж, зочид буудалдаа байрлана. Орой хотын төвөөр богино алхалт хийж, Tsim Sha Tsui наран шарлагын ойролцоо, Avenue of Stars-г сонирхоно."
},
{
  tripPlanId: "SMJF3B_kbMglHjwwnz1Nl",
  dayNumber: 2,
  title: "Хонгконгийн хотын гол үзвэрүүд",
  description:
    "Victoria Peak-р өглөөний нар үзэж, Star Ferry-р усан замаар аялна. Орой Mong Kok-ийн зах болон Temple Street Night Market-г сонирхоно."
},
{
  tripPlanId: "SMJF3B_kbMglHjwwnz1Nl",
  dayNumber: 3,
  title: "Disneyland Хонгконг",
  description:
    "Бүх өдрийг Хонгконгийн Disneyland-д өнгөрүүлж, тоглоом, шоу үзэж, хүүхэд насны сэтгэлээ сэргээх. Орой хот руу буцна."
},
{
  tripPlanId: "SMJF3B_kbMglHjwwnz1Nl",
  dayNumber: 4,
  title: "Лантау арал & Big Buddha",
  description:
    "Өглөө Лантау арал руу явж, Tian Tan Big Buddha-г үзнэ. Орой Ngong Ping Village болон Cable Car аялалаар сонирхоно."
},
{
  tripPlanId: "SMJF3B_kbMglHjwwnz1Nl",
  dayNumber: 5,
  title: "Буцах өдөр & Сувинер худалдан авалт",
  description:
    "Өглөө богино алхалт хийж, сувинер худалдан авсны дараа нисэх буудал руу хөдөлнө. Хонгконгийн аялал өндөрлөнө."
}








 ]
  });
  return NextResponse.json(response) ;
};