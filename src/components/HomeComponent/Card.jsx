/* eslint-disable react/prop-types */
export default function Card({chooseImage, chooseH1,firstBreak,secondBreak,thirdBreak,finalBreak}) {
  return (
    <div className="w-[400px] h-[360px] rounded-lg shadow-md mt-20 bg-[#f8f8f8]">
    <div className='bg-[#DCE4FF] rounded-full w-28 h-28 p-5 shadow-thick-gray transform -translate-y-16 mx-auto '>
        <img src={chooseImage} alt="organization" />
    </div>
    <h1 className='font-semibold text-center text-2xl'>{chooseH1}</h1>
    <p className='text-center mt-7 text-base'>{firstBreak} <br /> {secondBreak} <br /> {thirdBreak}<br /> {finalBreak}.</p>
    </div>
  )
}
