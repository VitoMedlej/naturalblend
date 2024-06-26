"use client"
import { Box, Container, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import {Swiper, SwiperSlide} from "swiper/react";
// import {Navigation} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { useRouter } from 'next/navigation';
import { Autoplay } from 'swiper';
import Btn from './Btn/Btn';
import useLanguage from '@/Hooks/useLanguage';



const Preloader3 = ({res}:{res:any}) => {
    const router = useRouter()
    const [imgs,setImgs] = useState([
        {img : `https://ucarecdn.com/d08afcc4-a1f9-4c65-905d-d220bd4a42b4/edit2.jpg`},
        {img : `https://ucarecdn.com/8d7245e1-491d-49ee-8212-1cf911d932c9/edit4.jpg`},
        {img : `https://ucarecdn.com/80b6912c-46a8-4385-8823-f5c1ad1533e5/edit3.jpg`},
        {img : `https://ucarecdn.com/b932387a-ccf1-4878-9935-11bac7e01ad0/edit1.jpeg`},
       
     ])
     const redir = () => {
        router.push('/collection/products')
        // console.log('abc')
     }
    useEffect(() => {
        console.log('res: ', res);
    if (res && res?.MainCarousel && res?.MainCarousel?.length > 0) {
        console.log('res?.MainCarousel: ', res?.MainCarousel);
        // console.log('res: ', );
        setImgs(res?.MainCarousel)
    }
    }, [])
  const {text} = useLanguage()
    
    return (
        <Box
            sx={{
            // py: {xs:'.75em',sm:'2em',md:'3em'},
            // width: {xs:'98%',md:'74%',lg:'80%'},
            width:'100%',
            maxWidth:'none',
            // maxWidth: 'lg',
            minHeight:'500px',
            maxHeight:{sm:'90vh',md:'700px',lg:'750px'},
            margin: '0 auto',
         
            height : {xs:'100vh',sm:'550px',md:'100%'},
             
            display: {
                xs: 'flex'
            },
            // mt:20,
        }}>
            <Swiper
            
                navigation={false}
                slidesPerView={1}
                spaceBetween={0}
                loop={true}
                autoplay={{
                delay: 3000,
                disableOnInteraction: true
            }}
                modules={[Autoplay]}
                className="mySwiper swiper">
    
                {imgs.map((item) => {
    
                    return <SwiperSlide 
                     
                    className='ztop  ' key={item.img}>
                        <Box
                            sx={{
                                position:'relative',
                                height: '100%',
                            width:'100%'
                        }}>
                        <Container className='auto' sx={{width:'100%'}} maxWidth='lg' disableGutters>
                            
                      
                            <Box sx={{pointerEvents:'none',top:0,right:0,width:'100%',zIndex:1123,height:'100%',background:'black',opacity:.43}} className="absolute">

                            </Box>
                            <Box 
                            className='auto'
                            sx={{
                                top:'50%',
                                px:{xs:4,sm:5,md:6},
                                maxWidth:'550px',
                                transform:'translateY(-50%)',
                                zIndex:123456,
                                position:'absolute'}}>
                                <Typography 
                                
                                sx={{color:'white',fontSize:{xs:'2.65em',sm:'3.1em',md:'3.65em',lg:'4em'},fontWeight:900}}>
                                {text('Experience the Power of Nature', 'استشعر قوة الطبيعة')}
                                </Typography>
                                <Typography 
                                sx={{color:'white',fontSize:{xs:'.85em',sm:'.87em'},mt:1,maxWidth:'600px'}}>
                                {text('Welcome to True Nature blend, your one-stop-shop for all your health and wellness needs. Discover our premium selection of natural supplements including ashwagandha, tongkat ali, cordyceps mushroom, lion\'s mane mushroom, and more.', 'مرحبًا بك في ترو ناشور بليند، متجرك الشامل لجميع احتياجات صحتك وعافيتك. اكتشف تشكيلتنا الرائعة من المكملات الطبيعية الفاخرة، بما في ذلك الأشواغاندا، وتونجكات علي، وفطر كورديسيبس، وفطر رأس الأسد، والمزيد.')}

                                </Typography>
                                <Box className="flex">

                                <Btn
                                onClick={()=>redir()}
                                
                                className='bg white borderColor' sx={{mt:3}}>
                                {text('Shop Now', 'تسوق الآن')}

                                </Btn>
                                <Btn 
                                onClick={()=>{router.push('/about')}}
                                
                                v2 className='color2 borderColor2' sx={{ml:2,mt:3}}>
                                {text('Discover', 'اكتشف')}
 
                                </Btn>
                                </Box>
                            </Box>
                            </Container>
                            <img
            
                                className={`img   
                                `}
                                // ${item?.className}
                                src={`${item.img}`}
                                alt="Main Carousel Image"/>
           
                        </Box>
                    </SwiperSlide>
                })
    }
    
            </Swiper>
    
        </Box>
    )
}

export default Preloader3