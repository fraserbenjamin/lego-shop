import bowserPNG from '../assets/bowser.png';
import dunferMifflinPNG from '../assets/dunderMifflin.png';

const TopPicks = () => (
  <div className='mx-8'>
    <h1 className='text-3xl mt-8 mb-3 mx-3'>This week's top picks</h1>

    <div className='grid grid-cols-1 sm:grid-cols-2'>
      <div className='flex flex-col m-3'>
        <img src={bowserPNG} alt="Bowser" className="h-72 object-cover" />

        <div className='flex flex-col place-items-center'>
          <h2 className='text-2xl my-5 font-bold'>The ultimate Bowser build</h2>
          <span className='text-center text-sm'>Display and play with the new LEGO® Super Mario™ The Mighty Bowser™ set.</span>

          <button className='flex place-items-center space-x-2 mt-2'>
            <span className='font-medium'>Shop now</span>
            <svg className='h-3' viewBox="0 0 18 28" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z" fill="currentColor"></path></svg>
          </button>
        </div>
      </div>

      <div className='flex flex-col m-3'>
        <img src={dunferMifflinPNG} alt="Dunder Mifflin" className="h-72 object-cover" />

        <div className='flex flex-col place-items-center'>
          <h2 className='text-2xl my-5 font-bold'>Return to Dunder Mifflin</h2>
          <span className='text-center text-sm'>Recreate your favourite episodes with new LEGO® Ideas The Office.</span>

          <button className='flex place-items-center space-x-2 mt-2'>
            <span className='font-medium'>Shop now</span>
            <svg className='h-3' viewBox="0 0 18 28" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z" fill="currentColor"></path></svg>
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default TopPicks;
