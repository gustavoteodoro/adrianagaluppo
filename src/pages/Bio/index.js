import React, { Component } from 'react';

import { BioContainer, BioText } from './styles';

class Bio extends Component {
  render() {
    return (
      <BioContainer>
        <BioText>
          Adriana Galuppo - Minas Gerais, Brasil
          <p>Natural de Belo Horizonte, onde vive atualmente. Formou-se em filosofia e cursa o mestrado
          em arquitetura pela UFMG. Estudou fotografia no International Centre of Photography/ICP e
          edição de vídeo na School of Visual Arts/SVA em Nova York. Colaborou para várias publicações
          entre elas: Piseagrama, Muse, Jornal O Tempo e o livro Atlas Ambulante, além de catálogos e
          livros de artistas. Atuou como educadora em projetos sociais nacionais e internacionais entre
          2005 e 2017. Selecionada para a exposição Estética do Invisivel no evento Corpos Visiveis em
          2018 em exposições coletivas itinerantes (Circo Voador e Fundição Progresso), diretora de
          imagens e co-criadora e do espetáculo de dança Magnolia com Ana Virginia Guimarães
          Alvares, vencedor de melhor cenografia no prêmio Sinparc 2018, finalista do prêmio Conrado
          Wessel em 2015, selecionada para a segunda edição da Revista Ensaio Fotográfico 2015,
          exposição coletiva e individual em Tiradentes durante o Festival Foto em Pauta em 2017,
          fotógrafa convidada da exposição no veiculo-galeria, integrante do projeto de intervenção
          urbana ROTATIVOS na Fiat Mostra Brasil em São Paulo em 2006.</p>
          <p>Biografias imaginárias, gênero e a vida e ocupação dos centros urbanos são o foco principal de
          sua pesquisa.</p>
        </BioText>
      </BioContainer>
    );
  }
}

export default Bio;