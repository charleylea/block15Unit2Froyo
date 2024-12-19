let flavors = window.prompt("Enter your flavors below");

console.log(flavors);

// Check if the user entered something
if (flavors) {
  let flavorArray = flavors.split(",");

  console.log(flavorArray);

  // Create an object to track the count of each flavor
  let flavorCount = {};

  flavorArray.forEach((flavor) => {
    // Trim any spaces around the flavor name and convert to lowercase to handle case sensitivity
    flavor = flavor.trim().toLowerCase();

    // If the flavor is already in the object, increment the count, otherwise add it with a count of 1
    if (flavorCount[flavor]) {
      flavorCount[flavor]++;
    } else {
      flavorCount[flavor] = 1;
    }
  });

  // Log the flavor counts
  console.table(flavorCount);
} else {
  console.log("No flavors entered.");
}
