const bcrypt = require("bcrypt");

const saltRounds = 10;

const encryptPassword = async (password) => {
  const encrypted = await bcrypt.hash(password, saltRounds);
  return encrypted;
  // bcrypt.hash(password, saltRounds, (err, encrypted) => {
  //   if (err) {
  //     callback(err, null);
  //   } else {
  //     callback(null, encrypted);
  //   }
  // });
};

const checkPassword = async (password, encryptedPassword) => {
  const match = await bcrypt.compare(password, encryptedPassword);
  return match;

  // bcrypt.compare(password, encryptedPassword, (err, result) => {
  //   if (err) {
  //     callback(err, null);
  //   } else {
  //     callback(null, result);
  //   }
  // });
};

const functionWithCallback = () => {
  encryptPassword((err, encrypted) => {
    if (err) {
      console.error("Error encrypting password:", err);
      return;
    }
    console.log("Encrypted password:", encrypted);

    checkPassword(encrypted, (err, result) => {
      if (err) {
        console.error("Error checking password:", err);
        return;
      }

      console.log("Password match:", result);
    });
  });
};

const normalFucntion = async () => {
  const encrypted = await encryptPassword("mypassword123");
  console.log("Encrypted password:", encrypted);

  const result = await checkPassword("mypassword123", encrypted);
  console.log("Password match:", result);
};
