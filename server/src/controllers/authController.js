const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();

let jwebToken = "asnjanjsjqnjs1881218nsqjsa"

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'El correo electrónico o la contraseña son incorrectos.' });
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'El correo electrónico o la contraseña son incorrectos.' });
        }
        const token = jwt.sign({ id: user._id }, jwebToken);
        return res.json({ token });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Ocurrió un error al iniciar sesión. Inténtalo de nuevo más tarde.' });
    }
});

router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Ya existe un usuario con este correo electrónico.' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ name, email, password: hashedPassword });
        const token = jwt.sign({ id: user._id }, jwebToken);
        return res.json({ token });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Ocurrió un error al crear la cuenta. Inténtalo de nuevo más tarde.' });
    }
});

module.exports = router;