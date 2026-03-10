"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const pisos = [
  {
    id: 1,
    image: "/pisos/piso-retangular.jpg",
    titulo: "Piso Intertravado Retangular",
    descricao:
      "Ideal para pavimentação de ruas, calçadas, pátios industriais, praças, jardins, aeroportos e outros. Disponível nas opções Normal e Drenante.",
  },
  {
    id: 2,
    image: "/pisos/piso-16.jpg",
    titulo: "Piso Intertravado 16 faces",
    descricao:
      "O pavi 16 faces é o modelo mais utilizado, pois as 16 faces laterais aumentam o atrito com as peças vizinhas",
  },
  {
    id: 3,
    image: "/pisos/piso-sextavado.jpg",
    titulo: "Piso Intertravado Sextavado",
    descricao:
      "Ideal para pavimentação de ruas, calçadas, pátios industriais, praças, jardins, aeroportos e outros.",
  },
  {
    id: 4,
    image: "/pisos/piso-placa.jpg",
    titulo: "Piso Intertravado Placa",
    descricao:
      "O Pavi tipo Placa é ideal para estacionamentos, tráfego de pedestres e áreas internas.",
  },
  {
    id: 5,
    image: "/pisos/guia-prefeitura.jpg",
    titulo: "Guia Padrão Prefeitura",
    descricao:
      "As Guias de Concreto são utilizadas na pavimentação como limitadores físicos para evitar que os pisos intertravados não se desloquem.",
  },
  {
    id: 6,
    image: "/pisos/mini-guia.jpg",
    titulo: "Mini Guia Padrão Prefeitura",
    descricao:
      "São utilizadas em residências, jardins, praças, ruas internas de condomínios, etc.",
  },
];


export default function First() {
  const [pisoSelecionado, setPisoSelecionado] = useState(pisos[0]);

  return (
    <section className="piso-section">
      <h1 className="h1-hidden">Início | JC Pisos Intertravados</h1>
      <div className="container">
        <div className="top">
          {/* Imagem principal */}
          <div className="main-image">
            <Image
              src={pisoSelecionado.image}
              alt={pisoSelecionado.titulo}
              fill
              className="image"
              sizes="(max-width: 768px) 100vw, 500px"
            />
          </div>

          {/* Conteúdo dinâmico */}
          <div className="content">
            <span className="badge">PISO INTERTRAVADO</span>
            <h2>{pisoSelecionado.titulo}</h2>
            <p>{pisoSelecionado.descricao}</p>
          </div>
        </div>

        {/* Galeria */}
        <div className="gallery">
          {pisos.map((piso) => (
            <div
              key={piso.id}
              className={`thumb ${
                pisoSelecionado.id === piso.id ? "active" : ""
              }`}
              onClick={() => setPisoSelecionado(piso)}
            >
              <Image
                src={piso.image}
                alt={piso.titulo}
                fill
                className="image"
                sizes="120px"
              />
            </div>
          ))}
        </div>

        <Link href='/pisos'>Veja Mais</Link>
      </div>
    </section>
  );
}