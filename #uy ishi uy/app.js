import React from "react";

const users = [
  { name: "Scot Carroll", company: "O'Reilly-Treutel", email: "carroll_scot@example.net", albums: 10, photos: 380 },
  { name: "Barbra Nolan", company: "Rogahn and Sons", email: "barbra.nolan@example.org", albums: 5, photos: 173 },
  { name: "Keith Wyman", company: "Zemlak Inc", email: "keith.wyman@example.com", albums: 7, photos: 985 },
  { name: "Gustavo Kulas", company: "Rau-White", email: "kulas.gustavo@example.net", albums: 7, photos: 351 },
  { name: "Thad Tillman", company: "Bauch Inc", email: "tillman.thad@example.com", albums: 7, photos: 642 },
  { name: "Abel O'Conner", company: "Frami Group", email: "abel.conner@example.org", albums: 4, photos: 526 },
  { name: "Wilmer Fadel", company: "Ferry, Gusikowski and Kerluke", email: "wilmer.fadel@example.net", albums: 8, photos: 218 },
  { name: "Mariella Pagač", company: "Christiansen-Kilback", email: "pagac_mariella@example.com", albums: 10, photos: 434 },
  { name: "Alise Hansen", company: "Upton LLC", email: "alise_hansen@example.com", albums: 6, photos: 569 },
  { name: "Naoma Wyman", company: "Ernser-Cummings", email: "wyman.naoma@example.com", albums: 3, photos: 416 },
];

const UserList = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">All Users</h2>
      <table className="w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Name</th>
            <th className="border p-2">Company</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Albums</th>
            <th className="border p-2">Photos</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="border p-2">{user.name}</td>
              <td className="border p-2">{user.company}</td>
              <td className="border p-2">{user.email}</td>
              <td className="border p-2 text-center">{user.albums}</td>
              <td className="border p-2 text-center">{user.photos}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
