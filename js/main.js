/**
# Descrizione
Ricreiamo un feed social aggiungendo al layout di base fornito,
 il nostro script JS in cui:
# Milestone 1
Creiamo il nostro array di oggetti che rappresentano ciascun post.
Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
- id del post, numero progressivo da 1 a n
- nome autore,
- foto autore (potrebbe mancare a qualcuno),
- data in formato americano (mm-gg-yyyy),
- testo del post,
- immagine (non tutti i post devono avere una immagine),
- numero di likes.
*Non è necessario creare date casuali, inventatele*
*Per le immagini va bene utilizzare qualsiasi servizio
 di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=3)*
#Milestone 2
Prendendo come riferimento il layout di esempio presente
 nell'html, stampiamo i post del nostro feed.
#Milestone 3
Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al 
testo del bottone e incrementiamo il counter dei likes relativo.
# ****BONUS**
 1. Formattare le date in formato italiano (gg/mm/aaaa)
 2. Gestire l'assenza dell'immagine profilo con un elemento
  di fallback che contiene le iniziali dell'utente (es. Luca Formicola  => LF).
 3. Al click su un pulsante "Mi Piace" di un post, se abbiamo
  già cliccato dobbiamo decrementare il contatore e cambiare 
  il colore del bottone.

 */

//creo array

const posts = [
  {
    id: 1,
    nome: "jack",
    photoprofile: "https://unsplash.it/300/300?image=15",
    date: "11/24/2000",
    text: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto.Et nihil ullam aut alias.",
    imgpost: "https://unsplash.it/600/300?image=171",
    likes: 80,
  },
  {
    id: 2,
    nome: "leo",
    photoprofile: "https://unsplash.it/300/300?image=15",
    date: "10/14/2001",
    text: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto.Et nihil ullam aut alias.",
    imgpost: "https://unsplash.it/600/300?image=171",
    likes: 50,
  },
  {
    id: 3,
    nome: "franco",
    photoprofile: "https://unsplash.it/300/300?image=15",
    date: "01/20/2002",
    text: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto.Et nihil ullam aut alias.",
    imgpost: "https://unsplash.it/600/300?image=171",
    likes: 150,
  },
];

//dichiaro elementi
const post = document.querySelector(".post");

let postElement = "";

posts.forEach((post) => {
  //   console.log(post);
  const imgprofile = `<img class="profile-pic" src="${post.photoprofile}">`;
  const userprofile = `<div class="post-meta__author">${post.nome}</div>`;
  const datauser = `<div class="post-meta__data">${post.date}</div>`;
  const userText = `<div class="post__text">${post.text}</div>`;
  const postimage = `<img src="${post.imgpost}" alt="" />`;
  const likepost = `<b id="like-counter-1" class="js-likes-counter">${post.likes}</b> persone
`;
  postElement += ` 
        <div class="post">
            <div class="post__header">
                <div class="post-meta">
                    <div class="post-meta__icon">${imgprofile}</div>
                    <div class="post-meta__data">${datauser} ${userprofile}
                    <div class="post-meta__time">4 mesi fa</div>
                </div>
            </div>
            <div>${userText}</div>
            <div class="post__image">${postimage}</div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <button
                            class="like-button js-like-button" href="#"data-postid="1">
                        <i
                            class="like-button__icon fas fa-thumbs-up"
                            aria-hidden="true"
                                ></i>
                        <span class="like-button__label">Mi Piace</span>
                        </button>
                    </div>
                    <div class="likes__counter">Piace a ${likepost}</div>
                    
                </div>
            </div>

        </div>`;
});

post.innerHTML = postElement;
