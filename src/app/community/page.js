import Image from 'next/image';

import mealIcon from '@/src/assets/icons/meal.png';
import communityIcon from '@/src/assets/icons/community.png';
import eventsIcon from '@/src/assets/icons/events.png';
import classes from './page.module.css';
import InnerBanner from '@/src/components/InnerBanner/InnerBanner';
import innerBannerImg from '@/src/assets/inner-banner.jpg';
import Footer from '@/src/components/Footer/Footer';


function Community(){
    return (
        <>
          <InnerBanner 
            innerBannerImg={innerBannerImg}
            title="One shared passion: Food"
            innerSubtitle="Join our community and share your favorite recipes!"
            btnText="Browse Meals"
            btnUrl="/meals"
          />
         
          <main className={classes.community_section}>
            <div className={classes.container}>
              <h2>Community Perks</h2>      
              <ul className={classes.perks}>
                <li>
                  <Image src={mealIcon} alt="A delicious meal" />
                  <p>Share & discover recipes</p>
                </li>
                <li>
                  <Image src={communityIcon} alt="A crowd of people, cooking" />
                  <p>Find new friends & like-minded people</p>
                </li>
                <li>
                  <Image
                    src={eventsIcon}
                    alt="A crowd of people at a cooking event"
                  />
                  <p>Participate in exclusive events</p>
                </li>
              </ul>
            </div>
          </main>

         <Footer />
        </>
      );
}

export default Community;