const Contact=require('../modals/contact-modal');

// Function to handle contact form submission

const contactForm=async(req,res)=>{
    try {
        const response=req.body;
        await Contact.create(response);
        res.status(200).json({message:"Contact form submitted successfully"});
        
    } catch (error) {
        return res.status(500).json({message:"Internal server error", error: error.message});
    }
}

module.exports={contactForm};