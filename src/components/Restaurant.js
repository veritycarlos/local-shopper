import React from 'react'
import { MyConsumer } from './MyContext';

function Restaurant(props) {
    return (
        <MyConsumer>
            { context => {
                const restaurant = context.dining.find((d) => d.id === props.match.params.id )

                return (
                    <div>
                        <h2>{restaurant.buisnessName}</h2>
                        <h5>Owner's Name: {restaurant.ownerOrManager}</h5>
                        <h5>Restaurant email: {restaurant.email}</h5>
                        <hr/>
                    </div>
                )
            }}
        </MyConsumer>
    )
}

export default Restaurant;