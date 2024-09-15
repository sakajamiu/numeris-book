/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-vars */

interface ButtonProps {
  label?: string | React.ReactNode;
  type: 'button' | 'submit';
  className?: string;
  disabled?: boolean;
  icon?: Element | React.ComponentType | React.ElementType | any;
  buttonIconClass?: string;
  handleClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
const Button = ({
  label,
  type = 'button',
  disabled,
  className = 'h-[3rem] w-[11rem]',
  buttonIconClass,
  icon,
  handleClick,
}: ButtonProps) => {
  return (
    <button
      className={` rounded-full px-4 py-2 hover:brightness-90  ${className}`}
      type={type}
      disabled={disabled}
      onClick={(e) => handleClick && handleClick(e)}
    >
      {!icon && label}
      {icon && (
        <div className={buttonIconClass}>
          <p>{label}</p>
          <i className="">{icon}</i>
        </div>
      )}
    </button>
  );
};

export default Button;
