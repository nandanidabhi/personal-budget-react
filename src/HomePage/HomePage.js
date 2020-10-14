import React from 'react';


function HomePage() {
  return (
    <div className="container center">      
            <div className="page-area">
            <div className="input-group">
                <input type="text" className="form-control" placeholder="Search for..."/>
                  <span className="input-group-btn">
                    <button className="btn btn-search" type="button"><i className="fa fa-search fa-fw"></i> Search</button>
                  </span>
            </div>
            <main id="main"/>         
            <div className="text-box">
                <h1>Stay on track</h1>
                <p>
                    Do you know where you are spending your money? If you really stop to track it down,
                    you would get surprised! Proper budget management depends on real data... and this
                    app will help you with that!
                </p>
            </div>
    
            <div className="text-box">
                <h1>Alerts</h1>
                <p>
                    What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
                </p>
            </div>
    
            <div className="text-box">
                <h1>Results</h1>
                <p>
                    People who stick to a financial plan, budgeting every expense, get out of debt faster!
                    Also, they to live happier lives... since they expend without guilt or fear... 
                    because they know it is all good and accounted for.
                </p>
                <a href="https://github.com/nandanidabhi">Read more on github</a>
            </div>
    
            <div className="text-box">
                <h1>Free</h1>
                <p>
                    This app is free!!! And you are the only one holding your data!
                </p>
                <a href="https://github.com/nandanidabhi">Read more on github</a>
            </div>
    
            <div className="text-box">
                <h1>Stay on track</h1>
                <p>
                    Do you know where you are spending your money? If you really stop to track it down,
                    you would get surprised! Proper budget management depends on real data... and this
                    app will help you with that!
                </p>
            </div>
    
            <div className="text-box">
                <h1>Alerts</h1>
                <p> 
                    What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
                </p>
            </div>
    
            <div className="text-box">
                <h1>Results</h1>
                <p>
                    People who stick to a financial plan, budgeting every expense, get out of debt faster!
                    Also, they to live happier lives... since they expend without guilt or fear... 
                    because they know it is all good and accounted for.
                </p>
                <a href="https://github.com/nandanidabhi">Read more on github</a>
            </div>
    
            <div className="text-box">
                <h1>Free</h1>
                <p>
                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-mouse2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M3 5.188C3 2.341 5.22 0 8 0s5 2.342 5 5.188v5.625C13 13.658 10.78 16 8 16s-5-2.342-5-5.188V5.189zm4.5-4.155C5.541 1.289 4 3.035 4 5.188V5.5h3.5V1.033zm1 0V5.5H12v-.313c0-2.152-1.541-3.898-3.5-4.154zM12 6.5H4v4.313C4 13.145 5.81 15 8 15s4-1.855 4-4.188V6.5z"/>
                  </svg>
                    This app is free!!! And you are the only one holding your data!
                </p>
                <a href="https://github.com/nandanidabhi">Read more on github</a>
            </div>

        </div>
     </div>
  );
}

export default HomePage;
