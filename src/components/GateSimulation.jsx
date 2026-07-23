function GateSimulation({ gateOpen }) {
  return (
    <div className="road">
      <div className="car">🚗</div>

      <div className="booth">🏢</div>

      <div className="gate-post"></div>

      <div
        className={`gate-arm ${
          gateOpen ? "open" : "closed"
        }`}
      ></div>
    </div>
  );
}

export default GateSimulation;
