import Link from 'next/link';
import Image from 'next/image';
import classes from './page.module.css';
import MealsGrid from '@/src/components/meals/mealGrid';
import { getMeals } from '@/src/lib/meals';
import { Suspense } from 'react';
import InnerBanner from '@/src/components/InnerBanner/InnerBanner';
import innerBannerImg from '@/src/assets/inner-banner.jpg';
import Footer from '@/src/components/Footer/Footer';


export const metadata = {
  title: 'Meals',
  description: 'Browse the delicious meals share by our great community.',
};


async function MealsComponent() {
    const meals = await getMeals();
    return <MealsGrid meals={meals} />
}

export default function Meals(){
    return(
        <>

        <InnerBanner 
            innerBannerImg={innerBannerImg}
            title="Delicious meal, created by You"
            innerSubtitle="Choose your favorite recipe and cook it yourself."
            btnText="Sahre your favorite recipe"
            btnUrl="/meals/share"
         />

    
       
        <main className={classes.main}>
            <Suspense fallback={<p className={classes.loading}>Fetching Meals...</p>}>
                <MealsComponent />
            </Suspense>

            
        </main>


        <Footer />
        </>
    )
}

