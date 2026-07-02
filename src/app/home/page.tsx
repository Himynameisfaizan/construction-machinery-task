import React from 'react'
import HeroSlider from "@/components/HeroSlider";
import WhyChooseUs from "@/components/WhyChooseUs";
import WhatWeDo from "@/components/WhatWeDo";
import InfrastructureBanner from '@/components/InfrastructureBanner';
import LatestBlogs from '@/components/LatestBlogs'; 
import OurProductLine from '@/components/OurProductLine';
import StatsCounter from '@/components/StatsCounter';
import BottomCTA from '@/components/BottomCTA';

const page = () => {
  return (
   <>
    <HeroSlider />
    <WhyChooseUs />
    <WhatWeDo />
    <InfrastructureBanner />
    <OurProductLine />
    <StatsCounter />
    <LatestBlogs />
    <BottomCTA />
   </>
  )
}

export default page