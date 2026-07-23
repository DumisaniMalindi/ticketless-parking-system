function History({ sessions }) {
  return (
    <div>
      <h2>Parking History</h2>

      {sessions.length === 0 ? (
        <p>No parking sessions yet.</p>
      ) : (
        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>Plate</th>
              <th>Status</th>
              <th>Fee</th>
              <th>Entry Time</th>
              <th>Exit Time</th>
            </tr>
          </thead>

          <tbody>
            {sessions.map((session) => (
              <tr key={session.id}>
                <td>{session.plate}</td>
                <td>{session.status}</td>
                <td>R{session.fee}</td>
                <td>{session.entryTime}</td>
                <td>{session.exitTime || "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default History;