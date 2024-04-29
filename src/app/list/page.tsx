"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

type UserType = {
  id: number;
  avatar: string;
  first_name: string;
  last_name: string;
  email: string;
};

const List: React.FC = () => {
  const [userList, setUserList] = useState<UserType[]>([]);
  let [users, setUsers] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://reqres.in/api/users?page=1');
        setUserList(response.data.data);
        users = response.data.data;
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex min-h-screen flex-col w-full items-center justify-between p-24">
      <table>
        <thead>
          <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2 h-4 w-4 ">Photo</th>
            <th className="px-4 py-2">First Name</th>
            <th className="px-4 py-2">Last Name</th>
            <th className="px-4 py-2">Email</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((user) => (
            <tr key={user.id}>
              <td className="border px-4 py-2">{user.id}</td>
              <td className="border px-4 py-2">
               <>                
                  <Link href={`/list/${user.id}`}>
                    <img src={user.avatar} alt="User Avatar" className="h-12 w-12 rounded-full"/>
                  </Link>
                </>
              </td>
              <td className="border px-4 py-2">{user.first_name}</td>
              <td className="border px-4 py-2">{user.last_name}</td>
              <td className="border px-4 py-2">{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;