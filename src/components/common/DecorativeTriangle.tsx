import { cn } from "@/lib/utils";

interface DecorativeTriangleProps {
  className?: string;
  size?: number;
}

/** Decorative pink triangle element matching the PDF style — bottom-right corner accent */
const DecorativeTriangle: React.FC<DecorativeTriangleProps> = ({ className, size = 80 }) => (
  <div
    className={cn("absolute", className)}
    aria-hidden="true"
    style={{
      width: size,
      height: size,
      clipPath: "polygon(100% 0%, 0% 100%, 100% 100%)",
    }}
  >
    <div className="w-full h-full bg-primary" />
  </div>
);

export default DecorativeTriangle;
