import React from 'react';
import {SetupLayer} from './Setup';
import {WritingLayer} from './Writing'

const PageContainer = function(props){
	// Contain page state
	return <React.Fragment>
		<SetupLayer />
		<WritingLayer savedSteps={props.steps || []}/>
	</React.Fragment>
}

export default PageContainer
