import { useEffect, useState } from "react";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("userData"));

    if (Array.isArray(storedUsers)) {
      setUsers(storedUsers);
    } else if (storedUsers) {
      setUsers([storedUsers]);
    } else {
      setUsers([]);
    }
  }, []);

  return (
    <div>
      <h2>Registered Developers</h2>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Skills</th>
            <th>Password</th>
          </tr>
        </thead>

        <tbody>
          {users.length === 0 ? (
            <tr>
              <td colSpan="6">No Users Registered</td>
            </tr>
          ) : (
            users.map((user, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{user.fullname}</td>
                <td>{user.email}</td>
                <td>{user.gender}</td>
                <td>{user.skills}</td>
                <td>{user.password}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}