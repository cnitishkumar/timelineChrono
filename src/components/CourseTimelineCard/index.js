// import {AiFillCalendar} from 'react-icons/ai'
import {AiFillClockCircle} from 'react-icons/ai'

import './index.css'

const CourseTimelineCard = courseDetails => {
  const {courseItemDetails} = courseDetails
  const {courseTitle, description, duration, tagsList} = courseItemDetails

  return (
    <div className="chrono-item-continer">
      <div className="header-container">
        <h1 className="course-title">{courseTitle}</h1>
        <div className="duration-container">
          <AiFillClockCircle className="clock-icon" />
          <p className="duration">{duration}</p>
        </div>
      </div>

      <p className="description">{description}</p>

      <ul className="ul-el">
        {tagsList.map(each => (
          <li key={each.id} className="tags-list-item">
            <p className="tags-item">{each.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
