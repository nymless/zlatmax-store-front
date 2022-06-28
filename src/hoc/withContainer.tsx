import React, { FC } from "react";

export const withContainer = (WrappedComponent: FC<any>) => (props: any) => {
  return (
    <div
      style={{
        height: "100%",
        width: "1618px",
        padding: "0 15px",
        margin: "0 auto",
      }}
    >
      <WrappedComponent {...props} />
    </div>
  );
};
