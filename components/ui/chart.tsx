"use client"

import type * as React from "react"
// Remove recharts import since it's not installed
// import * as RechartsPrimitive from "recharts"

import { cn } from "@/lib/utils"

// Create a simple placeholder component instead of using recharts
export const Chart = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("w-full h-[300px] bg-muted flex items-center justify-center rounded-md", className)} {...props}>
    <p className="text-muted-foreground">Chart functionality requires recharts package</p>
  </div>
)

// Export empty components as placeholders
export const ChartContainer = Chart
export const ChartTooltip = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("", className)} {...props} />
)
export const ChartLine = () => null
export const ChartBar = () => null
export const ChartArea = () => null
export const ChartXAxis = () => null
export const ChartYAxis = () => null
export const ChartLegend = () => null

