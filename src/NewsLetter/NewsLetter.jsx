
import star from '../assets/nstar.svg'

const NewsLetter = () => {
    return (
      <div className="w-screen mb-32 relative">
        <div className='absolute top-[-20%] left-[-10%]'>
          <img src={star} alt="" />
        </div>
        <div className='absolute top-[60%] right-[-5%]'>
          <img src={star} alt="" />
        </div>
        <div className='absolute top-[20%] left-[50%] opacity-25'>
          <img src={star} alt="" />
        </div>
        <div className="w-[80%] mx-auto">
          <div className="text-6xl font-archivo font-bold flex justify-center mb-4">
            <h1 className="text-[#515155]">
              Newsletter<span className="text-main"> Registration</span>
            </h1>
          </div>
          <div className="w-[80%] mx-auto   mt-8">
            <form action="">
              <div className="flex justify-center w-[100%] gap-8">
                <div className="w-[50%] relative">
                  <input
                    className="w-[100%] peer outline-none bg-bg border-4 rounded-xl h-[60px] border-main text-xl font-archivo font-semibold text-[#515155] pl-4"
                    type="text"
                    placeholder=" "
                  />
                  <label
                    className="opacity-25 peer-focus:opacity-25 peer-placeholder-shown:opacity-100 pointer-events-none text-xl text-[#515155] font-archivo font-bold absolute top-[16px] left-[30px]"
                    htmlFor=""
                  >
                    First Name
                    <span className="text-xl text-main">*</span>
                  </label>
                </div>
                <div className="w-[50%] relative">
                  <input
                    className="w-[100%] peer outline-none bg-bg border-4 rounded-xl h-[60px] border-main text-xl font-archivo font-semibold text-[#515155] pl-4"
                    type="text"
                    placeholder=" "
                  />
                  <label
                    className="opacity-25 peer-focus:opacity-25 peer-placeholder-shown:opacity-100 pointer-events-none text-xl text-[#515155] font-archivo font-bold absolute top-[16px] left-[30px]"
                    htmlFor=""
                  >
                    Last Name
                    <span className="text-xl text-main">*</span>
                  </label>
                </div>
              </div>
              <div className="mt-8 relative">
                <input
                  className="w-[100%] peer outline-none bg-bg border-4 rounded-xl h-[60px] border-main text-xl font-archivo font-semibold text-[#515155] pl-4"
                  type="text"
                  placeholder=" "
                />
                <label
                  className="opacity-25 peer-focus:opacity-25 peer-placeholder-shown:opacity-100 pointer-events-none text-xl text-[#515155] font-archivo font-bold absolute top-[16px] left-[30px]"
                  htmlFor=""
                >
                  Email Subject
                  <span className="text-xl text-main">*</span>
                </label>
              </div>
              <div className="mt-8 relative">
                <textarea
                  className="pt-4 w-[100%] peer outline-none bg-bg border-4 rounded-xl h-[250px] border-main text-xl font-archivo font-semibold text-[#515155] pl-4"
                  type="text"
                  placeholder=" "
                />
                <label
                  className="opacity-25 peer-focus:opacity-25 peer-placeholder-shown:opacity-100 pointer-events-none text-xl text-[#515155] font-archivo font-bold absolute top-[20px] left-[30px]"
                  htmlFor=""
                >
                  Write something here....
                  <span className="text-xl text-main">*</span> 
                </label>
              </div>
              <div className="flex justify-center mt-8">
                <button className="text-bg bg-main px-12 py-4 font-bold font-archivo text-xl rounded-full">SUBMIT EMAIL</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default NewsLetter;