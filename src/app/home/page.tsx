import Link from 'next/link'
import type { Route } from 'next';

const Home:React.FC = (children) => {
  
    return(
    
        <>
        <main className="flex min-h-screen w-full justify-between p-24">
        <h1>hi</h1>
        <p>click to view list...</p>
        <Link href="/list">List</Link>
        </main>
        </>
    );
    }

    export default Home;