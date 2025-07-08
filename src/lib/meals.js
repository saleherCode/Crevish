import fs from 'node:fs';
import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';

const db = sql('meals.db');

import path from 'path';


export async function getMeals(){
    await new Promise((resolve) => setTimeout(resolve, 3000));
    // throw new Error("Loading data failed");
    return db.prepare('SELECT * FROM meals').all();
}


export function getMeal(slug) {
    return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}



export async function saveMeal(meal){
    meal.slug = slugify(meal.title, {lower: true});
    meal.instructions = xss(meal.instructions);

    const extension = meal.image.name.split('.').pop();
    const fileName = `${meal.slug}.${extension}`;

    // const imagePath = path.join(process.cwd(), 'public', 'images', fileName);
    // const stream = fs.createWriteStream(imagePath);


    const stream = fs.createWriteStream(`public/images/${fileName}`);

    const bufferedImage = await meal.image.arrayBuffer();

    stream.write(Buffer.from(bufferedImage), (error) => {
        if(error){
            throw new error('Saving image failed');
        }
    });

    meal.image = `/images/${fileName}`;

    db.prepare(`
        INSERT INTO meals 
        (title, summary, instructions, creator, creator_email, image, slug)
        VALUES (
            @title,
            @summary,
            @instructions,            
            @creator,
            @creator_email, 
            @image,           
            @slug                
            )
        `).run(meal);


}


// Delete Meal 
export function deleteMeal(slug){
    const meal = db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
  
  if (meal?.image) {
    
    const imagePath = path.join('public', meal.image);
    if (fs.existsSync(imagePath)) {
      fs.unlinkSync(imagePath);
    }
  }

  db.prepare('DELETE FROM meals WHERE slug = ?').run(slug);
}
