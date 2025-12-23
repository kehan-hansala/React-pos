
import DefaultCard from "./Crads/DefaultCrad.tsx";

function Home() {


    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <DefaultCard/>
                    </div>

                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <DefaultCard/>
                    </div>

                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <DefaultCard/>
                    </div>

                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <DefaultCard/>
                    </div>


                </div>
            </div>


        </>
    )

}

export default Home;