"use client";
import { useEffect, useState } from 'react';
import Navbar from './components/navbar'

const Home = () => {

  const [trainInfo, setTrainInfo] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const query = await fetch(`http://127.0.0.1:8000/train/trains`);
      const data = await query.json();
      console.log(data);
      setTrainInfo(data)
    }
    getData();
  }, []);

  return (
    <>
      <Navbar />
      <div className='container'>
        <div className='row mt-5'>
          <div className='col-lg-12'>
            <div className='card shadow mb-3'>
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
                        <h5 className='me-2'>Sleeper</h5>
                        <h5>₹500</h5>
                      </div>
                      <p>Available: 15</p>
                    </div>
                  </div>
                  <div className='card me-2'>
                    <div className='card-body'>
                      <div class="d-flex justify-content-between">
                        <h5 className='me-2'>AC</h5>
                        <h5>₹1500</h5>
                      </div>
                      <p>Available: 15</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='card shadow mb-3'>
              <div className='card-body'>
                <div class="d-flex justify-content-between">
                  <h3>Kanyakumari Express</h3>
                  <div>
                    <p>11:55 PM, Sun</p>
                    <p>Thiruvanathapuram</p>
                  </div>
                  <div>
                    <p>7:00 AM, Mon</p>
                    <p>Kanyakumari</p>
                  </div>
                </div>
                <div class="d-flex justify-content-start">
                  <div className='card me-2'>
                    <div className='card-body'>
                      <div class="d-flex justify-content-between">
                        <h5 className='me-2'>Sleeper</h5>
                        <h5>₹500</h5>
                      </div>
                      <p>Available: 30</p>
                    </div>
                  </div>
                  <div className='card me-2'>
                    <div className='card-body'>
                      <div class="d-flex justify-content-between">
                        <h5 className='me-2'>AC</h5>
                        <h5>₹1500</h5>
                      </div>
                      <p>Available: 18</p>
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

export default Home