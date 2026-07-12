import WorkCard from "@/entities/works/WorkCard";
import { projects } from "../model/data";
import './works.css';

function Works() {
    return (
        <section className="works" id="works">
            <h2 className="works__title">
                Мои <span>работы</span>
            </h2>
            <ul className="works__list">
                {projects.map((project) => (
                    <li key={project.title}>
                        <WorkCard
                            image={project.image}
                            title={project.title}
                            description={project.description}
                            href={project.href}
                            techs={project.techs}
                        />
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Works;