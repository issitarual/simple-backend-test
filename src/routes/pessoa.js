import { pessoa } from "../services";
import chain from "./chain";

const express = require("express");
const router = express.Router();

router.get(
	`/person/:id(\\d+)`,
	chain(async (req, res, next) => {
		try{
			const pessoaModel = await pessoa.getById(req.params.id);

			if(!pessoaModel) return res.sendStatus(404);
			res.send(pessoaModel);
		}
		catch (e) {
			console.log(e);
    		return res.sendStatus(500);
		}
	})
);

router.get(
	'/person',
	chain(async (req, res, next) => {
		try{
			const pessoaModel = await pessoa.findAll();
			res.send(pessoaModel);
		}
		catch (e){
			console.log(e);
    		return res.sendStatus(500);
		}
	})
);

router.post(
	'/person',
	chain(async (req, res, next) => {
		const {nome, cep, uf, cidade, dataNascimento} = req.body;

		const validadeCep = /^[0-9]{8}$/.test(cep);
		const validateUf = /^[A-Z]{2}$/.test(uf);
		const isPersonNotValid = !nome || !validadeCep || !validateUf || !cidade || !dataNascimento

		if(isPersonNotValid) return res.sendStatus(400);

		try{
			const Newpessoa = await pessoa.create({nome, cep, uf, cidade, dataNascimento})
			res.send(Newpessoa);
		}
		catch (e){
			console.log(e);
    		return res.sendStatus(500);
		}
	})
);

router.put(
	`/person/:id(\\d+)`,
	chain(async (req, res, next) => {
		const {nome, cep, uf, cidade, dataNascimento} = req.body;

		const validadeCep = /^[0-9]{8}$/.test(cep);
		const validateUf = /^[A-Z]{2}$/.test(uf);
		const isPersonNotValid = !nome || !validadeCep || !validateUf || !cidade || !dataNascimento

		if(isPersonNotValid) return res.sendStatus(400);

		try{
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
		}
		catch (e){
			console.log(e);
    		return res.sendStatus(500);
		}
	})
)

router.delete(
	`/person/:id(\\d+)`,
	chain(async (req, res, next) => {
		const {id} = req.params;

		if(!id) return sendStatus(404);

		try{
			const pessoaModel = await pessoa.getById(id);
			pessoaModel.destroy();
			res.sendStatus(200);
		}
		catch (e){
			console.log(e);
    		return res.sendStatus(500);
		}
	})
);

export default router;
