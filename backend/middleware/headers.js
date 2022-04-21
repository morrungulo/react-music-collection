const preferMinimalOrRepresentation = (req, res, next) => {
  req.minimal = true
  if (req.headers.hasOwnProperty('prefer')) {
    const found = req.headers.prefer.toLowerCase().match(/return=(representation|minimal)/)
    if (found) {
      res.set('Preference-Applied', found[0])
      req.minimal = found[1] === 'minimal'
    }
  }
  next()
}

module.exports = {
  preferMinimalOrRepresentation,
}