"use strict";
let Student1Admission = Object.assign(Object.assign({ name: 'Muhammad Suleman', fatherName: 'Talib Hussain', age: 21, phoneNumber: 22266666, hobbies: ['playing', 'reading', 'cooding'] }, GetCurrentDate()), { Addres: {
        country: 'pakistan',
        city: 'karachi',
        near: 'korangi karachi'
    } });
function GetCurrentDate() {
    const today = new Date();
    return {
        date: today.getDate(),
        month: today.getMonth() + 1,
        year: today.getFullYear(),
    };
}
function inform() {
    const { date, month, year } = GetCurrentDate();
    const { name, fatherName, age, Addres: { country, city, near }, phoneNumber, hobbies } = Student1Admission;
    const address = `${Student1Admission.Addres.country} ${Student1Admission.Addres.city} ${Student1Admission.Addres.near}`;
    return `Dear ${name},\n\nThank you for your recent job application .the receive at this date ${date}/${month}/${year} We're pleased to confirm that we have received it. Here are the details:\n\nName: ${name}\nFather's Name: ${fatherName}\nID: ${phoneNumber}\nAge: ${age}\nAddress: ${address}\nCity: ${city}\nCountry: ${country}\n\nWe will review your application and be in touch with you soon.\n\nBest regards,\nThe Hiring Team\n ${hobbies[2]} ${near}`;
}
console.log(Student1Admission);
console.log(GetCurrentDate());
console.log(inform());
