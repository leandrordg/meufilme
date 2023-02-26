import { VscLoading } from 'react-icons/vsc';

const loading = () => {
  return (
    <div className="max-w-7xl mx-auto py-60">
      <div className="flex items-center justify-center">
        <VscLoading className="h-10 w-10 animate-spin text-[#47A5E1]" />
      </div>
    </div>
  );
};

export default loading;
