fetch("https://api.github.com/users")
.then((response)=>response.json())
.then((data)=>{
    console.log(data)
// ----------------------------------- 1 ---------------------------------
document.getElementById("profileImg1").setAttribute("src",data[9].avatar_url)
document.getElementById("username1").innerText = data[9].login
document.getElementById("profile1").setAttribute("href",data[9].html_url)
document.getElementById("foll1").setAttribute("href",data[9].followers_url)
document.getElementById("follow1").setAttribute("href",data[9].following_url)
// ----------------------------------- 2 ---------------------------------
document.getElementById("profileImg2").setAttribute("src",data[23].avatar_url)
document.getElementById("username2").innerText = data[23].login
document.getElementById("profile2").setAttribute("href",data[23].html_url)
document.getElementById("foll2").setAttribute("href",data[23].followers_url)
document.getElementById("follow2").setAttribute("href",data[23].following_url)
// ----------------------------------- 3 ---------------------------------
document.getElementById("profileImg3").setAttribute("src",data[5].avatar_url)
document.getElementById("username3").innerText = data[5].login
document.getElementById("profile3").setAttribute("href",data[5].html_url)
document.getElementById("foll3").setAttribute("href",data[5].followers_url)
document.getElementById("follow3").setAttribute("href",data[5].following_url)
// ----------------------------------- 4 ---------------------------------
document.getElementById("profileImg4").setAttribute("src",data[12].avatar_url)
document.getElementById("username4").innerText = data[12].login
document.getElementById("profile4").setAttribute("href",data[12].html_url)
document.getElementById("foll4").setAttribute("href",data[12].followers_url)
document.getElementById("follow4").setAttribute("href",data[12].following_url)
// ----------------------------------- 5 ---------------------------------
document.getElementById("profileImg5").setAttribute("src",data[20].avatar_url)
document.getElementById("username5").innerText = data[20].login
document.getElementById("profile5").setAttribute("href",data[20].html_url)
document.getElementById("foll5").setAttribute("href",data[20].followers_url)
document.getElementById("follow5").setAttribute("href",data[20].following_url)
// ----------------------------------- 6 ---------------------------------
document.getElementById("profileImg6").setAttribute("src",data[16].avatar_url)
document.getElementById("username6").innerText = data[16].login
document.getElementById("profile6").setAttribute("href",data[16].html_url)
document.getElementById("foll6").setAttribute("href",data[16].followers_url)
document.getElementById("follow6").setAttribute("href",data[16].following_url)
// ----------------------------------- 7 ---------------------------------
document.getElementById("profileImg7").setAttribute("src",data[3].avatar_url)
document.getElementById("username7").innerText = data[3].login
document.getElementById("profile7").setAttribute("href",data[3].html_url)
document.getElementById("foll7").setAttribute("href",data[3].followers_url)
document.getElementById("follow7").setAttribute("href",data[3].following_url)
// ----------------------------------- 8 ---------------------------------
document.getElementById("profileImg8").setAttribute("src",data[7].avatar_url)
document.getElementById("username8").innerText = data[7].login
document.getElementById("profile8").setAttribute("href",data[7].html_url)
document.getElementById("foll8").setAttribute("href",data[7].followers_url)
document.getElementById("follow8").setAttribute("href",data[7].following_url)
// ----------------------------------- 9 ---------------------------------
document.getElementById("profileImg9").setAttribute("src",data[10].avatar_url)
document.getElementById("username9").innerText = data[10].login
document.getElementById("profile9").setAttribute("href",data[10].html_url)
document.getElementById("foll9").setAttribute("href",data[10].followers_url)
document.getElementById("follow9").setAttribute("href",data[10].following_url)
// ----------------------------------- 10 ---------------------------------
document.getElementById("profileImg10").setAttribute("src",data[0].avatar_url)
document.getElementById("username10").innerText = data[0].login
document.getElementById("profile10").setAttribute("href",data[0].html_url)
document.getElementById("foll10").setAttribute("href",data[0].followers_url)
document.getElementById("follow10").setAttribute("href",data[0].following_url)
// ----------------------------------- 11 ---------------------------------
document.getElementById("profileImg11").setAttribute("src",data[25].avatar_url)
document.getElementById("username11").innerText = data[25].login
document.getElementById("profile11").setAttribute("href",data[25].html_url)
document.getElementById("foll11").setAttribute("href",data[25].followers_url)
document.getElementById("follow11").setAttribute("href",data[25].following_url)
// ----------------------------------- 12 ---------------------------------
document.getElementById("profileImg12").setAttribute("src",data[18].avatar_url)
document.getElementById("username12").innerText = data[18].login
document.getElementById("profile12").setAttribute("href",data[18].html_url)
document.getElementById("foll12").setAttribute("href",data[18].followers_url)
document.getElementById("follow12").setAttribute("href",data[18].following_url)

})



