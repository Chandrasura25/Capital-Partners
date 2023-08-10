import aboutStyle from "../styles/About.module.css";
const About = () => {
  return (
    <div className={aboutStyle.container}>
      <div className={aboutStyle.slider}>
        <div className={`${aboutStyle.slide} ${aboutStyle.slide1}`}>
          <div className={aboutStyle.caption}>
            <h2>Slide1</h2>
            <p>
              Welcome to Capital Partners Investment Plc, a leading investment
              company with a diverse portfolio covering various sectors of the
              economy. With a steadfast commitment to excellence and a track
              record of success, we aim to facilitate growth, create value, and
              generate sustainable returns for our investors.
            </p>
          </div>
        </div>
        <div className={`${aboutStyle.slide} ${aboutStyle.slide2}`}>
          <div className={aboutStyle.caption}>
            <h2>Slide2</h2>
            <p>
              Capital Partners Investment Plc has been duly registered by the
              Corporate Affairs Commission and certified by the Nigeria
              Investment Promotion Commission. Our esteemed reputation is built
              on a foundation of integrity, transparency, and professionalism,
              ensuring that our clients receive the highest standards of
              service.
            </p>
          </div>
        </div>
        <div className={`${aboutStyle.slide} ${aboutStyle.slide3}`}>
          <div className={aboutStyle.caption}>
            <h2>Slide3</h2>
            <p>
              Our investment portfolio encompasses a wide range of sectors,
              providing opportunities for both domestic and international
              investors. We believe in the power of strategic investments to
              drive economic development and improve the lives of individuals.
              As such, we have carefully selected sectors that are essential to
              Nigeria&apos;s growth and have significant potential for long-term
              profitability.
            </p>
          </div>
        </div>
        <div className={`${aboutStyle.slide} ${aboutStyle.slide4}`}>
          <div className={aboutStyle.caption}>
            <h2>Slide4</h2>
            <p>
              At Capital Partners Investment Plc, we combine our extensive
              industry knowledge, market insights, and investment expertise to
              identify and execute value-driven opportunities. Our team of
              seasoned professionals is committed to delivering superior returns
              while upholding the highest standards of corporate governance and
              social responsibility.
            </p>
          </div>
        </div>
        <div className={`${aboutStyle.slide} ${aboutStyle.slide5}`}> 
          <div className={aboutStyle.caption}>
            <h2>Slide5</h2>
            <p>
              We invite you to explore the possibilities of partnering with
              Capital Partners Investment Plc, where your financial goals meet
              our strategic vision, creating a path to mutual success.
            </p>
          </div>
        </div>
        <div className={`${aboutStyle.slide} ${aboutStyle.slide1}`}>
          <div className={aboutStyle.caption}>
            <h2>Slide1</h2>
            <p>
              Welcome to Capital Partners Investment Plc, a leading investment
              company with a diverse portfolio covering various sectors of the
              economy. With a steadfast commitment to excellence and a track
              record of success, we aim to facilitate growth, create value, and
              generate sustainable returns for our investors.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
