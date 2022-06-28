import React from 'react';
import art from '../../assets/art.jpg'
import user from '../../assets/user.jpg'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='max-w-6xl mx-auto mt-10'>
            <h1 className='text-5xl text-start font-bold'>Summer Art Camp! 5 Days of Artists and Painting Monet, Van Gogh, Matisse, & More</h1>
            <div className='text-slate-400 text-start'>
                <Link to=''>Multi-Day Course</Link>
            </div>

            <div class="hero mt-10">
                <div class="hero-content flex flex-col lg:flex-row-reverse justify-center items-center">
                    <div className='flex-1'>
                        <img className='w-full' src={art} class="max-w-sm rounded-lg shadow-2xl" alt='' />
                    </div>
                    <div className='flex-1 w-full text-start'>
                        <p class="py-6">In this 5 day class we will explore artists Monet, Matisse, Van Gogh, among others and then recreate paintings using crayon and watercolor. Students will have fun learning about the artists & creating their own art inspired by their work.</p>
                        <div className='flex items-center'><img className='w-10 rounded-full' src={user} alt="" /> <Link className='text-blue-700 ml-3' to=''>Kimberly R Moseler</Link></div>
                        <p><span>468 total reviews for this teacher</span></p>
                        <p><span>5 reviews for this class</span></p>
                        <p>Completed by 21 learners</p>
                        <button class="btn btn-primary rounded-3xl text-white ">See Class Schedule</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;