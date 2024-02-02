import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimeLineCard = props => {
  const {projectDetails} = props
  const {
    projectTitle,
    description,
    projectUrl,
    duration,
    imageUrl,
  } = projectDetails
  console.log(imageUrl)

  return (
    <div className="chrono-item-container">
      <img src={imageUrl} className="project-image" alt="project" />
      <div className="header-container">
        <h2 className="project-title">{projectTitle}</h2>
        <div className="duration-container">
          <AiFillCalendar className="calander-icon" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <a
        href={projectUrl}
        target="_blank"
        rel="noreferrer"
        className="anchor-el"
      >
        Visit
      </a>
    </div>
  )
}

export default ProjectTimeLineCard
