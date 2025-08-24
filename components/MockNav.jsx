import { IconChevronLeft } from '@tabler/icons-react';
import { IconChevronRight } from '@tabler/icons-react';

function MockNav({prevPage, nextPage}) {
  return (
    <>
    <div className={`absolute bottom-2 left-2 z-200 bg-white rounded-full ${prevPage ? "" : "hidden"}`}>
      <a href={prevPage}>
        <IconChevronLeft className="w-8 h-8 text-red-700" />
      </a>
    </div>
    <div className={`absolute bottom-2 right-2 z-200 bg-white rounded-full ${nextPage ? "" : "hidden"}`}>
      <a href={nextPage}>
        <IconChevronRight className="w-8 h-8 text-red-700" />
      </a>
    </div>
    </>
  );
}

export default MockNav;
