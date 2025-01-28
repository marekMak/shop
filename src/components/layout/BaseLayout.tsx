import { ReactNode } from "react";
import Header from "../Header";
interface BaseLayoutProps {
  children: ReactNode;
}

const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <div className="flex flex-col w-full">
      <Header />
      <div className="px-10 md:px-40 py-10">{children}</div>
    </div>
  );
};

export default BaseLayout;
