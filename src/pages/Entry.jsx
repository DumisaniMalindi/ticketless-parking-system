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
      const response = await testLambda();

      const data =
        typeof response.body === "string"
          ? JSON.parse(response.body)
          : response;

      console.log("Parsed Data:", data);

      const uploadResponse = await fetch(
        data.uploadUrl,
        {
          method: "PUT",
          body: selectedFile,
        }
      );

      if (!uploadResponse.ok) {
        throw new Error(
          `Upload failed: ${uploadResponse.status}`
        );
      }

      alert("Image uploaded successfully!");

      addSession();

      setGateOpen(true);

      setTimeout(() => {
        setGateOpen(false);
      }, 3000);
    } catch (error) {
      console.error(error);
      alert(`Upload failed: ${error.message}`);
    }
  };
  return (
    <div>
      <h2>Vehicle Entry</h2>

      <input
        type="file"
        onChange={(e) =>
          setSelectedFile(e.target.files[0])
        }
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