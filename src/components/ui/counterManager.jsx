import React, { useState } from "react";
import Counter from "./Counter";
import { Button } from "@/components/ui/button";
import { Switch } from "@radix-ui/react-switch";
import { Label } from "@/components/ui/label";

const CounterManager = () => {
  const [counters, setCounters] = useState([]);
  const [counterCount, setCounterCount] = useState(1);
  const [isChecked, seIsChecked] = useState("false"); // aggiungere un bottone o uno switch per min max


  const addCounter = () => {
    setCounters([
      ...counters,
      { id: Date.now(), name: `Counter ${counterCount}`, value: 0 },
    ]);
    setCounterCount(counterCount + 1);
  };
  const removeCounter = () => {
    if (counters.length > 0) {
      setCounters([counters[0]]); // Mantiene solo il primo contatore
    }
  };
  const resetCounter = () => {
    setCounters((prevCounters) =>
      prevCounters.map((counter) => ({ ...counter, value: 0 }))
    );
  };

  const updateCounterValue = (id, newValue) => {
    setCounters((prevCounters) =>
      prevCounters.map((counter) =>
        counter.id === id ? { ...counter, value: newValue } : counter
      )
    );
  };

  return (
    <div className="flex flex-col items-center gap-6">
      <Button onClick={addCounter}>Add Counter</Button>
      <Button onClick={resetCounter} className="bg-red-500 text-white">
        Reset Counters
      </Button>
      <Button onClick={removeCounter} className="bg-red-500 text-white">
        Remove Counters
      </Button>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            name={counter.name}
            value={counter.value}
            onValueChange={(newValue) => updateCounterValue(counter.id, newValue)}
            onDelete={() =>
              setCounters(counters.filter((c) => c.id !== counter.id))
            }
          />
        ))}
      </div>
    </div>
  );
};

export default CounterManager;

