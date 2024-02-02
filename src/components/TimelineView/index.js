import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimeLineCard from '../ProjectTimelineCard'

import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  const items = timelineItemsList

  return (
    <div className="app-container">
      <h2 className="ccbp-heading">
        MY JOURNEY OF <br /> CCBP 4.0
      </h2>

      <div className="chrono-container">
        <Chrono
          mode="VERTICAL_ALTERNATING"
          items={items}
          theme={{
            primary: '#2b237c',
            secondary: 'grey',
            cardBgColor: '#ffffff',
            cardForeColor: '#1e293b',
            titleColor: '#0967d2',
          }}
        >
          {timelineItemsList.map(each => {
            if (each.categoryId === 'COURSE') {
              return (
                <CourseTimelineCard courseItemDetails={each} key={each.id} />
              )
            }
            return <ProjectTimeLineCard projectDetails={each} key={each.id} />
          })}
        </Chrono>
      </div>
    </div>
  )
}

export default TimelineView
