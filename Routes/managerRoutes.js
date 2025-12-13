const express = require("express");
const router = express.Router();
const {
  createTicket,
  getAllTickets,
  getTicketByID,
} = require("../Controllers/managerControlls");
const { checkAuth, checkRole } = require("../Middlewares/authMiddleware.js");
const {
  tokenValidator,
  validateMiddleware,
} = require("../Validators/authValidators.js");

router.post(
  "/createTicket",
  tokenValidator,
  validateMiddleware,
  checkAuth,
  checkRole("manager"),
  createTicket
);
router.get(
  "/allTickets",
  tokenValidator,
  validateMiddleware,
  checkAuth,
  checkRole("manager"),
  getAllTickets
);
router.get(
  "/ticketByID/:ticketID",
  tokenValidator,
  validateMiddleware,
  checkAuth,
  checkRole("manager"),
  getTicketByID
);

module.exports = router;
