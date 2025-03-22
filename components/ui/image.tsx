"use client"

import NextImage, { type ImageProps as NextImageProps } from "next/image"
import { useState } from "react"
import { cn } from "@/lib/utils"

interface ImageProps extends NextImageProps {
  wrapperClassName?: string
}

export function OptimizedImage({ alt, src, className, wrapperClassName, onLoad, ...props }: ImageProps) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className={cn("overflow-hidden", wrapperClassName)}>
      <NextImage
        className={cn("duration-700 ease-in-out", isLoading ? "scale-110 blur-sm" : "scale-100 blur-0", className)}
        src={src}
        alt={alt}
        onLoad={(event) => {
          setIsLoading(false)
          if (onLoad) {
            onLoad(event)
          }
        }}
        {...props}
      />
    </div>
  )
}

