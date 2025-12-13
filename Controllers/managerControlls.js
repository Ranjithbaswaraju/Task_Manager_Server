
const createTicket=(req,res)=>{
    res.send("ticket created succesfully")
}

const getAllTickets=(req,res)=>{
    res.send("all tickets")
}

const getTicketByID=(req,res)=>{
    res.send("get Ticket By ID")
}

module.exports={createTicket,getAllTickets,getTicketByID}