import axios from 'axios';
import { useState } from 'react';

export default ({url, method, body, onSuccess}) => {
  const [errors, setErrors ] = useState(null);

  const doRequest = async () => {
    try{
      setErrors(null);
      const response = await axios[method](url, body);

      if( onSuccess ){
        onSuccess();
      }
      return response.data;
    }catch(err){
      console.log(err);
      setErrors(
        <div className="alert alert-danger mt-4">
          <h4>Ooops...</h4>
          <ul>
            {err.response.data.errors.map((err) => (
              <li key={err.message}>{err.message}</li>
            ))}
          </ul>
        </div>
      );
    }
  };

  return {
    doRequest,
    errors
  };
}
