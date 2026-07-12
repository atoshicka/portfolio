import SkillCard from '@/entities/skils/SkillCard';
import { hardSkills, softSkills } from '../model/data';
import './skils.css';

function Skils() {
  return (
    <section className="skills" id="skills">
      <div className="skills__container">
        <div className="skills__column">
          <h2 className="skills__title"><span>Hard</span> skills</h2>
          <ul className="skills__list skills__list--hard">
            {hardSkills.map((skill, index) => (
              <li key={index} className="skill-card-wrapper">
                <SkillCard text={skill} />
              </li>
            ))}
          </ul>
        </div>

        <div className="skills__column">
          <h2 className="skills__title"><span>Soft</span> skills</h2>
          <ul className="skills__list skills__list--soft">
            {softSkills.map((skill, index) => (
              <li key={index} className="skill-card-wrapper">
                <SkillCard text={skill} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skils;