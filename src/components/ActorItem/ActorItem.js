const ActorItem = ({ id, actor, picture }) => {
  return (
    <div className='flex flex-col' key={id}>
      <div className='full-image'>
        <div
          className='backdrop-img wrapper rounded-lg flex flex-col justify-end'
          style={{
            backgroundImage: `url(${process.env.REACT_APP_IMG_LINK}/${picture})`,
          }}
        >
          <div className='text-white text-lg font-semibold text-center'>
            {actor}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActorItem;
