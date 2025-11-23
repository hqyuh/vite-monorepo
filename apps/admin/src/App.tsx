import { useMainStore } from "@/stores/useMainStore";

import { Button } from "@ui/components/ui/button";
import { Card, CardContent } from "@ui/components/ui/card";

function App() {
  const { count, increment } = useMainStore();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <Card className="card">
        <CardContent className="flex flex-col items-center gap-4">
          <Button onClick={increment}>count is {count}</Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
