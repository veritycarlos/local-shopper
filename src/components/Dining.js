import React from 'react'
import NewBuisness from './NewBuisness'
import BuisnessLink from './BuisnessLink';
import { MyConsumer } from './MyContext';

function Dining() {
    return (
        <MyConsumer>
            { context => {

                const diningList = context.dining.map(d => <BuisnessLink restaurant={d} /> )
                
                return (
                    <div>
                        <h1>Eating Out!</h1>
                        <hr/>
                        {diningList}
                        <br/>
                        <br/>
                        <NewBuisness />
                    </div>
                )
            }}
        </MyConsumer>
    )
}
export default Dining