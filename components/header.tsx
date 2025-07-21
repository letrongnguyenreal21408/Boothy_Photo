import Link from "next/link";
import { Button } from "./ui/button";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Github, Globe, Instagram } from "lucide-react";
import Image from "next/image";

import tiktokLogo from "@/public/tiktok.svg";

export const Header = () => {
  return (
    <header className="flex items-center justify-between p-5">
      <Link href="/" className="font-sail">
        Boothy
      </Link>

      <Dialog>
        <DialogTrigger asChild>
          <Button variant="link" className="text-xl">
            About
          </Button>
        </DialogTrigger>
        <DialogContent className="bg-[#F6F0F0] md:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-3xl">
              Welcome to Boothy! 🎉📸
            </DialogTitle>
            <DialogDescription>Boothy là gì ?</DialogDescription>
          </DialogHeader>
          <div className="space-y-5 text-center text-xl/relaxed sm:text-left">
            <p>
              Boothy – nơi mỗi tấm ảnh là một chút yêu thương đóng khung lại! 🎀📸
              Boothy không chỉ là photobooth, mà là góc nhỏ để bạn và hội bạn thân lưu giữ những khoảnh khắc siêu dễ thương, 
              siêu “chill”.
              Từ bộ lọc xinh xắn, ánh sáng lung linh cho tới vibe retro đáng yêu, mọi thứ ở đây đều được tạo ra để biến những
              giây phút vui vẻ
              thành kỷ niệm mềm mại, 
             đầy màu sắc và không bao giờ lỗi thời.
            </p>
            <p>
             📷 Chụp nhé. Cười nhé. Lung linh nhé. Gói trọn kỷ niệm trong từng cú 
             nháy xinh yêu!
            </p>
          </div>
          <DialogFooter className="gap-3">
            <Link href="https://www.instagram.com/trongnguyenreal?igsh=MWY1YjNhMm5hejJvag==/" target="_blank">
              <Instagram className="h-5 w-5" />
            </Link>
            <Link href="https://www.tiktok.com/@chocolatedz_208?_t=ZS-8yCy6Sd36y9&_r=1" target="_blank">
              <Image src={tiktokLogo} alt="" className="h-5 w-5" />
            </Link>
            <Link href="https://letrongnguyenreal.vercel.app/" target="_blank">
              <Github />
            </Link>
            <Link href="https://letrongnguyenreal.vercel.app/" target="_blank">
              <Globe />
            </Link>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </header>
  );
};
