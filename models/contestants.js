const { v4: uuid } = require("uuid");
/*
Contestant Object Schema
{
    id:             <string>,
    name:           <string>,
    costumeTitle:   <string>,
    costumeImgUrl:  <string>,
    city:           <string>,
    country:        <string>,
    votes:          <number>
}

Error Object Schema
{
    status : 'error'
    message: <message>
}
*/
const contestants = [];

module.exports = {
  getContestants: () => {
    return contestants;
  },
  getContestant: (id) => {
    return contestants.filter((contestant) => contestant.id == id);
  },
  createContestant: (data) => {
    const id = uuid();
    contestants.push({
      id: id,
      ...data,
      votes: 0,
    });
    return id;
  },
  updateContestant: (id, data) => {
    let result = false;
    for (let i = 0; i < contestants.length; i++) {
      if (contestants[i].id == id) {
        contestants[i] = {
          ...contestants[i],
          ...data,
        };
        result = true;
        break;
      }
    }
    return result;
  },
  upvoteContestant: (id) => {
    let result = false,
      votes;
    for (let i = 0; i < contestants.length; i++) {
      if (contestants[i].id == id) {
        contestants[i].votes += 1;
        votes = contestants[i].votes;
        result = true;
        break;
      }
    }
    return [result, votes];
  },
  deleteContestant: (id) => {
    let result = false;
    for (let i = 0; i < contestants.length; i++) {
      if (contestants[i].id == id) {
        contestants.splice(i, 1);
        result = true;
        break;
      }
    }
    return result;
  },
};
