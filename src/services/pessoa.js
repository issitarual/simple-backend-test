import db from "./common";

const ENTITY_NAME = "Pessoa";

export const getById = (id, params) => {
	return db.getById(ENTITY_NAME, id, params);
};
export const getByFilter = (filter, params) => {
	return db.getByFilter(ENTITY_NAME, filter, params);
};
export const getAndCountByFilter = (filter, params) => {
	return db.getAndCountByFilter(ENTITY_NAME, filter, params);
};
export const countByFilter = (filter, params) => {
	return db.countByFilter(ENTITY_NAME, filter, params);
};
export const findAll = () => {
	return db.findAll(ENTITY_NAME);
};
export const create = (params) => {
	return db.create(ENTITY_NAME, params);
};