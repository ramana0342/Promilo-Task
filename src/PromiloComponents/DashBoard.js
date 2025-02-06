
import React from 'react'
import { useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend); 


const Navbar = () => {
  return ( 
   <nav className="navbar navbar-expand-lg  navbar-light bg-white shadow-sm px-2">
   <div className='container-fluid'>
   <a className="navbar-brand" href="#"><h3>OQFY</h3></a>
   <button
     className="navbar-toggler"
     type="button"
     data-bs-toggle="collapse"
     data-bs-target="#navbarSupportedContent"
     aria-controls="navbarSupportedContent"
     aria-expanded="false"
     aria-label="Toggle navigation"
   >
     <span className="navbar-toggler-icon"></span>
   </button>
   <div className="collapse navbar-collapse" id="navbarSupportedContent">
     <ul className="navbar-nav me-auto">
       <li className="nav-item">
         <a className="nav-link dropdown-toggle" href="#">Services</a>
       </li>
       <li className="nav-item">
          <a className="nav-link" href="#">User Management</a>
       </li>
       <li className="nav-item">
         <a className="nav-link" href="#">My Orders</a>
       </li>
       <li className="nav-item">
         <a className="nav-link" href="#">Reports</a>
       </li>
       <li className="nav-item">
         <a className="nav-link" href="#">Stamp inventory</a>
       </li>
       <li className="nav-item">
         <a className="nav-link" href="#"> Bar codes</a>
       </li>
       <li className="nav-item">
         <a className="nav-link" href="#" style={{fontWeight:"lighter"}}> invoice</a>
       </li>
       <li className="nav-item d-flex justify-content-center align-items-center">
         <a className="nav-link commingSoon" href="#" > Coming Soon </a>
       </li>
     </ul>
     <div className="d-flex flex-column flex-lg-row  flex-md-row flex-md-column align-items-start align-md-items-center">
       <button className="btn position-relative me-3">
         <i className="bi bi-bell" style={{fontSize:"20px"}}></i>
         <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"> 2</span>
       </button>
       <div className="d-flex align-items-center userInfo">
         <span className="me-2 dropdown-toggle userName">Michael Smith</span>
         <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center custom-circle"> M </div>
       </div>
     </div>
   </div>
   </div>
 </nav>
         )
}

const UserWelcomeCard = () => {
  return(
  <div className="card shadow-sm  col-12 col-sm-6 col-lg-12 col-md-12 ">
  <div className="card-body">
    <h5 className="card-title">
      👋 Welcome back, <span className="text-primary">Michael</span>
    </h5>
    <p className="card-text text-muted">25 May, 2023 - Tuesday</p>
  </div>
</div>
)
}

const UserWalletCard = () => {
  return(
  <div className="card shadow-sm d-flex flex-row">
    <div className="card-body">
      <h5 className="card-title mb-2 fs-10">My Wallet</h5>
      <h1 className="card-text fs-10 fw-bold mb-0 ">₹ 2,50,000</h1>
      <p className="card-text text-muted mt-0 mb-1">Current Balance</p>
      <p className="text-muted mb-1">
        <span className='fw-bold'>Running low?<a href="#" className="text-primary">Notify admin</a> now</span> 
      </p>
    </div>
    <i class="fa-solid fa-wallet"></i>
  </div>
)
}

