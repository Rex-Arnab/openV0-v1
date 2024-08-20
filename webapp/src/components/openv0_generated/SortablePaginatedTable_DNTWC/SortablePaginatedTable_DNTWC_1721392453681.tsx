"use client";

import { Button } from '@/components/ui/button';
import { Select } from '@/components/ui/select';
import { SelectContent } from '@/components/ui/select';
import { SelectItem } from '@/components/ui/select';
import { SelectTrigger } from '@/components/ui/select';
import { SelectValue } from '@/components/ui/select';
import { Table } from '@/components/ui/table';
import { TableBody } from '@/components/ui/table';
import { TableCaption } from '@/components/ui/table';
import { TableCell } from '@/components/ui/table';
import { TableHead } from '@/components/ui/table';
import { TableHeader } from '@/components/ui/table';
import { TableRow } from '@/components/ui/table';
import { Activity } from 'lucide-react';

export default function SortablePaginatedTable_DNTWC() {
  return (
    <div className="p-4">
      <Table>
        <TableCaption>A list of sortable and paginated data.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="cursor-pointer">
              <div className="flex items-center">
                Name
                <Activity className="ml-1 h-4 w-4" />
              </div>
            </TableHead>
            <TableHead className="cursor-pointer">
              <div className="flex items-center">
                Age
                <Activity className="ml-1 h-4 w-4" />
              </div>
            </TableHead>
            <TableHead className="cursor-pointer">
              <div className="flex items-center">
                Email
                <Activity className="ml-1 h-4 w-4" />
              </div>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">John Doe</TableCell>
            <TableCell>30</TableCell>
            <TableCell>john@example.com</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Jane Smith</TableCell>
            <TableCell>25</TableCell>
            <TableCell>jane@example.com</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Alice Johnson</TableCell>
            <TableCell>28</TableCell>
            <TableCell>alice@example.com</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <div className="flex items-center justify-between mt-4">
        <Select>
          <SelectTrigger className="w-[120px]">
            <SelectValue placeholder="Rows per page" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="5">5</SelectItem>
            <SelectItem value="10">10</SelectItem>
            <SelectItem value="20">20</SelectItem>
          </SelectContent>
        </Select>
        <div>
          <Button variant="outline" className="mx-1">
            Previous
          </Button>
          <Button variant="outline" className="mx-1">
            1
          </Button>
          <Button variant="outline" className="mx-1">
            2
          </Button>
          <Button variant="outline" className="mx-1">
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}