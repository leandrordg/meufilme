import Link from 'next/link';
import { VscMenu } from 'react-icons/vsc';
import Notifications from '../modals/Notifications';
import Search from '../modals/Search';
import Signin from '../modals/Signin';

const Header = () => {
  return (
    <header className="flex flex-col space-y-4 px-4 sm:px-8 md:px-16 py-4 sm:py-8 border-b">
      <div className="flex items-center justify-between">
        <button className="md:hidden">
          <VscMenu className="h-10 w-10 p-2 bg-neutral-100 hover:bg-neutral-200 cursor-pointer rounded-md transition" />
          <span className="sr-only">Abrir menu</span>
        </button>

        <Link href="/">
          <img src="/meufilme.svg" alt="Logo" className="w-10 h-auto md:mr-4" />
        </Link>

        {/* Links */}
        <nav className="hidden md:flex flex-1 items-center space-x-2 overflow-x-scroll scrollbar-thin">
          <Link
            href="/filmes"
            className="px-4 py-2 border border-transparent hover:border-[#47A5E1] hover:text-[#47A5E1] rounded-md transition-all"
          >
            Filmes
          </Link>
          <Link
            href="/series"
            className="px-4 py-2 border border-transparent hover:border-[#47A5E1] hover:text-[#47A5E1] rounded-md transition-all"
          >
            Séries
          </Link>
          <Link
            href="/atores"
            className="px-4 py-2 border border-transparent hover:border-[#47A5E1] hover:text-[#47A5E1] rounded-md transition-all"
          >
            Atores
          </Link>
        </nav>

        <div className="flex items-center md:space-x-8">
          <Signin />

          <Notifications />
        </div>
      </div>

      <Search />
    </header>
  );
};

export default Header;
