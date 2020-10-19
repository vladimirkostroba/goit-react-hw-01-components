import React from 'react';
import PropTypes from 'prop-types';

const Statistic = ({ label, percentage }) => (
    <>
        <span >{label}</span>
        <span >{percentage}%</span>
    </>
);

Statistic.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
};

export default Statistic