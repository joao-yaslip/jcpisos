"use client";

import React, { useEffect, useMemo, useState } from "react";
import styles from "./Pisos.module.scss";

type DimensaoSpec = {
  dimensoes: string;
  espessura?: string;
  mpa?: string;
};

type Piso = {
  id: string;
  label: string; // texto do botão/aba
  title: string; // título grande
  subtitle?: string;
  description: string;
  heroImageUrl?: string;
  exampleImageUrl?: string; // opcional
  colors?: Array<{ name: string; hex: string }>;
  specs?: DimensaoSpec[]; // ✅ agora opcional
};

const pisos: Piso[] = [
  {
    id: "retangulares",
    label: "Piso intertravado • Retangulares",
    title: "PISO INTERTRAVADO",
    subtitle: "Modelo Retangular",
    description:
      "Ideal para pavimentação de ruas, calçadas, pátios industriais, praças, jardins, aeroportos e outros. Disponível nas opções Normal e Drenante.",
    heroImageUrl: "/pisos/piso-retangular.jpg",
    exampleImageUrl: "/pisos/retangular-exemplo.jpg",
    colors: [
      { name: "Natural", hex: "#d7d2c8" },
      { name: "Grafite", hex: "#4a4a4a" },
      { name: "Canela", hex: "#a5927d" },
      { name: "Vermelho", hex: "#8b1f1f" },
      { name: "Terra Cota", hex: "#a7542a" },
      { name: "Amarelo", hex: "#caa02f" },
      { name: "Marrom", hex: "#5a3a26" },
    ],
    specs: [
      { dimensoes: "10 x 20 cm", espessura: "04 cm", mpa: "20" },
      { dimensoes: "10 x 20 cm", espessura: "06 cm", mpa: "35" },
      { dimensoes: "10 x 20 cm", espessura: "08 cm", mpa: "35 a 50" },
    ],
  },
  {
    id: "16-faces",
    label: "Piso intertravado • 16 faces",
    title: "PISO INTERTRAVADO",
    subtitle: "Modelo 16 Faces",
    description:
      "O pavi 16 faces é o modelo mais utilizado, pois as 16 faces laterais aumentam o atrito com as peças vizinhas, e esse atrito é um dos responsáveis pelo intertravamento entre as peças.",
    heroImageUrl: "/pisos/piso-16.jpg",
    exampleImageUrl: "/pisos/16-exemplo.jpg",
    colors: [
      { name: "Natural", hex: "#d7d2c8" },
      { name: "Grafite", hex: "#4a4a4a" },
      { name: "Canela", hex: "#a5927d" },
      { name: "Vermelho", hex: "#8b1f1f" },
      { name: "Terra Cota", hex: "#a7542a" },
      { name: "Amarelo", hex: "#caa02f" },
      { name: "Marrom", hex: "#5a3a26" },
    ],
    specs: [
      { dimensoes: "11 x 22 cm", espessura: "06 cm", mpa: "35 a 50" },
      { dimensoes: "11 x 22 cm", espessura: "08 cm", mpa: "35 a 50" },
      { dimensoes: "11 x 22 cm", espessura: "10 cm", mpa: "35 a 50" },
    ],
  },
  {
    id: "sextavado",
    label: "Piso intertravado • Sextavados",
    title: "PISO INTERTRAVADO",
    subtitle: "Modelo Sextavado",
    description:
      "Ideal para pavimentação de ruas, calçadas, pátios industriais, praças, jardins, aeroportos e outros. Disponível nas opções Normal e Drenante.",
    heroImageUrl: "/pisos/piso-sextavado.jpg",
    exampleImageUrl: "/pisos/sextavado-exemplo.jpg",
    colors: [
      { name: "Natural", hex: "#d7d2c8" },
      { name: "Grafite", hex: "#4a4a4a" },
      { name: "Canela", hex: "#a5927d" },
      { name: "Vermelho", hex: "#8b1f1f" },
      { name: "Terra Cota", hex: "#a7542a" },
      { name: "Amarelo", hex: "#caa02f" },
      { name: "Marrom", hex: "#5a3a26" },
    ],
    specs: [
      { dimensoes: "25 x 25 cm", espessura: "06 cm", mpa: "35" },
      { dimensoes: "25 x 25 cm", espessura: "08 cm", mpa: "35 a 50" },
      { dimensoes: "30 x 30 cm", espessura: "08 cm", mpa: "35 a 50" },
    ],
  },
  {
    id: "placa",
    label: "Piso intertravado • Placa",
    title: "PISO INTERTRAVADO",
    subtitle: "Modelo Placa",
    description:
      "O Pavi tipo Placa é ideal para estacionamentos, tráfego de pedestres e áreas internas. Disponível nas opções Normal e Drenante.",
    heroImageUrl: "/pisos/piso-placa.jpg",
    exampleImageUrl: "/pisos/placa-exemplo.jpg",
    colors: [
      { name: "Natural", hex: "#d7d2c8" },
      { name: "Grafite", hex: "#4a4a4a" },
      { name: "Canela", hex: "#a5927d" },
      { name: "Vermelho", hex: "#8b1f1f" },
      { name: "Terra Cota", hex: "#a7542a" },
      { name: "Amarelo", hex: "#caa02f" },
      { name: "Marrom", hex: "#5a3a26" },
    ],
    specs: [
      { dimensoes: "40 x 40 cm", espessura: "06 cm", mpa: "35 a 50" },
      { dimensoes: "40 x 40 cm", espessura: "08 cm", mpa: "35 a 50" },
    ],
  },
  {
    id: "guia",
    label: "Guia Padrão • Prefeitura",
    title: "GUIA PADRÃO",
    subtitle: "Modelo Prefeitura",
    description:
      "As Guias de Concreto são utilizadas na pavimentação como limitadores físicos para evitar que os pisos intertravados não se desloquem.",
    heroImageUrl: "/pisos/guia-prefeitura.jpg",
    specs: [{ dimensoes: "0.15 X 0.30 X 1.00 M" }],
  },
  {
    id: "mini",
    label: "Mini Guia Padrão • Prefeitura",
    title: "MINI GUIA PADRÃO",
    subtitle: "Modelo Prefeitura",
    description:
      "São utilizadas em residências, jardins, praças, ruas internas de condomínios, etc. Apresentam cantos arredondados, criando um todo harmonioso com pisos intertravados e gramados.",
    heroImageUrl: "/pisos/mini-guia.jpg",
    specs: [{ dimensoes: "0.07 X 0.19 X 0.39 CM" }],
  },
];

