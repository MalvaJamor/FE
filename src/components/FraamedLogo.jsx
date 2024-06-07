/* eslint-disable react/prop-types */
import logo from './assets/logo.svg';
export default function FraamedLogo({logoClasses}) {
  return (
    <>
      <div className={logoClasses}>
        <img src={logo} className="mx-auto" alt="logo image" />
      </div>
    </>
  );
}
