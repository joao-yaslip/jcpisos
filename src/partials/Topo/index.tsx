"use client";

import { settings } from "@/settings/settings";
import "@/partials/Topo/topo.scss";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { FaWhatsapp } from "react-icons/fa";

import { useEffect, useState } from "react";
import { josefinSans } from "@/lib/fonts";
import HamburgerMenu from "@/components/HamburgerMenu";
import { MdPhoneInTalk } from "react-icons/md";
import { MdMail } from "react-icons/md";
import ScrollProgressBar from "@/components/ScrollProgessBar/ScrollProgressBar";

const { numeroTelefone, numeroTelefone2, ddd, dddSecundario, whatsappApi, whatsappApi2, email } = settings;


export default function Topo() {
  const [isFixed, setIsFixed] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleScroll = () => {
    const scroll = window.scrollY;
    setIsFixed(scroll > 100); // 100 é a altura do topo
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]); // funciona no App Router

  const toggleMobile = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header>
      <ScrollProgressBar />
      <div className={isFixed ? "topo fixed" : "topo"}>
        <div className="topo-contato">
          <div className={`base ${josefinSans.className}`}>
            <Link href={whatsappApi} target="_blank">
              <FaWhatsapp /> {`(${ddd}) ${numeroTelefone}`}
            </Link>
            {numeroTelefone2 ? (
              <Link href={whatsappApi2} target="_blank">
                <FaWhatsapp /> {`(${dddSecundario}) ${numeroTelefone2}`}
              </Link>
            ) : (
              ""
            )}
            <Link href={`mailto:${email}`} target="_blank">
              <MdMail /> {`${email}`}
            </Link>
          </div>
        </div>
        <div className="topo-menu">
          <div className="base">
            <Link href="/">
              <Image alt="Imagem" src="/logo.png" width={270} height={100} />
            </Link>
            <ul className="topo-links">
              <li className="topo-item">
                <Link href="/">Home</Link>
              </li>
              <li className="topo-item">
                <Link href="/sobre-nos">Sobre nós</Link>
              </li>
              <li className="topo-item">
                <Link href="/pisos">Pisos Intertravados</Link>
              </li>
              <li className="topo-item">
                <Link href="/obras">Obras</Link>
              </li>
              <li className="topo-item topo-informacoes">
                <Link href="/informacoes">.</Link>
              </li>
            </ul>
            <Link href="/contato" className="botao-contato">
              <MdPhoneInTalk />
              Entre em contato
            </Link>
            <HamburgerMenu isOpen={isMenuOpen} toggleMenu={toggleMobile} />
          </div>
        </div>
      </div>
      <div className={`menu-mobile ${isMenuOpen ? "open" : ""}`}>
        <ul className="topo-links-mobile">
          <li className="topo-item">
            <Link href="/">Home</Link>
          </li>
          <li className="topo-item">
            <Link href="/sobre-nos">Sobre nós</Link>
          </li>
          <li className="topo-item">
            <Link href="/pisos">Pisos Intertravados</Link>
          </li>
          <li className="topo-item">
            <Link href="/obras">Obras</Link>
          </li>
          <li className="topo-item topo-informacoes">
            <Link href="/informacoes">.</Link>
          </li>
          <Link href="/contato" className="botao-contato-mobile">
            <MdPhoneInTalk />
            Entre em contato
          </Link>
          <Link href={whatsappApi} target="_blank" className="link-topo-mobile">
            <FaWhatsapp /> {`(${ddd}) ${numeroTelefone}`}
          </Link>
          <Link href={whatsappApi2} target="_blank" className="link-topo-mobile">
            <FaWhatsapp /> {`(${dddSecundario}) ${numeroTelefone2}`}
          </Link>
        </ul>
      </div>
    </header>
  );
}
