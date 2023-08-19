export function generateRandomReferralCode(): string {
  const codeLength = 5;
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let referralCode = '';

  // Generate the first part of the referral code using random characters
  for (let i = 0; i < codeLength - 1; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    referralCode += characters[randomIndex];
  }

  // Generate the second part of the referral code using the last digit of the current timestamp
  const timestampPart = Date.now().toString();
  referralCode += timestampPart[timestampPart.length - 1];

  return referralCode.toLowerCase();
}

export function generateUniqueCode() {
  // Generate a random 3-digit number
  const code = Math.floor(Math.random() * 1000);
  return code; // Return the 3-digit number
}
