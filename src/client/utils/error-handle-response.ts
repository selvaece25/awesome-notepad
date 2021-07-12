import { ErrorCode } from '@/constants/errorConstants';

export const ErrorHandler = (responses: { status: any; data: any })=>{
    const status = responses.status;
    const { code = '', data = '', message='', field='' } = (responses && responses.data && responses.data.errors) ? responses.data.errors[0] : { };
    switch (status) {
        case 204:
          return { success: 'OK' };
        case 400:
            let text = '';
            if (code && data && data.length) {
                text =  ErrorCode[`${code}`];
              } else if (code || field || message) {
                text = (code) ? ErrorCode[`${code}`] : `${message}`;
              } else {
                text = 'Bad Request';
              }
          return {errMessage: text };
  
        case 401:
          return { errMessage: ErrorCode['401']};
  
        case 426:
        case 409:
          return { errMessage: ErrorCode['409'] };
  
        case 403:
          return {errMessage:  ErrorCode['403']};
  
        case 404:
          return { errMessage: ErrorCode['404']};
  
        case 500:
          return { errMessage: ErrorCode['500']};
  
        case 503:
          return { errMessage: ErrorCode['500']};
        case 504:
          return { errMessage: ErrorCode['500']};
  
        default:
          return { errMessage: 'General error. Please try agian' };
      }
}