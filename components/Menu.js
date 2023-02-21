import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router';
const menuItems=[
  {
    id:'home',
    text:'Home'
  },
  {
    id:'about',
    text:'About US'
  },
  {
    id:'services',
    text:'Services'
  },
  {
    id:'clients',
    text:'Clients'
  },
  {
    id:'career',
    text:'Career'
  },
  {
    id:'contact',
    text:'Contact US'
  }
]
export const Menu = () => {
  const router = useRouter()
  const [isMobileView,setIsMobileView]=useState(false)
  const [left,setLeft]=useState(-150)
  const [activeMenu,setActiveMenu]=useState(router.pathname.slice(1) || 'home')
  useEffect(()=>{
    setIsMobileView(window.document.body.offsetWidth < 600 ? true:false)
    let timeout;
    window.addEventListener('resize',()=>{
       clearTimeout(timeout)
       timeout=setTimeout(()=>{
            let _width=window.document.body.offsetWidth
            setIsMobileView(_width>600?false:true)
            setLeft(-150)
       },500)
    })
  },[])
  const fnMobileMenuBtnClick=()=>{
    setLeft(left == 0 ? -150 : 0)
  }
  const fnMobileMenuItemClick=(eve)=>{
    debugger;
    setLeft(-150)
    setActiveMenu(eve.target.id)
    
  }
  return (
    <div>
     {isMobileView &&  <img onClick={fnMobileMenuBtnClick} className='mobile-menu-btn' src="mobile-menu-btn.jpg" />}
    <ul onClick={fnMobileMenuItemClick} style={isMobileView ? {left:left}:{}} className={`${isMobileView ? 'mobile-menu' : 'menu'}`}>
      {
        menuItems.map(({id,text},index)=>{
          return  <li key={index} className={`${activeMenu==id &&  'active-menu'}`} >
          <Link id={id} href={`/${id}`}>{text}</Link>
        </li>
        })
      }
    </ul>
    </div>
  )
}
