import { ReactNode } from "react";

interface IComponentProps {
  children: ReactNode;
}

export function Container({ children }: IComponentProps) {
  return <div className="w-full max-w-[1000px] mx-auto">{children}</div>;
}
