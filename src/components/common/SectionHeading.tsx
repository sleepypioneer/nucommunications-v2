import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
  light?: boolean;
}

/** Reusable section heading with pink underline accent */
const SectionHeading: React.FC<SectionHeadingProps> = ({ children, className, light }) => (
  <h2
    className={cn(
      "font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-8 relative inline-block",
      light ? "text-primary-foreground" : "text-foreground",
      className
    )}
  >
    {children}
    <span className="absolute -bottom-2 left-0 w-16 h-1 bg-primary" aria-hidden="true" />
  </h2>
);

export default SectionHeading;
