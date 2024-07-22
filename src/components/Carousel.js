"use client"
import Link from 'next/link';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image'
import project1 from '../../public/food_app.png'
import project2 from '../../public/ecom.png'
import project3 from '../../public/news_app.png'
import project4 from '../../public/gym_ui.png'
import project5 from '../../public/food_app_ui.png'
import project6 from '../../public/Expense_Tracker.png'
import project7 from '../../public/Landing_page.png'

const MyCarousel = () => {
    return (
       

<Carousel >
            <div >
                <div className="max-[640px]:flex flex-col grid grid-cols-2">
                    <div className="grid grid-rows-2"> 
                        <h1 className='pt-20 font-bold font-serif text-9xl  '>01</h1>
                        
                        <div className=''>
                                <h3 className='font-serif p-2 text-5xl text-red-700'>Food App</h3>
                                <h3 className='text-3xl'><span className='font-bold'></span>  <span className=''>React,MongoDb,Node js,Express</span></h3>
                                <h3 className='text-2xl pt-2 font-mono  hover:underline'><Link href="https://github.com/SUPHAL-MAITY/Food-App"><span className='font-bold text-slate-800'>GitHub </span> </Link></h3>
                                <h3 className='text-2xl pt-1 font-mono  hover:underline'><Link href=""><span className='font-bold text-slate-800'>Linkedin </span> </Link></h3>
                        </div>
                        
                    </div>
                    <Link href="https://youtube.com/shorts/VaHXI9v23Fo?feature=share"> <div > <Image className="hover:opacity-10 h-9/12  w-9/12"  src={project1} style={{  padding: '20px',borderRadius:'10%'}} alt="Image 1" /> </div> </Link>
                    
                </div>   
            </div>



           <div className="max-[640px]:flex flex-col grid grid-cols-2">
                    <div className=" grid grid-rows-2"> 
                        <h1 className='pt-20 font-bold font-serif text-9xl  '>02</h1>
                        
                        <div className=''>
                                <h3 className='font-serif p-2 text-5xl text-red-700'>E-Com App</h3>
                                <h3 className='text-3xl'><span className='font-bold'></span>  <span className=''>React,MongoDb,Node js,Express</span></h3>
                                <h3 className='text-2xl pt-2 font-mono  hover:underline'><Link href="https://github.com/SUPHAL-MAITY/ecommerce-mern-stack-project"><span className='font-bold text-slate-800'>GitHub </span> </Link></h3>
                                <h3 className='text-2xl pt-1 font-mono  hover:underline'><Link href=""><span className='font-bold text-slate-800'>Linkedin </span> </Link></h3>
                        </div>
                        
                    </div>
                    <Link href="https://youtu.be/DcpZBN9kn_c"> <div > <Image className="hover:opacity-10 h-9/12  w-9/12 "  src={project2} style={{  padding: '20px',borderRadius:'10%'}} alt="Image 1" /> </div> </Link>
                    
                </div>



                <div className="max-[640px]:flex flex-col grid grid-cols-2">
                    <div className="  grid grid-rows-2"> 
                        <h1 className='pt-20 font-bold font-serif text-9xl  '>03</h1>
                        
                        <div className=''>
                                <h3 className='font-serif p-2 text-5xl text-red-700'>News App</h3>
                                <h3 className='text-3xl'><span className='font-bold'></span>  <span className=''>React,News Api</span></h3>
                                <h3 className='text-2xl pt-2 font-mono  hover:underline'><Link href="https://github.com/SUPHAL-MAITY/NewsApp_2024"><span className='font-bold text-slate-800'>GitHub </span> </Link></h3>
                                <h3 className='text-2xl pt-1 font-mono  hover:underline'><Link href=""><span className='font-bold text-slate-800'>Linkedin </span> </Link></h3>
                        </div>
                        
                    </div>
                    <Link href=""> <div > <Image className="hover:opacity-10 h-9/12  w-9/12"  src={project3} style={{  padding: '20px',borderRadius:'10%'}} alt="Image 1" /> </div> </Link>
                    
                </div>



                <div className="max-[640px]:flex flex-col grid grid-cols-2">
                    <div className=" grid grid-rows-2"> 
                        <h1 className='pt-20 font-bold font-serif text-9xl  '>04</h1>
                        
                        <div className=''>
                                <h3 className='font-serif p-2 text-5xl text-red-700'>Landing Page of Gym Website</h3>
                                <h3 className='text-3xl'><span className='font-bold'></span>  <span className=''>Html,CSS</span></h3>
                                <h3 className='text-2xl pt-2 font-mono  hover:underline'><Link href="https://github.com/SUPHAL-MAITY/Landing_gym_website"><span className='font-bold text-slate-800'>GitHub </span> </Link></h3>
                                <h3 className='text-2xl pt-1 font-mono  hover:underline'><Link href=""><span className='font-bold text-slate-800'>Linkedin </span> </Link></h3>
                        </div>
                        
                    </div>
                    <Link href=""> <div > <Image className="hover:opacity-10 h-9/12  w-9/12"  src={project4} style={{  padding: '20px',borderRadius:'10%'}} alt="Image 1" /> </div> </Link>
                    
                </div>




                <div className="max-[640px]:flex flex-col grid grid-cols-2">
                    <div className="  grid grid-rows-2"> 
                        <h1 className='pt-20 font-bold font-serif text-9xl  '>05</h1>
                        
                        <div className=''>
                                <h3 className='font-serif p-2 text-5xl text-red-700'> Food Delivery Website</h3>
                                <h3 className='text-3xl'><span className='font-bold'></span>  <span className=''>Html,CSS</span></h3>
                                <h3 className='text-2xl pt-2 font-mono  hover:underline'><Link href="https://github.com/SUPHAL-MAITY/Landing-Page-of-food-delivery-website"><span className='font-bold text-slate-800'>GitHub </span> </Link></h3>
                                <h3 className='text-2xl pt-1 font-mono  hover:underline'><Link href=""><span className='font-bold text-slate-800'>Linkedin </span> </Link></h3>
                        </div>
                        
                    </div>
                    <Link href=""> <div > <Image className="hover:opacity-10 h-9/12  w-9/12"  src={project5} style={{  padding: '20px',borderRadius:'10%'}} alt="Image 1" /> </div> </Link>
                    
                </div>


                <div className="max-[640px]:flex flex-col grid grid-cols-2">
                    <div className=" grid grid-rows-2"> 
                        <h1 className='pt-20 font-bold font-serif text-9xl  '>06</h1>
                        
                        <div className=''>
                                <h3 className='font-serif p-2 text-5xl text-red-700'>Expense Tracker</h3>
                                <h3 className='text-3xl'><span className='font-bold'></span> HTML,CSS,JS <span className=''></span></h3>
                                <h3 className='text-2xl pt-2 font-mono  hover:underline'><Link href="https://github.com/SUPHAL-MAITY/Expense-Tracker"><span className='font-bold text-slate-800'>GitHub </span> </Link></h3>
                                <h3 className='text-2xl pt-1 font-mono  hover:underline'><Link href=""><span className='font-bold text-slate-800'>Linkedin </span> </Link></h3>
                        </div>
                        
                    </div>
                    <Link href=""> <div > <Image className="hover:opacity-10 h-9/12  w-9/12"  src={project6} style={{  padding: '20px',borderRadius:'10%'}} alt="Image 1" /> </div> </Link>
                    
                </div>



                <div className=" max-[640px]:flex flex-col h-full grid grid-cols-2">
                    <div className=" grid grid-rows-2"> 
                        <h1 className='pt-20 font-bold font-serif text-9xl  '>07</h1>
                        
                        <div className=''>
                                <h3 className='font-serif p-2 text-5xl text-red-700'> Travel Website</h3>
                                <h3 className='text-3xl'><span className='font-bold'></span>  <span className=''>HTML,CSS</span></h3>
                                <h3 className='text-2xl pt-2 font-mono  hover:underline'><Link href="https://github.com/SUPHAL-MAITY/Landing-page"><span className='font-bold text-slate-800'>GitHub </span> </Link></h3>
                                <h3 className='text-2xl pt-1 font-mono  hover:underline'><Link href=""><span className='font-bold text-slate-800'>Linkedin </span> </Link></h3>
                        </div>
                        
                    </div>
                    <Link href=""> <div > <Image className="hover:opacity-10 h-9/12  w-9/12"  src={project7} style={{  padding: '20px',borderRadius:'10%'}} alt="Image 1" /> </div> </Link>
                    
                </div>




                
           
            
            
        </Carousel>
            
            
     
        
    );
};

export default MyCarousel;