import "./ExploreSection.scss";

function ExploreSection() {
  const expLink = document.querySelector(".explore__link");
  expLink.addEventListener("click", (e) => {
    e.preventDefault();
  });

  return (
    <section className="explore" id="about">
      <div className="cont">
        <h2 className="explore__title">Explore The Kintanami</h2>
        <p className="explore__subtitle">
          The tourism potential of this area is the unique and amazing view of
          the mountainous region. It is about 2 hours drive from Denpasar City,
          to be precise in a place called Penelokan, which, according to its
          name in Balinese which means a place to sightsee, is the most
          strategic location to enjoy the natural scenery in this tourist area.
          Penelokan is located in Kedisan, one of the villages in the district.
          Kintamani.
        </p>
        <div className="explore__cards">
          <div className="explore__card">
            <h4 className="explore__card--title">Hotel</h4>
            <p className="explore__card--subtitle">
              Get peaceful place to rest
            </p>
          </div>
          <div className="explore__card">
            <h4 className="explore__card--title">Pine Forests</h4>
            <p className="explore__card--subtitle">
              explore Glagahlinggah Lestari
            </p>
          </div>
          <div className="explore__card">
            <h4 className="explore__card--title">Sukawana</h4>
            <p className="explore__card--subtitle">wonderful sunrise</p>
          </div>
        </div>
        <a href="#" className="explore__link">
          SEE MORE &gt;
        </a>
      </div>
    </section>
  );
}

export default ExploreSection;
