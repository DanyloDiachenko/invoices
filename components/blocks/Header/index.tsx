import { Select } from "@/components/UI/Select";
import styles from "./styles.module.scss";
import { useState } from "react";
import { ISelectVariant } from "@/interfaces/selectVariant.interface";

const invoicesStatuses: ISelectVariant[] = [
    {
        title: "Total",
        value: "total",
    },
    {
        title: "Draft",
        value: "draft",
    },
    {
        title: "Paid",
        value: "paid",
    },
    {
        title: "Pending",
        value: "pending",
    },
    {
        title: "Overdue",
        value: "overdue",
    },
];

export const Header = () => {
    const [invoicesStatus, setInvoicesStatus] = useState<ISelectVariant | null>(
        null,
    );

    return (
        <header className={styles.header}>
            <div className={styles.leftColumn}>
                <h1>Invoices</h1>
                <p>0 total invoices</p>
            </div>
            <div className={styles.rightCol}>
                <Select
                    activeVariant={invoicesStatus}
                    variants={invoicesStatuses}
                    onVariantClick={setInvoicesStatus}
                    placeholder="Filter invoices"
                    className={styles.select}
                />
                {/* <Select />
                <Button /> */}
            </div>
        </header>
    );
};
