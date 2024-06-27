/* eslint-disable react/prop-types */
import hide from '../assets/eye-slash.svg';
export default function ShowPassword({isVisible, divClass}) {
  return (
    <div className={divClass}>
        <img src={hide} alt="hides" className={isVisible} />
    </div>
  )
}
//
