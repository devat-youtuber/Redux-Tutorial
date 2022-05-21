import React from 'react'
import Dark from '../images/dark1.png'
import Light from '../images/light1.png'
import { useDispatch, useSelector } from 'react-redux'
import { toggle_theme } from '../redux/toolkits/themeSlice'

const Theme = () => {
  const { dark } = useSelector(state => state.themeState)
  const dispatch = useDispatch()

  return (
    <div style={{padding: '10px 20px 0', cursor: 'pointer'}}>
      {
        dark
        ? <img src={Dark} alt="Dark" width={50}
        onClick={() => dispatch(toggle_theme(false))} />

        : <img src={Light} alt="Light" width={50}
        onClick={() => dispatch(toggle_theme(true))} />
      }
    </div>
  )
}

export default Theme