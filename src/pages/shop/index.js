import React from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  List,
  Typography,
} from '@mui/material';
import { Link } from 'gatsby';

import Layout from '../../components/layout';
import { Container, Flex } from '../../components/shared';
import MasterHandsImage from '../../images/book_covers/master_hands.jpg';
import OpeningStatementImage from '../../images/book_covers/opening_statement.jpg';
import MomentumImage from '../../images/book_covers/momentum.jpg';
import SuperHandsImage from '../../images/book_covers/super_hands.jpg';

import {
  MASTER_HANDS_INTRO,
  MOMENTUM_INTRO,
  OPENING_STATEMENT_INTRO,
  SUPER_HANDS_INTRO,
  storeLinks,
} from '../../data';

import '../../components/Shop.css';
import BuyNowButton from '../../components/ButNowButton';

const authors = {
  doug: 'Doug Bush',
  patricia: 'Patricia Islas',
};

const books = [
  {
    author: authors.doug,
    bookCoverImage: MasterHandsImage,
    description: MASTER_HANDS_INTRO,
    storeLink: storeLinks.masterHands,
    title: 'Master Hands',
  },
  {
    author: authors.patricia,
    bookCoverImage: MomentumImage,
    description: MOMENTUM_INTRO,
    storeLink: storeLinks.momentum,
    title: 'Momentum',
  },
  {
    author: authors.doug,
    bookCoverImage: OpeningStatementImage,
    description: OPENING_STATEMENT_INTRO,
    storeLink: storeLinks.openingStatement,
    title: 'Opening Statement',
  },
  {
    author: authors.doug,
    bookCoverImage: SuperHandsImage,
    description: SUPER_HANDS_INTRO,
    storeLink: storeLinks.superHands,
    title: 'Super Hands',
  },
];

const Shop = () => {
  console.log('shop');

  return (
    <Layout>
      <Container style={{ paddingTop: 32 }}>
        <List>
          {books.map(book => (
            <Card component="li" key={book.title}>
              <CardContent>
                <Flex
                  alignItems="flex-start"
                  className="card-container"
                  justifyContent="space-between"
                >
                  <div className="book-title-container">
                    <Typography variant="h5">
                      {book.title}
                    </Typography>

                    <Typography
                      gutterBottom
                      style={{ marginBottom: 20 }}
                    >
                      {book.author}
                    </Typography>
                  </div>

                  <Flex alignItems="flex-start" className="description-container">
                    <img
                      src={book.bookCoverImage}
                      style={{ maxHeight: 200 }}
                    />

                    <div>
                      {book.description.map((paragraph, index) => (
                        <Typography
                          gutterBottom
                          key={index}
                        >
                          {paragraph}
                        </Typography>
                      ))}
                    </div>
                  </Flex>
                </Flex>
              </CardContent>

              <CardActions>
                <Flex justifyContent="flex-end" style={{ gap: 8, width: '100%' }}>
                  <Link href={`/shop/${book.title.toLowerCase().replaceAll(' ', '_')}`}>
                    <Button variant="outlined">
                      View
                    </Button>
                  </Link>

                  <BuyNowButton href={book.storeLink} />
                </Flex>
              </CardActions>
            </Card>
          ))}
        </List>
      </Container>
    </Layout>
  );
};

export default Shop;
