import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { User } from "lucide-react";

export const Pop = ({
  totalPerson,
  setTotalPerson,
}: {
  totalPerson: number;
  setTotalPerson: Dispatch<SetStateAction<number>>;
}) => {
  const [count, setCount] = useState<number>(1);
  const [count2, setCount2] = useState<number>(0);
  const [count3, setCount3] = useState<number>(0);

  useEffect(() => {
    setTotalPerson(count + count2 + count3);
  }, [count, count2, count3]);

  return (
    <div>
      <Popover>
        <PopoverTrigger>
          <User></User>
        </PopoverTrigger>
        <PopoverContent>
          <div>
            Том хүн (12+) нас
            <div>
              <Button
                variant="ghost"
                onClick={() => {
                  setCount(count - 1);
                }}
              >
                -
              </Button>
              {count}
              <Button
                variant="ghost"
                onClick={() => {
                  setCount(count + 1);
                }}
              >
                +
              </Button>
            </div>
          </div>
          <div>
            Хүүхэд (2-11) нас
            <Button
              variant="ghost"
              onClick={() => {
                setCount2(count2 - 1);
              }}
            >
              -
            </Button>
            {count2}
            <Button
              variant="ghost"
              onClick={() => {
                setCount2(count2 + 1);
              }}
            >
              +
            </Button>
          </div>
          <div>
            Нярай (0-1) нас
            <Button
              variant="ghost"
              onClick={() => {
                setCount3(count3 - 1);
              }}
            >
              -
            </Button>
            {count3}
            <Button
              variant="ghost"
              onClick={() => {
                setCount3(count3 + 1);
              }}
            >
              +
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};
