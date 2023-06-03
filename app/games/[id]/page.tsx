import { getGames } from '@/lib/get_games';

export default async function Page({ params }: { params: { id: string } }) {
  const url = `https://api.rawg.io/api/games/${params.id}?key=${process.env.NEXT_PUBLIC_RAWG_API_KEY}`;
  const game = await getGames(url);

  console.log(game);
  return <main>{params.id}</main>;
}
