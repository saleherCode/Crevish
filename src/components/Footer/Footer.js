import classes from './Footer.module.css';

export default function Footer(){
    return(
        <>
        <section className={classes.section}>
            <div className={`${classes.page_container} ${classes.text_center}`}>
            <p>©Copyright Crevish. All Rights Reserved</p>
            </div>
        </section>
        </>
    )
}