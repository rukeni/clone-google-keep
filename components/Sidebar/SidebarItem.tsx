/* eslint-disable jsx-a11y/label-has-associated-control */
const SidebarItem = () => {
  return (
    <li className='flex w-full justify-between text-gray-600 hover:text-white hover:bg-indigo-500 cursor-pointer items-center py-3 px-8 hover:rounded-r-full'>
      <div className='flex items-center'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='icon icon-tabler icon-tabler-grid'
          width={18}
          height={18}
          viewBox='0 0 24 24'
          strokeWidth='1.5'
          stroke='currentColor'
          fill='none'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <path stroke='none' d='M0 0h24v24H0z' />
          <rect x={4} y={4} width={6} height={6} rx={1} />
          <rect x={14} y={4} width={6} height={6} rx={1} />
          <rect x={4} y={14} width={6} height={6} rx={1} />
          <rect x={14} y={14} width={6} height={6} rx={1} />
        </svg>
        <span className='text-sm  ml-2'>Dashboard</span>
      </div>
    </li>
  );
};

export default SidebarItem;
