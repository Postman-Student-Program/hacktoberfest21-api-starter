const { Mongoose } = require('mongoose');
const  Contestant = require('../schema/contestant');


module.exports = {
  /**
  * 


  */
  getContestants: async (options) => {

    // Implement your business logic here...
    //
    // Return all 2xx and 4xx as follows:
    //
    // return {
    //   status: 'statusCode',
    //   data: 'response'
    // }

    // If an error happens during your business logic implementation,
    // you can throw it as follows:
    //
    // throw new Error('<Error message>'); // this will result in a 500
    //

	// get all contestants from the database
	const contestants = await Contestant.find({});
	// if no contestants are found, return a 404
	if(contestants.length === 0) {
		return {
			status: 404,
			data: 'No contestants found'
		}
	}
	else {
		var status = '200';
		var data = contestants;
	}
	return new Promise((resolve, reject) => {
		resolve({
			status: status,
			data: data
		});
	});r

  },

  /**
  * 

  * @param options.createContestantInlineReqJson.city required
  * @param options.createContestantInlineReqJson.costumeImgUrl required
  * @param options.createContestantInlineReqJson.costumeTitle required
  * @param options.createContestantInlineReqJson.country required
  * @param options.createContestantInlineReqJson.name required

  */
  createContestant: async (options) => {

    // Implement your business logic here...
    //
    // Return all 2xx and 4xx as follows:
    //
    // return {
    //   status: 'statusCode',
    //   data: 'response'
    // }

    // If an error happens during your business logic implementation,
    // you can throw it as follows:
    //
    // throw new Error('<Error message>'); // this will result in a 500

	const contestant = new Contestant(options.createContestantInlineReqJson);
	contestant.save((err, contestant) => {
		if (err) {
			throw new Error(err);
		}
	});
	var status = '201';
	return new Promise((resolve, reject) => {
		resolve({
			status: status,
			data: contestant
		});
	});
},


  /**
  * 
  * @param options.id The id of a contestant 

  */
  getContestant: async (options) => {

    // Implement your business logic here...
    //
    // Return all 2xx and 4xx as follows:
    //
    // return {
    //   status: 'statusCode',
    //   data: 'response'
    // }

    // If an error happens during your business logic implementation,
    // you can throw it as follows:
    //
    // throw new Error('<Error message>'); // this will result in a 500

	const contestant = await Contestant.findById(options.id);
	// check if contestant exists
	if (!contestant) {
		// return a 404 promise
		return new Promise((resolve, reject) => {
			resolve({
				status: 404,
				data: {'status':'error'}
			});
		}
		);
	}
	else {
	var status = '200';
	  return new Promise((resolve, reject) => {
		  resolve({
			  status: status,
			  data: contestant
		  });
	  });
	}
  },

  /**
  * 
  * @param options.id The id of a contestant 

  */
  deleteContestant: async (options) => {

    // Implement your business logic here...
    //
    // Return all 2xx and 4xx as follows:
    //
    // return {
    //   status: 'statusCode',
    //   data: 'response'
    // }

    // If an error happens during your business logic implementation,
    // you can throw it as follows:
    //
    // throw new Error('<Error message>'); // this will result in a 500

	const contestant = await Contestant.findById(options.id);
	// check if contestant exists
	if (!contestant) {
		throw new Error('Contestant not found');
	}
	contestant.remove();
	var status = '200';
	var data = {'status': 'ok'};
	return new Promise((resolve, reject) => {
		resolve({
			status: status,
			data: data
		});
	});
  },

  /**
  * 
  * @param options.id the id of a contestant 

  */
  updateContestant: async (options, body) => {

    // Implement your business logic here...
    //
    // Return all 2xx and 4xx as follows:
    //
    // return {
    //   status: 'statusCode',
    //   data: 'response'
    // }

    // If an error happens during your business logic implementation,
    // you can throw it as follows:
    //
    // throw new Error('<Error message>'); // this will result in a 500

	// update contestant
	const contestant = await Contestant.findByIdAndUpdate(options.id, body);
	// check if contestant exists
	if (!contestant) {
		throw new Error('Contestant not found');
	}
	var status = '200';
	return new Promise((resolve, reject) => {
		resolve({
			status: status,
			data: {
				'status': 'ok'
			}
		});
	});
  },

  /**
  * 
  * @param options.id The id of a contestant 

  */
  upvoteContestant: async (options) => {

    // Implement your business logic here...
    //
    // Return all 2xx and 4xx as follows:
    //
    // return {
    //   status: 'statusCode',
    //   data: 'response'
    // }

    // If an error happens during your business logic implementation,
    // you can throw it as follows:
    //
    // throw new Error('<Error message>'); // this will result in a 500

    // update contestant
	const contestant = await Contestant.findByIdAndUpdate(options.id, { $inc: { votes: 1 } });
	// check if contestant exists
	if (!contestant) {
		// return a 404 promise
    return new Promise((resolve, reject) => {
      resolve({
        status: 404,
        data: {'status':'error'}
      });
    });
	}
  else{
    var status = '200';
    return new Promise((resolve, reject) => {
      resolve({
        status: status,
        data: {
          'status': 'ok',
          'votes' : contestant.votes+1
        }
      });
  });
  }
},
};
