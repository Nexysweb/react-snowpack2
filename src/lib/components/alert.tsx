import React from "react";

interface Props {
  children: React.ReactNode | JSX.Element;
  type?: "error" | "success" | "info" | "warning";
}

const Alert = (props: Props): JSX.Element => {
  const { type = "success", children } = props;
  return <>{children}</>;
};

export default Alert;
