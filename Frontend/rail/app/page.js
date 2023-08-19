import Image from 'next/image'
import styles from './page.module.css'
import Navbar from './components/navbar'

export default function Home() {
  return (
    <>
    <Navbar/>
    <div className='container'>
      <div className='row mt-5'>
        <div className='col-lg-12'>
          <div className='card shadow'>
            <div className='card-body'>
            <div class="d-flex justify-content-between">
              <h3>Thiruvanathapuram Express</h3>
              <div>
                <p>11:55 PM, Sun</p>
                <p>Thiruvanathapuram</p>
              </div>
              <div>
                <p>6:00 AM, Mon</p>
                <p>Banglore</p>
              </div>
            </div>
            <div class="d-flex justify-content-start">
              <div className='card me-2'>
                <div className='card-body'>
                  <div class="d-flex justify-content-between">
                    <h5>Sleeper</h5>
                    <h5>₹ 500</h5>
                  </div>
                  <p>Available: 15</p>
                </div>
              </div>
              <div className='card me-2'>
                <div className='card-body'>
                  <div class="d-flex justify-content-between">
                    <h5>Sleeper</h5>
                    <h5>₹ 500</h5>
                  </div>
                  <p>Available: 15</p>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
