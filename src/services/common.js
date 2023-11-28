import models from "../models";

export const getById = (entity, id, params) => {
	if (!id || id === 0) {
		throw new Error('Param "id" not found');
	}

	return models[entity].findByPk(id, params);
};

export const getByFilter = (entity, filter, params) => {
	return models[entity].scope(filter).findAll(params);
};
export const getAndCountByFilter = (entity, filter, params) => {
	return models[entity].scope(filter).findAndCountAll(params);
};
export const countByFilter = (entity, filter, params) => {
	return models[entity].scope(filter).count(params);
};
export const findAll = (entity) => {
	return models[entity].findAll();
};
export const create = (entity, params) => {
	return models[entity].create(params);
};
const raw = () => {
	return models.sql;
};

export default {
	getById,
	getByFilter,
	getAndCountByFilter,
	countByFilter,
	raw,
	findAll,
	create
};
