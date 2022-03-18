import Head from "next/head"
import { Component } from "react"

function Home() {
  return (
    <>
      <Head>
        <title>Obboy</title>
      </Head>
      <div className="global_container">
        {/* ? HEADER SECTION | START */}
        <div className="main_header__container">
          <header className="main_header">
            <a href="#" className="main_header__branding">
              Obboy <span className="main_header__branding--highlight">.io</span>
            </a>
            {/* .main_header__branding */}
            <nav className="main_header__navigation">
              <ul className="main_header__navigation__list">
                <li className="main_header__navigation__list__item">
                  <a href="#" className="main_header__navigation__list__item__link">Home</a>
                </li>
                <li className="main_header__navigation__list__item">
                  <a href="#" className="main_header__navigation__list__item__link">Projects</a>
                </li>
                {/* .main_header__navigation__list__item */}
                <li className="main_header__navigation__list__item">
                  <a href="#" className="main_header__navigation__list__item__link">About</a>
                </li>
                {/* .main_header__navigation__list__item */}
                <li className="main_header__navigation__list__item">
                  <a href="#" className="main_header__navigation__list__item__link">Sponsors</a>
                </li>
                {/* .main_header__navigation__list__item */}
                <li className="main_header__navigation__list__item">
                  <a href="#" className="main_header__navigation__list__item__link">Login</a>
                </li>
                {/* .main_header__navigation__list__item */}
              </ul>
              {/* .main_header__navigation__list */}
            </nav>
            {/* .main_header__navigation */}
          </header>
          {/* .main_header */}
        </div>
        {/* .main_header__container */}
        {/* ? HEADER SECTION | END */}
        <div className="hero__container">
          <section className="hero">
            <div className="hero__content">
              <h1 className="hero__content__name">
                DEEP iN <br />
                CODE w/<span className="hero__content__name--highlight">Obboy</span>
              </h1>
              {/* .hero__content__name */}
              <div className="hero__content__info">
                <span className="hero__content__info__line">
                  <code className="hero__content__info__line__code">
                    import
                    <span className="hero__content__info__line__code--highlight"> Life </span>
                    from
                    <span className="hero__content__info__line__code--highlight"> &quot;Life&quot;</span>;
                  </code>
                  {/* .hero__content__info__line__code */}
                </span>
                {/* .hero__content__info__line */}
                <span className="hero__content__info__line">
                  {/* prettier-ignore */}
                  <code className="hero__content__info__line__code">
                    if
                    (<span className="hero__content__info__line__code--highlight">Life</span>
                    .status ==
                    <span className="hero__content__info__line__code--highlight">&quot;SAD&quot;</span>)
                    {'{'}
                  </code>
                  {/* prettier-ignore-end */}
                </span>
                {/* .hero__content__info__line */}
                <span className="hero__content__info__line">
                  <code className="hero__content__info__line__code">
                    <span className="hero__content__info__line__code--highlight">Life</span>.code();
                  </code>
                </span>
                {/* .hero__content__info__line */}
                <span className="hero__content__info__line">
                  <code className="hero__content__info__line__code">{'}'}</code>
                </span>
                {/* .hero__content__info__line */}
              </div>
              {/* .hero__content__info */}
              <a href="#" className="hero__content__call_to_action"> Contribute Now </a>
            </div>
            {/* .hero__content */}
            <div className="hero__banner" >
              <img className='hero__banner__image__hacker'
                src='/assets/img/hero__banner__image.png'
                alt=''>
              </img>
              {/* .hero__banner__image__hacker */}
            </div>
            {/* .hero__banner */}
            <div className='hero__bg__container'>
              <img className='hero__content__bg__gradient__circle'
                src='/assets/img/hero__aside__circular__gradient.svg'
                alt=''>
              </img>
              {/* .hero__content__bg__gradient__circle */}
            </div>
            {/* .hero__bg__container */}
          </section>
          <section className="hero__menu__section">
            <div className="hero__image__github__container">
              <img className='hero__image__github'
                src='/assets/img/hero__aside__banner__image.svg'
                alt='' />
              {/* .hero__image__github__container */}
            </div>
            {/* .hero__menu__section */}
          </section>
          {/* .hero */}
        </div>
        {/* .hero__container */}
      </div>
    </>
  )
}

class MainApp extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <>
        <Home />
      </>
    )
  }
}

export default MainApp
