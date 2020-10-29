module.exports = (sequelize, DataTypes) => {
	const Appointment = sequelize.define('Appointment', {
        service: DataTypes.STRING,
        date: DataTypes.DATEONLY,
        time: DataTypes.STRING,
        drName: DataTypes.STRING,
        comment: DataTypes.STRING,
        status: DataTypes.STRING,
	});

    Appointment.associate = function(models) {
        Appointment.belongsTo(models.User)
        
    }

	return Appointment;
};