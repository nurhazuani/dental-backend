module.exports = (sequelize, DataTypes) => {
	const Service = sequelize.define('Service', {
        servicename: DataTypes.STRING,
	});

	return Service  ;
};