import './skill-card-styles.css';

interface SkillCardProps {
    text: string;
}

function SkillCard({ text }: SkillCardProps) {
  return (
    <div className="skill-card">
      <div className="skill-card__dot"></div>
      <p className="skill-card__text">{text}</p>
    </div>
  );
}

export default SkillCard;