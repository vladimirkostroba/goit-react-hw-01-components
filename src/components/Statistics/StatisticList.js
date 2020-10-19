import React from 'react';
import PropTypes from 'prop-types';

import Statistic from './Statistic'
import Section from '../section/section';

function StatisticList({stats}){
    return(
        <Section title = "upload list">
       <ul>
           {stats.map(({id,label,percentage}) => (<li>
           <Statistic key={id} label={label} percentage={percentage}/>
           </li>
           ))}
       </ul>
       </Section>
    )
}



StatisticList.propTypes = {
    id: PropTypes.string.isRequired
}


export default StatisticList