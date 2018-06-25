import React from 'react';
import { trancateString } from "./../../utils/helper";

const Trancate = ({ text, limit }) => <div className="description"> {trancateString(text, limit)}</div>

export default Trancate;