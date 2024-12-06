import React from "react";
import "./App.css";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CounterManager from "./components/ui/counterManager";

function App() {
  return (
    <div className="flex justify-center items-center">
      <div className="w-full">
        <Card>
          <CardHeader>
            <CardTitle className="flex justify-center items-center">Counter Application</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <CounterManager />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default App;