import { pessoa } from "../services";
import chain from "./chain";

const express = require("express");
const router = express.Router();

router.get(
	`/person/:id(\\d+)`,
	chain(async (req, res, next) => {
		const pessoaModel = await pessoa.getById(req.params.id);

		if(!pessoaModel) return res.sendStatus(404);
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
		const {nome, cep, uf, cidade, dataNascimento} = req.body;

		const validadeCep = /^[0-9]{8}$/.test(cep);
		const validateUf = /^[A-Z]{2}$/.test(uf);

		if(!nome || !validadeCep || !validateUf || !cidade || !dataNascimento ) return res.sendStatus(400);

		const Newpessoa = await pessoa.create({nome, cep, uf, cidade, dataNascimento})
		res.send(Newpessoa);
	})
);

router.put(
	`/person/:id(\\d+)`,
	chain(async (req, res, next) => {
		const {nome, cep, uf, cidade, dataNascimento} = req.body;

		const validadeCep = /^[0-9]{8}$/.test(cep);
		const validateUf = /^[A-Z]{2}$/.test(uf);

		if(!nome || !validadeCep || !validateUf || !cidade || !dataNascimento) return res.sendStatus(400);

		const pessoaModel = await pessoa.getById(req.params.id);

		if(!pessoaModel) return res.sendStatus(404);

		pessoaModel.set(
			{
				nome,
				cep,
				uf,
				cidade,
				dataNascimento
			}
		);
		const updatedPerson = await pessoaModel.save();
		res.send(updatedPerson);
	})
)

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
