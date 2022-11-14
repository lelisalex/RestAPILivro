//CTRl + c para parar o servidor
//npm install nodemon@versao -D // D de desenvimento
//npm install mongoose@6.6.6 //Conexao com banco mongodb
//npm run dev //Executando o comando "dev": "nodemon server.js", em packege.json
//npm run dev --Rodar projeto

import app from "./src/app.js";

const port = process.env.PORT || 3000;;

app.listen(port, () => {
  console.log(`Servidor escutando em http://localhost:${port}`)
})