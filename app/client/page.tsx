//https://rawg.io/@harel/apikey

import { getGames } from '@/lib/get_games';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import TypographyH1 from '@/components/typography/TypographyH1';
import GameCard from '../GameCard';

export default async function CleintPage() {
  const games = await getGames(
    `https://api.rawg.io/api/games?key=${process.env.RAWG_API_KEY}&page_size=12&page=2`
  );

  return (
    <main className='py-20 px-5'>
      <div className='container max-w-6xl mx-auto w-full flex flex-col gap-12'>
        <TypographyH1>Client Page</TypographyH1>
        <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
          {games.results.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </ul>

        <div className='flex justify-center'>
          <Button asChild>
            <Link href='/'>Home Page</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
