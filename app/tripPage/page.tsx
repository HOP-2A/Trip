import { Button } from "@/components/ui/button";

const Page = () => {
  return (
    <div>
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-6"></div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="col-span-1 bg-gray-800 rounded-2xl p-4 shadow-md">
            <div className=" text-4xl font-bold text-white">Overview</div>

            <div className="text-sm text-white mt-2 space-y-1">
              <div>Start date:</div>
              <div>End date:</div>
              <div>Duration:</div>
              <div>Group:</div>
            </div>

            <div className="flex flex-col gap-2 mt-2">
              <Button className="bg-green-400">Add</Button>
              <Button className="bg-red-500">Remove</Button>
            </div>
          </div>

          <div className="col-span-2 bg-gray-800 rounded-2xl p-4 shadow-md">
            <div className="flex items-center justify-between mb-4"></div>

            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-1 flex flex-col items-center">
                <div className="w-2 h-2 rounded-full bg-indigo-400"></div>
                <div className="w-px bg-gray-700 flex-1 mt-2"></div>
              </div>

              <div className="col-span-11">
                <div className="mt-6 flex justify-end">
                  <div className="px-4 py-2 rounded-lg bg-emerald-500 text-sm font-medium cursor-pointer">
                    + Add activity +
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-gray-900 p-4 rounded-xl border border-gray-700">
              <div className="text-sm font-medium">trip notes</div>
              <div className="mt-2 w-full bg-gray-800 border border-gray-700 rounded-md p-3 text-sm h-24"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
