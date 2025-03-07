"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import axios from "axios";
import { Dispatch, useState } from "react";

const statuses = ["Pending", "Delivered", "Cancelled"];

type ChangeStatusModalProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<React.SetStateAction<boolean>>;
  id: string;
};

export default function ChangeStatusModal({
  isOpen,
  setIsOpen,
  id,
}: ChangeStatusModalProps) {
  const [selectedStatus, setSelectedStatus] = useState("Pending");
  const [loading, setLoading] = useState(false);

  const onConfirm = async () => {
    if (!selectedStatus || selectedStatus === "Pending") return;

    try {
      setLoading(true);
      await axios.patch(`/api/orders/${id}`, { status: selectedStatus });
      setIsOpen(false);
    } catch (error: unknown) {
      console.log(error);
    } finally {
      setLoading(false);
      setSelectedStatus("Pending");
      setIsOpen(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Change Order Status</DialogTitle>
          <DialogDescription>
            Select a new status for the order and confirm your changes.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <Select value={selectedStatus} onValueChange={setSelectedStatus}>
            <SelectTrigger>
              <SelectValue placeholder="Select status" />
            </SelectTrigger>
            <SelectContent>
              {statuses.map((status) => (
                <SelectItem
                  disabled={status === "Pending"}
                  key={status}
                  value={status}
                >
                  {status}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <div className="flex justify-end">
            <Button onClick={onConfirm} disabled={loading}>
              {loading ? "Updating..." : "Confirm"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
