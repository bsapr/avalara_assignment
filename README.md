                                  <!-- Hospital API for COVID Patient -->
1. Install all the required dependencies.
2. In order to make the API work. Please replace the gmail id and password with your own credentials as the following :-

	config -> nodemailer.js 
	
	auth: {
        user: 'bhavyasapra96@gmail.com',
        pass: '1234'
    }	

3. Implementation of all six routes stated below : 
       --> localhost:8000/api/v1/doctors/register   : POST
		-> Body :- email, password, confirm_password, name

       --> localhost:8000/api/v1/doctors/login      : POST
		->  Body :- email, password
       --> localhost:8000/api/v1/patients/register  : POST
		-> Body :- name, mobile, email
		-> Headers :- key:- authorization ; value : Bearer "replace it with your JWTToken" e.g. Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjA5Y2NjYzNiZjk2ODIyYjQ2YzczYjQiLCJuYW1lIjoiYmhhdnlhIiwiZW1haWwiOiJiaGF2eWFzYXByYTk2QGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiMTIzIiwiY3JlYXRlZEF0IjoiMjAyMC0wNy0xMVQxNDoyOTozMi4xMTZaIiwidXBkYXRlZEF0IjoiMjAyMC0wNy0xMVQxNDoyOTozMi4xMTZaIiwiX192IjowLCJpYXQiOjE1OTQ1NTQ2NDUsImV4cCI6MTU5NDY1NDY0NX0.vnRu0bbA7mhaHzwa8kqJsHd9Q2x-6qQbuS029dFR7Vk
       --> localhost:8000/api/v1/patients/:id/create_report :POST 
		-> Body :- comments, status
		-> Headers :- key:- authorization ; value : Bearer "replace it with your JWTToken"
       --> localhost:8000/api/v1/patients/:id/all_reports  :POST
		-> Body :- password (random password which patient must have got through mail)
       --> localhost:8000/api/v1/reports/:status  :GET

       <!-- First and Second Route can be used to register the doctor itself and generating bearer token respectively --> 
       <!-- Third, Fourth and Fifth route is authorized by JWT, so you have to pass bearer token in header which is generated from (doctors/login) route -->
       <!-- Only fifth route(:id/all_reports) can be accessed by patient to view their all reports til now by passing their patient_id in params and sending password through post request-->
       <!-- In place of :id, you have to pass patient id  -->
       <!-- In place of :status, you have to pass status for filtering reports -->
       <!-- Pass the required data through the body -->


                                                     <!-- IMPORTANT TO NOTE -->
3. On registering the patient by doctor, a random password is generated and added in corresponding database and the same will be send to patient via email so that patient can see his report using that password.





                                            <!-- Each API details -->
--> localhost:8000/api/v1/doctors/register -- This endpoint is used to register the doctor. -- Pass email, password, name in the body of request.

--> localhost:8000/api/v1/doctors/login -- This endpoint is used to login a doctor generate token for autherization. -- Pass email, password in the body of request.

--> localhost:8000/api/v1/patients/register -- This endpoint is used by a doctor to register a patient using doctor's token generated from "localhost:8000/api/v1/doctors/login". -- Pass name, contact, password of patient in the body of request and Pass doctor's token in header of the request.

--> localhost:8000/api/v1/patients/:id/create_report -- This endpoint is used by a doctor to create report of patient. -- Pass status, comments in the body of request and Pass patient_id in request as a parameters and Pass token in header part of the request(header --> authorization --> bearer token_generated).

--> localhost:8000/api/v1/patients/:id/all_reports -- This endpoint is used by a patient to view their all reports. -- Pass 'patient-id' in request as a parameter and Pass 'patient_password' in body of the request.

--> localhost:8000/api/v1/reports/:status -- This endpoint is used by a doctor to check all their generated reports till date according to the status. -- Pass status in request as a parameter and token in header part of the request(header --> authorization --> bearer token_generated).


	|__HOSPITAL API
    |__config
    |   |__ mongoose.js
    |   |__ nodemailer.js
    |   |__ passport-jwt-strategy.js
    |__controllers
    |   |__
    |      |__ doctors_register.js
    |      |__ patients_api.js
    |      |__ reports_api.js
    |__ mailers
        |__ password_mailer.js
    |__models
    |   |__ doctor.js
    |   |__ patient.js
    |   |__ report.js
    |__routes
    |   |__ api
    |        |__v1
    |           |__ doctor.js
    |           |__ index.js
    |           |__ patient.js
    |           |__ report.js
    |        |__ index.js
    |   |__ index.js
    |
    |__ index.js
    |__ package-lock.json
    |__ package.json
    |__ ReadMe.md

				

4. Dependencies used are-->{
    "bcrypt": "^5.0.0",
    "bcryptjs": "^2.4.3",
    "connect-mongo": "^2.0.3",
    "dotenv": "^8.2.0",
    "express": "^4.16.4",
    "generate-password": "^1.5.1",
    "jsonwebtoken": "^8.5.1",
    "mongoose": "^5.4.6",
    "passport": "^0.4.0",
    "passport-jwt": "^4.0.0",
    "twilio": "^3.48.0"
    }
5. Follow above steps and you are good to go.
6. Thanx for reading.