import { MoonIcon } from "@/components/UI/icons/Moon";
import styles from "./styles.module.scss";
import { SidebarProps } from "./component.props";
import { SunIcon } from "@/components/UI/icons/Sun";

export const Sidebar = ({ theme, onThemeSwitch }: SidebarProps) => {
    return (
        <aside className={styles.aside}>
            <div className={styles.logo}>
                <img src="/logo.svg" alt="logo" />
            </div>
            <div className={styles.bottom}>
                <button
                    className={styles.themeSwitcher}
                    onClick={onThemeSwitch}
                >
                    {theme === "light" ? <MoonIcon /> : <SunIcon />}
                </button>
                <div className={styles.divider}></div>
                <img src="/user.png" alt="user" className={styles.user} />
            </div>
        </aside>
    );
};
