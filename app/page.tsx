//https://rawg.io/@harel/apikey

import { getGames } from '@/lib/get_games';
import TypographyH1 from '../components/typography/TypographyH1';
import GameCard from './GameCard';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default async function Home() {
  const url = `https://api.rawg.io/api/games?key=${process.env.NEXT_PUBLIC_RAWG_API_KEY}&page_size=12&page=2`;
  const games = await getGames(url);

  return (
    <main className='py-20 px-5'>
      <div className='container max-w-6xl mx-auto w-full flex flex-col gap-12'>
        <TypographyH1>Games API</TypographyH1>
        <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
          {games.results.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </ul>

        <div className='flex justify-center'>
          <Button asChild>
            <Link href='/client'>Client Component</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
