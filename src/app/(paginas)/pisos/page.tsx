import "@/styles/index.scss";
import TitlePage from "@/components/TitlePage";
import { Metadata } from "next";
import { settings } from "@/settings/settings";
import PisoSpecsSection from "@/components/Pisos/Pisos";
import Form from "@/components/Home/Form";

const { siteName } = settings;

const title = "Pisos Intertravados";
const description = "Pisos intertravados de alta resistência para áreas residenciais, comerciais e estacionamentos. Qualidade garantida e instalação conforme normas ABNT.";
const keywords = "pisos intertravados, piso sextavado, piso intertravado, piso 16 faces, piso intertravado placa";
const canonical = "pisos";

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

export default function Pisos() {
  return (
    <>
      <TitlePage title={title} />
      <PisoSpecsSection />
      <Form />
    </>
  );
}
