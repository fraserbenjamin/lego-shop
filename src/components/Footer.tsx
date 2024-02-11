import legoSVG from "../assets/lego.svg";

const linkRowStyles = `text-sm cursor-pointer hover:underline`;

const Footer = () => {
  return (
    <footer className="bg-brand-purple text-white w-full px-12 flex flex-col py-8">

      <div className="flex flex-col place-items-start space-y-5">
        <img src={legoSVG} alt="LEGO" className="h-24" />

        <div className="bg-[#18152d] flex space-x-3 px-3 py-2 place-items-center rounded-sm">
          <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 24" aria-hidden="true"><path d="M8.303.89c2.065 0 3.92.818 5.258 2.156a7.391 7.391 0 012.156 5.257c0 4.906-5.485 11.795-7.414 14.066C6.373 20.097.89 13.21.89 8.303c0-2.065.818-3.92 2.156-5.257A7.391 7.391 0 018.303.89zm0 3.558a3.84 3.84 0 00-2.734 1.12 3.84 3.84 0 00-1.12 2.735 3.84 3.84 0 001.12 2.735 3.84 3.84 0 002.734 1.12 3.84 3.84 0 002.735-1.12 3.84 3.84 0 001.12-2.735 3.84 3.84 0 00-1.12-2.734 3.84 3.84 0 00-2.735-1.12z" stroke="currentColor" strokeWidth="1.779" fill="none"></path></svg>
          <p>United Kingdom</p>
        </div>
      </div>

      <div className="my-8">
        <div className="flex">
          <div className="flex flex-col">
            <h1 className="uppercase font-medium mb-5">
              SUBSCRIBE TO DIGITAL MARKETING EMAILS
            </h1>

            <div className="flex">
              <input
                type="text"
                placeholder="Your email address"
                className="border border-white px-3 py-3 font-regular text-sm text-neutral-900"
              />
              <button className="bg-brand-orange rounded-r px-3">
                <svg
                  viewBox="0 0 18 28"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-neutral-800 h-4 mx-2"
                >
                  <path
                    d="M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z"
                    fill="currentColor"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <ul className="flex space-x-5">
        <li className={linkRowStyles}>Privacy Policy</li>
        <li className={linkRowStyles}>Cookies</li>
        <li className={linkRowStyles}>Legal notice</li>
        <li className={linkRowStyles}>Terms of Use</li>
        <li className={linkRowStyles}>Digital wellbeing</li>
        <li className={linkRowStyles}>Accessibility</li>
        <li className={linkRowStyles}>Cookie Settings</li>
      </ul>

      <p className="text-xs mt-8">
        LEGO System A/S, DK-7190 Billund, Denmark. Must be 18 years or older to
        purchase online. LEGO, the LEGO logo, the Minifigure, DUPLO, the FRIENDS
        logo, the MINIFIGURES logo, DREAMZzz, NINJAGO, VIDIYO and MINDSTORMS are
        trademarks of the LEGO Group. ©2024 The LEGO Group. All rights
        reserved. Use of this site signifies your agreement to the Terms of Use.
      </p>
    </footer>
  );
};

export default Footer;
