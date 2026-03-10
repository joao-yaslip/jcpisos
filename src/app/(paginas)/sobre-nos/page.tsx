import "@/styles/index.scss";
import { FaRegEye,FaRegLightbulb } from "react-icons/fa";
import { FaHouseChimney } from "react-icons/fa6";
import TitlePage from "@/components/TitlePage";
import { Metadata } from "next";
import { settings } from "@/settings/settings";
import Image from "next/image";

const { siteName } = settings;

const title = "Sobre Nós";
const description = "JC Pisos Intertravados: mais de 10 anos em instalação de pisos intertravados com qualidade, prazo garantido e normas ABNT e INMETRO em todo o Brasil.";
const keywords = "pisos intertravados, instalação de pisos intertravados, empresa de piso intertravado, piso intertravado residencial, piso intertravado comercial";
const canonical = "sobre-nos";

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

export default function SobreNos() {
  return (
    <>
      <TitlePage title={title} />

      <div className="sobre">
        <div className="container-foto">
            <span className="img-bg"></span>
            <Image
              alt="JC Pisos Intertravados"
              src={`/sobre.jpeg`}
              width={400}
              height={400}
              className="imagem-arco"
            />
            {/* <img src="/sobre.jpeg" alt="JC Pisos Intertravados" className="imagem-arco"/> */}
        </div>

        <div className="right">
            <div className="span">Sobre Nós</div>
            <h2>Conheça a JC Pisos Intertravados</h2><br/>
            <p>Há mais de 10 anos no mercado de instalação de pisos intertravados a <strong>JC PISOS INTERTRAVADOS</strong> conta com profissionais altamente qualificados para realizar sua obra do início (terraplenagem) ao final (instalação do piso intertravado).</p><br/>
            <p>Com equipes técnicas e equipamentos de última geração executamos obras de todos os tamanhos, sejam residenciais ou comerciais, em todo território nacional. Dessa forma entregamos sua obra no prazo e com qualidade.</p><br/>
            <p>Em todas as nossas obras utilizamos as melhores técnicas existentes no mercado para a prestação dos serviços, a fim de lograr o melhor acabamento, celeridade, economia e segurança, seguindo estritamente os métodos e sistemas preconizados por entidades certificadoras de qualidade, como Associação Brasileira de Normas Técnicas <strong>(ABNT)</strong> e Instituto Nacional de Metrologia, Normalização e Qualidade Industrial <strong>(INMETRO)</strong>.</p> <br/>
        </div>
      </div>

      <div className="sobre-cards">
        <div className="cards">
            <div className="card">
                <FaHouseChimney/>
                <h3 className="title">Filosofia</h3>
                <p>Qualidade, profissionalismo, responsabilidade técnica, transparência e respeito ao cliente em todas as etapas da obra.</p><br/>
            </div>

            <div className="card" id="card-missao">
                <FaRegLightbulb/>
                <h3 className="title">Nossa missão</h3>
                <p>Executar obras com pisos intertravados do início ao acabamento, com qualidade, segurança e cumprimento de prazos, seguindo rigorosamente as normas técnicas.</p>
            </div>

            <div className="card" >
                <FaRegEye/>
                <h3 className="title">Nossa visão</h3>
                <p>Ser referência nacional em pavimentação intertravada pela excelência e confiabilidade dos serviços.</p>
            </div>
        </div>
		</div>

    </>
  );
}
