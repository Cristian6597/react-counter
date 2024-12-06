import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Counter = ({ name, value, onValueChange, onDelete }) => {
  const increment = () => onValueChange(value + 1);
  const decrement = () => onValueChange(value - 1);
  const reset = () => onValueChange(value = 0);

  let textColor = "text-black";
  if (value > 0) textColor = "text-green-500";
  else if (value < 0) textColor = "text-red-500";

  return (
    <Card className="w-80 shadow-md">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>Aumenta e dimininuisci il valore del contatore</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-4">
        <p className={`text-4xl font-bold ${textColor}`}>{value}</p>
        <div className="flex gap-2">
          <Button onClick={decrement}>-</Button>
          <Button onClick={increment}>+</Button>
          <Button onClick={reset}>Reset</Button>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <Trash2 onClick={onDelete} className="cursor-pointer text-red-500" />
      </CardFooter>
    </Card>
  );
};

export default Counter;
