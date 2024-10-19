import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react"


import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/react";


const MonitoHorariosTabla = () => {
  return (
    <div className="">
      <div className="ml-5">
        <h4 className="text-">Monitoreo de patrullaje</h4>
        <div className="mb-10 pl-5">
          <div className="flex ml-2 mr-2">
            <div className="flex w-full md:flex-nowrap gap-4">
              <Input type="email" label="" placeholder="Año" />
              <Input type="email" label="" placeholder="Mes (01-12)" />
              <Input type="email" label="" placeholder="Dia (01-31)" />
            </div >
            <Button className="h-auto" color="primary"> Limpiar</Button>
          </div>
          <Table aria-label="Example static collection table">
            <TableHeader>
              <TableColumn>ID</TableColumn>
              <TableColumn>INCIDENTE_ID</TableColumn>
              <TableColumn>ID_ZONA</TableColumn>
              <TableColumn>FECHA</TableColumn>
              <TableColumn>NO_INCIDENTES</TableColumn>
              <TableColumn>NUEVO_HORARIO</TableColumn>
            </TableHeader>
            <TableBody>
              <TableRow key="1">
                <TableCell>1</TableCell>
                <TableCell>1</TableCell>
                <TableCell>A1</TableCell>
                <TableCell>30/12/2024</TableCell>
                <TableCell>5</TableCell>
                <TableCell>1</TableCell>

              </TableRow>
              <TableRow key="2">
                <TableCell>2</TableCell>
                <TableCell>5</TableCell>
                <TableCell>A2</TableCell>
                <TableCell>18/8/2024</TableCell>
                <TableCell>3</TableCell>
                <TableCell>2</TableCell>
              </TableRow>
              <TableRow key="3">
                <TableCell>3</TableCell>
                <TableCell>3</TableCell>
                <TableCell>A5</TableCell>
                <TableCell>19/03/2024</TableCell>
                <TableCell>8</TableCell>
                <TableCell>3</TableCell>
              </TableRow>
              <TableRow key="4">
                <TableCell>4</TableCell>
                <TableCell>2</TableCell>
                <TableCell>A4</TableCell>
                <TableCell>29/01/2024</TableCell>
                <TableCell>6</TableCell>
                <TableCell>1</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Button color="primary" className="mt mb-5">Nuevo registro</Button>
        </div>
      </div>
    </div>
  )
}

export default MonitoHorariosTabla