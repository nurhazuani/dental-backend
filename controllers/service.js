var Model = require('../models')

const service = {

     getAllServicee: async (req, res) => {
        let service = []
        // console.log(res)
		try {
            service = await Model.Service.findAll()
		} catch(e) {
				console.log(e)
		}

		res.json(service)
    },

    getService: async (req, res) => {
        let service = []
        
        // console.log(req)

		try {
			service = await Model.Service.findOne({
				where: {
					id: req.params.id
				}
			})
		} catch(e) {
				console.log(e)
		}

		res.json(service)
	},

    createService: async (req, res) => {
        let service = {}

        // console.log(req)

        try{
            service = await Model.Service.create({
                servicename: req.body.servicename,
            })
        } catch(e){
            console.log(e)
        }
        res.json(service) //insert data in DB s
    },

    updateService: async (req, res) => {
        let service = {}

        try{
            service = await Model.Service.update(
                req.body, {
                    where:{
                        id: req.params.id
                    }

            })

        }catch(e){
            console.log(e)
        }
        res.json(service)

    },

    deleteService: async (req,res) => {

        await Model.Service.destroy({
			where: {
				id: req.params.id
			}	
		})

		res.status(204).json({
			status: 'Success Delete'
		})
    }
}


module.exports = service