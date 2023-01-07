/*!
 * Copyright(c) 2023 Antonio Edinadson
 * Copyright(c) 2023 Carlos Jaime de Andrade Junior
 * MIT Licensed
 */

const app = require('./app');

app.listen(process.env.PORT || 8080, () => {
    console.log(`SERVER-ON PORT: ${process.env.PORT}`);
})
