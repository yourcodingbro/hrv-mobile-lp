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
        // Transparent bg: a painted card bg bleeds as a light rim at the clipped corners. isolate keeps composited children (badge blur, tilt) clipped.
        "relative isolate h-full justify-end gap-0 rounded-card border border-line bg-transparent py-0 text-base text-white shadow-sm ring-0 transition-shadow duration-300 ease-out-expo hover:shadow-xl",
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
      <div className="relative z-20 bg-linear-to-b from-transparent via-black/40 to-black/80 p-10">
        <Badge className="mb-4 h-auto rounded-full border-0 bg-white/20 px-3.5 py-1.5 text-xs font-extrabold tracking-widest text-white uppercase backdrop-blur-md">
          {category}
        </Badge>
        <h2 className="mb-3 font-heading text-3xl font-bold tracking-tight">
          {title}
        </h2>
        <h3 className="text-base leading-normal font-normal text-white/80">
          {shortDesc}
        </h3>
      </div>
    </Card>
  );
}
