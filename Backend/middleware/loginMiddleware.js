

export const loggerMiddleware = (req, res, next) => {
    const method = req.method;       
    const url = req.url;            
    const time = new Date().toISOString(); 
    const body = req.body;           
    
    console.log(`[${time}] ${method} ${url} - Body:`, body);

    next(); 
};
