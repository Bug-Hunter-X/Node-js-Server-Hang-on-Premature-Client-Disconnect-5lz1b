# Node.js Server Hang on Premature Client Disconnect

This repository demonstrates a common issue in Node.js servers where the server hangs if a client closes the connection before the server has finished sending a response. This is often due to a lack of proper handling of the 'close' event on the request object. The server should gracefully handle premature client disconnections to prevent memory leaks and ensure responsiveness.

## Bug

The `bug.js` file contains a Node.js server that simulates a long-running operation. If the client closes the connection before the operation completes, the server hangs and may not be able to handle further requests. 

## Solution

The `bugSolution.js` file provides a corrected version of the server, adding an event listener for the 'close' event on the request object. This event listener ensures that resources are properly released, preventing the server from hanging.