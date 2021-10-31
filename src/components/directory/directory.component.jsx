import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from './directory.selectors';
import './styles.scss';

import MenuItem from '../menu-item/menu-item.component';


const Directory = ({ sections }) => {
  return (
      <div className='directory-menu'>
          {sections.map(({id, ...otherSetionProps}) => (
              <MenuItem key={id} {...otherSetionProps}/>
          ))}
      </div>
  )   
}


const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);