import React, { useState } from 'react'
import Menu from './Menu'
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import MenuItems from './MenuItems'
import MenuBar from './MenuBar'

const allcatItem=[...new Set(Menu.map((curEle)=>{ return curEle.category})),"all"];

const GalleryMenu = () => {
    const [item, setitem] = useState(Menu);
    const [catItem, setcatItem] = useState(allcatItem)
    
    const fileterItem = (cateItem) => {
        if(cateItem==='all'){setitem(Menu);return;}
        const updateItem = Menu.filter((currEle) => {
            return currEle.category === cateItem;
        })
        setitem(updateItem)
    }

    return (<>
        <h1 className='mt-5 text-center main-heading'>Oreder Your Favourite Dish</h1>
        <hr />


        <MenuBar fileterItem={fileterItem} catItem={catItem}/>
        <MenuItems item={item}/>
    </>
    )
}

export default GalleryMenu