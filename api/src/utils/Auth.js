require("dotenv").config();
const bcrypt = require('bcrypt');
const session = require('express-session');
const jwt = require('jsonwebtoken');
const express = require("express");
const cookieParser = require("cookie-parser");

function authenticateToken(req, res, next) {
	const token = req.cookies.token;

	if (!token) {
		res.status(401).json({ error: 'Acceso no autorizado' });
		return;
	}

	jwt.verify(token, process.env.secretToken, (err, decoded) => {
		if (err) {
			res.status(401).json({ error: 'Token inválido' });
			return;
		}

		req.user = decoded;
		next();
	});
}

module.exports = { authenticateToken }