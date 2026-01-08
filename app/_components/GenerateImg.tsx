import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { upload } from "@vercel/blob/client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";

export const GenerateImage = ({
  imageUrl,
  setImageUrl,
}: {
  imageUrl: string[];
  setImageUrl: Dispatch<SetStateAction<string[]>>;
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [prompt, setPrompt] = useState("");

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setPrompt(event.target.value);
  };
  const generateImage = async () => {
    if (!prompt.trim()) return;
    setIsLoading(true);
    try {
      const response = await fetch("/api/images/generate", {
        method: "POST",
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) throw new Error("Failed to generate");

      const blob = await response.blob();

      const file = new File([blob], "generated.png", { type: "image/png" });

      const uploaded = await upload(file.name, file, {
        access: "public",
        handleUploadUrl: "/api/images/upload",
      });
      setImageUrl((prev) => [...prev, uploaded.url]);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };
  return (
    <div className="flex">
      <Input
        placeholder="Your generated AI image "
        name="input"
        className="w-80"
        onChange={(e) => {
          handleInput(e);
        }}
        value={prompt}
        disabled={isLoading}
      />
      <Button
        onClick={generateImage}
        disabled={!prompt.trim() || isLoading}
        className={`bg-[#2e5d4d] shadow  w-[110px] transition-all duration-200 font-semibold rounded-lg ${
          !prompt.trim() || (isLoading && "cursor-not-allowed")
        }`}
      >
        {isLoading ? (
          <div className="flex justify-items-center">
            <Spinner /> Generating ...
          </div>
        ) : (
          "Generate"
        )}
      </Button>
    </div>
  );
};