const UserPendingActionCard = ()=>{
    return(
  <div class="card shadow-sm mt-0  p-4 overflow-auto h-75  flex-grow-1 overflow-auto " >
    <h5>Pending Actions</h5>  
    <div class="list-group"  style={{ maxHeight: "350px", overflowY: "auto" }}>
      <a href="#" class="list-group-item list-group-item-action" >
        <div class="d-flex justify-content-between">
          <span class="badge badge-primary text-dark">#trd35468</span>
          <span>10 days left</span>
        </div>
        <p >2 files are waiting to be uploaded</p>
      </a>
      <a href="#" class="list-group-item list-group-item-action">
        <div class="d-flex justify-content-between">
          <span class="badge badge-primary text-dark">#33255577</span>
          <span>10 days left</span>
        </div>
        <p>2 files are waiting to be uploaded</p>
      </a>
      <a href="#" class="list-group-item list-group-item-action  text-muted">
        <div class="d-flex justify-content-between">
          <span class="badge badge-primary text-dark text-muted">#76298347</span>
          <span>10 days ago</span>
        </div>
        <p>2 files are waiting to be uploaded</p>
      </a>
      <a href="#" class="list-group-item list-group-item-action  text-muted   ">
        <div class="d-flex justify-content-between">
          <span class="badge badge-secondary text-dark text-muted">#65873428</span>
          <span>10 days ago</span>
        </div>
        <p>2 files are waiting to be uploaded</p>
      </a>
      <a href="#" class="list-group-item list-group-item-action  text-muted   ">
        <div class="d-flex justify-content-between">
          <span class="badge badge-secondary text-dark text-muted">#65873428</span>
          <span>10 days ago</span>
        </div>
        <p>2 files are waiting to be uploaded</p>
      </a>
      <a href="#" class="list-group-item list-group-item-action  text-muted   ">
        <div class="d-flex justify-content-between">
          <span class="badge badge-secondary text-dark text-muted">#65873428</span>
          <span>10 days ago</span>
        </div>
        <p>2 files are waiting to be uploaded</p>
      </a>
    </div>
  </div>
     )
}

