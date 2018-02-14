import React from 'react';
import _ from 'lodash';
import Lifecycle from './Lifecycle';

const LifecycleList = ({lifecycle, toggle}) => {
    let lifecycleSorted = _.sortBy(lifecycle, 'done');
    let items = lifecycleSorted.map( (lifecycle) => 
    <Lifecycle lifecycle={lifecycle} key={lifecycle.text} toggle={toggle}/>
    )
    console.log('lifesort', lifecycleSorted)
    console.log('lifecycle items', items)
    return(
        <ul>
            {items}
        </ul>
    )
}
export default LifecycleList;