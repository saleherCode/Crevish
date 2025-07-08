import classes from './InnerBanner.module.css';
import Link from "next/link";
import Image from 'next/image';
import CommonButton from '../Buttons/CommonBtn';

export default function InnerBanner({title, innerSubtitle, innerBannerImg, btnText, btnUrl}){
    return(
        <>
            <section className={classes.innerBanner}>
                <Image src={innerBannerImg} className={classes.innerBannerImg} alt="Banner Img" fill  />
                <div className={classes.innerBannerContent}>
                    <div className={classes.page_container}>
                        <h1>{title}</h1>
                        <p>{innerSubtitle}</p>
                        <CommonButton linkText={btnText} linkUrl={btnUrl} />
                        {/* <p className={classes.customBtn}>
                            <Link href="/meals/share">{btnText}</Link>
                        </p> */}
                    </div>
                </div>            
            </section>
        </>
    )
}