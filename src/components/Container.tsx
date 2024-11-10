import { cn } from "@/utils/cn";

export function Container(props: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={cn(
        " mb-12 flex  flex-wrap   justify-center   gap-4 transition-all sm:justify-between md:gap-y-10  ",
        props.className,
      )}
    >
      {props.children}
    </section>
  );
}