"use client";

import { ParamValue } from "next/dist/server/request/params";
import { useEffect, useState } from "react";
import { days } from "../Custom-Trip/[CustomTripDay]/page";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Info } from "lucide-react";

type FormItem = {
  title: string;
  description: string;
};

type TripDay = {
  id: string;
  dayNumber: number;
  title: string;
  description: string;
};

export default function DynamicCreateForm({
  duration,
  dayId,
  days,
}: {
  duration: number;
  dayId: ParamValue;
  days: days[];
}) {
  const durationArray = Array.from({ length: duration }, (_, i) => i + 1);
  const [forms, setForms] = useState<FormItem[]>([]);
  const [tripDays, setTripDays] = useState<TripDay[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getDayData = async () => {
    setIsLoading(true);
    const res = await fetch(`/api/trip/tripPost/customTripDay/${dayId}`);
    const data = await res.json();
    setTripDays(data[0]?.days ?? []);
    setIsLoading(false);
  };
  useEffect(() => {
    setForms(
      Array.from({ length: duration }, () => ({
        title: "",
        description: "",
      }))
    );
    getDayData();
  }, [duration]);

  const handleChange = (
    index: number,
    field: "title" | "description",
    value: string
  ) => {
    setForms((prev) =>
      prev.map((item, i) => (i === index ? { ...item, [field]: value } : item))
    );
  };

  const handleCreate = (index: number) => {
    const { title, description } = forms[index];

    if (!title || !description) {
      alert("Title, Description бөглөнө үү");
      return;
    }
    setForms((prev) =>
      prev.map((item, i) =>
        i === index ? { title: "", description: "" } : item
      )
    );
  };

  const postCustomTripData = async (index: number) => {
    await fetch(`/api/trip/tripPost/customTripDay/${dayId}`, {
      method: "POST",
      body: JSON.stringify({
        title: forms[index].title,
        description: forms[index].description,
        dayNumber: index + 1,
      }),
    });
    window.location.reload();
  };

  const c = (index: number) => {
    handleCreate(index), postCustomTripData(index);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <Info className="w-6 h-6 text-[#2e5d4d]" /> Аяллын хөтөлбөр
      </h2>
      {durationArray.map((_, index) => {
        const dayNumber = index + 1;

        const existingDay = tripDays.find((d) => d.dayNumber === dayNumber);

        return (
          <div key={`form-${index}`}>
            {dayNumber || isLoading ? (
              <div>
                <Accordion
                  type="single"
                  collapsible
                  className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <AccordionItem value={`day-${dayNumber}`}>
                    <AccordionTrigger className="px-5 py-4 hover:no-underline font-bold text-lg">
                      <div className="flex items-center gap-3">
                        <span className="bg-green-50 text-[#2e5d4d] px-3 py-1 rounded-lg text-sm">
                          Өдөр {dayNumber}
                        </span>

                        {existingDay ? (
                          <span className="text-gray-800 font-semibold">
                            – {existingDay.title}
                          </span>
                        ) : (
                          <input
                            className="border px-2 py-1 w-full rounded"
                            placeholder={`Title ${dayNumber}`}
                            value={forms[index]?.title ?? ""}
                            onChange={(e) =>
                              handleChange(index, "title", e.target.value)
                            }
                          />
                        )}
                      </div>
                    </AccordionTrigger>

                    <AccordionContent className="px-5 pb-5 text-gray-600 text-base leading-relaxed border-t border-gray-50 pt-4">
                      {existingDay ? (
                        <>
                          <div className="text-gray-600">
                            {existingDay.description}
                          </div>
                        </>
                      ) : (
                        <>
                          <input
                            className="border px-2 py-1 w-full rounded"
                            placeholder={`Description ${dayNumber}`}
                            value={forms[index]?.description ?? ""}
                            onChange={(e) =>
                              handleChange(index, "description", e.target.value)
                            }
                          />

                          <button
                            onClick={() => c(index)}
                            className="bg-black text-white px-3 py-1 rounded"
                          >
                            Create
                          </button>
                        </>
                      )}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            ) : (
              <div>
                <h3 className="font-semibold">Day {index + 1}</h3>
                <input
                  className="border px-2 py-1 w-full rounded"
                  placeholder={`Title ${index + 1}`}
                  value={forms[index]?.title ?? ""}
                  onChange={(e) => handleChange(index, "title", e.target.value)}
                />
                <input
                  className="border px-2 py-1 w-full rounded"
                  placeholder={`Description ${index + 1}`}
                  value={forms[index]?.description ?? ""}
                  onChange={(e) =>
                    handleChange(index, "description", e.target.value)
                  }
                />
                <button
                  onClick={() => c(index)}
                  className="bg-black text-white px-3 py-1 rounded"
                >
                  Create
                </button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
