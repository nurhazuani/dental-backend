var Model = require('../models')

const Users = {

     getAllUser: async (req, res) => {
        let user = []
		try {
            user = await Model.User.findAll({
                    include: [{
                        model: Model.Appointment
                    }],
                  
                })
		} catch(e) {
				console.log(e)
		}

        res.json(user)
       
    },

    getRole: async (req, res) => {
        let user = []

         console.log(res)

		try {
            user = await Model.User.findAll({
                    
                where:{
                    role: req.params.role
                }

                })
		} catch(e) {
				console.log(e)
		}

        res.json(user)
       
    },

    getPosition: async (req, res) => {
        let user = []

         console.log(res)

		try {
            user = await Model.User.findAll({
                    
                where:{
                    position: req.params.position
                }

                })
		} catch(e) {
				console.log(e)
		}

        res.json(user)
       
    },

    getRolebyID: async (req, res) => {
        let user = []

         console.log(res)

		try {
            user = await Model.User.findAll({
                    
                where:{
                    uid: req.params.uid,
                    role: req.params.role
                },
                include: [{
                    model: Model.Appointment,
                }]

                })
		} catch(e) {
				console.log(e)
		}

        res.json(user)
       
    },

    getUser: async (req, res) => {
        let user = []
        
        // console.log(req)

		try {
			user = await Model.User.findAll({
				where: {
					uid: req.params.uid
                },
                include: [{
                    model: Model.Appointment,
                }]
			})
		} catch(e) {
				console.log(e)
		}

        res.json(user)
        console.log(user)
    },
    
    createUser: async (req, res) => {
        let user = {}

        // console.log(req)

        try{
            user = await Model.User.create({
                uid: req.body.uid,
                uname: req.body.uname,
                email: req.body.email,
                password: req.body.password,
                role: req.body.role,
                position: req.body.position
            })
        } catch(e){
            console.log(e)
        }
        res.json(user) //insert data at table user
    },

    updateUser: async (req, res) => {
        let user = {}

        try{
            user = await Model.User.update(
                req.body, {
                    where:{
                        uid: req.params.uid
                    }

            })

        }catch(e){
            console.log(e)
        }
        res.json(user)

    },

    deleteUser: async (req,res) => {

        await Model.User.destroy({
			where: {
				uid: req.params.uid
			}	
		})

		res.status(204).json({
			status: 'Success Delete'
		})
    },
    
   

}


module.exports = Users