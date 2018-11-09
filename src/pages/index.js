import React, { Component } from 'react';
import { css } from 'react-emotion';
import YouTube from 'react-youtube';

import Layout from '../components/layout';

import {
  Container,
  Heading1,
} from '../components/shared';

const MODAL_PADDING = 10;

import HomeBg from '../images/home-bg.jpg';
import { COLORS } from '../constants';

const homeLayout = css({
  backgroundImage: `url(${HomeBg})`,
  backgroundSize: 'cover',
  textAlign: 'center',
});

class IndexPage extends Component {
  modalWrapper = React.createRef();

  state = {
    videoOptions: {
      height: null,
      playerVars: {}, // https://developers.google.com/youtube/player_parameters
      width: null,
      marginBottom: 0,
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.setVideoDimensions);
    this.setVideoDimensions();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setVideoDimensions);
  }


  setVideoDimensions = () => {
    const videoContainerWidth = this.modalWrapper.clientWidth;
    const { videoOptions } = this.state;
    const aspectRatio = 9 / 16;
    videoOptions.height = `${(videoContainerWidth * aspectRatio) - MODAL_PADDING * 2}px`;
    videoOptions.width = `${videoContainerWidth - MODAL_PADDING * 2}px`;
    this.setState({ videoOptions });
  }

  render() {
    const { videoOptions } = this.state;
    const videoStyle = css`
      margin-bottom: 0;
      height: ${videoOptions.height};
      width: ${videoOptions.width};
    `;

    return (
      <Layout
      className={homeLayout}
      overlayColor="rgba(0, 0, 0, 0.5)"
    >
      <Container>
        <div>
          <Heading1 light>
            New Album Coming Soon!
          </Heading1>
        </div>
        <div
          ref={el => this.modalWrapper = el}
          style={{
            backgroundColor: 'white',
            padding: '10px',
            margin: '0 auto',
          }}
        >
          <YouTube
            className={videoStyle}
            videoId="Lnul3DwS_bc"
          />
        </div>  
      </Container>
    </Layout>
      )
  }
}

export default IndexPage;
