import React from 'react'
import { HOC } from './HOC'


let menu = <>
<ul>
    <li>Home</li>
    <li>About</li>
</ul>
</>
const Home = () => {
  return (
    <div id='Home'>Home</div>
  )
}

export default HOC(Home , menu)