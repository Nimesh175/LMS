
const basicToastConfig = {
  visibilityTime: 4000,
  autoHide: true,
  position: 'top',
  topOffset: 5
}

export const getToast = (obj) => {
  if (typeof obj === 'object' && obj.code && obj.code === 203) {
    return {
      ...basicToastConfig,
      type:  'success',
      text1: 'Success!',
      text2: obj.result
    }
  } else if (typeof obj === 'object' && obj.code && obj.code > 200 && obj.code < 300) {
    return {
      ...basicToastConfig,
      type: 'info',
      text1: 'Info!',
      text2: obj.result
    }
  } else if (typeof obj === 'object' && obj.code && obj.code > 400) {
    return {
      ...basicToastConfig,
      type: 'error',
      text1: 'Problem!',
      text2: obj.result
    }
  } else {
    return null
  }
}
