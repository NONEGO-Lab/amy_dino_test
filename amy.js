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
    {
        singer: '윤종신',
        title: '나이',
        genre: 'k-pop'
    },

];


export const get_same_favorite_musics = () => {
    // 둘 다 좋아하는 노래 찾기
    const amy_favorite_singer = amy_favorite_musics.map((m) => m.singer);
    const dino_favorite_singer = music.map((m) => m.singer);

    const both_favorite_singer =
        amy_favorite_singer.filter((m) => dino_favorite_singer.includes(m));

    console.log(`both_favorite_singer: ${both_favorite_singer}`);

}

console.log("");
console.log("");



get_same_favorite_musics();