import { SiteSettings } from "@/types";

const siteName = "JC Pisos Intertravados";
const title = `Início | ${siteName}`;
const description = " Venda e Instalação de Pisos Intertravados Modelo Sextavado. Garantia de 5 Anos. Temos todos os tipos de Pisos Intertravados de Concreto";
const keywords = "Pisos Intertravados, Piso Intertravado, Piso Sextavado, JC Pisos Intertravados";
export const url = "https://www.nomesite.com.br/";

// True = Ativo || False = Inativo - Para ativar ou desativar os "includes" das páginas contratadas
export const includes = {
  SaibaMais: true,
  OutrosAssuntos: true,
  MaisVisitados: true,
  TagsPagina: true,
  Copyright: true,
};

export const settings: SiteSettings = {
  title, // Título da página - Obs: Esse titulo é o padrão, cada página deve conter um Metadata
  description, // Descrição da página - Obs: Essa descrição é padrão, cada página deve conter um Metadata
  siteName,
  keywords, // Palavras-chave para SEO index
  canonical: url,
  ddd: "15",
  dddSecundario: "11",
  selosDark: true, // Selos Rodapé - True = Preto ||  False = Branco
  numeroTelefone: "99171-4668",
  numeroTelefone2: "93225-1979",
  whatsappApi: "https://api.whatsapp.com/send?phone=5515991714668&text=Olá,%20estou%20entrando%20em%20contato%20via%20site%20para%20saber%20mais%20informações%20sobre%20orçamentos!",
  whatsappApi2: "https://api.whatsapp.com/send?phone=5511932251979&text=Olá,%20estou%20entrando%20em%20contato%20via%20site%20para%20saber%20mais%20informações%20sobre%20orçamentos!",
  numeroWhatsapp: "99171-4668",
  email: "contato@jcpisosintertravados.com.br",
  emailDestinatario: "andersonmelo.yaslip@gmail.com",
  endereco: {
    urlMaps: "https://maps.app.goo.gl/fntVw9t9dAXJhD2k7",
    rua: "Rua Ordália Albino Roseiro",
    cidade: "Guarulhos",
    estado: "SP",
    cep: "18077-535",
    mapaEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3660.2707255041855!2d-47.47525780000001!3d-23.450697199999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c5f58afae571cb%3A0x8532fd1cbebb9355!2sJC%20PISOS%20INTERTRAVADOS!5e0!3m2!1spt-BR!2sbr!4v1770987786691!5m2!1spt-BR!2sbr",
  },
  openGraph: {
    url,
    title,
    description,
    images: [
      {
        url: "/logo.png",
        width: 300,
        height: 200,
        alt: "Imagem representativa do Site",
      },
    ],
    siteName,
    locale: "pt_BR", // Definindo a localidade do Open Graph
    region: "Brasil", // Definindo a região
  },
  robots: "index, follow",
};
