import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { ProjectThumbContainer, ProjectTitle, ProjectThumbImage } from './styles';

class ProjectThumb extends Component {
  render() {
    const {
      project,
    } = this.props;
    return (
      <ProjectThumbContainer>        
        <Link to={`/portfolio/${project.slug}`}>
          <ProjectThumbImage src={project.photos[0].fields.file.url} alt={project.title} />
          <ProjectTitle>{project.title}</ProjectTitle>
        </Link>
      </ProjectThumbContainer>
    );
  }
}

export default ProjectThumb;