import { pessoa } from "../services";
import chain from "./chain";

const express = require("express");
const router = express.Router();

router.get(
	`/person/:id(\\d+)`,
	chain(async (req, res, next) => {
		const pessoaModel = await pessoa.getById(req.params.id);
		res.send(pessoaModel);
	})
);

router.get(
	'/person',
	chain(async (req, res, next) => {
		const pessoaModel = await pessoa.findAll();
		res.send(pessoaModel);
	})
);

router.post(
	'/person',
	chain(async (req, res, next) => {
		const {nome} = req.body;

		if(!nome) return sendStatus(404);

		const Newpessoa = await pessoa.create({nome})
		res.send(Newpessoa);
	})
);

router.delete(
	`/person/:id(\\d+)`,
	chain(async (req, res, next) => {
		const {id} = req.params;

		if(!id) return sendStatus(404);

		const pessoaModel = await pessoa.getById(id);
		pessoaModel.destroy();
		res.sendStatus(200);
	})
);

export default router;
