import React from 'react';
import { VaineWidget } from '../src';

import { formatData } from '../src/helperFunctions/formatData'
import { formatStats } from '../src/helperFunctions/formatStats'

import props from './data/housing.json'
// import stats from './data/stats.json'

// console.log(props)

export default {
  title: 'Overall',
};

export const ToStorybook = () => (
	<VaineWidget data={props.data}
		  treatments={props.treatments}
		  outcomes={props.outcomes}
		  ignore={props.ignore}
		  latentRepresentation={props.latentRepresentation} />
)

ToStorybook.story = {
  name: 'to Storybook',
};