const FrequentlyUsedCards = () =>{
   return (
  <div className="card shadow-sm border rounded shadow-sm p-3  col-sm col-12">
  <h5 className="fw-bold mb-3">Frequently Used</h5>
  <div className="row g-3">
    {[{title:"Contract Execution Upload",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"},{title:"E-Stamp Services",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor .. ame"},{title: "E-Sign Services",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"}].map((card, index) => (
      <div className="col-md-4" key={index}>
        <div className="card border border-success-subtle rounded shadow-sm h-100">
          <div className="card-body position-relative">
            <h6 className="card-title fw-bold">{card.title}</h6>
            <p className="card-text text-muted  lh-1">
              {card.content}
            </p>
            <a  href="#" className="text-primary fw-bold p-0 m-0 " style={{position:"absolute",bottom:"10px"}}>
              Get started &gt;&gt;
            </a>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
)
}

const Options = ()=>{
  return (
  <div className="container mb-0">
    <div className="row">
     
      <div className="col-12 col-md-auto m-0 p-0">
        <select className="form-select customBranchSelect">
          <option selected>All branches</option>
          <option value="1">Branch 1</option>
          <option value="2">Branch 2</option>
          <option value="3">Branch 3</option>
        </select>
      </div>
  
   
      <div className="col-12 col-md d-flex flex-wrap justify-content-md-end gap-2 m-0 p-0">
      
        <div className="col-12 col-md-auto" >
          <select className="form-select customSelect2">
            <option selected>Custom range</option>
            <option value="1">Last 7 days</option>
            <option value="2">Last 30 days</option>
            <option value="3">Last Year</option>
          </select>
        </div>
  
       
        <div className="col-12 col-md-auto"> 
          <input type="month" className="form-control customSelect2" value="2020-03" />
        </div>

      
      </div>
      
    </div>
  </div>
  
 )
}

const OrderDetailsCards = () => {
  return  (
  <div className="card shadow-sm mb-4 ">
  <div className="card-body">
    <div className="d-flex justify-content-between align-items-center">
      <h5 className="card-title">Order Details</h5>
      <a href="#" className="text-primary fw-bold">View All</a>
    </div>
    <div className="row  text-center mt-1">
      <div className="col-12 col-md p-1">
        <div className="p-2   rounded bg-light-purple bg-body-secondary">
          <div>
          <h3 className="fw-bold text-dark text-start">18</h3>
          <p className="text-muted mb-1">Total Orders</p>
          <small className="text-success">+2.4%</small>
          </div>
          <i class="bi bi-eye-fill orderImgs"></i>
        </div>
      </div>
      <div className="col-12 col-md p-1">
        <div className="p-2 rounded bg-light-purple bg-body-secondary">
          <div>
          <h3 className="fw-bold text-dark text-start">10</h3>
          <p className="text-muted mb-1">In Progress</p>
          <small className="text-success">+2.4%</small>
          </div>
          <i class="bi bi-clock-fill orderImgs"></i>
        </div>
      </div>
      <div className="col-12 col-md p-1">
        <div className="p-2  rounded bg-light-purple bg-body-secondary">
          <div>
          <h3 className="fw-bold text-dark text-start">5</h3>
          <p className="text-muted mb-1">Completed Orders</p>
          <small className="text-success">+2.4%</small>
        </div>
        <i class="bi bi-bag-check-fill orderImgs"></i>
        </div>
      </div>
      <div className="col-12 col-md p-1">
        <div className="p-2 rounded bg-light-purple bg-body-secondary">
          <div>
          <h3 className="fw-bold text-dark text-start">3</h3>
          <p className="text-muted mb-1">Cancelled Orders</p>
          <small className="text-danger">+2.4%</small>
          </div>
          <i class="bi bi-x-square-fill orderImgs"></i>
        </div>
      </div>
    </div>
  </div>
</div>
)
}

const ChartCards = () => {
  const [signData, setSignData] = useState({
    labels: ['Initiated', 'Pending', 'Signed', 'Expired'],
    datasets: [
      {
        label: 'E-Sign',
        data: [30, 20, 15, 10 ],
        backgroundColor: ['#9370DB', '#E066FF', '#6A287E', '#D1C4E9'],
        borderWidth: 5,
      },
    ],
  });

  const [stampData, setStampData] = useState({
    labels: ['Initiated', 'Pending', 'Signed', 'Expired'],
    datasets: [
      {
        label: 'E-Stamp',
        data: [25, 18, 12, 8],
        backgroundColor: ['#9370DB', '#E066FF', '#6A287E', '#D1C4E9'],
        borderWidth: 5,
      },
    ],
  });

  return (
    <div className="row g-3 ">
    {['E-Sign Count', 'E-Stamp Count'].map((title, index) => (
      <div className="col-lg-6 col-sm-12 mt-1" key={index}>
        <div className="card shadow-sm">
          <div className="card-body p-3 d-flex flex-column align-items-cente">
        
            <h5 className="card-title">{title}</h5>
  
           
            <div className="chart-container" style={{ width: '100%',maxWidth: '200px' }} >
              <Doughnut  
                data={index === 0 ? signData : stampData}
                options={{
                  plugins: {
                    legend: {
                      position: 'left',
                      labels: {
                        usePointStyle: true, 
                        padding: 10,
                        generateLabels: (chart) => {
                       
                          return chart.data.labels.map((label, i) => {
                            return {
                              text: label,
                              fillStyle: chart.data.datasets[0].backgroundColor[i], 
                              pointStyle: 'rect', 
                               lineWidth: 0,
                              
                            };
                          });
                        },
                      },
                    },
                    title: {
                      display: true,
                      text: `Chart for ${title}`,
                      position: 'right',
                     
                    },
                  },
                 
                }}
              />
            </div>

          </div>
        </div>
      </div>
    ))}
  </div>
  
  );
};



function DashBoard() {

  return (<>

<div className="bg-light min-vh-100 d-flex flex-column">
  <header>
     <Navbar/>
  </header>
  <main className='container-fluid px-3 py-3 flex-grow-1'>
  <div className="row g-3">
  <div className="col-12 col-lg-3 d-flex flex-column gap-2">
        <UserWelcomeCard />
        <UserWalletCard/>
        <UserPendingActionCard/>
      </div>

      <div className="col-12 col-lg-9">
        <div className="row g-3">
          <div className="col-12">
              <FrequentlyUsedCards/>
          </div>
          <div className="col-12">
            <Options />
          </div>
          <div className="col-12">
            <OrderDetailsCards />
          </div>
          <div className="col-12 mt-0">
            <ChartCards/>
          </div>
        </div>
      </div>


    </div>

  </main>
   
    
     
</div>

  </>)
}

export default DashBoard