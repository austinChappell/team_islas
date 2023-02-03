import { MASTER_HANDS_INTRO, MASTER_HANDS_QUOTES, MASTER_HANDS_VIDS } from './master_hands';
import { MOMENTUM_INTRO, MOMENTUM_QUOTES } from './momentum';
import {
  OPENING_STATEMENT_INTRO,
  OPENING_STATEMENT_QUOTES,
  OPENING_STATEMENT_VIDS,
} from './opening_statement';
import {
  SUPER_HANDS_INTRO,
  SUPER_HANDS_QUOTES,
  SUPER_HANDS_VIDS,
} from './super_hands';
import { hiddenAmongstFallenLeavesDescription } from './hiddenAmongstFallenLeaves';

import HiddenAmongstFallenLeavesImage from '../../images/book_covers/hidden_amongst_fallen_leaves.jpg';
import MasterHandsImage from '../../images/book_covers/master_hands.jpg';
import MomentumImage from '../../images/book_covers/momentum.jpg';
import OpeningStatementImage from '../../images/book_covers/opening_statement.jpg';
import SuperHandsImage from '../../images/book_covers/super_hands.jpg';

const authors = {
  doug: 'Doug Bush',
  patricia: 'Patricia Islas',
};

export const booksLookup = {
  hiddenAmongstFallenLeaves: {
    author: authors.doug,
    coverImage: HiddenAmongstFallenLeavesImage,
    description: hiddenAmongstFallenLeavesDescription,
    link: 'https://www.lulu.com/shop/doug-bush/hidden-amongst-fallen-leaves/paperback/product-d89gzv.html',
    title: 'Hidden Amongst Fallen Leaves',
  },
  masterHands: {
    author: authors.doug,
    coverImage: MasterHandsImage,
    description: MASTER_HANDS_INTRO,
    link: 'https://www.lulu.com/shop/doug-bush/master-hands/paperback/product-1g2kpwwg.html',
    testimonials: MASTER_HANDS_QUOTES,
    title: 'Master Hands',
    videos: MASTER_HANDS_VIDS,
  },
  momentum: {
    author: authors.patricia,
    coverImage: MomentumImage,
    description: MOMENTUM_INTRO,
    link: 'https://www.lulu.com/en/us/shop/patricia-islas/momentum/paperback/product-6jvjzm.html',
    testimonials: MOMENTUM_QUOTES,
    title: 'Momentum',
  },
  openingStatement: {
    author: authors.doug,
    coverImage: OpeningStatementImage,
    description: OPENING_STATEMENT_INTRO,
    link: 'https://www.lulu.com/shop/doug-bush/opening-statement/paperback/product-1z7rk2k8.html',
    testimonials: OPENING_STATEMENT_QUOTES,
    title: 'Opening Statement',
    videos: OPENING_STATEMENT_VIDS,
  },
  superHands: {
    author: authors.doug,
    coverImage: SuperHandsImage,
    description: SUPER_HANDS_INTRO,
    link: 'https://www.lulu.com/shop/doug-bush/super-hands/paperback/product-1kw8pdr4.html',
    testimonials: SUPER_HANDS_QUOTES,
    title: 'Super Hands',
    videos: SUPER_HANDS_VIDS,
  },
};

export const books = Object.values(booksLookup);
