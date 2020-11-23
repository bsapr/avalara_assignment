                                  <!-- Distributed filesystem API (Avalara assignment) -->
1. Install all the required dependencies.

2. Description :- This API exposes the key value like filesystem to the clients using which client can put and fetch the key/value data using the given endpoints. It is designed as a distributed API which serves the write/fetch services across multiple ports.

3. Workflow methodology :- 
		--> We pass the list of port numbers as an argument to our API while starting the service so that service can be supported on multiple ports in parallel along with data synchronization.
		--> API would capture the input port numbers and would dynamically set up the seperate framework including routes, controllers and file system for new port as requested by client.
		--> API is maintaining the filestorage for "8000" port by default and taking it as a reference for maintaining data synchronization across all the filesystem for each port.
        -->	Whenever our service finds the request for new port, it would create a seperate file system for the new port by taking the reference from "8000" port's file system.
		-->	CSV format has been chosen for filesystem as write operation in csv is quite optimized whereas it needs to read and put whole json data in memory and then push the new data which is not an efficient approach.
		--> File reading is being done using readStream in order to avoid memory issue in big data files.
		--> Write operation is being done by simply appending the data at the end of file. 
		--> API would be maintaining a lookup file for the list of ports which have already been registered to our API so that whenever the request comes for writing new data through any port, it would copy the new data across file system corresponding to each port.
		--> In case of chai mocha unit testing, service would run on port 8000 by default. Writing and reading test has been done in test->index.js
		
4. Steps to start the service :-
	
	 --> To start the service on multiple ports, use the following command with any number of ports as argument as per your requirement :-
		node index.js 8000 8002 8004 8008 8012      
	
	 --> For chai/mocha unit testing :-
		npm test
				
5. Each API details :-

--> localhost:8000/read/key2 -- This endpoint is used to read the value for the corresponding key(here "key2").
-->localhost:8002/read/key2,localhost:8004/read/key2 - Any port would work fine but port number should have passed while starting the service(node index.js 8000 8002 8004)

--> localhost:8000/set -- This endpoint is used to put key and value into filesystem and service would write it across all the ports' filesystem to maintain data synchronization. -- Pass key, value in the body of request. 
-->  localhost:8004/set

	|Distributed Dictionary Avalara API
	|
    |__controllers
	|	|api
    |        |__v2
	|           |__"portnumber" 
    |          		 |__ readData.js
    |           	 |__ writeData.js
    |__ test                               //chai mocha unit testing
        |__ index.js
    |__dataStorage                     
    |   |__ "portnumber(8002)"
    |        |__data.csv
    |   |__ lookup
    |        |__data.csv	
    |__routes                                 
    |   |__ api
    |        |__v2
	|            |__"portnumber"
    |                |__ insert.js
    |                |__ index.js
    |                |__ read.js
	|__utils
    |   |__ controllers_reference   //Controllers files being used as a reference for creating controllers for new port.
    |        |__readData.js    
    |        |__writeData.js
    |   |__ routes_reference     //Routers files being used as a reference for creating controllers for new port.
    |        |__index.js
    |        |__insert.js
    |        |__read.js
    |__ index.js
    |__ package-lock.json
    |__ package.json
    |__ ReadMe.md

				

6. Follow the above steps and you are good to go.
7. Thanks much for reading it :-)