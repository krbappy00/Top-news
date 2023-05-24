
import img from '../assets/bimage.png'

const Banner = () => {
    return (
      <div className="w-screen h-[432px] bg-main py-12">
        <div className="w-[80%] mx-auto font-archivo flex justify-between items-center">
          <div className="">
            <h1 className="text-6xl text-bg">
              Exclusive <br /> News Today
            </h1>
            <p className="text-bg font-open font-normal mt-4">
              By India Today Sports Desk: Delhi Capitals skipper David Warner
              shared
              <br /> a video of himself imitating Ravindra Jadeja's sword
              celebration in front of
              <br /> the CSK all-rounder during his team's final IPL 2023 league
              match.
              <br /> Warner captioned the video asking, "Who does it better.
              Warner entertained <br />
              his legion of fans once more on Saturday, this time while batting
              against.
            </p>
            <button className="bg-bg font-archivo text-[#515155] px-12 py-3 mt-8">
              Read More
            </button>
          </div>
          <div>
            <img src={img} alt="" />
          </div>
        </div>
      </div>
    );
};

export default Banner;