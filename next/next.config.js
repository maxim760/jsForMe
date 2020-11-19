// process.env.API_PIPI = "33" // так модно задавать env переменные
module.exports =  {
    env: {
      API_URL:'http://localhost:3004'
    }
} // тут на экспорт

// настроили конфиг, теперь в фетче / аксиосе, можно не писать эту часть урл'а

// сам конфиг
// ЧТОБЫ ИСПОЛЬЗОВАТЬ НАДО ПЕРЕЗАПУСТИТЬ СЕРВЕР

// ИСПОЛЬЩЗОВАПНИЕ
//1
const response = await fetch(`${process.env.API_URL}/posts/${params.id}`)

//2
   <h1>About next {process.env.customKey}</h1>
