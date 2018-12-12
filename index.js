function takeANumber(currentLine,name) {
  currentLine.push(name);
  return `Welcome ${name}. you are ${currentLine} in line.`
}
function nowServing(currentLine){
  currentLine.shift(name);
  if (currentLine>0){
    return "Currently serving "+currentLine.shift()+"."
}
  else {
    return `There is nobody waiting to be served!`;
  }
}
function currentLine(line){
  return `"The line is currently: ${currentLine}"`;
  if (currentLine>0){
    return `"The line is currently empty."`;
  }
}
