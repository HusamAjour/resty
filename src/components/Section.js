import React from 'react';
import '../style/Section.scss'
function Section(props) {
  return (
    <section className={`section-component ${props.sectionClass}`}>{props.children}</section>
  );
}

export default Section;
