function Product() {

    const styleObj:React.CSSProperties={
        marginBottom:'20px'
    }
    return(


        <>
            <div className="container">
                <div className="row">

                    <div className="col-12 col-sm-6 col-md-4" style={styleObj}>
                        <div className="form-group">
                            <label htmlFor="customerName">Product  Name</label>
                            <input type="text" className='form-control' id='ProductName'/>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-4" style={styleObj}>
                        <div className="form-group">
                            <label htmlFor="price">Unit Price</label>
                            <input type="text" className='form-control' id='price'/>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-4" style={styleObj}>
                        <div className="form-group">
                            <label htmlFor="qty">Qty on Hand</label>
                            <input type="text" className='form-control' id='qty'/>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-4" style={styleObj}>
                        <div className="form-group">
                            <label htmlFor="image">Product image</label>
                            <input type="text" className='form-control' id='image'/>
                        </div>
                    </div>

                    <div className="col-12">
                        <div className="form-group">
                            <label htmlFor="description">Product description</label>
                            <input type="text" className='form-control' id='description'/>
                        </div>
                    </div>





                </div>

                <br/>
                <div className="row">
                    <div className="col-12">
                        <button  className='btn btn-primary col-12'>Save Product</button>
                    </div>
                </div>
            </div>

            <hr/>

            <div className="row">

                <div className="col-12">
                    <form className='col-12'>
                        <input type="search" className='form-control' placeholder='Search Product here'/>
                    </form>
                </div>

            </div>

            <br/>
            <div className="row">
                <div className="col-12">
                    <table className='table table-hover table-bordered'>
                        <thead>
                        <tr>
                            <th>#Id</th>
                            <th>Product Name</th>
                            <th>QTY</th>
                            <th>Unit price</th>
                            <th>Delete Option</th>
                            <th>Update Option</th>
                            <th>See more</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>#10110</td>
                            <td>nimal bandara</td>
                            <td>colombo</td>
                            <td>25000</td>
                            <td>
                                <button className='btn btn-outline-warning btn-sm'>Update</button>

                            </td>

                            <td>
                                <button className='btn btn-outline-danger btn-sm'>Delete</button>

                            </td>

                            <td>
                                <button className='btn btn-outline-info btn-sm'>View</button>

                            </td>

                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </>

        )

}

export default Product;