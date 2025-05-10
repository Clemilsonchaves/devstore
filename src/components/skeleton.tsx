import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

/**
 * Renders a skeleton loading placeholder as a div element.
 *
 * @param className - Additional CSS classes to apply to the skeleton.
 * @param props - Additional props to spread onto the div element.
 *
 * @remarks
 * The skeleton uses a pulsing animation and a semi-transparent background to indicate loading state.
 *
 * @example
 * ```tsx
 * <Skeleton className="h-6 w-32" />
 * ```
 */
export function Skeleton( { className, ...props }: ComponentProps<"div">) {
 return (

    <div className={twMerge("bg-zinc-50/10 animate-pulse rounded-md", className)}
     {...props} 
     
    />

    
 )

}
