import useWindowsSize from './hooks/useWindowSize'
import {FaLaptop,FaTabletAlt,FaMobileAlt} from 'react-icons/fa'
// then we required the hook to be used to change our state
// 
const Header = ({title}) =>


{

  const {width}=useWindowsSize()
  // useContext allows to use the Data provided by creating context

  
  return (
    <header className='Header'>
        <h1>{title}</h1>

        {width <768 ?<FaMobileAlt />
        
      :width<992 ? <FaTabletAlt/>:
     < FaLaptop />
      
      }
        </header>
     


  )
}

export default Header