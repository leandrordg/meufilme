'use client';
import { Popover, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { FaSignInAlt } from 'react-icons/fa';
import { TbNews } from 'react-icons/tb';
import { MdFeedback } from 'react-icons/md';

const news = [
  {
    name: 'Seja bem vindo',
    href: '/',
    description: 'É um prazer tê-lo conosco aqui na plataforma.',
    icon: <TbNews className="h-6 w-6 text-neutral-500" />,
  },
  {
    name: 'Comece com tudo!',
    href: '/',
    description: 'Entre em sua conta ou crie uma agora mesmo',
    icon: <FaSignInAlt className="h-6 w-6 text-blue-500" />,
  },
  {
    name: 'Deixar um feedback',
    href: '/',
    description:
      'Pedimos gentilmente que você deixe seu feedback sobre a plataforma.',
    icon: <MdFeedback className="h-6 w-6 text-gray-700" />,
  },
];

const Notifications = () => {
  const [isViewed, setIsViewed] = useState(false);

  return (
    <Popover className="relative">
      <>
        <Popover.Button
          onClick={() => setIsViewed(true)}
          className="relative outline-none"
        >
          <TbNews className="h-10 w-10 p-2 bg-neutral-100 hover:bg-neutral-200 cursor-pointer rounded-md transition" />
          <span className="sr-only">Atualizacoes</span>
          {!isViewed && (
            <div className="absolute -top-2 -right-2 bg-blue-500 rounded-full w-5 h-5 flex items-center justify-center text-white">
              <span className="text-xs">{news.length}</span>
            </div>
          )}
        </Popover.Button>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <Popover.Panel className="absolute right-0 z-10 mt-3 w-screen max-w-xs sm:max-w-sm md:max-w-md transform pl-8">
            <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="relative grid gap-8 bg-white p-7">
                {news.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center sm:h-12 sm:w-12">
                      {item.icon}
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-900">
                        {item.name}
                      </p>
                      <p className="text-sm text-gray-500">
                        {item.description}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
              <div className="bg-gray-50 p-4">
                <a
                  href="/newsletter"
                  className="flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                >
                  <span className="flex items-center">
                    <span className="text-sm font-medium text-gray-900">
                      Newsletter
                    </span>
                  </span>
                  <span className="block text-sm text-gray-500">
                    Inscreva-se para receber atualizações diretamente na sua
                    caixa de entrada.
                  </span>
                </a>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </>
    </Popover>
  );
};

export default Notifications;
