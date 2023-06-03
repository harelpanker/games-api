type GameData = {
  count: number;
  next: string;
  previous: string;
  results: {
    id: string;
    name: string;
    background_image: string;
    rating: number;
  }[];
};

export const getGames = async (url: string): Promise<GameData> => {
  const response = await fetch(url, { cache: 'no-store' });

  if (!response.ok) throw new Error(response.statusText);

  const data = await response.json();
  return data;
};
