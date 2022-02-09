const card = {
    foto: 'https://images.unsplash.com/photo-1643443026948-c17b9bb16758?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    h3: 'Cosmos #2022-02-09',
    p: 'modul-2, frome java script. Jyldyz Academi "Kelechec"',
    li: ['0.041 ETH', '3 TH DAYS LEFT'],
    userImg: 'https://images.unsplash.com/photo-1643449709471-d837b64dcecf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    user: 'Alimbaeva Asel'
}


window.addEventListener('load', function () {

    const body = this.document.querySelector('body');
    function creatCard() {
        const card = document.createElement('div');
        card.setAttribute('id', 'card');
        const cardInner = document.createElement('div');
        cardInner.setAttribute('class', 'cardInner');
        const imgCard = document.createElement('img');
        imgCard.setAttribute('class', 'imgCard');
        const title = document.createElement('h3');
        title.setAttribute('class', 'title');
        const text = document.createElement('p');
        text.setAttribute('class', 'text');
        const ul = document.createElement('ul');
        ul.setAttribute('class', 'ul');
        const li = document.createElement('li');
        li.setAttribute('class', 'liText');
        const userPart = document.createElement('div');
        userPart.setAttribute('class', 'userPart');
        const imgUser = document.createElement('img');
        imgUser.setAttribute('class', 'imgUser');
        const imgUser = document.createElement('h4');
        imgInfo.setAttribute('class', 'imgInfo');
        const strong = document.createElement('strong');

    }
})