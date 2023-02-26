'use client';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { IoIosSearch } from 'react-icons/io';
import { VscLoading } from 'react-icons/vsc';

const Search = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className="flex items-center border rounded-full bg-white"
      >
        <input
          type="text"
          disabled
          placeholder="Buscar por filme, série ou atores..."
          className="flex-1 py-2 px-4 bg-transparent outline-none cursor-pointer truncate"
        />
        <button className="bg-transparent text-neutral-600 hidden sm:flex items-center justify-center">
          <IoIosSearch className="h-10 w-10 p-2" />
          <span className="sr-only">Pesquisar</span>
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setIsOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-xl font-medium leading-6 text-gray-900"
                  >
                    Buscar
                  </Dialog.Title>
                  <p className="text-sm text-neutral-500">
                    Digite logo abaixo o que voce está buscando.
                  </p>
                  <div className="flex flex-col my-4">
                    <input
                      type="text"
                      placeholder="Filmes, séries, atores e muitos outros."
                      className="p-3 border rounded-md outline-none focus:border-[#47A5E1]"
                    />
                  </div>

                  {/* Results */}
                  <div className='flex flex-col items-center space-y-4'>
                    {loading && (
                      <VscLoading className="h-6 w-6 text-[#47A5E1] animate-spin" />
                    )}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Search;
