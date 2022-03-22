/* eslint-disable @next/next/no-img-element */
function Sidebar() {
  return (
    <>
      {/* Sidebar starts */}
      {/* Remove class [ hidden ] and replace [ sm:flex ] with [ flex ] */}
      <div className='w-64 absolute sm:relative text-accent-content flex-col justify-between sm:flex h-[calc(100vh-88px)]'>
        <div>
          <div className='h-8 w-full flex flex-col px-8 mt-5 font-pen-script '>
            <p className='text-xl leading-3 text-left text-base-content'>
              글쓰기 좋은날!
            </p>
            <h3 className='text-2xl leading-5 mt-2 text-base-content'>
              <span className='font-bold text-primary'>다시</span> 돌아오신걸
              환영합니다.
            </h3>
          </div>
          <ul className='mt-12'>
            <li className='flex w-full justify-between text-gray-600 hover:text-accent-content hover:bg-primary hover:opacity-70 group cursor-pointer items-center py-3 px-8 hover:rounded-r-full'>
              <div className='flex items-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  className='text-[#5f6368] fill-current group-hover:text-accent-content'
                >
                  <path d='M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6A4.997 4.997 0 0 1 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z'></path>
                </svg>
                <span className='text-sm text-[#202124]  ml-2 group-hover:text-accent-content'>
                  메모
                </span>
              </div>
            </li>
            <li className='flex w-full justify-between text-gray-600 hover:text-accent-content hover:bg-primary hover:opacity-70 group cursor-pointer items-center py-3 px-8 hover:rounded-r-full'>
              <div className='flex items-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  className='text-[#5f6368] fill-current group-hover:text-accent-content'
                >
                  <path d='M18 17v-6c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v6H4v2h16v-2h-2zm-2 0H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6zm-4 5c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2z'></path>
                </svg>
                <span className='text-sm text-[#202124]  ml-2 group-hover:text-accent-content'>
                  알림
                </span>
              </div>
            </li>
            <li className='flex w-full justify-between text-gray-600 hover:text-accent-content hover:bg-primary hover:opacity-70 group cursor-pointer items-center py-3 px-8 hover:rounded-r-full'>
              <div className='flex items-center'>
                &nbsp;&nbsp;
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  className='text-[#5f6368] fill-current group-hover:text-accent-content'
                >
                  <path d='M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16zM16 17H5V7h11l3.55 5L16 17z'></path>
                </svg>
                <span className='text-sm text-[#202124]  ml-2 group-hover:text-accent-content'>
                  메모
                </span>
              </div>
            </li>
            <li className='flex w-full justify-between text-gray-600 hover:text-accent-content hover:bg-primary hover:opacity-70 group cursor-pointer items-center py-3 px-8 hover:rounded-r-full'>
              <div className='flex items-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  className='text-[#5f6368] fill-current group-hover:text-accent-content'
                >
                  <path d='M20.41 4.94l-1.35-1.35c-.78-.78-2.05-.78-2.83 0L13.4 6.41 3 16.82V21h4.18l10.46-10.46 2.77-2.77c.79-.78.79-2.05 0-2.83zm-14 14.12L5 19v-1.36l9.82-9.82 1.41 1.41-9.82 9.83z'></path>
                </svg>
                <span className='text-sm text-[#202124]  ml-2 group-hover:text-accent-content'>
                  라벨 수정
                </span>
              </div>
            </li>
            <li className='flex w-full justify-between text-gray-600 hover:text-accent-content hover:bg-primary hover:opacity-70 group cursor-pointer items-center py-3 px-8 hover:rounded-r-full'>
              <div className='flex items-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  className='text-[#5f6368] fill-current group-hover:text-accent-content'
                >
                  <path d='M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM6.24 5h11.52l.83 1H5.42l.82-1zM5 19V8h14v11H5zm11-5.5l-4 4-4-4 1.41-1.41L11 13.67V10h2v3.67l1.59-1.59L16 13.5z'></path>
                </svg>
                <span className='text-sm text-[#202124]  ml-2 group-hover:text-accent-content'>
                  보관 처리
                </span>
              </div>
            </li>
            <li className='flex w-full justify-between text-gray-600 hover:text-accent-content hover:bg-primary hover:opacity-70 group cursor-pointer items-center py-3 px-8 hover:rounded-r-full'>
              <div className='flex items-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  className='text-[#5f6368] fill-current group-hover:text-accent-content'
                >
                  <path d='M15 4V3H9v1H4v2h1v13c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V6h1V4h-5zm2 15H7V6h10v13z'></path>
                  <path d='M9 8h2v9H9zm4 0h2v9h-2z'></path>
                </svg>
                <span className='text-sm text-[#202124]  ml-2 group-hover:text-accent-content'>
                  휴지통
                </span>
              </div>
            </li>
          </ul>
        </div>
        <footer className='px-8 border-t'>
          <ul className='w-full flex items-center justify-between '>
            <li className='cursor-pointer text-[#202124] pt-5 pb-3'>
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
            <li className='cursor-pointer text-[#202124] pt-5 pb-3'>
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
            <li className='cursor-pointer text-[#202124] pt-5 pb-3'>
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
            <li className='cursor-pointer text-[#202124] pt-5 pb-3'>
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
        </footer>
      </div>
      <div className='text-gray-600 mr-8 visible sm:hidden relative'>
        <ul className='p-y w-64 border-r bg-indigo-900 absolute rounded left-0 shadow mt-8 sm:mt-16 hidden'>
          <li className='flex w-full justify-between text-gray-600 hover:text-gray-300 hover:bg-primary cursor-pointer items-center py-3 px-2'>
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
          <li className='flex w-full justify-between text-gray-600 hover:text-gray-300 hover:bg-primary cursor-pointer items-center px-2 py-3'>
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
          <li className='flex w-full justify-between text-gray-600 hover:text-gray-300 hover:bg-primary cursor-pointer items-center px-2 py-3'>
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
          <li className='flex w-full justify-between text-gray-600 hover:text-gray-300 hover:bg-primary cursor-pointer items-center px-2 py-3'>
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
          <li className='flex w-full justify-between text-gray-600 hover:text-gray-300 hover:bg-primary cursor-pointer items-center  px-2 py-3'>
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
          <li className='flex w-full justify-between text-gray-600 hover:text-gray-300 hover:bg-primary cursor-pointer items-center px-2 py-3'>
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
          <li className='flex w-full justify-between text-gray-600 hover:text-gray-300 hover:bg-primary cursor-pointer items-center px-2 py-3'>
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
    </>
  );
}

export default Sidebar;
