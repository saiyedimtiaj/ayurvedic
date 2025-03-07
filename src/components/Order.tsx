"use client";

import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  CheckCircle,
  ChevronDown,
  Clock,
  Edit,
  MoreHorizontal,
  Truck,
  XCircle,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import axios from "axios";
import { TOrder } from "@/types";
import ChangeStatusModal from "./ChangeStatusModal";

const getStatusIcon = (status: string) => {
  switch (status) {
    case "Delivered":
      return <CheckCircle size={16} className="text-green-500" />;
    case "Pending":
      return <Clock size={16} className="text-yellow-500" />;
    case "Shipped":
      return <Truck size={16} className="text-blue-500" />;
    case "Cancelled":
      return <XCircle size={16} className="text-red-500" />;
    default:
      return null;
  }
};

const getStatusClass = (status: string) => {
  switch (status) {
    case "Delivered":
      return "bg-green-100 text-green-800";
    case "Processing":
      return "bg-yellow-100 text-yellow-800";
    case "Shipped":
      return "bg-blue-100 text-blue-800";
    case "Cancelled":
      return "bg-red-100 text-red-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

export const columns: ColumnDef<TOrder>[] = [
  {
    accessorKey: "name",
    header: "Customer Name",
    cell: ({ row }) => <div className="capitalize">{row.getValue("name")}</div>,
  },
  {
    accessorKey: "productName",
    header: "Product Name",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("productName")}</div>
    ),
  },
  {
    accessorKey: "mobile",
    header: ({}) => {
      return <Button variant="ghost">mobile</Button>;
    },
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("mobile")}</div>
    ),
  },
  {
    accessorKey: "address",
    header: "address",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("address")}</div>
    ),
  },
  {
    accessorKey: "amount",
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }) => {
      return (
        <div className="text-right font-medium">
          BDT {row.original.total.toFixed()}
        </div>
      );
    },
  },
  {
    accessorKey: "status",
    header: () => <div className="text-left">Status</div>,
    cell: ({ row }) => {
      return (
        <div
          className={`text-left flex items-center px-4 rounded-full py-1 w-[140px] font-medium gap-2 ${getStatusClass(
            row.original.status
          )}`}
        >
          <span>{getStatusIcon(row.original.status)}</span>
          <span>{row.original.status}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "createdAt",
    header: ({}) => {
      return <Button variant="ghost">Order At</Button>;
    },
    cell: ({ row }) => (
      <div className="lowercase">
        {(row.original.createdAt as unknown as string).slice(0, 10)}
      </div>
    ),
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment._id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export default function DataTableDemo() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(true);
  const [products, setProducts] = React.useState<TOrder[] | []>([]);
  const [isOpen, setIsOpen] = React.useState(false);
  const [id, setId] = React.useState("");

  React.useEffect(() => {
    axios.get("/api/orders").then((res) => {
      setProducts(res?.data?.orders);
      setIsLoading(false);
    });
  }, []);

  const columns: ColumnDef<TOrder>[] = [
    {
      accessorKey: "name",
      header: "Customer Name",
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("name")}</div>
      ),
    },
    {
      accessorKey: "productName",
      header: "Product Name",
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("productName")}</div>
      ),
    },
    {
      accessorKey: "mobile",
      header: ({}) => {
        return <Button variant="ghost">mobile</Button>;
      },
      cell: ({ row }) => (
        <div className="lowercase">{row.getValue("mobile")}</div>
      ),
    },
    {
      accessorKey: "address",
      header: "address",
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("address")}</div>
      ),
    },
    {
      accessorKey: "amount",
      header: () => <div className="text-right">Amount</div>,
      cell: ({ row }) => {
        return (
          <div className="text-right font-medium">
            BDT {row.original.total.toFixed()}
          </div>
        );
      },
    },
    {
      accessorKey: "status",
      header: () => <div className="text-left">Status</div>,
      cell: ({ row }) => {
        return (
          <div
            className={`text-left flex items-center px-4 rounded-full py-1 w-[140px] font-medium gap-2 ${getStatusClass(
              row.original.status
            )}`}
          >
            <span>{getStatusIcon(row.original.status)}</span>
            <span>{row.original.status}</span>
          </div>
        );
      },
    },
    {
      accessorKey: "createdAt",
      header: ({}) => {
        return <Button variant="ghost">Order At</Button>;
      },
      cell: ({ row }) => (
        <div className="lowercase">
          {(row.original.createdAt as unknown as string).slice(0, 10)}
        </div>
      ),
    },
    {
      id: "actions",
      header: "Action",
      enableHiding: false,
      cell: ({ row }) => {
        return (
          <Button
            onClick={() => {
              setIsOpen(true);
              setId(row.original?._id);
            }}
            className="cursor-pointer"
            variant="ghost"
          >
            <Edit />
          </Button>
        );
      },
    },
  ];

  const table = useReactTable({
    data: products,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  const handleStatusFilterChange = (status: string) => {
    if (status === "") {
      setColumnFilters([]);
    } else {
      setColumnFilters([
        {
          id: "status",
          value: status,
        },
      ]);
    }
  };

  if (isLoading) return <p>Loading....</p>;

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter Name..."
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("name")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Status <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Choose Status</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => handleStatusFilterChange("Delivered")}
            >
              Delivered
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => handleStatusFilterChange("Pending")}
            >
              Pending
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => handleStatusFilterChange("Cancelled")}
            >
              Cancelled
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleStatusFilterChange("")}>
              Show All
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
      <ChangeStatusModal id={id} isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}
