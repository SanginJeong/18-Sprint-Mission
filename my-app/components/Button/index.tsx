import { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.css";
import Image from "next/image";
import IcPlus from "@/public/images/ic_plus.svg";
import IcDelete from "@/public/images/ic_x.svg";
import IcUpdate from "@/public/images/ic_check.svg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variants: "append" | "delete" | "update";
}

const variantsToLabel = {
  append: "추가하기",
  delete: "삭제하기",
  update: "수정완료",
};

const variantsToIcon = {
  append: <Image src={IcPlus} alt="추가하기" aria-label="항목 추가하기" />,
  delete: <Image src={IcDelete} alt="삭제하기" aria-label="항목 삭제하기" />,
  update: <Image src={IcUpdate} alt="수정완료" aria-label="항목 수정완료" />,
};

const Button = ({ variants, ...props }: ButtonProps) => {
  return (
    <button
      className={`${styles.button} ${styles[variants]} font-bold-16`}
      onClick={props.onClick}
      aria-label={variantsToLabel[variants]}
    >
      <span className={styles.content}>
        {variantsToIcon[variants]}
        <span>{variantsToLabel[variants]}</span>
      </span>
    </button>
  );
};

export default Button;
