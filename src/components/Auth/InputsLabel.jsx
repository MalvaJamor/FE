import ShowPassword from "./ShowPassword";
/* eslint-disable react/prop-types */
export default function InputsLabel({
  label,
  type,
  placeholder,
  handleChange,
  value,
  justHide,
  containerClass
}) {
  return (
    <>
      <div className="mt-4">
        <label
          className="text-custom-purplish-blue font-lighter "
          htmlFor="email"
        >
          {label}
        </label>
        <input
          onChange={handleChange}
          value={value}
          className="block w-full h-[45px] rounded-[10px] box-border p-2  border-2 border-[#AEAEAE] relative  outline-none"
          type={type}
          placeholder={placeholder}
          id="email"
        />
        <ShowPassword 
          divClass={containerClass}
          isVisible={justHide}
        />
      </div>
    </>
  );
}
