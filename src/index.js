require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const rateLimiter = require('express-rate-limit');
const routes = require('./routes');

const app = express();

const limiter = rateLimiter({
    windowMs: 30 * 60 * 1000, // 30 minutos
    max: 1000, // 1000 solicitudes por ventana
    message: { success: false, error: {
        code: 'LIMITE_EXTENDIDO',
        message: 'Has alcanzado el límite de solicitudes. Por favor, inténtalo de nuevo más tarde.'}}
}); 

app.use(helmet());
app.use(cors({
    origin: process.env.CORs_ORIGIN || '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(morgan('dev'));
app.use(express.json());
app.use(express.static('public'));

app.use('/api/v1', limiter);
app.use('/api/v1', routes);

app.use((req, res) => {
    res.json({ 
        success: false,
        message: 'API v1 en linea. Accede a los endpoints disponibles en /api/v1' });
});

//Rutas no encontradas
app.use((req, res) => {
    res.status(404).json({
        success: false,
        error: {
            code: 'RUTA_NO_ENCONTRADA',
            message: 'La ruta ${req.originalUrl} no existe.'
        }
    });
});

//Manejo de errores
app.use((err, req, res) => {
    console.error(err.stack);
    res.status(500).json({
        success: false,
        error: {
            code: 'ERROR_INTERNO',
            message: 'Ha ocurrido un error interno en e l servidor.'
        }
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
