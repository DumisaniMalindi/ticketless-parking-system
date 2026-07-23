function Dashboard({ sessions }) {
  const active = sessions.filter(
    (session) => session.status === "ACTIVE"
  ).length;

  const completed = sessions.filter(
    (session) => session.status === "COMPLETED"
  ).length;

  const revenue = sessions
    .filter((session) => session.status === "COMPLETED")
    .reduce((total, session) => total + session.fee, 0);

  return (
    <div>
      <h2>Parking Overview</h2>

      <div className="cards">
        <div className="card">
          <h3>Active Sessions</h3>
          <p>{active}</p>
        </div>

        <div className="card">
          <h3>Completed Sessions</h3>
          <p>{completed}</p>
        </div>

        <div className="card">
          <h3>Total Revenue</h3>
          <p>R{revenue}.00</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;