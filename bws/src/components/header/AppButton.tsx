import styles from "./styles/AppButton.module.css"

interface AppButtonProps {
    icon: React.ReactNode;
}

function AppButton({icon} : AppButtonProps)
{
    return (<button className={styles.appButton}>
                {icon}
            </button>);
}


export default AppButton