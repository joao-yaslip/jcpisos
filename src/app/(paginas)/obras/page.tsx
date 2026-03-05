import "@/styles/index.scss";
import TitlePage from "@/components/TitlePage";
import { Metadata } from "next";
import { settings } from "@/settings/settings";
import Second from "@/components/Home/Second";
import { items } from "@/components/Home/Second"
import Image from "next/image";

const { siteName } = settings;

const title = "Obras";
const description = "Confira a galeria de obras da JC Pisos Intertravados e veja projetos residenciais e comerciais executados com qualidade, segurança e acabamento impecável.";
const keywords = "pisos intertravados, instalação de pisos intertravados, empresa de piso intertravado, piso intertravado residencial, piso intertravado comercial";
const canonical = "obras";

export const metadata: Metadata = {
  title: `${title} | ${siteName}`, // Undo o título do arquivo de configuração
  description, // Usando a descrição
  keywords, // Usando as palavras-chave
  alternates: {
    canonical, // URL canônica
  },
  openGraph: {
    url: canonical,
    title: `${title} | ${siteName}`,
    description: description,
    images: [
      {
        url: "/logo.png", // Imagem para Open Graph
        width: 300,
        height: 200,
        alt: "Imagem representativa do Site",
      },
    ],
    siteName,
    type: "website",
  },
};

export default function Obras() {
  return (
    <>
      <TitlePage title={title} />

      <div className="obrasHeader">
        <h2>Confira Nossas Obras</h2>
        <p>Veja algumas das obras realizadas pela nossa equipe, com projetos que demonstram qualidade, segurança e eficiência em cada etapa da construção.</p>
      </div>
      
      <div className="obras">
        <Second items={items} />
      </div>
    </>
  );
}
