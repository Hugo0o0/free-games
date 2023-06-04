export const errorHandler = (err, req, res, next) => {
  console.log(err.response.data);

  res.status(err.response.status).render("error", {
    error: {
      message: err.response.data.message || err.response.data.status_message,
      status: err.response.status,
    },
  });
};
