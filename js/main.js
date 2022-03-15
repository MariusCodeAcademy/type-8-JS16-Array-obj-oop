const users = [
  {
    id: 1,
    username: 'Bob',
    password: 'secret123',
    department: 'A',
    avatar: '1.jpg',
    online: false,
  },
  {
    id: 2,
    username: 'Jill',
    password: 'secret456',
    department: 'B',
    avatar: '2.png',
    online: true,
  },
  {
    id: 3,
    username: 'James',
    password: 'secret789',
    department: 'B',
    avatar: '3.jpg',
    online: true,
  },
  {
    id: 4,
    username: 'Mike',
    password: 'secret111',
    department: 'C',
    avatar: '4.jpg',
    online: false,
  },
];
console.table(users);
// 1. parasyti funkcija kuri atrenka visus online esancius vartotojus
// const online = users.filter((uObj) => uObj.online === true);
const online = onlineUsers();
// console.table(online);
function onlineUsers() {
  return users.filter((uObj) => uObj.online === true);
}
// 2. su funkcija atrinkti B ir C departameto userius
function departmentUsers(arr) {
  const filteredUsers = arr.filter((uObj) => uObj.department === 'B' || uObj.department === 'C');
  return filteredUsers;
}
// array.includes()
// extra
const bcUsers = departmentUsers(users, ['B', 'C']);
const aUsers = departmentUsers(users, ['A']);
console.table(bcUsers);

// 3. parasyti funkcija kuri sugeneruoja htmle nuotrauku galerija is uzer paveikleliu, su username pavadinimu
// {
//   /* <figure>
//       <img src="pic_trulli.jpg" alt="Trulli">
//       <figcaption>Fig.1 - Trulli, Puglia, Italy.</figcaption>
//     </figure> */
// }
// 3.1 parasyti funkcija kuri gavusi toki objekta
const u1 = {
  id: 3,
  username: 'James',
  password: 'secret789',
  department: 'B',
  avatar: '3.jpg',
  online: true,
};
// pagamina
// {
//   /* <figure>
//       <img src="3.jpg" alt="James">
//       <figcaption>Image of James</figcaption>
//     </figure> */
// }
// makeMeFig(u1)

// 3.2 susikuriam div su klase 'grid'. ir tada funkcija makeCards(arr, dest) kuri suka cikla per arr
// ir gamina korteles su auksciau aprasyta funkcija (3.1)

// 4. parasyti funkcija kuriai paduodam id ir ji grazina objekta kurio id sutampa su duotu. jei toks nerandamas tai grazina
// {
//   found: false;
//   msg: 'user not found';
// }
// function findById(){}
// findById(100)

// 5. Parasyti funkcija kuriai paduodam username ir password.
// 5.1 jei pasword ir username sutampa tai iskonsolinam loggin success
// 5.2 jei pasword ir username nesutampa tai iskonsolinam loggin fail
// 5.3 jei pasword ir username sutampa tai padarom vartotoja kad jis butu online

function makeImg(userObj) {
  const imgEl = document.createElement('img');
  imgEl.className = 'user-img';
  imgEl.src = `img/${userObj.avatar}`;
  imgEl.alt = `Image of ${userObj.username}`;
  document.body.append(imgEl);
}

makeImg(users[0]);
makeImg(users[1]);
