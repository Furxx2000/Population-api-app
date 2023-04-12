import { AiOutlineSetting } from 'react-icons/ai';

export function Header() {
  return (
    <header className='flex items-center justify-between h-12 px-4 text-white bg-violet font-english shadow-default'>
      <h1>LOGO</h1>
      <div className='grid place-items-center w-[30px] h-[30px] rounded-lg border border-lightGray drop-shadow-default'>
        <AiOutlineSetting size={18} />
      </div>
    </header>
  );
}
