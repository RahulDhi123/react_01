import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from "./components/card.jsx"

function App() {
 return(
<div className="parent">
  <Card img="https://thumbs.dreamstime.com/b/icons-sample-psost-setting-428651105.jpg" company="Amazon"/>
  <Card img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIqBCl92-9ug8ad3PHtsqtNUKg7qhSw-zZBAyfDhu2rQ&s=10" company="Google"/>
  <Card img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx2xp09gxKvFPDzObUGYiX0gaFVIooCYNbi7ZMj_tQEQ&s" company="Uber"/>
  <Card img="https://yt3.googleusercontent.com/btm1_PK-7VRUr9GY2D0UV_2XfbUZPBjghyptjSO1crsfN86HyTYDWPmUbq7JxC3H0Lxe_s067nA=s900-c-k-c0x00ffffff-no-rj" company="Nvidia"/>
  <Card img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyyTpdkQ3X-W9RF4UNmhP80r8w9jZ8NcMEFNP9NDm8wQ&s=10" company="Flipkart"/>
</div>

 )
}

export default App
