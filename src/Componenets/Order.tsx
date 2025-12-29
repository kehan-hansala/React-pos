import React from "react";

function Order() {

    const styleObj:React.CSSProperties={
        marginBottom:'20px'
    }
    const bottomContext:React.CSSProperties ={
        width: "100%",
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between'
    }
    return (
        <>
            <br/>
            <div className="container">
                <div className="row">

                    <div className="col-12 col-sm-6 col-md-3" style={styleObj}>
                        <div className="form-group">
                            <label htmlFor="customerName">Select Customer</label>
                            <select className='form-control' id="customer">
                                <option value="#">Customer 1</option>
                                <option value="#">Customer 2</option>
                            </select>

                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-4" style={styleObj}>
                        <div className="form-group">
                            <label htmlFor="name">Customer Name</label>
                            <input type="text" className='form-control' id='nmae'/>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-4" style={styleObj}>
                        <div className="form-group">
                            <label htmlFor="address">Customer Address</label>
                            <input type="text" className='form-control' id='address'/>
                        </div>
                    </div>

                    <hr/>


                    <div className="row">

                        <div className="col-12 col-sm-6 col-md-3" style={styleObj}>
                            <div className="form-group">
                                <label htmlFor="productName">Select Product</label>
                                <select className='form-control' id="product">
                                    <option value="#">Product 1</option>
                                    <option value="#">Product 2</option>
                                </select>

                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-md-3" style={styleObj}>
                            <div className="form-group">
                                <label htmlFor="ProductDis">Product Description</label>
                                <input type="text" className='form-control' id='Pdescription' disabled/>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-md-2" style={styleObj}>
                            <div className="form-group">
                                <label htmlFor="price">Unit Price</label>
                                <input type="text" className='form-control' id='price' disabled/>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-md-2" style={styleObj}>
                            <div className="form-group">
                                <label htmlFor="qtyOnhand">Qty on Hand</label>
                                <input type="text" className='form-control' id='qtyOnHand' disabled/>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-md-2" style={styleObj}>
                            <div className="form-group">
                                <label htmlFor="qty">QTY</label>
                                <input type="text" className='form-control' id='qty' disabled/>
                            </div>
                        </div>

                    </div>







                </div>

                <br/>
                <div className="row">
                    <div className="col-12">
                        <button  className='btn btn-primary col-12'>Save Order</button>
                    </div>
                </div>
            </div>

            <hr/>

            <div className="row">

                <div className="col-12">
                    <form className='col-12'>
                        <input type="search" className='form-control ' placeholder='Search Order here'/>
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
                            <th>Unit price</th>
                            <th>QTY</th>
                            <th>Total</th>
                            <th>Delete Option</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>#10110</td>
                            <td>Product Nme</td>
                            <td>250.00</td>
                            <td>20</td>
                            <td>20000</td>
                            <td>
                                <button className='btn btn-outline-danger btn-sm'>Delete</button>

                            </td>




                        </tr>
                        </tbody>
                    </table>

                    <br/>

                    <div className="bottom-context" style={bottomContext}>
                        <div className="tottal-outer">
                            <h1>
                                Total : 20000.00
                            </h1>
                        </div>
                        <div className="place-order-button-context">
                            <button className="btn btn-primary">place order</button>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}

export default Order;