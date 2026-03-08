import { cn } from "@/lib/utils";

interface DecorativeDotsProps {
  className?: string;
  rows?: number;
  cols?: number;
}

/** Decorative pink dot grid pattern matching the PDF style */
const DecorativeDots: React.FC<DecorativeDotsProps> = ({ className, rows = 4, cols = 6 }) => (
  <div className={cn("grid gap-2 pointer-events-none z-0 opacity-40 dark:opacity-70", className)} style={{ gridTemplateColumns: `repeat(${cols}, 6px)` }} aria-hidden="true">
    {Array.from({ length: rows * cols }).map((_, i) => (
      <div key={i} className="h-1.5 w-1.5 rounded-full bg-primary opacity-60 dark:opacity-80" />
    ))}
  </div>
);

export default DecorativeDots;
