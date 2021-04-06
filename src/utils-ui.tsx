import React from "react";

import { HourglassEmptyTwoTone as LoadIcon } from "@material-ui/icons";

export const Loader = <A,>({
  promise,
  Component,
}: {
  promise: () => Promise<A>;
  Component: ({ data }: { data: A }) => JSX.Element;
}) => {
  const [isLoading, setLoading] = React.useState<boolean>(true);
  const [data, setData] = React.useState<any | undefined>(undefined);

  if (isLoading) {
    promise().then((x) => {
      setLoading(false);
      console.log(x);
      setData(x);
    });
    return <LoadIcon />;
  }

  if (data) {
    return <Component data={data} />;
  }

  return <p>somethng went wrong</p>;
};

export default Loader;
