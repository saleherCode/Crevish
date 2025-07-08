

import Link from 'next/link';
import Image from 'next/image';

import classes from './mealItem.module.css';





import DeleteFormComponent from './deleteFormComponent';






export default async function MealItem({ title, slug, image, summary, creator }) {

    



  return (
    <article className={classes.meal}>
      <header>
        <div className={classes.image}>
          <Image src={image.startsWith('/') ? image : `/${image}`} alt={title} fill />
          {/* <Image src={image} alt={title} fill /> */}
        </div>
        <div className={classes.headerText}>
          <h2>{title}</h2>
          <p>by {creator}</p>
        </div>
      </header>
      <div className={classes.content}>
        <p className={classes.summary}>{summary}</p>
        <div className={classes.actionBtns}>
          <Link className={classes.customBtn} href={`/meals/${slug}`}>Read The Recipe</Link>
          <DeleteFormComponent slug={slug}  />
        </div>
        
        
        
      </div>
    </article>
  );
}