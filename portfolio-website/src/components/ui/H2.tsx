// Adding our own styling to the h2 tag

import { cn } from "@/src/libs/utils";

export function H2(props: React.HTMLProps<HTMLHeadingElement>) {
    return (
        <h2
            {...props}
            className={cn(
                "text-2xl font-semibold tracking-tight", 
                props.className,
            )}
        />
    );
}