import { Router } from 'express';
import { getAllCountries, getCountryById, createCountry, updateCountry, deleteCountry } from '../controllers/databaseController.js';

const router = Router();

router.get('/', getAllCountries);
router.get('/:id', getCountryById);
router.post('/', createCountry);
router.put('/:id', updateCountry);
router.delete('/:id', deleteCountry);

export default router;