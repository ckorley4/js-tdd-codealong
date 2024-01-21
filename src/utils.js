// Your code here
function currentAgeForBirthYear(yearofBirth) {
  const date = new Date()
  return date.getFullYear() - parseInt(yearofBirth)
}

export { currentAgeForBirthYear }
