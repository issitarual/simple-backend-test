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

export default router;
