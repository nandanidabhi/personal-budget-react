import React from 'react';

function Footer() {
  return (
        <div className="bottom"> 
        <div className="center"> 
             <a href="https://www.linkedin.com/in/nandanidabhi/" rel="noopener  noreferrer" title="Go to my LinkedIn" target="_blank">
                    <span className="show-for-sr"><img src="icon icon-linkedin.png" width="30" height="30" alt="Computer Hope"/></span>
                </a>
                &nbsp;
                <a href="https://github.com/nandanidabhi/" rel="noopener  noreferrer" title="Go to my Github" target="_blank">
                    <span className="show-for-sr"><img src="icon icon-github.png" width="30" height="30" alt="Computer Hope"/></span>
                </a>
        </div>  
            &nbsp;
            <div className="cell small-12 fn-icons center" > 
            <img src="profile.jpg" className="img-fluid" alt="Image of the owner"/>
            <div>All rights reserved &copy; Nandani Dabhi</div>
        </div>
        </div>
  );
}

export default Footer;
