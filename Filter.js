const data1 = [{
    employeeID: "1001",
    employeeName: "Robert Downey",
    designation: "Developer",
    phoneNumber: "408-1234567",
    emailAddress: "robert.downey@gmail.com",
},
{
    employeeID: "1002",
    employeeName: "Chris Hemsworth",
    designation: "Developer",
    phoneNumber: "603-1234598",
    emailAddress: "chris.hemsworth@gmail.com",
},
{
    employeeID: "1003",
    employeeName: "Will Smith",
    designation: "Developer",
    phoneNumber: "103-8756982",
    emailAddress: "will.smith@gmail.com",
},
{
    employeeID: "1002",
    employeeName: "Bruce Banner",
    designation: "Developer",
    phoneNumber: "906-4568521",
    emailAddress: "bruce.banner@gmail.com",
}];
function filter(data) {
    const filtered = data.filter((item, index) => {
        const dataitem = item.employeeID;
        console.log(dataitem, "dataitemdataitemdataitem")
        return item.employeeID == "1001"
    }
    )
    return filtered;
}
filter(data1)
// console.log(filter(data1))