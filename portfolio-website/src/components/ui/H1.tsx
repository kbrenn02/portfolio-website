// Adding our own styling to the h1 tag

import { cn } from "@/src/libs/utils";

export function H1(props: React.HTMLProps<HTMLHeadingElement>) {
    return (
        <h1
            {...props}
            className={cn(
                "text-3xl font-bold tracking-tight sm:text-4xl", 
                props.className,
            )}
        />
    );
}