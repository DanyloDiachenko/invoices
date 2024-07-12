import styles from "./styles.module.scss";
import { SelectProps } from "./component.props";
import { useState } from "react";
import { ISelectVariant } from "@/interfaces/selectVariant.interface";

export const Select = ({
    className,
    activeVariant,
    onVariantClick,
    variants,
    placeholder,
}: SelectProps) => {
    const [isVariantsOpened, setIsVariantsOpened] = useState(false);

    const onVariantClickHandler = (variant: ISelectVariant) => {
        setIsVariantsOpened(false);
        onVariantClick(variant);
    };

    return (
        <div
            className={`${styles.selectWrapper} ${className ? className : ""}`}
        >
            <div
                className={styles.activeVariant}
                onClick={() => setIsVariantsOpened(!isVariantsOpened)}
            >
                <span>{activeVariant ? activeVariant.title : placeholder}</span>
                <img src="/arrow.svg" alt="arrow" />
            </div>
            {isVariantsOpened && (
                <div className={styles.variants}>
                    {variants.map((variant, index) => (
                        <div
                            key={index}
                            onClick={() => onVariantClickHandler(variant)}
                            className={`${styles.variant} ${
                                activeVariant?.value === variant.value
                                    ? styles.activeVariantTitle
                                    : ""
                            }`}
                        >
                            {variant.title}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
