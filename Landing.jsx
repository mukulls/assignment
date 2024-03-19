import React from 'react';
import './landing.css'

export const Landing = () => {
  return (
    <div className='landing'>
        <div className='landing1'>
        <div className='bg_img'>
            <img src="./landing1_bg.jpg" alt="" />
            </div>
            <div className='welcome_heading'> Welcome to Mr. Arun's Journalism Course </div>
            <div className='welcome_content'> Are you ready to embark on a transformative journey into the world of journalism? Look no further than Mr. Arun's Journalism Course, where expertise meets excellence.</div>
            </div>
        <div className="landing2">
        <div className='knowaboutus'>
        <div className='knowaboutusline'></div>
        <div className='knowaboutustext'>
          KNOW ABOUT US</div> 
         </div>
         <div className='landing2textarea'>
          <div className="landing2texthead">Journalist Mr. Arun</div>
    <div className='landing2text1'>
    Meet Mr. Arun, a distinguished journalist who has dedicated his life to uncovering the truth and shaping public discourse. With a career spanning over 15 years, Mr. Arun has reported on some of the most significant events of our time, from political scandals to humanitarian crises. His unwavering commitment to journalistic integrity and pursuit of excellence has earned him respect and admiration from peers and readers alike.
        </div>
        <div className='landing2text2'>
    With a distinguished career spanning decades, Mr. Arun is a revered figure in the field of journalism. His unwavering commitment to truth, integrity, and excellence has shaped the industry and inspired generations of aspiring journalists. From groundbreaking investigative reports to insightful commentary on global affairs, Mr. Arun's contributions have left an indelible mark on the world of media.
        </div>
        </div>
        <div className='landing2img'><img src="./landing2img.jpg" alt="" /></div>
    </div>
    <div className='landing3'>
        <div className='whyhead'>Why Choose Mr. Arun's Course?</div>
            <div className='points'>
                <div className='pointarea'>
                <div className='pointhead'>Expert Guidance</div>
                <div className='pointtext'> Learn directly from Mr. Arun as he shares his wealth of knowledge and expertise gained through years of real-world experience in journalism.</div>
                </div>
                <div className='pointarea'>
                <div className='pointhead'>Practical Insights</div>
                <div className='pointtext'> Gain practical insights and hands-on experience through interactive sessions, case studies, and assignments tailored to simulate real-world scenarios.</div>
                </div>
                <div className='pointarea'>
                <div className='pointhead'>Networking Opportunities</div>
                <div className='pointtext'> Connect with fellow aspiring journalists and industry professionals, building valuable relationships that can propel your career forward.</div>
                </div>
                <div className='pointarea'>
                <div className='pointhead'>Personalized Feedback </div>
                <div className='pointtext'>Receive personalized feedback and guidance from Mr. Arun himself, helping you refine your skills and reach your full potential.</div>
                </div>
                </div>
            </div>
            <div className='landing4'>
            <div className='enroll'>
            <div className='enrollhead'>
                        Enroll Now</div>
            <div className='enrollline'></div>
            </div>
            <div className='textandbutton'>
            <div className='enrolltext'>
                    Don't miss this unique opportunity to learn from a true expert in the field of journalism. Take the first step towards your dream career by enrolling in Mr. Arun's Journalism Course today!
            </div>
            
            <button className='enrollbutton'>Enroll Now</button>
            </div>
                <div className='enrollimg'>
                    <img src="./landing3img.jpg" alt="" />
                </div>
                </div>
               
               
           
    
        
    </div>
  )
}
