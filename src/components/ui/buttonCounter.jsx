import React, { useState } from "react";
import { Button } from "./button";
import { Trash2 } from "lucide-react";

const Counter = ({ onDelete }) => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);

  // Cambia colore in base al valore del contatore
  let textColor = "text-black";
  if (count > 0) textColor = "text-green-500";
  else if (count < 0) textColor = "text-red-500";

  return (
    <div className="flex flex-col items-center gap-4 border p-4 rounded-md">
      <p className={`text-2xl font-bold ${textColor}`}>{count}</p>
      <div className="flex gap-2">
        <Button onClick={decrease}>-</Button>
        <Button onClick={increment}>+</Button>
        <button onClick={onDelete} className="text-red-500">
          <Trash2 />
        </button>
      </div>
    </div>
  );
};

export default Counter;
