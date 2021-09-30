const express = require('express')
const dotenv = require('dotenv')
const router = express.Router()
const path = require('path');
const Day2test = require('../config/models/Day2test');
const Item = require('../config/models/Item');
const fs = require("fs");
const { debug } = require('console');
const { ifError } = require('assert');

const stripesecretkey = process.env.STRIPE_SECRET_KEY
const stripepublickey = process.env.STRIPE_PUBLIC_KEY

// Day 2 test
router.get('/d2', (req, res) => {
    //res.render('daytwo')
    })

// Day 2 and 8 tests
router.get('/d28', (req, res) => {
    res.render('d28.ejs')
})

//submit day 2 and 8
router.post('/8dt', (req, res) => {
    if (DbInsert(req.body)){}
    Item.findOne({itemId: 'd28'}, (err,obj) => { 
        if (err){
            res.status(500).end()
        }
        else{
            res.render('payment.ejs',{PriceID: obj.priceID})
        }              
    })
})

function DbReadId(itemid) {
    const result = Item.findOne({itemId: itemid})
    return result
}

const DbInsertTemp = async () => {
    const data = {
        itemId: "d28",
        itemName: "Day 2 and 8 test",
        priceID: "prod_KJduY1H8gWaIEQ"}
    
    const data2 = {
        itemId: "d2",
        itemName: "Day 2 test",
        priceID: "prod_KJduDUPAxrH4kw"}
        
    leg = await Item.create(data)
    back = await Item.create(data2)
    return back
}


const DbInsert = async (userdata) => {
    const testdata = {
        first1: userdata.first1,
        middle1: userdata.middle1,
        last1: userdata.last1,
        dob1: userdata.dob1,
        ethnicity1: userdata.ethnicity1,
        gender1: userdata.gender1,
        email1: userdata.email1,
        phone1: userdata.phone1,
        alt_email: userdata.alt_email,
        no_client_email: userdata.no_client_email,
        a1street1: userdata.a1street1,
        a1city1: userdata.a1city1,
        a1postcode1: userdata.a1postcode1,
        a1country1: userdata.a1country1,
        isol_street1: userdata.isol_street1,
        isol_city1: userdata.isol_city1,
        isol_pcode1: userdata.isol_pcode1,
        isol_country1: userdata.isol_country1,
        passport1: userdata.passport1,
        vac_stat1: userdata.vac_stat1,
        vac_type1: userdata.vac_type1,
        flight1date1: userdata.flight1date1,
        transitFlightDate1: userdata.transitFlightDate1,
        flight1country1: userdata.flight1country1,
        flightNo1: userdata.flightNo1,
        transitFlightCountry1: userdata.transitFlightCountry1,
        transitFlightNo1: userdata.transitFlightNo1,
        service: userdata.service,
        location: 'AF001',
        account_type: userdata.account_type,
        date_collected: userdata.date_collected,
        test_service: userdata.test_service,
        home_kit: userdata.home_kit,
        formsubmitted: 'TRUE'
    }
    try {
        datasubmitted = await Day2test.create(testdata)
        console.log(datasubmitted);
        return datasubmitted
    } catch (err) {
        return false
        console.error(err)
    } 
}

module.exports = router