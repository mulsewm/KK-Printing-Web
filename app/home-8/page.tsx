import Layout from "@/components/layout/Layout"
import About2 from "@/components/sections/About2"
import Blog8 from "@/components/sections/Blog8"
import Hero8 from "@/components/sections/Hero8"
import Marquee3 from "@/components/sections/Marquee3"
import Project7 from "@/components/sections/Project7"
import Service7 from "@/components/sections/Service7"
import Testimonial3 from "@/components/sections/Testimonial3"
export default function Home8() {

    return (
        <>
            <Layout headerStyle={7} footerStyle={4}>
                <Hero8 />
                <About2 />
                <Service7 />
                <Project7 />
                <Testimonial3 />
                <Marquee3 />
                <Blog8 />
            </Layout>
        </>
    )
}