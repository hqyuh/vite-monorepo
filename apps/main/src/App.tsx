import { useMainStore } from "@/stores/useMainStore";

import viteLogo from "/vite.svg";
import reactLogo from "./assets/react.svg";
import { Button } from "@ui/components/ui/button";
import { Card, CardContent } from "@ui/components/ui/card";

function App() {
  const { count, increment } = useMainStore();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <div className="flex items-center justify-center gap-4 mb-4">
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="text-gray-400">Vite + React</h1>
      <Card className="card">
        <CardContent className="flex flex-col items-center gap-4">
          <Button onClick={increment}>count is {count}</Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
