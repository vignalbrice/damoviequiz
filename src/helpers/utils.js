export const generateRandomNumber = () => {
  return Math.floor(Math.random() * (15 - 13 + 1) + 13);
};

export const generateRandomQuestions = (length, randomNumber) => {
  return Array(length)
    .fill(true)
    .fill(false, randomNumber)
    .sort(() => Math.random() - 0.5);
};
