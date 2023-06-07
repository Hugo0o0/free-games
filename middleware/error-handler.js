export const errorHandler = (err, req, res, next) => {
  console.log(err);

  res.status(err.response?.status || 500).render("error", {
    error: {
      message:
        err.response.data.message ||
        err.response.data.status_message ||
        "Something went wrong",
      status: err.response?.status || 500,
    },
  });
};
