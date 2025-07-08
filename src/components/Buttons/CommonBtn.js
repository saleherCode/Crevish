import Link from "next/link";
import classes from './CommonBtn.module.css';

export default function CommonButton({linkUrl, linkText}){
    return <Link className={classes.commonBtn} href={linkUrl}>{linkText}</Link>
}