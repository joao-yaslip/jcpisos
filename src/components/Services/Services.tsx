import '../../styles/index.scss';

export default function Services() {
  return (
    <main>
      <section className="work-process" aria-labelledby="wp-title">
        <div className="container">
          <p className="eyebrow">
            <span className="dot" />
            Processo de Instalação
          </p>

          <h2 id="wp-title" className="title">
            Processo de Instalação
            <br />
            Processo de Instalação do Piso Intertravado
          </h2>

          <div className="steps">
            {/* Step 01 */}
            <article className="step step-1">
              <div className="media">
                <div className="ring">
                  <img src="/instalacao/01.jpg" alt="Color Board" />
                </div>
              </div>
              <h3 className="name">Color Board</h3>
              <span className="badge">Step 01</span>
            </article>

            {/* Step 02 */}
            <article className="step step-2">
              <div className="media">
                <div className="ring">
                  <img src="/instalacao/02.jpg" alt="Dimension" />
                </div>
              </div>
              <h3 className="name">Dimension</h3>
              <span className="badge">Step 02</span>
            </article>

            {/* Step 03 */}
            <article className="step step-3">
              <div className="media">
                <div className="ring">
                  <img src="/instalacao/03.jpg" alt="Installation" />
                </div>
              </div>
              <h3 className="name">Installation</h3>
              <span className="badge">Step 03</span>
            </article>

            {/* Step 04 */}
            <article className="step step-4">
              <div className="media">
                <div className="ring">
                  <img src="/instalacao/04.jpg" alt="Finishing" />
                </div>
              </div>
              <h3 className="name">Finishing</h3>
              <span className="badge">Step 04</span>
            </article>

            {/* Linhas */}
            <span className="link link-1" />
            <span className="link link-2" />
            <span className="link link-3" />
          </div>
        </div>
      </section>
    </main>
  );
}