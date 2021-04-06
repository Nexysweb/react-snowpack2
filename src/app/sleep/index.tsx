import React from "react";
import { Table, TableBody, TableRow, TableCell } from "@material-ui/core";
import { Delete as DeleteIcon } from "@material-ui/icons";
import { Loader } from "../../utils-ui";

interface Sleep {
  dateOfSleep: string;
  duration: number;
  efficiency: any;
  isMainSleep: boolean;
}

const getSleep = async (): Promise<Sleep[]> => {
  const r = await fetch("/api/sleep", { credentials: "same-origin" });
  const j = await r.json();
  return j.sleep;
};
const List = ({ data }: { data: Sleep[] }) => {
  if (data.length === 0) {
    return <p>no entries were found</p>;
  }

  return (
    <Table>
      <TableBody>
        <TableRow>
          <TableCell>Date</TableCell>
          <TableCell>Duration</TableCell>
          <TableCell>Efficiency</TableCell>
          <TableCell>
            is main sleep <DeleteIcon />
          </TableCell>
        </TableRow>
        {data &&
          data.map((d, i) => (
            <TableRow key={i}>
              <TableCell>{d.dateOfSleep}</TableCell>
              <TableCell>
                {d.duration}
                <DeleteIcon />
              </TableCell>
              <TableCell>{d.efficiency}</TableCell>
              <TableCell>{d.isMainSleep}</TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
};

export default () => <Loader Component={List} promise={getSleep} />;
