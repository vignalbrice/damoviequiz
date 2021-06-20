const Navbar = () => {
  return (
    <nav className='bg-gray-900 pb-8'>
      <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
        <div className='relative flex items-center justify-between h-16'>
          <div className='flex-1 flex items-start justify-items-start sm:items-stretch sm:justify-start mt-4'>
            <div className='flex items-start'>
              <p className='text-xl font-medium'>DaMovieQuizz</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
