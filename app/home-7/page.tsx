import Layout from "@/components/layout/Layout"

import Blog7 from "@/components/sections/Blog7"
import Counter2 from "@/components/sections/Counter2"
import Faq2 from "@/components/sections/Faq2"
import Hero7 from "@/components/sections/Hero7"
import Marquee2 from "@/components/sections/Marquee2"
import Project6 from "@/components/sections/Project6"
import Service6 from "@/components/sections/Service6"
import Skill3 from "@/components/sections/Skill3"
import Contact from "../contact/page"
export default function Home7() {

    return (
        <>
            <Layout headerStyle={6} footerStyle={2}>
                <Hero7 />
                <Skill3 />
                <Marquee2 />
                <Service6 />
                <Counter2 />
                <Contact />
                <Faq2 />
                <Blog7 />
            </Layout>
        </>
    )
}