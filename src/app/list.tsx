import React from "react";
import List from "../lib/list/index";
import * as Types from "../lib/types";

interface Animal {
  id: number;
  name: string;
  location: { id: number; name: string };
}

// list of data (here only one entry to make example more concise)
const data: Animal[] = [
  { id: 2, name: "Sheep", location: { id: 2, name: "Europe" } },
];

// prepare search options
const options = ["Africa", "Europe"].map((value, i) => ({ key: i + 1, value }));

// table definition
const def: Types.Definition<Animal> = [
  { name: "name", filter: true },
  {
    name: "location",
    filter: {
      type: "category",
      func: (a, b): boolean => b.includes(a.location.id),
      options,
    },
    render: (x): string => x.location.name,
  },
];

// list config
const config = { nPerPage: 3 };

export default (): JSX.Element => (
  <List data={data} def={def} config={config} />
);
