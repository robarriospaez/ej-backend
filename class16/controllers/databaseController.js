import { v4 as uuidv4 } from 'uuid';
import { getCountries, addCountry, updateCountry as updateCountryInDb, deleteCountry as deleteCountryFromDb } from '../database.js';

// Obtener todos los países
export const getAllCountries = (req, res) => {
    res.json(getCountries());
};

// Obtener un país por su ID
export const getCountryById = (req, res) => {
    const { id } = req.params;
    const country = getCountries().find(c => c.id === id);
    if (!country) {
        res.status(404).json({ message: 'Country not found' });
    } else {
        res.json(country);
    }
};

// Crear un nuevo país
export const createCountry = (req, res) => {
    const newCountry = req.body;
    newCountry.id = uuidv4();
    addCountry(newCountry);
    res.status(201).json(newCountry);
};

// Actualizar un país existente
export const updateCountry = (req, res) => {
    const { id } = req.params;
    const updatedCountry = req.body;
    const country = updateCountryInDb(id, updatedCountry);
    if (!country) {
        res.status(404).json({ message: 'Country not found' });
    } else {
        res.json(country);
    }
};

// Eliminar un país
export const deleteCountry = (req, res) => {
    const { id } = req.params;
    const country = deleteCountryFromDb(id);
    if (!country) {
        res.status(404).json({ message: 'Country not found' });
    } else {
        res.json(country);
    }
};