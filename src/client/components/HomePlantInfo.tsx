import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import useWindowPosition from '../hook/useWindowPosition';
import HomeImageCard from './HomeImageCard';
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  },
}));

const places = [
  {
    title: 'Chinese Money Plant',
    description:
      " The Chinese Money Plant is a rare and very hard-to-find indoor plant native to southern China. Known for its round pancake-shaped green leaves, the Chinese Money Plant is very popular in modern decor and has become a staple for well-designed interiors.",
    imageUrl: '/assets/ChineseMoneyPlant.jpg',
    time: 1500,
  },
  {
    title: 'Calthea Orbifolia',
    description:
      'Calathea Orbifolia is an indoor tropical plant known for its stunning striped, olive green leaves that can grow up to six inches wide. The distinguishing features of the thick foliage are patterned leaves with strong light green stripes and a more rounded shape than other Calatheas. This house plant has broad foliage with a rippled effect that gives it an exotic look. It does exceptionally well in low light areas and in order to prevent scorching leaves, it should not be placed in direct sunlight. Calathea orbifolia brings personality and color to any space indoors.',
    imageUrl: '/assets/Calthea-Orbifolia-.jpg',
    time: 1500,
  },
  {
    title: 'Monstera Deliciosa',
    description:
      " Monstera Deliciosa has been one of the most sought-after houseplants for years and for good reason. It is an eye-catching house plant that has large, heart-shaped split leaves that can reach more than a foot long and wide.",
    imageUrl: '/assets/monstera-deliciosa.jpg',
    time: 1500,
  },
  {
    title: 'Norfolk Island Pine',
    description:
      " Norfolk Island Pine is a tropical house plant that doubles in style as a holiday tree. The smaller Norfolk Island Pines are perfect for decorating mantles, tabletops, and desks. As they grow and become taller, they are better situated as a floor plant.",
    imageUrl: '/assets/NorfolkIslandPine-.jpg',
    time: 1500,
  },
  {
    title: 'String of Pearls',
    description:
      " The String of Pearls plant aka String of Beads, is a creeping succulent vine. It is native to the drier parts of southwest Africa. In its natural environment, its stems trail on the ground, rooting where they touch and forming dense mats. It often avoids direct sunlight by growing in the shade of other plants and rocks. It is very low maintenance and the perfect plant for any level of plant owner.",
    imageUrl: '/assets/string-of-pearls.jpg',
    time: 1500,
  },
];


export default function HomePlantInfo() {
  const classes = useStyles();
  const checked = useWindowPosition('header');
  return (
    <div className={classes.root} id="place-to-visit">
      <HomeImageCard place={places[0]} checked={checked} />
      <HomeImageCard place={places[1]} checked={checked} />
      <HomeImageCard place={places[2]} checked={checked} />
      <HomeImageCard place={places[3]} checked={checked} />
      <HomeImageCard place={places[4]} checked={checked} />
    </div>
  );
}
