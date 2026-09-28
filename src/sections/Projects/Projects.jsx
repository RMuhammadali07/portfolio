import styles from "./ProjectsStyles.module.css";
import viberr from "../../assets/viberr.png";
import freshBurger from "../../assets/fresh-burger.png";
import hipsster from "../../assets/hipsster.png";
import fitLift from "../../assets/fitlift.png";
import ProjectCard from "../../common/ProjectCard";
import hotel from "../../assets/hotel.png";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://rivojiddinov-vidtube.netlify.app/"
          h3="Vidtube"
          // p="Streaming App"
        />
        {/* <ProjectCard
          src={freshBurger}
          link="https://food-deliveryyy.netlify.app"
          h3="Tomato"
          // p="Hamburger Restaurant"
        /> */}
        <ProjectCard
          // src={hipsster}
          src={hotel}
          link="https://rivojiddinov-hotel.netlify.app"
          h3="Hotel"
          // p="Glasses Shop"
        />
        <ProjectCard
          // src={hipsster}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4Ota_PXOWC-PXptGfRyPLhph2FLhkt304bse3GpUtDg&s=10"
          link="https://rivojiddinov-cake.netlify.app"
          h3="Cake Shop"
          // p="Glasses Shop"
        />
        {/* <ProjectCard
          src={fitLift}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="FitLift"
          p="Fitness App"
        /> */}
      </div>
    </section>
  );
}

export default Projects;
