const mongoose = require('mongoose')

const TestASchema = new mongoose.Schema({
    // orderID: {
    //     type: String,
    //     required: true
    // },
    code1: {
        type: String,
        default: ''
    },
    first1: {
        type: String,
        required: true
    },
    middle1: {
        type: String,
        default: "",
    },
    last1: {
        type: String,
        required: true
    },
    dob1: {
        type: String,
        required: true
    },
    ethnicity1: {
        type: String,
        required: true
    },
    gender1: {
        type: String,
        required: true
    },
    email1: {
        type: String,
        required: true
    },
    phone1: {
        type: String,
        required: true
    },
    alt_email: {
        type: String,
        required: true
    },
    no_client_email: {
        type: String,
        default: null
    },
    a1street1: {
        type: String,
        required: true
    },
    a1city1: {
        type: String,
        required: true
    },
    a1postcode1: {
        type: String,
        required: true
    },
    a1country1: {
        type: String,
        required: true
    },
    isol_street1: {
        type: String,
        default: ''
    },
    isol_city1	: {
        type: String,
        default: ''
    },
    isol_pcode1: {
        type: String,
        default: ''
    },
    isol_country1: {
        type: String,
        default: ''
    },
    passport1: {
        type: String,
        required: true
    },
    vac_stat1: {
        type: String,
        required: true
    },
    vac_type1: {
        type: String,
        required: true
    },
    addPerson: {
        type: String,
        default: "1"
    },
    code2: {
        type: String,
        default: ''
    },
    first2: {
        type: String,
        default: ''
    },
    middle2: {
        type: String,
        default: ''
    },
    last2: {
        type: String,
        default: ''
    },
    dob2: {
        type: String,
        default: ''
    },
    passport2: {
        type: String,
        default: ''
    },
    vac_type2: {
        type: String,
        default: ''
    },
    code3: {
        type: String,
        default: ''
    },
    first3: {
        type: String,
        default: ''
    },
    middle3: {
        type: String,
        default: ''
    },
    last3: {
        type: String,
        default: ''
    },
    dob3: {
        type: String,
        default: ''
    },
    passport3: {
        type: String,
        default: ''
    },
    vac_type3: {
        type: String,
        default: ''
    },
    code4: {
        type: String,
        default: ''
    },
    first4: {
        type: String,
        default: ''
    },
    middle4: {
        type: String,
        default: ''
    },
    last4: {
        type: String,
        default: ''
    },
    passport4: {
        type: String,
        default: ''
    },
    vac_type4: {
        type: String,
        default: ''
    },
    flight1date1: {
        type: String,
        required: true
    },
    transitFlightDate1: {
        type: String,
        required: true
    },
    flight1country1: {
        type: String,
        required: true
    },
    flightNo1: {
        type: String,
        required: true
    },
    transitFlightCountry1: {
        type: String,
        default: ''
    },
    transitFlightNo1: {
        type: String,
        default: ''
    },
    service: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    account_type: {
        type: String,
        required: true
    },
    date_collected: {
        type: String,
        required: true
    },
    test_service: {
        type: String,
        required: true
    },
    home_kit: {
        type: String,
        default: ''
    },
    formsubmitted: {
        type: String,
        default: 'TRUE'
    },
    submitBtn: {
        type: String,
        default: 'Book'
    },
})

module.exports = mongoose.model('Day2test', TestASchema)