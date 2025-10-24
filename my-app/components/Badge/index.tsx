import styles from "./Badge.module.css";

const variantsToLabel = {
  todo: "TO DO",
  done: "DONE",
};

interface BadgeProps {
  variants: keyof typeof variantsToLabel;
}

const Badge = ({ variants }: BadgeProps) => {
  return (
    <span className={`${styles.badge} ${styles[variants]}`}>
      {variantsToLabel[variants]}
    </span>
  );
};

export default Badge;
