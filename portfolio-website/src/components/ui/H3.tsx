// Adding our own styling to the h3 tag

import { cn } from "@/src/libs/utils";

export function H3(props: React.HTMLProps<HTMLHeadingElement>) {
    return (
        <h3
            {...props}
            className={cn(
                "text-xl font-semibold tracking-tight", 
                props.className,
            )}
        />
    );
}