import Link from 'next/link';
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="px-4 sm:px-8 md:px-16 py-4 sm:py-10 md:py-20 grid grid-cols-1 sm:grid-cols-2 gap-6 border-b">
        <div className='w-fit'>
          <Link href="/">
            <img src="/meufilme.svg" alt="Logo" className="w-16 h-auto" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          <div className="flex flex-col space-y-4">
            <span className="font-semibold">Título 1</span>
            <span className="text-neutral-600">Exemplo</span>
            <span className="text-neutral-600">Exemplo</span>
            <span className="text-neutral-600">Exemplo</span>
            <span className="text-neutral-600">Exemplo</span>
          </div>
          <div className="flex flex-col space-y-4">
            <span className="font-semibold">Título 1</span>
            <span className="text-neutral-600">Exemplo</span>
            <span className="text-neutral-600">Exemplo</span>
            <span className="text-neutral-600">Exemplo</span>
            <span className="text-neutral-600">Exemplo</span>
          </div>
          <div className="flex flex-col space-y-4">
            <span className="font-semibold">Título 1</span>
            <span className="text-neutral-600">Exemplo</span>
            <span className="text-neutral-600">Exemplo</span>
            <span className="text-neutral-600">Exemplo</span>
            <span className="text-neutral-600">Exemplo</span>
          </div>
        </div>
      </div>

      <div className="px-4 sm:px-8 md:px-16 py-8 flex flex-col space-y-4 md:flex-row md:space-x-6 justify-between border-b">
        <div className="flex flex-col space-y-2 flex-1">
          <span className="font-semibold">Inscreva-se no nosso Newsletter</span>
          <p className="text-neutral-600 text-sm">
            As últimas notícias, artigos e recursos, direto na sua caixa de
            entrada.
          </p>
        </div>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 flex-1 h-fit">
          <input
            type="email"
            placeholder="Digite seu e-mail"
            className="px-4 py-2 rounded-md bg-neutral-50 border border-neutral-200 focus:border-neutral-400 outline-none flex-1"
          />
          <button className="px-4 py-2 rounded-md bg-indigo-800 text-white">
            Inscrever
          </button>
        </div>
      </div>

      <div className="px-4 sm:px-8 md:px-16 py-6 flex flex-col md:flex-row space-y-4 md:space-y-0 items-center justify-between">
        <span className="text-neutral-400 text-sm">
          &copy; {new Date().getFullYear()} Meu filme, Inc. Todos os Direitos
          Reservados.
        </span>
        <div className="flex items-center space-x-2">
          <FaFacebook className="h-10 w-10 p-2 rounded-full text-neutral-700 hover:bg-neutral-100 cursor-pointer transition" />
          <FaInstagram className="h-10 w-10 p-2 rounded-full text-neutral-700 hover:bg-neutral-100 cursor-pointer transition" />
          <FaTwitter className="h-10 w-10 p-2 rounded-full text-neutral-700 hover:bg-neutral-100 cursor-pointer transition" />
          <FaGithub className="h-10 w-10 p-2 rounded-full text-neutral-700 hover:bg-neutral-100 cursor-pointer transition" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
