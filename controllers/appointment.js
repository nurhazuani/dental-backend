var Model = require('../models')

const Appointment = {

     getAllAppointment: async (req, res) => {
        let appointment = []
		try {
            appointment = await Model.Appointment.findAll({
                    include: [{
                        model: Model.User
                    }],
                  
                })
		} catch(e) {
				console.log(e)
		}

        res.json(appointment)
       
    },

    getAppointment: async (req, res) => {
        let appointment = []
        
        // console.log(req)

		try {
			appointment = await Model.Appointment.findOne({
				where: {
					uid: req.params.uid
                },
                include: [{
                    model: Model.User,
                }]
			})
		} catch(e) {
				console.log(e)
		}

        res.json(appointment)
        // console.log(appointment)
	},

    addAppointment: async (req, res) => {
        let appointment = {}

        // console.log(req)

        try{
            appointment = await Model.Appointment.create({
                service: req.body.service,
                date: req.body.date,
                time: req.body.time,
                drName: req.body.drName,
                comment: req.body.comment,
                status: req.body.status,
                UserUid: req.params.uid //pk
            })
        } catch(e){
            console.log(e)
        }
        res.json(appointment) 
    },

    updateAppoinment: async (req, res) => {
        let appointment = {}

        try{
            appointment = await Model.Appointment.update(
                req.body, {
                    where:{
                        id: req.params.id,
                        UserUid: req.params.uid
                    }

            })

        }catch(e){
            console.log(e)
        }
        res.json(appointment)

    },

    deleteAppointment: async (req,res) => {

        await Model.User.destroy({
			where: {
				id: req.params.id
			}	
		})

		res.status(204).json({
			status: 'Success Delete'
		})
    },
    
   

}


module.exports = Appointment