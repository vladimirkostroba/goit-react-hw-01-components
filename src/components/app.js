import React from 'react';
import Section from './section/section';
import Profile from './Profile/profile';
import StatisticList from './Statistics/StatisticList';

import user from './Profile/user.json';
import statisticalData from './Statistics/statistical-data.json';




function App() {
    return(
        <>
        <Section>
            <Profile {...user}/>
            
        </Section>

        <Section>
            
            <StatisticList title="Upload stats" stats={statisticalData} />
        </Section>
            
        </>
    )
}

export default App