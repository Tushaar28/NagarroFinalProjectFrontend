import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

export function fakeBackendFactory(
    backend: MockBackend, 
    options: BaseRequestOptions) {
        
  let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IlR1c2hhYXIgVGl3YXJpIiwiaWF0IjoxNTE2MjM5MDIyLCJhZG1pbiI6dHJ1ZX0.DW0pz1GeHz6ZwnKpu-OwLPsUNT8JUp7E13yhAGg_bmQ';
  
  //Token with admin : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IlR1c2hhYXIgVGl3YXJpIiwiaWF0IjoxNTE2MjM5MDIyLCJhZG1pbiI6dHJ1ZX0.DW0pz1GeHz6ZwnKpu-OwLPsUNT8JUp7E13yhAGg_bmQ
  //Token without admin : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IlR1c2hhYXIgVGl3YXJpIiwiaWF0IjoxNTE2MjM5MDIyLCJhZG1pbiI6ZmFsc2V9.4XfEZDyFQFIQqpT6C-qZ0zOwpoyV97Tqz3iksJtg8uk 
  
  backend.connections.subscribe((connection: MockConnection) => {
    // We are using the setTimeout() function to simulate an 
    // asynchronous call to the server that takes 1 second. 
    setTimeout(() => {
      //
      // Fake implementation of /api/authenticate
      //
      if (connection.request.url.endsWith('/api/authenticate') &&
        connection.request.method === RequestMethod.Post) {
        let body = JSON.parse(connection.request.getBody());

        if (body.userName === 'tushaar' && body.password === '1234') {
          connection.mockRespond(new Response(
            new ResponseOptions({
              status: 200,
              body: { token: token }
           })));
        } else {
          connection.mockRespond(new Response(
            new ResponseOptions({ status: 200 })
          ));
        }
      }



       // 
       // Fake implementation of /api/orders
       //
       if (connection.request.url.endsWith('/api/orders') && 
           connection.request.method === RequestMethod.Get) {
         if (connection.request.headers.get('Authorization') === 'Bearer ' + token) {
            connection.mockRespond(new Response(
              new ResponseOptions({ status: 200, body: [1, 2, 3] })
         ));
       } else {
           connection.mockRespond(new Response(
             new ResponseOptions({ status: 401 })
           ));
       }
    }



    }, 1000);
  });

  return new Http(backend, options);
}

export let fakeBackendProvider = {
    provide: Http,
    useFactory: fakeBackendFactory,
    deps: [MockBackend, BaseRequestOptions]
};