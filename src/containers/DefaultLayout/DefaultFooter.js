import React, { Component } from 'react';
import PropTypes from 'prop-types';

import bosch_banner from '../../assets/img/Bosch img/bosch_supergraphic.svg'

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultFooter extends Component {
  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        {/* <div className="below_bosch"></div>*/}
        {/* <img src={bosch_banner} alt="bosch_banner" height="20" width="null"/> */}
        <span><a href="http://localhost:3000">Robert Bosch</a> &copy; (South East Asia) Pte Ltd.</span>
        <span className="ml-auto">Powered by <a href="https://coreui.io/react">CoreUI for React</a></span>

      </React.Fragment>
    );
  }
}

DefaultFooter.propTypes = propTypes;
DefaultFooter.defaultProps = defaultProps;

export default DefaultFooter;
