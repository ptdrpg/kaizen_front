import { type LucideProps } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";

type props = {
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  link: string;
  label : string;
};

const SideList = ({ link, icon: Icon, label }: props) => {
  const navigate = useNavigate();
  const locate = useLocation();
  
  const handleNavigate = () => {
    navigate(link);
  };

  return (
    <div className={`${link === locate.pathname ? "bg-black-100" : ""} flex items-center justify-start gap-[10px] p-[10px] rounded-[5px] cursor-pointer text-white `} onClick={handleNavigate}>
      <Icon size={20} color="white" />
      <p className="font-bold text-[12px]">{label}</p>
    </div>
  );
};

export default SideList;