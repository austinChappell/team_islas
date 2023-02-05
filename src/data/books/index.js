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
import { yoursRudimentallyDescription } from './yours_rudimentally';

import ClapocalypseImage from '../../images/book_covers/clapocalypse.jpg';
import ClosingRemarksImage from '../../images/book_covers/closing_remarks.jpg';
import HiddenAmongstFallenLeavesImage from '../../images/book_covers/hidden_amongst_fallen_leaves.jpg';
import HymnOfTheShieldMaidenImage from '../../images/book_covers/hymn_of_the_shield_maiden.jpg';
import MasterHandsImage from '../../images/book_covers/master_hands.jpg';
import MomentumImage from '../../images/book_covers/momentum.jpg';
import OpeningStatementImage from '../../images/book_covers/opening_statement.jpg';
import SuperHandsImage from '../../images/book_covers/super_hands.jpg';
import YoursRudimentallyImage from '../../images/book_covers/yours_rudimentally.jpg';
import EldridgePhoto from '../../images/quotes/andrew-eldridge.jpg';

const authors = {
  doug: 'Doug Bush',
  patricia: 'Patricia Islas',
};

export const booksLookup = {
  clapocalypse: {
    authors: [authors.doug, authors.patricia],
    coverImage: ClapocalypseImage,
    description: [
      'ClapocalypsE is an intermediate percussion ensemble for 5 Clappers, 1 Marimba, and 1 Vibraphone',
      'Written with the modern style of rudimental bass drumming in mind, the performers of the clapping parts, or “Clappers," are required to play both split and unison patterns with great rhythmic clarity. The mallet parts are written for intermediate-level performers, perhaps individuals new to the four-mallet techniques.',
      'Due to the unique instrumentation of the ensemble, it is recommended that the five clappers are at the front of the stage with the Marimba and Vibraphone directly behind them.',
    ],
    link: 'https://www.lulu.com/shop/patricia-islas-and-doug-bush/clapocalypse/paperback/product-5jdgen.html',
    title: 'ClapocalypsE',
  },
  closingRemarks: {
    authors: [authors.doug],
    coverImage: ClosingRemarksImage,
    description: [
      'Closing Remarks is a collection of 14 advanced solos for the snare drum. The inspiration for these solos came from several conversations with multiple collegiate-level educators. As percussion has grown the divide between traditional “Rudimental” snare drumming and “Orchestral” snare drumming has thankfully shrunk. There was consistently an expressed need for our students to have more modern literature that better prepared them for the challenges of contemporary snare drum solos. In composing these solos the goal was to create a wide range of reading, rhythmic, and musical challenges while always focusing on delivering an engaging piece of music in the process. Thank you for your dedication to the art of snare drumming and I hope you enjoy playing through Closing Remarks.',
    ],
    link: 'https://www.lulu.com/shop/doug-bush/closing-remarks/paperback/product-q48n4w.html',
    testimonials: [
      {
        name: 'Andrew Eldridge, DMA',
        avatar: EldridgePhoto,
        titles: ['Coordinator of Percussion', 'Assistant Professor of Percussion', 'University of Texas at Arlington Department of Music'],
        quote: 'Closing Remarks combines Doug\'s refreshing drumming vocabulary with a mature understanding of the needs of modern percussionists. This collection contains solos that are highly musical, feels natural in the hands, challenges your internal rhythm, and energizes the performer. I highly recommend this for use in a standard snare curriculum or as a short jury, and this collection will surely become a favorite to many people!',
      },
    ],
    title: 'Closing Remarks',
  },
  hiddenAmongstFallenLeaves: {
    authors: [authors.doug],
    coverImage: HiddenAmongstFallenLeavesImage,
    description: hiddenAmongstFallenLeavesDescription,
    link: 'https://www.lulu.com/shop/doug-bush/hidden-amongst-fallen-leaves/paperback/product-d89gzv.html',
    title: 'Hidden Amongst Fallen Leaves',
  },
  hymnOfTheShieldMaiden: {
    authors: [authors.doug],
    coverImage: HymnOfTheShieldMaidenImage,
    description: [
      '“Hymn of the Shield Maiden” is an advanced snare drum solo commissioned by Dr. Andrew Eldridge and composed by Mr. Doug Bush.',
    ],
    link: 'https://www.lulu.com/shop/doug-bush/hymn-of-the-shield-maiden/paperback/product-1y5jwjr6.html',
    title: 'Hymn of the Shield Maiden',
  },
  masterHands: {
    authors: [authors.doug],
    coverImage: MasterHandsImage,
    description: MASTER_HANDS_INTRO,
    link: 'https://www.lulu.com/shop/doug-bush/master-hands/paperback/product-1g2kpwwg.html',
    testimonials: MASTER_HANDS_QUOTES,
    title: 'Master Hands',
    videos: MASTER_HANDS_VIDS,
  },
  momentum: {
    authors: [authors.patricia],
    coverImage: MomentumImage,
    description: MOMENTUM_INTRO,
    link: 'https://www.lulu.com/en/us/shop/patricia-islas/momentum/paperback/product-6jvjzm.html',
    testimonials: MOMENTUM_QUOTES,
    title: 'Momentum',
  },
  openingStatement: {
    authors: [authors.doug],
    coverImage: OpeningStatementImage,
    description: OPENING_STATEMENT_INTRO,
    link: 'https://www.lulu.com/shop/doug-bush/opening-statement/paperback/product-1z7rk2k8.html',
    testimonials: OPENING_STATEMENT_QUOTES,
    title: 'Opening Statement',
    videos: OPENING_STATEMENT_VIDS,
  },
  superHands: {
    authors: [authors.doug],
    coverImage: SuperHandsImage,
    description: SUPER_HANDS_INTRO,
    link: 'https://www.lulu.com/shop/doug-bush/super-hands/paperback/product-1kw8pdr4.html',
    testimonials: SUPER_HANDS_QUOTES,
    title: 'Super Hands',
    videos: SUPER_HANDS_VIDS,
  },
  yoursRudimentally: {
    authors: [authors.doug],
    coverImage: YoursRudimentallyImage,
    description: yoursRudimentallyDescription,
    link: 'https://www.lulu.com/shop/doug-bush/yours-rudimentally/paperback/product-n6n46v.html',
    title: 'Yours Rudimentally',
  },
};

export const books = Object.values(booksLookup);
