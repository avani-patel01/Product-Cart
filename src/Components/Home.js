import Product from "./Product"


function Home() {

  return (
    <div>
      <div className="bg-img">
        <div className="d-flex justify-content-center align-items-center h-100 w-100 p-sm-5 p-3">
          <div className={`text-white w-75 me-auto ps-md-5 ps-0`}>
            <p className="after d-inline-block pe-4">MEET CONSULTING</p>
            <h1 className="font fw-bold">Financial Analysis Developing Meeting.</h1>
            <button className="btn-clr mt-4">BUY DOOB NOW</button>
          </div>
        </div>
      </div>

      <Product />

      <div className="py-5 container">
        <div className="my-5 text-center">
          <h1>Services</h1>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12 pt-lg-0 pt-4 fade-animation fadein-1-1">
            <div className={`card p-2 h-100`}>
              <div className="card-body">
                <div>
                  <span className="material-symbols-outlined fs-1" style={{
                    color:
                      "#059dff"
                  }}>show_chart</span>
                </div>
                <h5 className={`title-text py-3`}>Awarded Design</h5>
                <p className='text-dark'>There are many variations variations of passages of Lorem Ipsum
                  available, but the majority have suffered.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 pt-lg-0 pt-4 fade-animation fadein-1-2">
            <div className={`card p-2  h-100`}>
              <div className="card-body">
                <div>
                  <span className="material-symbols-outlined fs-1" style={{
                    color:
                      "#fb5343"
                  }}>cast_connected</span>
                </div>
                <h5 className={`title-text py-3 `}>Design & Creative</h5>
                <p className='text-dark'>Passages there are many variations variations of of Lorem Ipsum available, but the majority have suffered.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 pt-lg-0 pt-4 fade-animation fadein-1-3">
            <div className={`card p-2  h-100`}>
              <div className="card-body">
                <div>
                  <span className="material-symbols-outlined fs-1" style={{
                    color:
                      "#6045c9"
                  }}>dataset</span>
                </div>
                <h5 className={`title-text py-3`}>App Development</h5>
                <p className='text-dark'>Variations There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home