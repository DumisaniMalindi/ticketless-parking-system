import { useState } from "react";
import GateSimulation from "../components/GateSimulation";
import { testLambda } from "../services/apiService";

function Entry({ addSession }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [gateOpen, setGateOpen] = useState(false);

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Please select an image first");
      return;
    }

    try {
      const data = await testLambda();

      console.log(data);

      alert("Lambda connected successfully");
    } catch (error) {
      console.error(error);

      alert("Lambda connection failed");
      return;
    }

    addSession();

    setGateOpen(true);

    setTimeout(() => {
      setGateOpen(false);
    }, 3000);

    alert("Image selected successfully");
  };

  return (
    <div>
      <h2>Vehicle Entry</h2>

      <input
        type="file"
        onChange={(e) => setSelectedFile(e.target.files[0])}
      />

      <br />
      <br />

      <button onClick={handleUpload}>
        Upload Entry Image
      </button>

      <br />
      <br />

      <GateSimulation gateOpen={gateOpen} />
    </div>
  );
}

export default Entry;