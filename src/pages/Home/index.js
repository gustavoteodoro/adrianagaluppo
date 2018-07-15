import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProjectThumb from '../../molecules/ProjectThumb';

import {
  PortfolioContainer
} from './styles';

class Home extends Component {
  render() {
    const {
      entries,
    } = this.props;
    return (
      <div>
        <PortfolioContainer>
          {entries.map(entry => (
            <ProjectThumb key={entry.sys.id} project={entry.fields} />
          ))
          }
        </PortfolioContainer>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  entries: state.entries,
});

export default connect(mapStateToProps)(Home);