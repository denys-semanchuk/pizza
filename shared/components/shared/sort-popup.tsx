import { cn } from "@/shared/lib/utils";
import { ArrowUpDown } from "lucide-react";

export const SortPopup: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn('inline-flex items-center gap-1 bg-gray-50 px-5 h-[52px] rounded-2xl cursor-pointer', className)}>
      <ArrowUpDown size={16} />
      <b>Sorting:</b>
      <b className="text-primary">Popular</b>
    </div>
  )
}

interface Props {
  className?: string;
}