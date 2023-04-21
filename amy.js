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
];

export const nonego_play_list = [
    ...music,
    amy_favorite_musics,
]

console.log(nonego_play_list);