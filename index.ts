import Server from "./clases/server";
import { router } from './routes/route';
import bodyParser from 'body-parser';
import cors from 'cors'

const server = new Server();

//BodyParser
server.app.use(bodyParser.urlencoded({extended:true}));
server.app.use(bodyParser.json());

//Cors configuration
server.app.use(cors({origin:true, credentials:true}));

//Rutas de servicio
server.app.use('/', router);

 server.start( () => {
     console.log('Servidor ejecutado en el puerto ' + server.port);    
 });

//console.log('HOLA MUNDO');
 