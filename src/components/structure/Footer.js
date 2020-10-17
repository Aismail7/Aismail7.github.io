import React from "react";
import { format } from "util";

function Footer() {
  return (
    <footer className="footer has-background-link">
      <div className="content has-text-centered has-text-white">
        <p>   
        <a href="https://github.com/jcoelho93" className="has-text-black">
        <i className="fa fa-envelope"></i><strong> ismail7tng@gmail.com || <i className="fa fa-phone"></i> 0813-1997-2150</strong>
          </a>
        </p>
        <p>  
        Created <i className="fas fa-moon"></i> by{" "}
          <a href="https://github.com/Aismail7" target="_blank" className="has-text-white">
            <strong>Is'mailDev @{new Date().getFullYear()}</strong>
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
