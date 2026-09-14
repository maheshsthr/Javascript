const student = {
    firstname : "Mahesh",
    lastname : "Suthar",
    course : "BS Computer Applications",
    age : 21,
    fullname : function() {
        return this.firstname + " " + this.lastname
    }
}

console.log(student.fullname())

console.log(student)