import type { ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/Components/ui/dialog";
import { Button } from "@/Components/ui/button";

interface EditDialogProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  onSave: () => void;
}

export function EditDialog({
  isOpen,
  onClose,
  title,
  children,
  onSave,
}: EditDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[696px] h-[590px] rounded-none px-12 bg-[#000000] border border-gold-500 overflow-hidden">
        <div className="absolute w-[743px] h-[743px] rounded-full bg-[#fff]/45 blur-[624px] -top-[500px] -left-[23.5px] pointer-events-none z-10" />

        <DialogHeader className="text-center !mb-0">
          <DialogTitle className="text-white text-[40px] font-restora_light uppercase mt-10">
            Change {title}
          </DialogTitle>
          <DialogDescription className="text-white !mb-0">
            Update {title.toLowerCase()}. as you’d like it to appear on your
            profile.
          </DialogDescription>
        </DialogHeader>
        {children}
        <DialogFooter className="flex flex-col">
          <Button
            type="submit"
            className="h-14 bg-gold-500 rounded-none font-jakarta uppercase text-xl hover:bg-gold-500/90 text-white"
            onClick={onSave}
          >
            Save changes
          </Button>
          <Button
            className="h-14 bg-transparent rounded-none font-jakarta uppercase text-xl hover:bg-gold-500/25 text-white"
            onClick={onClose}
          >
            Cancel
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
