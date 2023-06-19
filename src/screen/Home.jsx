import "../style/Home.css";
function Home() {
  return (
    <div>
      <div className="banner">
        <div className="inicio">
          <header className="header">
            {/* NAV */}
            <div className="container">
              <div className="btn-menu">
                <div className="logo">
                  <h1>
                    {/* <img
                      src="./img/LogosJasson/logo3.svg"
                      width={110}
                      height={50}
                    /> */}
                  </h1>
                </div>
              </div>
              {/* menu */}
              <nav className="menu">
                <a className="a" href="#">
                  Home
                </a>
                <a href="./template/contacto.html">Contact me</a>
                <a href="./template/quienSoy.html">About me</a>
                <a href="./template/gallery.html">Gallery</a>
              </nav>
            </div>
          </header>
          {/* Banner */}
          <div className="bg">
            <div className="text">
              <h1>
                <b>Jasson Producciones</b>
              </h1>
              {/* Imput */}
              <div className="search">
                <form className="form">
                  <button>
                    <svg
                      width={17}
                      height={16}
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-labelledby="search"
                    >
                      <path
                        d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
                        stroke="currentColor"
                        strokeWidth="1.333"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <input
                    className="input"
                    placeholder="Que deseas buscar"
                    required
                    type="text"
                  />
                  <button className="reset" type="reset">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </form>
              </div>
              {/* imput */}
              <p>
                <br />
                Bienvenido a mi galeria, donde puedes conocer mi trabajo y
                contactarme
              </p>
            </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#fff"
              fillOpacity={1}
              d="M0,224L80,240C160,256,320,288,480,272C640,256,800,192,960,176C1120,160,1280,192,1360,208L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
      <section className="descriptions">
        <article>
          <p>Explora mientas decides cual es tu mejor alternativa</p>
        </article>
      </section>
      <section className="list">
        <div className="marge">
          <div className="cards">
            <div id="btn-abrir-popup" className="container">
              <h2 className="title-cards">Designer UI</h2>
              <ul>
                <li>Adobe</li>
                <ul>
                  <li>adobe Photoshop</li>
                  <li>Adobe xd</li>
                </ul>
                <li>Other</li>
                <ul>
                  <li>Figma</li>
                </ul>
              </ul>
            </div>
            <div id="btn-abrir-popup" className="container">
              <h2 className="title-cards">Grafic Desing</h2>
              <ul>
                <li>Adobe XD</li>
                <li>Adobe Photoshop</li>
                <li>Adobe Ilustrator</li>
                <li>Adobe After Efect</li>
              </ul>
            </div>
            <div className="container">
              <h2 className="title-cards">Frontend Developers</h2>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JS</li>
                <li>REACT</li>
                <li>VITE</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="img-cards">
          <h1>Ediciones</h1>
          <div className="imagenContainer">
            <img src="./img/edit/laptop.jpg" width={300} height={200} />
            <img src="./img/edit/libro (1).jpg" width={300} height={200} />
            <img src="./img/edit/basquet.jpg" width={300} height={200} />
            <h1>Fotografias</h1>
            <img src="./img/foto/1.jpg" width={300} height={200} />
            <img src="./img/foto/2.jpg" width={300} height={200} />
            <img src="./img/foto/3.jpg" width={300} height={200} />
            <h1>Trabajo Corporativo</h1>
            <img src width={360} height={200} />
            <img src width={360} height={200} />
          </div>
        </div>
      </section>
      {/* Boddy */}
      <footer>
        <div className="containerFooter">
          <p>este es el contenido de mi footer</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
