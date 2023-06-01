//https://rawg.io/@harel/apikey

import Image from 'next/image';
import TypographyH1 from './(ui)/TypographyH1';

type GameProps = {
  id: number;
  name: string;
  rating: string;
  background_image: string;
};

const getGames = async (): Promise<GameProps[]> => {
  const response = await fetch(
    `https://api.rawg.io/api/games?key=${process.env.RAWG_API_KEY}`
  );
  const data = await response.json();
  return data.results;
};

export default async function Home() {
  const games = await getGames();

  return (
    <main className='py-20 px-5'>
      <div className='container max-w-6xl mx-auto w-full flex flex-col gap-12'>
        <TypographyH1>Games API</TypographyH1>
        <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
          {games.map((game) => (
            <li
              key={game.id}
              className='relative aspect-video overflow-hidden rounded text-slate-50 group'>
              {/* image */}
              <Image
                alt={game.name}
                src={game.background_image}
                fill
                className='object-cover w-full h-full transition duration-500 group-hover:scale-110'
              />
              {/* cover */}
              <div className='absolute inset-0 bg-gradient-to-t from-black opacity-50 z-10 w-full h-full' />
              {/* name */}
              <div className='absolute inset-0 z-20 flex flex-col justify-end items-start p-4 translate-y-4 transition duration-500 group-hover:translate-y-0'>
                <h2 className='text-xl font-bold'>{game.name}</h2>
                <p className='text-sm font-medium opacity-0 transition duration-500 group-hover:opacity-100'>
                  {game.rating}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
