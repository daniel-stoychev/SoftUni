import FeaturesItem from "./FeaturesItem.jsx";

export default function Features() {
  return (
    <section className="section home-feature">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="row">
              <FeaturesItem
                title="Modern Strategy"
                content="Customize anything in this template to fit your website needs"
              />

              <FeaturesItem
                title="Best Relationship"
                content="Contact us immediately if you have a question in mind"
              />

              <FeaturesItem
                title="Ultimate Marketing"
                content="You just need to tell your friends about our free templates"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
