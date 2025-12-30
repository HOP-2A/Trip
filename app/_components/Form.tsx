"use client";

import { ParamValue } from "next/dist/server/request/params";
import { useEffect, useState } from "react";
import { days } from "../Custom-Trip/[CustomTripDay]/page";

type FormItem = {
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

  useEffect(() => {
    setForms(
      Array.from({ length: duration }, () => ({
        title: "",
        description: "",
      }))
    );
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
  };

  const c = (index: number) => {
    handleCreate(index), postCustomTripData(index);
  };

  return (
    <div className="max-w-xl mx-auto space-y-4">
      {durationArray.map((_, index) => {
        const day = days[index];
        return (
          <div key={`form-${index}`} className="border rounded p-4 space-y-2">
            {day ? (
              <>
                <p>{day.title}</p>
                <p>{day.description}</p>
              </>
            ) : (
              <>
                <h3 className="font-semibold">{index + 1}. Item</h3>
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
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}
