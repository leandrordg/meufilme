'use client'
import { FiChevronLeft } from 'react-icons/fi';
import { useRouter } from 'next/navigation';

const BackButton = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="flex items-center space-x-2 px-4 py-2 text-neutral-500 hover:bg-neutral-100 transition rounded-md w-fit cursor-pointer mt-4"
    >
      <FiChevronLeft className="h-6 w-6" />
      <span className="text-sm">Voltar ao início</span>
    </button>
  );
};

export default BackButton;
