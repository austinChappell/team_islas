import React from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  List,
  Typography,
} from '@mui/material';
import { Link } from 'gatsby';

import Layout from '../../components/layout';
import { Flex } from '../../components/shared';

import '../../components/Shop.css';
import BuyNowButton from '../../components/ButNowButton';
import { books } from '../../data/books';

const Shop = () => (
  <Layout>
    <Container maxWidth="md" sx={{ paddingTop: 4 }}>
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
                    {book.authors.join(', ')}
                  </Typography>
                </div>

                <Flex alignItems="flex-start" className="description-container">
                  <img
                    alt={book.title}
                    src={book.coverImage}
                    style={{ boxShadow: '0px 0px 2px 2px #eee', maxHeight: 200 }}
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
                <Link href={`/shop/${book.title.toLowerCase().replaceAll(' ', '_').replaceAll('\'', '')}`}>
                  <Button variant="outlined">
                    View More
                  </Button>
                </Link>

                <BuyNowButton href={book.link} />
              </Flex>
            </CardActions>
          </Card>
        ))}
      </List>
    </Container>
  </Layout>
);

export default Shop;
