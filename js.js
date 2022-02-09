

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
        const imgCard = document.createElement('img');
        const title = document.createElement('h3');
        const text = document.createElement('p');
        const ul = document.createElement('ul');
        const userPart = document.createElement('div');
        const imgUser = document.createElement('img');
        const imgInfo = document.createElement('h4');
        const a = document.createElement('a');
        a.setAttribute('src', '');

        imgCard.setAttribute('src', cardINrofm['foto']);
        title.textContent = cardINrofm['h3']
        text.textContent = cardINrofm['p']

        for (let i = 0; i < 2; i++) {
            const li = document.createElement('li');
            // li.setAttribute('class', 'liText');
            li.innerHTML = cardINrofm[`li${i + 1}`];
            li.style.cssText = `
            color: rgb(109, 109, 235);
            margun: 0;
            list-style-type: none;
            `
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


        cardInner.style.cssText = `
            width: 320px;
            margin: auto auto;
        `

        imgCard.style.cssText = `
        width: 320px;
        height: 300px;
        border-radius: 15px;
        box-shadow: 0 0 10px white;
        `

        title.style.cssText = `
            color: white;
        `

        text.style.cssText = `
         color: rgb(165, 169, 172);
        `

        ul.style.cssText = `
        padding: 0;
           color:white;
           display: flex;
            justify-content: space-between;
        `

        imgUser.style.cssText = `
            margin-right:13px;
            width:70px;
            height:60px;
            border-radius: 50%;
            border: 2px solid white;
        `

        imgInfo.style.cssText = `
        margin-right:13px;
        color: rgb(109, 109, 235);
        `

        a.style.cssText = `
        color: rgb(165, 169, 172);
        text-decoration: none;
        `

        userPart.style.cssText = `
        display: flex;
        align-items: center;  
        border-top: 1px solid  rgb(165, 169, 172, .6);
        padding-top: 15px

        `

        card.style.cssText = `
            width: 380px;
            min-height: 600px;
            padding: 10px 0; 
            background-color: rgb(9, 9, 88);
            display: flex;
            justify-content: center;
            border-radius: 15px
        `


        return body

    }

    body.style.cssText = `
    background-color: rgb(8, 8, 48);
    `

        ;
    //     cardInner.style.cssText = `
    //     width: 300px;
    //     border: 1px solid rgb(8, 8, 48);
    // `

    creatCard();
})