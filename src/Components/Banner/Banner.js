import React from 'react';
import { BsHeart, BsQuestionCircle } from 'react-icons/bs';
import { FaGreaterThan, FaStar } from 'react-icons/fa';
import { RiShareForwardLine } from 'react-icons/ri';
import { Link } from 'react-router-dom'

const Banner = ({ info }) => {
    const { bannerDetails, bannerImg, userName, userImg } = info
    return (
        <div className='max-w-6xl mx-auto mt-5'>
            <h1 className='text-5xl px-3 text-start font-bold'>Summer Art Camp! 5 Days of Artists and Painting Monet, Van Gogh, Matisse, & More</h1>
            <div className=' text-start'>
                <button class="btn btn-link text-slate-400 hover:text-primary" to=''><span className='mr-2'>Multi-Day Course</span><span className='font-bold'><BsQuestionCircle /> </span></button>
            </div>

            <div class="hero">
                <div class="hero-content flex flex-col lg:flex-row-reverse justify-center items-center">
                    <div className='flex-1'>
                        <img className='w-full rounded mx-auto' src={bannerImg} alt='' />
                    </div>
                    <div className='flex-1 text-start'>
                        <p class="py-3 text-xl">{bannerDetails}</p>
                        <div className='flex items-center py-3'><img className='w-8 rounded-full' src={userImg} alt="" /> <Link className='text-primary font-semibold ml-3' to=''>{userName}</Link></div>
                        <div className='flex items-center pb-2'><span className='flex mr-2 text-secondary'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /> </span><span className='text-slate-500'>468 total reviews for this teacher</span></div>
                        <div className='flex items-center pb-2'><span className='flex mr-2 text-secondary'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /> </span><span className='text-slate-500'>5 reviews for this class</span></div>
                        <p className='pb-2 text-xl'>Completed by 21 learners</p>
                        <div className='py-5 flex items-center'>
                            <button class="btn btn-primary rounded-3xl text-white "><span className='mr-2'>See Class Schedule</span> <FaGreaterThan /></button>
                            <p class="text-slate-400 flex items-center ml-5"><BsHeart /> <span className='ml-2'>SAVE</span></p>
                            <button class="btn btn-link ml-5"><span className='text-xl'><RiShareForwardLine /></span><span className='ml-2'>Share</span></button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;