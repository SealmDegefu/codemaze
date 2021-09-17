import React from 'react';
import './Learning.css';
import LearningItem from './LearningItem';

function Learning() {

  return (
    <div className='cards'>
      <h1>Check out our Weekly Learning Materials!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <LearningItem
              src='https://www.agorapulse.com/social-media-lab/wp-content/uploads/sites/6/2020/06/instagram-algorithm-image.png'
              text='This blog will walk you through 10 most known algorithm questions'
              label='Algorithm'
              href= "https://www.health.harvard.edu/blog/10-superfoods-to-boost-a-healthy-diet-2018082914463"
            />
            <LearningItem
              src='https://www.jigsawacademy.com/wp-content/uploads/2015/03/ID-100310092.jpg'
              text='Learn the benefits of studying these data science concepts early'
              label='Data Science'
              href='https://www.genesisfitness.com.au/blog/9-benefits-30-mins-exercise-day'
            />
          </ul>
          <ul className='cards__items'>
            <LearningItem
              src='https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2018/11/what-is-html-1-1280x720.jpg'
              text='This blog will show you how easy HTML is'
              label='HTML'
              href='https://littlecoffeefox.com/benefits-morning-meditation/'
            />
            <LearningItem
              src='https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/47/5c5eb0de59424db95f1a75e67310b5/CAD2-Intro-to-Cloud-Dev-w-HTML--CSS--and-JavaScript.jpg?auto=format%2Ccompress&dpr=1'
              text='Learn to style the page of your dream using CSS'
              label='CSS'
              href='https://www.goodtherapy.org/learn-about-therapy/issues/self-esteem/improve'
            />
            <LearningItem
              src='https://s3.amazonaws.com/designco-web-assets/uploads/2019/02/Animation-Handbook-05.png'
              text='Can you do design properly? Learn more here!'
              label='Design'
              href='https://www.medicalnewstoday.com/articles/best-protein-shakes'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Learning;