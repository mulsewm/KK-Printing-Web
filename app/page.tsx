import Layout from "@/components/layout/Layout"
import { Analytics } from "@vercel/analytics/react"
import Blog7 from "@/components/sections/Blog7"
import Counter2 from "@/components/sections/Counter2"
import Faq2 from "@/components/sections/Faq2"
import Hero6 from "@/components/sections/Hero6"
import Hero7 from "@/components/sections/Hero7"
import Marquee2 from "@/components/sections/Marquee2"
import Project6 from "@/components/sections/Project6"
import Service6 from "@/components/sections/Service6"
import Skill3 from "@/components/sections/Skill3"
import Contact from "./contact/page"
import Service from "./service/page"
import Service7 from "@/components/sections/Service7"
import Marquee1 from "@/components/sections/Marquee1"
import Marquee4 from "@/components/sections/Marquee4"
import Marquee3 from "@/components/sections/Marquee3"
import About2 from "@/components/sections/About2"
import Partner2 from "@/components/sections/Partner2"
import Partner3 from "@/components/sections/Partner3"
import About1 from "@/components/sections/About1"
import About from "./about/page"
export default function Home7() {

    return (
        <>
            <Layout headerStyle={6} >
                
            <Analytics/>
                <Hero7 />
                <About />
                <Service />
                <Marquee1 />
                <Counter2 />
                <Partner3 />
                <Faq2 />
                <Blog7 />
                <Contact />

              
            </Layout>
        </>
    )
}