import { redirect } from "next/navigation";

export async function POST(request: Request) {
  const formData = await request.formData();
  const files = formData.getAll("file");

  if (!files || files.length === 0) {
    return new Response("No files uploaded", { status: 400 });
  }

  const images: string[] = [];
  for (const file of files) {
    if (file instanceof File) {
      const buffer = Buffer.from(await file.arrayBuffer());
      const base64 = buffer.toString("base64");
      const mimeType = file.type;
      images.push(`data:${mimeType};base64,${base64}`);
    }
  }

  const params = new URLSearchParams();
  for (const image of images) {
    params.append("images", image);
  }

  return redirect(`/edit?${params.toString()}`);
}
