function Customer() {

    return (

        <>
            <div className="container">
                <div className="row">

                    <div className="col-12 col-sm-6 col-md-4">
                        <div className="form-group">
                            <label htmlFor="customerName">Customer Name</label>
                            <input type="text" className='form-control' id='customerName'/>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-4">
                        <div className="form-group">
                            <label htmlFor="customerName">Customer Address</label>
                            <input type="text" className='form-control' id='customerAddress'/>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-4">
                        <div className="form-group">
                            <label htmlFor="customerName">Customer Salary</label>
                            <input type="text" className='form-control' id='customerSalary'/>
                        </div>
                    </div>



                </div>

                <br/>
                <div className="row">
                    <div className="col-12">
                        <button  className='btn btn-primary col-12'>Save Customer</button>
                    </div>
                </div>
            </div>

            <hr/>

            <div className="row">

                <div className="col-12">
                    <form className='col-12'>
                        <input type="search" className='form-control' placeholder='Search Customers here'/>
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
                            <th>Customer Name</th>
                            <th>Address</th>
                            <th>Salary</th>
                            <th>Delete Option</th>
                            <th>Update Option</th>
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

                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </>

    )
}

export default Customer;