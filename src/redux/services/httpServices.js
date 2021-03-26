import { getConfigurations, handleDispatch, handleErrors } from "./httpConfig";
import axios from 'axios';

//http post request without tokens
export const httpPost = (requestConfig) => {

  const url = requestConfig.url;
  const actionTypes = requestConfig.actionTypes;
  const data = requestConfig.data;
  const isAuth = requestConfig.isAuth;
  const isFormData = requestConfig.isFormData;
  const timeout = requestConfig.timeout;

  return async(dispatch)=>{

    dispatch({ type: actionTypes.REQUEST_ACTION })

    const configurations = await getConfigurations('post',url,data,isAuth,isFormData,timeout);

    console.log( '<<<<-----DN-get-httpService [HTTPPOST]------->>>>')
    axios(configurations)
      .then((res)=>{
            const result = res.data;

            if (result && result.code) {
              if (parseInt(result.code) >= 400) {
                handleDispatch(dispatch,actionTypes.FAILED_ACTION,{code: parseInt(result.code), result: result.result})
              } else {
                handleDispatch(dispatch,actionTypes.SUCCESS_ACTION,{code: parseInt(result.code), result: result.result})
              }
            } else {
              handleDispatch(dispatch,actionTypes.SUCCESS_ACTION,null)
            }
      })
      .catch((error)=>{
            console.log(error)
            handleErrors(error,dispatch,actionTypes,{forceRequest: ()=>httpPost(requestConfig)});
      })
  }
}





//http get requests without tokens
export const httpGet = (requestConfig) => {

  const url = requestConfig.url;
  const actionTypes = requestConfig.actionTypes;
  const isAuth = requestConfig.isAuth;
  const isFormData = requestConfig.isFormData;
  const timeout = requestConfig.timeout;

  return async(dispatch)=>{

    dispatch({ type: actionTypes.REQUEST_ACTION })

    const configurations = await getConfigurations('get',url,null,isAuth,isFormData,timeout);

    axios(configurations)
      .then((res)=>{
            const result = res.data;
            console.log(result , '  <<<<<<<<<<<<<<<<<<DN-get-httpService')
            if (result && result.code && parseInt(result.code) < 300) {
              handleDispatch(dispatch,actionTypes.SUCCESS_ACTION,{code: parseInt(result.code), result: result.result})
            } else {
              handleDispatch(dispatch,actionTypes.FAILED_ACTION,{code: 500, result: result?.result})
            }
          })
      .catch((error)=>{
            console.log(error)
            handleErrors(error,dispatch,actionTypes,{forceRequest: () => httpGet(requestConfig)});
    })

  }
}





//external API calls
export const httpGetExternal = (requestConfig) => {

  const url = requestConfig.url;
  const actionTypes = requestConfig.actionTypes;

  return async(dispatch)=>{

    dispatch({ type: actionTypes.REQUEST_ACTION })

    axios.get(url)
      .then((res)=>{
          const result = res.data;
          console.log(result)

          if (result) {
            handleDispatch(dispatch,actionTypes.SUCCESS_ACTION,{code: 200, result: result})
          }
    })
      .catch((error)=>{
            console.log(error)
            handleDispatch(dispatch,actionTypes.FAILED_ACTION,{code: 500, result: 'Internal Server Error'});
      })
  }
}
