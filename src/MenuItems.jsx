import React from 'react'

const MenuItems = ({item}) => {
  return (
    <>
        <div className='menu-items container-fluid mt-5'>
            <div className="row">
                <div className="col-11 mx-auto">
                    <div className="row my-5">


                        {item.map((elem,ind) => {
                            const { id, name, image, discreption, price } = elem;
                            return (

                                <div className="item1 col-12 col-md-6 col-lg-6 col-xl-4 gy-4" key={ind} style={{width:"60vh"}}>
                                    <div className="row item-inside" >
                                        <div className="col-12 col-md-12 col-lg-4 img-div">
                                            <img src={image} alt={name} className='img-fluid' />
                                        </div>

                                        <div className="col-12 col-md-12 col-lg-8">
                                            <div className="main-title pt-4 pb-4">
                                                <h1>{name}</h1>
                                                <p>{discreption}</p>
                                            </div>
                                            <div className='menu-price-book'>
                                                <div className="price-book-divide d-flex justify-content-between">
                                                    <h2>price:{price}</h2>
                                                    <a href="">
                                                        <button className='btn btn-primary'>order Now</button>
                                                    </a>
                                                </div>
                                                <p>*price very on selected item</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            )
                        })}


                    </div>
                </div>
            </div>


        </div>
    </>
  )
}

export default MenuItems