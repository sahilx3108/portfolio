import { Instagram, Twitter, Facebook, Youtube } from 'lucide-react';

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-full w-24 md:w-32 z-40 hidden md:flex flex-col items-center justify-between py-12 pointer-events-none">
      <div className="h-20"></div> {/* Match nav height space */}
      
      <div className="flex flex-col items-center gap-8 relative pointer-events-auto">
        <div className="flex flex-col gap-6 text-gray-500">
          <a href="#" className="hover:text-white transition-colors"><Instagram size={20} /></a>
          <a href="#" className="hover:text-white transition-colors"><Twitter size={20} /></a>
          <a href="#" className="hover:text-white transition-colors"><Facebook size={20} /></a>
          <a href="#" className="hover:text-white transition-colors"><Youtube size={20} /></a>
        </div>
        
        <div className="absolute top-1/2 -right-6 flex items-center gap-3 text-sm text-gray-300 translate-x-full -translate-y-1/2">
          <div className="w-6 h-[1px] bg-gray-500"></div>
          Hello
        </div>
      </div>
      
      <div className="flex w-32 items-center justify-center -rotate-90 text-xs text-gray-500 tracking-widest origin-center pb-12 pointer-events-auto">
        &lt; scroll down
      </div>
    </aside>
  );
}
