import ava from '../assets/avater.png'
import star from '../assets/review.svg'
import back from '../assets/bg-start.svg'


const Review = () => {
    return (
      <div className=" bg-main w-screen mb-32 relative">
        <div className='absolute top-12 left-[-10%]'>
            <img src={back} alt="" />
        </div>
        <div className='absolute top-[-15%] left-[70%]'>
            <img src={back} alt="" />
        </div>
        <div className='absolute top-[70%] right-[-8%]'>
            <img src={back} alt="" />
        </div>
        <div className="w-[30%] mx-auto py-16">
          <div className="flex justify-center mb-4">
            <img src={ava} alt="" />
          </div>
          <div className="text-4xl text-bg font-archivo font-bold flex justify-center mb-4">
            <h1>Kiara Watson</h1>
          </div>
          <div className="text-bg font-open text-justify mb-4">
            <p>
              Thanks for another gig, and best of luck with your project! It’s
              always great working with such friendly people!Thanks a million, I
              have really enjoyed working on this. I appreciate the tip as well
              🙂 ! Thanks!
            </p>
          </div>
          <div className="flex justify-between w-[70%] mx-auto">
            <h1 className="text-xl font-bold font-archivo text-bg">
              Nov.1,2023
            </h1>
            <img src={star} alt="" />
          </div>
        </div>
        <div className="w-[80%] mx-auto flex gap-24">
          <div className="w-[40%] mx-auto">
            <div className="w-[100%] h-[5px] bg-bg mb-4"></div>
            <div className="text-4xl text-bg font-archivo font-bold flex justify-center mb-4">
              <h1>Mark Elon</h1>
            </div>
            <div className="text-bg font-open text-justify mb-4">
              <p>
                Thanks for another gig, and best of luck with your project! It’s
                always great working with such friendly people!Thanks a million,
                I have really enjoyed working on this. I appreciate the tip as
                well 🙂 ! Thanks!
              </p>
            </div>
            <div className="flex justify-between w-[70%] mx-auto">
              <h1 className="text-xl font-bold font-archivo text-bg">
                Nov.1,2023
              </h1>
              <img src={star} alt="" />
            </div>
            <div className="w-[100%] h-[5px] bg-bg mt-4"></div>
          </div>
          <div className="w-[40%] mx-auto">
            <div className="w-[100%] h-[5px] bg-bg mb-4"></div>

            <div className="text-4xl text-bg font-archivo font-bold flex justify-center mb-4">
              <h1>Mona Lisa</h1>
            </div>
            <div className="text-bg font-open text-justify mb-4">
              <p>
                Thanks for another gig, and best of luck with your project! It’s
                always great working with such friendly people!Thanks a million,
                I have really enjoyed working on this. I appreciate the tip as
                well 🙂 ! Thanks!
              </p>
            </div>
            <div className="flex justify-between w-[70%] mx-auto">
              <h1 className="text-xl font-bold font-archivo text-bg">
                Nov.1,2023
              </h1>
              <img src={star} alt="" />
            </div>
            <div className="w-[100%] h-[5px] bg-bg mt-4 mb-16"></div>
          </div>
        </div>
      </div>
    );
};

export default Review;