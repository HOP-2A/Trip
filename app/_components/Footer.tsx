export const Footer = () => {
  return (
    <footer className="w-full bg-linear-to-b from-[#1f2547] to-[#1b1f3a] text-white mt-30">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-4">
            <div className="text-xl font-semibold">Travely</div>
            <p className="text-sm text-white">
              Email: travelyteaminfo@gmail.com
            </p>
            <div className="text-sm text-white">
              Багийн гишүүд:
              <div className="mt-5">
                <p>- Болорнаран</p>
                <p>- Төрбат</p>
                <p>- Болорсайхан</p>
                <p>- Энхсайхан</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white pt-6 flex flex-col items-center justify-between gap-4">
          <p className="text-xs text-gray-400">
            © 2025 Pinecone-ны turuugiinmaanaguud ангийн нэг уран бүтээл
          </p>
        </div>
      </div>
    </footer>
  );
};
