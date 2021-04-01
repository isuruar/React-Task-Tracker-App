import PropTypes from 'prop-types'
import Button from './Button'
import {useLocation} from 'react-router-dom'


const Header = ({title,onAdd,showAdd}) => {
    const location = useLocation()
    
    return (
        <div classNa me= 'header'>
            <h1>{title}</h1>
            {location.pathname === '/' && (<Button color = {showAdd ? 'green' : 'darkorange'} text={showAdd ? 'Close' : 'Add'} onClick = {onAdd}/>)}
   
        </div>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

//CSS in JS
// const headingStyle = {
//     color:'red',backgroundColor:'black'
// }





export default Header