'use client'

import Link from 'next/link';
import formatDate from 'mfpop';

const Home:React.FC = (children) => {
 
    let ex = formatDate("25-1982-10","dd-yyyy-MM","dd-MMMM-yyyy");
    
    function addCommasToNumber(num: number): string {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");}

    return(
        <>
        <main className="flex min-h-screen w-full justify-between p-24">
       <h1>{addCommasToNumber(9997)}</h1>
        <h6>{ex}</h6>
        <Link href="/list">List</Link>
        </main>
        </>
    );
    }

    export default Home;