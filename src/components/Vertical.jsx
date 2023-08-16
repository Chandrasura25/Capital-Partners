import {  VerticalTimelineElement }  from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import PropTypes from "prop-types";
const Vertical = ({id,title,content, icon}) => {
  return (
    <VerticalTimelineElement className="vertical-timeline-element--work"
    contentStyle={{ background: '#43a5f6', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #43a5f6' }} 
    iconStyle={{ background: '#43a5f6', color: '#fff' }}
    icon={icon}>
      <h3 className="vertical-timeline-element-title">0{id}</h3>
      <h4 className="vertical-timeline-element-subtitle">{title}</h4>
      <p>{content}</p>
    </VerticalTimelineElement>
  )
}
// Add prop validation
Vertical.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
}
export default Vertical