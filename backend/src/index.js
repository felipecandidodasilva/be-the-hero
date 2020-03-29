const express = require('express'); // simples assim o node entende que é um pacote
const express = require('cors'); // segurança NPM INSTALL CORS
const routes = require('./routes'); // com ./ o node entende que é arquivo

// para voltar uma pasta usa-se ../, quando unsa ./ sozinho ele referencia a pasta atual

// npm install nodemon - colocar esse script para não ficar starando manualemnte

const app = express();

/**
 * Informa que todas as respostas serão em json
 */
app.use(cors())
app.use(express.json()); 

app.use(routes);
app.listen(3333);  