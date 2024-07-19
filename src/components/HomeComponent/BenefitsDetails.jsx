/* eslint-disable react/prop-types */
import check from '../assets/NewDesignImages/tick.svg';
export default function BenefitsDetails({details}) {
  return (
    <div className='flex gap-4 items-center bg-[#DCE4FF] mt-10 px-[15px] py-[30px] rounded-lg'>
        <img src={check} alt="check image" />
        <p className='#222222 font-semibold text-2xl'>{details}</p>
    </div>
  )
}
