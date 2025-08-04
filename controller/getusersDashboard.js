// controllers/internController.js

import interns from "../models/Intern.models.js"
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";

 const getUsersDashboard = asyncHandler(async (req, res) => {
  const totalInterns = interns.length;
  const totalDonations = interns.reduce((sum, intern) => sum + (intern.donations || 0), 0);

  if(!totalInterns||!totalDonations){
    throw new ApiError(400,"Not Found")
  }

  res.status(200).json(new ApiResponse(200,{
    success: true,
    totalInterns,
    totalDonations,
    data: interns,
  },"All data fetchecd sucessfully"));
});


export{
    getUsersDashboard
}