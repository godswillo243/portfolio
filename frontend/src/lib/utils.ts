
import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

type ClassValue = string | number | null | undefined | ClassValue[];

export const cn = (...inputs: ClassValue[]): string => {
    return twMerge(clsx(inputs));
};