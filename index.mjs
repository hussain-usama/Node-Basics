import express from 'express'
import path from 'path';
import { fileURLToPath } from 'url';

const app = express()

app.listen(5000, () => {
    console.log('Server is listening to 5000')
})

// open ejs file => show dynammic data in html pages
app.set('view engine','ejs')
app.get('/profile', (req,res) => {
    const user={
        name:'Usama Hussain',
        email:'usamaahussain23@gmail.com',
        skills:['React','Redux','JavaScript','MongoDB','ExpressJs','Node','React Native','Firebase']
    }
    res.render('profile',{user})
})
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const folderPath = path.join(__dirname, 'staticPages');
app.use(express.static(folderPath))  /// it is used to open html pages like route/index.html

// it will open html page we created in path define in app.get(path,call back function) and send file method is used
app.get('/', (req,res) => {
    res.sendFile(`${folderPath}/about.html`)
})


app.get('*', (req,res) => {
    res.sendFile(`${folderPath}/404Page.html`)
})
