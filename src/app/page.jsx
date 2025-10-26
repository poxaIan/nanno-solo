import Hero from "@/components/sections/Hero";
import StatList from "@/components/sections/StatList";
import Subscribe from "@/components/sections/Subscribe";
import WorkList from "@/components/sections/WorkList";

export default function Home() {
  return (
    <>
      <Hero />
      <WorkList />
      <StatList />
      <Subscribe />
    </>
  )
}
