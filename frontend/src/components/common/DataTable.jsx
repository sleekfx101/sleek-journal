import React from 'react';
import { 
  useReactTable, 
  getCoreRowModel, 
  getPaginationRowModel, 
  getSortedRowModel, 
  flexRender 
} from '@tanstack/react-table';
import { FiChevronLeft, FiChevronRight, FiArrowUp, FiArrowDown } from 'react-icons/fi';

const DataTable = ({ 
  data, 
  columns, 
  isLoading = false,
  pageSize = 10
}) => {
  const [sorting, setSorting] = React.useState([]);
  
  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    initialState: {
      pagination: {
        pageSize,
      },
    },
  });
  
  if (isLoading) {
    return (
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="border-b border-dark-lighter">
            <tr>
              {columns.map((column, i) => (
                <th key={i} className="py-3 px-4 text-left text-sm font-medium text-text-secondary">
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Array(5).fill(0).map((_, i) => (
              <tr key={i} className="border-b border-dark-lighter animate-pulse">
                {columns.map((_, j) => (
                  <td key={j} className="py-4 px-4">
                    <div className="h-4 bg-dark-lighter rounded w-3/4"></div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="border-b border-dark-lighter">
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <th 
                    key={header.id} 
                    className="py-3 px-4 text-left text-sm font-medium text-text-secondary"
                  >
                    {header.isPlaceholder ? null : (
                      <div
                        {...{
                          className: header.column.getCanSort() ? 'cursor-pointer select-none flex items-center' : '',
                          onClick: header.column.getToggleSortingHandler(),
                        }}
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {{
                          asc: <FiArrowUp className="ml-2" size={14} />,
                          desc: <FiArrowDown className="ml-2" size={14} />,
                        }[header.column.getIsSorted()] ?? null}
                      </div>
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map(row => (
              <tr 
                key={row.id} 
                className="border-b border-dark-lighter hover:bg-dark-lighter/50 transition-colors"
              >
                {row.getVisibleCells().map(cell => (
                  <td key={cell.id} className="py-4 px-4">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="flex items-center justify-between mt-4 px-4">
        <div className="text-sm text-text-secondary">
          Showing {table.getState().pagination.pageIndex * table.getState().pagination.pageSize + 1} to {Math.min((table.getState().pagination.pageIndex + 1) * table.getState().pagination.pageSize, data.length)} of {data.length} entries
        </div>
        
        <div className="flex items-center space-x-2">
          <button
            className="p-1 rounded-md hover:bg-dark-lighter disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <FiChevronLeft size={20} />
          </button>
          
          {Array.from(
            { length: Math.min(5, table.getPageCount()) },
            (_, i) => i + Math.max(0, table.getState().pagination.pageIndex - 2)
          ).map(pageIndex => (
            pageIndex < table.getPageCount() && (
              <button
                key={pageIndex}
                className={`w-8 h-8 flex items-center justify-center rounded-md ${
                  pageIndex === table.getState().pagination.pageIndex
                    ? 'bg-primary text-white'
                    : 'hover:bg-dark-lighter text-text-secondary'
                }`}
                onClick={() => table.setPageIndex(pageIndex)}
              >
                {pageIndex + 1}
              </button>
            )
          ))}
          
          <button
            className="p-1 rounded-md hover:bg-dark-lighter disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <FiChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DataTable;