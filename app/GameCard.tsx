import { FC } from 'react';
import Image from 'next/image';

type GameCardProps = {
  game: { name: string; background_image: string; rating: number };
};

const GameCard: FC<GameCardProps> = ({ game }) => {
  const { name, background_image, rating } = game;

  return (
    <li className='relative aspect-video overflow-hidden rounded text-slate-50 group'>
      {/* image */}
      <Image
        alt={name}
        src={background_image}
        fill
        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        className='object-cover w-full h-full transition duration-500 group-hover:scale-110'
      />
      {/* cover */}
      <div className='absolute inset-0 bg-gradient-to-t from-black opacity-50 z-10 w-full h-full' />
      {/* name */}
      <div className='absolute inset-0 z-20 flex flex-col justify-end items-start p-4 translate-y-4 transition duration-500 group-hover:translate-y-0'>
        <h2 className='text-xl font-bold'>{name}</h2>
        <p className='text-sm font-medium opacity-0 transition duration-500 group-hover:opacity-100'>
          {rating}
        </p>
      </div>
    </li>
  );
};

export default GameCard;
