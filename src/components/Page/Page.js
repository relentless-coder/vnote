import React from 'react';
import { PageLayer } from './PageLayer';
import { WritingLayer } from './WritingLayer';
import './index.css';

const Page = function(){
   
	return <div className="page-container"><PageLayer /><WritingLayer/></div>
}

export {Page};
