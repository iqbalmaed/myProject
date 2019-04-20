const contacts = [
  {
    id: 1,
    fullName: "Genna Arnli",
    phoneNumber: "5278765234",
    email: "garnli0@photobucket.com",
    gender: "Female"
  },
  {
    id: 2,
    fullName: "Jojo Scotchford",
    phoneNumber: "7925766855",
    email: "jscotchford1@booking.com",
    gender: "Female"
  },
  {
    id: 3,
    fullName: "Kakalina Pietasch",
    phoneNumber: "3118199662",
    email: "kpietasch2@auda.org.au",
    gender: "Female"
  },
  {
    id: 4,
    fullName: "Araldo Coil",
    phoneNumber: "5887272284",
    email: "acoil3@behance.net",
    gender: "Male"
  },
  {
    id: 5,
    fullName: "Shadow Maffi",
    phoneNumber: "8455497996",
    email: "smaffi4@bravesites.com",
    gender: "Male"
  }
];

//pencarian
// if(document.getElementById("finder").length!=0){

// }

// mengambil data
function view(contacts) {
  let tbody = document.getElementById("table-row");
  contacts.map((contacts, index) => {
    let row = tbody.insertRow();
    let id = row.insertCell(0);
    let fullName = row.insertCell(1);
    let phoneNumber = row.insertCell(2);
    let email = row.insertCell(3);
    let gender = row.insertCell(4);
    id.innerHTML = contacts.id;
    fullName.innerHTML = contacts.fullName;
    phoneNumber.innerHTML = contacts.phoneNumber;
    email.innerHTML = contacts.email;
    gender.innerHTML = contacts.gender;
  });
}
function add() {
  const fullName1 = document.getElementById("fname");
  const phoneNumber1 = document.getElementById("pnumber");
  const email1 = document.getElementById("email");

  // buat data pada radio
  var gender1;
  if (document.getElementById("r1").checked) {
    gender1 = document.getElementById("r1");
  } else if (document.getElementById("r2").checked) {
    gender1 = document.getElementById("r2");
  }

  const tambah = {
    id: 6,
    fullName: fullName1.value,
    phoneNumber: phoneNumber1.value,
    email: email1.value,
    gender: gender1.value
  };

  // Validation form
  if (
    fullName1.value.length == 0 ||
    phoneNumber1.value.length == 0 ||
    email1.value.length == 0 ||
    gender1.value.length == 0
  ) {
    alert("must be filled out");
    return false;
  } else {
    document.getElementById("table-row").innerHTML = "";
    let result = [...contacts, tambah];
    view(result);
  }

  // )|| isNaN(phoneNumber1.value)||isNaN(email1.value)
  //     || isNaN(gender1.value))
}

function edit(data, id) {
  // array.filter
  console.log(typeof id);
  let baru = contacts.find(function(item) {
    return item.id == 1;
  });
  baru.fullName = data.fullName;
  baru.phoneNumber = data.phoneNumber;
  baru.email = data.email;
  baru.gender = data.gender;
  console.log(contacts);

  // spread operator ...
}

function remove(data, idnya) {
  // array.fil`ter
  var removeIndex = contacts
    .map(function(item) {
      return item.id;
    })
    .indexOf(idnya);
  // spread operator ....
  contacts.splice(removeIndex, 1);
  console.log(contacts);
}

// ambil data dari html
function addData() {
  var fullname = document.getElementById("fname");
  var ponenumber = document.getElementById("pnumber");
  var emaile = document.getElementById("email");
  console.log(fullname);
  console.log(ponenumber);
  console.log(emaile);
}

view(contacts);
//add(id_baru);
//edit(id_baru, 1);
//remove(contacts, 1);
