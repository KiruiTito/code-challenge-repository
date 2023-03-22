const marks = prompt("Enter student marks (0-100): ");

if (marks >= 80) {
  console.log("Grade A");
} else if (marks >= 60 && marks < 80) {
  console.log("Grade B");
} else if (marks >= 50 && marks < 60) {
  console.log("Grade C");
} else if (marks >= 40 && marks < 50) {
  console.log("Grade D");
} else {
  console.log("Grade E");
}
