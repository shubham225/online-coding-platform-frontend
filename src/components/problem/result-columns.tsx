import { Submission } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "../ui/badge";
import {
  capitalizeFirstLetterOfEachWord,
  cn,
  formatBytes,
  formatMilliseconds,
} from "@/lib/utils";

export const columns: ColumnDef<Submission>[] = [
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      return (
        <div className="flex flex-col gap-1">
          <h1
            className={cn("text-md font-medium", {
              "text-teal-600": row.original.status === "ACCEPTED",
              "text-red-600": row.original.status === "WRONG_ANSWER",
              "text-red-700": row.original.status === "TIME_LIMIT_EXCEEDED",
            })}
          >
            {capitalizeFirstLetterOfEachWord(
              row.original.status.replaceAll("_", " ")
            )}
          </h1>
          <h1 className="text-xs font-normal">{row.original.date}</h1>
        </div>
      );
    },
  },
  {
    accessorKey: "language",
    header: "Language",
    cell: ({ row }) => (
      <Badge variant="secondary">
        {capitalizeFirstLetterOfEachWord(row.original.language)}
      </Badge>
    ),
  },
  {
    accessorKey: "runtime",
    header: "Runtime",
    cell: ({ row }) => <div>{formatMilliseconds(row.original.runtime)}</div>,
  },
  {
    accessorKey: "memory",
    header: "Memory",
    cell: ({ row }) => <div>{formatBytes(row.original.memory)}</div>,
  },
];
