import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Icon({icon}) {
  return (
    <FontAwesomeIcon icon={icon} aria-hidden="true"/>
  )
}

export default Icon