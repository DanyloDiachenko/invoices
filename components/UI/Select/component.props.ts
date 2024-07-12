import { ISelectVariant } from "@/interfaces/selectVariant.interface";

export interface SelectProps {
    className?: string;

    variants: ISelectVariant[];
    activeVariant: ISelectVariant | null;
    onVariantClick: (variant: ISelectVariant) => void;
    placeholder: string;
}
