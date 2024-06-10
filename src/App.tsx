import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisable, setAlertVisibilty] = useState(false);
  return (
    <div>
      {alertVisable && (
        <Alert onClose={() => setAlertVisibilty(false)}>My alert</Alert>
      )}
      <Button color="primary" onClick={() => setAlertVisibilty(true)}>
        My Button
      </Button>
    </div>
  );
}
export default App;
