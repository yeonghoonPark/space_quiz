import { ButtonHTMLAttributes, forwardRef, memo, ReactNode } from "react";
import classNames from "classnames";
import css from "../../styles/Button.module.less";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: ReactNode;
  disabled?: boolean;
  size?: "small" | "large";
  text: string;
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, disabled = false, size = "small", text, ...rest }, ref) => {
    return (
      <button
        className={classNames(css.button, {
          [css.small]: size === "small",
          [css.large]: size === "large",
          [css.disabled]: disabled,
        })}
        ref={ref}
        {...rest}
      >
        {children || text}
      </button>
    );
  }
);

export default memo(Button);
