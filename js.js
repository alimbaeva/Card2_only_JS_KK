

window.addEventListener('load', function () {
    const cardINrofm = {
        foto: 'https://images.unsplash.com/photo-1643443026948-c17b9bb16758?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        h3: 'Cosmos #2022-02-09',
        p: 'modul-2, frome java script. Jyldyz Academi "Kelechec"',
        li1: '0.041 ETH',
        li2: '3 TH DAYS LEFT',
        userImg: 'https://images.unsplash.com/photo-1643449709471-d837b64dcecf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        user: 'Alimbaeva Asel'
    }

    const body = this.document.querySelector('body');
    function creatCard() {
        const card = document.createElement('div');
        card.setAttribute('id', 'wrapper ');
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
        const userPart = document.createElement('div');
        userPart.setAttribute('class', 'userPart');
        const imgUser = document.createElement('img');
        imgUser.setAttribute('class', 'imgUser');
        const imgInfo = document.createElement('h4');
        imgInfo.setAttribute('class', 'imgInfo');
        const a = document.createElement('a');
        a.setAttribute('src', '');

        imgCard.setAttribute('src', cardINrofm['foto']);
        title.textContent = cardINrofm['h3']
        text.textContent = cardINrofm['p']

        for (let i = 0; i < 2; i++) {
            const li = document.createElement('li');
            li.setAttribute('class', 'liText');
            li.innerHTML = cardINrofm[`li${i + 1}`];
            ul.appendChild(li)
        }

        imgUser.setAttribute('src', cardINrofm['userImg']);
        imgInfo.innerHTML = `Criation of `;
        a.textContent = 'Alimbaeva Asel'
        console.log(cardINrofm['h3'])

        userPart.append(imgUser);
        userPart.append(imgInfo);
        userPart.append(a);

        cardInner.append(imgCard);
        cardInner.append(title);
        cardInner.append(text);
        cardInner.append(ul);
        cardInner.append(userPart);

        card.append(cardInner);

        body.append(card);

        return body

    }

    creatCard();
})