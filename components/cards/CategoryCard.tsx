import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { cn } from "@/lib/utils";

type CategoryCardProps = {
  category: string;
  title: string;
  shortDesc: string;
  /** Decorative background photo (the h2 already names the category). */
  imageSrc: string;
  imageSizes?: string;
  className?: string;
};

export function CategoryCard({
  category,
  title,
  shortDesc,
  imageSrc,
  imageSizes = "(max-width: 1024px) 88vw, 600px",
  className,
}: CategoryCardProps) {
  return (
    <Card
      className={cn(
        "relative h-full justify-end gap-0 rounded-[32px] py-0 text-base leading-[normal] text-white shadow-[0_10px_30px_rgba(0,0,0,0.04)] ring-0 transition-shadow duration-400 ease-out-expo hover:shadow-[0_30px_60px_rgba(0,0,0,0.12)]",
        className
      )}
    >
      <Image
        src={imageSrc}
        alt=""
        fill
        sizes={imageSizes}
        className="object-cover object-center"
      />
      <div className="relative z-[2] bg-linear-to-b from-transparent via-black/40 to-black/80 p-10">
        <Badge className="mb-4 h-auto rounded-full border-0 bg-white/20 px-3.5 py-1.5 text-[11px] font-extrabold tracking-[1px] text-white uppercase backdrop-blur-[10px]">
          {category}
        </Badge>
        <h2 className="mb-3 font-heading text-[32px] font-bold tracking-[-1px]">
          {title}
        </h2>
        <h3 className="text-base leading-normal font-normal text-white/80">
          {shortDesc}
        </h3>
      </div>
    </Card>
  );
}
