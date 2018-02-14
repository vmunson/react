import React from 'react';
import _ from 'lodash';
import Concept from './Concept';

const ConceptList = ({concepts, toggle}) => {
    let conceptsSorted = _.sortBy(concepts, 'done');
    let items = conceptsSorted.map( (concept) => 
    <Concept concept={concept} key={concept.text} toggle={toggle}/>
    )
    console.log('csort', conceptsSorted)
    console.log('concept items',items)
    return(
        <ul>
            {items}
        </ul>
    )
}
export default ConceptList;