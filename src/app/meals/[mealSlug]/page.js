import { getMeal } from '@/src/lib/meals';
import classes from './page.module.css';
import NotFound from '../not-found';
import { notFound } from 'next/navigation';
import InnerBanner from '@/src/components/InnerBanner/InnerBanner';
import innerBannerImg from '@/src/assets/inner-banner.jpg';
import Footer from '@/src/components/Footer/Footer';

export async function generateMetadata({params}) {
    const meal = getMeal(params.mealSlug);
    if(!meal){
        notFound();
    }
    return{
        title: meal.title,
        description: meal.summary
    }
}

export default function MealsDetailsPage({params}){
    const meal = getMeal(params.mealSlug);

    if(!meal){
        notFound();
    }

    meal.instructions = meal.instructions.replace(/\n/g, '<br />');


    return(
        <>
            <InnerBanner 
                innerBannerImg={innerBannerImg}
                title="Read The Recipe!"
                innerSubtitle=""
                btnText="Checkout Other Meals"
                btnUrl="/meals"
            />
            <section>
                <div className={classes.page_Container}>
                    <div className={classes.header}>                        
                        <div className={classes.headerText}>
                            <h1>{meal.title}</h1>
                            <p className={classes.creator}>
                                by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
                            </p>
                            <p className={classes.summary}>{meal.summary}</p>
                        </div>
                        <div className={classes.image}>
                            <img src={meal.image} alt={meal.title} fill="true" />
                        </div>
                    </div>
                </div>
            </section>
            <main>
                <p className={classes.instructions} dangerouslySetInnerHTML={{
                    __html : meal.instructions,
                }}></p>

            </main>

            <Footer />
        </>
    )
}

