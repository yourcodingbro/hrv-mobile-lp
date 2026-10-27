import type { CSSProperties, ComponentProps } from "react"
import { cn } from "@/lib/utils"

type ImagePlaceholderProps = ComponentProps<"div"> & {
  aspectRatio?: CSSProperties["aspectRatio"]
  width?: CSSProperties["width"]
  height?: CSSProperties["height"]
}

/** Solid gray stand-in for an image; sized up front so it never shifts layout. */
export function ImagePlaceholder({
  aspectRatio,
  width,
  height,
  className,
  style,
  ...props
}: ImagePlaceholderProps) {
  return (
    <div
      aria-hidden="true"
      className={cn("bg-placeholder", className)}
      style={{ aspectRatio, width, height, ...style }}
      {...props}
    />
  )
}
