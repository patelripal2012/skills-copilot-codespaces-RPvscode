...
// Create a new comment
router.post('/', async (req, res) => {
  try {
    const { error } = validateComment(req.body);
    if (error) return res
// Create web server
...