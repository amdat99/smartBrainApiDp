const handleProfileGet= (req, res, db) => {
    const {id } = req.params;

    db.select('*').from('users').where({
    	id: id
    }).then(id=>{
    	if(id.length){
    	res.json(id[0]);
    } else { 
    	res.status(400).json('not found')
    }

   })
    .catch(err=> res.status(400).json('error getting user'))
   
}

module.exports={
    handleProfileGet: handleProfileGet
};