export default function PisoSpecsSection() {
  const [activeId, setActiveId] = useState(pisos[0].id);
  const [modalOpen, setModalOpen] = useState(false);

  const active = useMemo(
    () => pisos.find((p) => p.id === activeId) ?? pisos[0],
    [activeId]
  );

  // ✅ fechar com ESC
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setModalOpen(false);
    };

    if (modalOpen) window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [modalOpen]);

  // ✅ se trocar de aba, fecha o modal
  useEffect(() => {
    setModalOpen(false);
  }, [activeId]);

  return (
    <section className={styles.section}>
      {/* Abas */}
      <div className={styles.tabsWrap}>
        <div className={styles.container}>
          <div className={styles.tabs}>
            {pisos.map((p) => {
              const isActive = p.id === activeId;
              return (
                <button
                  key={p.id}
                  type="button"
                  className={`${styles.tabBtn} ${
                    isActive ? styles.tabActive : ""
                  }`}
                  onClick={() => setActiveId(p.id)}
                >
                  {p.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Conteúdo */}
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Coluna esquerda */}
          <div className={styles.left}>
            <div className={styles.heroCard}>
              <div className={styles.heroMedia}>
                {active.heroImageUrl ? (
                  <img
                    src={active.heroImageUrl}
                    alt={active.subtitle ?? active.title}
                    className={styles.imgCover}
                  />
                ) : (
                  <div className={styles.mediaPlaceholder}>Imagem do produto</div>
                )}
              </div>
            </div>

            {/* ✅ Exemplo só aparece se tiver imagem */}
            {active.exampleImageUrl ? (
              <div className={styles.exampleCard}>
                <div className={styles.exampleHeader}>
                  Exemplo de piso instalado
                </div>

                <div
                  className={styles.exampleMedia}
                  onClick={() => setModalOpen(true)}
                  style={{ cursor: "pointer" }}
                  role="button"
                  aria-label="Abrir imagem em tela cheia"
                >
                  <img
                    src={active.exampleImageUrl}
                    alt="Exemplo instalado"
                    className={styles.imgCover}
                  />
                </div>
              </div>
            ) : null}
          </div>

          {/* Coluna direita */}
          <div className={styles.right}>
            <div className={styles.infoCard}>
              <h2 className={styles.title}>{active.title}</h2>
              {active.subtitle ? (
                <p className={styles.subtitle}>{active.subtitle}</p>
              ) : null}

              <p className={styles.description}>{active.description}</p>

              {/* Cores */}
              {active.colors?.length ? (
                <div className={styles.block}>
                  <div className={styles.blockLabel}>CORES</div>

                  <div className={styles.colorsGrid}>
                    {active.colors.map((c) => (
                      <div key={c.name} className={styles.colorItem}>
                        <span
                          className={styles.swatch}
                          style={{ backgroundColor: c.hex }}
                          aria-hidden
                        />
                        <span className={styles.colorName}>{c.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}

              {/* ✅ Especificações só aparece se tiver specs */}
              {active.specs?.length ? (
                <div className={styles.block}>
                  <div className={styles.blockLabel}>ESPECIFICAÇÕES</div>

                  <div className={styles.table}>
                    <div className={`${styles.row} ${styles.headerRow}`}>
                      <div>Dimensões</div>
                      <div>Espessura</div>
                      <div>MPA</div>
                    </div>

                    {active.specs.map((r, i) => (
                      <div key={`${active.id}-${i}`} className={styles.row}>
                        <div className={styles.dim}>{r.dimensoes}</div>
                        <div>{r.espessura ?? "-"}</div>
                        <div>{r.mpa ?? "-"}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Modal (abre ao clicar no exemplo) */}
      {modalOpen && active.exampleImageUrl ? (
        <div
          className={styles.modalOverlay}
          onClick={() => setModalOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.modalClose}
              onClick={() => setModalOpen(false)}
              aria-label="Fechar"
            >
              ✕
            </button>

            <img
              src={active.exampleImageUrl}
              alt="Imagem ampliada"
              className={styles.modalImage}
            />
          </div>
        </div>
      ) : null}
    </section>
  );
}