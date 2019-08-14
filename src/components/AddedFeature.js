import React from 'react';
import { connect } from 'react-redux';

import { removeItem } from '../actions';

const AddedFeature = props => {
    const { feature } = props;

    return (
        <li>
            {/* Add an onClick to run a function to remove a feature */}
            <button onClick={() => props.removeItem(feature)} className="button">
                X
            </button>
            {feature.name}
        </li>
    );
};

const mapStateToProps = state => {
    return state;
};

export default connect(
    mapStateToProps,
    { removeItem }
)(AddedFeature);
