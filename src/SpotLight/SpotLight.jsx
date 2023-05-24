import str from '../assets/star.svg'
import heroImg from '../assets/Image.png'
import heroImg1 from '../assets/hero2.png'

const SpotLight = () => {
    return (
      <div className="w-screen mb-32 relative">
        <div className='absolute top-[-18%] left-[-5%]'>
            <img src={str} alt="" />
        </div>
        <div className='absolute top-[1%] right-[-5%]'>
            <img src={str} alt="" />
        </div>
        <div className="w-[80%] mx-auto relative">
          <div className="">
            <h1 className="text-center text-main font-archivo font-extrabold text-6xl mt-4">
              Celebrity Spotlight
            </h1>
            <p className="text-[#515155] font-archivo text-xl font-bold text-center">
              Get to know your favorites celebrity!
            </p>
          </div>

          <div className="flex justify-between mt-24 ">
            <div className="z-10">
              <img src={heroImg} alt="" />
            </div>
            <div className="z-0 p-4 font-open font-bold text-bg w-[650px] h-[190px] bg-main absolute left-[11%] top-[24%]">
              <div className="ml-24">
                <div>
                  <h1 className="text-5xl">Hanneh Doe Actress</h1>
                </div>
                <div className="mt-2 w-[480px] h-[3px] bg-bg "></div>
                <div className="text-sm font-normal mt-2">
                  <p className="text-justify w-[480px]">
                    Ukraine has long asked for the more advanced fighter planes,
                    saying they are superior to its Soviet-era fleet. But the US
                    and other NATO countries had so far resisted, usually citing
                    the need to first train Ukrainian pilots to fly them
                  </p>
                </div>
              </div>
            </div>
            <div className="flex gap-4 absolute top-[50%] left-[38%]">
              <h1 className="text-xl font-open font-bold text-main">
                Full Article Here
              </h1>
              <svg
                width="45"
                height="30"
                viewBox="0 0 63 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M61.4175 16.1415C62.1986 15.3604 62.1986 14.0941 61.4175 13.3131L48.6896 0.585129C47.9085 -0.19592 46.6422 -0.19592 45.8612 0.585129C45.0801 1.36618 45.0801 2.63251 45.8612 3.41356L57.1749 14.7273L45.8612 26.041C45.0801 26.822 45.0801 28.0884 45.8612 28.8694C46.6422 29.6504 47.9085 29.6504 48.6896 28.8694L61.4175 16.1415ZM0.0032959 16.7273H60.0033V12.7273H0.0032959L0.0032959 16.7273Z"
                  fill="#EF4230"
                />
              </svg>
            </div>
            <div className="flex gap-4 absolute top-[95%] left-[64%]">
              <h1 className="text-xl font-open font-bold text-main">
                Full Article Here
              </h1>
              <svg
                width="45"
                height="30"
                viewBox="0 0 63 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M61.4175 16.1415C62.1986 15.3604 62.1986 14.0941 61.4175 13.3131L48.6896 0.585129C47.9085 -0.19592 46.6422 -0.19592 45.8612 0.585129C45.0801 1.36618 45.0801 2.63251 45.8612 3.41356L57.1749 14.7273L45.8612 26.041C45.0801 26.822 45.0801 28.0884 45.8612 28.8694C46.6422 29.6504 47.9085 29.6504 48.6896 28.8694L61.4175 16.1415ZM0.0032959 16.7273H60.0033V12.7273H0.0032959L0.0032959 16.7273Z"
                  fill="#EF4230"
                />
              </svg>
            </div>
            <div className="z-10">
              <img src={heroImg1} alt="" />
            </div>
            <div className="z-0 p-4 font-open font-bold text-bg w-[650px] h-[190px] bg-main absolute left-[40%] top-[69%]">
              <div className="ml-8">
                <div>
                  <h1 className="text-5xl">Vin Dezale MR9</h1>
                </div>
                <div className="mt-2 w-[480px] h-[3px] bg-bg "></div>
                <div className="text-sm font-normal mt-2">
                  <p className="text-justify w-[480px]">
                    Ukraine has long asked for the more advanced fighter planes,
                    saying they are superior to its Soviet-era fleet. But the US
                    and other NATO countries had so far resisted, usually citing
                    the need to first train Ukrainian pilots to fly them
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SpotLight;