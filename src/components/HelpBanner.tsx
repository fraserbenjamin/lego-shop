import sophiaPNG from '../assets/sophia.png';

const supportLinks = [
  {
    label: "Contact Us",
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="currentColor"><path d="M35 6H5a3 3 0 0 0-3 3v22a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3Zm-2.44 3-11.33 8.84a2 2 0 0 1-2.46 0L7.44 9h25.12ZM5 31V10.9l13.77 10.75a2 2 0 0 0 2.46 0L35 10.9V31H5Z" /></svg>,
  },
  {
    label: "Order Status",
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="currentColor"><path fillRule="evenodd" clipRule="evenodd" d="M18.806 9.835a8.192 8.192 0 0 1 15.784 3.07 8.153 8.153 0 0 1-1.556 4.804l4.626 4.626a1.293 1.293 0 1 1-1.829 1.828l-4.626-4.625a8.167 8.167 0 0 1-2.16 1.12v8.163l-12.927 6.464-12.49-6.477V11.846l12.49-6.013 2.633 1.222L17.7 9.32l1.107.514Zm0 .001-2.668-1.238-8.378 4.034 8.378 4.034 2.496-1.159a8.182 8.182 0 0 1-.422-2.602c0-1.085.21-2.121.594-3.069Zm2.196 4.572a5.609 5.609 0 0 1-.204-1.503c0-.696.127-1.363.359-1.977l3.67 1.704-3.825 1.776Zm0 0 3.825-1.776-3.67-1.704a5.603 5.603 0 1 1-.155 3.48Zm-2.368 1.1-1.124.522 1.052 2.267-1.184.55v13.012l9.167-4.583V21.88h2.5v-1.222a8.193 8.193 0 0 1-10.411-5.15Zm-3.756 16.318V18.834l-8.75-4.213v12.668l8.75 4.537Z" /></svg>,
  },
  {
    label: "Deliveries, Returns & Cancellations",
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="currentColor"><path d="M9.375 10.682h-5.95A.417.417 0 0 0 3 11.09v.818c0 .226.19.41.425.41h5.95a.417.417 0 0 0 .425-.41v-.818c0-.226-.19-.41-.425-.41Zm0 3.272h-4.25a.417.417 0 0 0-.425.41v.818c0 .226.19.409.425.409h4.25a.417.417 0 0 0 .425-.41v-.817c0-.226-.19-.41-.425-.41Zm0 3.273h-2.55a.417.417 0 0 0-.425.41v.817c0 .226.19.41.425.41h2.55a.417.417 0 0 0 .425-.41v-.818a.417.417 0 0 0-.425-.409Z" /><path fillRule="evenodd" clipRule="evenodd" d="M12.35 30.727h1.699c.049.168.109.333.178.495a4.543 4.543 0 0 0 1.722 2.02 4.805 4.805 0 0 0 2.598.758 4.777 4.777 0 0 0 3.303-1.32 4.475 4.475 0 0 0 1.192-1.953h2.414c.05.168.109.333.178.495a4.542 4.542 0 0 0 1.722 2.02 4.805 4.805 0 0 0 2.597.758c1.24 0 2.43-.474 3.306-1.318a4.466 4.466 0 0 0 1.192-1.955h1.699a.867.867 0 0 0 .601-.24.803.803 0 0 0 .249-.578v-8.673a.79.79 0 0 0-.068-.319l-3.544-8.1a.826.826 0 0 0-.313-.363.873.873 0 0 0-.47-.136H25.95v-4.5a.803.803 0 0 0-.249-.578A.867.867 0 0 0 25.1 7H12.35a.867.867 0 0 0-.601.24.803.803 0 0 0-.249.578V29.91c0 .217.09.425.249.579.16.153.376.24.601.24Zm22.1-2.459v-6.54h-20.4v6.54a4.466 4.466 0 0 1 1.19-1.95 4.734 4.734 0 0 1 2.394-1.232 4.843 4.843 0 0 1 2.701.257c.855.34 1.585.917 2.099 1.657.272.393.478.823.61 1.273h2.412a4.466 4.466 0 0 1 1.192-1.955 4.734 4.734 0 0 1 2.393-1.232 4.844 4.844 0 0 1 2.702.257A4.64 4.64 0 0 1 33.841 27c.272.392.476.82.609 1.268ZM14.05 20.5V9.455h9.35V20.5h-9.35Zm10.625 0v-5.727h6.8l2.49 5.727h-9.29Zm-6.128 6.954c-.42 0-.832.12-1.181.345-.35.225-.622.544-.783.918-.16.374-.203.785-.12 1.182.081.397.284.761.58 1.047a2.191 2.191 0 0 0 2.317.444 2.11 2.11 0 0 0 .953-.754 1.985 1.985 0 0 0-.264-2.582 2.168 2.168 0 0 0-1.502-.6Zm10.226.345a2.191 2.191 0 0 1 2.683.255 1.984 1.984 0 0 1 .264 2.582 2.11 2.11 0 0 1-.953.754 2.202 2.202 0 0 1-1.228.116 2.153 2.153 0 0 1-1.088-.56c-.297-.286-.5-.65-.582-1.047a1.974 1.974 0 0 1 .121-1.182c.161-.373.434-.693.783-.918Z" /></svg>,
  },
  {
    label: "Missing Bricks",
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="currentColor"><path fillRule="evenodd" clipRule="evenodd" d="M17.695 31.318c7.508 0 13.595-6.093 13.595-13.608 0-7.515-6.087-13.607-13.595-13.607-7.51 0-13.596 6.092-13.596 13.607s6.087 13.608 13.596 13.608Zm0 4.102c9.772 0 17.694-7.929 17.694-17.71C35.39 7.93 27.467 0 17.695 0 7.922 0 0 7.93 0 17.71c0 9.781 7.922 17.71 17.695 17.71Z" /><path fillRule="evenodd" clipRule="evenodd" d="m36.501 39.4-8.052-7.625 3.051-2.986 7.9 7.71a2.05 2.05 0 1 1-2.899 2.9Z" /><path d="m9.806 12.023-.02.01c-.1.093-.1.517-.1.517v11.883c0 .254.14.49.38.612l7.313 3.936a.7.7 0 0 0 .34.085.77.77 0 0 0 .352-.085l7.251-3.936a.684.684 0 0 0 .381-.612V12.541s0-.424-.12-.5l-.11-.084-.532-.292-2.698-1.469-.12-.056V8.972c0-1.488-1.846-2.618-4.403-2.618-2.558 0-4.393 1.14-4.393 2.627v1.12m4.393-2.325c1.785 0 2.918.716 2.918 1.215 0 .499-1.133 1.214-2.918 1.214-1.786 0-2.919-.715-2.919-1.214 0-.5 1.153-1.215 2.919-1.215Zm-2.92 3.192a6.61 6.61 0 0 0 2.919.64 6.362 6.362 0 0 0 2.918-.64v.141c0 .509-1.133 1.225-2.918 1.225-1.786 0-2.919-.716-2.919-1.215v-.15Zm2.187 5.829v10.367l-5.818-3.145v-10.31l5.818 3.05v.047-.01Zm.742-1.215-5.106-2.702-.662-.33-.08-.038 1.535-.847c.401 1.215 2.116 2.072 4.313 2.072 2.196 0 3.851-.83 4.293-2.016l1.444.8h.01l-5.727 3.07-.02-.009Zm6.53 8.427-5.778 3.164V16.806l5.777-3.107v10.31Z" /></svg>,
  },
  {
    label: "Building Instructions",
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="currentColor"><path d="M28.711 32.222H11.29a.539.539 0 0 1-.385-.163.561.561 0 0 1-.16-.392v-1.111a.56.56 0 0 1 .16-.393.539.539 0 0 1 .385-.163h17.42c.145 0 .283.058.385.163.102.104.16.245.16.393v1.11a.561.561 0 0 1-.16.393.539.539 0 0 1-.385.163Zm.545-6.11V25a.561.561 0 0 0-.16-.393.539.539 0 0 0-.385-.163H11.29a.539.539 0 0 0-.385.163.561.561 0 0 0-.16.393v1.111c0 .148.058.289.16.393a.54.54 0 0 0 .385.163h17.42a.54.54 0 0 0 .385-.163.561.561 0 0 0 .16-.393ZM33.5 3h-27v34h27V3Zm-.433-3c.866 0 1.697.351 2.31.976a3.37 3.37 0 0 1 .956 2.357v33.334a3.37 3.37 0 0 1-.956 2.357 3.234 3.234 0 0 1-2.31.976H6.933a3.234 3.234 0 0 1-2.31-.976 3.368 3.368 0 0 1-.956-2.357V3.333c0-.884.344-1.732.956-2.357A3.234 3.234 0 0 1 6.933 0h26.134Z" /><path d="M27.84 10.078V8.333c0-.659-.653-1.11-1.307-1.11h-4.9c-.657 0-1.071.456-1.071 1.11v1.745h-1.106V8.333c0-.65-.44-1.11-1.09-1.11h-4.9c-.648 0-1.28.46-1.28 1.11v1.745h-1.353V21.11h18.304V10.078h-1.298Zm-5.537-.99h3.804v.99h-3.804v-.99Zm-8.44 0h3.83v.99h-3.83v-.99Zm13.215 9.8H12.922v-6.666h14.156v6.667Z" /></svg>,
  },
];

export const HelpBanner = () => (
  <div className='bg-brand-yellow flex flex-col lg:flex-row'>
    <img src={sophiaPNG} alt="Sophia" className='h-48 object-contain lg:h-96 mb-8' />

    <div className='flex flex-col justify-center place-items-center'>
      <h1 className='text-4xl font-bold text-neutral-800 mb-12 text-center lg:mt-24'>Hey! How can we help you?</h1>

      <div className='grid grid-cols-2 lg:grid-cols-5 mb-8 mx-12'>
        {supportLinks.map((link) => (
          <a href='#' key={link.label} className='group flex flex-col place-items-center m-3 cursor-pointer'>
            <div className='p-4 bg-white rounded-full flex justify-center place-items-center mb-3'>
              <div className='w-12 h-12'>{link.icon}</div>
            </div>
            <span className='text-lg font-medium text-neutral-800 text-center group-hover:underline'>{link.label}</span>
          </a>
        ))}
      </div>
    </div>
  </div>
);
