'use client'
import Link from 'next/link';
import { GridExample } from '../table/page';
const Hoome:React.FC = () => {
 
  
    function addCommasToNumber(num: number): string {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");}

    return(
        <>
        <main className="flex min-h-screen w-full justify-between p-24">
       <h1>{addCommasToNumber(9997)}</h1>
        <Link href="/list">List</Link>
        <GridExample/>
        </main>
        </>
    );
    }

    export default Hoome;