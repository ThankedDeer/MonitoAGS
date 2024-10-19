import React, { useEffect, useState } from "react"
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  User,
  Chip,
  Tooltip,
  ChipProps,
} from "@nextui-org/react"
import { EditIcon } from "./icons/EditIcon"
import { DeleteIcon } from "./icons/DeleteIcon"
import { EyeIcon } from "./icons/EyeIcon"
import { columns, users } from "./data"

const statusColorMap: Record<string, ChipProps["color"]> = {
  active: "success",
  paused: "danger",
  vacation: "warning",
}

export default function UserTable() {


  useEffect(() => {
    fetch('https://rohls-nqaaa-aaaan-qznfq-cai.raw.icp0.io/read')
    .then(response => response.json())
    .then(res => console.log(res))
  },[])
  const renderCell = React.useCallback((data: any, columnKey: React.Key) => {
    const cellValue = data[columnKey as keyof typeof data];

    switch (columnKey) {
      case "name":
        return (
          <p className="text-bold text-sm capitalize">{cellValue}</p>
        );
      case "phone":
        return (
          <p className="text-bold text-sm">{cellValue}</p>
        );
      case "address":
        return (
          <p className="text-bold text-sm">{cellValue}</p>
        );
      case "emergency":
        return (
          <p className="text-bold text-sm capitalize">{cellValue}</p>
        );
      default:
        return cellValue;
    }
  }, []);

  return (
    <Table aria-label="Example table with emergency contacts">
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn key={column.uid} align="start">
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={data}>
        {(item) => (
          <TableRow key={item.phone}>
            {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}