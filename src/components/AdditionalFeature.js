import React from 'react';
import { connect } from 'react-redux';

import { addItem } from '../actions';

const AdditionalFeature = props => {
    const { feature } = props;

    return (
        <li>
            {/* Add an onClick that will let you add a feature to your car */}
            <button onClick={() => props.addItem(feature)} className="button">
                Add
            </button>
            {feature.name} (+{feature.price})
        </li>
    );
};

const mapStateToProps = state => {
    return state;
};

export default connect(
    mapStateToProps,
    { addItem }
)(AdditionalFeature);
