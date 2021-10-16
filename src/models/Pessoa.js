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
		},
		{
			timestamps: false,
			tableName: "NEG_PESSOA",
		}
	);

	return Pessoa;
};
