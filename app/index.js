import express from 'express';
import bodyParser from 'body-parser'
import * as CONST from './const';

let app = express();

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

let router = express.Router()

router.get('/', (req, res) => {
    res.json({mess: 'trololo'})
})

app.use(router)
app.listen(CONST.PORT)
console.log('App listening on port: ' + CONST.PORT)


