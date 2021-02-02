import React from 'react';
import '../style/Li.scss';
function Li(props) {
  function assignParams() {
    props.getLiParams(props.methodName, props.queryUrl, props.queryBody);
  }

  return (
    <li key={props.id}>
      <span className={props.methodName} onClick={assignParams}>
        {props.methodName}
      </span>{' '}
      {props.queryUrl}
    </li>
  );
}

export default Li;
