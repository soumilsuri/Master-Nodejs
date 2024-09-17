import express from 'express';
import users from './MOCK_DATA.json' assert { type: 'json' };
import { check, validationResult } from 'express-validator';

const app = express();
const PORT = 8000;

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware 1: Check if user is an admin
const isAdmin = (req, res, next) => {
  const admin = users.find(user => user.id === parseInt(req.params.adminId) && user.role === 'admin');
  if (admin) {
    next();
  } else {
    res.status(403).send('Only admins can access this route');
  }
};

// Middleware 2: Log request
const logRequest = (req, res, next) => {
  console.log(`Request: ${req.method} ${req.url}`);
  next();
};

// Middleware 3: Express-validator validation
const validateUser = [
  check('first_name').isLength({ min: 3, max: 20 }).withMessage('First name must be between 3 and 20 characters'),
  check('last_name').isLength({ min: 3, max: 20 }).withMessage('Last name must be between 3 and 20 characters'),
  check('email').isEmail().withMessage('Must be a valid email'),
];

// Route with multiple middlewares
app.delete('/api/users/:adminId', isAdmin, logRequest, validateUser, (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const userIdToDelete = req.query.userId;

  // Check if userIdToDelete is provided
  if (!userIdToDelete) {
    return res.status(400).send('User ID to delete is required');
  }

  // Find the user to delete
  const userIndex = users.findIndex(user => user.id === parseInt(userIdToDelete));

  // Check if user exists
  if (userIndex === -1) {
    return res.status(404).send('User not found');
  }

  // Delete the user
  users.splice(userIndex, 1);
  res.send(users);
});

app.listen(PORT, () => console.log(
  `Server is running on http://localhost:${PORT}`
));
