import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactMarkdown from 'react-markdown';

import { ProjectContainer, ProjectTitle, ProjectDesc, ProjectImage, ProjectVideo } from './styles';

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
            {currentEntry.fields.photos &&
              <ProjectImage src={currentEntry.fields.photos[0].fields.file.url} alt={currentEntry.fields.title} key={currentEntry.fields.photos[0].sys.id} />
            }
            {currentEntry.fields.video &&
              <ProjectVideo>
                <iframe src={`https://player.vimeo.com/video/${currentEntry.fields.video}?title=0&byline=0&portrait=0`} frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                <script src="https://player.vimeo.com/api/player.js"></script>
              </ProjectVideo>
            }
            {currentEntry.fields.description &&
              <ProjectDesc><ReactMarkdown source={currentEntry.fields.description} /></ProjectDesc>
            }
            {currentEntry.fields.photos &&
              currentEntry.fields.photos.slice(1, currentEntry.fields.photos.length).map(photo => (
                <ProjectImage src={photo.fields.file.url} alt={currentEntry.fields.title} key={photo.sys.id} />
              ))
            }
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