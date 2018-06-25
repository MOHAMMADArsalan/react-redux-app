import React from 'react';

const LinkTag = ({ link, text, target = "_blank" }) => <a href={link} target={target} > {text} </a>
export default LinkTag;