'use client';

import { useAtom } from 'jotai';
import useSWR from 'swr';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import TypographyH1 from '@/components/typography/TypographyH1';
import GameCard from '../GameCard';
import { pageAtom } from '@/lib/store';
import Loading from '@/components/ui/Loading';

const API_KEY = process.env.NEXT_PUBLIC_RAWG_API_KEY;
const PAGE_SIZE = 12;
const fetcher = (url: string) => fetch(url).then((res) => res.json());

type GameData = {
  id: number;
  name: string;
  background_image: string;
  rating: number;
};

const CleintPage = () => {
  const [page, setPage] = useAtom(pageAtom);

  const { data, error, isLoading } = useSWR(
    `https://api.rawg.io/api/games?key=${API_KEY}&page_size=${PAGE_SIZE}&page=${page}`,
    fetcher
  );

  const handleNextPage = () => setPage(page + 1);
  const handlePrevPage = () => {
    if (page > 1) setPage(page - 1);
  };

  if (error) return `An error has occurred: ${error}`;
  if (isLoading) return <Loading />;

  return (
    <main className='py-20 px-5'>
      <div className='container max-w-6xl mx-auto w-full flex flex-col gap-12'>
        <div className='flex flex-col gap-4 md:flex-row md:justify-between md:items-center'>
          <TypographyH1>Client Page</TypographyH1>
          <Button asChild>
            <Link href='/'>Home Page</Link>
          </Button>
        </div>
        <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
          {data.results.map((game: GameData) => (
            <GameCard key={game.id} game={game} />
          ))}
        </ul>

        <div className='flex justify-center items-center gap-2'>
          <Button
            variant='secondary'
            onClick={handlePrevPage}
            disabled={page === 1}>
            Prev
          </Button>
          <Button
            variant='secondary'
            onClick={handleNextPage}
            disabled={data.count < PAGE_SIZE}>
            Next
          </Button>
        </div>
      </div>
    </main>
  );
};

export default CleintPage;
