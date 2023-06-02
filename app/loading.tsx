import { FC } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

type loadingProps = {};

const loading: FC<loadingProps> = ({}) => {
  return (
    <main className='py-20 px-5'>
      <div className='container max-w-6xl mx-auto w-full flex flex-col gap-12'>
        <Skeleton className='h-6 w-14 bg-slate-100'>Games API</Skeleton>
        <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
          {Array.from({ length: 12 }, (_, i) => i + 1).map((id) => (
            <li
              key={id}
              className='relative aspect-video overflow-hidden rounded text-slate-50'>
              <Skeleton className='absolute inset-0 w-full h-full bg-slate-100'></Skeleton>

              {/* name */}
              <div className='absolute inset-0 z-20 flex flex-col justify-end items-start p-4 gap-2 transition duration-500'>
                <Skeleton className='w-3/4 h-6 bg-slate-200'></Skeleton>
                <Skeleton className='w-12 h-4 bg-slate-200'></Skeleton>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default loading;
