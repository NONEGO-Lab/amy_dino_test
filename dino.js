export const music = [
    {
        singer: '정준일',
        title: '보고싶었어요',
        genre: 'k-pop'
    },
    {
        singer: '윤종신',
        title: '나이',
        genre: 'k-pop'
    },

    {
        singer: 'Ahmad Jamal',
        title: 'I Love music',
        genre: 'jazz'
    },

    {
        singer: 'Nas',
        title: 'Half-time',
        genre: 'hiphop'
    },
    {
        singer: 'Galantis',
        title: 'Hunter',
        genre: 'edm'
    },

]

const signers = music.map(d => d.singer)
console.log(signers)