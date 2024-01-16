// https://jsonplaceholder.typicode.com/

// https://jsonplaceholder.typicode.com/todos

/* [
{
	userId: 1,
	totalTasks:10,
	completed:6,
	pending: 4
},
{
	userId: 2,
	totalTasks:15,
	completed:5,
	pending: 10
}
] */


const data = [
    {
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
    },
    {
      "userId": 1,
      "id": 2,
      "title": "quis ut nam facilis et officia qui",
      "completed": false
    }
  ];



  /* const userdata = [];
  let complete = 0;
    let pending = 0;
  data.map((user)=>{
    // console.log((user));
    if(user.userId){
        
        if(user.completed == true){
            complete = complete+1;
        }else{
            pending = pending + 1;
        }
        let temp = {
            completed:complete,
            pending: pending
        }
        userdata.push(temp);
    }
}); */

const userIds = [...new Set(data.map(item => item.userId))];

// Then, map each userId to its summary
const result = userIds.map(userId => {
    const tasksByUser = data.filter(function(task){
        task.userId === userId;
    } );

    const totalTasks = tasksByUser.length;
    // const completed = tasksByUser.filter(task => task.completed).length;
    const completed = tasksByUser.filter(function(task){
        task.completed.length;
    }); 
        
    const pending = totalTasks - completed;

    return { userId, totalTasks, completed, pending };
});

console.log(result);
    
// console.log(userdata);

// { userId: 1, totalTasks: 0, completed: 0, pending: 0 } ]

