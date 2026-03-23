import { Menu } from 'lucide-react';

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-8 py-10 md:py-12 flex items-center justify-between pointer-events-none">
      <div className="flex-1 pl-4 md:pl-12 pointer-events-auto">
        <button className="text-white hover:text-brand transition-colors pointer-events-auto cursor-pointer">
          <Menu size={28} />
        </button>
      </div>
      
      <div className="text-xl font-bold tracking-wider pointer-events-auto">
        <span className="text-brand">@arynothic</span>
      </div>
      
      <div className="flex-1"></div>
    </nav>
  );
}
