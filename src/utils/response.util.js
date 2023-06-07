const responseStatus = (status, res) => {
  if (!status) {
    res.status(500).send({ error: "Internal server error" });
  }
}

export default responseStatus