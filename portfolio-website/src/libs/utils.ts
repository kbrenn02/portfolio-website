import clsx, {type ClassValue} from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    // responsible for overriding tailwind classes if there is a conflict
    return twMerge(clsx(inputs));
}