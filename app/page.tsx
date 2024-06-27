import Layout from "@/components/layout/Layout"

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
export default function Home7() {

    return (
        <>
            <Layout headerStyle={6} >
                <Hero7 />
                <Service />
                <Marquee1 />
                <Counter2 />
                <Project6 />
                <Faq2 />
                <Blog7 />
              
            </Layout>
        </>
    )
}