import Sidebar from "@/components/Sidebar";
import React from "react";
interface Props {
  children: React.ReactNode;
}

const HomeLayout = ({ children }: Props) => {
  return (
    <div className=" h-full w-full  flex container max-lg:flex-col gap-9 p-8 ">
      <Sidebar />
      {children}
    </div>
  );
};

export default HomeLayout;
