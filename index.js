// code your solution here
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}
function mondayWork(activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
}
// console.log(mondayWork("hello"));
function wrapAdjective(adjective = "*") {
  return function (param = "special") {
    return `You are ${adjective}${param}${adjective}!`;
  };
}

// let result = wrapAdjective('*')
// let emphatic = result("a hard worker")
// expect(emphatic).to.equal("You are *a hard worker*!")
console.log(mondayWork());
console.log(mondayWork("work from home"));
