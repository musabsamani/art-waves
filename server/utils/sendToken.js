const sendToken = (user, statusCode, res) => {
  console.log({ token: 0 });
  const token = user.getJWTToken();
  console.log({ token });

  const options = {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };
  console.log({ options });

  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    user,
    token,
  });
};

module.exports = sendToken;
