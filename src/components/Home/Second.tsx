import Masonry from "../Masonry/Masonry";
import Link from "next/link";

interface Item {
  id: string;
  img: string;
  height: number;
}

interface PageProps {
  items: Item[];
  limit?: number;
  showButton?: boolean;
}

export const items = [
    {
      id: "1",
      img: "/galeria/obra-1.jpg",
      height: 400,
    },
    {
      id: "2",
      img: "/galeria/obra-2.jpg",
      height: 400,
    },
    {
      id: "3",
      img: "/galeria/obra-3.jpg",
      height: 650,
    },
    {
      id: "4",
      img: "/galeria/obra-4.jpg",
      height: 600,
    },
    {
      id: "5",
      img: "/galeria/obra-5.jpg",
      height: 400,
    },
    {
      id: "6",
      img: "/galeria/obra-6.jpg",
      height: 450,
    },
    {
      id: "7",
      img: "/galeria/obra-7.jpg",
      height: 500,
    },
    {
      id: "8",
      img: "/galeria/obra-8.jpg",
      height: 1000,
    },
    {
      id: "9",
      img: "/galeria/obra-9.jpg",
      height: 700,
    },
    {
      id: "10",
      img: "/galeria/obra-10.jpg",
      height: 600,
    },
    {
      id: "11",
      img: "/galeria/obra-11.jpg",
      height: 600,
    },
    {
      id: "12",
      img: "/galeria/obra-12.jpg",
      height: 500,
    },
    {
      id: "13",
      img: "/galeria/obra-13.jpg",
      height: 500,
    },
    {
      id: "14",
      img: "/galeria/obra-14.jpg",
      height: 500,
    },
    {
      id: "15",
      img: "/galeria/obra-15.jpg",
      height: 500,
    },
    {
      id: "16",
      img: "/galeria/obra-16.jpg",
      height: 300,
    },
    {
      id: "17",
      img: "/galeria/obra-17.jpg",
      height: 500,
    },
    {
      id: "18",
      img: "/galeria/obra-18.jpg",
      height: 600,
    },
    {
      id: "19",
      img: "/galeria/obra-19.jpg",
      height: 500,
    },
    {
      id: "20",
      img: "/galeria/obra-20.jpg",
      height: 900,
    },
    {
      id: "21",
      img: "/galeria/obra-21.jpg",
      height: 600,
    },
    {
      id: "22",
      img: "/galeria/obra-22.jpg",
      height: 800,
    },
    {
      id: "23",
      img: "/galeria/obra-23.jpg",
      height: 600,
    },
    {
      id: "24",
      img: "/galeria/obra-24.jpg",
      height: 500,
    },
];

export default function Second({ items, limit, showButton = true }: PageProps) {
  const displayedItems = limit ? items.slice(0, limit) : items;

  return (
    <div className="second">
      <Masonry
        items={displayedItems}
        ease="power3.out" 
        duration={0.6}
        stagger={0.05}
        animateFrom="bottom"
        scaleOnHover
        hoverScale={0.95}
        blurToFocus
        colorShiftOnHover={false}
      />

      {limit && showButton && (
        <Link href="/obras" className="vejaMais">
          Nossas Obras
        </Link>
      )}
    </div>
  );
}

