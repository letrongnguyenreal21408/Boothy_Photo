import { redirect } from "next/navigation";

export async function POST(request: Request) {
  const formData = await request.formData();
  const files = formData.getAll("file");

  if (!files || files.length === 0) {
    return new Response("No files uploaded", { status: 400 });
  }

  // Chuyển đổi tất cả các file ảnh thành base64
  const images: string[] = [];

  for (const file of files) {
    if (file instanceof File) {
      const buffer = Buffer.from(await file.arrayBuffer());
      const base64 = buffer.toString("base64");
      const mimeType = file.type;
      images.push(`data:${mimeType};base64,${base64}`);
    }
  }

  // Redirect đến trang edit và truyền ảnh qua query string
  const params = new URLSearchParams();
  for (const image of images) {
    params.append("images", image);
  }

  // ❗ Quan trọng: phải return redirect()
  return redirect(`/edit?${params.toString()}`);
}
