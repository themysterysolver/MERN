export const userController = (req,res)=>{
    const username = req.params.username;
    res.send(`Welcome home ${username}`);
}

export const searchController = (req,res)=>{
    const keyword = req.query.keyword;
    res.send(`searching for ${keyword}`);
}