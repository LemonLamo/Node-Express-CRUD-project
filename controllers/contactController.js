const asyncHandler = require('express-async-handler');
const Contact = require("../models/contactModel");

//@desc get all contacts
//@route GET /api/contacts
//@access Public 

const getContacts = asyncHandler(async (req, res) => {
    const contacts = await Contact.find();
    res.status(200).json(
       contacts
    );
});

//@desc get contact
//@route GET /api/contacts/:id
//@access Public 

const getContact = asyncHandler(async (req, res) => {
      const contact = await Contact.findById(req.params.id);

      if (!contact) {
        res.status(404);
        throw new Error("Contact not Found");
      }

    res.status(200).json(
        contact
    );
});

//@desc create new contact
//@route POST /api/contacts
//@access Public 

const createContact = asyncHandler(async (req, res) => {
    // Whenever you need to accept some data from the client to our server
    // We need to use a body parser so that we can parse the stream of the data
    // For that, we have to use middleware
    console.log("The request body is:", req.body);
    const { name, email, phone } = req.body;

    if (!name || !email || !phone) {
        res.status(400); // 400 Bad Request
        throw new Error("All fields are mandatory");
    }
    const contact = await Contact.create({
        name,
        email,
        phone
    });

    // The status code 201 is for: resource created
    res.status(201).json(
     contact
    );
});

//@desc update contact
//@route PUT /api/contacts/:id
//@access Public 

const updateContact = asyncHandler(async (req, res) => {
    res.status(200).json(
        {
            message: `Update a contact for ${req.params.id}`
        }
    );
});

//@desc delete contact
//@route DELETE /api/contacts/:id
//@access Public 

const deleteContact = asyncHandler(async (req, res) => {
    res.status(200).json(
        {
            message: `Delete contact for ${req.params.id}`
        }
    );
});

module.exports = { getContacts, getContact, createContact, updateContact, deleteContact };

// Every time we interact with MongoDB we always get a promise, so in order to resolve that promise
// we need to use async and await
