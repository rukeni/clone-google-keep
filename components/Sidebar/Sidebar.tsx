function Sidebar() {
  return (
    <>
      {/* Sidebar starts */}
      {/* Remove class [ hidden ] and replace [ sm:flex ] with [ flex ] */}
      <div className='w-64 absolute sm:relative text-white shadow md:h-full flex-col justify-between sm:flex min-h-screen'>
        <div>
          <div className='h-16 w-full flex items-center px-8'>
            <span className='text-black'> 구글 킵</span>
          </div>
          <ul className='mt-12'>
            <li className='flex w-full justify-between text-gray-600 hover:text-gray-300 hover:bg-indigo-800 cursor-pointer items-center py-3 px-8 hover:rounded-r-full'>
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
            <li className='flex w-full justify-between text-gray-600 hover:text-gray-300 hover:bg-indigo-800 cursor-pointer items-center px-8 py-3 hover:rounded-r-full'>
              <div className='flex items-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='icon icon-tabler icon-tabler-puzzle'
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
                  <path d='M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1' />
                </svg>
                <span className='text-sm  ml-2'>Products</span>
              </div>
            </li>
            <li className='flex w-full justify-between text-gray-600 hover:text-gray-300 hover:bg-indigo-800 cursor-pointer items-center px-8 py-3 hover:rounded-r-full'>
              <div className='flex items-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='icon icon-tabler icon-tabler-compass'
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
                  <polyline points='8 16 10 10 16 8 14 14 8 16' />
                  <circle cx={12} cy={12} r={9} />
                </svg>
                <span className='text-sm  ml-2'>Performance</span>
              </div>
            </li>
            <li className='flex w-full justify-between text-gray-600 hover:text-gray-300 hover:bg-indigo-800 cursor-pointer items-center px-8 py-3 hover:rounded-r-full'>
              <div className='flex items-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='icon icon-tabler icon-tabler-code'
                  width={20}
                  height={20}
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  fill='none'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path stroke='none' d='M0 0h24v24H0z' />
                  <polyline points='7 8 3 12 7 16' />
                  <polyline points='17 8 21 12 17 16' />
                  <line x1={14} y1={4} x2={10} y2={20} />
                </svg>
                <span className='text-sm  ml-2'>Deliverables</span>
              </div>
            </li>
            <li className='flex w-full justify-between text-gray-600 hover:text-gray-300 hover:bg-indigo-800 cursor-pointer items-center  px-8 py-3 hover:rounded-r-full'>
              <div className='flex items-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='icon icon-tabler icon-tabler-puzzle'
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
                  <path d='M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1' />
                </svg>
                <span className='text-sm  ml-2'>Invoices</span>
              </div>
            </li>
            <li className='flex w-full justify-between text-gray-600 hover:text-gray-300 hover:bg-indigo-800 cursor-pointer items-center px-8 py-3 hover:rounded-r-full'>
              <div className='flex items-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='icon icon-tabler icon-tabler-stack'
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
                  <polyline points='12 4 4 8 12 12 20 8 12 4' />
                  <polyline points='4 12 12 16 20 12' />
                  <polyline points='4 16 12 20 20 16' />
                </svg>
                <span className='text-sm  ml-2'>Inventory</span>
              </div>
            </li>
            <li className='flex w-full justify-between text-gray-600 hover:text-gray-300 hover:bg-indigo-800 cursor-pointer items-center px-8 py-3 hover:rounded-r-full'>
              <div className='flex items-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='icon icon-tabler icon-tabler-settings'
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
                  <path d='M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z' />
                  <circle cx={12} cy={12} r={3} />
                </svg>
                <span className='text-sm  ml-2'>Settings</span>
              </div>
            </li>
          </ul>
          <div className='flex items-center mt-48 mb-4 px-8'>
            <div className='w-10 h-10 bg-cover rounded-md mr-3'>
              <img
                src='https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_5.png'
                className='rounded-full h-full w-full overflow-hidden shadow'
                alt='test'
              />
            </div>
            <div>
              <p className='text-gray-600 text-sm font-medium'>Steve Doe</p>
              <p className='text-gray-600 text-xs'>View Profile</p>
            </div>
          </div>
        </div>
        <div className='px-8 bg-indigo-800'>
          <ul className='w-full flex items-center justify-between '>
            <li className='cursor-pointer text-white pt-5 pb-3'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='icon icon-tabler icon-tabler-bell'
                width={20}
                height={20}
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                fill='none'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path stroke='none' d='M0 0h24v24H0z' />
                <path d='M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6' />
                <path d='M9 17v1a3 3 0 0 0 6 0v-1' />
              </svg>
            </li>
            <li className='cursor-pointer text-white pt-5 pb-3'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='icon icon-tabler icon-tabler-messages'
                width={20}
                height={20}
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                fill='none'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path stroke='none' d='M0 0h24v24H0z' />
                <path d='M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10' />
                <path d='M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2' />
              </svg>
            </li>
            <li className='cursor-pointer text-white pt-5 pb-3'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='icon icon-tabler icon-tabler-settings'
                width={20}
                height={20}
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                fill='none'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path stroke='none' d='M0 0h24v24H0z' />
                <path d='M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z' />
                <circle cx={12} cy={12} r={3} />
              </svg>
            </li>
            <li className='cursor-pointer text-white pt-5 pb-3'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='icon icon-tabler icon-tabler-archive'
                width={20}
                height={20}
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                fill='none'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path stroke='none' d='M0 0h24v24H0z' />
                <rect x={3} y={4} width={18} height={4} rx={2} />
                <path d='M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-10' />
                <line x1={10} y1={12} x2={14} y2={12} />
              </svg>
            </li>
          </ul>
        </div>
      </div>
      <div className='text-gray-600 mr-8 visible sm:hidden relative'>
        <ul className='p-y w-64 border-r bg-indigo-900 absolute rounded left-0 shadow mt-8 sm:mt-16 hidden'>
          <li className='flex w-full justify-between text-gray-600 hover:text-gray-300 hover:bg-indigo-800 cursor-pointer items-center py-3 px-2'>
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
          <li className='flex w-full justify-between text-gray-600 hover:text-gray-300 hover:bg-indigo-800 cursor-pointer items-center px-2 py-3'>
            <div className='flex items-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='icon icon-tabler icon-tabler-puzzle'
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
                <path d='M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1' />
              </svg>
              <span className='text-sm  ml-2'>Products</span>
            </div>
          </li>
          <li className='flex w-full justify-between text-gray-600 hover:text-gray-300 hover:bg-indigo-800 cursor-pointer items-center px-2 py-3'>
            <div className='flex items-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='icon icon-tabler icon-tabler-compass'
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
                <polyline points='8 16 10 10 16 8 14 14 8 16' />
                <circle cx={12} cy={12} r={9} />
              </svg>
              <span className='text-sm  ml-2'>Performance</span>
            </div>
          </li>
          <li className='flex w-full justify-between text-gray-600 hover:text-gray-300 hover:bg-indigo-800 cursor-pointer items-center px-2 py-3'>
            <div className='flex items-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='icon icon-tabler icon-tabler-code'
                width={20}
                height={20}
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                fill='none'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path stroke='none' d='M0 0h24v24H0z' />
                <polyline points='7 8 3 12 7 16' />
                <polyline points='17 8 21 12 17 16' />
                <line x1={14} y1={4} x2={10} y2={20} />
              </svg>
              <span className='text-sm  ml-2'>Deliverables</span>
            </div>
          </li>
          <li className='flex w-full justify-between text-gray-600 hover:text-gray-300 hover:bg-indigo-800 cursor-pointer items-center  px-2 py-3'>
            <div className='flex items-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='icon icon-tabler icon-tabler-puzzle'
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
                <path d='M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1' />
              </svg>
              <span className='text-sm  ml-2'>Invoices</span>
            </div>
          </li>
          <li className='flex w-full justify-between text-gray-600 hover:text-gray-300 hover:bg-indigo-800 cursor-pointer items-center px-2 py-3'>
            <div className='flex items-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='icon icon-tabler icon-tabler-stack'
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
                <polyline points='12 4 4 8 12 12 20 8 12 4' />
                <polyline points='4 12 12 16 20 12' />
                <polyline points='4 16 12 20 20 16' />
              </svg>
              <span className='text-sm  ml-2'>Inventory</span>
            </div>
          </li>
          <li className='flex w-full justify-between text-gray-600 hover:text-gray-300 hover:bg-indigo-800 cursor-pointer items-center px-2 py-3'>
            <div className='flex items-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='icon icon-tabler icon-tabler-settings'
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
                <path d='M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z' />
                <circle cx={12} cy={12} r={3} />
              </svg>
              <span className='text-sm  ml-2'>Settings</span>
            </div>
          </li>
        </ul>
        <svg
          aria-label='Main Menu'
          aria-haspopup='true'
          xmlns='http://www.w3.org/2000/svg'
          className='icon icon-tabler icon-tabler-menu cursor-pointer'
          width={30}
          height={30}
          viewBox='0 0 24 24'
          strokeWidth='1.5'
          stroke='currentColor'
          fill='none'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <path stroke='none' d='M0 0h24v24H0z' />
          <line x1={4} y1={8} x2={20} y2={8} />
          <line x1={4} y1={16} x2={20} y2={16} />
        </svg>
      </div>
      {/* Sidebar ends */}
      {/* Remove class [ h-64 ] when adding a card block */}
      <div className='container mx-auto py-10 h-64 md:w-4/5 w-11/12 px-6'>
        {/* Remove class [ border-dashed border-2 border-gray-300 ] to remove dotted border */}
        <div className='w-full h-full rounded border-dashed border-2 border-gray-300'>
          {/* Place your content here */}
        </div>
      </div>
    </>
  );
}

export default Sidebar;
