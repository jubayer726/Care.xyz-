import Banner from "@/components/Banner";
import Services from "@/app/services/page";
import TestimonialsPage from "./testimonials/page";

export default function Home() {
  return (
    <>
      <Banner/>
      <Services />
      <TestimonialsPage/>
    </>
  );
}