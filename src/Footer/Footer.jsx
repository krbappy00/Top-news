import logo from "../assets/logo.png";
import social from '../assets/SocialIcons.png'

const Footer = () => {
  return (
    <>
      <div className="bg-[#2f2f2f] w-screen p-24 flex justify-between">
        <div className="w-[70%] ">
          <div>
            <img src={logo} alt="" />
          </div>
          <div className="flex justify-between gap-8 mt-24">
            <div className="font-open font-bold text-lg text-bg ">
              <p className="py-4 underline decoration-2 underline-offset-4 hover:cursor-pointer">
                Home
              </p>
              <p className="py-4 underline decoration-2 underline-offset-4 hover:underline hover:cursor-pointer">
                About
              </p>
              <p className="py-4 underline decoration-2 underline-offset-4 hover:underline hover:cursor-pointer">
                Hot Topic
              </p>
            </div>
            <div>
              <div className="font-open font-bold text-lg text-bg ">
                <p className="py-4 underline decoration-2 underline-offset-4 hover:cursor-pointer">
                  News
                </p>
                <p className="py-4 underline decoration-2 underline-offset-4 hover:underline hover:cursor-pointer">
                  Celebrity Spotlight
                </p>
                <p className="py-4 underline decoration-2 underline-offset-4 hover:underline hover:cursor-pointer">
                  Join Trident
                </p>
              </div>
            </div>
            <div>
              <div className="font-open font-bold text-lg text-bg ">
                <p className="py-4 underline decoration-2 underline-offset-4 hover:cursor-pointer">
                  Crowd Trending
                </p>
                <p className="py-4 underline decoration-2 underline-offset-4 hover:underline hover:cursor-pointer">
                  Founding Board
                </p>
                <p className="py-4 underline decoration-2 underline-offset-4 hover:underline hover:cursor-pointer">
                  Board of Director
                </p>
              </div>
            </div>
            <div>
              <div className="font-open font-bold text-lg text-bg ">
                <p className="py-4 underline decoration-2 underline-offset-4 hover:cursor-pointer">
                  Mission Statement
                </p>
                <p className="py-4 underline decoration-2 underline-offset-4 hover:underline hover:cursor-pointer">
                  The Team
                </p>
                <p className="py-4 underline decoration-2 underline-offset-4 hover:underline hover:cursor-pointer">
                  Contact Us
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src={social} alt="" />
        </div>
      </div>
    </>
  );
};

export default Footer;
