import Hero from '@/components/sections/home/Hero'
import WhatWeBuild from '@/components/sections/home/WhatWeBuild'
import WatchtowerSpotlight from '@/components/sections/home/WatchtowerSpotlight'
import WhyNykon from '@/components/sections/home/WhyNykon'
import Metrics from '@/components/sections/home/Metrics'
import Philosophy from '@/components/sections/home/Philosophy'

export default function Home() {
  return (
    <>
      <Hero />
      <WhatWeBuild />
      <WatchtowerSpotlight />
      <WhyNykon />
      <Metrics />
      <Philosophy />
    </>
  )
}
