import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { prompt } = await req.json();

  if (!prompt) {
    return NextResponse.json({ error: "Prompt is required" }, { status: 400 });
  }

  try {
    const response = await fetch(
      "https://router.huggingface.co/hf-inference/models/black-forest-labs/FLUX.1-schnell",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.HF_TOKEN}`,
          "Content-Type": "application/json",
          "X-Wait-For-Model": "true",
        },
        body: JSON.stringify({
          inputs: prompt,
          parameters: {
            negative_prompt: "blurry, bad quality, distorted",
            num_inference_steps: 5,
            guidance_scale: 7.5,
          },
        }),
      }
    );

    if (!response.ok) {
      const errorMessage = await response.text();
      return NextResponse.json(
        { error: "HuggingFace error", details: errorMessage },
        { status: response.status }
      );
    }

    const arrayBuffer = await response.arrayBuffer();

    return new Response(arrayBuffer, {
      headers: {
        "Content-Type": "image/png",
      },
    });
  } catch (err) {
    return NextResponse.json(
      { error: "Server failed", details: String(err) },
      { status: 500 }
    );
  }
}
