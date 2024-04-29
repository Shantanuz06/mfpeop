'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Image from 'next/image';



type UserPageProps = {
  params: {id: number}
};

const UserPage: React.FC<UserPageProps> = (params) => {

  type UserType = {
  id: number;
  avatar: string;
  first_name: string;
  last_name: string;
  email: string;
};

 
 let [list,setList]=useState<UserType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://reqres.in/api/users?page=1');
       
       let user = response.data.data;
       let uid= params.params.id;
       
        const temp=user.filter((item:UserType) => {console.log(item); return item.id==uid});
        setList(temp);
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
     
    };

    

    fetchData();
  });

  return (
    <>
    
    {list.length!==0 && <div key={list[0].id} className="flex flex-col items-center justify-center min-h-screen">
    <img  src={list[0].avatar} alt="user Avatar" className="rounded-full w-52 h-52 mb-4" />
    <div className="bg-gray-900 p-12 rounded-md shadow-md">
      <p className="text-gray-300">ID: {list[0].id}</p>
      <p className="text-xl text-gray-400 font-semibold">{`${list[0].first_name} ${list[0].last_name}`}</p>
      <p className="text-gray-450">{list[0].email}</p>
      
      </div>
  </div>}
  
  </>
);
};

export default UserPage;

