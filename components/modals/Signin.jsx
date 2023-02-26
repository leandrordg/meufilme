'use client';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';

const Signin = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="hidden md:flex items-center border border-transparent hover:border-[#47A5E1] hover:text-[#47A5E1] text-neutral-500 rounded-md px-4 py-2"
      >
        <span>Entrar agora</span>
      </button>

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
                    Fazer login
                  </Dialog.Title>

                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Entre na sua conta com seu e-mail e senha ou crie uma
                      conta.
                    </p>
                  </div>

                  <div className="flex flex-col space-y-4 mt-6">
                    <input
                      type="email"
                      placeholder="Digite seu e-mail"
                      className="p-3 rounded-md border focus:border-blue-500 outline-none text-sm"
                    />
                    <input
                      type="password"
                      placeholder="Agora, sua senha"
                      className="p-3 rounded-md border focus:border-blue-500 outline-none text-sm"
                    />
                  </div>

                  <div className="flex flex-col space-y-2 mt-4">
                    <button className="bg-neutral-50 hover:bg-neutral-100 flex items-center justify-center space-x-2 p-3 rounded-md border">
                      <FcGoogle className="h-6 w-6" />
                      <span className='text-sm'>Entrar com google</span>
                    </button>
                  </div>

                  <div className="flex w-full justify-end mt-4">
                    <button
                      type="button"
                      className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-md transition"
                      onClick={() => setIsOpen(false)}
                    >
                      Entrar
                    </button>
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

export default Signin;
