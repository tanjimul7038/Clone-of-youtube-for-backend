const asyncHandlers = (requestHandler) => {
    return async (req, res, next) =>{
        Promise.resolve(requestHandler(req, res, next))
        .catch((err) => next(err));
    }
};

export {asyncHandlers};



// const asynchandler = () => {}
// const asyncHandler =  (func) => () => {}
// const asyncHandler =  (func) => async () => {}


// const asyncHandler = (fn) => async (req, res, next) => {
//     try {
//         await fn(req, res, next);
//     } catch (error) {
//         next(error);
//     }
// };

