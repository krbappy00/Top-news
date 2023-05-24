import img from '../assets/musicimg.png'
import qu from '../assets/Quotation.png'

const Music = () => {
    return (
      <div className="mb-32 bg-main w-screen mt-52">
        <div className="flex items-center ">
          <img className="border-r-4 border-[#2f2f2f] " src={img} alt="" />
          <div className="mx-auto">
            <img className="text-bg" src={qu} alt="" />

            <div className="relative ">
              <svg
                className="absolute top-[-130%] right-[-60%]"
                width="506"
                height="269"
                viewBox="0 0 506 269"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M253 1.53685L292.967 48.1785L293.439 48.7288L294.109 48.452L369.88 17.1394L364.855 67.6968L364.735 68.9051L365.944 68.7913L459.123 60.0219L411.452 102.945L409.918 104.326L411.952 104.674L501.015 119.914L421.627 146.033L419.428 146.757L421.462 147.862L486.804 183.36L393.019 186.763L391.373 186.822L392.186 188.255L419.433 236.297L332.317 215.71L331.445 215.504L331.145 216.347L313.276 266.499L253.559 226.29L253 225.914L252.441 226.29L192.724 266.499L174.855 216.347L174.555 215.504L173.683 215.71L86.5674 236.297L113.814 188.255L114.627 186.822L112.981 186.763L19.1962 183.36L84.5382 147.862L86.5724 146.757L84.3733 146.033L4.98544 119.914L94.0476 104.674L96.0816 104.326L94.5481 102.945L46.8767 60.0219L140.056 68.7913L141.265 68.9051L141.145 67.6968L136.12 17.1394L211.891 48.452L212.561 48.7287L213.033 48.1785L253 1.53685Z"
                  stroke="#EDE7D7"
                  strokeWidth="2"
                />
              </svg>
              <svg
                className="absolute bottom-[-200%] right-[-60%]"
                width="506"
                height="269"
                viewBox="0 0 506 269"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M253 1.53685L292.967 48.1785L293.439 48.7288L294.109 48.452L369.88 17.1394L364.855 67.6968L364.735 68.9051L365.944 68.7913L459.123 60.0219L411.452 102.945L409.918 104.326L411.952 104.674L501.015 119.914L421.627 146.033L419.428 146.757L421.462 147.862L486.804 183.36L393.019 186.763L391.373 186.822L392.186 188.255L419.433 236.297L332.317 215.71L331.445 215.504L331.145 216.347L313.276 266.499L253.559 226.29L253 225.914L252.441 226.29L192.724 266.499L174.855 216.347L174.555 215.504L173.683 215.71L86.5674 236.297L113.814 188.255L114.627 186.822L112.981 186.763L19.1962 183.36L84.5382 147.862L86.5724 146.757L84.3733 146.033L4.98544 119.914L94.0476 104.674L96.0816 104.326L94.5481 102.945L46.8767 60.0219L140.056 68.7913L141.265 68.9051L141.145 67.6968L136.12 17.1394L211.891 48.452L212.561 48.7287L213.033 48.1785L253 1.53685Z"
                  stroke="#EDE7D7"
                  strokeWidth="2"
                />
              </svg>

              <h1 className=" text-bg font-archivo font-extrabold text-[100px] leading-[100px]">
                Bringing new <br />
                Gen music.
              </h1>
              <p className="pt-4 font-open text-bg text-2xl font-extrabold">
                <span className="w-[5px] h-[1px] bg-bg">-</span> Hanneh Doe,
                Rokies Actress.
              </p>
            </div>
            <div className="p-4 font-open font-bold text-main bg-bg h-[190px] w-[740px] mt-12 ">
              <div className="w-[90%] mx-auto">
                <div>
                  <h1 className="text-5xl">Ukraine wins access</h1>
                </div>
                <div className="mt-2 w-[100%] h-[3px] bg-main "></div>
                <div className="text-sm font-normal mt-2 ">
                  <p className="text-justify text-main">
                    Ukraine has long asked for the more advanced fighter planes,
                    saying they are superior to its Soviet-era fleet. But the US
                    and other NATO countries had so far resisted, usuallyciting
                    the need to first train Ukrainian pilots to fly them first,
                    but also often saying that other weapons systems like air
                    defense and armored vehicles were more.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Music;