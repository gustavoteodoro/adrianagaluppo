import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ProjectContainer, ProjectTitle, ProjectDesc, ProjectImage } from './styles';

class Project extends Component {
  componentWillMount() {
    const {
      match,
      entries,
    } = this.props;
  }
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
            <ProjectDesc>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent efficitur sem sit amet condimentum auctor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean cursus velit felis, vel feugiat nunc ultrices eget. Maecenas lobortis ex eu fringilla egestas. Nam rhoncus eget nunc et porta. Maecenas accumsan non mauris id sodales.</ProjectDesc>
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