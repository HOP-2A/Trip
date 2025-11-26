import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
export const Dialog = () => {
  return (
    <div>
      <div>
        <AlertDialog>
          <AlertDialogTrigger>Хэрхэн аялал бүтээх вэ?</AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Хэрхэн аялал бүтээх вэ?</AlertDialogTitle>
              <AlertDialogDescription>
                <div> 1. Аялах хот болон хугацаагаа сонгох </div>
                <div>2. Хамт аялахаар төлөвлөж буй хүмүүсийн тоог оруулах</div>
                3. Нэмэлтээр та ямар төрлийн бүтээгдэхүүн үйлчилгээг тухайн
                төлөвлөгөөнд багтаах хүсэлтэй байгааг оруулах 1 хүний зардал
                Авах бүтээгдэхүүн үйлчилгээ (Нислэг, буудал, хийх зүйлс ...)
                Нэмэлтээр таны аялалд багтах шаардлагатай зүйлс
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogAction>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
};
