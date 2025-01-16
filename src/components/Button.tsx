import React from "react";

interface Props {
  children: string;
  onClick: () => void;
}

const Button = ({ children }: Props) => {
  return (
    <div>
      <button type="button" className="btn btn-dark" onClick={onclick}>
        {children}
      </button>
    </div>
  );
};

export default Button;
