import { forwardRef, ReactNode } from "react";

type ContainerProps = {
  children?: ReactNode;
  className?: string;
};

const Container = forwardRef<HTMLDivElement, ContainerProps>(({ children, className }, ref) => {
  return (
    <div className={className} ref={ref}>
      {children}
    </div>
  );
});

export default Container;
