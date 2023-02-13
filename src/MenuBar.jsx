import React from 'react'

const MenuBar = ({fileterItem,catItem}) => {
  return (<>
    
    <div className='menu-tabs container'>
            <div className='menu-tab d-flex justify-content-around'>

            {
                catItem.map((curEle,ind)=>{
                    return <button className='btn btn-warning' key={ind} onClick={() => fileterItem(curEle)}> {curEle}</button>

                 })
            }
                {/* <button className='btn btn-warning' onClick={() => fileterItem("lunch")}> lunch</button>
                <button className='btn btn-warning' onClick={() => fileterItem("evening")}> evening</button>
                <button className='btn btn-warning' onClick={() => fileterItem("dinner")}> dinner</button>
                <button className='btn btn-warning' onClick={() => setitem(Menu)}> all</button> */}
            </div>
        </div>
  </>
  )
}

export default MenuBar