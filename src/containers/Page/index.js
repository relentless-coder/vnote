import React from 'react';
import {SetupLayer} from './Setup';
import {WritingLayer} from './Writing'

const PageContainer = function(){
	// Contain page state
	return <React.Fragment>
		<SetupLayer />
		<WritingLayer />
	</React.Fragment>
}

export default PageContainer