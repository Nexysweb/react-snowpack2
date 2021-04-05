import React from "react";
import { Table, TableBody, TableRow, TableCell } from "@material-ui/core";
import { Delete as DeleteIcon } from "@material-ui/icons";
import { Loader } from "../utils-ui";

const getSleep = async (): Promise<any[]> => {
  const r = await fetch("/api/sleep", { credentials: "same-origin" });
  const j = await r.json();
  return j.sleep;
};
const List = ({ data }: { data: any[] }) => (
  <Table>
    <TableBody>
      <TableRow>
        <TableCell>fghjd</TableCell>
        <TableCell>
          fghjd2 <DeleteIcon />
        </TableCell>
      </TableRow>
      {data &&
        data.map((d, i) => (
          <TableRow key={i}>
            <TableCell>fghjd</TableCell>
            <TableCell>
              fghjd2 <DeleteIcon />
            </TableCell>
          </TableRow>
        ))}
    </TableBody>
  </Table>
);

export default () => <Loader Component={List} promise={getSleep} />;
