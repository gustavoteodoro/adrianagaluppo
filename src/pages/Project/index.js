import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ProjectContainer, ProjectTitle, ProjectDesc, ProjectImage } from './styles';

class Project extends Component {
  render() {
    const {
      match,
      entries,
    } = this.props;

    const currentEntry = entries.find(currentEntry => currentEntry.fields.slug === match.params.projectSlug);

    return (
      <ProjectContainer>
        {currentEntry &&
          <div>
            <ProjectTitle>{currentEntry.fields.title}</ProjectTitle>
            <ProjectImage src={currentEntry.fields.photos[0].fields.file.url} alt={currentEntry.fields.title} key={currentEntry.fields.photos[0].sys.id} />
            {currentEntry.fields.description &&
              <ProjectDesc>{currentEntry.fields.description}</ProjectDesc>
            }
            {currentEntry.fields.photos.slice(1, currentEntry.fields.photos.length).map(photo => (
              <ProjectImage src={photo.fields.file.url} alt={currentEntry.fields.title} key={photo.sys.id} />
            ))}
          </div>
        }
      </ProjectContainer>
    );
  }
}

const mapStateToProps = state => ({
  entries: state.entries,
});

export default connect(mapStateToProps)(Project);