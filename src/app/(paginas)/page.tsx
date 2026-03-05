import Banner from "@/components/Home/Banner";
import Divisor from "@/components/Divisor/Divisor";
import Second from "@/components/Home/Second";
import Form from "@/components/Home/Form";
import "@/styles/index.scss";
import { items } from "@/components/Home/Second";
import First from "@/components/Home/First";

export default function Home() {
  return (
    <>
      <Banner />
      <First/>
      <Divisor />
      <Second items={items} limit={12} />
      <Form />
    </>
  );
}
