import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocalStorage } from "react-use";

const messages = [
  {
    text: "Get a My First Duck gift with online purchase*",
    action: "#",
  },
  {
    text: "FREE delivery on orders above £50!*",
    action: "#",
  },
  {
    text: "Play Zone",
    action: "https://kids.lego.com",
  },
  {
    text: "LEGO® VIP",
    action: "#",
  },
  {
    text: "Find a LEGO® Store",
    action: "#",
  },
  {
    text: "Gift Cards",
    action: "#",
  },
  {
    text: "Sign up for emails",
    action: "#",
  },
  {
    text: "LEGO® Catalogue",
    action: "#",
  },
  {
    text: "LEGO® Certified Stores",
    action: "#",
  },
  {
    text: "LEGO® Education",
    action: "#",
  },
  {
    text: "LEGO® Life",
    action: "#",
  },
  {
    text: "LEGO® Foundation",
    action: "#",
  },
  {
    text: "LEGO® House",
    action: "#",
  },
  {
    text: "LEGO® Ideas",
    action: "#",
  },
  {
    text: "LEGO® News",
    action: "#",
  },
  {
    text: "LEGO® Rebrick",
    action: "#",
  },
  {
    text: "LEGO® Video Games",
    action: "#",
  },
  {
    text: "LEGO® Web Games",
    action: "#",
  },
  {
    text: "LEGO® TV",
    action: "#",
  },
  {
    text: "LEGO® YouTube",
    action: "#",
  },
  {
    text: "LEGO® Apps",
    action: "#",
  }
]


export const PromoBar = () => {
  const [persistedCurrentMessageIndex, setPersistedCurrentMessageIndex] = useLocalStorage('currentMessageIndex', 0);
  // Using useState rather than useLocalStorageDirectly to better handle updating the value
  const [currentMessageIndex, setCurrentMessageIndex] = useState<number>(persistedCurrentMessageIndex || 0);

  const nextMessage = () => {
    setCurrentMessageIndex((prev) => ((prev ? prev + 1 : 1) % messages.length));
  }

  const previousMessage = () => {
    setCurrentMessageIndex((prev) => (prev ? prev - 1 : messages.length - 1) % messages.length);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prev) => ((prev ? prev + 1 : 1) % messages.length));
    }, 5000);

    return () => clearInterval(interval);
    // Add currentMessageIndex to the dependency array to reset the timer when the index changes
  }, [setCurrentMessageIndex, currentMessageIndex]);

  useEffect(() => {
    setPersistedCurrentMessageIndex(currentMessageIndex);
  }, [currentMessageIndex, setPersistedCurrentMessageIndex]);

  return (
    <div className='bg-theme-light flex font-regular text-sm place-items-center py-3 justify-between px-8 bg-brand-light'>
      <Link to="https://kids.lego.com" className='flex uppercase bg-brand-blue-light font-medium px-3 py-1 rounded shadow text-xs text-neutral-800 space-x-3 place-items-center'>
        <svg className='rotate-180 h-2' viewBox="0 0 37 16" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" data-di-rand="1707084176074"><path fill="currentColor" d="M29.493.597l.095.084 6.535 6.54a1 1 0 01.083 1.319l-.083.094-6.535 6.54a1 1 0 01-1.498-1.32l.083-.094 4.83-4.834-31.908.001A1 1 0 01.98 6.934l.116-.007h31.907l-4.83-4.833a1 1 0 01-.082-1.32l.083-.094a1 1 0 011.32-.083z"></path></svg>
        <p className='shrink-0'>Play Zone</p>
      </Link>

      <div className='hidden md:flex'>
        <button onClick={previousMessage}>
          <svg className='rotate-180 h-5' viewBox="0 0 18 28" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" data-di-res-id="b6cb7051-54943e79" data-di-rand="1707045047069"><path d="M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z" fill="currentColor"></path></svg>
        </button>
        <div className='flex space-x-2 px-8 min-w-[28rem] justify-center'>
          <p>{messages[currentMessageIndex].text}</p>
          <Link to={messages[currentMessageIndex].action} className='text-blue-700 hover:underline'>Learn more</Link>
        </div>

        <button onClick={nextMessage}>
          <svg className='h-5' viewBox="0 0 18 28" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" data-di-res-id="f6a3166b-ada89f50" data-di-rand="1707045047070"><path d="M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z" fill="currentColor"></path></svg>
        </button>
      </div>

      <div className='space-x-3 flex'>
        <svg className='h-5' viewBox="0 0 20 22" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" data-di-rand="1707084176075"><g transform="translate(1 1)" fillRule="nonzero" fill="none"><rect stroke="#2C2C2C" strokeWidth="1.5" fill="#FFCF00" x="4.875" width="8.25" height="6.038" rx=".729"></rect><rect stroke="#2C2C2C" strokeWidth="1.2" fill="#FFCF00" x="3.75" y="14.34" width="10.5" height="5.66" rx=".729"></rect><path d="M14.25 17.736H3.75C0 17.736 0 14.717 0 14.717v-8.68S0 3.02 3.75 3.02h10.5C18 3.019 18 6.038 18 6.038v8.679s0 3.019-3.75 3.019z" stroke="#2C2C2C" strokeWidth="1.5" fill="#FFCF00"></path><path d="M7.125 8.868a.94.94 0 00-.938-.943.94.94 0 00-.937.943c0 .52.42.943.938.943a.94.94 0 00.937-.943zm4.688-.943a.94.94 0 00-.938.943c0 .52.42.943.938.943a.94.94 0 00.937-.943.94.94 0 00-.938-.943zm.293 3.86a.452.452 0 00-.649.21c-.005.008-.461.84-2.463.84-1.953 0-2.437-.793-2.462-.84a.446.446 0 00-.638-.234.618.618 0 00-.215.761c.063.147.69 1.446 3.315 1.446s3.25-1.299 3.313-1.446a.609.609 0 00-.201-.738z" fill="#2C2C2C"></path></g></svg>

        <div className='h-5 w-[1px] bg-neutral-700' />

        <svg className='h-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="none"><path d="M34.7128 24.9892L9.6967 20.3638L6.92126 35.3747L31.9374 40L34.7128 24.9892Z" fill="#4C2F92" /><path d="M12.4373 18.6562C12.506 18.2845 12.8625 18.0393 13.2341 18.108L19.7086 19.3051C20.0803 19.3738 20.3255 19.7303 20.2568 20.102L19.8609 22.2434L12.0443 20.7982L12.4402 18.6567L12.4373 18.6562ZM32.3674 24.5558L32.7634 22.4144C32.8321 22.0427 32.5869 21.6862 32.2152 21.6175L25.7407 20.4204C25.369 20.3517 25.0125 20.5969 24.9438 20.9686L24.5479 23.11L32.3674 24.5558Z" fill="#4C2F92" /><path d="M31.3589 2.60958L6 4.64019L7.21846 19.8567L32.5774 17.8261L31.3589 2.60958Z" fill="#00A3DA" /><path d="M8.2029 2.27929C8.17273 1.90254 8.4533 1.57313 8.83005 1.54296L15.3933 1.01741C15.77 0.987242 16.0995 1.26781 16.1296 1.64456L16.3035 3.81536L8.37971 4.44986L8.20589 2.27905L8.2029 2.27929ZM28.9814 2.80018L28.8076 0.629372C28.7774 0.252621 28.448 -0.0279464 28.0713 0.00222189L21.508 0.527773C21.1313 0.557942 20.8507 0.887353 20.8809 1.2641L21.0547 3.43491L28.9814 2.80018Z" fill="#00A3DA" /></svg>
      </div>
    </div>
  );
};
