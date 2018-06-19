export default class Rest {
    static async post(url, body) {
        try {
            await console.log('inside rest');
            console.log(url);
            let response = await fetch(url,{
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
              // timeout: 2000,
              body: body
            });
      
            // const response = await fetch(url, {
            //     method: 'GET',
            //     headers: {
            //       Accept: 'application/json, text/javascript, */*; q=0.01',
            //     }
            // });
              // body: JSON.stringify({ 
              //        student_id: u, 
              //        student_password: encryptedp }),
              //    });
            console.log('hello');
            console.log(response);
            let responseJson = await response.json();
            // console.log('response');
            console.log('response: ' + JSON.stringify(responseJson));
            return responseJson;
          } catch (error) {
            console.log('error');
            console.log(error);
            return null;
        }
    }
  }  