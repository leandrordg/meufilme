import { VscLoading } from 'react-icons/vsc';

const Loading = () => {
  return (
    <div className="max-w-7xl mx-auto py-60">
      <div className="flex items-center justify-center">
        <VscLoading className='h-10 w-10 animate-spin text-indigo-900'/>
      </div>
    </div>
  );
};

export default Loading;
