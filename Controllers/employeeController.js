const viewAssignedTickets=(req,res,next)=>{
    res.send("view assigned tickets")
}


const updateTicketStatusById=(req,res,next)=>{
    req.send("update Ticket Status")
}


const addCommentToTickets=(req,res,next)=>{
    req.send("add comments t tickets")
}


const viewCommentsTicketById=(req,res,next)=>{
    res.send("view comment to tickets")
}
module.exports={viewAssignedTickets,updateTicketStatusById,addCommentToTickets,viewCommentsTicketById}