import React, { Component } from 'react';
import {
  Container,
  Flex,
} from './shared';
import { COLORS } from '../constants';
import {
  SOCIAL_MEDIA_LINKS,
  SPONSORS,
} from '../data';
import { FaFacebook } from 'react-icons/fa';

class Footer extends Component {
  renderSubFooter = () => {
    return (
      <div
        style={{
          backgroundColor: COLORS.PRIMARY_1,
        }}
      >
        <Container>
          <ul
            style={{
              alignItems: 'center',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            {SPONSORS.map((sponsor, index) => {
              const {
                href,
                imgUrl,
                alt,
              } = sponsor;
              return (
                <li
                  key={index}
                  style={{
                    margin: 10,
                  }}
                >
                  <a href={href} target="_blank">
                    <img src={imgUrl} alt={alt} width={50} />
                  </a>
                </li>
              )
            })}
          </ul>
        </Container>
      </div>
    )
  }

  renderMainFooter = () => {
    return (
      <div
        style={{
          backgroundColor: COLORS.PRIMARY_1,
        }}
      >
        <Container>
          <ul
            style={{
              alignItems: 'center',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}            
          >
            {SOCIAL_MEDIA_LINKS.map((link, index) => {
              const {
                Icon,
                href,
              } = link;
              return (
                <li
                  key={index}
                  style={{
                    margin: 5,
                  }}
                >
                  <a href={href} target="_blank">
                    <Icon
                      color={COLORS.FONT.LIGHT}
                      size={24}
                    />
                  </a>
                </li>
              )
            })}
          </ul>
        </Container>
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.renderSubFooter()}
        {this.renderMainFooter()}
      </div>
    )
  }
}

export default Footer;
