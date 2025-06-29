const { PrismaClient } = require("@prisma/client");
const express = require("express");
// We are now creating an HTTP server instance
const app = express();

const prisma = new PrismaClient();
app.use(express.json());
// get =  localhost:3000 students  fetch  all  the data
app.get("/students", async (req, res) => {
  // data from frrontend

  // db logic
  const studentdata = await prisma.user.findMany();
  //  data to frontend
  res.send(studentdata);
});

// get = localhost:3000/students/:rollno  fetch    a student  data
app.get("/students/:roll_no", async (req, res) => {
  // 1.data from frontend
  const data = req.params; //{roll_no="1"}
  // 2.db logic
  const studentdata = await prisma.user.findUnique({
    where: {
      roll_no: data.roll_no,
    },
  });
  // 3. data to frontend
  res.send(studentdata);
});

// post = localhost300/student/add a student
app.post("/students", async (req, res) => {
  // 1. data from frontend
  const data = req.body;
  console.log(data);
  // 2. db logic
  const newstudentdata = await prisma.user.create({
    data: {
      roll_no: data.roll_no,
      name: data.name,
      age: parseInt(data.age), // ensure it's an integer
      blood_group: data.blood_group, // <-- correct field name
    },
  });
  // 3. data to frontend
  res.send(newstudentdata);
});

// PUT – localhost:3000/students/ – Update a the Student in DB
app.put("/students", async (req, res) => {
  // 1. Data from Frontend
  const data = req.body;

  // 2. DB Logic
  const newUpdatedStudent = await prisma.user.update({
    where: {
      roll_no: data.roll_no,
    },
    data: {
      name: data.name,
      age: data.age,
      blood_group: data.blood_group, // <-- Added blood_group field
    },
  });

  // 3. Data to Frontend
  res.send(newUpdatedStudent);
});


// DEL - localhost:3000/students/ - Delete a the Student in DB
app.delete("/students", async (req, res) => {
  // 1. Data from Frontend
  const data = req.body;

  // 2. DB Logic
  await prisma.user.delete({
    where: {
      roll_no: data.roll_no,
    },
  });

  // 3. Data to Frontend
  res.send("Delete the Student");
});



// // put localhost300 update a student data
// app.put("students", async (req, res) => {
//   // data from frontend
//   const data = req.body;
//   // db logic
//   const updatestudentdata = await prisma.user.update({
//     where: {
//       roll_no: data.roll_no,
//     },
//     data: {
//       name: data.name,
//       roll_no: data.roll_no,
//       age: data.age, // ensure it's an integer
//       blood_group: data.blood_group, // <-- correct field name
//     },
//   });
//   // data to frontend
//   res.send(updatestudentdata);
// });

// Start the server
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
