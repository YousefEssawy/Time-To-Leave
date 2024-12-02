// script.js
function calculateLeavingTime() {
  // Get the input value
  const arrivalTimeInput = document.getElementById("arrivalTime").value;

  // Validate input
  if (!arrivalTimeInput) {
    alert("Please enter your arrival time.");
    return;
  }

  // Parse the input time
  const [hours, minutes] = arrivalTimeInput.split(":").map(Number);

  // Create a Date object for arrival time
  const arrivalTime = new Date();
  arrivalTime.setHours(hours, minutes, 0);

  // Add 8 hours and 30 minutes
  const leavingTime = new Date(
    arrivalTime.getTime() + (8 * 60 + 30) * 60 * 1000
  );

  // Format leaving time as hh:mm AM/PM
  const options = { hour: "2-digit", minute: "2-digit", hour12: true };
  const formattedLeavingTime = leavingTime.toLocaleTimeString([], options);

  // Display the result
  document.getElementById(
    "result"
  ).textContent = `You should leave the office by: ${formattedLeavingTime}`;
}
