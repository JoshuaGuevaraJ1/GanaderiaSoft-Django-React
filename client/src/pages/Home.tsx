// src/pages/Home.tsx
import React from 'react';
import useDocumentTitle from '../hooks/useDocumentTitle';

const Home: React.FC = () => {
    useDocumentTitle('Home');
    return (
        <><div className="relative rounded-t-lg w-full h-[400px] bg-center bg-cover bg-[url('/bg-login.jpg')] bg-blend-multiply mb-4">
            <div className="absolute inset-0 bg-linear-to-t from-white dark:from-gray-800 via-transparent to-transparent text-center pt-14">
                <h1 className="text-4xl font-extrabold text-white lg:text-7xl">GanaderíaSfot</h1>
                <p className="text-lg font-bold lg:text-3xl text-white">Un mejor control agandero</p>
            </div>
        </div><div className="bg-[url('/img/bg-login.jpg')] bg-clip-text text-transparent bg-cover ">
                <div className=" bg-gray-500/40 dark:bg-gray-300/30 bg-clip-text">
                    <h2 className="text-2xl font-extrabold">Gestiona todo tu ganado en una sola plataforma</h2>
                    <h2 className="text-2xl font-extrabold">Gestiona todo tu ganado en una sola plataforma</h2>
                    <p>Hola a todos</p>
                </div>
            </div></>

    );
}
export default Home;