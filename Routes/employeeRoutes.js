const express = require("express");
const router = express.Router();
const {
  viewAssignedTickets,
  updateTicketStatusById,
  addCommentToTickets,
  viewCommentsTicketById,
} = require("../Controllers/employeeController.js");

const {
  tokenValidator,
  validateMiddleware,
} = require("../Validators/authValidators.js");

const {checkAuth,checkRole}=require("../Middlewares/authMiddleware.js")
router.get(
  "/viewTickets",
  tokenValidator,
  validateMiddleware,
  checkAuth,
  checkRole("employee"),
  viewAssignedTickets
);
router.put(
  "/updateTicketStatus/:ticketID",
  tokenValidator,
  validateMiddleware,
  checkAuth,
  checkRole("employee"),
  updateTicketStatusById
);
router.post(
  "/addCommentToTickets/:ticketID",
  tokenValidator,
  validateMiddleware,
  checkAuth,
  checkRole("employee"),
  addCommentToTickets
);
router.get(
  "/viewCommentTicket/:ticketID",
  tokenValidator,
  validateMiddleware,
  checkAuth,
  checkRole("employee"),
  viewCommentsTicketById
);

module.exports = router;
