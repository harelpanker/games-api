//https://rawg.io/@harel/apikey

import TypographyH1 from '../components/typography/TypographyH1';
import GameCard from './GameCard';

type GameData = {
  count: number;
  next: string;
  previous: string;
  results: {
    id: number;
    name: string;
    background_image: string;
    rating: number;
  }[];
};

const getGames = async (): Promise<GameData> => {
  const response = await fetch(
    `https://api.rawg.io/api/games?key=${process.env.RAWG_API_KEY}&page_size=12&page=2`
  );
  if (!response.ok) throw new Error(response.statusText);
  const data = await response.json();

  return data;
};

export default async function Home() {
  const games = await getGames();

  return (
    <main className='py-20 px-5'>
      <div className='container max-w-6xl mx-auto w-full flex flex-col gap-12'>
        <TypographyH1>Games API</TypographyH1>
        <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
          {games.results.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </ul>
      </div>
    </main>
  );
}
