//form.html
function getData()
{
  //gettting the values
  var Name = document.getElementById("name").value;
  var JobTitle = document.getElementById("job-title").value;
  var Email = document.getElementById("email").value;
  var Phone = document.getElementById("mobile-number").value;
  var Address = document.getElementById("address").value;
  
  var Summary = document.getElementById("summary").value;
  var Experience = document.getElementById("experience").value;
  var C1 = document.getElementById("class1").value;
  var O1 = document.getElementById("college-name1").value;
  var Y1 = document.getElementById("year-of-passing1").value;
  var P1 = document.getElementById("percentage1").value;
  
  var C2 = document.getElementById("class2").value;
  var O2 = document.getElementById("college-name2").value;
  var Y2 = document.getElementById("year-of-passing2").value;
  var P2 = document.getElementById("percentage2").value;
  
  var C3 = document.getElementById("class3").value;
  var O3 = document.getElementById("college-name3").value;
  var Y3 = document.getElementById("year-of-passing3").value;
  var P3 = document.getElementById("percentage3").value;
  
  var C4 = document.getElementById("class4").value;
  var O4 = document.getElementById("college-name4").value;
  var Y4 = document.getElementById("year-of-passing4").value;
  var P4 = document.getElementById("percentage4").value;
  
  var Skills = document.getElementById("skills").value;
  var Hobbies = document.getElementById("hobbies").value;
  
  var PIName = document.getElementById("p-i-name").value;
  var FatherName = document.getElementById("p-i-father").value;
  var DOB = document.getElementById("date-of-birth").value;
  var Gender = document.getElementById("gender").value;
  var MaritalStatus = document.getElementById("marital-status").value;
  var Nationality = document.getElementById("nationality").value;
  var Objective = document.getElementById("objective").value;
  
  var FooterPlace = document.getElementById("place").value;
  var FooterDate = document.getElementById("footer-date").value;
  
  //saving the values in local storage
  localStorage.setItem("userName", Name);
  localStorage.setItem("userJobTitle", JobTitle);
  localStorage.setItem("userEmail", Email);
  localStorage.setItem("userPhone", Phone);
  localStorage.setItem("userAddress", Address);
  
  localStorage.setItem("userSummary", Summary);
  localStorage.setItem("userExperience", Experience);
  
  localStorage.setItem("userC1", C1);
  localStorage.setItem("userO1", O1);
  localStorage.setItem("userY1", Y1);
  localStorage.setItem("userP1", P1);
  
  localStorage.setItem("userC2", C2);
  localStorage.setItem("userO2", O2);
  localStorage.setItem("userY2", Y2);
  localStorage.setItem("userP2", P2);
  
  localStorage.setItem("userC3", C3);
  localStorage.setItem("userO3", O3);
  localStorage.setItem("userY3", Y3);
  localStorage.setItem("userP3", P3);
  
  localStorage.setItem("userC4", C4);
  localStorage.setItem("userO4", O4);
  localStorage.setItem("userY4", Y4);
  localStorage.setItem("userP4", P4);
  
  localStorage.setItem("userSkills", Skills);
  localStorage.setItem("userHobbies", Hobbies);
  
  localStorage.setItem("userPIName", PIName);
  localStorage.setItem("userFatherName", FatherName);
  localStorage.setItem("userDOB", DOB);
  localStorage.setItem("userGender", Gender);
  localStorage.setItem("userMaritalStatus", MaritalStatus);
  localStorage.setItem("userNationality", Nationality);
  localStorage.setItem("userObjective", Objective);
  
  localStorage.setItem("userFooterPlace", FooterPlace);
  localStorage.setItem("userFooterDate", FooterDate);
  
}
