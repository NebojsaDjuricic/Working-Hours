import React from 'react';

const project = (props) => (
   <tr>
     <td>{props.id}</td>
     <td>{props.title}</td>
     <td>{props.developers}</td>
     <td>{props.minutes}</td>
   </tr>


);

export default project;
