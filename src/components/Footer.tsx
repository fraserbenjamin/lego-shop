import legoSVG from "../assets/lego.svg";

const linkRowStyles = `text-sm cursor-pointer hover:underline`;

const Footer = () => {
  return (
    <footer className="bg-brand-purple text-white w-full px-12 flex flex-col">

      <div>
        <img src={legoSVG} alt="LEGO" className="h-24" />
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

      <p className="text-xs my-8">
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
