import React, { Component } from 'react';
import {
  Container,
  FinePrint,
  Flex,
} from './shared';
import { COLORS } from '../constants';
import {
  SOCIAL_MEDIA_LINKS,
  SPONSORS,
} from '../data';

class Footer extends Component {
  renderSubFooter = () => {
    return (
      <div
        style={{
          backgroundColor: COLORS.PRIMARY_2,
          padding: 5,
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
                    margin: '0 10px',
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
          padding: 10,
        }}
      >
        <Container>
          <Flex
            justifyContent="space-evenly"
          >
            <div>
              <FinePrint light>
                Doug Bush and Patricia Islas
              </FinePrint>
              <FinePrint light>
                &copy; Team Islas {new Date().getFullYear()}
              </FinePrint>
            </div>

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
                        size={24}
                      />
                    </a>
                  </li>
                )
              })}
            </ul>
          </Flex>
        </Container>
      </div>
    )
  }

  render() {
    return (
      <div style={{ color: COLORS.FONT.LIGHT }}>
        {this.renderSubFooter()}
        {this.renderMainFooter()}
      </div>
    )
  }
}

export default Footer;
