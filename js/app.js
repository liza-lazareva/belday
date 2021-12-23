////////cursor
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) =>{
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
})

////////header
let includeHeader = document.querySelector('header');
includeHeader.insertAdjacentHTML("afterbegin", `
<div class="container header__container flex">
                <a href="words.html" class="words header_link">Словы</a>
                <a href="index.html" class="header__logo logo">БЕЛDAY</a>
                <a href="articals.html" class="articals header_link">Цікавaе</a>
</div>
`);

////////words
 //запись в константные переменные соответстующих элементов страницы
 const belWord = document.querySelector(".bel_word");
 const rusWord = document.querySelector(".rus_word");
 const nextBtn = document.querySelector(".next_btn");
 
     //массив слов
     const ArrOfWords = [
         {
             paresOfWords: [
                 {
                     bel: 'Дзякуй',
                     rus: 'спасибо'
                 },
                 {
                     bel: 'Верасень',
                     rus: 'сентябрь'
                 },
                 {
                     bel: 'Сонейка',
                     rus: 'солнце'
                 },
                 {
                     bel: 'Летась',
                     rus: 'прошлое лето'
                 },
                 {
                     bel: 'Тутэ́йшы',
                     rus: 'местный, здешний'
                 },
                 {
                     bel: 'Шчы́ры',
                     rus: 'искренний, сердечный, усердный'
                 },
                 {
                     bel: 'Мо́ва',
                     rus: 'ЯЗЫК'
                 },
                 {
                     bel: 'Свядо́мы',
                     rus: 'Сознательный'
                 },
                 {
                     bel: 'Шуфля́дка',
                     rus: 'Выдвижной ящик стола'
                 },
                 {
                     bel: 'запалкі',
                     rus: 'спички'
                 }
             ],
         }
     ];
 
     //вызов функции для отображения слов по клике на кнопку
     nextBtn.onclick = () => {
         renderWords(getRandomIndex());
     };
     //генерация рандомного индекса
     function getRandomIndex() {
         const index = Math.floor(Math.random() * ArrOfWords[0].paresOfWords.length);
         return index;
     }
     //функция для отображения слов
     const renderWords = (index) => {
         belWord.innerText = ArrOfWords[0].paresOfWords[index].bel;
         rusWord.innerText = ArrOfWords[0].paresOfWords[index].rus;
     };
     //вызов функции сразу при загрузке страницы
     renderWords(getRandomIndex());
