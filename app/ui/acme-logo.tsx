import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
// import {inter} from '@/app/ui/fonts';


export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <GlobeAltIcon className="h-12 w-12 fs rotate-[15deg]" />
      <p className="text-[42px]">Trust</p>
    </div>
  );
}
