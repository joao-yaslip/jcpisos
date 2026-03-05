"use client";

import { FaWhatsapp } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
import "@/partials/Rodape/rodape.scss";
import ScrollToTop from "@/components/ScrollToTop";
import { url, settings } from "@/settings/settings";
import { usePathname } from "next/navigation";
import { FaMapMarkedAlt } from "react-icons/fa";
import { useEffect } from "react";

export default function Rodape() {
  const { siteName, selosDark, numeroTelefone, ddd, numeroTelefone2, dddSecundario, whatsappApi, whatsappApi2, email } =
    settings;
  const { rua, cidade, estado, cep, urlMaps } = settings.endereco;
  const year = new Date().getFullYear();
  const pathname = usePathname();
  const urlFormatted = url.replace(/\/$/, "");
  const fullUrl = `${urlFormatted}${pathname}`;

  useEffect(() => {
  const cursor = document.createElement("div");
  cursor.classList.add("cursor");
  document.body.appendChild(cursor);

  let mouseX = 0;
  let mouseY = 0;
  let cursorX = 0;
  let cursorY = 0;

  const handleMouseMove = (e: MouseEvent) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  };

  document.addEventListener("mousemove", handleMouseMove);

  const animate = () => {
    cursorX += (mouseX - cursorX) * 1.0;
    cursorY += (mouseY - cursorY) * 1.0;

    cursor.style.transform = `translate(${cursorX - 10}px, ${cursorY - 10}px)`;
    requestAnimationFrame(animate);
  };

  animate();

  const elements = document.querySelectorAll("a, button");

  const addFill = () => cursor.classList.add("fill");
  const removeFill = () => cursor.classList.remove("fill");

  elements.forEach((el) => {
    el.addEventListener("mouseenter", addFill);
    el.addEventListener("mouseleave", removeFill);
  });

  return () => {
    document.removeEventListener("mousemove", handleMouseMove);
    cursor.remove();

    elements.forEach((el) => {
      el.removeEventListener("mouseenter", addFill);
      el.removeEventListener("mouseleave", removeFill);
    });
  };
}, []);

  return (
    <footer>
      <div className="top">
        <Link className="logoFooter" href={`/`}>
          <Image src="/logo.png" width={200} height={90} alt="" />
        </Link>
        <div className="menuFooter">
          <h2>Menu</h2>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/sobre-nos">Sobre Nós</Link>
            </li>
            <li>
              <Link href="/pisos">Pisos Intertravados</Link>
            </li>
            <li>
              <Link href="/obras">Obras</Link>
            </li>
            <li>
              <Link href="/contato">Contato</Link>
            </li>
            <li className="linkInformacoesRodape">
              <Link href="/informacoes">.</Link>
            </li>
          </ul>
        </div>
        <div className="contactFooter">
          <h2>Contato</h2>
          <ul>
            <li>
              <FaWhatsapp />
              <Link
                href={`${whatsappApi}`} target="_blank"
              >{`(${ddd}) ${numeroTelefone}`}</Link>
            </li>
            <li>
              <FaWhatsapp />
              <Link
                href={`${whatsappApi2}`} target="_blank"
              >{`(${dddSecundario}) ${numeroTelefone2}`}</Link>
            </li>
            <li>
              <IoMailOutline size={20} />
              <Link href={`mailto:${email}`}>{`${email}`}</Link>
            </li>
            <li>
              <FaMapMarkedAlt />{" "}
              <Link href={urlMaps} target="_blank">{`${rua} - ${cidade} - ${estado}, ${cep}`}</Link>
            </li>
          </ul>
        </div>
        <div className="footerSelos">
          <div className="logoYaslip">
            <object
              data={`/selos/${
                selosDark ? "selo-preto.svg" : "selo-branco.svg"
              }`}
              type="image/svg+xml"
            ></object>
          </div>
          <ul>
            <li>
              <Link
                href={`http://validator.w3.org/check?uri=${fullUrl}`}
                target="_blank"
              >
                <Image
                  alt="W3C HTML Validator"
                  src={`/selos/${
                    selosDark ? "w3c-html-preto.webp" : "w3c-html.webp"
                  }`}
                  width={40}
                  height={60}
                />
              </Link>
            </li>
            <li>
              <Link
                href={`http://jigsaw.w3.org/css-validator/validator?uri=${fullUrl}`}
                target="_blank"
              >
                <Image
                  alt="W3C CSS Validator"
                  src={`/selos/${
                    selosDark ? "w3c-css-preto.webp" : "w3c-css.webp"
                  }`}
                  width={40}
                  height={60}
                />
              </Link>
            </li>
            <li>
              <Link
                href={`https://developers.google.com/speed/pagespeed/insights/?url=${fullUrl}`}
                target="_blank"
              >
                <Image
                  alt="Google PageSpeed"
                  src={`/selos/${
                    selosDark ? "pagespeed-preto.webp" : "pagespeed.webp"
                  }`}
                  width={40}
                  height={60}
                />
              </Link>
            </li>
            <li>
              {typeof window !== "undefined" &&
                window.location.protocol === "https:" && (
                  <Link
                    href={`https://www.sslshopper.com/ssl-checker.html#hostname=${fullUrl}`}
                    target="_blank"
                  >
                    <Image
                      alt="SSL"
                      src={`/selos/${
                        selosDark ? "ssl-preto.webp" : "ssl.webp"
                      }`}
                      width={40}
                      height={60}
                    />
                  </Link>
                )}
            </li>
          </ul>
        </div>
      </div>
      <div className="bottomRowFooter">
        <p>
          Copyright © {year} {siteName}. Todos os direitos reservados{" "}
          <Link href="/mapa-site">.</Link>
        </p>
      </div>
      <div className="whatsapp-btn">
        <a
          target="blank"
          rel="nofollow"
          href={whatsappApi}
          aria-label="Botão Whatsapp"
        >
          <div className="animated infinite zoomIn whatsapp-animate-circulo-pulse"></div>
          <div className="animated infinite pulse whatsapp-btn-bg"></div>
          <div className="animated infinite tada whatsapp-btn-config"></div>
          <span style={{ display: "none" }}>.</span>
        </a>
      </div>
      <ScrollToTop />
    </footer>
  );
}
