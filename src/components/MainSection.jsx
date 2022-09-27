import ExploreSection from "./sectionexplore/ExploreSection";
import HeroSection from "./sectionhero/heroSection";
import JournalSection from "./sectionjournal/JournalSection";

function MainSection() {
  return (
    <main>
      <HeroSection />
      <ExploreSection />
      <JournalSection />
    </main>
  );
}

export default MainSection;
