
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='bg-slate-200 shadow-md'>
      <div className='flex justify-between items-center max-w-full mx-auto p-3'>
        <Link to='/'>
          <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className='text-slate-500'></span>
            <span className='text-slate-700'>Rock Paper Scissors</span>
          </h1>
        </Link>
        <ul className='flex gap-4'>
          <Link to='/'>
            <li className='hidden sm:inline text-slate-700 hover:underline'>
              Home
            </li>
          </Link>
          <Link to='/rules'>
            <li className='hidden sm:inline text-slate-700 hover:underline'>
              Rules
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
}