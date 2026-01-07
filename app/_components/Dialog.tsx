import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function DialogDemo() {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button variant="outline"> Хэрхэн аялал бүтээх вэ?</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle> Хэрхэн аялал бүтээх вэ?</DialogTitle>
            <DialogDescription>
              <div> 1. Аялах хот болон хугацаагаа сонгох </div>
              <div>2. Хамт аялахаар төлөвлөж буй хүмүүсийн тоог оруулах</div>
              <div>
                3. Нэмэлтээр та ямар төрлийн бүтээгдэхүүн үйлчилгээг тухайн
                төлөвлөгөөнд багтаах хүсэлтэй байгааг оруулах 1 хүний зардал
                Авах бүтээгдэхүүн үйлчилгээ (Нислэг, буудал, хийх зүйлс ...)
                Нэмэлтээр таны аялалд багтах шаардлагатай зүйлс
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </form>
    </Dialog>
  );
}
