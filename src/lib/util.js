export const photoToDataURL = (file) =>{
  return new Promise((resolve, reject)=>{
    let reader = new FileReader()
    reader.addEventListener('load', ()=>{
      resolve(reader.result)
    })
    reader.addEventListener('error', ()=>{
      reject(reader.error)
    })
    if(file)
      return reader.readAsDataURL(file)
    return reject(new Error('USAGE ERROR: requires file'))
  })
}

export const readCookie = (name) => {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}


export const log = (...args) => (__DEBUG__ ? console.log(...args) : undefined);

export const logError = (...args) =>
  __DEBUG__ ? console.error(...args) : undefined;

export const renderIf = (test, component) => (test ? component : undefined);

export const classToggler = (config) =>
  Object.keys(config).filter(key => config[key]).join([' ']);
