module.exports.use404 = (req, res, next) => {
  res.status(404).json({ error: 'unknown endpoint' })
}

module.exports.use5xx = (error, req, res, next) => {
  console.log(error)
  const status = error.status || 500
  const message = error.message || 'unknown server error'
  res.status(status).json({ error: message })
}