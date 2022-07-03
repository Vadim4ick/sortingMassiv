const users = [
  {
    _id: "5asd123sasdaretergdffvds1",
    isActive: true,
    balance: 3000,
    age: 25,
    name: "Vadim Firulyov",
    gender: "men",
    company: "freelanse",
    phone: "+79194890201",
    email: "test@mail.ru",
    registers: "2003-15-20",
  },
  {
    _id: "5asd123sasdaretergdffvds2",
    isActive: true,
    balance: 3500,
    age: 15,
    name: "Nekit Firulyov",
    gender: "men",
    company: "freelanse",
    phone: "+7919489055201",
    email: "test@mail.ru",
    registers: "2003-15-20",
  },
  {
    _id: "5asd123sasdaretergdffvds3",
    isActive: true,
    balance: 4000,
    age: 20,
    name: "Den Firulyov",
    gender: "men",
    company: "swarchick",
    phone: "+7919489123",
    email: "test@mail.ru",
    registers: "2003-15-20",
  },
  {
    _id: "5asd123sasdaretergdffvds4",
    isActive: true,
    balance: 3700,
    age: 22,
    name: "Anton Firulyov",
    gender: "girls",
    company: "electric",
    phone: "+7919489012451",
    email: "test@mail.ru",
    registers: "2003-15-20",
  },
];

function filterUsers(arr, key, value) {
  let res = [];

  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i][key] === value) {
  //     res.push(arr[i]);
  //   }
  // }

  for (item of arr) {
    if (item[key] === value) {
      res.push(item);
    }
  }

  console.log(res);
}

filterUsers(users, "gender", "men");
