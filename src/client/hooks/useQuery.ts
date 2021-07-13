import React, { useState } from 'react';
import { useToasts } from 'react-toast-notifications';

import APIKit from '../api/APIKit';
import { ErrorHandler } from '../utils/error-handle-response';
import { RequestProps } from '../types';

export default function useFetch() {
  const { addToast } = useToasts();

  const onFailure = (error: any) => {
    const { errMessage = '' } = ErrorHandler(error.response || error);
    addToast(errMessage, { appearance: 'error' });
  };
  const fetchData = async ({ method, url, payloadData = null, sucessMessage = '' }: RequestProps) => {
    try {
      return await APIKit({
        method,
        url: url,
        data: payloadData ? { data: payloadData } : undefined
      })
        .then((res: { data: any }) => {
          if (sucessMessage) {
            addToast(sucessMessage, { appearance: 'success' });
          }
          return res.data || res;
        })
        .catch(onFailure);
    } catch (err) {
    } finally {
    }
  };

  return { fetchData };
}
