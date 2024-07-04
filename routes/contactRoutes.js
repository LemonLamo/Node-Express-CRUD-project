const express = require("express");
const router = express.Router();

// Importing the controller
const { getContacts, getContact, createContact, updateContact, deleteContact } = require("../controllers/contactController");

// Configuring the routes on this router

// Define HTTP methods in our router
router.route("/").get(getContacts).post(createContact);

// Define other methods following the same pattern
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

// Export our router
module.exports = router;
