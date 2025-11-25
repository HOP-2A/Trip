import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Header } from "./_components/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 relative">
      <Header />
      <div className="relative">
        <img
          src={"/nature.jpg"}
          alt="Nature Photo"
          className="w-full h-150 object-cover object-center"
        />
        <div className="flex flex-col gap-10 items-center justify-center absolute inset-0">
          <h1 className="text-white text-5xl font-extrabold text-center px-4">
            Plan Your Next Adventure
          </h1>
          <Button className="bg-gradient-to-r from-green-400 to-cyan-300 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:scale-105 transition-transform">
            Start Planning
          </Button>
        </div>
      </div>

      <div className="p-8 flex justify-center">
        <Input
          type="text"
          placeholder="Search for a city or trip..."
          className="w-2/3 sm:w-1/2 border border-gray-300 rounded-full px-6 py-3 shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
        />
      </div>

      <div className="p-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-700">
          Featured Trips
        </h2>
      </div>
      <div className="p-8">
        <div className="text-2xl font-bold mb-6 text-gray-700">Your Trips</div>
      </div>
    </div>
  );
}
