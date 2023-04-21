import { music } from "./dino.js";


export const amy_food_list = [
    'zzazangmeon', 'nogari', 'beers'
];

export const amy_favorite_musics = [
    {
        singer: '아이유',
        title: '에잇',
        genre: 'k-pop'
    },
    {
        singer: '볼빨간사춘기',
        title: '여행',
        genre: 'k-pop'
    },
    {
        singer: '다비치',
        title: '8282',
        genre: 'k-pop'
    },
    {
        singer: '뉴진스',
        title: 'attention',
        genre: 'k-pop'
    },

];

export const nonego_play_list = [
    ...music,
    amy_favorite_musics,
]