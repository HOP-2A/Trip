export const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-b from-[#1f2547] to-[#1b1f3a] text-white">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-4">
            <div className="text-xl font-semibold">Travely</div>
            <p className="text-sm text-white">
              Email: travelyteaminfo@gmail.com
            </p>
            <p className="text-sm text-white">
              Багийн гишүүд:
              <div className="mt-5">
                <p>- Энхсайхан</p>
                <p>- Болорсайхан</p>
                <p>- Болорнаран</p>
                <p>- Төрбат</p>
              </div>
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">БИДНИЙ ТУХАЙ</h4>
            <li className="hover:text-white cursor-pointer">Travely</li>
          </div>

          <div className="space-y-4">
            <div className="bg-[#ff9156] rounded-xl p-4 text-[#1b1f3a]">
              <p className="text-sm font-medium mb-3">
                Хэрэглэгчийн санал, гомдол, хүсэлт илгээх
              </p>
              <div className="bg-white rounded-lg p-3 flex items-center justify-center">
                <div className="w-28 h-28 bg-gray-200" />
              </div>
              <p className="text-xs mt-2 text-center">QR код уншуулах</p>
            </div>
          </div>
        </div>

        {/* divider */}
        <div className="mt-12 border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/50">
            © 2025 Зохиогчийн эрх хуулийн дагуу iTRIP ХХК эзэмшинэ.
          </p>

          <div className="flex gap-3">
            <div className="h-10 w-32 bg-black rounded-md" />
            <div className="h-10 w-32 bg-black rounded-md" />
          </div>
        </div>
      </div>
    </footer>
  );
};
