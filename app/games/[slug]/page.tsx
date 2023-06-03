import { getGames } from '@/lib/get_games';

type GapeProps = {
  name: string;
  rating: number;
  background_image: string;
  description: string;
  released: string;
  website: string;
};

export default async function Page({ params }: { params: { slug: string } }) {
  const url = `https://api.rawg.io/api/games/${params.slug}?key=${process.env.NEXT_PUBLIC_RAWG_API_KEY}`;
  const game = await getGames(url);

  return <main></main>;
}
