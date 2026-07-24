import { useState } from "react";
import GateSimulation from "../components/GateSimulation";

function Exit({ completeSession }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [gateOpen, setGateOpen] = useState(false);

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Please select an image first");
      return;
    }

    completeSession();

    setGateOpen(true);

    setTimeout(() => {
      setGateOpen(false);
    }, 3000);

    alert("Vehicle exit processed");
  };

  return (
    <div>
      <h2>Vehicle Exit</h2>

      <input
        type="file"
        onChange={(e) => setSelectedFile(e.target.files[0])}
      />

      <br />
      <br />

      <button onClick={handleUpload}>
        Upload Exit Image
      </button>

      <br />
      <br />

      <GateSimulation gateOpen={gateOpen} />
    </div>
  );
}

export default Exit;