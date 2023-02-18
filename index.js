// Code your solution here
const driversArray = [];
for(const element of drivers){
  let driver = element.name;
  driversArray.push(driver);
};
 
function findMatching(array, name){
    const match = array.filter(el => el.toLowerCase() === name.toLowerCase())
    return match;
};
function fuzzyMatch(array, name){
    const match = array.filter(el => el[0] === name[0])
    return match;
};
function matchName(array, string){
    const match = array.filter(el => el.name === string)
    return match;
};