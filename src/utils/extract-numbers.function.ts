export function extractNumbers(input: string): number | undefined {
  // Step 1: Extract numbers using a regular expression
  const numbers = input.match(/\d+/g);

  if (numbers) {
    // Step 2: Join the extracted numbers into a single string
    const joinedNumberString = numbers.join('');

    // Step 3: Convert the joined number string to an integer
    const joinedNumber = parseInt(joinedNumberString, 10);

    if (!isNaN(joinedNumber)) {
      // Check if the conversion resulted in a valid integer
      return joinedNumber;
    }
  }

  // No valid integer found in the input string
  return undefined;
}
