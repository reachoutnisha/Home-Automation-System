# Home Automation System APIs

## Introduction 

A server-side API based solution where a user can remotely controls devices at home. This solution is developed using Express Js on top of Node Js with MongoDB as the database. 

## Objective 
For the Position of Back-End Developer.

**Requirement**: To create APIs for below scenarios: 
1. List all smart devices
2. Add new smart device
3. Perform an operation on a device 
4. Remove an installed device


## Getting Started
- cloned the repository
- Make sure your local machine has the node Js, npm and MongoDB installed in it, and you have an active internet connection.
- To build the project navigate to the project folder (home-automation-system) and execute the command **npm install**. This will download all the necessary dependencies.
- Before running node commands, make sure to run mongod command from console to get connected to the database.
- To test these APIs, use postman. Import the Postman APIs collection kept in the root directory of the project (**Home Automation System.postman_collection.json**) and start testing.

## Instructions
To review the project you can manually go through the project folders or follow the instructions below. Necessary scripts are also provided in the package.json file to do the required task of starting the server. To simplify, some necessary commands to run the project are as follows.
- Navigate to the home-automation-system/ and execute the command **npm start** in the console to get the server started.



## Make Requests

After all these set up configured, you are now good to go. Navigate to the http://localhost:5500/. The required URIs and necessary information to make requests to the server are provided there. Moreover for the sake of convenience instructions are also given below.

Note: Postman could be used to send the payload and get the response back from the server. And CORS are also enabled to consume the RestFul APIs from other origins.

### 1. POST/api/device

This request will accept the payload (like one given below) to add a new device and save the smart device to the database.


**Required payload**
```  
{
	"name" : "Camera",
	"company_name" : "Canon",
	"description" : "Smart Camera",
	"model_no" : "cam-1111-can",
	"device_type" : "camera",
	"device_features" : {"height": "20", "width": "30"},
	"device_properties" : {
		                "lock-status" : "false"
	                     }
} 
```

**Server response**
```  
{
    "message": "Device Installed",
    "smartdevice": {
        "device_status": "disconnected",
        "_id": "5e865db92f31627fdd43dd09",
        "name": "Camera",
        "company_name": "Canon",
        "description": "Smart Camera",
        "model_no": "cam-1111-can",
        "device_type": "camera",
        "device_features": {
            "height": "20",
            "width": "30"
        },
        "device_properties": {
            "turn-on": false,
            "lock-status": "false"
        },
        "__v": 0
    }
}
```
### 2. GET/api/device

This request will show the list of all the device added to the database.

### 3. GET/api/device/:id

This request will show the device with specific id provided in the url.

### 4. PUT/api/device/:id

This request will accept the payload (like one given below) to perform an operation on a particular device with the provided id.


**Required payload**
```  
{	
        "turn-on-status" : "true"
} 
```

**Server response**
```  
{
    "device_status": "connected",
    "_id": "5e823b8d99aa4e5c8f83f017",
    "name": "Smart TV",
    "company_name": "Samsung",
    "description": "Smart Television",
    "model_no": "tv-1111-sam",
    "device_type": "television",
    "device_features": {
        "height": "40",
        "width": "45",
        "screen": "LED"
    },
    "device_properties": {
        "turn-on-status": "true",
        "lock-status": "false"
    },
    "__v": 0
}
```
### 5. PATCH/api/device/:id
This request will accept the payload (like one given below) to update/modify properties of a particular device with the provided id.
**Required payload**
```  
{
	"name" : "Smart TV"
} 
```

**Server response**
```  
{
    "device_status": "connected",
    "_id": "5e823b8d99aa4e5c8f83f017",
    "name": "Smart TV",
    "company_name": "Samsung",
    "description": "Smart Television",
    "model_no": "tv-1111-sam",
    "device_type": "television",
    "device_features": {
        "height": "40",
        "width": "45",
        "screen": "LED"
    },
    "device_properties": {
        "turn-on-status": "false",
        "lock-status": "false"
    },
    "__v": 0
}
```

### 6. DELETE/api/device/:id
This request will delete a particular device with the provided id in the url.

## What could be done with more time ?

1. More validations can be done.
3. Data Formatting(more sanitized)

2. Refactorization of the app.js like separate route folders can be created for each smart devices to perform operations.
