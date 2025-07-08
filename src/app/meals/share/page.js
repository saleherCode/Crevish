"use client";


import ImagePicker from '@/src/components/meals/image-picker';
import classes from './page.module.css';
import { useActionState } from 'react';
import { shareMeal } from '@/src/lib/action';
import MealFormSubmit from '@/src/components/meals/meal-form-submittion';
import { useFormState } from 'react-dom';
import InnerBanner from '@/src/components/InnerBanner/InnerBanner';
import innerBannerImg from '@/src/assets/inner-banner.jpg';
import Footer from '@/src/components/Footer/Footer';
// import CommonButton from '@/src/components/Buttons/CommonBtn';



export default function ShareMealPage() {

  const [state, fromAction] = useFormState(shareMeal, {message: null});


 


  return (
    <>
     <InnerBanner 
        innerBannerImg={innerBannerImg}
        title="Share your favorite meal"
        innerSubtitle="Or any other meal you feel needs sharing!"
        btnText="Checkout Other Meals"
        btnUrl="/meals"
      />
    
      <main className={classes.main}>
        <form className={classes.form} action={fromAction}>
          <div className={classes.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
              required
            ></textarea>
          </p>
          <ImagePicker label="Your Image" name="image" />
          {state.message && <p>{state.message}</p>}
          <p className={classes.actions}>
            <MealFormSubmit />
            {/* <button type="submit">Share Meal</button> */}
          </p>
        </form>
      </main>


      <Footer />
    </>
  );
}