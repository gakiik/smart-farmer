import { Link } from 'react-router-dom'
import farmersPhoto from './assets/pexels-safari-consoler-11196881.jpg'

const Welcome = () => {
    return (
        <>
        <Link to="/dashboard">Dashboard</Link>
            <div className="background-container">
                <div className="container text-center">
                    <img src={farmersPhoto} className="img-fluid background-image" alt="Background" />
                    <div className="overlay">
                        <div className="content">
                            Hi! Farmer
                        </div>
                        <div>
                            <button>Get your analytics</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="d-flex justify-content-between">
                <div class="card">
                    <div class="card-header">
                        Get your temperature today!
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Instant and up to date temperatures for your farm</h5>
                        <p class="card-text">Temperatures to make good decisions for your farm.</p>
                        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                    </div>
                </div>
                <div class="card">
                    <div class="card-header">
                        Get your humidity today!
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Instant and up to date humidity values for your farm</h5>
                        <p class="card-text">Humidity to make good decisions for your farm.</p>
                        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                    </div>
                </div>
                <div class="card">
                    <div class="card-header">
                        Monitor livestock today!
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Keep livestock in their grazing areas</h5>
                        <p class="card-text">Moreover count your livestock today.</p>
                        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                    </div>
                </div>
                <div class="card">
                    <div class="card-header">
                        Monitor light intensity today!
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Save on power in your farm by saving on energy</h5>
                        <p class="card-text">Save energy today.</p>
                        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Welcome
