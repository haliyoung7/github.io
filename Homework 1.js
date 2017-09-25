var companyNames = ["Kroger", "Safeway", "King Soopers", "Publix", "Albertsons"]

var sillyAnimals = ["spiny lumpsucker", "pleasing fungus beetle", "pink fairy armadillo", "tassled wobegong", "chicken turtle"]

for (i = 0; i < companyNames.length; i++) {
  console.log("My company is a " + companyNames[i] + " for " + sillyAnimals[i])
}

function shuffle(companyNames) {
  var ctr = companyNames.length, temp, index;
  
  while(ctr > 0) {
    index = Math.floor(Math.random() * ctr);
    ctr--;
    
    temp = companyNames[ctr];
    companyNames[ctr] = companyNames[index];
    companyNames[index] = temp;
  }
  return companyNames;
}
var companyNames = ["Kroger", "Safeway", "King Soopers", "Publix", "Albertsons"]
console.log(shuffle("My company is a " + companyNames[i] + " for " + sillyAnimals[i]));

console.log(shuffle(companyNames));


function shuffle(sillyAnimals) {
  var ctr1 = sillyAnimals.length, temp, index;
  
  while(ctr1 > 0) {
    index = Math.floor(Math.random() * ctr1);
    ctr--;
    
    temp = sillyAnimals[ctr1];
    sillyAnimals[ctr1] = sillyAnimals[index];
    sillyAnimals[index] = temp;
  }
  return sillyAnimals;
}
var sillyAnimals = ["spiny lumpsucker", "pleasing fungus beetle", "pink fairy armadillo", "tassled wobegong", "chicken turtle"]
//console.log(shuffle("My company is a " + companyNames[i] + " for " + sillyAnimals[i]));

console.log(shuffle(sillyAnimals));

var companyNames = ["Kroger", "Safeway", "King Soopers", "Publix", "Albertsons"]

var sillyAnimals = ["spiny lumpsucker", "pleasing fungus beetle", "pink fairy armadillo", "tassled wobegong", "chicken turtle"]

for (ctr = 0; ctr < companyNames.length; ctr++) {
  console.log("My company is a " + shuffle(companyNames[ctr]) + " for " + sillyAnimals[ctr1])
}