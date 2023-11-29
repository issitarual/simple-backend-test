module.exports = (sequelize, DataTypes) => {
	const Pessoa = sequelize.define(
		"Pessoa",
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				allowNull: false,
				autoIncrement: true,
				field: "id_pessoa",
			},
			nome: {
				type: DataTypes.STRING(100),
				field: "nm_pessoa",
			},
			dataNascimento: {
				type: DataTypes.DATEONLY,
				field: "dn_pessoa"
			},
			cep: {
				type: DataTypes.STRING(8),
				field: "cep_pessoa",
			},
			cidade: {
				type: DataTypes.STRING(100),
				field: "cidade_pessoa",
			},
			uf: {
				type: DataTypes.STRING(2),
				field: "uf_pessoa",
			},
		},
		{
			timestamps: false,
			tableName: "NEG_PESSOA",
		}
	);

	return Pessoa;
};
