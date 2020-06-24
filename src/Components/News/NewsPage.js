import React from 'react'
import  '../News/StyleNews.css'
const Newspage = props =>{
    return(
        <div>
           
                <div className="container">
                <div className="col-md-8">
                <div className="card mt-5">
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div className="d-flex justify-content-between">
                            <span className="card-text">By David Williamson</span>
                            <span className="card-text">16:45</span>
                        </div>
                    </div>
                </div>
            
                </div>
            </div>
        </div>
    );
}
export default Newspage