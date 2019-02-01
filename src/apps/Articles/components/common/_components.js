import React from 'react';
import {onButtonPressed} from '../../actions/common/common';

const Button = (link, call, type, value, article_body, slug, le_props) =>{
        return(
          <li className="publish-nav-item">
            <a
              href={link} onClick={()=>{
              onButtonPressed(call, article_body, slug, le_props);
              }} className={type}>
              { value }
            </a>
          </li>
          );
    };

export default Button;
