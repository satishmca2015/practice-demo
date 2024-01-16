const data = [
    {
      "userId": 1,
      "id": 7,
      "title": "illo expedita consequatur quia in",
      "completed": false
    },
    {
      "userId": 1,
      "id": 8,
      "title": "quo adipisci enim quam ut ab",
      "completed": true
    },
    {
      "userId": 1,
      "id": 9,
      "title": "molestiae perspiciatis ipsa",
      "completed": false
    },
    {
      "userId": 1,
      "id": 10,
      "title": "illo est ratione doloremque quia maiores aut",
      "completed": true
    },
    {
      "userId": 1,
      "id": 11,
      "title": "vero rerum temporibus dolor",
      "completed": true
    },
    {
      "userId": 1,
      "id": 12,
      "title": "ipsa repellendus fugit nisi",
      "completed": true
    },
    {
      "userId": 1,
      "id": 13,
      "title": "et doloremque nulla",
      "completed": false
    },
    {
      "userId": 1,
      "id": 14,
      "title": "repellendus sunt dolores architecto voluptatum",
      "completed": true
    },
    {
      "userId": 1,
      "id": 15,
      "title": "ab voluptatum amet voluptas",
      "completed": true
    },
    {
      "userId": 1,
      "id": 16,
      "title": "accusamus eos facilis sint et aut voluptatem",
      "completed": true
    },
    {
      "userId": 1,
      "id": 17,
      "title": "quo laboriosam deleniti aut qui",
      "completed": true
    },
    {
      "userId": 1,
      "id": 18,
      "title": "dolorum est consequatur ea mollitia in culpa",
      "completed": false
    },
    {
      "userId": 1,
      "id": 19,
      "title": "molestiae ipsa aut voluptatibus pariatur dolor nihil",
      "completed": true
    },
    {
      "userId": 1,
      "id": 20,
      "title": "ullam nobis libero sapiente ad optio sint",
      "completed": true
    },
    {
      "userId": 10,
      "id": 198,
      "title": "quis eius est sint explicabo",
      "completed": true
    },
    {
      "userId": 10,
      "id": 199,
      "title": "numquam repellendus a magnam",
      "completed": true
    },
    {
      "userId": 10,
      "id": 200,
      "title": "ipsam aperiam voluptates qui",
      "completed": false
    }
  ];

function getTaskDetails(data) {
    const userdata = {};

    data.map(user => {
        if (!userdata[user.userId]) {
            userdata[user.userId] = { 
                userId: user.userId,
                totalTasks: 0,
                completed: 0,
                pending: 0 
            };
        }

        userdata[user.userId].totalTasks = userdata[user.userId].totalTasks + 1;
        if (user.completed) {
            userdata[user.userId].completed = userdata[user.userId].completed + 1;
        } else {
            userdata[user.userId].pending =  userdata[user.userId].pending + 1;
        }
    });

    // return userdata ;
    return Object.values(userdata);
}

const result = getTaskDetails(data);
console.log(result);
