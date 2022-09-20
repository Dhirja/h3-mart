const express = require("express");
const mongoose = require('mongoose')
const multer = require('multer')
const product  = require('./model/productSchem')
const xlsx = require('xlsx')
const axios = require('axios');
const { response } = require("express");

const app = express();

mongoose.connect('mongodb://localhost:27017/Productdatas').then(() => {   
    console.log('database connected')
});

const xlsStorage = multer.diskStorage({
    destination: 'uploads', 
      filename: (req, file, cb) => {
          cb(null, file.originalname)
    }
});