import React from "react";

const Button = ({name, icon, onClick}) => {
  
  return (
    <>
      <div className="items-center flex cursor-pointer" onClick={onClick}>

        <span className="element rounded w-fit flex px-4 py-3 items-center gap-3 bg-slate-300 " >
          {icon}
          {name}
        </span>

      </div>
    </>
  );
};

export default Button;
