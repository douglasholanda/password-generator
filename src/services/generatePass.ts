export default function generatePass(passLength: number) {
  let pass = "";

  const possibleLetters = "A1234C56@D7$E8^F9+GH9,I!>JKL#MN$s]e[OrtPsQRSTUVXYZ";

  for (let index = 0; index < passLength; index++) {
    pass =
      pass +
      possibleLetters[Math.floor(Math.random() * possibleLetters.length)];
  }

  console.log("pass: ", pass);
  return pass;
}
